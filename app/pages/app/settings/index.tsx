import * as React from 'react'
import {
  Link,
  useSession,
} from 'blitz'
import {
  Heading
} from '@chakra-ui/react'
import DashboardLayout from 'app/core/layouts/DashboardLayout'


const DashboardSettingsMainPage = () => {
  const sessionData = useSession({suspense: false})

  return (
    <>
      {sessionData.activeRole === 'Coach'
        ?<Heading>Coach Settings Main</Heading>
        : <Heading>Student Settings Main</Heading>
      }
    </>
  )
}

DashboardSettingsMainPage.authenticate = {redirectTo: '/login'}
DashboardSettingsMainPage.suppressFirstRenderFlicker= true
DashboardSettingsMainPage.getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardSettingsMainPage