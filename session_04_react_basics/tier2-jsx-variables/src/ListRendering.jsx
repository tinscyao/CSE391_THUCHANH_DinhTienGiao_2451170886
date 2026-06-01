function ProductList() {
    const products = [
        { id: 1, name: "Chuột", price: 500000 },
        { id: 2, name: "Bàn phím", price: 1500000 },
        { id: 3, name: "Màn hình", price: 3000000 }
    ];
    
    const tongGia = products.reduce((acc, curr) => acc + curr.price, 0);
    
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(p => (
                    <li key={p.id} style={{ color: p.price > 1000000 ? "red" : "black" }}>
                        {p.name} - {p.price} VNĐ
                    </li>
                ))}
            </ul>
            <p><strong>Tổng giá trị: {tongGia} VNĐ</strong></p>
        </div>
    );
}