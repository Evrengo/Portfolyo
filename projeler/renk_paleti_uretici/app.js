const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  palette.innerHTML = '';
  for(let i=0; i<5; i++) {
    const color = randomColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;

    const colorCode = document.createElement('div');
    colorCode.classList.add('color-code');
    colorCode.textContent = color;

    colorBox.appendChild(colorCode);

    colorBox.addEventListener('click', () => {
      navigator.clipboard.writeText(color).then(() => {
        alert(`${color} kopyalandı!`);
      });
    });

    palette.appendChild(colorBox);
  }
}

generateBtn.addEventListener('click', generatePalette);

generatePalette();