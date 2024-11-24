import Audience from './../images/illustration-audience-growth.webp'

function Growth({ className }) {
  return (
    <div className={`form 3xs:max-w-300MW flex 3xs:justify-start xl:justify-center items-start p-16P pl-16P pr-80P xl:pr-48P text-start text-black flex-col bg-white rounded-10BR ${className}`}>
      <h1 className='text-3xl font-semibold'>
        &gt; 56%
      </h1>
      <p className='mb-32M text-md xl:text-lg'>
        faster audience growth
      </p>
      <img className='w-4/5' src={Audience} alt="audience growth" />
    </div>
  )
}

export default Growth
