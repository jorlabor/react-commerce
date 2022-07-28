import React from "react"
import { Box, Text } from '@chakra-ui/react'

export default function HomeProductDescription(props) {
    return (
        <Box>
            <Text fontSize={12} color='#9095A6'>{props.description}</Text>
        </Box>
    )
}