import { BlogPost } from '../types/blog'

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    status: 'published',
    title: 'Getting Started with Next.js 14',
    content: 'Next.js has become one of the most popular React frameworks for building modern web applications. In this comprehensive guide, we will explore the key features that make Next.js special, including server-side rendering, static site generation, and the new App Router. Whether you are a beginner or an experienced developer, this post will help you understand why Next.js is the go-to choice for React applications.',
    author: 'Sarah Chen',
    publishedDate: '2024-01-15',
    category: 'Web Development',
    seoTitle: 'Complete Next.js 14 Guide for Beginners',
    metaDescription: 'Learn Next.js 14 from scratch with this comprehensive tutorial covering App Router, SSR, and modern development practices.',
    heroImage: '/images/nextjs-guide.jpg',
    heroImageAlt: 'Next.js logo with code in the background',
    tags: ['nextjs', 'react', 'tutorial', 'beginner']
  },
  {
    id: '2',
    slug: 'typescript-best-practices',
    status: 'published',
    title: 'TypeScript Best Practices for 2024',
    content: 'TypeScript has revolutionized how we write JavaScript applications by adding static type checking. In this article, we will dive deep into the best practices that every TypeScript developer should know. From proper interface design to advanced type manipulation, we will cover everything you need to write maintainable and scalable TypeScript code.',
    author: 'Alex Rodriguez',
    publishedDate: '2024-01-10',
    category: 'Programming',
    seoTitle: 'TypeScript Best Practices Guide 2024',
    metaDescription: 'Master TypeScript with these essential best practices for writing clean, maintainable code in 2024.',
    keywords: 'typescript, best practices, programming, javascript',
    heroImage: '/images/typescript-tips.jpg',
    heroImageAlt: 'TypeScript code on a computer screen',
    tags: ['typescript', 'javascript', 'best-practices', 'advanced']
  },
  {
    id: '3',
    slug: 'building-responsive-designs',
    status: 'published',
    title: 'Building Responsive Designs with Tailwind CSS',
    content: 'Responsive design is crucial in today\'s multi-device world. Tailwind CSS makes it incredibly easy to build responsive layouts with its mobile-first approach and intuitive class system. In this tutorial, we will build a complete responsive website from scratch, exploring grid systems, breakpoints, and advanced responsive techniques.',
    author: 'Maria Garcia',
    publishedDate: '2024-01-08',
    category: 'CSS',
    metaDescription: 'Learn how to create beautiful responsive designs using Tailwind CSS mobile-first approach.',
    heroImage: '/images/responsive-design.jpg',
    heroImageAlt: 'Multiple devices showing a responsive website',
    tags: ['typescript', 'javascript', 'best-practices', 'advanced']
  },
  {
    id: '4',
    slug: 'javascript-async-patterns',
    status: 'draft',
    title: 'Modern JavaScript Async Patterns',
    content: 'Asynchronous programming is at the heart of modern JavaScript development. From callbacks to promises to async/await, the landscape has evolved significantly. This article explores the latest patterns and best practices for handling asynchronous operations in JavaScript applications.',
    author: 'David Kim',
    publishedDate: '2024-01-12',
    category: 'JavaScript',
    seoTitle: 'JavaScript Async Programming Guide',
    keywords: 'javascript, async, promises, async await',
    tags: ['typescript', 'javascript', 'best-practices', 'advanced']
  },
  {
    id: '5',
    slug: 'web-performance-optimization',
    status: 'published',
    title: 'Web Performance Optimization Techniques',
    content: 'Website performance directly impacts user experience and SEO rankings. In this comprehensive guide, we will explore various techniques to optimize your web applications, including image optimization, code splitting, lazy loading, and performance monitoring tools.',
    author: 'Emma Thompson',
    publishedDate: '2024-01-05',
    category: 'Performance',
    seoTitle: 'Ultimate Web Performance Optimization Guide',
    metaDescription: 'Boost your website speed with proven performance optimization techniques and tools.',
    keywords: 'web performance, optimization, speed, seo',
    heroImage: '/images/performance-metrics.jpg',
    heroImageAlt: 'Performance metrics dashboard showing improved scores',
    tags: ['typescript', 'javascript', 'best-practices', 'advanced']
  }
]