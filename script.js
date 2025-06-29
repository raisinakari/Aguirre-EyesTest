let currentLine = 0;
let score = 0;

const lines = document.querySelectorAll('.chart .line');
const result = document.getElementById('result');
const input = document.getElementById('userInput');
const scoreDisplay = document.getElementById('score');

function checkAnswer() {
    if (currentLine >= lines.length) {
        result.textContent = `🎉 Test complete! Your final score: ${score}/${lines.length}`;
        return;
    }

    const correctAnswer = lines[currentLine].dataset.answer.toUpperCase().replace(/\s/g, '');
    const userAnswer = input.value.toUpperCase().replace(/\s/g, '');

    if (userAnswer === correctAnswer) {
        score++;
        result.textContent = "✅ Correct! Proceeding to the next line.";
    } else {
        result.textContent = "❌ Incorrect. Try again or consult an eye specialist.";
    }

    input.value = '';
    currentLine++;
    scoreDisplay.textContent = `Score: ${score}`;
    highlightCurrentLine();
}

function highlightCurrentLine() {
    lines.forEach((line, index) => {
        line.style.color = index === currentLine ? '#6a0dad' : '#333';
    });
}

highlightCurrentLine();