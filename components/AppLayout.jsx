import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export default function AppLayout({ children }) {
  return (
      <div className="w-full">
        <Header/>
        <div className="content flex">
          <Sidebar />
          <main className="border-t w-full border-l border-gray-100 rounded-tl-md p-2">{children}</main>
        </div>
      </div>
  );
}
