import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const posts = [
    {
      title: "Getting Started with Next.js",
      slug: "getting-started-with-nextjs",
      excerpt: "Learn how to build modern web applications with Next.js, React, and TypeScript.",
      content: `Next.js is a powerful React framework that makes building web applications a breeze. In this post, we'll explore the fundamentals of Next.js and why it's become such a popular choice for developers.

## What is Next.js?

Next.js is a React framework that enables you to build server-side rendered and static web applications. It provides a great developer experience with features like automatic code splitting, hot module replacement, and built-in routing.

## Key Features

1. **Server-Side Rendering**: Improve performance and SEO with server-side rendering
2. **Static Site Generation**: Generate static HTML at build time for blazing-fast pages
3. **API Routes**: Build your API endpoints directly in your Next.js app
4. **File-based Routing**: Simple and intuitive routing based on your file structure

## Getting Started

To create a new Next.js app, simply run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

That's it! You're ready to start building your application.`,
      author: "Admin",
    },
    {
      title: "Understanding TypeScript",
      slug: "understanding-typescript",
      excerpt: "TypeScript adds static typing to JavaScript, making your code more reliable and maintainable.",
      content: `TypeScript has revolutionized the way we write JavaScript. By adding static types, it helps catch errors early and makes your code more maintainable.

## Why TypeScript?

TypeScript offers several advantages over plain JavaScript:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enjoy autocomplete, refactoring, and inline documentation
- **Enhanced Readability**: Types serve as documentation for your code
- **Easier Refactoring**: Confidently make changes knowing TypeScript will catch issues

## Basic Types

Here are some fundamental TypeScript types:

\`\`\`typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let tags: string[] = ["typescript", "javascript"];
\`\`\`

## Conclusion

TypeScript is an invaluable tool for modern web development. It makes your code more robust and your development experience more enjoyable.`,
      author: "Admin",
    },
    {
      title: "Building Modern UIs with Tailwind CSS",
      slug: "building-modern-uis-with-tailwind",
      excerpt: "Tailwind CSS is a utility-first CSS framework that makes designing beautiful interfaces fast and easy.",
      content: `Tailwind CSS has changed the game for styling web applications. Instead of writing custom CSS, you compose your designs using utility classes.

## What Makes Tailwind Different?

Unlike traditional CSS frameworks that provide pre-built components, Tailwind gives you low-level utility classes that you can compose to build any design.

## Advantages of Tailwind

1. **Rapid Development**: Build UIs faster with utility classes
2. **Consistent Design**: Use a predefined design system
3. **Small Bundle Size**: Only ship the CSS you actually use
4. **Responsive Design**: Built-in responsive utilities make it easy
5. **Customizable**: Easily customize the framework to match your brand

## Example Usage

\`\`\`html
<div class="bg-white shadow-lg rounded-lg p-6 max-w-md">
  <h2 class="text-2xl font-bold mb-4">Card Title</h2>
  <p class="text-gray-600">Card content goes here</p>
</div>
\`\`\`

## Conclusion

Tailwind CSS empowers developers to build beautiful, responsive interfaces quickly and efficiently. Give it a try on your next project!`,
      author: "Admin",
    },
  ];

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log(`Seeded ${posts.length} posts`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
