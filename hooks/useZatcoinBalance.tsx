import { useEffect, useState } from "react";
import { parseBalance } from "../helpers/parseBalance";
import { ZatcoinBalance } from "../types/balance";

export const useZatcoinBalance = (data: ZatcoinBalance[]) => {
    const [balance, setBalance] = useState<string>("");
    useEffect(() => {
        if (data) {
            const oraklerBalance = data.find(
                (token) =>
                    token.token_address ===
                    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
            );
            if (oraklerBalance) {
                setBalance(
                    parseBalance(
                        oraklerBalance.balance!,
                        oraklerBalance.decimals!
                    )
                );
            }
        }
    }, [data]);

    return { balance };
};
