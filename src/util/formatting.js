export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
export  function convertToSubcurrency(amount, factor=100) {
    return Math.round(amount* factor)
}