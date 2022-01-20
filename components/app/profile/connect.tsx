import { FC } from "react";
import { BiWallet } from "react-icons/bi";
import { useMoralis } from "react-moralis";
import RegisterUser from "./register";

interface ConnectProfileProps {}

const ConnectProfile: FC<ConnectProfileProps> = () => {
    const { isAuthenticating, authenticate } = useMoralis();

    return (
        <div>
            <div className="flex items-center space-x-2 mb-5">
                <BiWallet className="text-xl" />
                <h4 className="uppercase font-bold">Wallet profile</h4>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-card">
                <h3 className="font-bold text-2xl">
                    {isAuthenticating
                        ? "Authenticating..."
                        : "Connect your wallet to get wallet profile"}
                </h3>
                <button
                    onClick={() =>
                        authenticate({
                            signingMessage: "Zatcoin Dashboard Authentication",
                        })
                    }
                    className="btn-connect"
                >
                    Connect Now
                </button>
            </div>
        </div>
    );
};

export default ConnectProfile;