import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  MenuItem,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels
} from '@chakra-ui/react'

export const SupportModal = ({icon}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MenuItem icon={icon} onClick={onOpen}>Help & Feedback</MenuItem>

      <Modal size={'xl'} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How can we help you?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Tabs>
            <TabList>
              <Tab>Help</Tab>
              <Tab>Feedback</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>Having trouble with something? Let us help you!</p>
              </TabPanel>
              <TabPanel>
                <p>We absolutely appreciate your feedback on how we can improve your experience here!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}