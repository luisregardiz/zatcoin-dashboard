import { FC } from "react";
import { IconType } from "react-icons";

interface CardTokenInfoProps {
    title: string;
    icon: React.ReactElement<IconType>;
    content: string | number;
}

const CardTokenInfo: FC<CardTokenInfoProps> = ({ title, icon, content }) => {
    return (
        <div className="p-8 bg-card">
            <div className="flex items-center justify-between mb-2 ">
                <h4 className="font-semibold">{title}</h4>
                <div className="flex items-center justify-center h-10 w-10 bg-black/25 rounded-full">
                    {icon}
                </div>
            </div>
            <span className="text-lg text-zatcoin-blue-light font-bold">
                {content}
            </span>
        </div>
    );
};

export default CardTokenInfo;
