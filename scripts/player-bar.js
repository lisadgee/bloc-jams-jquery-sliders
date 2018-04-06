{
    $('button#play-pause').on('click', function () {
        //player.playPause();
        helper.playPauseAndUpdate();
        $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function () {
        if (player.playState !== 'playing') { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }
        const nextSong = album.songs[nextSongIndex];
        //player.playPause(nextSong);
        helper.playPauseAndUpdate(nextSong);
    });

    $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);

    });

    /*
    You've already written an event handler for the time control input. Now, write an event handler
    for #volume-control input that calls player.setVolume() on input and passes it event.target.value.
    */
    $('#volume-control input').on('input', function (event) {
        player.setVolume(event.target.value);

    });

    setInterval(() => {
        if (player.playState !== 'playing') { return; }
        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime / duration) * 100;
        //console.log(percent);
        $('#time-control .current-time').text(currentTime);
        $('#time-control input').val(percent);
    }, 1000);



    $('button#previous').on('click', function () {
        if (player.playState !== 'playing') { return; }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex < 0) { return; }
        const previousSong = album.songs[previousSongIndex];
        //player.playPause(previousSong);
        helper.playPauseAndUpdate(previousSong);
        //console.log('hello');
    });

}

