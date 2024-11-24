import Calendar from './../images/illustration-consistent-schedule.webp'

function PostSchedule({ className }) {
  return (
    <div className={`form 3xs:max-w-300MW flex 3xs:justify-start xl:justify-center items-center p-16P pl-0 pb-0 pr-32P xl:pr-0 text-start flex-col bg-yellow-500 rounded-10BR ${className}`}>
      <div className="w-3/4 relative 3xs:right-16I xl:right-0 xl:static">
        <h2 className='text-lg xl:text-2-2xl font-semibold leading-4 xl:leading-8 text-black mb-16M'>
          Maintain a consistent posting schedule.
        </h2>
        <div className="xl:w-full xl:overflow-hidden">
          <img className="static xl:relative xl:top-80I" src={Calendar} alt="calendar" />
        </div>
      </div>
    </div>
  )
}

export default PostSchedule
