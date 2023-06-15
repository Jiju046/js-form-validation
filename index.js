
// upload image view
let viewFile = (event) => {
	let img = document.getElementById('image');
	img.src = URL.createObjectURL(event.target.files[0]); //creates url for uploaded image and apply to image src
}
//delete image
let closeImage=(event)=>{
    event.preventDefault()
    console.log("done");
    
    
        document.getElementById("file-input").form.reset()
    document.getElementById("image").style.display="none" //fix it    
}

//validation for inputs

function formValidate(){


    // fname
    let fnameInput= document.detailsForm.fname.value;
    console.log(fnameInput);
    if(fnameInput==""){
        document.getElementById("fname-warning").innerHTML="Please Enter your First Name"
        document.getElementById("fname").style.backgroundColor="#E3DFFD"
    }
    // lname
    let lnameInput= document.detailsForm.lname.value;
    console.log(lnameInput);
    if(lnameInput==""){
        document.getElementById("lname-warning").innerHTML="Please Enter your Last Name"
        document.getElementById("lname").style.backgroundColor="#E3DFFD"
    }

    // email
    let emailRegex= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    let emailInput=document.getElementById("email")
    let userInput=emailInput.value.match(emailRegex)


    if(userInput){
        console.log("valid email");
    }
    else{
        document.getElementById("email-warning").innerHTML="Enter a valid email"
        document.getElementById("email").style.backgroundColor="#E3DFFD"
    }

    //confirm email
    let uInput=emailInput.value
    let cnfmInput=document.getElementById("cnfmEmail").value
    if(uInput==cnfmInput){
        console.log("confirmed email");
    }
    else if(cnfmInput=="" || uInput!=cnfmInput){
        document.getElementById("cnfmEmail-warning").innerHTML="Re-enter the same mail id"
        document.getElementById("cnfmEmail").style.backgroundColor="#E3DFFD"
    }
    

    // gender radio buttons

    let gender=document.detailsForm.gender
    console.log(gender);

    
    if(gender[0].checked||gender[1].checked){
        console.log("radio done");
    }
    else{
        document.getElementById("gender-warning").innerHTML="Please Select one"
    }

    //checkbox-skills
    let skill=document.detailsForm.skill
        if(skill[0].checked||skill[1].checked||skill[2].checked||skill[3].checked){
            console.log("done skills");
        }
        else{
    document.getElementById("skills-warning").innerHTML="Select atleast one"
        }


    //select degree
    let select=document.getElementById("select")
        if(select.options[select.selectedIndex].value == ""){
            document.getElementById("degree-warning").innerHTML="Please Select one"
            
        }
        else{
            console.log("Select done");
        }

        //address
        let addressInput=document.getElementById("address")

        if(addressInput.value==""){
            document.getElementById("address-warning").innerHTML="Please enter the address"
            document.getElementById("address").style.backgroundColor="#E3DFFD"
        }

        //phone
        let phoneRegex=/^\d{10}$/

        let phone=document.getElementById("phone")

        if(phone.value.match(phoneRegex)){
            console.log("phone done");
        }
        else{
            document.getElementById("phone-warning").innerHTML="Enter a Valid mobile number"
            document.getElementById("phone").style.backgroundColor="#E3DFFD"
        }

        //file-upload
        let upload=document.getElementById("image")

        if(upload.src){
            console.log("image accepted");
        }
        else{
            document.getElementById("upload-warning").innerHTML="Please upload your profile"
        }

        //agree checkbox
        let agree=document.detailsForm.agree

        if(agree.checked){
            document.getElementById("agree-warning").innerHTML="Please agree our terms"
            console.log("agree");
        }







}




