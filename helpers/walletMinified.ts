export const walletMinified = (address: string): string => {
    const firstNumbers = address.split("").slice(0, 4).join("");
    const lastNumbers = address.split("").splice(-4).join("");
    return `${firstNumbers}...${lastNumbers}`;
};
