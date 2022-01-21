import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { investorType } from "../../../helpers/getInvestorType";
import Shirmp from "../../../public/assets/images/investor-icon/50-gray-shrimp.svg";
import Crab from "../../../public/assets/images/investor-icon/50-gray-crab.svg";
import Octopus from "../../../public/assets/images/investor-icon/50-gray-octopus.svg";
import Fish from "../../../public/assets/images/investor-icon/50-gray-fish.svg";
import Dolphin from "../../../public/assets/images/investor-icon/50-gray-dolphin.svg";
import Shark from "../../../public/assets/images/investor-icon/50-gray-shark.svg";
import Whale from "../../../public/assets/images/investor-icon/50-gray-whale.svg";
import Humpback from "../../../public/assets/images/investor-icon/50-gray-humpback.svg";
import ZatcoinLogo from "../../../public/assets/images/zatlogo.svg";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollBlock } from "../../../hooks/useScrollBlock";

interface InvestorTypeInfoProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const InvestorTypeInfo: FC<InvestorTypeInfoProps> = ({
    showModal,
    setShowModal,
}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    useEffect(() => {
        showModal ? blockScroll() : allowScroll();
    }, [allowScroll, blockScroll, showModal]);
    const getInversorIcon = (id: string) => {
        switch (id) {
            case "shrimp":
                return Shirmp;
            case "crab":
                return Crab;
            case "octopus":
                return Octopus;
            case "fish":
                return Fish;
            case "dolphin":
                return Dolphin;
            case "shark":
                return Shark;
            case "whale":
                return Whale;
            case "humpback":
                return Humpback;
            default:
                return ZatcoinLogo;
        }
    };
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.1,
                    }}
                    onClick={(ev) => setShowModal(false)}
                    className="fixed w-full h-full bg-gray-900/50 top-0 left-0 flex items-center justify-center z-30 "
                >
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{
                            delay: 0.05,
                            duration: 0.2,
                            y: { type: "spring" },
                        }}
                        onClick={(ev) => ev.stopPropagation()}
                        className="bg-gray-900 rounded-lg py-10 shadow-lg relative mx-5"
                    >
                        <button
                            onClick={() => setShowModal((prev) => !prev)}
                            className="absolute top-6 right-10"
                        >
                            <MdOutlineCancel className="text-3xl hover:text-gray-400" />
                        </button>
                        <ul className="w-3/4 mx-auto space-y-3">
                            {investorType.map((type) => (
                                <li
                                    key={type.id}
                                    className="flex items-center space-x-5"
                                >
                                    <div className="min-w-fit">
                                        <Image
                                            src={getInversorIcon(type.id)}
                                            alt="Investor Icon"
                                            height={35}
                                            width={35}
                                            objectFit="contain"
                                            priority
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h5 className="font-bold text-sm mb-1 text-gray-400">
                                            {type.title}
                                        </h5>
                                        <span className="text-sm">
                                            {type.description}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InvestorTypeInfo;
