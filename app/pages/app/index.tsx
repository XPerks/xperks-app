import * as React from 'react'
import {
  Link, 
  BlitzPage,
  useSession,
  Routes,
  useMutation
} from 'blitz'
import {
  Heading
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'
import CoachDashboardHome from 'app/dashboard/components/coach/CoachDashboardHome'
import StudentDashboardHome from 'app/dashboard/components/student/StudentDashboardHome'
import VerifyEmailScreen from 'app/components/VerifyEmailScreen'
import { useCurrentUser } from 'app/core/hooks/useCurrentUser'

const DashboardHomePage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
  const user = useCurrentUser()
  // console.log(sessionData)

  if(!user?.isConfirmed){
    return <VerifyEmailScreen user={user}/>
  }

  return (
    <>
      
      {sessionData.activeRole === 'Coach'
        ? <CoachDashboardHome />
        : <StudentDashboardHome />
      }
    </>
  )
}

DashboardHomePage.authenticate = {redirectTo: '/login'}
DashboardHomePage.suppressFirstRenderFlicker= true
DashboardHomePage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardHomePage