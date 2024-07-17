$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const agendamentoId = urlParams.get('id');

    if (agendamentoId) {
        // Carregar dados do agendamento para edição
        $.ajax({
            url: `/api/agendamentos/${agendamentoId}`,
            method: "GET",
            success: function(data) {
                $('#cliente').val(data.cliente.nome);
                $('#dataHora').val(data.dataHora);
                $('#tipo').val(data.tipo);
            },
            error: function(error) {
                console.error("Erro ao carregar agendamento:", error);
                alert("Erro ao carregar agendamento. Verifique o console para mais detalhes.");
            }
        });
    }

    // Salvar agendamento (criar ou atualizar)
    $('#agendamento-form').submit(function(event) {
        event.preventDefault();

        let agendamento = {
            dataHora: $('#dataHora').val(),
            tipo: $('#tipo').val()
        };

        let ajaxConfig = {
            method: agendamentoId ? "PATCH" : "POST",
            url: agendamentoId ? `/api/agendamentos/${agendamentoId}` : "/api/agendamentos",
            data: JSON.stringify(agendamento),
            contentType: "application/json",
            success: function(response) {
                window.location.href = "/listarAgendamentos";
            },
            error: function(error) {
                console.error("Erro ao salvar agendamento:", error);
                alert("Erro ao salvar agendamento. Verifique o console para mais detalhes.");
            }
        };

        $.ajax(ajaxConfig);
    });

    // Cancelar e voltar para a lista de agendamentos
    $('#cancel-btn').click(function() {
        window.location.href = "/listarAgendamentos";
    });
});
