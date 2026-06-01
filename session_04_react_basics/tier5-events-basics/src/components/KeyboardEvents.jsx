import { useState } from "react";

function KeyboardEvents() {
    const [lastKey, setLastKey] = useState("");
    const [log, setLog] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    // Thử thách 1: Game đoán phím
    const [targetKey, setTargetKey] = useState("A");
    const [score, setScore] = useState(0);
    const [gameMessage, setGameMessage] = useState("Nhấn phím đúng để ghi điểm!");
    
    // Thử thách 2: Di chuyển ô vuông
    const [position, setPosition] = useState({ x: 100, y: 100 });
    
    // Thử thách 3: Phím tắt Ctrl+D
    const [bgColor, setBgColor] = useState("#ffffff");
    
    // Xử lý phím trên toàn trang
    function handleKeyDown(event) {
        setLastKey(event.key);
        
        // Thêm vào log (giữ 5 phím cuối)
        setLog(prev => [...prev.slice(-4), event.key]);
        
        // Thử thách 3: Ctrl+D để đổi màu nền
        if (event.ctrlKey && event.key === 'd') {
            event.preventDefault(); // Ngăn bookmark mặc định
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            setBgColor(randomColor);
        }
    }
    
    // Xử lý phím trong input
    function handleInputKeyDown(event) {
        if (event.key === "Enter") {
            if (inputValue.trim() !== "") {
                alert("Bạn nhập: " + inputValue);
                setInputValue("");
            }
        }
        
        if (event.key === "Escape") {
            setInputValue("");
        }
    }
    
    // Thử thách 1: Game đoán phím
    function handleGameKeyDown(event) {
        if (event.key.toUpperCase() === targetKey) {
            setScore(score + 1);
            setGameMessage("🎉 Đúng rồi! +1 điểm");
            // Tạo phím mới ngẫu nhiên
            const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            setTargetKey(keys[Math.floor(Math.random() * keys.length)]);
        } else if (event.key.length === 1) {
            setGameMessage(`❌ Sai! Bạn nhấn "${event.key.toUpperCase()}", cần nhấn "${targetKey}"`);
        }
    }
    
    // Thử thách 2: Di chuyển ô vuông bằng phím mũi tên
    function handleArrowKeys(event) {
        const step = 20;
        switch(event.key) {
            case "ArrowUp":
                setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
                break;
            case "ArrowDown":
                setPosition(prev => ({ ...prev, y: Math.min(200, prev.y + step) }));
                break;
            case "ArrowLeft":
                setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
                break;
            case "ArrowRight":
                setPosition(prev => ({ ...prev, x: Math.min(300, prev.x + step) }));
                break;
            default:
                break;
        }
    }
    
    return (
        <div 
            style={{ 
                padding: "20px", 
                border: "1px solid #ccc", 
                borderRadius: "8px", 
                marginBottom: "20px",
                backgroundColor: bgColor 
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <h2>⌨️ Bài 5.3 — Keyboard Events</h2>
            
            <p>Phím cuối cùng: <strong>{lastKey || "Chưa nhấn"}</strong></p>
            <p>Log: {log.join(" → ") || "(trống)"}</p>
            
            <hr />
            
            <h3>Nhập và nhấn Enter:</h3>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Nhập rồi nhấn Enter..."
                style={{ padding: "8px", width: "300px" }}
            />
            <p style={{ fontSize: "12px", color: "#666" }}>
                Nhấn Escape để xóa
            </p>
            
            <hr />
            
            {/* Thử thách 1: Game đoán phím */}
            <h3>🎮 Thử thách 1: Game đoán phím</h3>
            <div 
                style={{ 
                    padding: "20px", 
                    backgroundColor: "#e3f2fd", 
                    borderRadius: "8px",
                    textAlign: "center",
                    marginBottom: "10px"
                }}
                onKeyDown={handleGameKeyDown}
                tabIndex={0}
            >
                <p style={{ fontSize: "14px", color: "#666" }}>Click vào đây và nhấn phím:</p>
                <div style={{ 
                    fontSize: "48px", 
                    fontWeight: "bold", 
                    color: "#1976d2",
                    margin: "20px 0" 
                }}>
                    {targetKey}
                </div>
                <p>Điểm: <strong>{score}</strong></p>
                <p>{gameMessage}</p>
            </div>
            
            <hr />
            
            {/* Thử thách 2: Di chuyển ô vuông */}
            <h3>🎯 Thử thách 2: Di chuyển bằng phím mũi tên</h3>
            <p style={{ fontSize: "12px", color: "#666" }}>Click vào khung và dùng ↑↓←→</p>
            <div 
                style={{ 
                    position: "relative",
                    width: "350px",
                    height: "250px",
                    backgroundColor: "#f5f5f5",
                    border: "2px solid #ccc",
                    borderRadius: "8px"
                }}
                onKeyDown={handleArrowKeys}
                tabIndex={0}
            >
                <div style={{
                    position: "absolute",
                    left: position.x,
                    top: position.y,
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#4caf50",
                    borderRadius: "8px",
                    transition: "all 0.1s ease"
                }} />
            </div>
            <p>Vị trí: x={position.x}, y={position.y}</p>
            
            <hr />
            
            {/* Thử thách 3: Phím tắt */}
            <h3>🔑 Thử thách 3: Phím tắt Ctrl+D</h3>
            <p>Nhấn <kbd>Ctrl</kbd> + <kbd>D</kbd> để đổi màu nền</p>
            <p>Màu hiện tại: <strong>{bgColor}</strong></p>
        </div>
    );
}

export default KeyboardEvents;
