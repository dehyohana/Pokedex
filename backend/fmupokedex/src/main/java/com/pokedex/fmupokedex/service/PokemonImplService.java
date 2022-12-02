package com.pokedex.fmupokedex.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pokedex.fmupokedex.dao.PokemonDAO;
import com.pokedex.fmupokedex.model.Pokemon;

@Service
public class PokemonImplService implements IPokemonService{
	@Autowired
	private PokemonDAO dao;
	@Override
	public ArrayList<Pokemon> recuperarTodos() {
		// TODO Auto-generated method stub
		return (ArrayList<Pokemon>)dao.findAll();
	}

	@Override
	public Pokemon recuperarPeloCodigo(Integer codigo) {
		// TODO Auto-generated method stub
		return dao.findById(codigo).orElse(null);
	}

	@Override
	public Pokemon cadastrarNovo(Pokemon novo) {
		// TODO Auto-generated method stub
		return dao.save(novo);
	}

	@Override
	public void excluirPokemon(Integer Id) {
		// TODO Auto-generated method stub
		
	}
	
	

}
