-- CREATE DATABASE Escola;
SET datestyle TO SQL, DMY; 	
create TABLE disciplinas (
  	id_disciplina SERIAL PRIMARY KEY,
  	nome_disciplina VARCHAR(50) NOT NULL,
  	nome_professor VARCHAR(50) NOT NULL
  );