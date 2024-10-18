drop database if exists gerenciador; 
create database gerenciador;
use gerenciador;

CREATE TABLE IF NOT EXISTS tarefa(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao varchar(255) NOT NULL,
    data_tarefa DATE NOT NULL,
    nome VARCHAR(255) NOT NULL
);