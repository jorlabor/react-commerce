import * as React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import { Flex, Spacer } from '@chakra-ui/react'
import dataSet from "./productData"

export default function App() {

    const [productData, setProductData] = React.useState(dataSet)
    const [isAdded, setIsAdded] = React.useState(false)

    return (
        <Flex className="App" m={2}>
            <Routes>
                <Route path="/" element={<Home data={productData} />}/>
                <Route path="/product" element={<Product data={productData} />}/>
            </Routes>
        </Flex>
    )
}