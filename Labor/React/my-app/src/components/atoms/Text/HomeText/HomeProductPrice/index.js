import React from "react"
import { Box, Text } from '@chakra-ui/react'

export default function HomeProductPrice(props) {
    return (
        <Box>
            <Text fontSize={16} color='#5B41FF'>{props.price}</Text>
        </Box>
    )
}