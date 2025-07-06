import NavBar from "@/components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <NavBar />
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}