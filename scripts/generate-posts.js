#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

const POSTS_DIR = 'posts';
const OUTPUT_FILE = 'src/data/posts-index.json';

async function generatePostsIndex() {
  try {
    // Ensure the data directory exists
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Find all markdown files in posts directory
    const markdownFiles = await glob(`${POSTS_DIR}/**/*.md`);
    
    const posts = [];

    for (const filePath of markdownFiles) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data: frontmatter, content } = matter(fileContent);
        
        // Generate slug from filename
        const slug = path.basename(filePath, '.md');
        
        // Validate required frontmatter
        if (!frontmatter.title || !frontmatter.date || !frontmatter.author || !frontmatter.excerpt) {
          console.warn(`Skipping ${filePath}: Missing required frontmatter (title, date, author, excerpt)`);
          continue;
        }

        posts.push({
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          author: frontmatter.author,
          excerpt: frontmatter.excerpt,
          content: content.trim(),
          filePath
        });
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write the index file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    
    console.log(`✓ Generated posts index with ${posts.length} posts`);
    console.log(`✓ Index saved to ${OUTPUT_FILE}`);
    
    if (posts.length > 0) {
      console.log('\nPosts found:');
      posts.forEach(post => {
        console.log(`  - ${post.title} (${post.date})`);
      });
    }
  } catch (error) {
    console.error('Error generating posts index:', error);
    process.exit(1);
  }
}

generatePostsIndex();