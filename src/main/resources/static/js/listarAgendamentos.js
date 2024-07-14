$(document).ready(function() {
    $.ajax({
        url: "/api/agendamentos",
        method: "GET",
        success: function(data) {
            let tableBody = $('#agendamento-table-body');
            tableBody.empty();
            data.forEach(agendamento => {
                // Formatando a dataHora
                let dataHoraFormatted = formatarDataHora(agendamento.dataHora);

                tableBody.append(`
                    <tr>
                        <td>${agendamento.cliente}</td>
                        <td>${dataHoraFormatted}</td>
                        <td>${agendamento.tipo}</td>
                    </tr>
                `);
            });
        },
        error: function(error) {
            console.error("Erro ao carregar os agendamentos:", error);
            $('#agendamento-table-body').append('<tr><td colspan="3">Erro ao carregar os agendamentos.</td></tr>');
        }
    });
});

// Função para formatar dataHora no formato dd/MM/yyyy hh:mm
function formatarDataHora(dataHora) {
    let dateObj = new Date(dataHora);
    let dia = dateObj.getDate();
    let mes = dateObj.getMonth() + 1; // Mês começa do zero
    let ano = dateObj.getFullYear();
    let horas = dateObj.getHours();
    let minutos = dateObj.getMinutes();

    // Adicionando zeros à esquerda se necessário
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}
