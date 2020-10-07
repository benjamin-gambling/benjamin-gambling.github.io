/// IMPORT SCRIPTS ///
import "./script/intro.js";
import "./script/navbar.js";
import "./script/projects.js";
import "./script/about.js";
import "./script/resume.js";
import "./script/blog.js";
import "./script/contact.js";

/// REQUIRE STYLES ///
// STYLES
const requireAll = (file) => {
  file.keys().forEach(file);
};

requireAll(require.context("./", true, /\.s?css$/));

window.onload = function () {
  document.getElementById("hideAll").style.display = "none";
};
