import React from 'react'
import { getLatestPosts } from '@/src/query/post.query';
import { Post } from '@/src/features/layout/post/Post';


export default async function Home() {
 // const session = await getAuthSession();

  const posts = await getLatestPosts();

  // const posts = await prisma.post.findMany({
  //   where: {
  //     parentId: null
  //   },
  //   select: {
  //     id: true,
  //     content: true,
  //     createdAt: true,
  //     user: {
  //       select: {
  //         id: true,
  //         username: true,
  //         image: true
  //       },
  //     },
  //     likes: {
  //       select: {
  //         userId: true
  //       },
  //       where: {
  //         userId: session?.user.id ?? "error"
  //       },
  //     },
  //     _count: {
  //       select: {
  //         likes: true,
  //         replies: true
  //       }
  //     },
  //   }
  // })

  return (

    <div className="divide-y divide-muted">
      {posts.map(p => (
        <Post post={p} key={p.id}/>
      ))}
    </div>
  )
}
