const container = document.getElementById('codeContainer');
const inputs = document.querySelectorAll('.code-inputs input');
const SP = document.getElementById('StoryP');
const code = 'abc123';

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.toUpperCase().replace(/[^a-z0-9]/gi, '');
        e.target.value = value.slice(0, 1);
        
        // Move to next input
        if (e.target.value && index < 5) inputs[index + 1].focus();
        
        //check the full code
        if (index === 5) checkCode();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0){inputs[index - 1].focus();
        }
    });
});

function checkCode(){
    const userCode = Array.from(inputs).map(input => input.value.toLowerCase()).join('');
    if (userCode === code.toLowerCase()) {
        container.style.display = 'none';
        SP.style.display = 'block';
    }
}

// Auto focus the first input
inputs[0].focus();
