import { Link, useLocation } from "react-router-dom";

function Order() {
    const location = useLocation();
    const { total } = location.state || { total: 0 };

    const orderId = Math.floor(Math.random() * 900000 + 100000);
    const estimatedTime = "30–40 mins";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md w-full p-8 text-center">

                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-4xl">✅</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h1>
                <p className="text-gray-500 text-sm mb-6">
                    Thank you! Your delicious food is being prepared.
                </p>

                {/* Order Details */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Order ID</span>
                        <span className="font-semibold text-gray-800">#{orderId}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Amount Paid</span>
                        <span className="font-semibold text-green-600">₹{total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Estimated Delivery</span>
                        <span className="font-semibold text-gray-800">{estimatedTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Payment</span>
                        <span className="font-semibold text-gray-800">Online</span>
                    </div>
                </div>

                {/* Delivery Status Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>Order Placed</span>
                        <span>Preparing</span>
                        <span>On the way</span>
                        <span>Delivered</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full w-1/4 transition-all"></div>
                    </div>
                </div>

               
                <Link
                    to="/"
                    className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Order;
