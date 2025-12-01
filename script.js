

document.addEventListener('DOMContentLoaded', function(){

  // Formulario HTML
  var forms = document.querySelectorAll('form[novalidate]');
  Array.prototype.slice.call(forms).forEach(function(form){
    form.addEventListener('submit', function(event){
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Formulario válido — en producción enviar al backend (simulación).');
      }
      form.classList.add('was-validated');
    }, false);
  });
// Buscador de productos 
  
  var search = document.getElementById('search');
  if (search) {
    search.addEventListener('input', function(){
      var q = this.value.toLowerCase();
      var rows = document.querySelectorAll('#productosTable tbody tr');
      rows.forEach(function(r){
        r.style.display = (q === '' || r.textContent.toLowerCase().includes(q)) ? '' : 'none';
      });
    });
  }

  // botón 
  var checkBtn = document.getElementById('checkBtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', function(){
      var codigo = document.getElementById('codigo');
      var cantidad = document.getElementById('cantidad');
      var msg = document.getElementById('msg');
      msg.textContent = '';

      var ok = true;
      if (!codigo.value.trim()) { ok = false; codigo.classList.add('is-invalid'); }
      else { codigo.classList.remove('is-invalid'); codigo.classList.add('is-valid'); }

      if (!cantidad.value || Number(cantidad.value) < 0) { ok = false; cantidad.classList.add('is-invalid'); }
      else { cantidad.classList.remove('is-invalid'); cantidad.classList.add('is-valid'); }

      if (ok) {
        msg.innerHTML = '<div class="alert alert-success small mb-0">Datos válidos — listo para enviar al backend.</div>';
      } else {
        msg.innerHTML = '<div class="alert alert-danger small mb-0">Corrige los campos en rojo.</div>';
      }
    });
  }

});
