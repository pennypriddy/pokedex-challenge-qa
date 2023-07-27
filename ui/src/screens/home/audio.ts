import { Howl } from 'howler'

export default {
  clickPress: new Howl({
    src: '/audio/clickPress.mp3',
    volume: 0.33,
  }),
  clickRelease: new Howl({
    src: '/audio/clickRelease.mp3',
    volume: 0.33,
  }),
}
