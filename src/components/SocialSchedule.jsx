import Graph from './../images/illustration-schedule-posts.webp'

function SocialSchedule({ className }) {
  return (
      <div className={`form max-w-300MW flex justify-center items-center p-32P text-center xl:text-start text-black flex-col bg-purple-100 rounded-10BR ${className}`}>
        <h2 className='text-md-1 xl:text-2xl font-semibold leading-4 xl:leading-tight mb-16M'>Schedule to social media.</h2>
        <div className="xl:overflow-x-hidden xl:w-full static xl:relative xl:left-32I">
          <img className='xl:scale-100 static xl:relative xl:left-86.4I' src={Graph}alt="schedule social" />
        </div>
        <p className='leading-4 xl:leading-5 mt-16M text-md xl:text-lg'>
          Optimize post timings to publish content at the perfect time for your audience.
        </p>
      </div>
  )
}

export default SocialSchedule
