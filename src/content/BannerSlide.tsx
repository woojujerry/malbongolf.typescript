import Carousel from "react-bootstrap/Carousel";

function BannerSlide(): JSX.Element {
  return (
    <Carousel className="bannerslide-box">
      <Carousel.Item>
        <img
          src="/malbongolf.typescript/img/6.banner/1.jpg"
          style={{ height: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/malbongolf.typescript/img/6.banner/2.jpg"
          style={{ height: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/malbongolf.typescript/img/6.banner/3.jpg"
          style={{ height: "500px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerSlide;
