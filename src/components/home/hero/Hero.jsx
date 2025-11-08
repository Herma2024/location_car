import Header from '../../shared/Header'
import car from '../../../assets/car-hero.png';
import bg from '../../../assets/bg.png';
const Hero = () => {
  return (
    <>
      <Header />
        <main className="max-w-5xl mx-auto px-6 pb-12">
        <section className="relative bg-gradient-to-r from-violet-700 to-indigo-600 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center overflow-hidden md:min-h-[280px]">
         
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src={bg} alt="bg" className="w-full h-full object-cover opacity-60" />
          </div>

   
          <div className="absolute -left-20 -bottom-16 w-72 h-72 bg-violet-800 opacity-30 rounded-full filter blur-3xl z-5"></div>

         
          <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-2/3 z-10 pointer-events-none hidden md:block w-[520px] h-[410px]">
            <img src={car} alt="car-hero" className="w-full h-full object-contain" />
          </div>

         
          <div className="md:w-2/3 z-20 relative">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Experience the road like never before</h1>
            <p className="mt-3 text-slate-100 max-w-lg">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.</p>
            <button className="mt-5 w-44 bg-orange-500 text-white rounded-md py-2 font-semibold">View all cars</button>
          </div>

          <aside className="w-full md:w-[410px] md:h-[380px] mt-6 md:mt-0 md:pl-6 z-20 relative flex items-center">
            <div className="bg-white text-slate-800 rounded-xl shadow-lg p-5 w-full max-w-[280px] ">
              <h3 className="text-lg font-semibold mb-3">Book your car</h3>
              <div className="space-y-3">
                <select className="w-full border rounded-md p-2">
                  <option>Car type</option>
                </select>
                <select className="w-full border rounded-md p-2">
                  <option>Place of rental</option>
                </select>
                <select className="w-full border rounded-md p-2">
                  <option>Place of return</option>
                </select>
                <div className="flex flex-col gap-2">
                      <div className="relative">
                        <label htmlFor="rental-date" className="block">Rental date</label>
                        <input id="rental-date" type="date" className="mt-1 border rounded-md p-2 w-full"/>
                      </div>
                      <div className="relative">
                        <label htmlFor="return-date" className="block">Return date</label>
                        <input id="return-date" type="date" className="mt-1 border rounded-md p-2 w-full" />
                      </div>
                </div>
                <button className="w-full bg-orange-500 text-white rounded-md py-2 font-semibold">Book now</button>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};
export default Hero;