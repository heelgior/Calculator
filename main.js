const inputANode = document.querySelector('.number_a');
const inputBNode = document.querySelector('.number_b');
const selectOperation = document.querySelector('.js-operation');
const ResultNode = document.querySelector('.result');
const Output = document.querySelector('.output');

ResultNode.addEventListener('click', function(){
    const a = Number(inputANode.value);
    const b = Number(inputANode.value);
    const operation = selectOperation.value;

    const result = calculator({
        a,
        b,
        operation
    });
    Output.innerHTML = result;
})


