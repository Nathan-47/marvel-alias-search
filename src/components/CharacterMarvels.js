import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacterMarvels = ({item}) => {
    return (
        <div className="main-card">
        <Card>
          <Card.Body>
          <Container>
            <Row>
              <Col>  
              <Card.Text id="character-name">
                {/*retreives chracter name from marvel api */}
             {item.name}
                </Card.Text>
                </Col>
              <Col>  
               {/*retreives chracter image from marvel api */}
              <Card.Img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="character-pic" />
              </Col>
              </Row>
                </Container>
                <Card.Text id="character-bio">
                   {/*retreives chracter bio from marvel api */}
                {item.description}
                </Card.Text>
                </Card.Body>
                </Card>
                </div>
    )
}

export default CharacterMarvels