import React, { useState, useEffect } from "react"
import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "../../http/firebase"
import { toast } from "react-toastify"
import { Flex, Stack, Input, Button } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import RtText from "../../components/atoms/RtText"

export default function Guide({ title }) {
  // Declare a new state variable, which we'll call "count"
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    isEditable: false
  })

  const collect = 'users'

  const addUser = async (col, doc) => {
    // Add a new document with a generated id.
    try {
      const docRef = await addDoc(collection(db, col), doc)
      toast("Succesfully added a user")
    } catch (error) {
      toast.error(error)
    }
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    
    if (!user.firstName && !user.lastName) {
      return
    }
    e.preventDefault()
    addUser(collect, user)
  }

  return (
    <Flex justifyContent='center' alignItems='center' direction='column'>
        <Flex alignItems='flex-start'>
            <Link to="/" ><ArrowBackIcon w={6} h={6} /></Link>
            <RtText textValue='Back'/>
        </Flex>
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <Input type='text' name="firstName" onChange={handleInput} value={user.firstName} variant='outline' placeholder='First Name' />
                <Input type='text' name="lastName" onChange={handleInput} value={user.lastName} placeholder='Last Name' />
                <Button type='submit' colorScheme='blue'>Add</Button>
            </Stack>
        </form>
    </Flex>
    // <div>
    //   <h2>Covid Tracker</h2>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <br></br>
    //       <label>First Name</label>
    //       <input type="text" name="first_name" onChange={handleInput}></input>
    //       <br></br>
    //       <label>Last Name</label>
    //       <input type="text" name="last_name" onChange={handleInput}></input>
    //       <button type="submit">Submit</button>
    //     </form>
    //     <h2>{JSON.stringify(form)}</h2>
    //   </div>
    //   <div>
    //     <h2>List of Users</h2>
    //     <ul>
    //       {users?.map((user) => (
    //         <li key={user.first_name}>
    //           {user.first_name} {user.last_name}
    //           <button onClick={() => handleDelete(user.id)}>Delete</button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  )
}