// Assemble obfuscated email links (see _includes/email.html).
document.addEventListener("DOMContentLoaded", function () {
  var rev = function (s) { return s.split("").reverse().join(""); };
  document.querySelectorAll(".obf-email").forEach(function (a) {
    var addr = rev(a.dataset.u) + "@" + rev(a.dataset.d);
    a.href = "mai" + "lto:" + addr;
    a.title = addr;
  });
});
