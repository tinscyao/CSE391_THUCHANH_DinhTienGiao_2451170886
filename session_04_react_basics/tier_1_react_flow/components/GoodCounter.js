/**
 * GoodCounter Component
 * Minh họa: useState làm UI cập nhật khi state thay đổi
 */
function GoodCounter() {
    const [count, setCount] = React.useState(0);  // useState - UI sẽ cập nhật!

    console.log("✅ GoodCounter render, count =", count);

    function handleClick() {
        setCount(count + 1);  // React biết cần re-render!
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div className="demo-section good">
            <h2>✅ Bài 1.2b — Counter "tốt" (dùng useState)</h2>
            <p className="text-large">Bộ đếm: <strong>{count}</strong></p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <button onClick={handleReset}>Reset về 0</button>
            <p className="text-success">
                ✅ Nhấn nút → Số trên màn hình CẬP NHẬT!
            </p>
        </div>
    );
}
