/*
Create a class called Helper and then instantiate that class as a variable called helper.
Add a method to the Helper class called playPauseAndUpdate that takes one parameter, song. 
The method should call player.playPause (passing the song parameter)
and update the total time. Replace every call of player.playPause with helper.playPauseAndUpdate.
*/

class Helper {

    playPauseAndUpdate(song) {
        console.log('hello');
        player.playPause(song);
        const duration = player.getDuration();       
        $('#time-control .total-time').text(duration);
    }
}

const helper = new Helper();