let show = (name) => document.querySelector('iframe').contentWindow.windows[name].show();

document.querySelector('.temperature').onclick = () => {
  show('temperature');
};

document.querySelector('.terminal').onclick = () => {
  show('terminal');
};

document.querySelector('.viewer').onclick = () => {
  show('viewer');
}
