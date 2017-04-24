
(function() {
  var label = document.getElementById("label");
  var secret =  document.getElementById("secret");
  var image = document.getElementById("qr");
  var url = document.getElementById("url");
  
  function update() {
    image.src = `/totp/${label.value}/${secret.value}`;
    url.innerHTML = `otpauth://totp/${encodeURIComponent(label.value)}?secret=${encodeURIComponent(secret.value)}`;
  }
  
  label.onkeypress = update;
  label.onkeyup = update;
  secret.onkeypress = update;
  secret.onkeyup = update;
})();