"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;

  if (!title || !content || !excerpt || !author) {
    throw new Error("All fields are required");
  }

  const slug = generateSlug(title);

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      excerpt,
      author,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath(`/posts/${slug}`);
  redirect("/admin");
}

export async function updatePost(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;

  if (!title || !content || !excerpt || !author) {
    throw new Error("All fields are required");
  }

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { slug: true },
  });

  const slug = generateSlug(title);

  await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      content,
      excerpt,
      author,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath(`/posts/${slug}`);
  if (existingPost && existingPost.slug !== slug) {
    revalidatePath(`/posts/${existingPost.slug}`);
  }
  redirect("/admin");
}

export async function deletePost(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
    select: { slug: true },
  });

  await prisma.post.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  if (post) {
    revalidatePath(`/posts/${post.slug}`);
  }
  redirect("/admin");
}
