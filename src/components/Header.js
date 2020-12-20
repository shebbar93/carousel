import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import paypalIcon from '@iconify-icons/il/paypal';
import products from '../products'
import Carousel from '../screens/Carousel'

const Header = () => {
    const categories = products.map(x => x.category)
    const uniqueSet = new Set(categories);
    const backToArray = [...uniqueSet];

    const [categoryName, setCategoryName] = useState('Category')
    const [product, setProduct] = useState(products)
    const changeHandler = (cat) => {
        setCategoryName(cat)
        const change = products.filter(x => x.category === cat) 
        setProduct(change)
    }
    
    return (
        <>
            <header>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Container>
                        <Navbar.Brand href="/"><Icon icon={paypalIcon} /> PayPal Assignemt</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavDropdown title={categoryName} id="basic-nav-dropdown">
                                    {backToArray.map((cat, key) =>
                                        <NavDropdown.Item key={key} onClick={() => changeHandler(cat)}>{cat}</NavDropdown.Item>
                                    )}
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </header>
            <main className='py-3'>
                <Container>
                    <Carousel key={product} items={product} active={0} />
                </Container>
            </main>


        </>
    )
}

export default Header
