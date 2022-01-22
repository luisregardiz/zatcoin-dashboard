import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { useMoralis } from "react-moralis";
import { useScrollBlock } from "../../../hooks/useScrollBlock";

interface RegisterSuccessProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const RegisterSuccess: FC<RegisterSuccessProps> = ({
    showModal,
    setShowModal,
}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const router = useRouter();

    useEffect(() => {
        showModal ? blockScroll() : allowScroll();
    }, [allowScroll, blockScroll, showModal]);
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.1,
                    }}
                    className="fixed w-full h-full bg-gray-900/50 top-0 left-0 flex items-center justify-center z-30 "
                >
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{
                            delay: 0.05,
                            duration: 0.2,
                            y: { type: "spring" },
                        }}
                        onClick={(ev) => ev.stopPropagation()}
                        className="bg-gray-900 rounded-lg py-10 shadow-lg relative mx-5 flex flex-col items-center"
                    >
                        <HiOutlineCheckCircle className="text-green-500 text-4xl " />
                        <h4 className="text-4xl uppercase font-bold my-3">
                            Success
                        </h4>
                        <span className="w-1/2">
                            Congratulations, your account has been successfully
                            created
                        </span>
                        <button
                            onClick={() => {
                                setShowModal((prev) => !prev);
                                router.push("/profile");
                            }}
                            className="btn-connect bg-green-500 hover:bg-green-600 shadow-green-500/40 mt-5"
                        >
                            Continue
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RegisterSuccess;
