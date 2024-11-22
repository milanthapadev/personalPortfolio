'use client'

import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { Mdx } from "@/components/mdx-components"
import Link from 'next/link'
import { BsArrowBarLeft } from 'react-icons/bs'
import { Metadata } from "next"

interface postPageProps {
  params: {
    slug: string[]
  }
}


async function getpostFromParams(params: { slug: string | string[] }) {
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug || ""
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    notFound()
  }

  return post
}



export async function generateStaticParams(): Promise<
  postPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}


export default async function postPage({ params = {
  slug: []
} }: postPageProps) {

  const post = await getpostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <main>
      <Link href="/posts" className="text-blue-500 dark:text-blue-300 hover:text-blue-700 hover:underline flex items-center space-x-2">
        <BsArrowBarLeft/>
        Back to Posts
      </Link>
    <article className="py-6 prose dark:prose-invert">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Author: Milan Thapa
        </p>
      </div>
      <h1 className="mb-2 inline-block font-heading text-4xl lg:text-5xl">{post.title}</h1>
      {post.description && (
        <p className="text-sm italic mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4 border border-gray-500" />
      <Mdx code={post.body.code} />
    </article>
    </main>
  )
}