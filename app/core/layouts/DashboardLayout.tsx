import * as React from 'react'
import styled from '@emotion/styled'
import {
  Link,
  Head,
  useSession,
  useMutation,
  useRouter
} from 'blitz'
import {
  Flex,
  Box,
  Img,
  Heading,
  VStack,
  Switch,
  Button,
  Divider,
  Menu,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
  Avatar,
  Icon,
  Tooltip
} from '@chakra-ui/react'

// Component Imports
import Footer from 'app/marketing/components/Footer'
import changeAuthRole from 'app/auth/mutations/changeAuthRole'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { ImProfile, ImCog} from 'react-icons/im'
import {MdSwitchAccount} from 'react-icons/md'
import {FaCalendarAlt, FaChalkboardTeacher, FaFileAlt, FaGraduationCap, FaHome, FaWallet} from 'react-icons/fa'
import logout from 'app/auth/mutations/logout'
import { IconType } from 'react-icons'
import { useCurrentUser } from '../hooks/useCurrentUser'


type LayoutProps = {
  title?: string
  children: React.ReactNode
}


interface NavLink {
  link: string
  icon: IconType
  meta: string
}

const CoachNav = ({sessionData, route, switchRole, currentUser}) => {
  return (
    <>
      <VStack mt="6" spacing="4" flex={1}>
        {CoachLinks.map((link: NavLink) => {
          return (<SidebarLink label={link.meta} link={link.link} currentRoute={route} icon={link.icon}/>)
        })}
      </VStack>
      <VStack mb="4">
      <AvatarMenu currentUser={currentUser} sessionData={sessionData} switchRole={switchRole} placement="right-start"/>

      </VStack>
    </>
  )
}

const StudentNav = ({sessionData, route, switchRole, currentUser}) => {
  return (
    <>
      <VStack mt="6" spacing="4" flex={1}>
      {StudentLinks.map((link: NavLink)=> {
          return (<SidebarLink label={link.meta} link={link.link} currentRoute={route} icon={link.icon}/>)
        })}
      </VStack>
      <VStack mb="4">
      <AvatarMenu currentUser={currentUser} sessionData={sessionData} switchRole={switchRole} placement="right-start"/>

      </VStack>
    </>
  )
}

const SidebarLink = ({link, currentRoute, icon, label }) => {
  console.log({currentRoute, link})
  let isActive = currentRoute === link
  return (
    <Link href={link}>
      {/* <Tooltip hasArrow closeOnClick={false} label={label} placement="right"> */}
        <Flex 
          cursor="pointer"
          align="center" 
          justify="center" 
          _hover={{bg: 'brand.green', color: 'brand.main'}} 
          h="45px" 
          w="45px" 
          rounded="lg" 
          bg={isActive ? 'brand.green' : 'brand.main'}
          color={isActive ? 'brand.main' : 'white'}
          >
          <Icon as={icon} w="20px" h="20px"/>
        </Flex>
      {/* </Tooltip> */}
    </Link> 
  )
}

const AvatarMenu = ({sessionData, placement, switchRole, currentUser}) => {
  console.log(currentUser)
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)

  const signOut = async () => {
    await logoutMutation()
    router.push('/')
  }


  const renderRoleChange = () =>  sessionData.activeRole === 'Coach' 
          ? (<MenuItem icon={<MdSwitchAccount />} onClick={() => switchRole('Student')}>Switch to Student</MenuItem>)
          : (<MenuItem icon={<MdSwitchAccount />} onClick={() => switchRole('Coach')}>Switch to Coach</MenuItem>)

  return (
    <Menu placement={placement}>
      <MenuButton h="45px" w="45px"> <Img rounded="lg" src={currentUser?.avatar}/></MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          {sessionData?.roles?.includes('Coach') && renderRoleChange()}
          <Link href="/app/settings">
            <MenuItem icon={<ImCog />} >
              Settings
            </MenuItem>
          </Link>
        </MenuGroup>
        <MenuDivider/>
        <MenuItem onClick={async () => {await signOut()}} icon={<EditIcon />} >
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

const DeskTopNav = ({sessionData, switchRole, currentUser}) => {
  const router = useRouter()
  const route = router && router.pathname
  return ( 
    <Flex 
      display={{base: 'none', sm: 'flex'}}
      h="100%" 
      position="fixed" 
      pt="4" 
      align="center" 
      w={'70px'}
      bg="gray.700" 
      flexDir="column"
    >
      <Flex transition="all .1s linear" position="relative" align="center">
        <Box h="50px" w="50px" >
          <Img src="/xp-logo.png"/>
        </Box>
      </Flex>
      {sessionData.activeRole ==='Coach'
        ? (<CoachNav currentUser={currentUser} route={route} sessionData={sessionData} switchRole={switchRole}/>)
        : (<StudentNav currentUser={currentUser} route={route} sessionData={sessionData} switchRole={switchRole}/>)
      }
    </Flex>
  )
}

const MobileNav = ({sessionData, switchRole, currentUser}) => {
  return (
    <Flex position="fixed" bottom="0" justify="space-around" align="center" w="100%" h="65px" bg="gray.700" display={{base: 'flex', sm: 'none'}}>
        <Flex align="center" justify="center" _hover={{bg: 'brand.green'}} h="45px" w="45px" rounded="lg" bg="brand.main"></Flex>
        <Flex align="center" justify="center" _hover={{bg: 'brand.green'}} h="45px" w="45px" rounded="lg" bg="brand.main"></Flex>
        <Flex align="center" justify="center" _hover={{bg: 'brand.green'}} h="45px" w="45px" rounded="lg" bg="brand.main"></Flex>
        <AvatarMenu currentUser={currentUser} sessionData={sessionData} switchRole={switchRole} placement="top-start"/>
    </Flex>
  )
}

const DashboardLayout = ({ title, children }: LayoutProps) => {
  const user = useCurrentUser()
  const sessionData = useSession({suspense: false})
  const [changeRoleMutation] = useMutation(changeAuthRole)

  return (
    <>
        <Head>
          <title>{title || "blitzjs"}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex h="100vh" w="100%" flexDir={{base:'column'}}>
          <DeskTopNav currentUser={user} sessionData={sessionData} switchRole={changeRoleMutation}/>
          <Box minH="100vh" ml={{base: 0, sm: '70px'}} p="4" flex={1} overflowY="scroll">
            {children}
          </Box>
          <MobileNav currentUser={user} sessionData={sessionData} switchRole={changeRoleMutation}/> 
        </Flex>
    </>
  )
}

const CoachLinks: NavLink[] = [
  {
    link: '/app',
    icon: FaHome,
    meta: 'Dashboard'
  },
  {
    link: '/app/sessions',
    icon: FaCalendarAlt,
    meta: 'Sessions'
  },
  {
    link: '/app/tutorials',
    icon: FaFileAlt,
    meta: 'Tutorials'
  },
  {
    link: '/app/wallet',
    icon: FaWallet,
    meta: 'Wallet'
  },
]

const StudentLinks: NavLink[] = [
  {
    link: '/app',
    icon: FaHome,
    meta: 'Dashboard'
  },
  {
    link : '/app/learn',
    icon: FaChalkboardTeacher,
    meta: 'Find a coach'
  },
  {
    link: '/app/sessions',
    icon: FaCalendarAlt,
    meta: 'Sessions'
  },
  {
    link: '/app/tutorials',
    icon: FaFileAlt,
    meta: 'Tutorials'
  },
  {
    link: '/app/wallet',
    icon: FaWallet,
    meta: 'Wallet'
  },
]

export default DashboardLayout