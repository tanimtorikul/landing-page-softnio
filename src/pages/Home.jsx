import AboutUs from "../components/AboutUs/AboutUs";
import Header from "../components/Header/Header";
import PopularFood from "../components/PopularFood/PopularFood";

const Home = () => {
  return (
    <div>
      <Header />

      <div>
        <AboutUs />
        <PopularFood />
      </div>
    </div>
  );
};

export default Home;
