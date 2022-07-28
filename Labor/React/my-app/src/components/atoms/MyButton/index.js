import React from "react" 
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function MyButton({children}) {
    return (
        <div>
            <Button colorScheme='purple' size="lg" bgGradient='linear(to-l, #8743FF, #4136F1)'>{children}</Button>
        </div>
    )
}