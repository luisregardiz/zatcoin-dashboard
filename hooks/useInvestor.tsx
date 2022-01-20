import { useEffect, useState } from "react";
import {
    getInvestorType,
    investorType,
    InvestorType,
} from "../helpers/getInvestorType";

export const useInvestor = (balance: number) => {
    const [type, setType] = useState<InvestorType>({} as InvestorType);
    useEffect(() => {
        const investorId = getInvestorType(balance);
        const investorData = investorType.find(
            (investor) => investor.id === investorId
        );
        setType(investorData!);
    }, [balance]);

    return type;
};
