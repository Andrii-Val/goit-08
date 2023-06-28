import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);




const saveCurrentTime =throttle(() =>{
    player.getCurrentTime().then(currentTime =>{
        localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime))

    } );
}, 1000)
player.on('timeupdate', saveCurrentTime);

function restorePlaybackTime() {
    const currentTime = localStorage.getItem('videoplayer-current-time');

    player.setCurrentTime(currentTime|| 0)
}
restorePlaybackTime();