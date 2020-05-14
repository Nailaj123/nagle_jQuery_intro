console.log('hello');
// second event code runs at
$(document).ready(onReady)

function onReady() {
    console.log('jQuery ready');
    $('#hello').append('Welcome to my page');
    // $('#hello').css('color', 'red');
    // .on('click', function)
    $('#hello').addClass('blue')
    $('#submit').on('click', handleSubmit);
    $('#wrapper').on('click', '.extraBtn', handleClick);

    // $('.extraBtn).on('click', handleSubmit)


}

function handleClick() {
    console.log('button clicked');
    // $(this).addClass('blue');
    $(this).toggleClass('blue');
    // $(this).remove();
    // $(this).parent().addClass('blue');


}

function handleSubmit() {
    console.log('button clicked');
    let firstName = $('firstName').val();
    console.log('firstName');
    $('#firstName').val('yay!');

    $('#wrapper').append( < button class = "extraBtn" > click Me < /button>')

    }



    //1st event code runs at

    // function name(params) {

    // }