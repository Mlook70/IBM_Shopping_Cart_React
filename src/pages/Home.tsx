import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate("/store")
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 2rem",
      }}
    >
      <Container>
        <h1 className="mb-4">Welcome to Green Comfort</h1>
        <p className="mb-4">
          At Green Comfort, we believe in sustainable living with a touch of comfort. 
          Our products are designed to bring eco-friendly solutions that offer style, 
          comfort, and durability. Whether you're shopping for your home or outdoor needs, 
          we've got you covered with the best products that care for the environment.
        </p>
        <Button
          variant="success"
          size="lg"
          onClick={handleGetStarted}
        >
          Getting Started
        </Button>
      </Container>
    </div>
  )
}
