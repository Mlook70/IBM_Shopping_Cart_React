import { Button , Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
                    </svg>
                    <div 
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white", 
                            width: "1.5rem", 
                            height: "1.5rem", 
                            position: "absolute", 
                            bottom:0, 
                            right:0,
                            transform: "translate(25%, 25%)",
                        }}
                    >
                        3
                    </div>                
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar
