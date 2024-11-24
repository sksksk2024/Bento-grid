import CreatePostImg from './../images/illustration-create-post.webp'

function Quicker({ className }) {
  return (
    <div className={`form 3xs:max-w-300MW flex justify-start items-start p-32P text-start flex-col bg-yellow-100 rounded-10BR ${className}`}>
      <h2 className='text-lg xl:text-3xl font-semibold leading-5 xl:leading-9 text-black mb-16M'>
        Create and schedule content <span className='text-purple-500 italic'>quicker.</span> 
      </h2>
      <img className='w-2/3 xl:w-full' src={CreatePostImg} alt="create post image" />
    </div>
  )
}

export default Quicker
