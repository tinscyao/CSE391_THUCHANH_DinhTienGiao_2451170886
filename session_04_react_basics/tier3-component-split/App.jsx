import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";

function App() {
    // Dữ liệu giả lập
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            {/* Header chung */}
            <Header />

            <main style={{ padding: "20px" }}>
                {/* 1. Phần hiển thị danh sách sản phẩm */}
                <h2 style={{ textAlign: "center" }}>Sản phẩm nổi bật</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

                {/* 2. Phần hiển thị User */}
                <h2 style={{ marginTop: "40px" }}>Người dùng</h2>
                <UserCard 
                    name="Đinh Tiến Giao" 
                    email="giao.dt@university.edu.vn" 
                    avatar="https://via.placeholder.com/50" 
                />

                {/* 3. Phần hiển thị giá */}
                <h2 style={{ marginTop: "40px" }}>Khuyến mãi</h2>
                <PriceTag originalPrice="1.000.000" salePrice="800.000" />
            </main>

            {/* Footer chung */}
            <Footer />
        </div>
    );
}

export default App;