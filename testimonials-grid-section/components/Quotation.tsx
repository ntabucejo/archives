import Image from 'next/image'

const Quotation = () => {
  return (
    <blockquote className="absolute w-28 h-28 top-0 right-12 z-10">
      <div className="relative w-full h-full">
        <Image
          src="/images/bg-pattern-quotation.svg"
          layout="fill"
          objectFit="cover"
          alt="quotation"
        />
      </div>
    </blockquote>
  )
}

export default Quotation
