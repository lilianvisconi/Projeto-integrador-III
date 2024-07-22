package br.com.senac.pi3.repository;

import br.com.senac.pi3.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    List<Agendamento> findByClienteNomeContainingIgnoreCase(String nome);
}
