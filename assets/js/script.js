const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
    const height = parseFloat(document.getElementById('height').value.replace(',', '.'));

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    const descriptionElement = document.getElementById('description');

    value.textContent = bmi.replace('.', ',');
    descriptionElement.textContent = '';

    value.classList.add('attention');
    value.classList.remove('normal');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        descriptionElement.textContent = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        descriptionElement.textContent = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        descriptionElement.textContent = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        descriptionElement.textContent = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40) {
        descriptionElement.textContent = "Cuidado! Você está com obesidade severa!";
    } else {
        descriptionElement.textContent = "Cuidado! Você está com obesidade mórbida!";
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate').click();
    }
});
