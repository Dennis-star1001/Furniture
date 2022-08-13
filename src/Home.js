import './index.css'
import { Box, Text, Image, Container, Button, SimpleGrid, Stack,Flex } from "@chakra-ui/react";
import { GoLocation } from 'react-icons/go';
import { AiOutlineSafety, AiOutlineShopping, AiOutlineLock } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';

import img1 from './images/deliveries.svg'
import chair from './images/chair.jpg'
import shirt from './images/shirt.jpg'
import cap from './images/cap.jpg'
import glasses from './images/glasses.jpg'

import Carousels from './Carousel';
const Home = () => {

    const Items = ({ title, content, iconz }) => {
        return (
            <Box bg='#fff' border='2px solid' borderColor='#F2F2F2' borderRadius='5' w='auto' height='auto'>
                <Stack flexDirection='column' p='5' >
                    <Box bg='#8C85FF' w='fit-content' p='5' borderRadius='full'>{iconz}</Box>
                    <Text fontWeight='bold'>{title}</Text>
                    <Text fontSize='14' color='gray.500' maxW='40'>{content}</Text>
                </Stack>
            </Box>
        )
    }

    const Products = ({ name, price, image }) => {
        let width = '60'
        return (

            <Stack textAlign='center' justifyContent='center' maxW={width} >

                <Image w={width} src={image} />
                <Flex  justifyContent='space-around' alignItems='center'>
                    <Text fontWeight='bold'>{name}</Text>
                    <Text  color='gray.500'>{price}</Text>
                </Flex>
                <Button bg='#6C63FF' color='white' border='none' _hover={{ bg: 'white', borderColor: '#EDF2F7', border: '1px solid', color: '#6C63FF' }}>View product</Button>
            </Stack>

        )
    }


    return (
        <Container maxW='6xl' >
            <Box display='flex' height='90vh' borderBottom='1px solid #f2f2f2' justifyContent='center' alignItems={'center'} >
                <Box>
                    <Text fontSize='60' fontWeight='500' textAlign=''>
                        The Powerfull shipping app in the world
                    </Text>
                    <Text fontSize='sm' textAlign=' '>
                        You can send this data again, but by doing so you will repeat any action this page previously performed.
                    </Text>
                    <Button mt='5' bg='#6C63FF' color='white' border='none' _hover={{ bg: 'white', borderColor: '#EDF2F7', border: '1px solid', color: '#6C63FF' }} >Order Now!</Button>
                </Box>
                <Box w='5xl' >
                    <img src={img1} />
                </Box>
            </Box>
            <Box>



                <Box h='100vh' bg='white' display='flex' borderBottom='1px solid #f2f2f2' justifyContent='space-between' alignItems='flex-start' py='24'>
                    <Box>
                        <SimpleGrid columns={2} spacingX={10} spacingY={10}>
                            <Items
                                iconz={<GoLocation size='24' color='red' />}
                                title={'Location'}
                                content={'You can send this data again, but by doing so you will repeat.'}
                            />
                            <Items
                                iconz={<AiOutlineSafety size='24' />}
                                title={'Securtiy'}
                                content={'You can send this data again, but by doing so you will repeat.'}
                            />
                            <Items
                                iconz={<AiOutlineShopping size='24' />}
                                title={'Shop at ease'}
                                content={'You can send this data again, but by doing so you will repeat.'}
                            />
                            <Items
                                iconz={<AiOutlineLock size='24' />}
                                title={'Good Service'}
                                content={'You can send this data again, but by doing so you will repeat.'}
                            />
                        </SimpleGrid>
                    </Box>
                    <Box >
                        <Text maxW='xl' fontSize='40'>Trust is very important for beeanter. The core features we have</Text>

                    </Box>
                </Box>





                <Box h='100vh' >

                    <Box>
                        <Text fontSize='3xl' py='10' textAlign='center'>Our Products</Text>
                    </Box>
                    <Flex justifyContent='center'  alignContent='center'>
                        <SimpleGrid columns={3} spacingX={24} spacingY={10}>
                            <Products
                                image={chair}
                                name={'Pink Chair'}
                                price='£24,000'
                            />
                            <Products
                                image={cap}
                                name={'Bag'}
                                price='£72,000'
                            />
                            <Products
                                image={glasses}
                                name={'Glasses'}
                                price='£92,000'
                            />
                          
                        </SimpleGrid>
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;