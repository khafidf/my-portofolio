const Card = ({ title, description, icon }) => {
  return (
    <div className="m-4 rounded-lg border border-black bg-white shadow-md">
      <div>{icon}</div>
      <div className="p-5 pt-0 text-center text-black">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="mb-3 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Card;
