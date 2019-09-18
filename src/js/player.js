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
     let inputValue = $('#volume').val()

    updateProgress();

    clearInterval(time_update_interval);

  var time_update_interval = setInterval(function () {
        updateProgress();
    }, 100)


     $('#volume').val(player.getVolume())

     $('#volume').on('change',()=>{
      player.setVolume($('#volume').val());
      console.log('Значение инпута = ' + inputValue);
      console.log('Текущая громкость = ' + getVolume);
    })

    console.log('Значение инпута = ' + inputValue);

    console.log('Текущая громкость = ' + getVolume);




    $('#duration').on('mouseup touchend', function (e) {

      let newTime = player.getDuration() * (e.target.value / 100);
  
      player.seekTo(newTime);
  
  });


     if (typeof interval !== 'undefined'){
       clearInterval(interval);
     }

      const range =  $('.duration');
      console.log(range.value);


   }

   const updateProgress = () =>{
    $('#duration').val((player.getCurrentTime() / player.getDuration()) * 100);
  }
    

function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'zoHAfkRPQ5w',
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
