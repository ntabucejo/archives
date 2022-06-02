import Image from 'next/image'
import type { PostInterface } from '../library/interfaces'

const ProfileHeading = ({ imageUrl, username, achievement, isLight }: PostInterface) => {
  return (
    <div className="flex gap-4 items-center mb-4 relative z-10">
      <div className={`relative w-7 h-7 ring-2 ring-opacity-50 rounded-full overflow-hidden ${isLight ? 'ring-custom-white' : 'ring-black'}`}>
        <Image
          src={imageUrl!}
          layout="fill"
          objectFit="cover"
          alt={username}
        />
      </div>

      <div>
        <h1 className={`font-medium ${isLight ? 'text-custom-white' : 'text-black'}`}>{username}</h1>
        <h2 className={`text-opacity-50 text-sm ${isLight ? 'text-custom-white' : 'text-black'}`}>{achievement}</h2>
      </div>
    </div>
  )
}

export default ProfileHeading
