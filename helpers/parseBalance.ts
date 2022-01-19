export const parseBalance = (balance: string, length: string): string => {
    const test = balance.length - parseInt(length);
    const result = balance.split("").slice(0, test).join("");
    const rest = balance.split("").slice(test).join("");
    return result + "." + rest;
};
