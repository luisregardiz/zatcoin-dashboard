import { spawn } from "child_process";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useERC20Balances, useMoralis } from "react-moralis";
import ConnectProfile from "../../components/app/profile/connect";
import RegisterUser from "../../components/app/profile/register";
import WalletBalance from "../../components/app/profile/wallet/balance";
import WalletInvestor from "../../components/app/profile/wallet/investor";
import ZatcoinSpinner from "../../components/app/spinner";
import { getUserData } from "../../helpers/getUserData";
import { useInvestor } from "../../hooks/useInvestor";

interface ProfileProps {}

const Profile: NextPage<ProfileProps> = () => {
    const { isAuthenticated, user, enableWeb3 } = useMoralis();
    const [userData, setUserData] = useState<any>(null);
    const [isRegistered, setRegistered] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        isAuthenticated && enableWeb3();
    }, [enableWeb3, isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) {
            setLoading(true);
            getUserData(user?.get("ethAddress"))
                .then((data) => {
                    setUserData(data);
                    setRegistered(true);
                })
                .catch((error) => {
                    setRegistered(false);
                })
                .finally(() => setLoading(false));
        }
    }, [isAuthenticated, user]);

    const { title, description, id } = useInvestor(
        userData ? userData.zatcoin : 0
    );
    function getInvestorDetails() {
        if (isAuthenticated && userData && isRegistered) {
            return (
                <div className="p-10">
                    <WalletInvestor
                        id={id}
                        title={title}
                        description={description}
                    />
                    <WalletBalance balance={userData?.zatcoin} />
                </div>
            );
        }
    }

    if (isLoading) return <ZatcoinSpinner />;

    return (
        <>
            <Head>
                <title>Zatcoin | Profile</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta charSet="utf-8" />
            </Head>
            <main className="min-h-screen  max-w-screen-xl  mx-auto flex flex-col  justify-center ">
                {getInvestorDetails()}
                {isAuthenticated && !userData && <RegisterUser />}
                {!isAuthenticated && <ConnectProfile />}
            </main>
        </>
    );
};

export default Profile;
