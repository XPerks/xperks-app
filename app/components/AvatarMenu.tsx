import * as React from "react"
import { useRouter, useMutation, Link } from "blitz"
import { Menu, MenuButton, MenuItem, MenuList, MenuGroup, Img, MenuDivider } from "@chakra-ui/react"
import { SupportModal } from "app/components/SupportModal"
import logout from "app/auth/mutations/logout"
import { EditIcon } from "@chakra-ui/icons"

import { ImProfile, ImCog, ImQuestion } from "react-icons/im"
import { MdSwitchAccount } from "react-icons/md"
import { FaQuestionCircle } from "react-icons/fa"

export const AvatarMenu = ({ sessionData, placement, switchRole, currentUser }) => {
  // console.log(currentUser)
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)

  const signOut = async () => {
    await logoutMutation()
    router.push("/")
  }

  const renderRoleChange = () =>
    sessionData.activeRole === "Coach" ? (
      <MenuItem icon={<MdSwitchAccount />} onClick={() => {
        switchRole("Student")
        router.push('/app')
      }}>
        Switch to Student
      </MenuItem>
    ) : (
      <MenuItem icon={<MdSwitchAccount />} onClick={() => {
        switchRole("Coach")
        router.push('/app')
      }}>
        Switch to Coach
      </MenuItem>
    )

  return (
    <Menu placement={placement}>
      <MenuButton h="45px" w="45px">
        {" "}
        <Img rounded="lg" src={currentUser?.avatar} />
      </MenuButton>
      <MenuList zIndex={100}>
        <MenuGroup zIndex={100} title="Profile">
          {sessionData?.roles?.includes("Coach") && renderRoleChange()}
          <Link href="/app/settings">
            <MenuItem icon={<ImCog />}>Settings</MenuItem>
          </Link>
          <SupportModal icon={<FaQuestionCircle />} />
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          onClick={async () => {
            await signOut()
          }}
          icon={<EditIcon />}
        >
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
