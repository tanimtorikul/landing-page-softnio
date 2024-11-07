
import AboutUs from "../components/AboutUs/AboutUs";
import BookingForm from "../components/BookingForm/BookingForm";
import Header from "../components/Header/Header";
import PopularFood from "../components/PopularFood/PopularFood";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Header />

      <div>
        <AboutUs />
        <PopularFood />
        <BookingForm />
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
