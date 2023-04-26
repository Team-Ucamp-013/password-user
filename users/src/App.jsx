import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'

const App = () => {
  const [products, setProducts] = useState([])

  const getProducts = async() =>{
    const url ='http://localhost:4008/apis/v1/products'
    const productos = await axios.get(url)
    setProducts(productos.data)
  }

  const navigation = useNavigate()
  const buyProducts = () =>{
    navigation('/login')
  }


   useEffect(()=>{
    getProducts()
   },[]);

   return (
    <Container>
      <Row>
        {
          products.length > 0 ?
            products.map((pr, i) => (
              <Col md={6} key={i} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={pr.image} />
                  <Card.Body>
                    <Card.Title>{pr.name}</Card.Title>
                    <Card.Text>
                    {pr.description}
                    </Card.Text>
                    <Card.Text>
                    {pr.price}
                    </Card.Text>
                    <Button variant="primary" onClick={buyProducts}>Comprar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div>
              <h1>Sin productos</h1>
            </div>
        }
      </Row>
    </Container>
  )
}

export default App
