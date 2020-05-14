console.log('hello');
// second event code runs at
$(document).ready(onReady)

function onReady() {
    console.log('jQuery ready');
    $('#hello').append('Welcome to my page');
    $('#hello').css('color', 'red');
    // .on('click', function)
    $('#hello').addClass('blue')
    $('#submit').on('click', handleSubmit);

}

function handleSubmit() {
    console.log('button clicked');
    let firstName = $('firstName').val();
    console.log('firstName');
    $('#firstName') val('');

}


//1st event code runs at

// function name(params) {

// }