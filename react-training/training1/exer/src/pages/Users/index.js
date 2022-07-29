import React, { useState, useEffect } from "react"
import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../../http/firebase"
import { toast } from "react-toastify"
import RtText from "../../components/atoms/RtText"
import SearchBar from "../../components/molecules/SearchBar"
import { Container, Flex, IconButton  } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import Card from "../../components/molecules/Card"
import EditableCard from "../../components/molecules/EditableCard" 

export default function Users() {
    const [users, setUsers] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const col = 'users'
    

    const getUserData = async () => {
        const querySnapshot = await getDocs(collection(db, col))
        const users = []
        querySnapshot.forEach((doc) => {
            users.push({
            id: doc.id,
            ...doc.data(),
            })
        })
        setUsers(users)
        // console.log(querySnapshot)
    }
    
    const deleteUser = async (col, id) => {
        try {
          const deletedDoc = await deleteDoc(doc(db, col, id))
          toast("Deleted Data!")
        } catch (error) {
          console.log(error)
        }
      }

    const handleDelete = (id) => {
        deleteUser(col, id)
        getUserData()
      }

    const arrayUsers = users.map((user)=>{
        return (
                    <Card 
                        key={user.id}
                        firstName={user.firstName} 
                        id={user.id} 
                        imgUrl='./images/profile1.jpg'
                        lastName={user.lastName} 
                        handleDelete={handleDelete}
                        isEdit={isEdit}
                        toggleIsEdit={toggleIsEdit}
                     /> 

        )
    })

    
    function toggleIsEdit(id) {
        // debugger
        // setUsers({
        //     ...users,
        //     isEditable:!isEdit
        // })
        setIsEdit(!isEdit)
    }

    useEffect(()=>{
        console.log(users.isEditable)
    },[isEdit])

      useEffect(()=>{
        getUserData()
    },[])


    return (
        <Container padding='20px' bgColor='#D3D3D3'>
            <Flex direction='column' gap={5}>
                <RtText textValue='User Management' />
                <SearchBar />
                <Flex alignItems='center' gap={2} m={5}>
                    <Link to="/addUser" ><IconButton size='lg' variant='outline' colorScheme='teal' icon={<AddIcon />} /></Link>
                    <RtText textValue='Add User'/>
                </Flex>
            </Flex>
            <Flex wrap='wrap' gap={3}>
                {arrayUsers}
            </Flex>
        </Container>
    )
}