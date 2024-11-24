import FollowersContentImg from './../images/illustration-grow-followers.webp'

function FollowersContent({ className }) {
  return (
    <div className={`form h-316H 3xs:max-w-300MW xl:max-w-640MW flex justify-center items-center xl:gap-4 py-16P px-48P 3xs:text-center xl:text-start 3xs:flex-col xl:flex-row bg-purple-500 rounded-10BR ${className}`}>
      <img className='w-auto xl:max-w-256MW' src={FollowersContentImg} alt="followers growth" />
      <h2 className='3xs:text-xl xl:text-2-2xl font-semibold 3xs:leading-6 xl:leading-9 text-white mt-32M'>
        Grow followers with non-stop content.
      </h2>
    </div>
  )
}

export default FollowersContent
