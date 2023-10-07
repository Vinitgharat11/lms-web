import Navbar from "@/app/(dashboard)/_components/navbar";

export default function DashboardLayout({children}) {
  return (
    <>
    <div className="h-full">
      <Navbar/>
    </div>
    <div className="">
      <main>
        {children}
      </main>
    </div>
    </>
  )
}
