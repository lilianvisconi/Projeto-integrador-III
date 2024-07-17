CREATE DATABASE IF NOT EXISTS pi3_pilates_db;
USE pi3_pilates_db;

-- Verifica se a tabela clientes já existe antes de criar
CREATE TABLE IF NOT EXISTS clientes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    cpf VARCHAR(20)
);

-- Verifica se a tabela agendamentos já existe antes de criar
CREATE TABLE IF NOT EXISTS agendamentos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT,
    data_hora DATETIME,
    tipo VARCHAR(50),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Verifica se a tabela relatorios já existe antes de criar
CREATE TABLE IF NOT EXISTS relatorios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    receita DECIMAL(10,2),
    despesas DECIMAL(10,2)
);

-- Dados de teste para a tabela clientes
INSERT INTO clientes (nome, email, telefone, cpf) VALUES
('Ana Silva', 'ana.silva@gmail.com', '11 998765432', '111.222.333-44'),
('Bruno Lima', 'bruno.lima@hotmail.com', '11 992365478', '222.333.444-55'),
('Carla Souza', 'carla.souza@msn.com', '11 993258741', '333.444.555-66'),
('Daniel Ferreira', 'daniel.ferreira@gmail.com', '11 914785236', '444.555.666-77');

-- Dados de teste para a tabela agendamentos
INSERT INTO agendamentos (cliente_id, data_hora, tipo) VALUES
((SELECT id FROM clientes WHERE nome = 'Ana Silva'), '2024-07-15 09:00:00', 'Pilates Solo'),
((SELECT id FROM clientes WHERE nome = 'Bruno Lima'), '2024-07-15 10:00:00', 'Pilates em Equipamento'),
((SELECT id FROM clientes WHERE nome = 'Carla Souza'), '2024-07-16 11:00:00', 'Pilates Solo'),
((SELECT id FROM clientes WHERE nome = 'Daniel Ferreira'), '2024-07-16 14:00:00', 'Pilates em Equipamento');

-- Dados de teste para a tabela relatorios
INSERT INTO relatorios (data, receita, despesas) VALUES
('2024-07-01', 1500.00, 500.00),
('2024-07-02', 2000.00, 600.00),
('2024-07-03', 1800.00, 550.00),
('2024-07-04', 2200.00, 700.00);
