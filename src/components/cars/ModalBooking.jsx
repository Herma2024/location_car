const ModalBooking = ({ car }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold mb-4">Book your {car.name}</h2>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md p-2"
        />
      </form>
      <button className="w-full bg-orange-500 cursor-pointer text-white rounded-md py-2 my-4 font-semibold">
        Book now
      </button>
    </div>
  );
};

export default ModalBooking;