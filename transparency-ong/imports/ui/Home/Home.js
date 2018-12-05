import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    componentDidMount (){
        $('.carousel').carousel({
            interval:200
        })
    }
    render() {

        const events = (
            <div className="container">
                <div className="row">
                    <div className="col-xl">

                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://image.shutterstock.com/image-vector/keep-simple-business-concept-lightbulbs-260nw-489515029.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://image.shutterstock.com/display_pic_with_logo/188833102/1016583331/stock-vector-flat-smile-icon-simple-smile-face-icon-1016583331.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://image.shutterstock.com/image-vector/keep-simple-business-concept-lightbulbs-260nw-489515029.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

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