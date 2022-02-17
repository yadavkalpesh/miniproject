$(document).ready(() =>{
    $('#button').click((e)=>{
        e.preventDefault();     
        var username=$('#user-id').val();
        var password=$('#pass-id').val();
          console.log(username);
          console.log(password);
         if(username=="" && password==""){
             $('#message').html("enter both the details");
         }

         else if(username=="" || password==""){
            if(username==""){
                 $('#uname-s').html("enter username");
             }
             else if(password==""){
                 $('#pass-s').html("enter password")
             }
         }

        else{
    $.ajax({
        url:"http://localhost:3000/users",
        method:"GET",
        dataType:'json',


        success:(data)=>{
            //console.table([data]);
            $.each(data, function(index, value){
                if(value.username != "" && value.password != ""){
                    if(value.username == username && value.password==password){
                        if(value.actor=='admin'){
                            alert("Welcome admin "+value.username);
                            window.location="../html/register.html"
                            return false;
                        }
                        else if(value.actor=='user'){
                            alert("Welcome user "+value.username);
                            window.location="../html/register.html"
                            return false;
                        }
                    }
                    else{
                        if((data.length-1)===index){      
                            alert("userId or password are wrong");
    
                        }
                    }
                }
                
            })
        },
        error: (e) => {
            console.log("inside error part");
            alert("Error  invalid credentials: " + e);
        }
    }) 
 }
    })

})
