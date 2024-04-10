import cloudVideo from '../assets/cloudVideo.mp4';

/* const videoUrl = require('../assets'); */

const pageBody = document.querySelector('body');

export default function displayBgVid() {
  const videoElem = document.createElement('video');
  pageBody.append(videoElem);
  videoElem.setAttribute('autoplay', '');
  videoElem.setAttribute('muted', '');
  videoElem.setAttribute('loop', '');
  videoElem.setAttribute('muted', '');
  videoElem.classList.add('video-wrapper');
  const videoSrcElem = document.createElement('source');
  videoElem.appendChild(videoSrcElem);
  videoSrcElem.setAttribute('src', cloudVideo);
  videoSrcElem.setAttribute('type', 'video/mp4');
}
