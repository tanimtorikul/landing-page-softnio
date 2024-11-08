import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, Modal } from "antd";
import SectionTitle from "../common/SectionTitle";
import bookingimg from "../../assets/bookingimg.jpeg";
import Button from "../common/Button";
import "./BookingForm.css";

const BookingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  //   to show modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  //   to keep booking data
  const [bookingData, setBookingData] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // modal with booking details
      setBookingData(data);
      setIsModalVisible(true);

      reset();
    }, 1000);
  };

  return (
    <div
      className="bg-cover lg:bg-cover  min-h-[80vh] bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bookingimg})`,
      }}
    >
      {/* content */}
      <div className="max-w-container mx-auto py-8 px-8 lg:px-0 w-full">
        <SectionTitle
          subtitle="Book Now"
          title="Book Your Table"
          titleColor="text-white"
        />

        {/* Form */}
        <div className="w-full lg:w-1/2 py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name and email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {/* name */}
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...control.register("name", {
                    required: "Name is required",
                  })}
                  className="w-full px-4 py-2 border bg-transparent text-sm text-white"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* email */}
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  {...control.register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-2 border bg-transparent text-sm text-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {/* Date Picker using antd */}
              <div className="mb-4">
                <Controller
                  name="date"
                  control={control}
                  defaultValue={null}
                  rules={{ required: "Date is required" }}
                  render={({ field }) => (
                    <DatePicker
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      placeholder="Select Reservation Date"
                      className="w-full px-4 py-2 bg-transparent text-sm text-white rounded-none"
                    />
                  )}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date.message}</p>
                )}
              </div>

              {/* people field */}
              <div>
                <input
                  id="people"
                  type="number"
                  placeholder="People"
                  {...control.register("people", {
                    required: "People count is required",
                    min: {
                      value: 1,
                      message: "People count must be at least 1",
                    },
                    max: {
                      value: 100,
                      message: "Max 100 people allowed",
                    },
                  })}
                  className="w-full px-4 py-2 border bg-transparent text-sm text-white"
                />
                {errors.people && (
                  <p className="text-red-500 text-sm">
                    {errors.people.message}
                  </p>
                )}
              </div>
            </div>

            {/* text area msg */}
            <div className="mb-4">
              <textarea
                placeholder="Message"
                {...control.register("message")}
                rows={5}
                className="w-full px-4 py-2 border bg-transparent text-sm text-white"
              />
            </div>

            {/* Submit btn*/}
            <div className="mt-4">
              <Button
                text={loading ? "Booking..." : "Book Now"}
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>

      {/* modal to show booking information */}
      <Modal
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        {/* booking details */}
        {bookingData && (
          <div className="modal-content">
            <h2 className="text-center text-2xl font-semibold text-green-500">
              Your Booking is Confirmed!
            </h2>
            <p className="mt-4 text-lg">
              Thank you, <strong>{bookingData.name}</strong>, for booking us!
            </p>

            <div className="mt-6">
              <p>Email: {bookingData.email}</p>
              <p>
                Reservation Date:{" "}
                {bookingData.date?.format("dddd, MMMM Do YYYY")}
              </p>
              <p>People Count: {bookingData.people}</p>
              <p>
                Special Requests:{" "}
                {bookingData.message || "No special requests."}
              </p>
            </div>

            <div className="mt-6 text-center">
              <p>We are excited to welcome you!</p>
              <p>Our team is preparing your table. See you soon! 😊</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BookingForm;
