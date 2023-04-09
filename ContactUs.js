function sendMail() {

      Name= document.getElementById("name").value;
      email= document.getElementById("email").value;
      message= document.getElementById("message").value; 
     // my_file= document.getElementById("my_file").value; 

      if(Name=="" || email=="" || message==""){
        alert("Can't send empty fields !");
        window.location.reload();
        
      }

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      //my_file: document.getElementById("my_file").value
    };
  
    const serviceID = "service_8evxm0x";
    const templateID = "template_nqwqjes";

    

      //emailjs.sendForm('serviceID', 'templateID', this);
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
         //document.getElementById("my_file").value = "";
          //document.getElementById("myFile").value = "";
          console.log(res);
          Swal.fire(
            'Great Job!',
            'Your message sent Successfully!',
            'success'
        );
  
      })
      .catch(err=>console.log(err));
  
  }



 