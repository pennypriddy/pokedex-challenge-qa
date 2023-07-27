import { Howl } from 'howler'

export default {
  buttonPress: new Howl({
    src: '/audio/buttonPress.mp3',
  }),
  buttonRelease: new Howl({
    src: '/audio/buttonRelease.mp3',
  }),
  startup(onend: () => void) {
    return new Howl({
      src: '/audio/startup.mp3',
      volume: 0.33,
      onend,
    })
  },
  shutdown(onend: () => void) {
    return new Howl({
      src: '/audio/shutdown.mp3',
      volume: 0.33,
      onend,
    })
  },
  link: new Howl({
    src: '/audio/buttonPress.mp3',
  }),
}
