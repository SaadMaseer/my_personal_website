const textElement = document.querySelector('.spelling');
const text = textElement.innerText;
textElement.innerHTML = ''; // Clear the original text

text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.innerText = letter;
    textElement.appendChild(span);
});
