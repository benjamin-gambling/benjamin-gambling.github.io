/// INTRO SECTION ///
const arrayAll = (imgs) => imgs.keys().map(imgs);

const background = arrayAll(
  require.context("../images/background/", true, /\.jpe?g$/)
);

require.context("../images/background/", false, /\.(jpe?g | png)$/);

const intro = document.getElementById("intro");

let pictureNum = 0;
const imageSelect = () => {
  intro.style.backgroundImage = `url("${background[pictureNum].default}")`;
  pictureNum === background.length - 1 ? (pictureNum = 0) : (pictureNum += 1);
  setTimeout(() => {
    imageSelect(pictureNum);
  }, 30000);
};

imageSelect();
