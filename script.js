document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('confirmar').addEventListener('click', function() {
    const numeroIngresado = document.getElementById('numeroInput').value;
    document.getElementById('resultado').innerHTML = `Numero ingresado: ${numeroIngresado}`;
    document.getElementById('modal').style.display = 'none';
});
