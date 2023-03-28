
import React from 'react'
import {Col, Container, Row ,Card,Button} from 'react-bootstrap'

let Counter =()=> {
  return (
    <>
        <Container className='mt-5'>
        <h1 className="text-center mb-5">MUSIC</h1>
        <div className="d-flex justify-content-center align-items-center">

            <Row>
                <Col xs={6}>
                  <Card style={{ width: '18rem', backgroundColor: 'transparent', border: 'none' ,marginRight: '50px'  }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">Album 1</Card.Title>
                      <Card.Img  src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <Card.Text className="mt-4">Price: $12.99</Card.Text>
                          <Button  className='mt-3' variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card style={{ width: '18rem', backgroundColor: 'transparent', border: 'none',marginLeft: '50px' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">Album 2</Card.Title>
                      <Card.Img  src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <Card.Text className="mt-4">Price: $14.99</Card.Text>
                          <Button  className='mt-3' variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </div>
        </Container>
        <Container className='mt-5'>
        <div className="d-flex justify-content-center align-items-center">

            <Row>
                <Col xs={6}>
                  <Card style={{ width: '18rem', backgroundColor: 'transparent', border: 'none',marginRight: '50px' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">Album 3</Card.Title>
                      <Card.Img  src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <Card.Text className="mt-4">Price: $9.99</Card.Text>
                          <Button  className='mt-3' variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card style={{ width: '18rem', backgroundColor: 'transparent', border: 'none' ,marginLeft: '50px'}}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">Album 4</Card.Title>
                      <Card.Img  src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <Card.Text className="mt-4">Price: $19.99</Card.Text>
                          <Button  className='mt-3' variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </div>
        </Container>
        <Container className='mt-5'>
        <h1 className="text-center mb-5">MERCH</h1>
        <div className="d-flex justify-content-center align-items-center">

            <Row>
                <Col xs={6}>
                  <Card style={{ width: '18rem', backgroundColor: 'transparent', border: 'none',marginRight:'50px' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">T-Shirt</Card.Title>
                      <Card.Img  src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png" />
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <Card.Text className="mt-4">Price: $19.99</Card.Text>
                          <Button  className='mt-3' variant="primary">Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card style={{ width: '18rem', backgroundColor: 'transparent', border: 'none',marginLeft:'50px' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Title className="text-center">Coffee Cup</Card.Title>
                      <div style={{ height: '280px', overflow: 'hidden' }}>
                          <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png" />
                       </div>
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <Card.Text className="m-0">Price: $14.99</Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </div>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </div>
        </Container>
        <div className="d-flex justify-content-center mt-4">
          <Button  className='mb-1' variant="primary">See Cart</Button>
        </div>
    </>
  )
}

export default Counter;
