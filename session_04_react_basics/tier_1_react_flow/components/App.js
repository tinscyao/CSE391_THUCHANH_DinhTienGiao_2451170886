/**
 * App Component - Main entry point
 * Tổng hợp tất cả các component demo
 */
function App() {
    return (
        <div>
            <h1>🔄 Tier 1 — Hiểu luồng hoạt động của React</h1>
            <p style={{ textAlign: "center", color: "#666" }}>
                Mở Console (F12) để xem log
            </p>

            <LifecycleDemo />
            <BadCounter />
            <GoodCounter />
            <CompareTable />
            <FlowDemo />
        </div>
    );
}
