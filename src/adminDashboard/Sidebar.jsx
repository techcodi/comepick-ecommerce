import { RiApps2AddLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar-content">
      <p className="logo">
        <span style={{ color: "#0077FF" }}>COME</span>
        <span style={{ color: "orange" }}>PICK</span>
      </p>

      <ul className="routes-list">
        <Link to="all-overview">
          <RiApps2AddLine /> <span>Overview</span>
        </Link>
        <Link to="all-products">
          <MdOutlineShoppingBag /> <span> Products</span>{" "}
        </Link>
        <Link to="all-orders">
          <LuClipboardList />
          <span>Orders</span>
        </Link>

        <Link to="all-customers">
          <GrGroup /> <span>Customers</span>
        </Link>
        <Link>
          <HiOutlineDocumentReport /> <span>Reports</span>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
