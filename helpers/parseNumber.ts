export const parseNumber = (n: number) => {
    return new Intl.NumberFormat("es-US").format(n);
};
