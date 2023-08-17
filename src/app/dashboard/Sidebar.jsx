import NavLink from "@/components/NavLink";

const navItems = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/dashboard/all-products",
    title: "All Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul>
        {navItems.map(({ path, title }) => (
          <li key={path}>
            <NavLink exact activeClassName="text-green-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
