import PlatformsImg from './../images/illustration-multiple-platforms.webp'

function AccountsPlatforms({ className }) {
  return (
    <div className={`form 3xs:max-w-300MW flex justify-center items-center p-32P text-start flex-col bg-white rounded-10BR ${className}`}>
      <div className="xl:overflow-hidden xl:w-full">
        <img className='shadow-sm rounded-20BR xl:scale-150 static xl:relative xl:left-48I' src={PlatformsImg} alt="platforms" />
      </div>
      <h2 className='text-md-1 xl:text-2-2xl font-semibold leading-4 xl:leading-9 text-black mt-16M'>
        Manage multiple accounts and platforms.
      </h2>
    </div>
  )
}

export default AccountsPlatforms
