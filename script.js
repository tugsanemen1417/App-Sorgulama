function acceptRules() {
    // Modalı kapat ve ana içeriği göster
    document.getElementById('disclaimer-modal').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
}

function handleFiles(files) {
    if (files.length === 0) return;

    // Dosya seçimini algıla
    const startBtn = document.getElementById('start-btn');
    const fileStatus = document.getElementById('file-status');

    fileStatus.innerText = "> DOSYA HAZIR: " + files[0].name;
    fileStatus.style.color = "#38bdf8";
    
    startBtn.disabled = false;
    startBtn.innerText = "ANALİZİ BAŞLAT";
}

async function startAnalysis() {
    const logStream = document.getElementById('log-stream');
    const startBtn = document.getElementById('start-btn');
    
    startBtn.disabled = true;
    startBtn.innerText = "ANALİZ YÜRÜTÜLÜYOR...";
    logStream.innerHTML = ""; 

    const logs = [
        { t: "> [SİSTEM] Forensic motoru aktif edildi...", s: "" },
        { t: "> [VERİ] Görüntü pikselleri normalize ediliyor...", s: "" },
        { t: "> [TARA] Karakter geometrisi kontrol ediliyor...", s: "" },
        { t: "> [TARA] Font et kalınlığı ölçülüyor...", s: "" },
        { t: "> [ANALİZ] TŞOF soğuk mühür izi aranıyor...", s: "" },
        { t: "> [DURUM] Kritik bulgular saptandı.", s: "log-warn" },
        { t: " ", s: "" },
        { t: "=== ANALİZ RAPORU ===", s: "log-warn" }
    ];

    // Rastgele sonuç üret (APP veya Orijinal)
    const isApp = Math.random() > 0.4;

    if (isApp) {
        logs.push(
            { t: "[!] BULGU: Standart Dışı (APP) Karakterler", s: "log-err" },
            { t: "[!] RİSK: Muayeneden GEÇEMEZ (Ağır Kusur)", s: "log-err" },
            { t: "[!] MALİYET: 2.647 TL Trafik Cezası Riski", s: "log-err" },
            { t: "[!] ÖNERİ: Plakayı acilen mühürlü orijinaliyle değiştirin.", s: "log-warn" }
        );
    } else {
        logs.push(
            { t: "[+] BULGU: Yasal Karakter Geometrisi", s: "log-ok" },
            { t: "[+] DURUM: Muayene Uyumluluğu %100", s: "log-ok" },
            { t: "[+] SONUÇ: Orijinal plaka tescili onaylandı.", s: "log-ok" }
        );
    }

    // Terminal efektiyle yazdır
    for (let log of logs) {
        let p = document.createElement('p');
        p.className = "log-line " + log.s;
        p.innerText = log.t;
        logStream.appendChild(p);
        logStream.scrollTop = logStream.scrollHeight;
        await new Promise(r => setTimeout(r, 250)); // Her satırda 250ms bekle
    }

    startBtn.innerText = "ANALİZ TAMAMLANDI";
}
