import { parseBalance } from "./parseBalance";

export const bnbBalance = (balance: string, decimal: string) => {
    if (!balance) return "0";
    if (balance.length < Number(decimal)) {
        const test = Number(decimal) - balance.length;
        const zeros = "0".repeat(test);
        return `0.${zeros}${balance}`;
    }
    return parseBalance(balance, decimal);
};
