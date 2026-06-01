import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    const avgAge = (students.reduce((sum, s) => sum + s.age, 0) / students.length).toFixed(1);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <h2>Danh sách sinh viên</h2>
            {students.map((student, idx) => (
                <div
                    key={student.id}
                    style={{
                        padding: "8px",
                        margin: "5px 0",
                        background: "#f9f9f9",
                        color: student.age >= 20 ? "green" : "black"
                    }}
                >
                    {idx + 1}. {student.name} - {student.age} tuổi
                </div>
            ))}
            <div>Tuổi trung bình: <b>{avgAge}</b></div>
        </div>
    );
}
export default ListBasics;
