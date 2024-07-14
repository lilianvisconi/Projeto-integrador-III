package br.com.senac.pi3.controller;

import br.com.senac.pi3.model.Agendamento;
import br.com.senac.pi3.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @GetMapping
    public List<Agendamento> getAllAgendamentos() {
        return agendamentoRepository.findAll();
    }

    @PostMapping
    public Agendamento createAgendamento(@RequestBody Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }

    @GetMapping("/{id}")
    public Agendamento getAgendamentoById(@PathVariable Long id) {
        return agendamentoRepository.findById(id).orElseThrow(() -> new RuntimeException("Agendamento not found"));
    }

    @PutMapping("/{id}")
    public Agendamento updateAgendamento(@PathVariable Long id, @RequestBody Agendamento agendamentoDetails) {
        Agendamento agendamento = agendamentoRepository.findById(id).orElseThrow(() -> new RuntimeException("Agendamento not found"));

        agendamento.setCliente(agendamentoDetails.getCliente());
        agendamento.setDataHora(agendamentoDetails.getDataHora());
        agendamento.setTipo(agendamentoDetails.getTipo());

        return agendamentoRepository.save(agendamento);
    }

    @DeleteMapping("/{id}")
    public void deleteAgendamento(@PathVariable Long id) {
        Agendamento agendamento = agendamentoRepository.findById(id).orElseThrow(() -> new RuntimeException("Agendamento not found"));
        agendamentoRepository.delete(agendamento);
    }
}