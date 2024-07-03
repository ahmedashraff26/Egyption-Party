
$('.inner-text').eq(1).css('display', 'none');
$('.inner-text').eq(2).css('display', 'none');
$('.inner-text').eq(3).css('display', 'none');

$('.text-title').on('click', function (e) {
    console.log(e.target);
    $(e.target).next().slideToggle(500);
    $(e.target).next().siblings('div').slideUp(500);
});

window.onload = function () {
    remainingTime();
    setInterval(remainingTime, 1000);
}

function remainingTime() {
    let kickoff = new Date("1 august 2024 8:00:00");
    kickoff = (kickoff.getTime() / 1000);
    let currentDate = new Date();
    currentDate = (currentDate.getTime() / 1000);
    let difference = kickoff - currentDate;
    let days = Math.trunc(difference / (60*60*24));
    let hours = Math.trunc(difference %(60*60*24) / (60*60));
    let minutes = Math.trunc(difference %(60*60) / (60));
    let seconds = Math.trunc(difference % 60);
    $('#days').html(`${days} D`);
    $('#hours').html(`${hours} h`);
    $('#minutes').html(`${minutes} m`);
    $('#seconds').html(`${seconds} s`);
}


$('.openNav').on('click' , function () {
    console.log('hello');
    $('#leftMenu').animate({'width' : '250px'} , 50)
    $('#home-content').animate({'margin-left' : '250px'} , 500);
})

$('.closebtn').on('click' , function () {
    $('#leftMenu').animate({'width' : '0'} , 50)
    $('#home-content').animate({'margin-left' : '0'} , 500);
})

let maxChars = 100;
$('#msgArea').on('input' , function () {
    let currentChars = $('#msgArea').val().length;
    let remainingChars = maxChars - currentChars;
    if(remainingChars <= 0){
        $('#characters').html(`Sorry! You have reached the maximum of ${maxChars} characters.`);
        $('#msgArea').val($('#msgArea').val().slice(0, maxChars));
    }
    else{
        $('#characters').html(`${remainingChars} characters remaining`);
    }
})