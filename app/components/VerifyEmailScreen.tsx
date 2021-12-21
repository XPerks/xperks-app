import * as React from 'react'
import {
  useSession
} from 'blitz'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Img
} from '@chakra-ui/react'
import { BrandGreenButton } from 'app/core/components/buttons'

const VerifyEmailScreen = ({user}) => {

  return (
    <Flex h="100vh" w="100%" flexDir="column" align="center" justify="center">
      <Flex bg="brand.secondary" rounded="lg" p={{base: 4, md: 12}} flexDir="column" align="center" justify="center">
        <Flex align="center"><Img mr="4" src="/xp-logo.png" h="60px" w="60px"/><Text fontSize="2xl" fontWeight="bold">XPerks</Text></Flex>
        <Heading textAlign="center" mb="6">Thanks for signing up with XPerks!</Heading>
        <Text  mb="6" textAlign="center" w={{base: "100%", md: "50%"}} fontSize={{base: "lg", md: "xl"}}>Please verify your email address to take advantage of all the perks and services we have to offer.</Text>
        <Text mb="2">Can't find the email?</Text>
        <BrandGreenButton>Resend Verification Email</BrandGreenButton>
      </Flex>
    </Flex>
  )

}

export default VerifyEmailScreen