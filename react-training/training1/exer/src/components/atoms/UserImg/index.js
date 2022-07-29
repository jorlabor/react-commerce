import React from "react"
import {Box} from '@chakra-ui/react'

export default function UserImg(props) {
    return (
        <Box alignSelf='center' width='150px' height='200px' backgroundImage={props.imgUrl} backgroundSize='cover' backgroundPosition='center'>
            
        </Box>
    )
}