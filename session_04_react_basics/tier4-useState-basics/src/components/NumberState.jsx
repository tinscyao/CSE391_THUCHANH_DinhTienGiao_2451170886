import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);
    
    // Xác định màu dựa vào giá trị count
    const getColor = () => {
        if (count > 0) return "green";
        if (count < 0) return "red";
        return "black";
    };
    
    // Xác định loại số
    const getNumberType = () => {
        if (count > 0) return "Số dương ✅";
        if (count < 0) return "Số âm ❌";
        return "Số không ⭕";
    };
    
    return (
        <div style={{ 
            textAlign: "center", 
            padding: "20px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            margin: "10px"
        }}>
            <h2>📊 Bộ đếm số</h2>
            
            <h1 style={{ color: getColor(), fontSize: "48px" }}>
                {count}
            </h1>
            
            <p style={{ color: getColor() }}>
                {getNumberType()}
            </p>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
                >
                    Tăng (+1)
                </button>
                
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
                >
                    Giảm (-1)
                </button>
                
                <button 
                    onClick={() => setCount(count + 5)}
                    style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white" }}
                >
                    Tăng 5 (+5)
                </button>
                
                <button 
                    onClick={() => setCount(0)}
                    style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#f44336", color: "white" }}
                >
                    Reset
                </button>
                
                <button 
                    onClick={() => setCount(count * 2)}
                    style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#2196F3", color: "white" }}
                >
                    Nhân đôi (×2)
                </button>
            </div>
        </div>
    );
}

export default NumberState;
