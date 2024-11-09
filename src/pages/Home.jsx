import AboutUs from "../components/AboutUs/AboutUs";
import BookingForm from "../components/BookingForm/BookingForm";
import Header from "../components/Header/Header";
import PopularFood from "../components/PopularFood/PopularFood";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />

      <div id="about">
        <AboutUs />
      </div>

      <div id="menu">
        <PopularFood />
      </div>

      <div id="booking">
        <BookingForm />
      </div>

      <div id="testimonial">
        <Testimonial />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
