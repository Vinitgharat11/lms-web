import Image from "next/image";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center">
     <MobileSidebar/>
    </div>
  )
}
