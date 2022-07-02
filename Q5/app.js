const API_URL = 'https://62b21703c7e53744afc76e45.mockapi.io/info/employees';

$(document).ready(function(){
    $("#btn").click(function () { 
        const table = $('table tbody');
        $.ajax({
            url: API_URL,
            type: "GET",
            success: function(employees) {
                table.append(`<tr><th>id</th><th>firstName</th><th>lastName</th><th>phoneNumber</th><th>email</th><th>address</th><th>job</th><th>avator</th></tr>`)
                $.each(employees, function (index , employee) {     
                    table.append(
                        `<tr><td>${employee.id}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.phoneNumber}</td><td>${employee.email}</td><td>${employee.address}</td><td>${employee.job}</td><td><img height='50px' width='50px' class='rounded-circle' src=${employee.avatar}/></td></tr>`
                    );
                });
            }
      });   
    });
});

