import Link from "next/link";
import { FC, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Sidebar from "./sidebar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <>
            <header className="p-4 bg-navbar w-full z-20">
                <div className="w-1/2 flex items-center justify-between">
                    <button onClick={() => setOpen((prev) => !prev)}>
                        <HiMenuAlt1 className=" text-2xl text-zatcoin-blue-light cursor-pointer" />
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
