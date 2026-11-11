/* © 2026 Yousef Serrag. ApplySteward™.
   Anonymous visit counting, using Umami (umami.is). No cookies.
   It counts page visits and a few button presses by name, for example "setup-finished".
   Nothing a visitor types, and nothing about their jobs, is ever sent.
   Leave ID empty to switch counting off completely. */
(function(){
  var ID = "";                                   // the website ID from the Umami dashboard
  var SRC = "https://cloud.umami.is/script.js";  // the script address Umami gives for this site
  var HOST = "applysteward.com";                 // only count on the live site

  // Pages call asCount("name"). It does nothing unless counting is switched on and loaded.
  window.asCount = function(name){ try{ if(window.umami) window.umami.track(String(name)); }catch(e){} };

  if(!ID || location.hostname !== HOST) return;
  var s = document.createElement("script");
  s.defer = true; s.src = SRC;
  s.setAttribute("data-website-id", ID);
  s.setAttribute("data-domains", HOST);
  s.setAttribute("data-exclude-search", "true");  // never send anything after ? in the address
  s.setAttribute("data-exclude-hash", "true");    // or after #
  s.setAttribute("data-do-not-track", "true");    // respect the browser's Do Not Track setting
  document.head.appendChild(s);
})();
