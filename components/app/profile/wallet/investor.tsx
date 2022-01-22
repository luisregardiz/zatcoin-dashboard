import Image from "next/image";
import { FC, useState } from "react";
import { BiWallet } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useMoralis } from "react-moralis";
import Crab from "../../../../public/assets/images/investor/Crab.svg";
import Dolphin from "../../../../public/assets/images/investor/Dolphin.svg";
import Fish from "../../../../public/assets/images/investor/Fish.svg";
import Humpback from "../../../../public/assets/images/investor/Humpback.svg";
import Octopus from "../../../../public/assets/images/investor/octopus.svg";
import Shark from "../../../../public/assets/images/investor/Shark.svg";
import Shirmp from "../../../../public/assets/images/investor/Shirmp.svg";
import Whale from "../../../../public/assets/images/investor/Whale.svg";
import ZatcoinLogo from "../../../../public/assets/images/zatlogo.svg";
import InvestorTypeInfo from "../../modal/investor-info";
import ZatcoinSpinner from "../../spinner";

interface WalletInvestorProps {
    id: string;
    title: string;
    description: string;
}

const WalletInvestor: FC<WalletInvestorProps> = ({
    id,
    title,
    description,
}) => {
    const { logout } = useMoralis();
    const [showModal, setShowModal] = useState<boolean>(false);

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
        <>
            <div>
                <div className="flex items-center space-x-2 mb-5">
                    <BiWallet className="text-xl" />
                    <h4 className="uppercase font-bold">Wallet profile</h4>
                </div>
                <div className="md:p-20 p-10 bg-card flex flex-col md:flex-row items-center justify-center md:space-x-14 space-x-0 relative">
                    <div className="md:w-auto  w-1/2">
                        <Image
                            src={getInversorIcon(id)}
                            alt="Inversor Image"
                            height={180}
                            width={180}
                            objectFit="contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 w-auto md:mt-0 mt-5 ">
                        <h3 className="font-bold text-xl mb-5 md:text-left text-center">
                            You are a {title}
                        </h3>
                        <span className="font-bold text-gray-200 md:text-left text-center">
                            Description:
                        </span>
                        <p className="mt-1 md:text-left text-center">
                            {description}
                        </p>
                        <button
                            onClick={() => logout()}
                            className="btn-connect bg-red-500 hover:bg-red-600 shadow-red-500/50 md:self-start self-center mt-10 mb-5"
                        >
                            Disconnect
                        </button>
                    </div>
                    <button
                        onClick={() => setShowModal((prev) => !prev)}
                        className="p-2 rounded-full hover:bg-gray-900/50 absolute md:top-16 top-10 md:right-16 right-10"
                    >
                        <HiOutlineInformationCircle className="text-2xl" />
                    </button>
                </div>
            </div>

            <InvestorTypeInfo
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default WalletInvestor;
