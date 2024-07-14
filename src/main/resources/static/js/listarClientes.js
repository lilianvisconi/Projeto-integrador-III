$(document).ready(function() {
    // Carregar clientes ao carregar a página
    carregarClientes();

    // Adicionar cliente
    $('#addClientForm').submit(function(event) {
        event.preventDefault();

        let nome = $('#clientName').val();
        let email = $('#clientEmail').val();

        $.ajax({
            url: "/api/clientes",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ nome: nome, email: email }),
            success: function(response) {
                $('#clientName').val('');
                $('#clientEmail').val('');
                carregarClientes(); // Recarrega a lista de clientes após adicionar
            },
            error: function(error) {
                console.error("Erro ao adicionar cliente:", error);
                alert("Erro ao adicionar cliente. Verifique o console para mais detalhes.");
            }
        });
    });

    // Função para carregar clientes
    function carregarClientes() {
        $.ajax({
            url: "/api/clientes",
            method: "GET",
            success: function(data) {
                let tableBody = $('#cliente-table tbody');
                tableBody.empty();
                data.forEach(cliente => {
                    tableBody.append(`
                        <tr>
                            <td>${cliente.nome}</td>
                            <td>${cliente.email}</td>
                            <td>
                                <button class="editar-btn" data-id="${cliente.id}">Editar</button>
                                <button class="excluir-btn" data-id="${cliente.id}">Excluir</button>
                            </td>
                        </tr>
                    `);
                });
            },
            error: function(error) {
                console.error("Erro ao carregar os clientes:", error);
                $('#cliente-table tbody').append('<tr><td colspan="3">Erro ao carregar os clientes.</td></tr>');
            }
        });
    }

    // Exemplo de como implementar as funções de editar e excluir
    $('#cliente-table').on('click', '.editar-btn', function() {
        let clienteId = $(this).attr('data-id');
        // Implemente a lógica de edição aqui, se necessário
        alert(`Editar cliente com ID ${clienteId}`);
    });

    $('#cliente-table').on('click', '.excluir-btn', function() {
        let clienteId = $(this).attr('data-id');
        if (confirm(`Deseja realmente excluir o cliente com ID ${clienteId}?`)) {
            $.ajax({
                url: `/api/clientes/${clienteId}`,
                method: "DELETE",
                success: function(response) {
                    carregarClientes(); // Recarrega a lista de clientes após excluir
                },
                error: function(error) {
                    console.error("Erro ao excluir cliente:", error);
                    alert("Erro ao excluir cliente. Verifique o console para mais detalhes.");
                }
            });
        }
    });
});
