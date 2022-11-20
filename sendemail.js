function sendMail(){
    var params = {
        name : document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        phone: document.getElementById("phone").value ,
        message: document.getElementById("message").value ,

    };

    const serviceID = "service_t20u21f";
const templateID = "template_w8tjjab";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Votre demande a été envoyée avec succès");
    }
)
.catch(err=>console.log(err));

}

