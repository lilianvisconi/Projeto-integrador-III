package br.com.senac.pi3.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MiscController {

    @GetMapping("/")
    public String index(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/login";
        }
        return "index";
    }

    @GetMapping("/listarAgendamentos")
    public String listarAgendamentos(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/login";
        }
        return "listarAgendamentos";
    }

    @GetMapping("/gerenciarAgendamento")
    public String gerenciarAgendamento(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/login";
        }
        return "gerenciarAgendamento";
    }

    @GetMapping("/listarClientes")
    public String listarClientes(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/login";
        }
        return "listarClientes";
    }

    @GetMapping("/gerenciarCliente")
    public String gerenciarCliente(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/login";
        }
        return "gerenciarCliente";
    }
}