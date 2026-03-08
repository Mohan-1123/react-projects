import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    function handleClearCart() {
        dispatch(clearCart());
        toast.success("Cart cleared");
    }

    function handleRemoveItem(item) {
        dispatch(removeItem(item));
        toast.error("Item removed");
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                        <p className="text-gray-500 text-sm mt-1">
                            {cartItems.length === 0 ? "No items" : `${cartItems.length} item${cartItems.length > 1 ? "s" : ""}`}
                        </p>
                    </div>
                    {cartItems.length > 0 && (
                        <button
                            onClick={handleClearCart}
                            className="px-4 py-2 text-sm text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition cursor-pointer"
                        >
                            Clear All
                        </button>
                    )}
                </div>

                {/* Empty State */}
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="text-6xl mb-4">🛒</div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
                        <p className="text-gray-400 text-sm">Add items from a restaurant menu to get started.</p>
                    </div>
                ) : (
                    <>
                        {/* Cart Items */}
                        <div className="flex flex-col gap-3 mb-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm shrink-0">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-orange-500 font-medium">₹{item.price}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item)}
                                        className="text-gray-400 hover:text-red-500 transition cursor-pointer text-xl leading-none"
                                        title="Remove item"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                            <h2 className="font-semibold text-gray-700 mb-4 text-lg">Order Summary</h2>
                            <div className="flex justify-between text-gray-500 text-sm mb-2">
                                <span>Subtotal ({cartItems.length} items)</span>
                                <span>₹{total}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 text-sm mb-4">
                                <span>Delivery fee</span>
                                <span className="text-green-500">Free</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold text-gray-800 text-base">
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                            <button  onClick={() => navigate("/order",{state:{total}})}className="mt-5 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition cursor-pointer">
                                Place Order
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
