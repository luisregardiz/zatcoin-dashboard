import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import Layout from "../components/layout";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MoralisProvider
            appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID!}
            serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL!}
        >
            <Layout>
                <Toaster position="top-center" reverseOrder={false} />
                <Component {...pageProps} />
            </Layout>
        </MoralisProvider>
    );
}

export default MyApp;
