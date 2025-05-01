

document.getElementById('aadhaar-verification').addEventListener('submit',function(e){
    e.preventDefault(); 
    const message = document.getElementById('adhaarMessage');
    const  aadhaarNumber =  document.getElementById('aadhaarNumber').value;
   
    const isValid = /^\d{12}$/.test(aadhaarNumber);

    if (isValid) {
        message.textContent = "Valid 12-digit Aadhaar Number!";
        message.style.color = "green";
        document.getElementById('otp-section').style.display = 'block';
        alert('OTP sent to your Aadhaar-linked mobile number');
      
    } else {
        message.textContent = "Please enter a valid 12-digit Aadhaar Number.";
        message.style.color = "red";
    }
})

   

document.getElementById('verifyOtpButton').addEventListener('click', function () {
    const otp = document.getElementById('otp').value;

    // Placeholder OTP verification logic
    if (otp === '1234') { // Assume the correct OTP is '1234' for testing
        alert('OTP verified successfully');
        
        document.getElementById('aadhaar-verification').style.display = 'none';

        document.getElementById('permRegButton').style.display = 'inline-block';
        document.getElementById('tempRegButton').style.display = 'inline-block';

        
        
    } else {
        alert('Invalid OTP');
    }
});


 // Temporary and Permanent Registration Toggle JavaScript
 document.getElementById('tempRegButton').addEventListener('click', function() {
    // document.getElementById('tempRegButton').style.display = 'none';
    document.getElementById('tempRegistrationFields').style.display = 'block';
    document.getElementById('permRegistrationFields').style.display = 'none';
});

document.getElementById('permRegButton').addEventListener('click', function() {
    // document.getElementById('permRegButton').style.display = 'none';
    document.getElementById('permRegistrationFields').style.display = 'block';
    document.getElementById('tempRegistrationFields').style.display = 'none';
});


document.getElementById('RegistrationBtn').addEventListener("click", function(){
    document.getElementById('slot-booking').style.display = 'block';
    document.getElementById('tempRegistrationFields').style.display = 'none';
    document.getElementById('permRegistrationFields').style.display = 'none';
    document.getElementById('permRegButton').style.display = 'none';
    document.getElementById('tempRegButton').style.display = 'none';

})

document.getElementById('RegistrationBtn2').addEventListener("click", function(){
    document.getElementById('slot-booking').style.display = 'block';
    document.getElementById('tempRegistrationFields').style.display = 'none';
    document.getElementById('permRegistrationFields').style.display = 'none';
    document.getElementById('permRegButton').style.display = 'none';
    document.getElementById('tempRegButton').style.display = 'none';

})


const slotBookingForm = document.getElementById('slotBookingForm');
const loginForm = document.getElementById('loginForm');
const verifyChassisForm = document.getElementById('verifyChassisForm');
const resultDiv = document.getElementById('result');


//disable back dates
function disableBackDates() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById('slotDate').setAttribute('min', today); // Set the min attribute to today's date
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', disableBackDates);

slotBookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const panCard = document.getElementById('panCard').value;
    const email = document.getElementById('email').value;
    const vehicleRegNumber = document.getElementById('vehicleRegNumber').value;
    const chassis = document.getElementById('chassis').value;
    const slotDate = document.getElementById('slotDate').value;
    const slotTime = document.getElementById('slotTime').value;



   

    


    
   

    // Validate Name

    const nameMessage = document.getElementById('message');
    if (name.length < 3 || !/^[A-Za-z]+$/.test(name)) {
        nameMessage.textContent = "Name must be at least 3 alphabetic characters.";
        nameMessage.style.color = "red";
        return; // Stop further validation
    } else {
        nameMessage.textContent = ""; // Clear message if valid
    }

    // Validate Mobile Number
    
    const numberMessage = document.getElementById('numberMessage');
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
        numberMessage.textContent = "Mobile number must be exactly 10 digits.";
        numberMessage.style.color = "red";
        return; // Stop further validation
    } else {
        numberMessage.textContent = ""; // Clear message if valid
    }

    // Validate PAN Card
    
    const panMessage = document.getElementById('panMessage');
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format validation
    if (!panRegex.test(panCard)) {
        panMessage.textContent = "PAN Card must be 10 characters in format (5 letters, 4 digits, 1 letter).";
        panMessage.style.color = "red";
        return; // Stop further validation
    } else {
        panMessage.textContent = ""; // Clear message if valid
    }

    


    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobileNumber,panCard,email,vehicleRegNumber, chassis, slotDate, slotTime }),
    });
    const data = await response.text()
    location.replace("payment.html");
        
     
                
    });
    
                    
   

                        
                    

    




          
            

    
    



      
                                    
        
        
    
        
        
        
       
    


        