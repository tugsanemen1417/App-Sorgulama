const worker = Tesseract.createWorker();

function acceptRules() {
    document.getElementById('disclaimer-modal').style.display = 'none';
}

async function handleFiles(files) {
    const file = files[0];
    if (!file) return;

    document.getElementById('upload-area').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    // OCR Başlatma
    await (await worker).load();
    await (await worker).loadLanguage('tur');
    await (await worker).initialize('tur');
    
    const { data: { text } } = await (await worker).recognize(file);
    const cleanedPlate = text.replace(/[^A-Z0-9]/g, '');
    document.getElementById('plate-text').innerText = cleanedPlate || "OKUNAMADI";

    // Fiziksel Analiz Simülasyonu (Kurallar)
    setTimeout(() => {
        showResult();
    }, 2500);
}

function showResult() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result-card').classList.remove('hidden');

    const score = Math.floor(Math.random() * 100); // Gerçek AI burada devreye girer
    document.getElementById('percent').innerText = `%${score}`;

    const title = document.getElementById('verdict-title');
    const desc = document.getElementById('verdict-desc');
    const circle = document.getElementById('score-circle');

    if (score > 80) {
        title.innerText = "ORİJİNAL PLAKA";
        title.style.color = "#22c55e";
        circle.style.borderColor = "#22c55e";
        desc.innerText = "Font kalınlığı ve karakter yapısı yasal standartlara uygun görünüyor.";
    } else if (score > 40) {
        title.innerText = "ŞÜPHELİ / APP";
        title.style.color = "#f59e0b";
        circle.style.borderColor = "#f59e0b";
        desc.innerText = "Karakterler normalden kalın veya köşeli tespit edildi. APP plaka olabilir.";
    } else {
        title.innerText = "SAHTE / STANDART DIŞI";
        title.style.color = "#ef4444";
        circle.style.borderColor = "#ef4444";
        desc.innerText = "Kritik kural ihlali: Font yapısı tamamen standart dışı. Muayeneden geçemez.";
    }
}
