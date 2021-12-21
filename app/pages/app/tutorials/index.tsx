import * as React from 'react'
import {
  BlitzPage,
  useSession,
 
} from 'blitz'
import {
  Heading,
  Flex,
  Img
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'
import CoachTutorialsMain from 'app/dashboard/components/coach/CoachTutorialsMain'
import Loader from '../../../../public/Loader.gif'

const DashboardTutorialsMainPage: BlitzPage = () => {
  const sessionData = useSession({suspense: false})
  return (
    <>
      {sessionData.activeRole === 'Coach'
        ? (
          <React.Suspense fallback={<Flex w="100%" h="100vh" align="center" justify="center"><Img maxH="400px" src={"https://res.cloudinary.com/squadperks/image/upload/v1638913853/Untitled_design-2_lwcyye.gif"}/></Flex>}>
            <CoachTutorialsMain />
          </React.Suspense>
        )
        : <Heading>Student Tutorials Main</Heading>
      }
    </>
  )
}

DashboardTutorialsMainPage.authenticate = {redirectTo: '/login'}
DashboardTutorialsMainPage.suppressFirstRenderFlicker= true
DashboardTutorialsMainPage.getLayout = page => <DashboardLayout title="XPerks | Tutorials">{page}</DashboardLayout>

export default DashboardTutorialsMainPage