import { FC } from "react";
import { BiWallet } from "react-icons/bi";
import { useMoralis } from "react-moralis";

interface WalletInvestorProps {
    title: string;
    description: string;
}

const WalletInvestor: FC<WalletInvestorProps> = ({ title, description }) => {
    const { logout } = useMoralis();
    return (
        <div>
            <div className="flex items-center space-x-2 mb-5">
                <BiWallet className="text-xl" />
                <h4 className="uppercase font-bold">Wallet profile</h4>
            </div>
            <div className="flex flex-col p-10 bg-card">
                <h3 className="font-bold text-xl mb-5">{title}</h3>
                <span>Description:</span>
                <p>{description}</p>
                <button
                    onClick={() => logout()}
                    className="btn-connect bg-red-500 hover:bg-red-600 shadow-red-500/50 self-center"
                >
                    Disconnect
                </button>
            </div>
        </div>
    );
};

export default WalletInvestor;
