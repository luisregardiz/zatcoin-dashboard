import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { HiHome, HiUser } from "react-icons/hi";

interface SidebarProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    key="modal"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, x: -100 }}
                    onClick={() => setOpen((prev) => !prev)}
                    className="absolute h-full md:w-1/4 lg:w-1/5 w-1/2 left-0 top-0 z-10 mt-14 py-5 px-4 bg-sidebar"
                >
                    <h4 className="mb-5 text-gray-600 uppercase font-extrabold text-sm pl-4">
                        Menu
                    </h4>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <Link href="/">
                                <a className="btn-sidebar">
                                    <HiHome className="text-xl" />
                                    <span className="uppercase font-bold">
                                        Home
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile">
                                <a className="btn-sidebar">
                                    <HiUser className="text-xl" />
                                    <span className="uppercase font-bold">
                                        Profile
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
