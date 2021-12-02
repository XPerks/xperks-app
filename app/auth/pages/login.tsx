import { useRouter, BlitzPage } from "blitz"
// import Layout from "app/core/layouts/Layout"
import PublicLayout from "app/core/layouts/PublicLayout"
import { LoginForm } from "app/auth/components/LoginForm"
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Stack h={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'}>
        <Heading>Sign in to your account</Heading>
        <LoginForm onSuccess={() => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/app";
          router.push(next);
        }}/>
      </Stack>
    </Flex>
    <Flex flex={1}>
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
          "/game-collage.jpg"
        }
      />
    </Flex>
  </Stack>
  )
}

LoginPage.redirectAuthenticatedTo = "/app"
LoginPage.getLayout = (page) => <PublicLayout title="Log In">{page}</PublicLayout>

export default LoginPage