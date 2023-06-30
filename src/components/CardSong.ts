import { TSong } from "../services"

type TCardSong = {
  data: TSong,
  eventPlay: () => void,
  eventLike: () => void
}

export const CardSong = ({
  data,
  eventLike,
  eventPlay
}: TCardSong) => {
    
  const song = document.createElement('div')
  song.classList.add('flex-row','mx-0','border-b[1px]','border-black','w-2','p-2' )
  song.innerHTML = `
  <ul role="list" class="divide-y divide-white dark:divide-white">
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
              <img class="w-12 h-12 rounded-20" src="/public/unnamed.jpg" alt="Neil image">
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm text-black truncate dark:text-black">
              Song:
            </p>
            <p class="text-sm font-medium text-black truncate dark:text-black">
                  Artist: Taylor Swift
            </p>
            <p class="text-sm text-black truncate dark:text-black">
                  Album: Desconocido
            </p>
          </div>
          
          <div class="grid-rows-2 items-center flex justify-between gap-2  p-2 ">
              <img src="/public/corazon_blanco.svg" alt="add Favorites">
              <img class="" src="/public/agregar (1).svg" alt="add playlist">
          </div>
      </div>
  </li>
</ul>
  `;

  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList.add('flex','justify-between','py-2')

  const buttonPlay = document.createElement('button');
  buttonPlay.classList.add('text-sm','ring-1','ring-white','py-1','px-6','rounded-full')
  buttonPlay.innerHTML = 'Play'
  buttonPlay.addEventListener('click', eventPlay)

  const buttonLike = document.createElement('button');
  buttonLike.classList.add('py-1','px-6','rounded-full','bg-gradient-to-tl','to-pink','from-blue','font-bold')
  buttonLike.innerHTML = 'Like'
  buttonLike.addEventListener('click', eventLike)


  buttonsContainer.appendChild(buttonPlay)
  buttonsContainer.appendChild(buttonLike)

  song.appendChild(buttonsContainer)
  return song

}