package br.com.senac.pi3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MiscController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/listarAgendamentos")
    public String listarAgendamentos() {
        return "listarAgendamentos";
    }

    @GetMapping("/listarClientes")
    public String listarClientes() {
        return "listarClientes";
    }

    @GetMapping("/gerenciarCliente")
    public String gerenciarCliente() {
        return "gerenciarCliente";
    }

    @GetMapping("/listarRelatorios")
    public String listarRelatorios() {
        return "listarRelatorios";
    }
}