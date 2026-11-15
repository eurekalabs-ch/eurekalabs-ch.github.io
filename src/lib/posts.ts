import { marked } from 'marked';
// Prism core must be evaluated before the language components, which register
// themselves on it. Highlighting itself runs in the browser via
// Prism.highlightAll() once the rendered HTML is in the DOM (see PostDetail).
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

// Configure marked. Note that marked v5 removed the `highlight`, `langPrefix`,
// `headerIds`, `mangle`, `sanitize`, `smartLists` and `smartypants` options;
// the default renderer already emits <pre><code class="language-x"> for fenced
// blocks, which is what Prism.highlightAll() looks for.
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert line breaks to <br>
});

// Import posts data generated at build time
import postsIndexData from '../data/posts-index.json';

const postsIndex: Post[] = postsIndexData;

export async function getAllPosts(): Promise<Post[]> {
  return postsIndex.map(post => ({
    ...post,
    content: marked(post.content, { async: false })
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = postsIndex.find(p => p.slug === slug);
  if (!post) return null;

  return {
    ...post,
    content: marked(post.content, { async: false })
  };
}