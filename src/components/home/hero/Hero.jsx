import Header from '../../shared/Header'
import Bg from "../../../assets/bg.png"
import Car from "../../../assets/car.png"

const Hero = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <section className="relative bg-gradient-to-r from-violet-700 to-indigo-600 text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 right-0">
            <img src={Bg} alt="bg" className="w-full h-full object-cover" />
            <img src={Car} alt="car" className="w-full absolute top-20 left-40 h-full object-contain" />
          </div>
          <div className="absolute -left-24 -bottom-20 w-96 h-96 bg-violet-800 opacity-30 rounded-full filter blur-3xl"></div>

          <div className="md:w-2/3 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Experience the road like never before
            </h1>
            <p className="mt-4 text-slate-100 max-w-xl">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper.
            </p>
            <button class="mt-6 px-4 py-2 bg-orange-500 rounded-md cursor-pointer">
              View all cars
            </button>
          </div>

          <aside className="md:w-1/3 mt-8 md:mt-0 md:pl-8 z-20">
            <div className="bg-white text-slate-800 rounded-xl shadow-lg p-6 w-full max-w-sm">
              <h3 className="text-xl font-semibold mb-4">Book your car</h3>
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
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="border rounded-md p-2"
                    placeholder="Rental date"
                  />
                  <input
                    className="border rounded-md p-2"
                    placeholder="Return date"
                  />
                </div>
                <button className="w-full bg-orange-500 cursor-pointer text-white rounded-md py-2 font-semibold">
                  Book now
                </button>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}

export default Hero