import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {

        const events = (
            <div className="container">
                <h2>Bienvenido [usuario]!!!</h2>
                <h3>Estos son los evento activos, animate a donar: </h3>
                <div className="row">
                    <div className="col-xl carousels">

                        <Carousel>
                            <Carousel.Item>
                                <img  alt="900x500" src="https://image.shutterstock.com/image-vector/keep-simple-business-concept-lightbulbs-260nw-489515029.jpg" />
                                <Carousel.Caption  className="items">
                                    <h3>[NOMBRE DEL EVENTO]</h3>
                                    <p>[DESCRIPCION DEL EVENTO]</p>
                                    <button className="btn btn-secondary">Ver Mas...</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img  alt="900x500" src="https://image.shutterstock.com/display_pic_with_logo/188833102/1016583331/stock-vector-flat-smile-icon-simple-smile-face-icon-1016583331.jpg" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img  alt="900x500" src="https://image.shutterstock.com/image-vector/keep-simple-business-concept-lightbulbs-260nw-489515029.jpg" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {events}
            </div>
        )

        carousel: () => {

        }
    }
}
export default Home;