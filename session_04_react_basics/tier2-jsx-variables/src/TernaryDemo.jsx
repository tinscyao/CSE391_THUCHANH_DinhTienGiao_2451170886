function StatusDemo() {
    const isOnline = true;
    const isLoggedIn = true;
    const stock = 0;
    
    return (
        <div>
            {/* 1. Icon trạng thái */}
            <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
            
            {/* 2. Menu hiển thị dựa vào isLoggedIn */}
            {isLoggedIn && (
                <nav>
                    <ul><li>Trang chủ</li><li>Hồ sơ</li><li>Đăng xuất</li></ul>
                </nav>
            )}
            
            {/* 3. Hiển thị kho hàng */}
            <p>Tình trạng: {stock > 0 ? `Còn ${stock} sản phẩm` : "Hết hàng"}</p>
        </div>
    );
}