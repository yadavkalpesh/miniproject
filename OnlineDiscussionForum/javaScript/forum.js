


$(document).ready(() => {

    $('#b1').click((e) => {
        e.preventDefault();
        var name = $('#name').val();
        var editor= $('#editor').val();


        console.log(name);
        console.log(editor);



        // if(name==""&&email==""&&text==""){​​​​​​​​​
        // $('#message').html('Fill details to contact us')
        //  }​​​​​​​​​

        // elseif(name==""|| editor=="" ) {​​​​​​​​​

        // if(name==""){​​​​​​​​​
        // $('#name-s').html('please enter Title Name');
        //  }​​​​​​​​​

        // elseif(email=="") {​​​​​​​​​
        // $('#editor-s').html('please enter  Text');
        //  }​​​​​​​​​



        //sending request to server
        {
            $.ajax({
                url: "http://localhost:3000/contactUs",
                method: "POST",
                data: {
                    "name": name,
                    "editor": editor,


                },
                dataType: "json",
                success: (x) => {
                    alert(name + " your form is submitted successfully");
                    console.log(x);
                    location.href = "https://www.google.com"
                    return false;
                },
                error: (e) => {
                    alert("Error : " + e)
                }
            })
        }



    })




})

