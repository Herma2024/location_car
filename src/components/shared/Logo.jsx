import LogoIco from '../../assets/logo.svg';
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={LogoIco} alt='car logo' className="w-10 h-10" />
      <span className="font-semibold">Car Rental</span>
    </div>
  );
};
export default Logo;