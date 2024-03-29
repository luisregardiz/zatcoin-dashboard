import { FC, useEffect, useState } from "react";
import {
    HiChartPie,
    HiCurrencyDollar,
    HiFire,
    HiInformationCircle,
    HiTrendingUp,
    HiUsers,
} from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { useTokenPrice } from "react-moralis";
import { getBurnedToken } from "../../../helpers/getBurnedToken";
import { getCirculatingSupply } from "../../../helpers/getCirculatingSupply";
import { parseBalance } from "../../../helpers/parseBalance";
import { parseNumber } from "../../../helpers/parseNumber";
import CardTokenInfo from "./card";
import { getTokenData } from "../../../helpers/getTokenData";

interface TokenInformationProps {}

const TokenInformation: FC<TokenInformationProps> = () => {
    const [totalSupply, setTotalSupply] = useState<string>("");
    const [burnedToken, setBurnedToken] = useState<string>("");
    const [holders, setHolders] = useState<number>(0);
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
    const { data, error, isLoading } = useTokenPrice({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        chain: "bsc",
    });
    useEffect(() => {
        setIsLoadingData(true);
        getCirculatingSupply().then((data) => {
            if (data.message === "OK") {
                setTotalSupply(data.result);
                setIsLoadingData(false);
            }
        });
        getBurnedToken().then((data) => {
            if (data.message === "OK") {
                setBurnedToken(data.result);
                setIsLoadingData(false);
            }
        });

        getTokenData().then((data) => {
            setHolders(data.holders);
        });
    }, []);

    const totalSupplyParsed = Number(parseBalance(totalSupply, "7"));
    const burnedTokenParsed = Number(parseBalance(burnedToken, "7"));

    const circulatingSupply =
        Number(totalSupplyParsed) - Number(burnedTokenParsed);
    const marketCap = circulatingSupply * data?.usdPrice!;

    if (error) return <span>Error</span>;

    return (
        <section className="p-10 mt-5 mb-20">
            <div className="flex items-center mb-5 space-x-2">
                <HiInformationCircle className="text-lg" />
                <h4 className="uppercase font-bold">Token Info.</h4>
            </div>
            <div className="list-token-info ">
                <CardTokenInfo
                    title="Zatcoin Price"
                    icon={<HiTrendingUp className="text-lg" />}
                    content={
                        isLoading
                            ? "Loading..."
                            : `$${data?.usdPrice.toFixed(9)}`
                    }
                />
                <CardTokenInfo
                    title="Circulating Supply"
                    icon={<HiChartPie className="text-lg" />}
                    content={
                        isLoading
                            ? "Loading..."
                            : `${parseNumber(circulatingSupply)} ZATCOIN`
                    }
                />
                <CardTokenInfo
                    title="MarketCap"
                    icon={<BsCurrencyDollar className="text-lg" />}
                    content={
                        isLoading
                            ? "Loading..."
                            : `$ ${parseNumber(marketCap)}` || 0
                    }
                />
                <CardTokenInfo
                    title="Total Supply"
                    icon={<FaCoins className="text-lg" />}
                    content={
                        isLoading
                            ? "Loading..."
                            : `${parseNumber(totalSupplyParsed)} ZATCOIN` || 0
                    }
                />
                <CardTokenInfo
                    title="Holders"
                    icon={<HiUsers className="text-lg" />}
                    content="+2,000"
                />
                <CardTokenInfo
                    title="Total Burned Tokens"
                    icon={<HiFire className="text-lg" />}
                    content={
                        isLoading
                            ? "Loading..."
                            : `${parseNumber(burnedTokenParsed)} ZATCOIN` || 0
                    }
                />
            </div>
        </section>
    );
};

export default TokenInformation;
