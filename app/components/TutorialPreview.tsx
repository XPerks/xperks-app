import * as React from "react"
import { Flex, Box, Center, Heading, Text, Img, Stack, Avatar, useColorModeValue } from "@chakra-ui/react"

export default function TutorialPostPreview({data}) {

  React.useEffect(() => {
    console.log(data)
  }, [data]) 

  return (
    <Center py={6}>
      <Flex
        flexDir="column"
        height="100%"
        cursor="pointer"
        maxW={"300px"}
        w={"full"}
        bg={"gray.900"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          borderTopRadius="inherit"
          pos={"relative"}
          zIndex={0}
        >
          <Img
            zIndex={0}
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            layout={"cover"}
            height="full"
            borderTopRadius="inherit"
            w="full"
          />
        </Box>
        <Stack flex={1}>
          <Heading
            noOfLines={2}
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {data.title}
          </Heading>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Img height="50px" rounded="lg" src={data?.author?.user?.avatar} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{data?.author?.username}</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Flex>
    </Center>
  )
}
