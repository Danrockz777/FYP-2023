
function validateForm(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var idNumber=document.getElementById("idNumber").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;

    var startTime=document.getElementById("startTime").value;
    var endTime=document.getElementById("endTime").value;
    var  chosenDate=document.getElementById("chosenDate").value;
    var  facility=document.getElementById("facility").value;
    /* var chosenDate=document.getElementById("chosenDate").value;
    var facility=document.getElementById("facility").value; */ 
 
    if(name==""){
        alert('Name is Required');
        return false;
    }
    if(age==""){
        alert('Age is Required');
        return false;
    }else if(age<1){
        alert('Age must not be zero or less than zero');
        return false;
    }

    if(idNumber==""){
        alert('Student ID is Required');
        return false;
    }
    
    if(email==""){
        alert('Email is Required');
        return false;
    }else if(!email.includes("@"))
    {
        alert("Invalid Email Address");
        return false;    
    }

    
   var phoneValidate= "[0-9]{3}-[0-9]{8}";
   if(phone==""){
       alert('Phone Number is Required !')
       return false;
   }else{
       if(!phone.match(phoneValidate)){
       alert('Phone Format Wrong!');
       return false;}
   } 

   if(startTime==""){
    alert("Start Time is Required");
    return false;
}
if(endTime==""){
    alert("End Time is Required");
    return false;
}
if(chosenDate==""){
    alert("Date is Required");
    return false;
}
 
if(facility==""){
    alert("Choose a Facility to Book");
    return false;
}


    
    return true;
}

//function to show data
function showData(){
    var studentList;
    if(localStorage.getItem("studentList")==null){
        studentList=[];
    }
    else{
        studentList=JSON.parse(localStorage.getItem("studentList"))
    }

    var html="";

    studentList.forEach(function(element,index){
    html+="<tr>";
    html+="<td>" +element.name+"</td>";
    html+="<td>" +element.age+"</td>";
    html+="<td>" +element.idNumber+"</td>";
    html+="<td>" +element.email+"</td>";
    html+="<td>" +element.phone+"</td>";
    html+="<td>" +element.startTime+"</td>";
    html+="<td>" +element.endTime+"</td>";
    html+="<td>" +element.chosenDate+"</td>";
    html+="<td>" +element.facility+"</td>";
    html+=
        '<td><button onclick="deleteData('+
        index + 
        ')" class="btn btn-danger">Delete</button></td>';
    html+="</tr>";    
});

    document.querySelector("#crudTable tbody").innerHTML=html;

}

//load all data when docuemnt or page load
document.onload=showData();

 function AddData(){

    if(validateForm()==true){
        var name=document.getElementById("name").value;
        var age=document.getElementById("age").value;
        var idNumber=document.getElementById("idNumber").value;
        var email=document.getElementById("email").value;
        var phone=document.getElementById("phone").value;
        var startTime=document.getElementById("startTime").value;
        var endTime=document.getElementById("endTime").value;
        var chosenDate=document.getElementById("chosenDate").value;
        var facility=document.getElementById("facility").value;

        var studentList;
        if(localStorage.getItem("studentList")==null){
            studentList=[];
        }
        else{
            studentList=JSON.parse(localStorage.getItem("studentList"))
        }

        studentList.push({
            name:name,
            age:age,
            idNumber:idNumber,
            email:email,
            phone:phone,
            startTime:startTime,
            endTime:endTime,
            chosenDate:chosenDate,
            facility:facility

        });

        localStorage.setItem("studentList",JSON.stringify(studentList));
        showData();
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("idNumber").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("startTime").value="";
        document.getElementById("endTime").value="";
        document.getElementById("chosenDate").value="";
        document.getElementById("facility").value="";
        
    }

}
 
function deleteData(index){
    var studentList;
    
    if(localStorage.getItem("studentList")==null){
        studentList=[];
    }
    else{
        studentList=JSON.parse(localStorage.getItem("studentList"))
    }

    studentList.splice(index,1);
    localStorage.setItem("studentList",JSON.stringify(studentList));
    showData();
}

/* 
function updateData(index){
    //submit button will hide and update button will show for updatinğ of data in local storage
    document.getElementById("Submit").style.display="none";
    document.getElementById("Update").style.display="block";

    var studentList;
    if(localStorage.getItem("studentList")==null){
        studentList=[];
    }
    else{
        studentList=JSON.parse(localStorage.getItem("studentList"))
    }

    document.getElementById("name").value=studentList[index].name;
    document.getElementById("age").value=studentList[index].age;
    document.getElementById("idNumber").value=studentList[index].idNumber;
    document.getElementById("email").value=studentList[index].email;
    document.getElementById("phone").value=studentList[index].phone;
    document.getElementById("startTime").value=studentList[index].startTime;
    document.getElementById("endTime").value=studentList[index].endTime;
    document.getElementById("chosenDate").value=studentList[index].chosenDate;
    document.getElementById("facility").value=studentList[index].facility;

    document.querySelector('#Update').onclick=function(){
        if(validateForm()==true){
            studentList[index].name=document.getElementById("name").value;
            studentList[index].age=document.getElementById("age").value;
            studentList[index].idNumber=document.getElementById("idNumber").value;
            studentList[index].email=document.getElementById("email").value;
            studentList[index].phone=document.getElementById("phone").value;
            studentList[index].startTime=document.getElementById("startTime").value;
            studentList[index].endTime=document.getElementById("endTime").value;
            studentList[index].chosenDate=document.getElementById("chosenDate").value;
            studentList[index].facility=document.getElementById("facility").value;

            localStorage.setItem("studentList",JSON.stringify(studentList));
            showData();

            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("idNumber").value="";
            document.getElementById("email").value="";
            document.getElementById("phone").value="";
            document.getElementById("startTime").value="";
            document.getElementById("endTime").value="";
            document.getElementById("chosenDate").value="";
            document.getElementById("facility").value="";

            //update button will hide and submit button will show for updatinğ of data in local storage
            document.getElementById("Submit").style.display="block";
            document.getElementById("Update").style.display="none";
        }
    }
}


function Approve() {

    //showData();
    /* studentList[index].email=document.getElementById("email").value;
    email2=studentList[index].email; */
   
      //
     //
     /* studentList=JSON.parse(localStorage.getItem("studentList"));
     studentList.pull({
        name:name,
        age:age,
        idNumber:idNumber,
        email:email,
        phone:phone,
        startTime:startTime,
        endTime:endTime,
        chosenDate:chosenDate,
        facility:facility

    }); */
   /* 
     Swal.fire(
        'Approve Booking!',
        'Booking to be Approved!',
        'success'
    );

     setTimeout(()=>{
        window.location.href = "mailto:@gmail.com?subject=Sports Facility Booking Approved&body=Please proceed to your Booking on the selected date and time. Thank you.";
        },3000)
        
      
      /* Email.send({
        SecureToken : "",
        To : '<whom you want to send>',
        From : "<Your email id registered on gmail>",
        Subject: "Testing Email using javascript",
        Body: "If you are reading this, dont forget to applaud"
        })
        .then(function (message) {
        alert("Email successfully sent")
        }); */
 /*     
}

function Reject() {

    showData();
       //
      //
         Swal.fire(
           'Reject Booking!',
           'Booking to be Rejected!',
           'warning'
       );
            
    
       setTimeout(()=>{
        window.location.href = "mailto:@gmail.com?subject=Sports Facility Booking Rejected&body=Please choose another date and time. Thank you.";
        },3000)
    
    } */  