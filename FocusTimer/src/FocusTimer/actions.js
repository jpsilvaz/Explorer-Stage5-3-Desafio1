import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunnning = document.documentElement.classList.toggle('running');
  timer.countdown();

  sounds.buttonPressAudio.play()
};

export function set() {
  el.minutes.setAttribute('contentEditable', true);
  el.minutes.focus();
};

export function reset() {
  state.isRunnning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();

  sounds.buttonPressAudio.play()
};

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on');

  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  };

  sounds.bgAudio.pause()
};