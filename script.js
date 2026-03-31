// Saat ve Bağlantı Durumu
setInterval(() => {
    const clock = document.getElementById('clock');
    if (clock) {
        clock.innerText = new Date().toLocaleTimeString() + " | SECURE_LINK";
    }
}, 1000);

// Sistemi Başlatma (Modal Kapatma)
function bootSystem() {
    document.getElementById('boot-modal').classList.add('hidden');
    document.getElementById('main-ui').classList.add('active');
}

// Dosya Seçim İşlemi
const fileInput = document.getElementById('fileInput');
const scanBtn = document.getElementById('scan-btn');
const dropText = document.getElementById('drop-text');

if (fileInput) {
    fileInput.addEventListener('change', function(e) {
        handleFiles(this.files);
    });
}

function handleFiles(files) {
    if (files.length > 0) {
        dropText.innerHTML = `<span style="color: #00ff88;">${files.length} VERİ PAKETİ ENJEKTE EDİLDİ</span>`;
        scanBtn.disabled = false;
        addLog(`> [BAĞLANTI] ${files.length} adet görsel adli belleğe alındı.`, "log-info");
    }
}

// Log Yazdırma Fonksiyonu
function addLog(msg, type) {
    const term = document.getElementById('terminal');
    const div = document.createElement('div');
    div.className = `log-entry ${type}`;
    div.innerText = msg;
    term.appendChild(div);
    term.scrollTop = term.scrollHeight;
}

// Derin Tarama Simülasyonu
async function runDeepScan() {
    scanBtn.disabled = true;
    scanBtn.innerText = "TARANIYOR...";
    
    const logs = [
        { m: "> [SİSTEM] AI motorları senkronize ediliyor...", t: "log-info" },
        { m: "> [TARAMA] Piksel derinliği ve font analizi başlatıldı...", t: "log-info" },
        { m: "> [ANALİZ] Karakter kenar keskinliği (Font Rendering) ölçülüyor...", t: "log-info" },
        { m: "> [UYARI] Standart font parametrelerinden sapma saptandı!", t: "log-warn" },
        { m: "> [KRİTİK] TŞOF mühür izi doğrulaması başarısız.", t: "log-crit" },
        { m: " ", t: "" },
        { m: "=== ADLİ TESPİT RAPORU V5.0 ===", t: "log-crit" },
        { m: "SONUÇ: APP PLAKA TESPİT EDİLDİ", t: "log-crit" },
        { m: "GÜNCEL CEZA: ₺3.830 (2026 Tarifesi)", t: "log-crit" },
        { m: "MUAYENE DURUMU: AĞIR KUSUR", t: "log-crit" },
        { m: "TAVSİYE: Orijinal mühürlü plakaya geçiş yapın.", t: "log-success" }
    ];

    for (const log of logs) {
        addLog(log.m, log.t);
        // Her satır için bekleme süresi (gerçekçilik katar)
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    scanBtn.innerText = "YENİ ANALİZ BAŞLAT";
    scanBtn.disabled = false;
}

// Buton Tıklama Dinleyicisi
if (scanBtn) {
    scanBtn.addEventListener('click', runDeepScan);
}
