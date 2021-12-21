import * as React from 'react'
import {
  useQuery
} from 'blitz'
import {
  Box,
  Heading,
  Wrap,
  Text,
  Flex,
  Button
} from '@chakra-ui/react'
import getPopularGames from '../queries/getPopularGames'

const PopularGamesSection = () => {
  const [popularGames] = useQuery(getPopularGames, null, {suspense: false})
  console.log(popularGames)
  return (
    <Box mt="24">
      <Flex align="center" justify="space-between" flexWrap="wrap">
        <Box>
          <Heading size="xl">
            Popular Games
          </Heading>
          <Text fontSize="large">
            No matter your game, we are sure to have a coach for you.
          </Text>
        </Box>
        <Button mt={{base: 4, md: 0}} bgColor="brand.green" color="brand.main">See More</Button>
      </Flex>
      <Wrap my="12" spacing="7">
        {popularGames?.map((game, index) => {
          if(index < 5){
            return (
              <Box>
                <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg" bgImage={game.cover as string} bgPos="center" backgroundSize="cover"/>
                <Heading size="md">{game.name}</Heading>
                <Text>{`${Math.floor(Math.random() * 200)} Coaches`}</Text>
              </Box>
            )
          }
        })}
      </Wrap>
    </Box>
  )
}

export default PopularGamesSection