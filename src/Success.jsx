import successCheck from '../assets/images/icon-success-check.svg'

export function Success() {
  return <div className="karla h-24 rounded-xl absolute top-4 left-1/2 -translate-x-2/4 
  bg-sky-950 text-white p-6 transition duration-300 flex flex-col justify-center gap-2">
    <div className="flex content-center gap-3">
        <img src={successCheck} alt="Check" />
        <h3 className='font-bold'>Message Sent!</h3>
    </div>
    <p className='text-sm'>Thanks for completing the form. We'll be in touch soon!</p>
  </div>
}
