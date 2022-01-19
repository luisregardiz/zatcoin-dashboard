import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useMoralis, useTokenPrice } from "react-moralis";
import { getBurnedToken } from "../helpers/getBurnedToken";
import { getCirculatingSupply } from "../helpers/getCirculatingSupply";
import { parseBalance } from "../helpers/parseBalance";
import { parseNumber } from "../helpers/parseNumber";

const Home: NextPage = () => {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    const [totalSupply, setTotalSupply] = useState<string>("");
    const [burnedToken, setBurnedToken] = useState<string>("");
    const { fetchTokenPrice, data, error, isLoading } = useTokenPrice({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        chain: "bsc",
    });
    useEffect(() => {
        getCirculatingSupply().then((data) => {
            if (data.message === "OK") {
                setTotalSupply(data.result);
            }
        });
        getBurnedToken().then((data) => {
            if (data.message === "OK") {
                setBurnedToken(data.result);
            }
        });
    }, []);

    const totalSupplyParsed = Number(parseBalance(totalSupply, "7"));
    const burnedTokenParsed = Number(parseBalance(burnedToken, "7"));

    const circulatingSupply =
        Number(totalSupplyParsed) - Number(burnedTokenParsed);
    const marketCap = circulatingSupply * data?.usdPrice!;

    return (
        <div>
            <Head>
                <title>Zatcoin | Dashboard</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta charSet="utf-8" />
            </Head>
            {isAuthenticated ? (
                <button onClick={() => logout()}>Logout</button>
            ) : (
                <button
                    onClick={() =>
                        authenticate({
                            signingMessage: "Zatcoin Dashboard Authentication",
                        })
                    }
                >
                    Metamask
                </button>
            )}

            <div>
                <h4>Total Supply</h4>
                <span>{parseNumber(totalSupplyParsed)}</span>
            </div>
            <div>
                <h4>Total Burned Tokens</h4>
                <span>{parseNumber(burnedTokenParsed)}</span>
            </div>
            <div>
                <h4>Circulating Supply</h4>
                <span>{parseNumber(circulatingSupply)}</span>
            </div>
            <div>
                <h4>Zatcoin Price</h4>
                <span>{data?.usdPrice.toFixed(9)}</span>
            </div>
            <div>
                <h4>Holders</h4>
                <span>+2,000</span>
            </div>
            <div>
                <h4>Market Cap</h4>
                {data && <span>{parseNumber(marketCap)}</span>}
            </div>
        </div>
    );
};

export default Home;
