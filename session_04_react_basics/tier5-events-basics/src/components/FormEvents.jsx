import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    
    // Validate realtime (Thử thách 3)
    function validateField(name, value) {
        const newErrors = { ...errors };
        
        switch(name) {
            case "name":
                if (value.length < 2 && value.length > 0) {
                    newErrors.name = "Tên phải có ít nhất 2 ký tự";
                } else {
                    delete newErrors.name;
                }
                break;
            case "email":
                // Thử thách 1: Validate email có @
                if (value && (!value.includes("@") || !value.includes("."))) {
                    newErrors.email = "Email phải có @ và .";
                } else {
                    delete newErrors.email;
                }
                break;
            case "password":
                if (value.length < 6 && value.length > 0) {
                    newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
                } else {
                    delete newErrors.password;
                }
                // Kiểm tra lại confirm password
                if (formData.confirmPassword && value !== formData.confirmPassword) {
                    newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
                } else if (formData.confirmPassword) {
                    delete newErrors.confirmPassword;
                }
                break;
            case "confirmPassword":
                // Thử thách 2: Xác nhận mật khẩu
                if (value !== formData.password) {
                    newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
                } else {
                    delete newErrors.confirmPassword;
                }
                break;
            default:
                break;
        }
        
        setErrors(newErrors);
    }
    
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Validate realtime
        validateField(name, value);
    }
    
    function handleSubmit(event) {
        event.preventDefault(); // Ngăn reload trang
        
        // Validate tất cả các trường
        let hasError = false;
        const newErrors = {};
        
        if (formData.name === "") {
            newErrors.name = "Vui lòng nhập tên";
            hasError = true;
        }
        
        if (formData.email === "") {
            newErrors.email = "Vui lòng nhập email";
            hasError = true;
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Email phải có @";
            hasError = true;
        }
        
        if (formData.password === "") {
            newErrors.password = "Vui lòng nhập mật khẩu";
            hasError = true;
        }
        
        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
            hasError = true;
        }
        
        setErrors(newErrors);
        
        if (hasError || Object.keys(errors).length > 0) {
            return;
        }
        
        setSubmitted(true);
    }
    
    function handleReset() {
        setFormData({ 
            name: "", 
            email: "", 
            password: "", 
            confirmPassword: "", 
            message: "" 
        });
        setSubmitted(false);
        setErrors({});
    }
    
    const inputStyle = {
        padding: "8px",
        width: "100%",
        borderRadius: "4px",
        border: "1px solid #ccc"
    };
    
    const errorInputStyle = {
        ...inputStyle,
        border: "2px solid #f44336"
    };
    
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px" }}>
            <h2>📋 Bài 5.4 — Form Events</h2>
            
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <label>Tên: *</label>
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={errors.name ? errorInputStyle : inputStyle}
                            placeholder="Nhập tên..."
                        />
                        {errors.name && (
                            <p style={{ color: "#f44336", fontSize: "12px", margin: "4px 0 0" }}>
                                ⚠️ {errors.name}
                            </p>
                        )}
                    </div>
                    
                    {/* Thử thách 1: Validate email có @ */}
                    <div style={{ marginBottom: "15px" }}>
                        <label>Email: *</label>
                        <input 
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            style={errors.email ? errorInputStyle : inputStyle}
                            placeholder="example@email.com"
                        />
                        {errors.email && (
                            <p style={{ color: "#f44336", fontSize: "12px", margin: "4px 0 0" }}>
                                ⚠️ {errors.email}
                            </p>
                        )}
                    </div>
                    
                    {/* Thử thách 2: Mật khẩu & Xác nhận */}
                    <div style={{ marginBottom: "15px" }}>
                        <label>Mật khẩu: *</label>
                        <input 
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={errors.password ? errorInputStyle : inputStyle}
                            placeholder="Ít nhất 6 ký tự"
                        />
                        {errors.password && (
                            <p style={{ color: "#f44336", fontSize: "12px", margin: "4px 0 0" }}>
                                ⚠️ {errors.password}
                            </p>
                        )}
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                        <label>Xác nhận mật khẩu: *</label>
                        <input 
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            style={errors.confirmPassword ? errorInputStyle : inputStyle}
                            placeholder="Nhập lại mật khẩu"
                        />
                        {errors.confirmPassword && (
                            <p style={{ color: "#f44336", fontSize: "12px", margin: "4px 0 0" }}>
                                ⚠️ {errors.confirmPassword}
                            </p>
                        )}
                        {formData.confirmPassword && formData.password === formData.confirmPassword && (
                            <p style={{ color: "#4caf50", fontSize: "12px", margin: "4px 0 0" }}>
                                ✅ Mật khẩu khớp!
                            </p>
                        )}
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                        <label>Tin nhắn:</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{ ...inputStyle, resize: "vertical" }}
                            placeholder="Nhập tin nhắn (tùy chọn)..."
                        />
                    </div>
                    
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button 
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#4caf50",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            Gửi
                        </button>
                        <button 
                            type="button" 
                            onClick={handleReset}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#f5f5f5",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
                    <h3>✅ Đã gửi thành công!</h3>
                    <p><strong>Tên:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Mật khẩu:</strong> {"*".repeat(formData.password.length)}</p>
                    <p><strong>Tin nhắn:</strong> {formData.message || "(không có)"}</p>
                    <button 
                        onClick={handleReset}
                        style={{
                            marginTop: "10px",
                            padding: "10px 20px",
                            backgroundColor: "#4caf50",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Gửi lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;
