import React from "react"
import { Flex, IconButton, Stack, Input  } from '@chakra-ui/react'
import UserImg from "../../atoms/UserImg"
import RtText from "../../atoms/RtText"
import { DeleteIcon,EditIcon } from "@chakra-ui/icons"
import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../../../http/firebase"
import { toast } from "react-toastify"

export default function EditableCard({id,firstName,lastName,imgUrl,handleDelete,toggleIsEdit,isEdit}) {
    

    return (
        
         <Flex  p={1} direction='column' basis='40%' bgColor='white'>
            <UserImg imgUrl={imgUrl}/>
            <Stack spacing={3}>
                <Input type='text' name="firstName" onChange='' value={firstName} variant='outline' placeholder='First Name' />
                <Input type='text' name="lastName" onChange='' value={lastName} placeholder='Last Name' />
            </Stack>
            <Flex gap={2}>
                <IconButton onClick={() => toggleIsEdit(id)} size='sm' variant='solid' colorScheme='orange' icon={<EditIcon />} />
                <IconButton onClick={() => handleDelete(id)} size='sm' variant='solid' colorScheme='red' icon={<DeleteIcon />} />
            </Flex>
        </Flex>
    )
}