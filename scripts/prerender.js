#!/usr/bin/env node

/**
 * Emit a real HTML file for every client-side route, so GitHub Pages serves each
 * one with a 200 and its own metadata.
 *
 * Pages publishes static files and cannot rewrite a request, so a BrowserRouter
 * deep link used to fall through to 404.html: the router rendered the right page,
 * but the response said "not found". Crawlers and link unfurlers believe the
 * status line, so no post could be indexed and a pasted link previewed as the
 * homepage, every post carrying the shell's single title and description.
 *
 * Writing dist/posts/<slug>/index.html removes the need for a rewrite rather than
 * working around it. 404.html is still written, for paths that genuinely do not
 * exist.
 *
 * Runs after `vite build`, on the built shell, so the hashed asset URLs are the
 * real ones. Routes come from src/data/posts-index.json, which generate-posts.js
 * derives from posts/*.md, so adding a post stays a matter of adding a Markdown
 * file.
 */

import fs from 'fs';
import path from 'path';

const DIST = 'dist';
const SHELL = path.join(DIST, 'index.html');
const POSTS_INDEX = 'src/data/posts-index.json';
const ORIGIN = 'https://www.eurekalabs.ch';

/** Escape a string for use inside a double-quoted HTML attribute. */
function attr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Replace a tag's content in the shell. `replace` is given a function so that a
 * `$` in a title or excerpt is never read as a capture-group reference.
 */
function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: ${pattern} not found in ${SHELL}; the shell's head changed`);
  }
  return html.replace(pattern, () => replacement);
}

/** Build one page's HTML from the shell. */
function render(shell, { title, description, url, type }) {
  let html = shell;
  const t = attr(title);
  const d = attr(description);
  const u = attr(url);

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = setTag(html, /<meta name="description" content="[\s\S]*?" \/>/, `<meta name="description" content="${d}" />`);
  html = setTag(html, /<link rel="canonical" href="[\s\S]*?" \/>/, `<link rel="canonical" href="${u}" />`);
  html = setTag(html, /<meta property="og:title" content="[\s\S]*?" \/>/, `<meta property="og:title" content="${t}" />`);
  html = setTag(html, /<meta property="og:description" content="[\s\S]*?" \/>/, `<meta property="og:description" content="${d}" />`);
  html = setTag(html, /<meta property="og:type" content="[\s\S]*?" \/>/, `<meta property="og:type" content="${attr(type)}" />`);
  html = setTag(html, /<meta property="og:url" content="[\s\S]*?" \/>/, `<meta property="og:url" content="${u}" />`);
  html = setTag(html, /<meta name="twitter:title" content="[\s\S]*?" \/>/, `<meta name="twitter:title" content="${t}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[\s\S]*?" \/>/, `<meta name="twitter:description" content="${d}" />`);

  return html;
}

function write(routePath, html) {
  const outDir = path.join(DIST, routePath);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
}

function prerender() {
  const shell = fs.readFileSync(SHELL, 'utf8');
  const posts = JSON.parse(fs.readFileSync(POSTS_INDEX, 'utf8'));

  const routes = [
    {
      path: 'posts',
      title: 'Research — EurekaLabs',
      description:
        'How we build and validate an AI Scientist Team for protein drug design, and what the measurements say.',
      type: 'website',
    },
    {
      path: 'careers',
      title: 'Careers — EurekaLabs',
      description: 'Work on an AI Scientist Team that is judged by what the laboratory measures.',
      type: 'website',
    },
    ...posts.map((post) => ({
      path: path.join('posts', post.slug),
      title: `${post.title} — EurekaLabs`,
      description: post.excerpt,
      type: 'article',
    })),
  ];

  for (const route of routes) {
    // Trailing slash: a static host resolves /posts/<slug> to the directory's
    // index.html by redirecting to /posts/<slug>/, so that is the URL served with
    // a 200 and the one canonical should name. React Router matches either.
    write(route.path, render(shell, { ...route, url: `${ORIGIN}/${route.path}/` }));
  }

  // Genuinely unknown paths still need the shell, which renders NotFound.
  fs.writeFileSync(path.join(DIST, '404.html'), shell);

  console.log(`✓ Pre-rendered ${routes.length} routes, plus the 404 fallback`);
  routes.forEach((route) => console.log(`  - /${route.path}`));
}

prerender();
