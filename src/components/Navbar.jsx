import NavLink from "./NavLink";

const navItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between container mx-auto ">
        <h1 className="md:text-3xl text-xl font-semibold">Next Hero </h1>
        <ul className="flex items-center justify-center">
          {navItems.map(({ path, title }) => (
            <li key={path} className="mx-2">
              <NavLink
                exact={path === "/"}
                activeClassName="text-blue-500"
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
