$(document).ready(function () {

var minNumber = 1; // le minimum
var maxNumber = 99; // le maximum
var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
$('h1').css('color', 'red');
$('#error').css('color', 'red');
$('#newGame').hide();
$('#proposition, #button').hide();
console.log(randomnumber);

var clickValue=0;
function compteur(){
    clickValue = clickValue+1;
}
$('#play').click(function play() {
    $('#proposition, #button').show();
    $('#play').hide();
});

$('#button').click(function justPrice() {
    compteur();
    var proposition = document.getElementById('proposition').value;
    if (proposition != '' && proposition >= 0 && proposition <= 100) {
        if (proposition > randomnumber) {
            $("#player").attr('src', 'assets/wav/cest_moins.wav');
            $("#player")[0].play();
            $('#result').html('C\'est moins que ' + proposition + ' !');
        }
        else if (proposition < randomnumber) {
            $("#player").attr('src', 'assets/wav/cest_plus.wav');
            $("#player")[0].play();
            $('#result').html('C\'est plus que ' + proposition + ' !');
        }
        else if (proposition == randomnumber) {
            $("#player").attr('src', 'assets/wav/bien_joue.wav');
            $("#player")[0].play();
            $('h1').css('color', 'green');
            $('#result').html('C\'était effectivement ' + randomnumber + ', bien joué !');
            $('#essais').html('Vous avez fait ' + clickValue + ' essai(s)');
            $('#proposition, #button').hide();
            $('#newGame').show();
        }
    }
    else if (proposition == '') {
        $('#result').html('Veuillez entrer une valeur');
    }
    else {
        $("#player").attr('src', 'assets/wav/tabuses.wav');
        $("#player")[0].play();
        $('#result').html('On a dit entre 0 et 100 !');
    }
}
);
});
// var valueClick = nombre de fois qu'il a cliqué
// if (input > getNumber) : alert('moins')
// if (input < getNumber) : alert('plus')
// if (input == getNumber) : alert('bien ouej' + '/n' + 'Nombre d'essais : ' + valueClick)