import * as React from 'react'
import {
  Link, 
  useQuery,
  useSession
} from 'blitz'
import {
  Heading,
  Flex,
  Box,
  Button,
  Container,
  SimpleGrid
} from '@chakra-ui/react'
import { BrandGreenButton } from 'app/core/components/buttons'
import {FaPlus} from 'react-icons/fa'
import TutorialPreview from 'app/components/TutorialPreview'
import getCoachTutorials from 'app/dashboard/queries/getCoachTutorials'
import { useCurrentUser } from 'app/core/hooks/useCurrentUser'
import TutorialPostPreview from 'app/components/TutorialPreview'

const CoachTutorialsMain = () => {
  const user = useCurrentUser()
  const [coachTuts] = useQuery(getCoachTutorials, user?.Coach?.id)
  return (
    <>
      <Box mt="4">
        <Flex align="center" mb="8" flexWrap="wrap" justify="space-between">
          <Heading mb="4" mr="6">Your Tutorials</Heading>
          <Link href="/app/tutorials/new">
            <BrandGreenButton leftIcon={<FaPlus />}>New Tutorial</BrandGreenButton>
          </Link>
        </Flex>
        <SimpleGrid spacing="4" columns={{base: 1, md: 2, lg: 3, xl: 4, '2xl': 5}}>
          {coachTuts?.map(tut => {
            return <TutorialPostPreview data={tut}/>
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default CoachTutorialsMain