$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const clienteId = urlParams.get('id');

    if (clienteId) {
        // Carregar os dados do cliente para edição
        $.ajax({
            url: `/api/clientes/${clienteId}`,
            method: "GET",
            success: function(cliente) {
                $('#clientId').val(cliente.id);
                $('#clientName').val(cliente.nome);
                $('#clientCpf').val(cliente.cpf);
                $('#clientTelefone').val(cliente.telefone);
                $('#clientEmail').val(cliente.email);
            },
            error: function(error) {
                console.error("Erro ao buscar cliente para edição:", error);
                alert("Erro ao buscar cliente para edição. Verifique o console para mais detalhes.");
            }
        });
    }

    // Salvar cliente (adicionar ou editar)
    $('#clientForm').submit(function(event) {
        event.preventDefault();

        let id = $('#clientId').val();
        let nome = $('#clientName').val();
        let cpf = $('#clientCpf').val();
        let telefone = $('#clientTelefone').val();
        let email = $('#clientEmail').val();

        let clienteData = { nome: nome, cpf: cpf, telefone: telefone, email: email };

        if (id) {
            // Editar cliente
            $.ajax({
                url: `/api/clientes/${id}`,
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify(clienteData),
                success: function(response) {
                    window.location.href = '/listarClientes';
                },
                error: function(error) {
                    console.error("Erro ao editar cliente:", error);
                    alert("Erro ao editar cliente. Verifique o console para mais detalhes.");
                }
            });
        } else {
            // Adicionar cliente
            $.ajax({
                url: "/api/clientes",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(clienteData),
                success: function(response) {
                    window.location.href = '/listarClientes';
                },
                error: function(error) {
                    console.error("Erro ao adicionar cliente:", error);
                    alert("Erro ao adicionar cliente. Verifique o console para mais detalhes.");
                }
            });
        }
    });
});
