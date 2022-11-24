import React from 'react'
import Button from 'react-bootstrap/Button'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <Button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></Button>
                    <Button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></Button>
                    <Button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></Button>
                    <Button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></Button>
                    <Button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></Button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../imagenes/pres1.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../imagenes/pres2.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../imagenes/pres3.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../imagenes/pres4.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../imagenes/pres5.jpg")} className="d-block w-100" alt="..." />
                    </div>

                </div>
                <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </Button>
                <Button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </Button>
            </div>
        </div>
    )
}

export default Carousel
