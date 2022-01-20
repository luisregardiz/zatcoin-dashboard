import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMoralis } from "react-moralis";
import ZatcoinLogo from "../../../public/assets/images/zatlogo.svg";

interface RegisterProfileProps {}

type UserData = {
    username: string;
    email: string;
    wallet: string;
};

const RegisterProfile: NextPage<RegisterProfileProps> = () => {
    const { user } = useMoralis();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserData>({
        defaultValues: {
            username: "",
            email: "",
            wallet: user?.get("ethAddress"),
        },
    });
    const onSubmit: SubmitHandler<UserData> = (data) => console.log(data);

    console.log(user?.get("ethAddress"));
    return (
        <>
            <Head>
                <title>Zatcoin | Profile - Register</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta charSet="utf-8" />
            </Head>
            <main className="w-3/4 mx-auto">
                <div className="bg-card flex items-center py-20 px-10 my-10">
                    <div className="w-1/2 flex items-center justify-center ">
                        <Image
                            src={ZatcoinLogo}
                            alt="Zatcoin Logo"
                            height={250}
                            width={250}
                            objectFit="contain"
                            priority
                        />
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-3xl font-bold text-zatcoin-blue-light uppercase tracking-wide mb-2">
                            Register
                        </h3>
                        <span>Create your account at Zatcoin</span>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4 my-10 w-4/5 flex flex-col"
                        >
                            <div className="flex flex-col space-y-2 ">
                                <label htmlFor="username" className="font-bold">
                                    Username*
                                </label>
                                {errors.username && (
                                    <span className="text-red-500 text-sm">
                                        Username is required.
                                    </span>
                                )}
                                <input
                                    type="text"
                                    {...register("username", {
                                        required: true,
                                    })}
                                    className="bg-gray-900/50 rounded-lg border-0 shadow-lg py-2"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="font-bold">
                                    E-mail Address*
                                </label>
                                {errors.email && (
                                    <span className="text-red-500 text-sm">
                                        E-mail is required.
                                    </span>
                                )}
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="bg-gray-900/50 rounded-lg border-0 shadow-lg py-2"
                                    placeholder="Enter your E-mail"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="wallet" className="font-bold">
                                    Wallet Address*
                                </label>

                                <input
                                    type="text"
                                    defaultValue={user?.get("ethAddress")}
                                    className="bg-gray-900/50 rounded-lg border-0 shadow-lg py-2 disabled:text-gray-600 cursor-not-allowed"
                                    disabled
                                />
                            </div>

                            <div className="space-x-4 self-center">
                                <button type="submit" className="btn-connect">
                                    Register
                                </button>
                                <button
                                    onClick={() => router.push("/profile")}
                                    type="button"
                                    className="btn-connect bg-red-500 hover:bg-red-600 shadow-red-500/50"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default RegisterProfile;
