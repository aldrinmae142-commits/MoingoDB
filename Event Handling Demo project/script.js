// Access DOM elements
const textInput = document.getElementById('textInput');
const clickButton = document.getElementById('clickButton');
const demoForm = document.getElementById('demoForm');
const output = document.getElementById('output');
const hoverDiv = document.getElementById('hoverDiv');
const keyOutput = document.getElementById('keyOutput');

// Implement click event
clickButton.addEventListener('click', function() {
    output.textContent = 'Button clicked!';
});

// Implement input and change events
textInput.addEventListener('input', function() {
    output.textContent = 'Input value: ' + textInput.value;
});

textInput.addEventListener('change', function() {
    output.textContent = 'Changed to: ' + textInput.value;
});

// Implement submit event
demoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    output.textContent = 'Form submitted with value: ' + textInput.value;
});

// Implement keyup event
textInput.addEventListener('keyup', function(event) {
    keyOutput.textContent = 'Last key pressed: ' + event.key;
});

// Implement mouseover and mouseout events
hoverDiv.addEventListener('mouseover', function() {
    output.textContent = 'Mouse over the div!';
});

hoverDiv.addEventListener('mouseout', function() {
    output.textContent = 'Mouse left the div!';
});

// Implement focus and blur events
textInput.addEventListener('focus', function() {
    textInput.style.borderColor = '#28a745';
    textInput.style.boxShadow = '0 0 5px rgba(40, 167, 69, 0.5)';
});

textInput.addEventListener('blur', function() {
    textInput.style.borderColor = '#ccc';
    textInput.style.boxShadow = 'none';
});