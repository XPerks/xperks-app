import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import {
  FaChalkboardTeacher,
  FaCheck,
} from 'react-icons/fa'
import {
  RiTeamLine
} from 'react-icons/ri'
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function FeaturesSection() {
  return (
      <SimpleGrid mt="40" columns={{ base: 1, lg: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Get expert coaching from the best players around the world.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Whether you need coaching, carrying, or guidance, ours expert players are here to help you.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Box>
              <Feature
                icon={
                  <Icon as={FaChalkboardTeacher} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'1-on-1 Guidance'}
              />
              <Text mt="2">Get personalized sessions in any major title, with plenty of top talent to fit your budget.</Text>
            </Box>
            <Box>
              <Feature
                icon={<Icon as={RiTeamLine} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Team Coaching Sessions'}
              />
              <Text mt="2">Set your team up for success with our expert guidance on team tactics, communication, and more.</Text>
            </Box>
            <Box>
              <Feature
                icon={
                  <Icon as={FaCheck} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Guaranteed Quality Service'}
              />
              <Text mt="2">We guarantee quality service delivered every session, or your money back with our Safe Payment Gaurantee.</Text>
            </Box>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/home-coach-img.jpeg'}
            objectFit={'contain'}
          />
        </Flex>
      </SimpleGrid>
  );
}