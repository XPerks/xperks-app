import * as React from 'react'
import {
  Box,
  Heading,
  Flex,
  FormControl,
  Input,
  Textarea,
  Select,
  FormLabel,
  Stack
} from '@chakra-ui/react'
import {
  BlitzPage,
  useQuery
} from 'blitz'
import DashboardLayout from 'app/core/layouts/DashboardLayout'
import getAllGames from 'app/dashboard/queries/getAllGames'


const CoachNewTutorialPage: BlitzPage = () => {
  const [allGames] = useQuery(getAllGames, null, {suspense: false})
  return (
    <>
      <Box mt="4">
        <Heading>New Tutorial</Heading>
        <Box mt="12">
          <FormControl mb="4" isRequired>
            <FormLabel>Title</FormLabel>
            <Input  placeholder="Enter a catchy title..."/>
          </FormControl>
          <Stack spacing="4" direction={{base: 'column', md: 'row'}}>
          <FormControl isRequired mb="4">
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select Game Category">
              <option>Shooter</option>
              <option>MOBA</option>
              <option>Fighting Game</option>
              <option>Sports Game</option>
            </Select>
          </FormControl>
          <FormControl isRequired mb="4">
            <FormLabel>Game</FormLabel>
            <Select placeholder="Select Game">
              {allGames?.map(game => {
                return <option>{game.name}</option>
              })}
            </Select>
          </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Enter a useful description"/>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
CoachNewTutorialPage.authenticate = {redirectTo: '/login'}
CoachNewTutorialPage.suppressFirstRenderFlicker= true
CoachNewTutorialPage.getLayout = page => <DashboardLayout title="XPerks | Create New Tutorial">{page}</DashboardLayout>

export default CoachNewTutorialPage