let user;
if (localStorage.getItem('userInfo')) {
  user = JSON.parse(localStorage.getItem('userInfo'));
} else {
  user = {
    name: '',
    lastName: '',
    email: '',
    age: '',
    description: ''
  }
}

$(document).ready(function () {
  if (localStorage.getItem('userInfo')) {    
    $("#user_name").val(user.name);
    $("#user_last_name").val(user.lastName);
    $("#user_email").val(user.email);
    $("#user_age").val(user.age);
    $("#user_desc").val(user.description);
  }

  $("#user_name").focusout(function () {
    user.name = $(this).val();
    saveLocal();
  });

  $("#user_last_name").focusout(function () {
    user.lastName = $(this).val();
    saveLocal();
  });

  $("#user_email").focusout(function () {
    user.email = $(this).val();
    saveLocal();
  });

  $("#user_age").focusout(function () {
    user.age = $(this).val();
    saveLocal();
  });

  $("#user_desc").focusout(function () {
    user.description = $(this).val();
    saveLocal();
  });

  $("#submitForm").click(function () {
    $('.alert-success').removeClass('d-none');

    removeLocal();

    setTimeout(function() {
      $('.alert-success').addClass('d-none');
    }, 5000);
  });

});

function saveLocal() {
  localStorage.setItem('userInfo', JSON.stringify(user));
}

function removeLocal() {
  localStorage.removeItem('userInfo');
  $("#user_name").val('');
  $("#user_last_name").val('');
  $("#user_email").val('');
  $("#user_age").val('');
  $("#user_desc").val('');
}
