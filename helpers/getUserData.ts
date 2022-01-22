const URL = `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/user/`;

type UserData = {
	walletAddress: string;
	bnb: number;
	zatcoin: number;
};

export function getUserData(walletAddress: string): Promise<UserData> {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await fetch(URL + walletAddress);

			if (res.status === 404) {
				reject("User not found");
			} else if (res.status === 500) {
				reject("Internal server error occured. Please try again later");
			} else if (res.status === 200) {
				resolve(await res.json());
			}
		} catch (error: any) {
            console.log(error);
			reject(error.message);
		}
	});
}
