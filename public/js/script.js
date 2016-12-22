
function countActivationCode(element){
  var chars = element.value.split('');
  element.value = chars.filter(function(input){
    return input.match(/[0-9]/);
  }).join('');

  var length = 6 - element.value.length;
  $('.remaining-characters').html(length);

  if(!parseInt(length)){
    element.setAttribute('DISABLED',true);
    $('.loading-container').removeClass('hidden');
    $('.remaining-characters').addClass('hidden');

    setTimeout(function(){
      showActivationCodeError();
      setTimeout(function(){
        showActivationCodeSuccess();
      },2000);
    },2000);
  }
}

function showActivationCodeError(){
  var element = $('.activation-code-input input');
  element[0].removeAttribute('DISABLED');

  $('.default-success').addClass('hidden');
  $('.activation-error').removeClass('hidden');
}

function showActivationCodeSuccess(){
  $('.activation-code-input').addClass('hidden');
  $('.default-success').removeClass('hidden');
}
