const Button = ({ text }) => {
  return (
    <button className="bg-primary text-[#0A1425] font-semibold hover:bg-secondary px-6 py-2 uppercase transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
