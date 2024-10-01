import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center gap-2 justify-center p-3">
          <Image src="/logo.png" alt="Logo" width={32} height={32}></Image>
          <span className="hidden xl:block">SchoolLama</span>
        </Link>
        <Menu></Menu>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
