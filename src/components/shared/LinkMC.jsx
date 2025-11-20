import { NavLink } from "react-router";

const LinkMC = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "text-slate-700" : "",
          isActive ? "text-indigo-600 font-bold" : "",
          isTransitioning ? "text-slate-700" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
};

export default LinkMC;