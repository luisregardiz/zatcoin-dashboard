const URL = `${process.env.NEXT_PUBLIC_BSCSCAN_API_URL}/api?module=stats&action=tokensupply&contractaddress=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&apikey=${process.env.NEXT_PUBLIC_BSCSCAN_API_KEY}`;

export const getCirculatingSupply = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
