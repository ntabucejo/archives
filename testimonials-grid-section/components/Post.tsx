import type { PostInterface } from '../library/interfaces'
import PostHeading from './PostHeading'
import PostContent from './PostContent'
import Quotation from './Quotation'

const Post = ({ imageUrl, username, achievement, postTitle, postMessage, isLight, backgroundColor }: PostInterface) => {
  return (
    <div className={`relative text-custom-white px-8 py-6 rounded-lg drop-shadow-2xl hover:cursor-pointer
      ${backgroundColor === 'bg-moderate-violet' ? backgroundColor : ''}
      ${backgroundColor === 'bg-very-dark-grayish-blue' ? backgroundColor : ''}
      ${backgroundColor === 'bg-custom-white' ? backgroundColor : ''}
      ${backgroundColor === 'bg-very-dark-blakish-blue' ? backgroundColor : ''}
      ${username === 'Daniel Clifford' ? 'md:col-span-2' : ''}
      ${username === 'Jeanette Harmon' ? 'md:order-3' : ''}
      ${username === 'Patrick Abrams' ? 'md:col-span-2 md:order-4' : ''}
      ${username === 'Kira Whittle' ? 'md:row-span-2 md:order-2' : ''}
      `}
    >

      {username === 'Daniel Clifford' ? <Quotation /> : <></>}

      <PostHeading
        imageUrl={imageUrl}
        username={username}
        achievement={achievement}
        isLight={isLight}
      />

      <PostContent
        postTitle={postTitle}
        postMessage={postMessage}
        isLight={isLight}
      />

    </div >
  )
}

export default Post
