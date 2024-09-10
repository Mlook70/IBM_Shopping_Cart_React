import StoreItem from '../components/StoreItem';
import storeItems from '../data/item.json';
import { Col, Row } from 'react-bootstrap';


const Store = () => {
    return (
        <div>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItems.map(item => (
                    <Col>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Store
