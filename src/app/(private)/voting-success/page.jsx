import Link from 'next/link'

export default function SuccessPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-screen mb-30'>
        <img src='edulogo.svg' alt='edulogo' className='mr-2 w-32 h-30 mb-6' />
        <p className='text-3xl font-bold font-sans'>Thank you for voting</p>
        <p className='text-[#9A9796] font-sans mt-3'>Your vote has been recorded.</p>
        <Link href='/dashboard'>
          <div className='rounded-xl mt-[30px] w-[450px] h-10 font-sans font-medium bg-[#3DF07F] flex justify-center items-center text-white hover:bg-[#2DC16A] transition duration-300 ease-in-out'>
            Continue
          </div>
        </Link>
      </div>
    </>
  )
}
