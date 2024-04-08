// Array to store referral links
let referralLinks = [];

// Function to update the current referral link
function updateCurrentReferral() {
    const currentReferralElement = document.getElementById('currentReferral');
    if (referralLinks.length > 0) {
        const nextReferral = referralLinks.shift();
        currentReferralElement.textContent = nextReferral;
    } else {
        currentReferralElement.textContent = 'No referral link available';
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const referralLinkInput = document.getElementById('referralLink');
    const referralLink = referralLinkInput.value.trim();
    if (referralLink !== '' && !referralLinks.includes(referralLink)) {
        referralLinks.push(referralLink);
        referralLinkInput.value = '';
        updateCurrentReferral();
        $('#addLinkModal').modal('hide');
    }
}

// Function to handle "Get Link" button click
function handleGetLinkClick() {
    if (referralLinks.length > 0) {
        updateCurrentReferral();
    }
}

// Add event listeners
const referralForm = document.getElementById('referralForm');
referralForm.addEventListener('submit', handleFormSubmit);

const getLinkBtn = document.getElementById('getLinkBtn');
getLinkBtn.addEventListener('click', handleGetLinkClick);

// Call updateCurrentReferral initially
updateCurrentReferral();
