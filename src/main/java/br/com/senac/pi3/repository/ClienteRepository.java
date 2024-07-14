package br.com.senac.pi3.repository;

import br.com.senac.pi3.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
