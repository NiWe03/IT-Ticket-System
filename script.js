
const ticketForm = document.getElementById('ticketForm');
        const confirmationMessage = document.getElementById('confirmationMessage');

        ticketForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(ticketForm);
            const emailContent = `Name: ${formData.get('name')}\nGerät: ${formData.get('device')}\nProblem: ${formData.get('problem')}`;
            //hier code zum Email versenden einfügen
            confirmationMessage.textContent = 'Ihre E-Mail wurde versendet. Wir kümmern uns zeitnah um Ihr Ticket.';
        });