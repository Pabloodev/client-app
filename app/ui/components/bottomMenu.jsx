import { House, Gavel , ScrollText, CircleUser, Headset } from "lucide-react";
import Link from "next/link";

export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 text-white flex justify-around px-6 py-6 text-center flex items-center justify-between">
      <Link href={"/home/"}>
      <div className="flex flex-col items-center gap-2 justify-center text-center">
        <House />
        <p>Home</p>
      </div>
      </Link>
      <Link href={"/home/services/"}>
      <div className="flex flex-col items-center gap-2 justify-center text-center">
        <Gavel />
        <p>Services</p>
      </div>
      </Link>
      <Link href={"/home/invoices/"}>
      <div className="flex flex-col items-center gap-2 justify-center text-center">
        <ScrollText />
        <p>Faturas</p>
      </div>
      </Link>
      <Link href={"/home/tickets/"}>
      <div className="flex flex-col items-center gap-2 justify-center text-center">
        <Headset />
        <p>Tickets</p>
      </div>
      </Link>
      <Link href={"/home/perfil/"}>
      <div className="flex flex-col items-center gap-2 justify-center text-center">
        <CircleUser />
        <p>Perfil</p>
      </div>
      </Link>
    </div>
  );
}
