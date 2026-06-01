import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [isLiked, setIsLiked] = useState(false);
    const [buttonClicks, setButtonClicks] = useState({ btn1: 0, btn2: 0, btn3: 0 });
    
    // Handler cho nút Click me
    function handleClick() {
        setMessage("Đã click lúc " + new Date().toLocaleTimeString());
        setClickCount(clickCount + 1);
    }
    
    // Handler cho nút Reset
    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
        setBackgroundColor("#ffffff");
        setIsLiked(false);
        setButtonClicks({ btn1: 0, btn2: 0, btn3: 0 });
    }
    
    // Thử thách 1: Đổi màu ngẫu nhiên
    function handleRandomColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        setBackgroundColor(randomColor);
    }
    
    // Thử thách 2: Đếm click riêng từng nút
    function handleButtonClick(buttonName) {
        setButtonClicks(prev => ({
            ...prev,
            [buttonName]: prev[buttonName] + 1
        }));
    }
    
    // Thử thách 3: Toggle Like
    function handleLikeToggle() {
        setIsLiked(!isLiked);
    }
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px" }}>
            <h2>📌 Bài 5.1 — Click Events</h2>
            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>
            
            <div style={{ marginBottom: "15px" }}>
                <button onClick={handleClick} style={{ marginRight: "10px" }}>Click me!</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            
            <hr />
            
            {/* Thử thách 1: Đổi màu ngẫu nhiên */}
            <h3>🎨 Thử thách 1: Đổi màu ngẫu nhiên</h3>
            <div 
                style={{ 
                    width: "100px", 
                    height: "100px", 
                    backgroundColor: backgroundColor,
                    border: "2px solid #333",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {backgroundColor}
            </div>
            <button onClick={handleRandomColor}>🎲 Đổi màu ngẫu nhiên</button>
            
            <hr />
            
            {/* Thử thách 2: Đếm click riêng từng nút */}
            <h3>🔢 Thử thách 2: Đếm click riêng từng nút</h3>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button onClick={() => handleButtonClick('btn1')}>
                    Nút 1 ({buttonClicks.btn1})
                </button>
                <button onClick={() => handleButtonClick('btn2')}>
                    Nút 2 ({buttonClicks.btn2})
                </button>
                <button onClick={() => handleButtonClick('btn3')}>
                    Nút 3 ({buttonClicks.btn3})
                </button>
            </div>
            <p>Tổng: {buttonClicks.btn1 + buttonClicks.btn2 + buttonClicks.btn3}</p>
            
            <hr />
            
            {/* Thử thách 3: Like toggle */}
            <h3>❤️ Thử thách 3: Nút Like Toggle</h3>
            <button 
                onClick={handleLikeToggle}
                style={{ 
                    fontSize: "24px", 
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: isLiked ? "#ffebee" : "#f5f5f5",
                    border: "2px solid",
                    borderColor: isLiked ? "#e53935" : "#ccc",
                    borderRadius: "8px"
                }}
            >
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>
        </div>
    );
}

export default ClickEvents;
