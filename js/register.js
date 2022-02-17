$(document).ready(()=>{
    
    $('#button').click((e)=>{
        e.preventDefault();
      var firstname= $('#first-id').val();
     var lastname=$('#last-id').val();
    var email=$('#email-id').val();
     var actor="user";
     var username=$('#user-id').val();
     var password=$('#pass-id').val();
    // var confirmPass=$('#cpass-id').val();
   
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(username);
    console.log(password);

    if(firstname=="" && lastname=="" && email=="" && username=="" && password==""){
        $('#message').html('Fill all the fields')
    }

    else if(firstname=="" || lastname=="" || email=="" || username=="" || password==""){

        if(firstname==""){
            $('#fname-s').html('please fill firstname');
        }
        else if(lastname==""){
            $('#lname-s').html('please fill lastname');
        }
        else if(email==""){
            $('#email-s').html('please fill email');
        }
        else if(username==""){
            $('#uname-s').html('please fill username');
        }
        else if(password==""){
            $('#pass-s').html('please enter password');
        }
        
    }

    //sending request to server
    else{
    $.ajax({
        url:"http://localhost:3000/users",
        method:"POST",
        data:{         
                 "firstName":firstname,
                "lastName" :lastname,
                "email" :email,
                "actor" :actor,
                "username" :username,
                "password" :password
        },
        dataType: "json",
        success:(x)=>{
            alert(username+" your Registration is successful");
            console.log(x);
            window.location ="../html/register.js"
            return false;
        },
        error:(e)=>{
            alert("Error : "+e)
        }
    })
}



    })

  
       
  
})

