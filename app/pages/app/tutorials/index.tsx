import * as React from 'react'
import {
  BlitzPage,
  useSession
} from 'blitz'
import {
  Heading
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'

const DashboardTutorialsMainPage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
  return (
    <>
      {sessionData.activeRole === 'Coach'
        ?<Heading>Coach Tutorials Main</Heading>
        : <Heading>Student Tutorials Main</Heading>
      }
    </>
  )
}

DashboardTutorialsMainPage.authenticate = {redirectTo: '/login'}
DashboardTutorialsMainPage.suppressFirstRenderFlicker= true
DashboardTutorialsMainPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardTutorialsMainPage