import { TSong } from "../services"
import { CardSong } from "./CardSong";


  
export const CurrentSong = (data: TSong) => {

    

    const current = document.createElement('div')
    current.classList.add('flex', 'justift-start', 'w-full', 'gap-6')
    current.innerHTML = `
    <img class=" m-1 w-12 h-12" src="${data.path.front}" alt="">
    
    <div class="flex justify-between pl-2 "> 
        <div>             
        <p class="text-sm text-black truncate dark:text-black"> Song: ${data.title}</p>
        <p class="text-sm font-medium text-black truncate dark:text-black"> Artits: ${data.author}</p>
        <p class="text-sm text-black truncate dark:text-black"> Albums: ${data.album}</p>
        </div>
        <div class="pl-10 ml-5">
            <audio src="${data.path.audio}" controls autoplay>   </audio>
        </div>           
    </div> 
  
  
  `;
  const contenedor = document.getElementById('current');


  if (contenedor) {
    while (contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild)

    }
    contenedor.appendChild(current)


  }

}
    