import { FC } from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    const actualYear = new Date().getFullYear();
    return (
        <footer className="py-4 px-8 bg-gray-900 shadow-footer flex lg:flex-row flex-col-reverse  items-center justify-between">
            <div className="mt-5 lg:mt-0">
                <span className="text-gray-500">
                    Copyright &copy; {actualYear}
                    <span className="text-zatcoin-blue-light mx-1">
                        Zatcoin
                    </span>
                    All rights reserved.
                </span>
            </div>
            <div className=" ">
                <ul className="flex items-center space-x-4 text-gray-500">
                    <li>
                        <a
                            href="https://zatcoin.io/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                        >
                            <HiGlobeAlt className="text-lg text-zatcoin-blue-light" />
                            <span className="hover:text-zatcoin-blue-light">
                                Website
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/zatcointools"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                        >
                            <FaTelegramPlane className="text-lg text-zatcoin-blue-light" />
                            <span className="hover:text-zatcoin-blue-light">
                                Telegram
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/zatcoin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                        >
                            <FaTwitter className="text-lg text-zatcoin-blue-light" />
                            <span className="hover:text-zatcoin-blue-light">
                                Twitter
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
