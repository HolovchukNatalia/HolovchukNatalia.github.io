const textElement = document.getElementById('text')
const btn = document.getElementById('button')

btn.addEventListener('click', function(){
    textElement.textContent = 'New text'
})
