$(document).ready(function() {
    // Carregar clientes ao carregar a página
    carregarClientes();

    // Redirecionar para a página de adicionar cliente
    $('#add-client-btn').click(function() {
        window.location.href = '/gerenciarCliente';
    });

    // Função para carregar clientes
    function carregarClientes() {
        $.ajax({
            url: "/api/clientes",
            method: "GET",
            success: function(data) {
                atualizarTabelaClientes(data);
            },
            error: function(error) {
                console.error("Erro ao carregar os clientes:", error);
                $('#cliente-table tbody').append('<tr><td colspan="5">Erro ao carregar os clientes.</td></tr>');
            }
        });
    }

    // Função para atualizar a tabela de clientes
    function atualizarTabelaClientes(clientes) {
        let tableBody = $('#cliente-table tbody');
        tableBody.empty();
        clientes.forEach(cliente => {
            tableBody.append(`
                <tr>
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.email}</td>
                    <td>
                        <button class="editar-btn" data-id="${cliente.id}">Editar</button>
                        <button class="excluir-btn" data-id="${cliente.id}">Excluir</button>
                    </td>
                </tr>
            `);
        });
    }

    // Função para excluir cliente
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

    // Redirecionar para a página de editar cliente
    $('#cliente-table').on('click', '.editar-btn', function() {
        let clienteId = $(this).attr('data-id');
        window.location.href = `/gerenciarCliente?id=${clienteId}`;
    });

    // Pesquisar cliente por nome
    $('#search-btn').click(function() {
        let nome = $('#searchName').val();
        $.ajax({
            url: `/api/clientes?nome=${nome}`,
            method: "GET",
            success: function(data) {
                atualizarTabelaClientes(data);
            },
            error: function(error) {
                console.error("Erro ao pesquisar clientes:", error);
                $('#cliente-table tbody').append('<tr><td colspan="5">Erro ao pesquisar clientes.</td></tr>');
            }
        });
    });
});
