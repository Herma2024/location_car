import Logo from "./Logo";
import contact from '../../assets/contact.svg';
const Header = () => {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <Logo />
      <nav className="hidden md:flex gap-8 text-sm text-slate-700">
        <a href="#" className="hover:text-purple-600">Home</a>
        <a href="#" className="hover:text-purple-600">Vehicles</a>
        <a href="#" className="hover:text-purple-600">Details</a>
        <a href="#" className="hover:text-purple-600">About Us</a>
        <a href="#" className="hover:text-purple-600">Contact Us</a>
      </nav>
      <div className="hidden md:flex items-center gap-3 text-sm ">
         <img src={contact} alt='contact'/>
         <div className='flex flex-col'>
            <span className="text-slate-600 ">Need help?</span>
            <span className="font-bold gap-2">+243 829443004</span>
         </div>

      </div>

    </header>
  );
};
export default Header;