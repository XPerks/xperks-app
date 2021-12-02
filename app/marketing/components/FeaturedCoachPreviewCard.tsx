import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
  isOnline: true,
  imageURL:
    'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8de80501fc94e13269a6f053efdf40e3-1627337105668/fa368e99-7399-471c-ad5e-abbc9a56abe3.jpg',
  name: 'Esports Coach',
  price: 45,
  rating: 4.2,
  numReviews: Math.floor(Math.random() * 100),
};

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
    </Box>
  );
}

function FeaturedCoachPreviewCard() {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isOnline && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="green.500"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          width="100%"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              Game Title
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price}/hr
            </Box>
          </Flex>
          <Box as="span" color="gray.300" fontSize="sm">
            {data.numReviews} review{data.numReviews > 1 && 's'}
          </Box>
          <Button boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} mt="2" bg="brand.green" color="black" _hover={{bg: "green.300"}} isFullWidth>Hire Me!</Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default FeaturedCoachPreviewCard;