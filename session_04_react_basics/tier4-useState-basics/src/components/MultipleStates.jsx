import { useState } from "react";

function MultipleStates() {
    // Nhiều state trong 1 component
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    
    // Validate form
    function validateForm() {
        const newErrors = {};
        
        if (name.trim() === "") {
            newErrors.name = "Vui lòng nhập tên!";
        }
        
        if (email.trim() === "") {
            newErrors.email = "Vui lòng nhập email!";
        } else if (!email.includes("@")) {
            newErrors.email = "Email không hợp lệ!";
        }
        
        if (age === "") {
            newErrors.age = "Vui lòng nhập tuổi!";
        } else if (Number(age) <= 0 || Number(age) >= 100) {
            newErrors.age = "Tuổi phải từ 1 đến 99!";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    
    function handleSubmit() {
        if (validateForm()) {
            setSubmitted(true);
        }
    }
    
    function handleReset() {
        setName("");
        setEmail("");
        setAge("");
        setIsStudent(false);
        setSubmitted(false);
        setErrors({});
    }
    
    const inputStyle = {
        padding: "10px",
        width: "100%",
        boxSizing: "border-box",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc"
    };
    
    const errorStyle = {
        color: "#f44336",
        fontSize: "14px",
        marginTop: "5px"
    };
    
    return (
        <div style={{ 
            padding: "20px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            margin: "10px"
        }}>
            <h2>📋 Form đăng ký</h2>
            
            {/* Greeting khi có tên */}
            {name && !submitted && (
                <div style={{ 
                    backgroundColor: "#e3f2fd", 
                    padding: "10px 15px", 
                    borderRadius: "8px",
                    marginBottom: "15px",
                    border: "1px solid #2196f3"
                }}>
                    <p style={{ margin: 0 }}>👋 Xin chào <strong>{name}</strong>!</p>
                </div>
            )}
            
            {!submitted ? (
                <div>
                    {/* Input Tên */}
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Tên: <span style={{ color: "red" }}>*</span>
                        </label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nhập tên của bạn..."
                            style={{
                                ...inputStyle,
                                borderColor: errors.name ? "#f44336" : "#ccc"
                            }}
                        />
                        {errors.name && <p style={errorStyle}>{errors.name}</p>}
                    </div>
                    
                    {/* Input Email */}
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Email: <span style={{ color: "red" }}>*</span>
                        </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            style={{
                                ...inputStyle,
                                borderColor: errors.email ? "#f44336" : "#ccc"
                            }}
                        />
                        {errors.email && <p style={errorStyle}>{errors.email}</p>}
                    </div>
                    
                    {/* Input Tuổi */}
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Tuổi: <span style={{ color: "red" }}>*</span>
                        </label>
                        <input 
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Nhập tuổi (1-99)..."
                            min="1"
                            max="99"
                            style={{
                                ...inputStyle,
                                borderColor: errors.age ? "#f44336" : "#ccc"
                            }}
                        />
                        {errors.age && <p style={errorStyle}>{errors.age}</p>}
                    </div>
                    
                    {/* Checkbox Sinh viên */}
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            cursor: "pointer",
                            gap: "10px"
                        }}>
                            <input 
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                                style={{ 
                                    width: "18px", 
                                    height: "18px",
                                    cursor: "pointer"
                                }}
                            />
                            <span>🎓 Tôi là sinh viên</span>
                        </label>
                    </div>
                    
                    {/* Nút Submit */}
                    <button 
                        onClick={handleSubmit}
                        style={{ 
                            padding: "12px 30px",
                            fontSize: "16px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: "10px"
                        }}
                    >
                        ✅ Đăng ký
                    </button>
                    
                    <button 
                        onClick={handleReset}
                        style={{ 
                            padding: "12px 30px",
                            fontSize: "16px",
                            backgroundColor: "#9e9e9e",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        🔄 Xóa form
                    </button>
                </div>
            ) : (
                <div style={{ 
                    background: "#d4edda", 
                    padding: "20px", 
                    borderRadius: "8px",
                    border: "1px solid #28a745"
                }}>
                    <h3 style={{ color: "#155724", marginTop: 0 }}>
                        ✅ Đăng ký thành công!
                    </h3>
                    
                    <div style={{ 
                        backgroundColor: "#fff", 
                        padding: "15px", 
                        borderRadius: "8px",
                        marginBottom: "15px"
                    }}>
                        <p><strong>👤 Tên:</strong> {name}</p>
                        <p><strong>📧 Email:</strong> {email}</p>
                        <p><strong>🎂 Tuổi:</strong> {age}</p>
                        <p><strong>🎓 Sinh viên:</strong> {isStudent ? "Có ✓" : "Không ✗"}</p>
                    </div>
                    
                    <button 
                        onClick={handleReset}
                        style={{ 
                            padding: "12px 30px",
                            fontSize: "16px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        📝 Đăng ký lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;
