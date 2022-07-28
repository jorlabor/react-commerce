import { Container, Flex, Center, Box } from "@chakra-ui/react"
import React from "react"
import MyButton from "../../components/atoms/MyButton"
import { ArrowBackIcon } from '@chakra-ui/icons'
import ProductInfoImage from "../../components/atoms/Image/ProductInfoImage"
import ProductInfoBody from "../../components/molecules/ProductInfo"
import {Routes, Route, Link} from "react-router-dom"
import Home from "../Home"

export default function Product(props) {
    return (
        <Container p='2'>
            <Flex  direction='column'>
                <Link to="/" ><ArrowBackIcon w={6} h={6} /></Link>
                
                <ProductInfoImage />
                <ProductInfoBody />
                <Box alignSelf='center' margin={5}>
                    <MyButton>Add to cart</MyButton>
                </Box>
            </Flex>
        </Container>
    )
}