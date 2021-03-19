$(function () {
  $("#submitForm").on("click", callFunction);
});
let showErrorMessage1 = true;
function callFunction(e) {
  let errorMessage = "";

  let pass = $("#password").val();
  let confirm_pass = $("#confirm_password").val();
  if (
    $("#name").val().length >= 5 &&
    pass.length >= 8 &&
    pass === confirm_pass &&
    $("#email").val().length >= 10
  ) {
    handleFormSubmit();
  } else {
    if (pass.length < 8) {
      errorMessage += "Pass Must be atleast 8 characters long<br />";
      $("#password").css("border", "3px solid red");
      if (confirm_pass.length < 8) {
        $("#confirm_password").css("border", "3px solid red");
      }
    }
    if (pass !== confirm_pass) {
      errorMessage += "Passwords must be same!<br />";
      $("#password").css("border", "3px solid red");
      $("#confirm_password").css("border", "3px solid red");
    }
    if ($("#name").val().length < 5) {
      errorMessage += "Name must be atleast 5 characters<br />";
      $("#name").css("border", "3px solid red");
    }
    if ($("#email").val().length < 10) {
      errorMessage += "Email must be atleast 10 characters<br />";
      $("#email").css("border", "3px solid red");
    }
    showErrorMessage(errorMessage);
    e.preventDefault();
  }
}
function handleFormSubmit(e) {
  alert("Form is being submitted");
}
function showErrorMessage(errorMessage) {
  if (showErrorMessage1 === true) {
    $("#error").append(errorMessage);
    showErrorMessage1 = false;
  }
}
