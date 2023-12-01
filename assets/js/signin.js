"use strict";
$(document).ready(function () {
  $("#signin")
    .bootstrapValidator({
      excluded: [":disabled"],
      fields: {
          user: {
          validators: {
            notEmpty: {
              message: "Ingresa el Usuario",
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: "Ingresa la contraseña",
            },
          },
        },
      },
    })
    .on("success.form.bv", function (e) {
      e.preventDefault();
      var data = $("#signin").serialize();
      $.ajax({
        type: "POST",
        url: "procedures/signInUser.php",
        data: data,
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          switch (result[0]) {
            case "Usuario No Encontrado":
              $.notify("Usuario No Encontrado", "error");
              $("#signin").trigger("reset");
              $("#user").focus();
              break;
            case "no":
              $.notify("Usuario o Contraseña Erroneos", "error");
              $("#signin").trigger("reset");
              $("#user").focus();
              break;
            default:
                $.notify(data[0]+"Correcto", "success");
          }
        },
      });
    });
});

function writeCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + 3600000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}