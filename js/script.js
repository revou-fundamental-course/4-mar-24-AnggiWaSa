function calculateBMI() {
    // Ambil nilai berat, tinggi, dan jenis kelamin dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;

    // Periksa apakah input valid
    if (isNaN(weight) || isNaN(height) || (!genderMale && !genderFemale)) {
        alert("Mohon lengkapi semua field.");
        return;
    }

    // Hitung BMI
    const bmi = weight / Math.pow(height / 100, 2);
    const result = document.getElementById('output-bmi');
    result.textContent = bmi.toFixed(2);

    // Tentukan kategori BMI dan tampilkan informasi yang sesuai
    const tag = document.getElementById('output-tag');
    const category = document.getElementById('output-category');
    const description = document.getElementById('output-description');
    const diseases = document.getElementById('output-diseases');
    if (bmi < 18.5) {
        tag.textContent = 'Kekurangan berat badan';
        category.textContent = 'Kurang dari 18.5';
        description.textContent = 'Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk menaikkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan melibatkanm diri dalam kegiatan fisik yang dapat membantu membangun massa otot. Jika BMI Anda berada dalam kategori ini, Anda diajurkan untuk meningkatkan berat badan Anda hingga mencapai batas normal.';
        diseases.innerHTML = 'Anoreksia nervosa, Osteoporosis, Gangguan pada sistem reproduksi, Kekurangan energi dan kelelahan kronis';
    } else if (bmi < 25) {
        tag.textContent = 'Normal (ideal)';
        category.textContent = 'Hasil BMI diantara 18.5 dan 25';
        description.textContent = 'Berat badan Anda berada dalam kategori normal. Ini menandakan bahwa Anda memiliki berat badan yang sehat dan proporsional. Menjaga berat badan normal penting untuk kesehatan yang optimal. Tetap menjaga pola makan yang seimbang dan rutin berolahraga akan membantu Anda mempertahankan berat badan ideal serta meningkatkan kesehatan secara keseluruhan.';
        diseases.textContent = 'Tidak ada penyakit yang secara khusus terkait dengan berat badan normal.';
    } else if (bmi < 30) {
        tag.textContent = 'Kelebihan berat badan';
        category.textContent = 'Hasil BMI diantara 23 dan 25';
        description.textContent = 'Anda berada dalam kategori overweight berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikomsusi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda diajurkan untuk menurunkan berat badan hingga batas normal.';
        diseases.innerHTML = 'Diabetes tipe 2, Hipertensi (tekanan darah tinggi), Penyakit jantung koroner, Kolesterol tinggi';
    } else {
        tag.textContent = 'Kegemukan (obesitas)';
        category.textContent = 'Hasil BMI lebih dari 30';
        description.textContent = 'Anda berada dalam kategori Kegemukan dengan berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini,';
        diseases.innerHTML = 'Sleep apnea (gangguan tidur), Artritis, Stroke, Kanker (beberapa jenis)';
    }
}

function resetForm() {
    // Mengatur kembali nilai input dan output menjadi kosong
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('output-bmi').textContent = '';
    document.getElementById('output-tag').textContent = '';
    document.getElementById('output-category').textContent = '';
    document.getElementById('output-description').textContent = '';
    document.getElementById('output-diseases').textContent = '';
}

function downloadBMI() {
    // Fungsi untuk mengunduh hasil BMI
    alert("Mengunduh hasil BMI...");
}
