import Post from './Post'
import { data } from '../library/data'
import type { PostInterface } from '../library/interfaces'

const Posts = () => {
  return (
    <section className="md:flex md:items-center h-full">
      <div className="grid gap-6 xl:grid-cols-4 -z-20">
        {data.map((post: PostInterface, idx: number) => (
          <Post key={idx}
            imageUrl={post.imageUrl}
            username={post.username}
            achievement={post.achievement}
            postTitle={post.postTitle}
            postMessage={post.postMessage}
            isLight={post.isLight}
            backgroundColor={post.backgroundColor}
          />
        ))}
      </div>
    </section>
  )
}

export default Posts
