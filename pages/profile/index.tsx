import type { NextPage } from "next";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import ConnectProfile from "../../components/app/profile/connect";
import RegisterUser from "../../components/app/profile/register";
import WalletInvestor from "../../components/app/profile/wallet/investor";
import { useInvestor } from "../../hooks/useInvestor";

interface ProfileProps {}

const Profile: NextPage<ProfileProps> = () => {
    const { isAuthenticated, user } = useMoralis();
    const { title, description } = useInvestor(15000);
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
            <main className="min-h-screen w-3/4 mx-auto flex flex-col mt-20">
                {isAuthenticated && user?.get("email") && (
                    <WalletInvestor title={title} description={description} />
                )}
                {isAuthenticated && !user?.get("email") && <RegisterUser />}
                {!isAuthenticated && <ConnectProfile />}
            </main>
        </>
    );
};

export default Profile;
