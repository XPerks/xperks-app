import * as React from 'react'
import {
  BlitzPage,
  useSession
} from 'blitz'
import {
  Heading
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'

const DashboardWalletMainPage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
  return (
    <>
      {sessionData.activeRole === 'Coach'
        ?<Heading>Coach Wallet Main</Heading>
        : <Heading>Student Wallet Main</Heading>
      }
    </>
  )
}

DashboardWalletMainPage.authenticate = {redirectTo: '/login'}
DashboardWalletMainPage.suppressFirstRenderFlicker= true
DashboardWalletMainPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardWalletMainPage