import { marked } from 'marked';
import Prism from 'prismjs';
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

// Configure marked for better output with syntax highlighting
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert line breaks to <br>
  headerIds: true, // Add IDs to headers for linking
  mangle: false, // Don't mangle email addresses
  sanitize: false, // Allow HTML (we trust our content)
  smartLists: true, // Use smarter list behavior
  smartypants: true, // Use smart typographic punctuation
  langPrefix: 'language-', // Add language class for Prism
  highlight: function(code, lang) {
    if (lang && Prism.languages[lang]) {
      try {
        const highlighted = Prism.highlight(code, Prism.languages[lang], lang);
        return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
      } catch (err) {
        console.warn('Prism highlighting failed for language:', lang, err);
        return `<pre class="language-${lang}"><code class="language-${lang}">${code}</code></pre>`;
      }
    }
    // For code blocks without language, still wrap them properly
    return `<pre><code>${code}</code></pre>`;
  }
});

// Import posts data generated at build time
import postsIndexData from '../data/posts-index.json';

const postsIndex: Post[] = postsIndexData;

export async function getAllPosts(): Promise<Post[]> {
  return postsIndex.map(post => ({
    ...post,
    content: marked(post.content)
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = postsIndex.find(p => p.slug === slug);
  if (!post) return null;

  return {
    ...post,
    content: marked(post.content)
  };
}