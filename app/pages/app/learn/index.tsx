import * as React from 'react'
import {
  BlitzPage,
  useSession
} from 'blitz'
import {
  Heading
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'

const DashboardLearnMainPage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
  return (
    <>
      <Heading>Student Coaching Main</Heading>
    </>
  )
}

DashboardLearnMainPage.authenticate = {redirectTo: '/login'}
DashboardLearnMainPage.redirectAuthenticatedTo = ({session}) => session.activeRole === 'Coach' ? '/app' : false
DashboardLearnMainPage.suppressFirstRenderFlicker= true
DashboardLearnMainPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardLearnMainPage