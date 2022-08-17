import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Topbar />
        <main className="bg-selago h-full">{children}</main>
      </div>
    </div>
  );
}
