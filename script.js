:root {
    --bg-deep: #050609;
    --bg-panel: #111319;
    --text: #e2e8f0;
    --accent: #dca238;
    --blue-accent: #38bdf8;
    --green: #22c55e;
    --red: #ef4444;
}

body { 
    font-family: 'Play', sans-serif; 
    background: var(--bg-deep); 
    color: var(--text); 
    margin: 0; 
    display: flex; 
    justify-content: center; 
    min-height: 100vh; 
    overflow-x: hidden;
}

.container { width: 95%; max-width: 1000px; padding: 20px; display: flex; flex-direction: column; gap: 20px; }
.hidden { display: none !important; }

/* Modal */
.modal { position: fixed; inset: 0; background: rgba(0,0,0,0.98); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-content { background: var(--bg-panel); padding: 40px; border-radius: 12px; border: 1px solid var(--accent); width: 90%; max-width: 400px; }
.system-h { color: var(--accent); font-family: 'JetBrains Mono', monospace; margin-top: 0; border-bottom: 1px solid #2d3748; padding-bottom: 10px; }

/* Header */
.app-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.header-left { display: flex; align-items: center; gap: 15px; }
.scanner-icon { font-size: 2rem; filter: drop-shadow(0 0 10px var(--blue-accent)); }
.titles h1 { font-size: 1.4rem; margin: 0; letter-spacing: 2px; }
.titles h2 { font-size: 0.7rem; color: #64748b; margin: 0; }

.status-indicator { display: flex; align-items: center; gap: 8px; border: 1px solid #1a1e29; padding: 5px 12px; border-radius: 4px; font-size: 0.7rem; }
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); }

/* Paneller */
.paneller { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.forensic-panel { background: var(--bg-panel); border: 1px solid #1a1e29; border-radius: 8px; padding: 20px; min-height: 380px; position: relative; }
.panel-h { font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; }
.panel-h::before { content: ''; width: 6px; height: 6px; border-radius: 50%; }
.yellow-dot::before { background: var(--accent); }
.blue-dot::before { background: var(--blue-accent); }

/* Upload Area */
.upload-area { border: 1px dashed #2d3748; border-radius: 8px; height: 180px; margin: 20px 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(0,0,0,0.2); }

/* Buttons */
.button { background: var(--blue-accent); color: #000; border: none; padding: 12px 20px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.85rem; transition: 0.3s; }
.button.neon { background: transparent; color: var(--accent); border: 1px solid var(--accent); width: 100%; margin-top: 20px; }
.button.neon:hover { background: var(--accent); color: #000; }
.button.fill { background: #1a1e29; color: #e2e8f0; border: 1px solid #2d3748; }

.forensic-start { position: absolute; bottom: 20px; left: 20px; width: calc(100% - 40px); background: #2d3748; color: #64748b; }
.forensic-start:not(:disabled) { background: var(--accent); color: #000; box-shadow: 0 0 15px rgba(220, 162, 56, 0.3); }

/* Log Stream */
.log-stream { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #64748b; height: 300px; overflow-y: auto; padding: 10px; line-height: 1.6; }
.log-line { margin: 4px 0; border-bottom: 1px solid #1a1e29; padding-bottom: 2px; }
.log-warn { color: var(--accent); }
.log-err { color: var(--red); }
.log-ok { color: var(--green); }

/* Footer */
.app-footer { background: var(--bg-panel); padding: 15px; border-radius: 8px; display: flex; justify-content: space-between; font-size: 0.75rem; border: 1px solid #1a1e29; }
.footer-left { color: var(--red); display: flex; gap: 8px; font-weight: bold; }
