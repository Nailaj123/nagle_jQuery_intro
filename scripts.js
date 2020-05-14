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
    $('#wrapper').on('click', '.extraBtn', handleClick);

    // $('.extraBtn).on('click', handleSubmit)


}

function handleClick() {
    console.log('button clicked');


}

function handleSubmit() {
    console.log('button clicked');
    let firstName = $('firstName').val();
    console.log('firstName');
    $('#firstName').val('');

    // $('#wrapper').append('' < button class= "extraBtn" > clickMe < /button>')

    }



    //1st event code runs at

    // function name(params) {

    // }