const URL = `${process.env.NEXT_PUBLIC_BSCSCAN_API_URL}/api?module=account&action=tokenbalance&contractaddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=${process.env.NEXT_PUBLIC_BSCSCAN_API_KEY}`;

export const getBurnedToken = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
