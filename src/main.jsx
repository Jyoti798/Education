// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// ✅ DataTables CSS (correct filename for v2+)
import "datatables.net-dt/css/dataTables.dataTables.css"

// ✅ Bootstrap JS bundle (with Popper)
import "bootstrap/dist/js/bootstrap.bundle.min.js"
// ✅ jQuery (needed by DataTables)
import $ from "jquery"
// ✅ DataTables core
import "datatables.net-dt"

window.$ = window.jQuery = $
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
