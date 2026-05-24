require("dotenv").config();

const {
    Category, User, Product,
    Color, Size,
    ProductImage, ProductVariant,
    Address, Cart, CartItem,
    Order, OrderItem, Wishlist
} = require("./models");

async function test() {
    try {
        const categories = await Category.findAll();
        console.log("✅ Category funcionando!", categories.length, "registros");

        const users = await User.findAll();
        console.log("✅ User funcionando!", users.length, "registros");

        const products = await Product.findAll();
        console.log("✅ Product funcionando!", products.length, "registros");

        const colors = await Color.findAll();
        console.log("✅ Color funcionando!", colors.length, "registros");

        const sizes = await Size.findAll();
        console.log("✅ Size funcionando!", sizes.length, "registros");

        const productImages = await ProductImage.findAll();
        console.log("✅ ProductImage funcionando!", productImages.length, "registros");

        const productVariants = await ProductVariant.findAll();
        console.log("✅ ProductVariant funcionando!", productVariants.length, "registros");

        const addresses = await Address.findAll();
        console.log("✅ Address funcionando!", addresses.length, "registros");

        const carts = await Cart.findAll();
        console.log("✅ Cart funcionando!", carts.length, "registros");

        const cartItems = await CartItem.findAll();
        console.log("✅ CartItem funcionando!", cartItems.length, "registros");

        const orders = await Order.findAll();
        console.log("✅ Order funcionando!", orders.length, "registros");

        const orderItems = await OrderItem.findAll();
        console.log("✅ OrderItem funcionando!", orderItems.length, "registros");

        const wishlist = await Wishlist.findAll();
        console.log("✅ Wishlist funcionando!", wishlist.length, "registros");

        console.log("\n🎉 Todos os models estão funcionando!");

    } catch (err) {
        console.error("❌ Erro:", err.message);
    } finally {
        process.exit();
    }
}

test();