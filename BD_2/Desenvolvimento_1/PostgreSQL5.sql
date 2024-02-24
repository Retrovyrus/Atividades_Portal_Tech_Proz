SELECT nome_aluno, nome_disciplina from alunos
INNER JOIN disciplinas
ON disciplinas.id_disciplina = alunos.disciplina_id;

select nome_aluno, nome_disciplina FROM alunos
LEFT JOIN disciplinas
ON disciplinas.id_disciplina = alunos.disciplina_id;

select nome_aluno, nome_disciplina FROM alunos
RIGHT JOIN disciplinas
ON disciplinas.id_disciplina = alunos.disciplina_id;

select * FROM alunos
where alunos.data_de_nascimento > '01/01/2000';

select * FROM alunos
where alunos.data_de_nascimento = '16/02/1998';