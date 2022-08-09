import Link from 'next/link';
import React from 'react';
import { Navbar, Nav, Stack } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="success" variant="dark">
        <div className="container-fluid">

          <Link passHref shallow href={`/`}>
            <Navbar.Brand >Hortfruti</Navbar.Brand>
          </Link>

            <Nav>
              <Stack direction="horizontal" gap={3}>
                <Nav.Link href="#features">Produtos</Nav.Link>
                <Link passHref shallow href={`/cart`} >
                  <Nav.Link >Carrinho</Nav.Link>
                </Link>
              </Stack>
            </Nav>
        </div>
      </Navbar>
    </header>
  )
}

export default Header;