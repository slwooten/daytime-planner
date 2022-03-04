$("#currentDay").text(moment().format('dddd, MMMM Do'));

var saveBtn = $('button');

var timeBlock = $('textarea');
var currentTime = moment().format('LT');

timeBlock.addClass('past');

saveBtn.on('click', saveClicked);

var textAreas = [
    $('#ta9'),
    $('#ta10'),
    $('#ta11'),
    $('#ta12'),
    $('#ta1'),
    $('#ta2'),
    $('#ta3'),
    $('#ta4'),
    $('#ta5'),
];


// function saveClicked () {
//     for (var i = 0; i < textAreas.length; i++) {
//         console.log('button clicked', $(this).attr('name'));
//         console.log(textAreas[i]);
//     }
// }



function saveClicked () {
    var buttonNum = $(this).attr('name');
    var textNum = $(this).parent().find('textarea').val();

        console.log('button clicked', buttonNum);
        console.log('Heres what we typed ->', textNum);

        localStorage.setItem(buttonNum, textNum);
        localStorage.getItem(buttonNum, textNum);
}

// function loadStorage () {
//     JSON.parse(localStorage.getItem($(this).attr('name'),
//     $(this).parent().find('textarea').val()));
// }

// loadStorage();
