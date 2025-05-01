document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("payment-form");

    // Create a function to display error messages
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.color = "red";
    }

    // Clear error messages
    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = "";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Gather input values
        const cardName = document.getElementById("card-name");
        const cardNumber = document.getElementById("card-number");
        const expiryDate = document.getElementById("expiry-date");
        const cvv = document.getElementById("cvv");

        // Clear previous error messages
        clearError(cardName);
        clearError(cardNumber);
        clearError(expiryDate);
        clearError(cvv);

        // Validation for Cardholder Name (text only)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(cardName.value.trim())) {
            showError(cardName, "Please enter a valid cardholder name (letters only).");
            return;
        }

        // Validation for Card Number (16 digit number)
        const cardNumberRegex = /^\d{16}$/;
        if (!cardNumberRegex.test(cardNumber.value.trim())) {
            showError(cardNumber, "Please enter a valid card number (16 digits).");
            return;
        }

        // Validation for Expiry Date (MM/YY format)
        // const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        // if (!expiryDateRegex.test(expiryDate.value.trim())) {
        //     showError(expiryDate, "Please enter a valid expiry date (MM/YY).");
        //     return;
        // }

        // Validation for CVV (3 digits)
        const cvvRegex = /^\d{3}$/;
        if (!cvvRegex.test(cvv.value.trim())) {
            showError(cvv, "Please enter a valid CVV (3 digits).");
            return;
        }

        // Simulate a successful payment process
        alert(`Payment successful!\n\nCardholder: ${cardName.value}\nCard Number: ${cardNumber.value}\nExpiry Date: ${expiryDate.value}`);
        
        // Optionally, reset the form
        
        document.getElementById('bookingConfirmation').style.display = 'block';
        document.getElementById('bookingDetails').innerText = `Slot booked for ${cardName.value} `;
      
        clearError(cardName);
        clearError(cardNumber);
        clearError(expiryDate);
        clearError(cvv);
    });
});
















   