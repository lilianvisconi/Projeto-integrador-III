CREATE DATABASE IF NOT EXISTS pi3_pilates_db;
USE pi3_pilates_db;

-- Verifica se a tabela agendamentos já existe antes de criar
CREATE TABLE IF NOT EXISTS agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(255),
    data_hora DATETIME,
    tipo VARCHAR(50)
);

-- Verifica se a tabela clientes já existe antes de criar
CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20)
);

-- Verifica se a tabela relatorios já existe antes de criar
CREATE TABLE IF NOT EXISTS relatorios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    receita DECIMAL(10,2),
    despesas DECIMAL(10,2)
);

-- Dados de teste para a tabela agendamentos
INSERT INTO agendamentos (cliente, data_hora, tipo) VALUES
('Ana Silva', '2024-07-15 09:00:00', 'Pilates Solo'),
('Bruno Lima', '2024-07-15 10:00:00', 'Pilates em Equipamento'),
('Carla Souza', '2024-07-16 11:00:00', 'Pilates Solo'),
('Daniel Ferreira', '2024-07-16 14:00:00', 'Pilates em Equipamento');

-- Dados de teste para a tabela clientes
INSERT INTO clientes (nome, email, telefone) VALUES
('Ana Silva', 'ana.silva@gmail.com', '11 998765432'),
('Bruno Lima', 'bruno.lima@hotmail.com', '11 992365478'),
('Carla Souza', 'carla.souza@msn.com', '11 993258741'),
('Daniel Ferreira', 'daniel.ferreira@gmail.com', '11 914785236');

-- Dados de teste para a tabela relatorios
INSERT INTO relatorios (data, receita, despesas) VALUES
('2024-07-01', 1500.00, 500.00),
('2024-07-02', 2000.00, 600.00),
('2024-07-03', 1800.00, 550.00),
('2024-07-04', 2200.00, 700.00);
