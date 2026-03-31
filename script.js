function acceptRules() {
    document.getElementById('disclaimer-modal').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
}

function handleFiles(files) {
    if (files.length === 0) return;

    // Yükleme butonunu analiz başladıktan sonra aktif et
    document.getElementById('start-btn').disabled = false;
    document.getElementById('start-btn').innerText = "1 GÖRSEL HAZIR. BAŞLAT?";
    document.getElementById('start-btn').style.background = "#dca238"; // Sönük Sarı

    // Log alanını temizle ve hazır mesajı yaz
    const logStream = document.getElementById('log-stream');
    logStream.innerHTML = `<p class="log-line log-warning">> [SİSTEM] Görsel yüklendi. Analiz bekleniyor...</p>`;
}

async function startAnalysis() {
    const startBtn = document.getElementById('start-btn');
    startBtn.disabled = true;
    startBtn.innerText = "ANALİZ SÜRÜYOR...";
    startBtn.style.background = "#1a1e29"; // Pasif gri

    const logStream = document.getElementById('log-stream');
    logStream.innerHTML = ""; // Temizle

    // Terminal efektiyle rapor yazdırma (Satır satır)
    const logData = [
        { text: "> [SİSTEM] Forensic Protokolü V1.0 başlatıldı.", type: "" },
        { text: "> [GÖRSEL] Çözünürlük ve HDR taraması yapılıyor...", type: "" },
        { text: "> [GÖRSEL] 1 Görsel analiz ediliyor.", type: "" },
        { text: "> [ANALİZ] Karakter et kalınlığı taraması...", type: "" },
        { text: "> [ANALİZ] Mühür alanı geometrik denetimi...", type: "" },
        { text: ">", type: "" }, // Boş satır
        { text: "== ANALİZ RAPORU ==", type: "log-warning" }
    ];

    // Simülasyon Analiz Sonucu
    const isApp = Math.random() > 0.4;
    
    if (isApp) {
        logData.push(
            { text: ">> Tespit Edilen Tür: APP (Standart Dışı)", type: "log-risk" },
            { text: ">> Karakterler: Kalın / Bold (%85 risk)", type: "log-risk" },
            { text: ">> Geometri: Köşeli karakter yapısı.", type: "log-risk" },
            { text: ">> Risk Maliyeti: ~₺5.627+ ceza/gider riski.", type: "log-risk" },
            { text: "> [SONUÇ] Araç muayeneden geçemez. Yüksek ceza riski.", type: "log-risk" }
        );
    } else {
        logData.push(
            { text: ">> Tespit Edilen Tür: Orijinal", type: "log-success" },
            { text: ">> Karakterler: Standart ince font.", type: "log-success" },
            { text: ">> Mühür Alanı: Geçerli tarama yapıldı.", type: "log-success" },
            { text: ">> Risk: Yok.", type: "log-success" },
            { text: "> [SONUÇ] Plaka yasal standartlara uygun görünmektedir.", type: "log-success" }
        );
    }

    logData.push({ text: "> [SİSTEM] Analiz tamamlandı.", type: "" });

    // Satır satır ekle (Terminal efekti)
    for (const log of logData) {
        logStream.innerHTML += `<p class="log-line ${log.type}">${log.text}</p>`;
        // Log alanını en aşağı kaydır
        logStream.scrollTop = logStream.scrollHeight;
        await new Promise(r => setTimeout(r, 150)); // Her satır arası 150ms bekle
    }
}
