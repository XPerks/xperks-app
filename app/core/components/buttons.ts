import {Button, chakra} from '@chakra-ui/react'
import { getRoles } from '@testing-library/dom'

export const BrandGreenButton = chakra(Button, {
  baseStyle: {
    bg: 'brand.green',
    color: 'brand.main',
    _hover: {
      bg: 'green.400'
    }
  },
  
})