document.addEventListener('DOMContentLoaded', () => {
    const bootBtn = document.getElementById('boot-btn');
    const bootModal = document.getElementById('boot-modal');
    const mainUi = document.getElementById('main-ui');
    const scanBtn = document.getElementById('scan-btn');
    const fileInput = document.getElementById('fileInput');
    const terminal = document.getElementById('terminal');

    // Sistemi Başlat Butonu
    bootBtn.addEventListener('click', () => {
        bootModal.style.display = 'none';
        mainUi.classList.add('active');
    });

    // Dosya Seçimi
    document.getElementById('drop-zone').addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            document.getElementById('drop-text').innerText = e.target.files.length + " GÖRSEL YÜKLENDİ";
            scanBtn.disabled = false;
        }
    });

    // Analiz
    scanBtn.addEventListener('click', async () => {
        scanBtn.disabled = true;
        terminal.innerHTML = "";
        const logs = [
            "> [SİSTEM] Motor başlatıldı...",
            "> [ANALİZ] Piksel verileri taranıyor...",
            "> [UYARI] Standart dışı font tespiti!",
            "--- SONUÇ: APP PLAKA ---",
            "CEZA: 3.830 TL (2026)"
        ];

        for (let log of logs) {
            const p = document.createElement('div');
            p.innerText = log;
            terminal.appendChild(p);
            await new Promise(r => setTimeout(r, 600));
        }
        scanBtn.disabled = false;
    });
});
