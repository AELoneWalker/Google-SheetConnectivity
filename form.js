var scriptURL ="https://script.google.com/macros/s/AKfycbwVfjm_ZO4mZBGxxX6Ol5CpOoIKubLggDrKHxmO34cObMjCBQKHPU44WHzwek47e5hF/exec"

var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST',body: new FormData(form)})
    .then(response => document.getElementById('form-alert').innerHTML="Data has been stored")
    .catch(error => document.getElementById('form-alert').innerHTML="Data was not stored")
})