import Stars from './../images/illustration-five-stars.webp'

function Social({ className }) {
  return (
    <div className={`form 3xs:max-w-300MW xl:max-w-640MW p-32P text-center flex flex-col justify-center items-center bg-purple-500 rounded-10BR ${className}`}>
      <h1 className='text-2-4xl xl:text-4xl font-semibold text-white mb-16M leading-tight'>
        Social Media <span className='text-yellow-500 font-normal'>10x</span> <span className='italic'>Faster</span> with AI
      </h1>

      <img className='max-w-208MW' src={Stars}alt="5 star review" />

      <p className='text-purple-100'>
        Over 4,000 5-star reviews
      </p>
    </div>
  )
}

export default Social
