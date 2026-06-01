import { useState } from 'react';
import NumberState from './components/NumberState';
import StringState from './components/StringState';
import BooleanState from './components/BooleanState';
import MultipleStates from './components/MultipleStates';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('number');
    
    const tabs = [
        { id: 'number', label: '📊 Số (Number)', component: <NumberState /> },
        { id: 'string', label: '📝 Chuỗi (String)', component: <StringState /> },
        { id: 'boolean', label: '🔀 Boolean (Toggle)', component: <BooleanState /> },
        { id: 'multiple', label: '📋 Form (Multiple States)', component: <MultipleStates /> }
    ];
    
    const currentTab = tabs.find(tab => tab.id === activeTab);
    
    return (
        <div className="app">
            <header className="header">
                <h1>⚛️ Tier 4 — useState cơ bản</h1>
                <p>Quản lý trạng thái với số, chuỗi, boolean trong React</p>
            </header>
            
            {/* Tab Navigation */}
            <nav className="tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
            
            {/* Content */}
            <main className="content">
                {currentTab && currentTab.component}
            </main>
            
            {/* Footer */}
            <footer className="footer">
                <p>
                    💡 <strong>Tip:</strong> Mỗi tab demo một kiểu useState khác nhau. 
                    Hãy thử tương tác với các nút và input!
                </p>
            </footer>
        </div>
    );
}

export default App;
