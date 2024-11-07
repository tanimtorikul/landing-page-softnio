const FoodCard = ({ food }) => {
    return (
      // each food card
      <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <img
          src={food.image}
          alt={food.title}
          className="w-40 h-32 mx-auto object-cover rounded-md mb-4"
        />
        <h2 className='border border-t-2 border-secondary w-1/2 mx-auto my-6'></h2>
        <div className='text-center'>
          <h3 className="text-2xl font-display text-text-primary">{food.title}</h3>
          <p className="text-text-primary mt-2">{food.description}</p>
        </div>
      </div>
    );
  };
  
  export default FoodCard;
  