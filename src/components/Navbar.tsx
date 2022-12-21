import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
export function Navbar() {
    const { openCart, cartQuantity} = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}> Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}> Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}> About</Nav.Link>
            </Nav>
            <Button onClick={openCart}
                style={{ width: '3rem', height: '3rem', position: 'relative' }} variant='outline-primary' className="rounded-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='currentColor'>
                    <path d="M90.47,289.875h123.954V60H4.057l29.685,181.689C38.172,268.709,63.09,289.875,90.47,289.875z" />
                    <polygon points="369.501,289.875 407.181,60 214.425,60 214.425,289.875 	" />
                    <path  d="M38.583,433.41c0,29.519,24.016,53.534,53.535,53.534V379.875
		C62.599,379.875,38.583,403.891,38.583,433.41z"/>
                    <path d="M297.115,433.41c0,29.519,24.015,53.534,53.534,53.534V379.875
		C321.13,379.875,297.115,403.891,297.115,433.41z"/>
                    <path  d="M92.118,379.875v107.069c29.519,0,53.534-24.015,53.534-53.534S121.637,379.875,92.118,379.875z" />
                    <path  d="M350.649,379.875v107.069c29.519,0,53.535-24.015,53.535-53.534S380.168,379.875,350.649,379.875z"
                    />
                    <polygon  points="417.016,0 364.583,319.875 58.583,319.875 58.583,359.875 398.561,359.875 450.993,40 
		482.887,40 482.887,0 	"/>
                </svg>
                {cartQuantity > 0 && (
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color:"white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0,right:0, transform: "translate(25%, 25%)"}} >
                        {cartQuantity}
                    </div>
                )}
            </Button>
            
        </Container>
    </NavbarBs>
}