let player;

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);
  const minutes = Math.floor(roundTime/60);
  const seconds = roundTime - minutes * 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
}

  $('.play-btn').on('click', e => {
    e.preventDefault();
    const btn = $(e.currentTarget)

    if (btn.hasClass('pause')){
      player.playVideo();
      btn.removeClass('pause');
    }
    else{
      player.pauseVideo();
      btn.addClass('pause');
    }
    console.log('Video is starting');
  })

  $('.volume-icon').on('click', e =>{
    e.preventDefault();
    const muteBtn = $(e.currentTarget);
    console.log('Click on mute button');
     if (muteBtn.hasClass('mute')){
       player.unMute();
       muteBtn.removeClass('mute');
     }
     else{
       player.mute();
       muteBtn.addClass('mute');
     }
  })

   const onPlayerReady = (e) => {
     let interval;
     let durationSec = player.getDuration();

     


     let getVolume = player.getVolume();

      console.log('Текущая громкость = ' + getVolume);
      


     if (typeof interval !== 'undefined'){
       clearInterval(interval);
     }

      const range =  $('.video-duration');
      console.log(range.value);

     interval = setInterval(()=>{
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec)*100;
     },1000)

   }


function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
         'onReady': onPlayerReady,
       //   'onStateChange': onPlayerStateChange
        },
        playerVars:{
          controls:0,
          disablekb: 0,
          showinfo:0,
          rel:0,
          autoplay:0,
          modestbranding:0
        }
      });
}