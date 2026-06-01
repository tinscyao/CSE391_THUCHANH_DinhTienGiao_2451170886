import ClickEvents from './components/ClickEvents'
import InputEvents from './components/InputEvents'
import KeyboardEvents from './components/KeyboardEvents'
import FormEvents from './components/FormEvents'

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>🎯 Tier 5 — Events cơ bản</h1>
                <p>Xử lý sự kiện trong React: Click, Input, Keyboard, Form</p>
            </header>
            
            <main>
                <ClickEvents />
                <InputEvents />
                <KeyboardEvents />
                <FormEvents />
            </main>
            
            <footer>
                <h2>✅ Checklist</h2>
                <ul>
                    <li>✅ Xử lý click event</li>
                    <li>✅ Xử lý input change event</li>
                    <li>✅ Xử lý keyboard event (Enter, Escape)</li>
                    <li>✅ Xử lý form submit</li>
                    <li>✅ Sử dụng event.preventDefault()</li>
                </ul>
            </footer>
        </div>
    )
}

export default App
