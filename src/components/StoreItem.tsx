import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="400px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 text-white">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
              style={{ backgroundColor: "green", borderColor: "green" }}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  style={{ backgroundColor: "green", borderColor: "green" }}
                >
                  -
                </Button>
                <div className="text-white">
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  onClick={() => increaseCartQuantity(id)}
                  style={{ backgroundColor: "green", borderColor: "green" }}
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
