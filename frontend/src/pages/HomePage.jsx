import { Container, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <Container maxW='container.x1' py ={12}>
      <VStack spacing={8}>
        <Text
        
          bgGradient="linear-gradient(to right, #22D3EE, #3B82F6)"
          backgroundClip="text"
          fontSize={"30"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
  
          >Current Products</Text>

          <Text fontSize ="x1" textAlign = {"center"} fontWeight ="bold" color='gray.500'>
            No Product Found 😓{" "}
            <Link to ="/create">
              <Text as ='span' color = 'blue.500' _hover={{textDecoration:"underline"}}>
                Create a Product
              </Text>
            </Link>
          </Text>
      </VStack>
    </Container>
  )
}

export default HomePage







