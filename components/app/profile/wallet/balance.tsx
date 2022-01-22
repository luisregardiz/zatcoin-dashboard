import { FC } from "react";
import { HiIdentification, HiQrcode } from "react-icons/hi";
import { useMoralis, useNativeBalance } from "react-moralis";
import { bnbBalance } from "../../../../helpers/bnbBalance";
import BNBIcon from "../../../../public/assets/images/bnb-icon.svg";
import ZatcoinIcon from "../../../../public/assets/images/zatcoin-icon.svg";
import { parseBalance } from "../../../../helpers/parseBalance";
import { walletMinified } from "../../../../helpers/walletMinified";
import CardTokenInfo from "../../token-information/card";
import Image from "next/image";
import { BiWallet } from "react-icons/bi";
interface WalletBalanceProps {
    balance: string | number;
}

const WalletBalance: FC<WalletBalanceProps> = ({ balance }) => {
    const { user } = useMoralis();
    const {
        data: BNBBalance,
        error,
        isFetching,
    } = useNativeBalance({ chain: "bsc" });

    const BNBFormatted =
        BNBBalance && Number(bnbBalance(BNBBalance.balance!, "18")).toFixed(4);
    const zatcoinBalace = Number(balance).toFixed(4);

    return (
        <div className=" mt-10">
            <div className="flex items-center space-x-2 mb-5">
                <BiWallet className="text-xl" />
                <h4 className="uppercase font-bold">Zatcoin</h4>
            </div>
            <div className="list-user-info">
                <CardTokenInfo
                    title="Wallet Address"
                    content={walletMinified(user?.get("ethAddress"))}
                    icon={<HiQrcode className="text-lg" />}
                />
                <CardTokenInfo
                    title="BNB Balance"
                    content={`${BNBFormatted} BNB`}
                    icon={
                        <Image
                            src={BNBIcon}
                            alt="BNB Icon"
                            height={20}
                            width={20}
                            objectFit="contain"
                        />
                    }
                />
                <CardTokenInfo
                    title="Zatcoin Balance"
                    content={`${zatcoinBalace} ZATCOIN`}
                    icon={
                        <Image
                            src={ZatcoinIcon}
                            alt="Zatcoin Icon"
                            height={18}
                            width={18}
                            objectFit="contain"
                        />
                    }
                />
                <CardTokenInfo
                    title="Zatcoin Status"
                    content="Registered Account"
                    icon={<HiIdentification className="text-lg" />}
                />
            </div>
        </div>
    );
};

export default WalletBalance;
