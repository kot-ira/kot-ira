var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

function showThisDialog() {
  document.getElementById('this-dialog').showModal();
}

function hideThisDialog() {
  document.getElementById('this-dialog').close();
}