const inputs = document.querySelectorAll('.controls input');

function handleChanges() {
  const suff = this.dataset.sizing || '';
  console.log(suff);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suff);
  console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleChanges));
inputs.forEach(input => input.addEventListener('mousemove', handleChanges));

