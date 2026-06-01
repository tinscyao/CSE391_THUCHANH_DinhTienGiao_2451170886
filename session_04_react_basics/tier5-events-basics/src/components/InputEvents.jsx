import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [wordCount, setWordCount] = useState(0);
    
    // Handler cho input text cơ bản
    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
        setCharCount(newValue.length);
        
        // Đếm số từ (thử thách 3)
        const words = newValue.trim().split(/\s+/).filter(word => word !== "");
        setWordCount(words.length);
    }
    
    // Thử thách 1: Validate email
    function handleEmailChange(event) {
        const value = event.target.value;
        setEmail(value);
        
        if (value === "") {
            setIsEmailValid(null);
        } else {
            // Kiểm tra có @ không
            setIsEmailValid(value.includes("@") && value.includes("."));
        }
    }
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px" }}>
            <h2>📝 Bài 5.2 — Input Events</h2>
            
            {/* Input cơ bản với đếm ký tự */}
            <h3>Đếm ký tự:</h3>
            <input 
                value={text}
                onChange={handleChange}
                placeholder="Nhập gì đó..."
                maxLength={100}
                style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
            />
            
            <p>Ký tự: {charCount}/100</p>
            <p>Bạn đang nhập: <strong>{text || "(trống)"}</strong></p>
            
            {charCount > 80 && (
                <p style={{ color: "red" }}>⚠️ Sắp hết ký tự!</p>
            )}
            
            <hr />
            
            {/* Thử thách 1: Email validation */}
            <h3>🔍 Thử thách 1: Email Validation</h3>
            <div style={{ marginBottom: "10px" }}>
                <input 
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Nhập email..."
                    type="text"
                    style={{ 
                        padding: "8px", 
                        width: "300px",
                        border: isEmailValid === null 
                            ? "1px solid #ccc" 
                            : isEmailValid 
                                ? "2px solid #4caf50" 
                                : "2px solid #f44336",
                        borderRadius: "4px"
                    }}
                />
                {isEmailValid !== null && (
                    <span style={{ marginLeft: "10px" }}>
                        {isEmailValid ? "✅ Email hợp lệ" : "❌ Email cần có @ và ."}
                    </span>
                )}
            </div>
            
            <hr />
            
            {/* Thử thách 2: Preview khi nhập */}
            <h3>👀 Thử thách 2: Preview khi nhập</h3>
            <div style={{ 
                padding: "15px", 
                backgroundColor: "#f5f5f5", 
                borderRadius: "8px",
                border: "1px dashed #ccc",
                marginBottom: "10px"
            }}>
                <p style={{ margin: 0, fontStyle: text ? "normal" : "italic", color: text ? "#333" : "#999" }}>
                    {text || "Preview sẽ hiển thị ở đây khi bạn nhập..."}
                </p>
            </div>
            
            <hr />
            
            {/* Thử thách 3: Đếm số từ */}
            <h3>📊 Thử thách 3: Đếm số từ</h3>
            <p>Số từ: <strong>{wordCount}</strong></p>
            <p style={{ fontSize: "12px", color: "#666" }}>
                (Từ được tách bởi khoảng trắng)
            </p>
        </div>
    );
}

export default InputEvents;
