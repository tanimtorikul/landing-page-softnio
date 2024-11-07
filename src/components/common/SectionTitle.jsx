const SectionTitle = ({ subtitle, title, titleColor }) => {
    return (
      <div>
        <p className="lg:text-xl font-bold text-secondary flex items-center">
          <span className="inline-block w-2.5 h-2.5 bg-secondary mr-2"></span>
          {subtitle}
        </p>
        <h2 className={`text-4xl mt-2 font-display ${titleColor ? titleColor : ''}`}>
          {title}
        </h2>
      </div>
    );
  };
  
  export default SectionTitle;
  