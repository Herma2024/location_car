import LogoIcon from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={LogoIcon} alt="logo" />
      <span className="font-semibold">Car Rental</span>
    </div>
  );
}

export default Logo