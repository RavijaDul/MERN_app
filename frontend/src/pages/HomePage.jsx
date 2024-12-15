import { Container, VStack,Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
import  ProductCard  from '../components/productCard.jsx';


const HomePage = () => {
  const {fetchProduct,products} = useProductStore();
  useEffect(()=>{
    fetchProduct();
  },[fetchProduct]);
  console.log("Products",products);

  return (
    <Container maxW='container.xl' py ={12}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear-gradient(to right, #22D3EE, #3B82F6)"
          backgroundClip="text"
          fontSize={"30"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          >
            Current Products
          </Text>;

          <SimpleGrid
            columns={{
              base:1,
              md:2,
              lg:3
            }}
            spacing={10}
            w={"full"}
            >
            {products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}
          </SimpleGrid>

            {products.lrngth ===0 &&(
                        <Text fontSize ="x1" textAlign = {"center"} fontWeight ="bold" color='gray.500'>
                        No Product Found 😓{" "}
                        <Link to ="/create">
                          <Text as ='span'  color = 'blue.500' _hover={{textDecoration:"underline"}}>
                            Create a  Product
                          </Text>      
                        </Link>
                      </Text>
            )}
      </VStack>
    </Container>
  )
}

export default HomePage







