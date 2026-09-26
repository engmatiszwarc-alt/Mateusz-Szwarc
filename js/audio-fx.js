/**
 * Procedural Audio FX for Game Developer Portfolio
 * Uses Web Audio API - zero external assets or MP3 dependencies.
 * Default is muted; users can toggle SFX in the navigation bar.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("game_portfolio_sfx") === "true" ? false : true;
    this.masterGain = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.muted ? 0 : 0.15;
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.ensureContext();
    this.muted = !this.muted;
    localStorage.setItem("game_portfolio_sfx", (!this.muted).toString());
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 0.15, this.ctx.currentTime);
    }
    if (!this.muted) {
      this.playChirp(600, 900, 0.08, "sine");
    }
    return !this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playTone(freq, duration = 0.05, type = "sine", gainVal = 0.2) {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  playChirp(startFreq, endFreq, duration = 0.06, type = "sine") {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  hover() {
    this.playTone(880, 0.025, "triangle", 0.08);
  }

  click() {
    this.playChirp(440, 780, 0.04, "square");
  }

  filterSwitch() {
    this.playChirp(520, 1040, 0.07, "sine");
  }

  modalOpen() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      // Sci-fi power-up chord
      const now = this.ctx.currentTime;
      [330, 440, 660].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);
        gain.gain.setValueAtTime(0.12, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.03 + 0.25);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + idx * 0.03);
        osc.stop(now + idx * 0.03 + 0.25);
      });
    } catch (e) {}
  }

  modalClose() {
    this.playChirp(660, 220, 0.09, "sine");
  }
}

export const sfx = new SoundController();
