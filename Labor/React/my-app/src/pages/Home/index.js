import React from "react"
import MyButton from "../../components/atoms/MyButton"
import { Flex, Spacer, Container, } from '@chakra-ui/react'
import SearchBar from "../../components/molecules/SearchBar"
import HomeSlogan from "../../components/atoms/Text/HomeText/HomeSlogan"
import Card from "../../components/molecules/Card"
import { Link } from "react-router-dom"

export default function Home(props) {
    const arrayCard = props.data.products.map((product)=>{
        return (
            <Link to="/product" key={product.id}> 
                <Card 
                    name={product.name} 
                    id={product.id} 
                    imgUrl={product.imgUrl} 
                    description={product.description} 
                    price={product.price} /> 
            </Link>
        )
    })
    
    return (
        <Container bgColor='#f8f8fc'>
            
            <Flex direction={'column'}>
                <SearchBar />
                <HomeSlogan />
                <Flex width='100%' wrap='wrap' gap={2} justifyContent='space-around'>
                    {arrayCard}
                </Flex>
            </Flex>
        </Container>
    )
}