import { CardSong } from './components/CardSong'
import { TSong, getData } from './services'
import './style.css'

const track_list = document.getElementById('track_list')

getData(data => {
  data.map((song: TSong) => {
    track_list?.appendChild(CardSong({
      data: song,
      eventPlay: () => CurrentSong(song),
      eventLike: () => console.log('Like'),
    }))

  })
})



import { toggLeClass } from './services/index'
import { CurrentSong } from './components/CurrentSong'

// // window.open(url)
document.getElementById('burger-button')
    ?.addEventListener('click', () => {
        toggLeClass(document.getElementById("navbar"))
    })
