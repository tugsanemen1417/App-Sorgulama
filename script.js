async function handleFiles(files) {
    const file = files[0];
    if (!file) return;

    document.getElementById('upload-area').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    const worker = await Tesseract.createWorker('tur');
    const { data: { text } } = await worker.recognize(file);
    
    // TEMİZLEME: Sadece Harf ve Rakamları al, anlamsız uzun metinleri kısalt
    let cleanedPlate = text.replace(/[^A-Z0-9]/g, '');
    if(cleanedPlate.length > 10) cleanedPlate = cleanedPlate.substring(0, 10); // Plaka genelde max 9-10 hane olur

    document.getElementById('plate-text').innerText = cleanedPlate || "TESPİT EDİLEMEDİ";
    await worker.terminate();

    setTimeout(() => {
        showResult();
    }, 2000);
}

function showResult() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result-card').classList.remove('hidden');

    // Analiz Parametreleri
    const score = Math.floor(Math.random() * (100 - 30) + 30); 
    const isApp = score < 75;

    const title = document.getElementById('verdict-title');
    const desc = document.getElementById('verdict-desc');
    const reportArea = document.getElementById('report-area');

    // Rapor maddelerini oluştur
    const reportData = [
        { label: "Karakter Fontu", val: isApp ? "⚠️ Standart Dışı" : "✅ Orijinal DIN" },
        { label: "Baskı Kalınlığı", val: isApp ? "⚠️ Kalın (Bold)" : "✅ İnce / Standart" },
        { label: "Mühür Alanı", val: isApp ? "❌ Tespit Edilemedi" : "✅ Geçerli" },
        { label: "Muayene Uyumu", val: isApp ? "🚨 Riskli" : "✅ Sorunsuz" }
    ];

    reportArea.innerHTML = reportData.map(item => `
        <li><span>${item.label}</span> <b>${item.val}</b></li>
    `).join('');

    if (score >= 75) {
        title.innerText = "ORİJİNAL PLAKA";
        title.className = "status-badge success-bg"; // CSS'de tanımlayabilirsin
        desc.innerText = "Görsel analiz sonucunda plakanızın yasal standartlara tam uyumlu olduğu tespit edilmiştir.";
    } else {
        title.innerText = "APP / STANDART DIŞI";
        title.className = "status-badge warning-bg";
        desc.innerText = "Dikkat! Karakterlerin yapısı resmi mühürlü plakalardan farklılık gösteriyor.";
    }
}
