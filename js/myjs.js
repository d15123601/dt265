// code sourced from https://www.sitepoint.com/javascript-media-queries/

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(max-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    document.getElementById("top_header").innerHTML = "g_d_s";
  } else {
    document.getElementById("top_header").innerHTML = "geo_data_science";
  }

}
