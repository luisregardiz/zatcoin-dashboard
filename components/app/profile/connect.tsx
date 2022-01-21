import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { BiWallet } from "react-icons/bi";
import { useMoralis } from "react-moralis";

interface ConnectProfileProps {}

const ConnectProfile: FC<ConnectProfileProps> = () => {
    const { isAuthenticating, authenticate, authError } = useMoralis();

    useEffect(() => {
        if (authError) {
            toast.error(authError.message, {
                style: {
                    backgroundColor: "#053D57",
                    fontWeight: "600",
                    color: "#f9fafb",
                    padding: "1rem",
                },
            });
        }
    }, [authError]);
    return (
        <div className="mx-10">
            <div className="flex items-center space-x-2 mb-5">
                <BiWallet className="text-xl" />
                <h4 className="uppercase font-bold">Wallet profile</h4>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-card">
                <h3 className="font-bold md:text-2xl text-base">
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
                    className="btn-connect mt-10 mb-5"
                >
                    Connect Now
                </button>
            </div>
        </div>
    );
};

export default ConnectProfile;
