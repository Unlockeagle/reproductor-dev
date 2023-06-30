import { TSong } from "../services"

export type TCardSong = {
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
  song.classList.add('flex-row','mx-0','border-b[1px]','border-black','p-2',)
  song.innerHTML = `
  <div class="flex w-full">
    <ul role="list" class="divide-y divide-white dark:divide-white ">
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="w-[100px] h-[100px] rounded-20" src="${data.path.front}" alt="Neil image">
            </div>
            <div class="flex-1 w-20 ">
              <p class="text-sm text-black truncate dark:text-black font-bold">${data.title}</p>
              <p class="text-sm font-medium text-black truncate dark:text-black">${data.author}</p>
              <p class="text-sm text-black truncate dark:text-black">${data.album}</p>
              <p class="text-sm text-black truncate dark:text-black">${data.duration}</p>
            </div>
            
            
        </div>
      </li>
    </ul>
</div>
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