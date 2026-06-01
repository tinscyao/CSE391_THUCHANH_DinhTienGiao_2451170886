/**
 * BadCounter Component
 * Minh họa: Biến bình thường KHÔNG làm UI cập nhật
 */
function BadCounter() {
    let count = 0;  // Biến bình thường - KHÔNG làm UI cập nhật!

    function handleClick() {
        count = count + 1;
        console.log("❌ BadCounter - count =", count);
        // UI không cập nhật dù count đã thay đổi!
    }

    return (
        <div className="demo-section bad">
            <h2>❌ Bài 1.2a — Counter "tệ" (dùng biến thường)</h2>
            <p className="text-large">Bộ đếm: <strong>{count}</strong></p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p className="text-danger">
                ⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!
            </p>
        </div>
    );
}
