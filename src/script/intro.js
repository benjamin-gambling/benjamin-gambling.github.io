/// INTRO SECTION ///
const arrayAll = (imgs) => imgs.keys().map(imgs);

const background = arrayAll(
  require.context("../images/background/", true, /\.jpg$/)
);

const intro = document.getElementById("intro");

const imageSelect = (num) => {
  let random = Math.floor(Math.random() * background.length);
  if (num === random) return imageSelect(random);
  intro.style.backgroundImage = `url("${background[random].default}")`;
  setTimeout(() => {
    imageSelect(random);
  }, 30000);
};

imageSelect(0);
