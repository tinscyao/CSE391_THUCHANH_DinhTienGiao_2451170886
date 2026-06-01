/**
 * LifecycleDemo Component
 * Minh họa: Component render lần đầu (Mount)
 */
function LifecycleDemo() {
    console.log("1️⃣ LifecycleDemo được gọi!");

    return (
        <div className="demo-section">
            <h2>📍 Bài 1.1 — Component render lần đầu</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render <strong>MỘT lần</strong> khi trang load</p>
            <div className="note">
                💡 Refresh trang (F5) → thấy log xuất hiện lại
            </div>
        </div>
    );
}
