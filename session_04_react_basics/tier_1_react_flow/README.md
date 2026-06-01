# Tier 1 — Hiểu luồng hoạt động của React

## 📁 Cấu trúc thư mục

```
tier_1_react_flow/
├── index.html              # Entry point - import tất cả
├── styles.css              # CSS tách riêng
├── README.md               # Hướng dẫn
└── components/             # Folder chứa components
    ├── App.js              # Component chính
    ├── LifecycleDemo.js    # Demo render lần đầu
    ├── BadCounter.js       # Counter sai (biến thường)
    ├── GoodCounter.js      # Counter đúng (useState)
    ├── CompareTable.js     # Bảng so sánh
    └── FlowDemo.js         # Demo luồng React
```

## 🚀 Cách chạy

1. Mở file `index.html` trực tiếp trong trình duyệt
2. Hoặc dùng Live Server extension trong VS Code

> ⚠️ **Lưu ý:** Cần chạy qua HTTP server (Live Server) để load các file JS riêng

## 📝 Components

| Component | Mục đích |
|-----------|----------|
| `LifecycleDemo` | Hiểu component render lần đầu (Mount) |
| `BadCounter` | Demo biến thường → UI không cập nhật |
| `GoodCounter` | Demo useState → UI cập nhật |
| `CompareTable` | Bảng so sánh biến thường vs useState |
| `FlowDemo` | Demo luồng: click → setState → re-render |

## 💡 Kiến thức chính

```
setState(newValue)
    ↓
Component function gọi lại (re-render)
    ↓
Return JSX mới
    ↓
React cập nhật DOM
```
