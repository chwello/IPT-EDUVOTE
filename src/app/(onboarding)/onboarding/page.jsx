'use client'
import React from 'react'
import RadioType from '@/components/RadioType'

const YearLevel = {
  yearLevel: 'first year'
}

function Page() {
  return (
    <div className='flex flex-col items-center mb-20'>
      <p className='font-bold text-[24px] font-sans mb-10'>What year level are you?</p>

      <RadioType />

      <button className='bg-[#3DF07F] hover:bg-[#0AB74A] text-white font-semibold rounded-lg mt-6 py-3 w-[30%] font-sans text-[14px]'>
        Submit
      </button>
    </div>
  )
}

export default Page
