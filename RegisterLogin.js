const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {

    e.preventDefault();
    validateInputs();

    //location.replace("Login.html");
    }
//validate email
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateInputs(){

    const fnameValue = document.getElementById("fname").value;
    const lnameValue = document.getElementById("lname").value;
    const emailValue = document.getElementById("email").value;
    const passValue = document.getElementById("pass").value;
    const cpassValue = document.getElementById("cpass").value;

        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if(fnameValue === '') {
            swal.fire(
                'Input field not filled',
                'Please enter firstname field',
                'error'
            );
        }

        if(lnameValue === '') {
            swal.fire(
                'Input field not filled',
                'Please enter lastname field',
                'error'
            );
        }



        if(emailValue === '') {
            swal.fire(
                'Input field not filled',
                'Please enter email field',
                'error'
            );
        }else if(!isValidEmail(emailValue)){
            swal.fire(
                'Input Invalid',
                'Please enter a valid email address',
                'error'
            );
        }

        
        if(passValue === '') {
            swal.fire(
                'Input field not filled',
                'Please enter Password field',
                'error'
            );
        }else if(!passValue.match(upperCaseLetters)){
            alert('Passwords Must Have Upper Case');
        }else if(!passValue.match(lowerCaseLetters)){
            alert('Password Must Have Lower case');
        }else if(!passValue.match(numbers)){
            alert('password Must Have Numbers from 0 to 9');
        }
        else{
            alert('Correct Password Format');
        }

        if(cpassValue === '') {
            swal.fire(
                'Input field not filled',
                'Please enter Confirm Password field',
                'error'
            );
        }else if(cpassValue!==passValue){
            alert('Passwords Dont Match ');
        }else{
           if(fnameValue!=""&& lnameValue!="" && emailValue!=""){
            Swal.fire(
                'Good job!',
                'Registered Successfully!',
                'success'
            );
            setTimeout(()=>{
                    location.href='Login.html';
                    },2000)
           }else{
            alert('Please Proceed to Complete All Fields');
           }
        
        
            
        }
         

        localStorage.setItem('FirstName', fnameValue);
        localStorage.setItem('LastName', lnameValue);
        localStorage.setItem('Email', emailValue);
        localStorage.setItem('Password', passValue);
        localStorage.setItem('Cpassword', cpassValue);

       
    }


//Login Function

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // catch the value which is the user login
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");
/* 

    

    if(emailAddress=="Admin123@gmail.com" && passWord=="Admin123"){
         
        location.replace("Admin.html");
        }
 */
    if( emailAddress == "" && passWord == ""){
        Swal.fire(
            'Missing Entries!',
            'Fields Have No Input Value!',
            'error'
        );
    }
  
    else
    {
        if(emailAddress == Email && passWord == Password){
              
            Swal.fire(
                'Good job!',
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                location.href='Disclaimer.html';
                },3000)

            
        }else
        {   
            if(emailAddress=="Admin123@gmail.com" && passWord=="Admin123"){
                
                location.href="Admin.html";
                    
                    
            }
            
            else{

            Swal.fire(
                'Incorrect Credentials!',
                'Username and Password dont match records!',
                'error'
            );}

            
        }
    };


};


