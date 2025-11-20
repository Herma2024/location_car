import React, { useEffect, useState } from "react";
import CardCard from './CardCard';
import { LoaderCircle, AlertCircle } from "lucide-react";
import axios from "axios";

const Loader = () => {
  return (
      <div className="flex items-center justify-center w-full h-96">
        <LoaderCircle className="w-20 h-20 animate-spin text-indigo-500" />
      </div>
    );
}

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-96 gap-2">
      <AlertCircle className="w-10 h-10 text-red-700" />
      <p className="text-red-700 font-semibold">Error fetching cars</p>
    </div>
  );
}

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
  (async () => {
    try {
       const response = await axios.get(
         "https://dummyjson.com/products/category/vehicle"
       );
       setCars(response.data.products);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setError(true);
    }finally {
      setLoading(false);
    }
   })();

  }, []);


  return (
    <main className="max-w-6xl mx-auto px-6 pb-16">
      <section className="relative bg-gradient-to-r from-violet-700 to-indigo-600 text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center overflow-hidden">
        <h1>Cars</h1>
      </section>
      {loading && <Loader />}
      {error && <ErrorMessage/>}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cars.map((car) => (
            <CardCard
              key={car.id}
              car={{
                name: car.title,
                description: car.description,
                image: car.images[1],
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Cars;
