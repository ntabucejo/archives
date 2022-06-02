import type { PostInterface } from '../library/interfaces'

const PostContent = ({ postTitle, postMessage, isLight }: PostInterface) => {
  return (
    <div className="relative z-10">
      <h3 className={`text-lg font-medium mb-4 ${isLight ? 'text-custom-white' : 'text-black'}`}>{postTitle}</h3>
      <p className={`text-opacity-70 ${isLight ? 'text-custom-white' : 'text-black'}`}>{postMessage}</p>
    </div>
  )
}

export default PostContent
