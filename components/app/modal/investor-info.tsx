import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { investorType } from "../../../helpers/getInvestorType";
import { MdOutlineCancel } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollBlock } from "../../../hooks/useScrollBlock";

interface InvestorTypeInfoProps {
	showModal: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
}

const InvestorTypeInfo: FC<InvestorTypeInfoProps> = ({ showModal, setShowModal }) => {
	const [blockScroll, allowScroll] = useScrollBlock();
	useEffect(() => {
		showModal ? blockScroll() : allowScroll();
	}, [allowScroll, blockScroll, showModal]);
	const getInversorIcon = (id: string) => {
		switch (id) {
			case "shrimp":
				return "/assets/images/investor-icon/50-gray-shrimp.svg";
			case "crab":
				return "/assets/images/investor-icon/50-gray-crab.svg";
			case "octopus":
				return "/assets/images/investor-icon/50-gray-octopus.svg";
			case "fish":
				return "/assets/images/investor-icon/50-gray-fish.svg";
			case "dolphin":
				return "/assets/images/investor-icon/50-gray-dolphin.svg";
			case "shark":
				return "/assets/images/investor-icon/50-gray-shark.svg";
			case "whale":
				return  "/assets/images/investor-icon/50-gray-whale.svg";
			case "humpback":
				return "/assets/images/investor-icon/50-gray-humpback.svg";
			default:
				return "/assets/images/zatlogo.svg";
		}
	};

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
					onClick={(ev) => setShowModal(false)}
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
						className="bg-gray-900 rounded-lg py-10 shadow-lg relative mx-5"
					>
						<button onClick={() => setShowModal((prev) => !prev)} className="absolute top-6 right-10">
							<MdOutlineCancel className="text-3xl hover:text-gray-400" />
						</button>
						<ul className="w-3/4 mx-auto space-y-3">
							{investorType.map((type) => (
								<li key={type.id} className="flex items-center space-x-5">
									<div className="min-w-fit">
										<img src={getInversorIcon(type.id)} alt="Investor Icon" height={35} width={35}  />
									</div>
									<div className="flex flex-col">
										<h5 className="font-bold md:text-sm text-xs mb-1 text-gray-400">{type.title}</h5>
										<span className="md:text-sm text-xs ">{type.description}</span>
									</div>
								</li>
							))}
						</ul>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default InvestorTypeInfo;
