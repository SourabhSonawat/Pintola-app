import "./home.css";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="home">
      <Carousel>
        <img
          src="//pintola.in/cdn/shop/files/Website_Banner_1_1600x.jpg?v=1709183995"
          alt="banner1"
        />
        <img
          src="//pintola.in/cdn/shop/files/Desktop_1600x.jpg?v=1704966813"
          alt="banner2"
        />
        <img
          src="//pintola.in/cdn/shop/files/Website-Banner-copy3_1600x.jpg?v=1708516056"
          alt="banner3"
        />
      </Carousel>
      <div>shop our best seller</div>
    </div>
  );
}

export default Home;
