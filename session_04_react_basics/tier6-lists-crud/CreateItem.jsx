import { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);
    const [newName, setNewName] = useState("");
    const [success, setSuccess] = useState(false);
    const inputRef = useRef();

    function handleAdd() {
        if (newName.trim() === "") return;
        setItems([...items, { id: Date.now(), name: newName }]);
        setNewName("");
        setSuccess(true);
        inputRef.current.focus();
        setTimeout(() => setSuccess(false), 1500);
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") handleAdd();
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Thêm môn học</h2>
            <div style={{ marginBottom: "15px" }}>
                <input
                    ref={inputRef}
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", marginRight: "10px" }}
                />
                <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
                    ➕ Thêm
                </button>
            </div>
            {success && <div style={{ color: "green" }}>Đã thêm thành công!</div>}
            <h3>Danh sách ({items.length} môn):</h3>
            {items.map(item => (
                <div key={item.id} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}
export default CreateItem;
