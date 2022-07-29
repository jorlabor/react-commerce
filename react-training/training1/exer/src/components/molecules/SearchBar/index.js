import React from "react"
import { Flex, Input, Box, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export default function SearchBar() {
    return (
        <Flex name="searchbar" >
            <Box>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon  />}
                    />
                    <Input placeholder='Search Product' borderRadius={10}/>
                </InputGroup>
            </Box>
        </Flex>
    )
}