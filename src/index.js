/// IMPORT SCRIPTS ///
import "./script/intro.js";
import "./script/navbar.js";

/// REQUIRE STYLES ///
// STYLES
const requireAll = (file) => {
  file.keys().forEach(file);
};

requireAll(require.context("./", true, /\.s?css$/));

import profilePic from "./images/profile-pic.jpg";
import logo from "./images/logo.png";
import logotxt from "./images/logo-text.png";
