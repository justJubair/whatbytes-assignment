import logo from "@assets/logo.png";
import user from "@assets/user.png";
import Image from "next/image";
const Topbar = () => {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between">
      <Image className="w-60" src={logo} width={400} height={400} alt="logo" />
      <div className="flex items-center gap-1.5 bg-gray-100 px-3 border-gray-200 border-1 rounded-2xl py-1.5 mr-10">
        <Image
          className="w-8 rounded-full"
          src={user}
          width={400}
          height={400}
          alt="logo"
        />
        <p className="font-bold">Elon Musk</p>
      </div>
    </div>
  );
};
export default Topbar;
