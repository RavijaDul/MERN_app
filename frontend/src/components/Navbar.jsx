import { Container, Flex, HStack,Button,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {PlusSquareIcon} from "@chakra-ui/icons";
//import React from 'react'

const Navbar = () => {
  return <Container maxW={"1140px"} px={4}>
    <Flex
        h={16}
        alignItems={"center"}
        justifyContent={'space-between'}
        flexDir={{
            base :"column",
            sm:"row"
        }}
    >
        
        <Text

        bgGradient={"linear(to-r, #22D3EE, #3B82F6)"}
        boclip={"text"}
        fontSize={{base:"22",sm:"28"}}
        fontWeight={'bold'}
        textTransform={"uppercase"}
        textAlign={"center"}
        >
        <Link to ={"/"}>Product Store</Link>
        </Text>
        <HStack spacing ={2} alignItems="center">
            <Link to={"/create"}>
            <Button>
                <PlusSquareIcon fontSize = {20}/>
            </Button>
            </Link>

        </HStack>
       
    </Flex>
  </Container>;
  
};

export default Navbar;













