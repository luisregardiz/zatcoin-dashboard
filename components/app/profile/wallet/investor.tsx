import { FC, useState } from "react";
import { BiWallet } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useMoralis } from "react-moralis";
import InvestorTypeInfo from "../../modal/investor-info";

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
                return "/assets/images/investor/Shirmp.svg";
            case "crab":
                return "/assets/images/investor/Crab.svg";
            case "octopus":
                return "/assets/images/investor/octopus.svg";
            case "fish":
                return "/assets/images/investor/Fish.svg";
            case "dolphin":
                return "/assets/images/investor/Dolphin.svg";
            case "shark":
                return "/assets/images/investor/Shark.svg";
            case "whale":
                return "/assets/images/investor/Whale.svg";
            case "humpback":
                return "/assets/images/investor/Humpback.svg";
            default:
                return "/assets/images/zatlogo.svg";
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
                        <img
                            src={getInversorIcon(id)}
                            alt="Inversor Image"
                            height={180}
                            width={180}
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
