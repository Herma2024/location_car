import Logo from './Logo'
import Contact from '../../assets/contact.svg'
import LinkMC from './LinkMC';

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <Logo />
      <nav className="hidden md:flex gap-8 text-sm text-slate-700">
        <LinkMC to="/">Home</LinkMC>
        <LinkMC to="/cars">Vehicles</LinkMC>
        <LinkMC to="/details">Details</LinkMC>
        <LinkMC to="/about">About Us</LinkMC>
        <LinkMC to="/contact">Contact Us</LinkMC>
      </nav>
      <div className="hidden md:flex items-center gap-3 text-sm">
        <img src={Contact} alt="contact" />
        <div className="flex flex-col gap-1">
          <span className="text-slate-600">Need help?</span>
          <span className="font-bold">+243 829443004</span>
        </div>
      </div>
    </header>
  );
}

export default Header