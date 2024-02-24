SET datestyle TO SQL, DMY; 	
create TABLE alunos (
  	id_aluno SERIAL PRIMARY KEY,
  	nome_aluno VARCHAR(50) NOT NULL,
  	disciplina_id INT,
  	data_de_nascimento DATE NOT NULL,
  	CONSTRAINT disciplina_id_fk FOREIGN KEY (disciplina_id)
  		REFERENCES disciplinas (id_disciplina)
  );
 