import React from "react"
import { Flex, IconButton, Input  } from '@chakra-ui/react'
import UserImg from "../../atoms/UserImg"
import RtText from "../../atoms/RtText"
import { DeleteIcon,EditIcon } from "@chakra-ui/icons"
import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../../../http/firebase"
import { toast } from "react-toastify"

export default function Card({id,firstName,lastName,imgUrl,handleDelete,toggleIsEdit,isEdit}) {
    
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        
      }


    const firstNameInput = !isEdit ? <RtText textValue={firstName} /> : <Input type='text' name="firstName" onChange={handleInput} value={firstName} variant='outline' placeholder='First Name' />
    const lastNameInput = !isEdit ? <RtText textValue={lastName} /> : <Input type='text' name="lastName" onChange={handleInput} value={lastName} variant='outline' placeholder='Last Name' />

    
    return (
        
         <Flex  p={1} direction='column' basis='40%' bgColor='white'>
            <UserImg imgUrl={imgUrl}/>
            {firstNameInput}
            {lastNameInput}
            <Flex gap={2}>
                <IconButton onClick={()=> toggleIsEdit(id)} size='sm' variant='solid' colorScheme='orange' icon={<EditIcon />} />
                <IconButton onClick={() => handleDelete(id)} size='sm' variant='solid' colorScheme='red' icon={<DeleteIcon />} />
            </Flex>
        </Flex>
    )
}