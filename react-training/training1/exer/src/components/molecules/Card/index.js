import React from "react"
import { Flex, IconButton  } from '@chakra-ui/react'
import UserImg from "../../atoms/UserImg"
import RtText from "../../atoms/RtText"
import { DeleteIcon,EditIcon } from "@chakra-ui/icons"
import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../../../http/firebase"
import { toast } from "react-toastify"

export default function Card({id,firstName,lastName,imgUrl,handleDelete,toggleIsEdit,isEdit}) {
    

    return (
        
         <Flex  p={1} direction='column' basis='40%' bgColor='white'>
            <UserImg imgUrl={imgUrl}/>
            <RtText textValue={firstName} />
            <RtText textValue={lastName} />
            <Flex gap={2}>
                <IconButton onClick={toggleIsEdit} size='sm' variant='solid' colorScheme='orange' icon={<EditIcon />} />
                <IconButton onClick={() => handleDelete(id)} size='sm' variant='solid' colorScheme='red' icon={<DeleteIcon />} />
            </Flex>
        </Flex>
    )
}