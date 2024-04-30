'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getCandidates } from '@/lib/queries/candidate/getCandidates'
import { Button, Spin } from 'antd'
import { useEffect, useState } from 'react'
import VotingTable from '@/components/VotingTable'
import { submitVote } from '@/lib/mutations/votes/voteMutations'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export const positionsArray = [
  'Governor',
  'Vice Governor',
  'Secretary',
  'Treasurer',
  'Budget',
  'Auditor',
  'P.I.O',
  '4th Year Representative',
  '3rd Year Representative',
  '2nd Year Representative'
]

export default function VotePage() {
  const [positions, setPositions] = useState({})
  const { data: session } = useSession()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [votes, setVotes] = useState([])
  const { data: candidatesData, isLoading } = useQuery({
    queryFn: getCandidates,
    queryKey: ['candidates']
  })
  const router = useRouter()

  const { mutate: submitVoteMutation } = useMutation({
    mutationFn: submitVote
  })

  useEffect(() => {
    if (session && session.user.hasVoted) {
      router.push('/voting-success')
    }
  }, [session])

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      const data = await submitVoteMutation(votes)
      const user = await axios.patch('/api/user/update', { hasVoted: true, id: session.user.id })
      if (data && user) {
        setIsSubmitting(false)
      }
      setIsSubmitting(false)
      router.push('/voting-success')
    } catch (e) {
      setIsSubmitting(false)
      console.error(e)
    }
  }

  const handleVoteChange = (value, index) => {
    console.log(value, index)
    setVotes((prev) => {
      let updatedVotes = [...prev]
      updatedVotes[index] = value
      return updatedVotes
    })
  }

  useEffect(() => {
    if (!isLoading && candidatesData && candidatesData.length > 0) {
      const result = {}

      positionsArray.forEach((position) => {
        result[position] = []
      })

      candidatesData.forEach((party) => {
        positionsArray.forEach((position) => {
          const candidate = party.candidates.find((candidate) => candidate.position === position)
          if (candidate) {
            if (!result[position]) {
              result[position] = []
            }
            result[position].push({
              name: candidate.name,
              party: party.name,
              candidateId: candidate.id,
              partyId: party.id
            })
          }
        })
      })

      setPositions(result)
      console.log(result)
    }
  }, [isLoading, candidatesData, positionsArray])

  return (
    <>
      <div>
        <p className='text-xl font-bold'>Vote Now</p>
        <p className='text-[#7C8DB5]'>Make your choice count</p>
      </div>
      <Spin spinning={Object.keys(positions).length <= 0 || isSubmitting}>
        <div className='w-full bg-white mt-5 rounded-2xl px-8 py-8'>
          {Object.keys(positions).map((position, index) => {
            if (positions[position].length > 0) {
              const tableData = positions[position].map((data, i) => {
                return {
                  candidateId: data.candidateId,
                  partyId: data.partyId,
                  key: i + 1,
                  no: i + 1,
                  name: data.name,
                  partylist: data.party
                }
              })
              return (
                <VotingTable
                  position={position}
                  data={tableData}
                  handleVoteChange={handleVoteChange}
                  key={index}
                  index={index}
                />
              )
            }
          })}
          <div className='flex justify-center items-center'>
            <Button
              className='mt-[30px] w-[50%] h-10 font-sans font-medium bg-[#3DF07F] hover:bg-[#3DF07F] hover:border-gray-300'
              type='primary'
              onClick={handleSubmit}
            >
              Submit Vote
            </Button>
          </div>
        </div>
      </Spin>
    </>
  )
}
