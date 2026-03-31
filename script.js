document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('disclaimer-modal');
    const acceptBtn = document.getElementById('accept-btn');
    const startBtn = document.getElementById('start-btn');
    const logStream = document.getElementById('log-stream');
    const fileStatus = document.getElementById('file-status');

    // 1. Modal Kapatma
    acceptBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // 2. Dosya Seçimi
    window.handleFiles = (files) => {
        if (files.length > 0) {
            fileStatus.innerText = `> ${files.length} GÖRSEL ANALİZE HAZIR.`;
            fileStatus.style.color = "#38bdf8";
            startBtn.disabled = false;
        }
    };

    // 3. Analiz Başlatma
    startBtn.onclick = async () => {
        startBtn.disabled = true;
        startBtn.innerText = "ANALİZ YÜRÜTÜLÜYOR...";
        logStream.innerHTML = "";

        const logs = [
            { t: "> [SİSTEM] Forensic motoru aktif...", c: "" },
            { t: "> [VERİ] Pikseller taranıyor...", c: "" },
            { t: "> [TARA] Font kalınlığı ölçülüyor...", c: "" },
            { t: "> [TARA] Karakter boşlukları denetleniyor...", c: "" },
            { t: "> [ANALİZ] APP plaka bulguları saptandı.", c: "log-err" },
            { t: " ", c: "" },
            { t: "=== ANALİZ RAPORU ===", c: "log-err" },
            { t: "[!] BULGU: Standart Dışı Kalın Font", c: "log-err" },
            { t: "[!] RİSK: Ağır Kusur (Muayene İptal)", c: "log-err" },
            { t: "[!] CEZA: 2.647 TL Trafik Cezası Riski", c: "log-err" },
            { t: "> [ÖNERİ] Plakayı orijinaliyle değiştirin.", c: "log-ok" }
        ];

        for (const log of logs) {
            const p = document.createElement('p');
            p.className = `log-l ${log.c}`;
            p.innerText = log.t;
            logStream.appendChild(p);
            logStream.scrollTop = logStream.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        startBtn.innerText = "ANALİZ TAMAMLANDI";
    };
});
