$(document).ready(function() {
    // Carregar agendamentos ao carregar a página
    carregarAgendamentos();

    // Redirecionar para a página de adicionar agendamento
    $('#add-agendamento-btn').click(function() {
        window.location.href = '/gerenciarAgendamento';
    });

    // Função para carregar agendamentos
    function carregarAgendamentos() {
        $.ajax({
            url: "/api/agendamentos",
            method: "GET",
            success: function(data) {
                atualizarTabelaAgendamentos(data);
            },
            error: function(error) {
                console.error("Erro ao carregar os agendamentos:", error);
                $('#agendamento-table-body').append('<tr><td colspan="4">Erro ao carregar os agendamentos.</td></tr>');
            }
        });
    }

    // Função para atualizar a tabela de agendamentos
    function atualizarTabelaAgendamentos(agendamentos) {
        let tableBody = $('#agendamento-table-body');
        tableBody.empty();
        agendamentos.forEach(agendamento => {
            // Formatando a dataHora
            let dataHoraFormatted = formatarDataHora(agendamento.dataHora);

            tableBody.append(`
                <tr>
                    <td>${agendamento.cliente.nome}</td>
                    <td>${dataHoraFormatted}</td>
                    <td>${agendamento.tipo}</td>
                    <td>
                        <button class="editar-btn" data-id="${agendamento.id}">Editar</button>
                        <button class="excluir-btn" data-id="${agendamento.id}">Excluir</button>
                    </td>
                </tr>
            `);
        });
    }

    // Função para excluir agendamento
    $('#agendamento-table').on('click', '.excluir-btn', function() {
        let agendamentoId = $(this).attr('data-id');
        if (confirm(`Deseja realmente excluir o agendamento com ID ${agendamentoId}?`)) {
            $.ajax({
                url: `/api/agendamentos/${agendamentoId}`,
                method: "DELETE",
                success: function(response) {
                    carregarAgendamentos(); // Recarrega a lista de agendamentos após excluir
                },
                error: function(error) {
                    console.error("Erro ao excluir agendamento:", error);
                    alert("Erro ao excluir agendamento. Verifique o console para mais detalhes.");
                }
            });
        }
    });

    // Redirecionar para a página de editar agendamento
    $('#agendamento-table').on('click', '.editar-btn', function() {
        let agendamentoId = $(this).attr('data-id');
        window.location.href = `/gerenciarAgendamento?id=${agendamentoId}`;
    });

    // Pesquisar agendamento por nome do cliente
    $('#search-btn').click(function() {
        let nome = $('#searchName').val();
        $.ajax({
            url: `/api/agendamentos?nome=${nome}`,
            method: "GET",
            success: function(data) {
                atualizarTabelaAgendamentos(data);
            },
            error: function(error) {
                console.error("Erro ao pesquisar agendamentos:", error);
                $('#agendamento-table-body').append('<tr><td colspan="4">Erro ao pesquisar agendamentos.</td></tr>');
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
});
