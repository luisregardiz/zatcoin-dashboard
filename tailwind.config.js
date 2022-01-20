module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "zatcoin-blue-light": "#5FBEFF",
                "zatcoin-blue-btn": "#005278",
                "zatcoin-blue-dark": "#053D57",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        // ...
    ],
};
