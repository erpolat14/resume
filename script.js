function showLang(lang) {
  document.getElementById("kk").style.display = "none";
  document.getElementById("uz").style.display = "none";
  document.getElementById("ru").style.display = "none";
  document.getElementById("en").style.display = "none";
  document.getElementById("tr").style.display = "none";

  document.getElementById(lang).style.display = "block";
}