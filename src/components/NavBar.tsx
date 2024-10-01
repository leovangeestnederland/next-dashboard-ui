import Image from "next/image";

type Props = {};
const NavBar = (props: Props) => {
  return (
    <div className="flex items-start justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex md:gap-2 items-center text-xs rounded-full ring-[2px] ring-gray-300 px-2">
        <Image src="/search.png" alt="Search" width={20} height={20}></Image>
        <input
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        ></input>
      </div>
      {/* ICON AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/message.png"
            alt="Message"
            width={20}
            height={20}
          ></Image>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="Announcement"
            width={20}
            height={20}
          ></Image>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          width={36}
          height={36}
          alt="Avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
export default NavBar;
