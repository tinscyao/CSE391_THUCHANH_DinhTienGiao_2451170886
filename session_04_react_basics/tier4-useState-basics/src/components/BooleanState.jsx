import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    
    const themeStyle = {
        backgroundColor: isDarkMode ? "#1a1a2e" : "#ffffff",
        color: isDarkMode ? "#eaeaea" : "#333333",
        padding: "20px",
        minHeight: "400px",
        borderRadius: "10px",
        border: "2px solid #ddd",
        margin: "10px",
        transition: "all 0.3s ease"
    };
    
    return (
        <div style={themeStyle}>
            <h2>🔀 Toggle Demo</h2>
            
            {/* Toggle Dark Mode */}
            <div style={{ marginBottom: "20px" }}>
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    style={{ 
                        padding: "12px 24px", 
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "25px",
                        border: "none",
                        backgroundColor: isDarkMode ? "#ffd700" : "#2c3e50",
                        color: isDarkMode ? "#333" : "#fff"
                    }}
                >
                    {isDarkMode ? "☀️ Chế độ sáng" : "🌙 Chế độ tối"}
                </button>
            </div>
            
            <hr style={{ borderColor: isDarkMode ? "#444" : "#ddd" }} />
            
            {/* Toggle ẩn/hiện nội dung */}
            <div style={{ marginBottom: "20px" }}>
                <button 
                    onClick={() => setIsVisible(!isVisible)}
                    style={{ 
                        padding: "10px 20px", 
                        cursor: "pointer",
                        borderRadius: "5px",
                        border: "1px solid #4CAF50",
                        backgroundColor: isVisible ? "#4CAF50" : "transparent",
                        color: isVisible ? "#fff" : (isDarkMode ? "#eee" : "#4CAF50")
                    }}
                >
                    {isVisible ? "🔽 Ẩn nội dung" : "🔼 Hiện nội dung"}
                </button>
                
                {isVisible && (
                    <div style={{ 
                        marginTop: "15px", 
                        padding: "15px", 
                        backgroundColor: isDarkMode ? "#16213e" : "#f0f0f0",
                        borderRadius: "8px",
                        borderLeft: "4px solid #4CAF50"
                    }}>
                        <p>📦 Đây là nội dung có thể ẩn/hiện!</p>
                        <p>Bạn có thể click nút ở trên để toggle.</p>
                    </div>
                )}
            </div>
            
            <hr style={{ borderColor: isDarkMode ? "#444" : "#ddd" }} />
            
            {/* Toggle Like */}
            <div style={{ marginBottom: "20px" }}>
                <button 
                    onClick={() => setIsLiked(!isLiked)}
                    style={{ 
                        padding: "12px 24px", 
                        fontSize: "20px",
                        cursor: "pointer",
                        borderRadius: "50px",
                        border: "2px solid #e91e63",
                        backgroundColor: isLiked ? "#e91e63" : "transparent",
                        color: isLiked ? "#fff" : "#e91e63",
                        transition: "all 0.3s ease"
                    }}
                >
                    {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
                </button>
            </div>
            
            <hr style={{ borderColor: isDarkMode ? "#444" : "#ddd" }} />
            
            {/* Toggle Bóng đèn */}
            <div style={{ marginBottom: "20px" }}>
                <h3>💡 Bật/Tắt đèn</h3>
                <button 
                    onClick={() => setIsLightOn(!isLightOn)}
                    style={{ 
                        padding: "15px 30px", 
                        fontSize: "24px",
                        cursor: "pointer",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: isLightOn ? "#ffeb3b" : "#424242",
                        boxShadow: isLightOn ? "0 0 30px #ffeb3b" : "none",
                        transition: "all 0.3s ease"
                    }}
                >
                    {isLightOn ? "💡" : "🔅"}
                </button>
                <p style={{ marginTop: "10px" }}>
                    Đèn đang: <strong>{isLightOn ? "BẬT 🔆" : "TẮT 🌑"}</strong>
                </p>
            </div>
            
            <hr style={{ borderColor: isDarkMode ? "#444" : "#ddd" }} />
            
            {/* Accordion */}
            <div style={{ marginBottom: "20px" }}>
                <h3>📂 Accordion</h3>
                <div 
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    style={{ 
                        padding: "15px",
                        backgroundColor: isDarkMode ? "#0f3460" : "#e3f2fd",
                        borderRadius: "8px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <span><strong>📌 Click để xem thêm thông tin</strong></span>
                    <span style={{ fontSize: "20px" }}>
                        {isAccordionOpen ? "▲" : "▼"}
                    </span>
                </div>
                
                {isAccordionOpen && (
                    <div style={{ 
                        padding: "15px",
                        backgroundColor: isDarkMode ? "#16213e" : "#fff",
                        borderRadius: "0 0 8px 8px",
                        borderTop: "none",
                        border: `1px solid ${isDarkMode ? "#0f3460" : "#e3f2fd"}`
                    }}>
                        <p>🎉 Đây là nội dung ẩn của accordion!</p>
                        <p>Bạn có thể đặt bất kỳ nội dung nào ở đây.</p>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BooleanState;
