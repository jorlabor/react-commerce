import React from "react"
import { Flex, Spacer } from '@chakra-ui/react'
import HomeImage from "../../atoms/Image/HomeImage"
import HomeProductName from "../../atoms/Text/HomeText/HomeProductName"
import HomeProductDescription from "../../atoms/Text/HomeText/HomeProductDescription"
import HomeProductPrice from "../../atoms/Text/HomeText/HomeProductPrice"

export default function Card({id,name,description,price,imgUrl}) {
    return (
        <Flex  p={1} direction='column' basis='40%'>
            <HomeImage imgUrl={imgUrl}/>
            <HomeProductName name={name}/>
            <HomeProductDescription description={description}/>
            <HomeProductPrice price={price}/>
        </Flex>
    )
}