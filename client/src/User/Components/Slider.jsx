import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  return (
    <Carousel style={{ height: "90vh" }}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img style={{ objectFit: "cover", height: "92.5vh" }} src="https://www.lineo-pinsel.eu/wp-content/uploads/2022/05/lineo_pinselfabrik_kosmetikpinsel_slider.jpg" className="d-block w-100" alt="..." />


        <div className="carousel-caption " style={{ bottom: "16rem" }}>
          <h1>Explore our carefully selected array of brands, each offering a distinct allure and a promise of unparalleled quality. Whether you seek the sophistication of established icons or the excitement of emerging trendsetters, we've got it all under one glamorous roof.</h1>
          {/* <p>Some representative placeholder content for the first slide.</p> */}
        </div>


      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{ objectFit: "cover", height: "92.5vh" }} src="https://www.juviasplace.com/cdn/shop/articles/0FAD392F-4AAB-4EEF-9EF4-099A83CF17BC_1024x1024.jpg?v=1642526080" className="d-block w-100" alt="..." />


        <div className="carousel-caption " style={{ bottom: "16rem" }}>
          <h1>Step into a realm where luxury meets affordability, where quality is never compromised, and where your beauty aspirations are met with precision. We believe that your makeup routine should be an experience, an adventure, and an opportunity to express your unique personality.</h1>
          {/* <p>Some representative placeholder content for the first slide.</p> */}
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;