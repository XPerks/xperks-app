import { useRouter, BlitzPage, Routes } from "blitz"
import PublicLayout from "app/core/layouts/PublicLayout";
import { SignupForm } from "app/auth/components/SignupForm"
import {
  Flex,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Stack h={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading>Create an account</Heading>
          <SignupForm onSuccess={() => router.push('/app')}/>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/game-collage.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <PublicLayout title="Sign Up">{page}</PublicLayout>

export default SignupPage