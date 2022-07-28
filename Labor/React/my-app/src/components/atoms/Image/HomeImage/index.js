import React from "react"
import {Box, Image} from '@chakra-ui/react'

export default function HomeImage(props) {
    return (
        <Box alignSelf='center' width='150px' height='200px' backgroundImage={props.imgUrl} backgroundSize='cover' backgroundPosition='center'>
            
        </Box>
    )
}