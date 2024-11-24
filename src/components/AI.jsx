import MessagesImg from './../images/illustration-ai-content.webp'

function AI({ className }) {
  return (
    <div className={`form 3xs:max-w-300MW flex justify-start items-start xl:items-center p-32P xl:p-16P text-start flex-col bg-yellow-500 rounded-10BR ${className}`}>
      <h2 className='text-xl xl:text-3xl font-semibold leading-5 xl:leading-none text-black mb-16M xl:mb-32M'>
        Write your content using AI.
      </h2>
      <img className='w-4/5 xl:w-auto' src={MessagesImg} alt="messages" />
    </div>
  )
}

export default AI
