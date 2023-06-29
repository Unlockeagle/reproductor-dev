import './style.css'
import { toggLeClass } from './index'

// // window.open(url)
document.getElementById('burger-button')
    ?.addEventListener('click', () => {
        toggLeClass(document.getElementById("navbar"), 'show-navbar')
    })
