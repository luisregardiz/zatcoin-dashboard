import { useRouter } from "next/router";
import { FC } from "react";
import { BiWallet } from "react-icons/bi";
import { useMoralis } from "react-moralis";

interface RegisterUserProps {}

const RegisterUser: FC<RegisterUserProps> = () => {
    const { logout } = useMoralis();
    const router = useRouter();
    return (
        <div className="mx-10">
            <div className="flex items-center space-x-2 mb-5">
                <BiWallet className="text-xl" />
                <h4 className="uppercase font-bold">Zatcoin</h4>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-card ">
                <h3 className="font-bold md:text-2xl text-xl mb-5">
                    This wallet is not registered in Zatcoin yet.
                </h3>
                <span>
                    You have to register and accept the
                    <a
                        href="https://zatcoin.io/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zatcoin-blue-light hover:text-opacity-70 mx-1"
                    >
                        term & conditions
                    </a>
                    of Zatcoin
                </span>
                <div className="flex flex-col md:flex-row items-center  md:space-x-5 space-x-0 mb-5 mt-10 space-y-5 md:space-y-0">
                    <button
                        onClick={() => router.push("/profile/register")}
                        className="btn-connect"
                    >
                        Register Now
                    </button>
                    <button
                        onClick={() => logout()}
                        className="btn-connect bg-red-500 hover:bg-red-600 shadow-red-500/50"
                    >
                        Disconnect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;
