/* scripts.js */

$(document).ready(function () {
    // Validação de login
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            window.location.href = 'home.html';
        }
    });

    // Validação de agendamento
    $('#agendamentoForm').on('submit', function (event) {
        event.preventDefault();
        const date = $('#date').val();
        const time = $('#time').val();
        const type = $('#type').val();
        if (date === '' || time === '' || type === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Agendamento realizado com sucesso!');
        }
    });

    // Adição de cliente
    $('#addClientForm').on('submit', function (event) {
        event.preventDefault();
        const clientName = $('#clientName').val();
        const clientEmail = $('#clientEmail').val();
        if (clientName === '' || clientEmail === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Cliente adicionado com sucesso!');
        }
    });

    // Geração de relatório financeiro
    $('#generateReportForm').on('submit', function (event) {
        event.preventDefault();
        const period = $('#period').val();
        if (period === '') {
            alert('Por favor, selecione um período.');
        } else {
            alert('Relatório gerado com sucesso!');
        }
    });
});
