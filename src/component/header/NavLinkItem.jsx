import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const NavLinkItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={
        ({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-gray-800 hover:text-gray-500 underline font-extrabold"
          : ""
      }
    >
      <p className="text-lg">{label}</p>
    </NavLink>
  );
};

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLinkItem;
