package br.com.senac.pi3.controller;

import br.com.senac.pi3.model.Cliente;
import br.com.senac.pi3.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> getAllClientes(@RequestParam(required = false) String nome) {
        if (nome != null) {
            return clienteRepository.findByNomeContainingIgnoreCase(nome);
        }
        return clienteRepository.findAll();
    }

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @GetMapping("/{id}")
    public Cliente getClienteById(@PathVariable Long id) {
        return clienteRepository.findById(id).orElseThrow(() -> new RuntimeException("Cliente not found"));
    }

    @PutMapping("/{id}")
    public Cliente updateCliente(@PathVariable Long id, @RequestBody Cliente clienteDetails) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new RuntimeException("Cliente not found"));

        cliente.setNome(clienteDetails.getNome());
        cliente.setCpf(clienteDetails.getCpf());
        cliente.setTelefone(clienteDetails.getTelefone());
        cliente.setEmail(clienteDetails.getEmail());

        return clienteRepository.save(cliente);
    }

    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable Long id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new RuntimeException("Cliente not found"));
        clienteRepository.delete(cliente);
    }
}

