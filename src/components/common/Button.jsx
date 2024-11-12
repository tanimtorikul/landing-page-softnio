const Button = ({ text }) => {
  return (
    <button className="bg-primary text-[#0A1425] font-semibold hover:bg-secondary px-5 py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-4 uppercase transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
