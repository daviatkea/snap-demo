const main = document.querySelector("main");

const classReg = /(?!\s)[^,()/*{}]+(?![^{]*})/g;

const styleTag = main.querySelector(".editor > style");
const _tA = main.querySelector(".editor > textarea");
let startingCSS = _tA.innerHTML;

function prefix(str) {
  return str.replaceAll(classReg, (match) => `.snappy-container ${match}`);
}

const init = () => {
  // styleTag.innerHTML = prefix(_tA.value);
  styleTag.innerHTML = _tA.value;

  _tA.addEventListener("input", (e) => {
    // styleTag.innerHTML = prefix(e.target.value);
    styleTag.innerHTML = e.target.value;
  });
};

init();
