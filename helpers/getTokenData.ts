const URL = `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/token/data`;

export const getTokenData = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
