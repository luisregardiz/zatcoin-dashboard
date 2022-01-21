export const getInvestorType = (balance: number): string => {
    switch (true) {
        case balance <= 1000:
            return "shrimp";
        case balance > 1000 && balance <= 10000:
            return "crab";
        case balance > 10000 && balance <= 100000:
            return "octopus";
        case balance > 100000 && balance <= 500000:
            return "fish";
        case balance > 500000 && balance <= 1000000:
            return "dolphin";
        case balance > 1000000 && balance <= 5000000:
            return "shark";
        case balance > 5000000 && balance <= 10000000:
            return "whale";
        case balance > 10000000:
            return "humpback";
        default:
            return "";
    }
};

export type InvestorType = {
    id: string;
    title: string;
    description: string;
};

export const investorType: InvestorType[] = [
    {
        id: "shrimp",
        title: "Shrimp Investor",
        description: " Shrimp investor are users who hold less 1K ZATCOIN",
    },
    {
        id: "crab",
        title: "Crab Investor",
        description:
            "Crab investors are users who have more than 1K ZATCOIN and less than 10K ZATCOIN",
    },
    {
        id: "octopus",
        title: "Octopus Investor",
        description:
            "Octopus investor are users who have more than 10K ZATCOIN and less than 100K ZATCOIN",
    },
    {
        id: "fish",
        title: "Fish Investor",
        description:
            "Fish investor are users who have more than 100K ZATCOIN and less than 500K ZATCOIN",
    },
    {
        id: "dolphin",
        title: "Dolphin Investor",
        description:
            "Dolphin investor are users who have more than 500K ZATCOIN and less than 1MILL ZATCOIN",
    },
    {
        id: "shark",
        title: "Shark Investor",
        description:
            "Shark investor are users who have more than 1MILL ZATCOIN and less than 5MILL ZATCOIN",
    },
    {
        id: "whale",
        title: "Whale Investor",
        description:
            "Whale investor are users who have more than 5MILL ZATCOIN and less than 10MILL ZATCOIN",
    },
    {
        id: "humpback",
        title: "Humpback Investor",
        description:
            "Humpback investor are users who have more than 10MILL ZATCOIN",
    },
];
