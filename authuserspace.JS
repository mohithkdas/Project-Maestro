(function(){
var r=("false" === "false"), a=("false" === "false"), h=[], e=("false" === "true");
var p="${SCOPE_NAME}";
var s=("SCOPE_VALID" === "SCOPE_INVALID"), n=("SCOPE_VALID" === "SCOPE_NOT_AUTHORIZED"), d=("SCOPE_VALID" === "SCOPE_DISABLED");

if(e){
	throw new Error("An error occurred.");
}
else if (!a) {  
  throw new Error("API Key is invalid");
}
else if (s) {
  throw new Error("Scope parameter is invalid: " + p);
}
else if (n) {
  throw new Error("Scope parameter is not authorized: " + p);
}
else if (d) {
  throw new Error("Scope parameter is disabled: " + p);
}
else if (h.length == 0) {
  throw new Error("You must specify a valid JavaScript API Domain as part of this key's configuration.");
}
else if (!r) {
  throw new Error("JavaScript API Domain is restricted to "+h.join(", "));
}

else {
  throw new Error("Unknown Error");
}
})();
