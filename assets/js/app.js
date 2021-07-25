/**
 * Created by Nirosan on 4/13/2017.
 */


 $(document).ready(function(){
    //new



    $('#contact').click(function(){



        var datas=$('#contactus').serialize();
        alert(datas);



			Email.send({
				Host: "smtp.gmail.com",
				Username : "<sender’s email address>",
				Password : "<email password>",
				To : '<recipient’s email address>',
				From : "<sender’s email address>",
				Subject : "<email subject>",
				Body : datas,
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		



    //    $.ajax({
    //         type: "POST",
    //         url: "email.php",
    //         data: datas,
    //         success: function (response) {

    //           //  alert(response);
    //            // $('#contactus').reset();
    //             $("form").trigger("reset");
    //            // $('#sucessmessage').text(response);
    //             $('#sucessmessage').html(response)

    //         },
    //         error: function(jqXHR, textStatus, errorThrown) {
    //             console.log(textStatus, errorThrown);
    //         }
    //    });
   });




    $('#quotesend').click(function(){



        var datas=$('#quote').serialize();
        //alert(datas);





        $.ajax({
            type: "POST",
            url: "quote.php",
            data: datas,
            success: function (response) {

            //  alert(response);
                // $('#contactus').reset();
             $("form").trigger("reset");
                // $('#sucessmessage').text(response);
               $('#sucessmessage').html(response)

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    });

});

