<?php


if(isset($_POST['submit'])){
    $nomePokemon = addslashes($_POST['nomePokemon']);
    $idPokemon = addslashes($_POST['idPokemon']);
    $pesoPokemon = addslashes($_POST['pesoPokemon']);
    $alturaPokemon = addslashes($_POST['alturaPokemon']);
    $habilidadesPokemon = addslashes($_POST['habilidadesPokemon']);
    $tipoPokemon = addslashes($_POST['tipoPokemon']);

    echo ("Usuário enviou a seguinte indicação de pokemon,
    Nome:$nomePokemon, Id:$idPokemon, Peso:$pesoPokemon, Altura:$alturaPokemon, Habilidades:$habilidadesPokemon, Tipo:$tipoPokemon");

}
    

?>