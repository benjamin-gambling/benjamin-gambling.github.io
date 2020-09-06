/// IMPORT SCRIPTS ///
import "./script/intro.js";
import "./script/navbar.js";

/// REQUIRE STYLES ///
// STYLES
const requireAll = (file) => {
  file.keys().forEach(file);
};

requireAll(require.context("./", true, /\.s?css$/));

window.onload = function () {
  document.getElementById("hideAll").style.display = "none";
};
