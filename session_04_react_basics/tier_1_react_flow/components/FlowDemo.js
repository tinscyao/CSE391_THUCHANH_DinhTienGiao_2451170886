/**
 * FlowDemo Component
 * Minh họa: Luồng hoạt động React (User action → setState → re-render)
 */
function FlowDemo() {
    console.log("🔄 FlowDemo render!");

    const [step, setStep] = React.useState(1);

    function handleNext() {
        setStep(step + 1);
    }

    function handleReset() {
        setStep(1);
    }

    return (
        <div className="demo-section flow">
            <h2>🔄 Bài 1.3 — Luồng hoạt động (Flow)</h2>
            <p className="text-medium">Bước hiện tại: <strong>{step}</strong></p>

            <button onClick={handleNext}>Bước tiếp theo →</button>
            <button onClick={handleReset}>Quay lại đầu</button>

            <div className="step-box">
                {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
                {step === 2 && <p>📖 Bước 2: Đang học React</p>}
                {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
                {step >= 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
            </div>
        </div>
    );
}
