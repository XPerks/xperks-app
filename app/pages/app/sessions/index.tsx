import * as React from 'react'
import {
  BlitzPage,
  useSession
} from 'blitz'
import {
  Heading
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'

const DashboardSessionsMainPage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
  return (
    <>
      {sessionData.activeRole === 'Coach'
        ?<Heading>Coach Sessions Main</Heading>
        : <Heading>Student Sessions Main</Heading>
      }
    </>
  )
}

DashboardSessionsMainPage.authenticate = {redirectTo: '/login'}
DashboardSessionsMainPage.suppressFirstRenderFlicker= true
DashboardSessionsMainPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardSessionsMainPage