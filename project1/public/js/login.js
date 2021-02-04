
            function functionemail(){

           
            var a=document.getElementById("email").value;
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


           if( a==="")
           {
               text="your email is not entered";
           }
           else if(a.match(mailformat))
           { 
               text="Valid email address";

           }
           else{
               text="Invalid email address";
           }
           alert(text);
           var b=document.getElementById("pass").value;
           var len=b.length;
            if(b==="")
            {
                text="your password is not entered";
            }
            else if((len>8)&&(len<12))
            {
                text="Password is strong";

            }
            else{
                text="Password is weak";
            }
         alert(text);
        }
        
        