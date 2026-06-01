import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const maxLength = 100;
    
    // Kiểm tra email hợp lệ (có @)
    const isEmailValid = email.includes("@");
    
    return (
        <div style={{ 
            padding: "20px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            margin: "10px"
        }}>
            <h2>📝 Nhập thông tin</h2>
            
            {/* Input Tên */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                    Tên: 
                </label>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                    maxLength={maxLength}
                    style={{ 
                        padding: "10px", 
                        width: "100%", 
                        boxSizing: "border-box",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                />
                <small style={{ color: "#666" }}>
                    {name.length}/{maxLength} ký tự
                </small>
            </div>
            
            {/* Input Email */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                    Email: 
                </label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                    style={{ 
                        padding: "10px", 
                        width: "100%", 
                        boxSizing: "border-box",
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: `1px solid ${email && !isEmailValid ? "red" : "#ccc"}`
                    }}
                />
                {email && (
                    <small style={{ color: isEmailValid ? "green" : "red" }}>
                        {isEmailValid ? "✅ Email hợp lệ" : "❌ Email cần có ký tự @"}
                    </small>
                )}
            </div>
            
            {/* Input Mật khẩu với nút ẩn/hiện */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                    Mật khẩu: 
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                    <input 
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu..."
                        style={{ 
                            padding: "10px", 
                            flex: 1,
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    <button 
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ 
                            padding: "10px 15px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            backgroundColor: "#f0f0f0"
                        }}
                    >
                        {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
                    </button>
                </div>
            </div>
            
            {/* Preview thông tin */}
            <h3>📋 Thông tin đã nhập:</h3>
            <div style={{ 
                background: "#f8f9fa", 
                padding: "15px", 
                borderRadius: "8px",
                marginBottom: "10px"
            }}>
                <p><strong>Tên:</strong> {name || "(chưa nhập)"}</p>
                <p><strong>Email:</strong> {email || "(chưa nhập)"}</p>
                <p><strong>Mật khẩu:</strong> {password ? "●".repeat(password.length) : "(chưa nhập)"}</p>
            </div>
            
            {/* Preview realtime */}
            {name && (
                <div style={{ 
                    background: "#e8f5e9", 
                    padding: "15px", 
                    borderRadius: "8px",
                    border: "1px solid #4caf50"
                }}>
                    <p>
                        👋 Xin chào <strong>{name}</strong>! 
                        {email && <span> Email của bạn là <strong>{email}</strong></span>}
                    </p>
                </div>
            )}
        </div>
    );
}

export default StringState;
