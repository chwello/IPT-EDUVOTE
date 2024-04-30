'use client'
import { useEffect, useMemo } from 'react'
import { getPartyById } from '@/lib/queries/party/getPartyById'
import { Card, Col, Row } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { Spin } from '../../../../../node_modules/antd/es/index'
import PartyData from '@/components/PartyData'
import { getCandidates } from '@/lib/queries/candidate/getCandidates'
import CandidateData from '@/components/CandidateData'
import ViewMore from '@/components/Layouts/ViewMore'


export default function PartyPage({ params }) {
  const partyId = useMemo(() => {
    return params.party
  }, [params])

  //Use useQuery to get data about the party. Use partyId and getPartyById function
  const { data: party, isLoading } = useQuery({
    queryKey: ['party', partyId],
    queryFn: () => getPartyById(partyId)
  })

  useEffect(() => {
    console.log(party)
  }, [isLoading])

  //Once party is present, render the component
  //Tip: Use conditional rendering (party ? (<Component for party>) : (<Loading component>)) OR (party && <Component for party>)
  return (
    <>
      <Spin spinning={isLoading}>
        {!isLoading && party && (
          <>
           <Card>
           
           <PartyData title={party.name} vision={party.vision} mission={party.mission} goals={party.goals} />
            <Row gutter={[16, 24]} className='flex gap-2 flex-row items-center justify-evenly font-sans'>
              {party.candidates.map((candidates, index) => (
                <Col span={4} key={index}>
                  <CandidateData
                    key={candidates.id}
                    name={candidates.name}
                    position={candidates.position}
                    img_url={candidates.filename}
                  />
                  <ViewMore
                  key={candidates.id}
                  name={candidates.name}
                  position={candidates.position}
                  img_url={candidates.filename}
                  age={candidates.age}
                  course={candidates.course}
                  credentials={candidates.credentials}
                  advocacy={candidates.advocacy}
                  />
                </Col>
              ))}
            </Row>

            
             
           </Card>
           
          </>
        )}
      </Spin>
    </>
  )
}
