import React from "react"
import { Flex, Spacer, Input, Center, Box, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'

export default function SearchBar() {
    return (
        <Flex name="searchbar" width={'100%'} justify={"space-between"} marginY="5px">
            <Center>
							<HamburgerIcon />
						</Center>
            <Box>
							<InputGroup>
								<InputLeftElement
									pointerEvents='none'
									children={<Search2Icon  />}
								/>
								<Input placeholder='Search Product' borderRadius={20}/>
							</InputGroup>
            </Box>

        </Flex>
    )
}