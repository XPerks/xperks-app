import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  components: {
    Steps
  },
  colors: {
    brand: {
      green: '#30D95E',
      main: '#212231',
      secondary: '#2D3748'
    }
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  },
  })
  
export default theme