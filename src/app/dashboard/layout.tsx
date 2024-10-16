import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-white text-black  ">
      {/* Dashboard Sidebar */}
      {/* <SideNavbar /> */}
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="hidden md:col-span-2 md:block ">
          <Sidebar />
        </div>
        <div className="p-8 w-full col-span-12 md:col-span-10">{children}</div>
      </div>
    </div>
  );
}
