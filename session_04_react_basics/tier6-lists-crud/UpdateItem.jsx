import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [saved, setSaved] = useState(false);

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }
    function saveEdit() {
        if (editName.trim() === "" || editAge === "") return;
        setItems(items.map(item =>
            item.id === editingId
                ? { ...item, name: editName, age: parseInt(editAge) }
                : item
        ));
        setEditingId(null);
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
    }
    function cancelEdit() {
        setEditingId(null);
    }
    function handleKeyPress(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Sửa thông tin</h2>
            {saved && <div style={{ color: "green" }}>Đã lưu!</div>}
            {items.map(item => (
                <div key={item.id} style={{
                    padding: "10px", margin: "5px 0", background: "#f9f9f9"
                }}>
                    {editingId === item.id ? (
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input
                                value={editName}
                                onChange={e => setEditName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                autoFocus
                                style={{
                                    padding: "4px",
                                    border: "2px solid #3498db",
                                    background: "#eaf6fb"
                                }}
                            />
                            <input
                                type="number"
                                value={editAge}
                                onChange={e => setEditAge(e.target.value)}
                                onKeyPress={handleKeyPress}
                                style={{ padding: "4px", width: "60px" }}
                            />
                            <button
                                onClick={saveEdit}
                                style={{ background: "#27ae60", color: "white", border: "none", padding: "4px 8px" }}
                                disabled={editName.trim() === ""}
                            >✓ Lưu</button>
                            <button
                                onClick={cancelEdit}
                                style={{ background: "#95a5a6", color: "white", border: "none", padding: "4px 8px" }}
                            >✕ Hủy</button>
                        </div>
                    ) : (
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>{item.name} - {item.age} tuổi</span>
                            <button
                                onClick={() => startEdit(item)}
                                style={{ background: "#3498db", color: "white", border: "none", padding: "4px 8px" }}
                            >✏️ Sửa</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
export default UpdateItem;
