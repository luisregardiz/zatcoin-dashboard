import { FC } from "react";
import Image from "next/image";
import ZatcoinLogo from "../../public/assets/images/zatlogo.svg";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
    return (
        <div className="w-1/6 mx-auto mt-10">
            <Image
                src={ZatcoinLogo}
                alt="Zatcoin Logo"
                className=""
                height={400}
                width={400}
                objectFit="contain"
                priority
            />
        </div>
    );
};

export default Hero;
