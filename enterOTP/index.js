var time = 99

setInterval(function () {
    time--
    if (time>=0) {
        $('.time').text(time)
    }
}, 1000);

var OTP = String(Math.floor(100000000 + Math.random() * 900000000))

function splitOTP() {
    return OTP.slice(0, 4) + ' ' + OTP.slice(4, 8 )
}

$('.OTP1').text(splitOTP())

function enterOTP() {
    $('.OTP2').text(splitOTP())
    $('.enterOTP').addClass('clicked')
    $('.tiepTuc').addClass('clickable')
}

function tiepTuc() {

}

//TODO #2 onclick event