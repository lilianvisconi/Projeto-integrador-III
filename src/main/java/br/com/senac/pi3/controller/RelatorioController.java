package br.com.senac.pi3.controller;

import br.com.senac.pi3.model.Relatorio;
import br.com.senac.pi3.repository.RelatorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/relatorios")
public class RelatorioController {
    @Autowired
    private RelatorioRepository relatorioRepository;

    @GetMapping
    public List<Relatorio> listarRelatorios() {
        return relatorioRepository.findAll();
    }

    @PostMapping
    public Relatorio adicionarRelatorio(@RequestBody Relatorio relatorio) {
        return relatorioRepository.save(relatorio);
    }

    // Outros métodos (PUT, DELETE)...
}