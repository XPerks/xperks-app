import { Image, Link, BlitzPage, useMutation, Routes, useSession } from "blitz"
import PublicLayout from "app/core/layouts/PublicLayout"
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image as ChakraImage,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Wrap,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import FeaturedCoach from "app/marketing/components/FeaturedCoachPreviewCard"
import PopularGamesSection from "app/marketing/components/PopularGamesSection"
import FeaturesSection from "app/marketing/components/FeaturesSection"

const Home: BlitzPage = () => {
  return (
    <>
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              // _after={{
              //   content: "''",
              //   width: 'full',
              //   height: '25%',
              //   position: 'absolute',
              //   bottom: 1,
              //   left: 0,
              //   bg: 'green.400',
              //   zIndex: -1,
              // }}
              >
              Hire an expert,
            </Text>
            <br />
            <Text as={'span'} color={'brand.green'}>
              start winning more!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Tired of constantly losing to high skill players? Is your team in need of a coach, but you're unsure where to find one?  Looking to take your gaming skill to the next level? Hire an XPerks coach, and start winning more games today!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'lg'}
              size={'lg'}
              fontWeight={'bold'}
              px={6}
              colorScheme={'red'}
              bg={'brand.green'}
              _hover={{ bg: 'green.500' }}
            >
              Book a Session
            </Button>
            <Button
              rounded={'lg'}
              size={'lg'}
              fontWeight={'bold'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>

          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <ChakraImage
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'esports-coach.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <PopularGamesSection />
      {/* <Box mt={{base: 24, md: 48}}>
        <Heading size="2xl" my="8" textAlign="center">How It Works</Heading>
        <Flex h="350vh" flexDir={{base: 'column', lg: 'row'}} justify="space-between">
          <Box position="sticky" top={12} h="600px" w={{base: "100%", lg: "45%"}} mb={{base: "12", lg: 0}} bgColor="white"></Box>
          <Box position="sticky" top={12} h="250px" w={{base: "100%", lg: "45%"}} bgColor="white"></Box>
        </Flex>
        <Flex h="350vh" flexDir={{base: 'column', lg: 'row'}} justify="space-between">
          <Box position="sticky" top={12} h="600px" w={{base: "100%", lg: "45%"}} mb={{base: "12", lg: 0}} bgColor="white"></Box>
          <Box position="sticky" top={12} h="250px" w={{base: "100%", lg: "45%"}} bgColor="white"></Box>
        </Flex>
        <Flex h="350vh" flexDir={{base: 'column', lg: 'row'}} justify="space-between">
          <Box position="sticky" top={12} h="600px" w={{base: "100%", lg: "45%"}} mb={{base: "12", lg: 0}} bgColor="white"></Box>
          <Box position="sticky" top={12} h="250px" w={{base: "100%", lg: "45%"}} bgColor="white"></Box>
        </Flex>
        <Flex h="350vh" flexDir={{base: 'column', lg: 'row'}} justify="space-between">
          <Box position="sticky" top={12} h="600px" w={{base: "100%", lg: "45%"}} mb={{base: "12", lg: 0}} bgColor="white"></Box>
          <Box position="sticky" top={12} h="250px" w={{base: "100%", lg: "45%"}} bgColor="white"></Box>
        </Flex>
      </Box> */}
      <FeaturesSection />
      <Box mt="36" width="100%">
        <Heading>Meet some of our top talent.</Heading>
        <Text>If you want to beat the best, you've gotta learn from the best.</Text>
          <SimpleGrid mt="12" columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing="6">
            <FeaturedCoach />
            <FeaturedCoach />
            <FeaturedCoach />
            <FeaturedCoach />
          </SimpleGrid>
          <Flex w="100%" justifyContent="center" my={{base: 12, md: 24}}>
            <Button bg="brand.green" color="black" _hover={{bg: "green.300"}}>See All Coaches</Button>
          </Flex>
      </Box>

    </Container>
    </>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

Home.redirectAuthenticatedTo = "/app"
Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <PublicLayout title='XPerks | Find an esports coach today!'>{page}</PublicLayout>

export default Home
