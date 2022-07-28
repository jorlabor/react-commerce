import { Container, Flex, Center, Box } from "@chakra-ui/react"
import React from "react"
import ProductInfoName from "../../atoms/Text/ProductInfoText/ProductInfoName"
import ProductInfoDescription from "../../atoms/Text/ProductInfoText/ProductInfoDescription"
import ProductInfoDetails from "../../atoms/Text/ProductInfoText/ProductInfoDetails"
import ProductInfoPrice from "../../atoms/Text/ProductInfoText/ProductInfoPrice"

export default function ProductInfo() {
    return (
        
        <Container>
            <Flex>
                <Box flexBasis='70%'>
                    <ProductInfoName />
                    <ProductInfoDescription />
                </Box>
                <Box flexBasis='30%'>
                    <ProductInfoPrice />
                </Box>
            </Flex>
        </Container>
    )
}