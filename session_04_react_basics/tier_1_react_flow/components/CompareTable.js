/**
 * CompareTable Component
 * Bảng so sánh: Biến bình thường vs useState
 */
function CompareTable() {
    return (
        <div className="demo-section">
            <h2>📊 So sánh: Biến thường vs useState</h2>
            <table className="compare-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Biến bình thường</th>
                        <th>useState</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Khai báo</td>
                        <td><code>let count = 0</code></td>
                        <td><code>const [count, setCount] = useState(0)</code></td>
                    </tr>
                    <tr>
                        <td>Thay đổi</td>
                        <td><code>count = 5</code></td>
                        <td><code>setCount(5)</code></td>
                    </tr>
                    <tr>
                        <td>UI cập nhật?</td>
                        <td className="text-danger">❌ Không</td>
                        <td className="text-success">✅ Có</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
