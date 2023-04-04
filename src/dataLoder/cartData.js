import { getShoppingCart } from "../utilities/fakedb"

const cartProductLoader = async () => {
    const response = await fetch("./fakeData/products.json")
    const product = await response.json()

    const localObj = getShoppingCart();
    const cartProduct = [];
    for (const id in localObj) {
        const selectProduct = product.find((pd) => pd.id === id);
        if (selectProduct) {
            selectProduct.quantity = localObj[id];
            cartProduct.push(selectProduct)
        }
    }
    return cartProduct;
}
export default cartProductLoader;