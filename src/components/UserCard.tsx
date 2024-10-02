import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-xs bg-white px-2 py-1 rounded-md text-green-600">
          Oct 1, 2024
        </span>
        <Image src="/more.png" alt="More" width={20} height={20}></Image>
      </div>
      <h1 className="text-2xl font-semibold my-4">13,212</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};
export default UserCard;
