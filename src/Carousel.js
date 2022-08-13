import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/shopping.png'
import { Box, Flex } from '@chakra-ui/react'
const Carousels = () => {

  return (
    <Flex justifyContent='center' bg='red'>
      <Carousel  swipeable={true} width='20vw'>
        <Box >
          <img width='10px' sizes='10px' src={img1} />

        </Box>
        <Box >
          <img width='10px' sizes='10px' src={img1} />

        </Box>
        <Box >
          <img width='10px' sizes='10px' src={img1} />

        </Box>
      </Carousel>
    </Flex>
  )
}

export default Carousels;