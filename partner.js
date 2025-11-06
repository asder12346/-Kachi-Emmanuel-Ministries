// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Donation amount selection
document.querySelectorAll('.amount-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options in the same container
        this.parentElement.querySelectorAll('.amount-option').forEach(opt => {
            opt.classList.remove('active');
        });
        
        // Add active class to clicked option
        this.classList.add('active');
        
        // Update the amount in the payment form
        const amount = this.getAttribute('data-amount');
        document.getElementById('amount').value = amount;
        updateDonationSummary();
    });
});

// Custom amount input
document.querySelectorAll('.custom-amount input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value) {
            // Remove active class from all amount options in the same container
            this.closest('.donation-option').querySelectorAll('.amount-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Update the amount in the payment form
            document.getElementById('amount').value = this.value;
            updateDonationSummary();
        }
    });
});

// Payment method selection
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function() {
        // Remove active class from all payment methods in the same container
        this.parentElement.querySelectorAll('.payment-method').forEach(method => {
            method.classList.remove('active');
        });
        
        // Add active class to clicked method
        this.classList.add('active');
        
        // Update the payment method in the form
        const methodValue = this.getAttribute('data-method');
        document.getElementById('payment-method').value = methodValue;
    });
});

// Update donation summary
document.getElementById('amount').addEventListener('input', updateDonationSummary);
document.getElementById('custom-amount').addEventListener('input', updateDonationSummary);

function updateDonationSummary() {
    const amount = document.getElementById('amount').value;
    const customAmount = document.getElementById('custom-amount').value;
    const totalAmount = amount || customAmount;
    document.getElementById('donation-summary').textContent = `Total Donation: $${totalAmount}`;
}