"use strict";
$(document).ready(function () {
  $("#signin")
    .bootstrapValidator({
      excluded: [":disabled"],
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "El email es requerido",
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
            case "Usuario o Miembro No Encontrado":
              $.notify("Usuario No Encontrado", "error");
              $("#signin").trigger("reset");
              break;
            case "no":
              $.notify("email o Contraseña Erroneos", "error");
              $("#signin").trigger("reset");
              break;
            default:
                $.notify("Correcto", "success");
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