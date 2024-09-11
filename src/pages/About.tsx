import { Container } from "react-bootstrap"

export function About() {
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
        <h1 className="mb-4">About Green Comfort</h1>
        <p>
          Green Comfort is committed to offering eco-friendly products that provide
          style and comfort without compromising on sustainability. Our mission is to
          create innovative solutions for your home and outdoor living spaces, helping
          you make environmentally conscious choices while enjoying the utmost in
          comfort. Join us on our journey towards a greener future!
        </p>
      </Container>
    </div>
  )
}
