function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:


  var stringlong1 = str1.length;
  var stringlong2 = str2.length;

if (stringlong1=== stringlong2) {
  return true; 
}else {
  return false 
}

return str1.length ===str2.length ;
}
module.exports = tienenMismaLongitud;