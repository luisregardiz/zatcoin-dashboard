import type { NextPage } from "next";
import Head from "next/head";
import TokenInformation from "../components/app/token-information";
import Hero from "../components/layout/hero";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Zatcoin | Dashboard</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta charSet="utf-8" />
            </Head>
            <main className="min-h-screen  max-w-screen-xl  mx-auto flex flex-col  justify-center ">
                <Hero />
                <TokenInformation />
            </main>
        </>
    );
};

export default Home;
