const Card = ({ icon, description }) => {
  return (
    <div className="m-4 rounded-lg bg-black p-6 text-center text-white shadow-md">
      <div>{icon}</div>
      <p className="mb-3 font-normal">{description}</p>
    </div>
  );
};

export default Card;
