import * as React from "react"
import { Image, Link, BlitzPage, useMutation, Routes, useSession, useQuery } from "blitz"
import PublicLayout from "app/core/layouts/PublicLayout"
import {
  Box,
  Heading,
  Text,
  Container,
  Flex,
  Input,
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  Wrap,
  SimpleGrid,
} from "@chakra-ui/react"
import { BiMailSend } from "react-icons/bi"
import TutorialPostPreview from "app/components/TutorialPreview"
import getAllTutorials from "app/marketing/queries/getAllTutorials"

const FreeTutorialsPublicPage: BlitzPage = () => {
  const [category, setCategory] = React.useState<string>("shooter")
  const [allTuts] = useQuery(getAllTutorials, null, { suspense: false })
  const filteredTuts = allTuts?.filter(tut => tut.category === category)

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Container maxW="7xl">
        <Box py={{ base: 20, md: 28 }}>
          <Heading my="4" size="2xl">
            Free Tips, Tutorials & More
          </Heading>
          <Text mb="4" maxW={{ base: "100%", md: "50%" }}>
            Check ut some free tutorials to help you get started. Our coaches are constantly crating
            new content for you to enjoy.
          </Text>
          <Box my="12">
            <Stack direction={"row"} maxW="350px">
              <Input
                placeholder={"Your email address"}
                bg={"whiteAlpha.100"}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={"brand.green"}
                color={"gray.800"}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Text color="gray.500">Sign up to get new tutorials straight to your inbox.</Text>
          </Box>
        </Box>
        <Box>
          <Heading size="lg">Category</Heading>
          <ButtonGroup flexWrap="wrap" spacing="4" my="4">
            <Button
              borderColor="brand.green"
              mt="2"
              bgColor={category === "shooter" ? "brand.green" : " brand.main"}
              variant={category === "shooter" ? "solid" : "outline"}
              color={category === "shooter" ? "brand.main" : " brand.green"}
              onClick={() => setCategory("shooter")}
            >
              First/Third Person Shooter
            </Button>
            <Button
              borderColor="brand.green"
              mt="2"
              bgColor={category === "moba" ? "brand.green" : " brand.main"}
              variant={category === "moba" ? "solid" : "outline"}
              color={category === "moba" ? "brand.main" : " brand.green"}
              onClick={() => setCategory("moba")}
            >
              MOBA
            </Button>
            <Button
              borderColor="brand.green"
              mt="2"
              bgColor={category === "fighting" ? "brand.green" : " brand.main"}
              variant={category === "fighting" ? "solid" : "outline"}
              color={category === "fighting" ? "brand.main" : " brand.green"}
              onClick={() => setCategory("fighting")}
            >
              Fighting Games
            </Button>
            <Button
              borderColor="brand.green"
              mt="2"
              bgColor={category === "sports" ? "brand.green" : " brand.main"}
              variant={category === "sports" ? "solid" : "outline"}
              color={category === "sports" ? "brand.main" : " brand.green"}
              onClick={() => setCategory("sports")}
            >
              Sports
            </Button>
          </ButtonGroup>
          {
            filteredTuts?.length 
            ? (
              <SimpleGrid spacing="4" columns={{base: 1, md: 2, lg: 3, xl: 4, '2xl': 5}} justifyContent="flex-start" width="100%">
                {filteredTuts?.map((tut) => {
                  return <TutorialPostPreview data={tut} />
                })}
              </SimpleGrid>
            ) 
            : <Heading my="12">None added yet, check back soon!</Heading>
          }
        </Box>
      </Container>
    </React.Suspense>
  )
}

FreeTutorialsPublicPage.getLayout = (page) => (
  <PublicLayout title="XPerks | Free Tutorials">{page}</PublicLayout>
)
export default FreeTutorialsPublicPage
