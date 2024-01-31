document.addEventListener('DOMContentLoaded', function () {
    // Initialize the tables with any existing leads and clients (if applicable)
    // You can fetch data from GitHub or a backend here
});

function addLead() {
    // Retrieve values from the lead form
    const nameInput = document.getElementById('nameInput').value;
    const mobileInput = document.getElementById('mobileInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const statusSelect = document.getElementById('statusSelect');
    const status = statusSelect.options[statusSelect.selectedIndex].value;
    const commentsInput = document.getElementById('commentsInput').value;

    // Check if mandatory fields are filled
    if (nameInput.trim() === '' || mobileInput.trim() === '' || emailInput.trim() === '') {
        alert('Name, Mobile, and Email are mandatory fields. Please fill them before adding a lead.');
        return;
    }

    // Create a new lead object
    const lead = {
        name: nameInput,
        mobile: mobileInput,
        email: emailInput,
        status: status,
        comments: commentsInput
    };

    // Append the new lead to the table
    appendLeadToTable(lead);

    // Clear the lead form fields
    document.getElementById('nameInput').value = '';
    document.getElementById('mobileInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('statusSelect').value = 'pending';
    document.getElementById('commentsInput').value = '';

    // Optional: You can save the lead to GitHub or a backend here
}

function appendLeadToTable(lead) {
    const leadsTableBody = document.getElementById('leadsTableBody');
    const row = leadsTableBody.insertRow();

    // Add cells with lead information
    Object.values(lead).forEach((value, index) => {
        const cell = row.insertCell();
        cell.textContent = value;

        // For the "Status" column, add an additional class for styling
        if (index === Object.values(lead).length - 2) {
            cell.classList.add('status-cell');
            const statusSelect = document.createElement('select');
            statusSelect.innerHTML = '<option value="pending">Pending</option>' +
                '<option value="contacted">Contacted</option>' +
                '<option value="interested">Interested</option>' +
                '<option value="closed">Closed</option>';
            statusSelect.value = value;
            statusSelect.addEventListener('change', function () {
                updateLeadStatus(row, statusSelect.value);
            });
            cell.innerHTML = '';
            cell.appendChild(statusSelect);
        }
    });
}

function updateLeadStatus(row, newStatus) {
    const statusCell = row.cells[row.cells.length - 2];
    statusCell.textContent = newStatus;
}

function addClient() {
    // Retrieve values from the client form
    const clientNameInput = document.getElementById('clientNameInput').value;
    const clientMobileInput = document.getElementById('clientMobileInput').value;
    const clientEmailInput = document.getElementById('clientEmailInput').value;
    const clientAddressInput = document.getElementById('clientAddressInput').value;
    const clientStartDateInput = document.getElementById('clientStartDateInput').value;
    const clientEndDateInput = document.getElementById('clientEndDateInput').value;
    const clientCoordinatorNameInput = document.getElementById('clientCoordinatorNameInput').value;
    const clientCoordinatorMobileInput = document.getElementById('clientCoordinatorMobileInput').value;
    const clientTypeSelect = document.getElementById('clientTypeSelect');
    const clientType = clientTypeSelect.options[clientTypeSelect.selectedIndex].value;

    // Check if mandatory fields are filled
    if (clientNameInput.trim() === '' || clientMobileInput.trim() === '' || clientEmailInput.trim() === '' || clientAddressInput.trim() === '' || clientStartDateInput.trim() === '' || clientEndDateInput.trim() === '' || clientCoordinatorNameInput.trim() === '' || clientCoordinatorMobileInput.trim() === '') {
        alert('All fields are mandatory. Please fill them before adding a client.');
        return;
    }

    // Create a new client object
    const client = {
        name: clientNameInput,
        mobile: clientMobileInput,
        email: clientEmailInput,
        address: clientAddressInput,
        startDate: clientStartDateInput,
        endDate: clientEndDateInput,
        coordinatorName: clientCoordinatorNameInput,
        coordinatorMobile: clientCoordinatorMobileInput,
        type: clientType
    };

    // Append the new client to the clients table
    appendClientToTable(client);

    // Clear the client form fields
    document.getElementById('clientNameInput').value = '';
    document.getElementById('clientMobileInput').value = '';
    document.getElementById('clientEmailInput').value = '';
    document.getElementById('clientAddressInput').value = '';
    document.getElementById('clientStartDateInput').value = '';
    document.getElementById('clientEndDateInput').value = '';
    document.getElementById('clientCoordinatorNameInput').value = '';
    document.getElementById('clientCoordinatorMobileInput').value = '';
    document.getElementById('clientTypeSelect').value = 'SIL';
}

function appendClientToTable(client) {
    const clientsTableBody = document.getElementById('clientsTableBody');
    const row = clientsTableBody.insertRow();

    // Add cells with client information
    Object.values(client).forEach((value, index) => {
        const cell = row.insertCell();
        cell.textContent = value;

        // For the "Type" column, add an additional class for styling
        if (index === Object.values(client).length - 1) {
            cell.classList.add('type-cell');
        }
    });
}
// Add these event listeners to the existing JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the logo container position
    const logoContainer = document.querySelector('.logo-container');
    const containerRect = document.querySelector('.section-container').getBoundingClientRect();
    const logoSize = 70; // Adjusted size to match the CSS
    const maxX = containerRect.width - logoSize;
    const maxY = containerRect.height - logoSize;

    logoContainer.addEventListener('mouseenter', function () {
        // Move the logo to a random position within the container
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        logoContainer.style.left = `${randomX}px`;
        logoContainer.style.top = `${randomY}px`;
    });

    logoContainer.addEventListener('mouseleave', function () {
        // Reset the logo to its original position when the mouse leaves
        logoContainer.style.left = '10px'; // Adjust this value based on your layout
        logoContainer.style.top = '10px'; // Adjust this value based on your layout
    });
});


