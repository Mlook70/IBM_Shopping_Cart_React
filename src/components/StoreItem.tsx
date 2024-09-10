import React from 'react'
import { Button, Card, CardImg } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProp = {
    id : number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl}: StoreItemProp) => {
    const quantity = 0;
    return (
        <Card className='h-100'>
            <CardImg 
                variant='top'  
                src={imgUrl} 
                height="400px"
                style={{objectFit: "cover"}}
            />

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100'>Add to Cart</Button>
                    ): <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                            <div className='d-flex align-items-center flex-column justify-content-center' style={{gap: ".5rem"}}>
                                Hi
                            </div>
                                Bye
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem
