import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="col_1">
        <h1>Our Mission & Vision</h1>
        <p>
          To serve more than 100 million people with the healthy, delicious and
          ready-to-eat food products.
        </p>
        <p>
          To achieve continuous business growth together with our stakeholders
          including farmers, exporters and distributors.
        </p>
        <p>
          We strive to be the best company in India for peanut butter and
          related products. We endeavor to achieve this goal by providing
          competitive products in all means.
        </p>
      </div>
      <div className="col_2">
        <img
          src="//pintola.in/cdn/shop/files/desktop_size_5000x.jpg?v=1620836643 5000w"
          alt="col_image"
        />
        <img src="//pintola.in/cdn/shop/files/Asset_7_150x-100_5000x.jpg?v=1678087744 5000w" />
      </div>
    </div>
  );
}

export default About;
