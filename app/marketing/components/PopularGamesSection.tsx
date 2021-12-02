import * as React from 'react'
import {
  useMutation,
  useQuery
} from 'blitz'
import {
  Box,
  Heading,
  Wrap,
  Text
} from '@chakra-ui/react'
import getPopularGames from '../queries/getPopularGames'

const PopularGamesSection = () => {
  const [popularGames] = useQuery(getPopularGames, null, {suspense: false})
  React.useEffect(() => {
    console.log(popularGames)
  }, [popularGames])
  return (
    <Box mt="24">
      <Heading size="xl">
        Popular Games
      </Heading>
      <Text fontSize="large">
        No matter your game, we are sure to have a coach for you.
      </Text>
      <Wrap my="12" spacing="7">
        <Box>
          <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg" bgImage="/apex_cover.webp" bgPos="center" backgroundSize="cover"/>
          <Heading size="md">Apex Legends</Heading>
          <Text>{`${Math.floor(Math.random() * 200)} Coaches`}</Text>
        </Box>
      </Wrap>
    </Box>
  )
}

export default PopularGamesSection