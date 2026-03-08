import { useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";


const MOCK_MENU = [
    { id: 1, name: "Paneer Butter Masala", price: 280, category: "Main Course", description: "Rich and creamy paneer curry" },
    { id: 2, name: "Dal Tadka", price: 180, category: "Main Course", description: "Yellow lentils with spiced tempering" },
    { id: 3, name: "Veg Biryani", price: 220, category: "Rice", description: "Fragrant basmati rice with vegetables" },
    { id: 4, name: "Masala Dosa", price: 120, category: "Breakfast", description: "Crispy dosa with potato filling" },
    { id: 5, name: "Gulab Jamun", price: 80, category: "Dessert", description: "Soft milk dumplings in sugar syrup" },
    { id: 6, name: "Mango Lassi", price: 90, category: "Drinks", description: "Chilled mango yogurt drink" },
];

const ResturantMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    function isInCart(itemId) {
        return cartItems.filter(item => item.id === itemId);
    }

    function handleAddToCart(item) {
        if (isInCart(item.id).length > 0) {
            toast.error("Item already in cart");
        } else {
            dispatch(addItem(item));
            toast.success("Item added to cart");
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Restaurant Menu</h1>
            <p className="text-gray-500 mb-6">Restaurant ID: {id}</p>
            <div className="flex flex-col gap-3">
                {MOCK_MENU.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div>
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <span className="text-xs text-orange-500 font-medium">{item.category}</span>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-800">₹{item.price}</p>
                            <button  onClick={() => handleAddToCart(item)}className="mt-1 px-3 py-1 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 cursor-pointer">
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResturantMenu;
