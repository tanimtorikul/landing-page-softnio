import Vector from "../../assets/Vector";

const TestimonialCard = ({ testimonial }) => {
  const { customerImg, customerName, review, address, youtubeVideo } = testimonial;

  return (
    <div className="relative flex flex-col-reverse lg:flex-row lg:h-[70vh]">
      <div className="absolute bottom-0 lg:bottom-28">
        {/* Adjust size of Vector for different screen sizes */}
        <Vector className="w-7 h-20 lg:w-24 lg:h-48" />
      </div>
      {/* review section */}
      <div className="lg:w-2/5 bg-primary p-4 lg:p-20 flex flex-col gap-12 lg:gap-[164px] justify-center">
        {/* review */}
        <h3 className="text-xl">
          <div className="flex">
            <span className="text-6xl mr-2">“</span>
            <span>{review}</span>
          </div>
        </h3>
        {/* customer */}
        <div className="flex justify-between pl-4 lg:pl-0 mt-4 border-b border-[#0A1425]">
          <div>
            <h3 className="font-display text-lg">{customerName}</h3>
            <p className="text-sm text-[#333333]">{address}</p>
          </div>

          <div className="border-b-4 border-secondary">
            <img
              src={customerImg}
              alt={customerName}
              className="w-9 h-9 rounded-full mb-4"
            />
          </div>
        </div>
      </div>
      {/* YT video section */}
      <div className="w-full lg:w-3/5">
        <iframe
          width="100%"
          height="300" 
          className="lg:h-full lg:aspect-w-16 lg:aspect-h-9 h-[200px]"
          src={`https://www.youtube.com/embed/${new URL(youtubeVideo).pathname.split("/").pop()}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TestimonialCard;
