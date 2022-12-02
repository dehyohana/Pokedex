package com.pokedex.fmupokedex.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pokedex.fmupokedex.model.Pokemon;
import com.pokedex.fmupokedex.service.IPokemonService;

@RestController
public class PokemonController {
	@Autowired
	private IPokemonService service;
	
	//recuperar todos
	
	@GetMapping("/pokemons") 
	public ArrayList<Pokemon> recuperarTodoMundo(){ 
		return service.recuperarTodos(); 
	}
	
	//recuperar pelo ID
	@GetMapping("/pokemons/{codigo}")
	public ResponseEntity<Pokemon> recuperarPeloCodigo(@PathVariable Integer codigo){
		Pokemon res = service.recuperarPeloCodigo(codigo);
		if (res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.status(404).build();
	}
	
	//cadastrar
	@PostMapping("/pokemons")
	public ResponseEntity<Pokemon> inserirNovoCurso(@RequestBody Pokemon novo){
		Pokemon res = service.cadastrarNovo(novo);
		if (res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().build();
	}
	//excluir
	@DeleteMapping("/pokemons/{codigo}")
	public ResponseEntity<Pokemon> excluirPokemon(@PathVariable Integer codigo){
		service.excluirPokemon(codigo);
		return ResponseEntity.ok(null);
	}

}
