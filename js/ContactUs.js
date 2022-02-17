$(document).ready(()=>{
    
    $('#button').click((e)=>{
        e.preventDefault();
     var name= $('#name-id').val();
     var email=$('#email-id').val();
     var actor="user";
     var text=$('#text-id').val();
     
    console.log(name);
    console.log(email);
    console.log(text);
    

    if(name=="" && email=="" && text==""){
        $('#message').html('Fill details to contact us')
    }

    else if(name=="" || email=="" || text==""){

        if(name==""){
            $('#name-s').html('please enter Name');
        }
       
        else if(email==""){
            $('#email-s').html('please enter email');
        }
        else if(text==""){
            $('#text-s').html('please enter text');
        }
        
        
    }

    //sending request to server
    else{
    $.ajax({
        url:"http://localhost:3000/contactUs",
        method:"POST",
        data:{         
                 "name":name,                
                "email" :email,
                "actor" :actor,
                "text" :text
                
        },
        dataType: "json",
        success:(x)=>{
            alert(name+" your form is submitted successfully");
            console.log(x);
            location.href ="https://www.google.com"
            return false;
        },
        error:(e)=>{
            alert("Error : "+e)
        }
    })
}



    })

  
       
  
})

