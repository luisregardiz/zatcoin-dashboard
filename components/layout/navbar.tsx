import Link from "next/link";
import { FC, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Sidebar from "./sidebar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <>
            <header className="p-4 bg-navbar z-20 w-full">
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="absolute left-4 p-2 hover:bg-gray-900/50 rounded-lg hover:text-zatcoin-blue-light/70 "
                    >
                        <HiMenuAlt1 className=" text-2xl text-zatcoin-blue-light" />
                    </button>
                    <Link href="/">
                        <a>
                            <span className="font-black text-zatcoin-blue-light uppercase tracking-widest ">
                                Zatcoin
                            </span>
                        </a>
                    </Link>
                </div>
            </header>
            <Sidebar isOpen={isOpen} setOpen={setOpen} />
        </>
    );
};

export default Navbar;
