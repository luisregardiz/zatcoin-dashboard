import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import RegisterSuccess from "../../../components/app/modal/register-success";
import { getUserData } from "../../../helpers/getUserData";
import { registerUser } from "../../../helpers/registerUser";
import ZatcoinLogo from "../../../public/assets/images/zatlogo.svg";

interface RegisterProfileProps {}

type UserData = {
    username: string;
    email: string;
    password: string;
    walletAddress: string;
};

const RegisterProfile: NextPage<RegisterProfileProps> = () => {
    const { user, setUserData, isUserUpdating, userError } = useMoralis();
    const [showModal, setShowModal] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            getUserData(user.get("ethAddress")).then(() =>
                router.push("/profile")
            );
        }
    }, [router, user]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserData>({
        defaultValues: {
            username: "",
            email: "",
            walletAddress: user?.get("ethAddress"),
        },
    });
    const onSubmit: SubmitHandler<UserData> = (data) => {
        registerUser(
            data.username,
            data.email,
            data.password,
            data.walletAddress
        )
            .then(() => {
                toast.success("User registered successfully");
                setShowModal(true);
            })
            .catch((error) => {
                toast.error(error);
            });
    };

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
            <main className="min-h-screen flex flex-col  justify-center max-w-screen-xl mx-auto">
                <div className="bg-card flex flex-col md:flex-row items-center p-10 my-10 mx-10 gap-5">
                    <div className="w-1/2 flex items-center justify-center  ">
                        <Image
                            src={ZatcoinLogo}
                            alt="Zatcoin Logo"
                            height={250}
                            width={250}
                            objectFit="contain"
                            priority
                        />
                    </div>
                    <div className="md:w-1/2 w-full  md:mt-0 mt-5 ">
                        <h3 className="text-3xl font-bold text-zatcoin-blue-light uppercase tracking-wide mb-2">
                            Register
                        </h3>
                        <span>Create your account at Zatcoin</span>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4 my-10 md:w-4/5 w-full mx-auto md:mx-0 flex flex-col"
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
                                <label htmlFor="password" className="font-bold">
                                    Password*
                                </label>
                                {errors.password && (
                                    <span className="text-red-500 text-sm">
                                        Password is required.
                                    </span>
                                )}
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                    className="bg-gray-900/50 rounded-lg border-0 shadow-lg py-2"
                                    placeholder="Enter your Password"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="wallet" className="font-bold">
                                    Wallet Address*
                                </label>

                                <input
                                    type="text"
                                    placeholder={user?.get("ethAddress")}
                                    defaultValue={user?.get("ethAddress")}
                                    className="bg-gray-900/50 rounded-lg border-0 shadow-lg py-2 disabled:text-gray-600 cursor-not-allowed"
                                    disabled
                                />
                            </div>

                            <div className="space-x-4 self-center pt-5">
                                <button
                                    onClick={() => router.push("/profile")}
                                    type="button"
                                    className="btn-connect bg-red-500 hover:bg-red-600 shadow-red-500/50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn-connect "
                                    disabled={isUserUpdating && true}
                                >
                                    {isUserUpdating
                                        ? "Registering..."
                                        : "Register"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <RegisterSuccess
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default RegisterProfile;
