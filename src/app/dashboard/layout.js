import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard | Next Hero",
  description: "next hero desc",
};

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
