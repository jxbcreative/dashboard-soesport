import Link from "next/link";
import { useRouter } from "next/router";
import { BsChatFill } from "react-icons/bs";
import { GiBallerinaShoes } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { NavLink } from "../../../utils/types";

const navLinks: NavLink[] = [
  {
    page: "Dashboard",
    link: "/",
    icon: <RxDashboard />,
    color: [
      "bg-blue-500",
      "border-blue-500",
      "hover:border-blue-500",
      "hover:bg-blue-500",
    ],
  },
  {
    page: "Product",
    link: "/products",
    icon: <GiBallerinaShoes />,
    color: [
      "bg-red-500",
      "border-red-500",
      "hover:border-red-500",
      "hover:bg-red-500",
    ],
  },
  {
    page: "Sales",
    link: "/sales",
    icon: <SiGoogleanalytics />,
    color: [
      "bg-orange-500",
      "border-orange-500",
      "hover:border-orange-500",
      "hover:bg-orange-500",
    ],
  },
  {
    page: "Chat",
    link: "/chat",
    icon: <BsChatFill />,
    color: [
      "bg-green-500",
      "border-green-500",
      "hover:border-green-500",
      "hover:bg-green-500",
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-white w-52 h-screen py-4">
      <h2 className="font-bold text-lg text-center">
        Soe<span className="text-blue-500">Sport.</span>
      </h2>
      <ul className="mt-20 space-y-6 pl-6">
        {navLinks.map((val, idx) => (
          <li key={idx}>
            <Link
              href={val.link}
              className={` ${
                router.pathname === val.link
                  ? `font-semibold ${val.color[1]} bg-gray-100 rounded-l-md border-r-[3px] translate-y-0`
                  : ""
              } transition-all ease-in-out duration-500 flex items-center`}
            >
              <div
                className={`${
                  router.pathname == val.link
                    ? `${val.color[0]} text-white rounded-md`
                    : ""
                } transition-all ease-linear duration-200 ${
                  val.color[3]
                } p-3 hover:text-white rounded-md`}
              >
                <p className="text-md">{val.icon}</p>
              </div>
              <p className="text ml-2">{val.page}</p>
              {val.link == "/chat" && (
                <p className="font-normal ml-auto mr-5">0</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
