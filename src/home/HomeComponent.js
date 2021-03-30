import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class HomeComponent extends Component {
    constructor(props) {
        this.state = {

        }
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        {'This is home page......'}
                    </Col>
                </Row>
            </Container>
        )

    }
}