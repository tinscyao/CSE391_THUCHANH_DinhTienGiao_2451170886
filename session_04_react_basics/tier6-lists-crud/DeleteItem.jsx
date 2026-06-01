import { useState } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);
    const [deleted, setDeleted] = useState(null);

    function handleDelete(id) {
        const item = items.find(i => i.id === id);
        if (window.confirm(`Xóa ${item.name}?`)) {
            setItems(items.filter(i => i.id !== id));
            setDeleted({ ...item, timeout: setTimeout(() => setDeleted(null), 5000) });
        }
    }

    function undoDelete() {
        if (deleted) {
            setItems(prev => [...prev, { id: deleted.id, name: deleted.name }]);
            clearTimeout(deleted.timeout);
            setDeleted(null);
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Xóa sinh viên</h2>
            {deleted && (
                <div style={{ color: "red" }}>
                    Đã xóa {deleted.name}! <button onClick={undoDelete}>Hoàn tác</button>
                </div>
            )}
            {items.length === 0 ? (
                <p style={{ color: "#999" }}>Danh sách trống</p>
            ) : (
                items.map(item => (
                    <div key={item.id} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "10px", margin: "5px 0", background: "#f9f9f9"
                    }}>
                        <span>{item.name}</span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            style={{ background: "#e74c3c", color: "white", border: "none", padding: "4px 8px" }}
                        >Xóa</button>
                    </div>
                ))
            )}
        </div>
    );
}
export default DeleteItem;
