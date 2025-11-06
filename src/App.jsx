import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">🚗</div>
          <span className="font-semibold">Car Rental</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-slate-700">
          <a href="#">Home</a>
          <a href="#">Vehicles</a>
          <a href="#">Details</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="hidden md:flex items-center gap-3 text-sm">
          <span className="text-slate-600">Need help?</span>
          <span className="font-semibold">+243 829443004</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <section className="relative bg-gradient-to-r from-violet-700 to-indigo-600 text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center overflow-hidden">
         
          <div className="absolute -left-24 -bottom-20 w-96 h-96 bg-violet-800 opacity-30 rounded-full filter blur-3xl"></div>

          <div className="md:w-2/3 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Experience the road like never before</h1>
            <p className="mt-4 text-slate-100 max-w-xl">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.</p>
            <button class="mt-6 bg-orange-500">View all cars</button>
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
                  <input className="border rounded-md p-2" placeholder="Rental date" />
                  <input className="border rounded-md p-2" placeholder="Return date" />
                </div>
                <button className="w-full bg-orange-500 text-white rounded-md py-2 font-semibold">Book now</button>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App
