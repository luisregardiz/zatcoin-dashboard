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
        title: "You are a Shrimp Investor",
        description: " Shrimp investor are users who hold less 1,000 ZATCOIN",
    },
    {
        id: "crab",
        title: "You are a Crab Investor",
        description:
            "Crab investors are users who have more than 1,000 ZATCOIN and less than 10,000 ZATCOIN",
    },
    {
        id: "octopus",
        title: "You are a Octopus Investor",
        description:
            "Octopus investor are users who have more than 10,000 ZATCOIN and less than 100,000 ZATCOIN",
    },
    {
        id: "fish",
        title: "You are a Fish Investor",
        description:
            "Fish investor are users who have more than 100,000 ZATCOIN and less than 500,000 ZATCOIN",
    },
    {
        id: "dolphin",
        title: "You are a Dolphin Investor",
        description:
            "Dolphin investor are users who have more than 500,000 ZATCOIN and less than 1,000,000 ZATCOIN",
    },
    {
        id: "shark",
        title: "You are a Shark Investor",
        description:
            "Shark investor are users who have more than 1,000,000 ZATCOIN and less than 5,000,000 ZATCOIN",
    },
    {
        id: "whale",
        title: "You are a Whale Investor",
        description:
            "Whale investor are users who have more than 5,000,000 ZATCOIN and less than 10,000,000 ZATCOIN",
    },
    {
        id: "humpback",
        title: "You are a Humpback Investor",
        description:
            "Humpback investor are users who have more than 10,000,000 ZATCOIN",
    },
];
