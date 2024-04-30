'use client'
import React from 'react'
import { Segmented, Tabs } from 'antd'
import Party from '@/components/Party'
import CandidateLayout from '@/components/Layouts/CandidateLayout'
import AddAdmin from '@/components/AddAdmin'

const onChange = (key) => {
  console.log(key)
}

const App = () => {
  const [alignValue, setAlignValue] = React.useState('center')

  const items = [
    {
      key: '1',
      label: 'Partylist',
      children: (
        <>
          <Party />
        </>
      )
    },
    {
      key: '2',
      label: 'Candidates',
      children: (
        <>
          <CandidateLayout />
        </>
      )
    },
    {
      key: '3',
      label: 'Add Admin', 
      children: (
        <>
          <AddAdmin />
        </>
      )
    }
  ]

  return (
    <>
      <div className='w-auto bg-white h-screen px-10 py-6 rounded-lg'>
        <Tabs
          defaultActiveKey='1'
          items={items}
          onChange={onChange}
          indicator={{
            size: (origin) => origin - 20,
            align: alignValue
          }}
        />
      </div>
    </>
  )
}

export default App
