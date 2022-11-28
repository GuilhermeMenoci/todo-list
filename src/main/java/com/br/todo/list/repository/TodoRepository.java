package com.br.todo.list.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.todo.list.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{

}
