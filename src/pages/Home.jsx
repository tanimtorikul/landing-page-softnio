import { Toaster } from "react-hot-toast";
import AboutUs from "../components/AboutUs/AboutUs";
import BookingForm from "../components/BookingForm/BookingForm";
import Header from "../components/Header/Header";
import PopularFood from "../components/PopularFood/PopularFood";

const Home = () => {
  return (
    <div>
      <Header />

      <div>
        <AboutUs />
        <PopularFood />
        <BookingForm/>
      </div>
    </div>
  );
};

export default Home;
