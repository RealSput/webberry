let show = (name) => document.querySelector('iframe').contentWindow.windows[name].show();

function fadeOverlayToBlack() {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
}

document.querySelector('.temperature').onclick = () => {
  show('temperature');
};

document.querySelector('.terminal').onclick = () => {
  show('terminal');
};

document.querySelector('.viewer').onclick = () => {
  show('viewer');
}

document.querySelector('.shutdown').onclick = async () => {
	if (confirm('Are you sure that you would like to shut down?')) {
		fadeOverlayToBlack();
		await fetch('/shutdown');
	}
}
