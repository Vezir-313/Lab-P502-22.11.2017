$(document).ready(function () {
 
    var current= 0;
    var tracks = [
        {
            title:"title 1",
            mp3Url:"file:///C:/Users/vezir/Desktop/test/Lab_player/mp3/himm.mp3",
            imageUrl:"",
            artist: "artist"
        },

        {
            title:"title 2",
            mp3Url:"file:///C:/Users/vezir/Desktop/test/Lab_player/mp3/uzeyirhacibeyovkoroglu(uvertura).mp3",
            imageUrl:"",
            artist: "artist"
        },

        {
            title:"title 3",
            mp3Url:"file:///C:/Users/vezir/Desktop/test/Lab_player/mp3/himm.mp3",
            imageUrl:"",
            artist: "artist"
        }
    ];

 for (var index = 0; index < tracks.length; index++) {
     $("<div class='player-item'>"+
        "<h4>"+tracks[index].title+"</h4>"+
        "<p>"+tracks[index].artist+"</p>"+
     "</div>").appendTo($(".playlist"));
     
 }


 $(".play").click(function(){
     $("audio")[0].play();
 })

 $(".pause").click(function(){
    $("audio")[0].pause();
})

function play(t){
    $("audio")[0].pause();
    $("audio")[0].setAttribute("src",tracks[t].mp3Url);
    $("audio")[0].play();
}


$(".prev").click(function(){
    current--;
    if(current < 0){
        current = tracks.length -1;
    }

    play(current);
});

$(".next").click(function(){
    current++;
    // if(current > tracks.length - 1){
    //     current = 0;
    // }

    play(current);
});

play(0);

$("input[type=range]").val($("audio")[0].volume)

$("input[type=range]").change(function(){
    $("audio")[0].volume = $(this).val();
});


});