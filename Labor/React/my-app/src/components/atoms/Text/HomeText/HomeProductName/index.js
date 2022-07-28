import React from "react"
import { Box, Text } from '@chakra-ui/react'

export default function HomeProductName(props) {
    return (
        <Box>
            <Text fontSize={16} color='#1B153D'>{props.name}</Text>
        </Box>
    )
}