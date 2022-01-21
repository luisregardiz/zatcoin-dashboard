
const URL = `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/user`;

export const registerUser = async (username: string, email: string, password: string, walletAddress: string) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					email,
					password,
					wallet_address: walletAddress,
				}),
			});

			if (res.status === 400) {
				reject((await res.json()).message.join("\n"));
			}
			if (res.status === 409) {
				reject("Username, email or wallet address already exists");
			} else if (res.status === 500) {
				reject("Internal server error occured. Please try again later");
			} else if (res.status === 200) {
				resolve(await res.json());
			}
		} catch (error:any) {
			reject(error.message ?? error);
		}
	});
};
