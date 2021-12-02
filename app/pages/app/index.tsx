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

const DashboardHomePage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
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