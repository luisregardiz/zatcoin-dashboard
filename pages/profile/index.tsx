import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useERC20Balances, useMoralis } from "react-moralis";
import ConnectProfile from "../../components/app/profile/connect";
import RegisterUser from "../../components/app/profile/register";
import WalletBalance from "../../components/app/profile/wallet/balance";
import WalletInvestor from "../../components/app/profile/wallet/investor";
import { useInvestor } from "../../hooks/useInvestor";
import { useZatcoinBalance } from "../../hooks/useZatcoinBalance";

interface ProfileProps {}

const Profile: NextPage<ProfileProps> = () => {
    const { isAuthenticated, user, enableWeb3 } = useMoralis();

    const {
        fetchERC20Balances,
        data,
        error: errorBalances,
        isFetching: isFetchingBalances,
    } = useERC20Balances({ address: user?.get("ethAddress") });

    useEffect(() => {
        isAuthenticated && enableWeb3();
    }, [enableWeb3, isAuthenticated]);

    useEffect(() => {
        fetchERC20Balances();
    }, [fetchERC20Balances]);

    const { balance } = useZatcoinBalance(data!);

    const { title, description, id } = useInvestor(Number(balance));

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
                {isAuthenticated && user?.get("email") && (
                    <div className="p-10">
                        <WalletInvestor
                            id={id}
                            title={title}
                            description={description}
                        />
                        <WalletBalance balance={balance} />
                    </div>
                )}
                {isAuthenticated && !user?.get("email") && <RegisterUser />}
                {!isAuthenticated && <ConnectProfile />}
            </main>
        </>
    );
};

export default Profile;
