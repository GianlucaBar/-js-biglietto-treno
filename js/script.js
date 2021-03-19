// dichiarazione variabili utente 
var etàPasseggero = parseInt(prompt("inserisci l' età del passeggero"));

var chilometriViaggio = parseInt(prompt("inserisci i chilometri da percorrere"));

var prezzoFinale;


// calcolo prezzo base 

var prezzoBase = ( chilometriViaggio * 0.21 );


// calcolo scontistica 

var sconto20 = ( prezzoBase / 100 * 20 );

var sconto40 = ( prezzoBase / 100 * 40 );


// calcolo prezzo finale 

if ( etàPasseggero < 18){
     prezzoFinale = ( prezzoBase - sconto20 )
 } else if ( etàPasseggero > 65 ){
     prezzoFinale = ( prezzoBase - sconto40 )
 }else{
     prezzoFinale = prezzoBase;
 }


//  arrotondo 
var prezzoFinaleArrotondato = prezzoFinale.toFixed(2);


// stampa 
 document.getElementById('prezzoBiglietto').innerHTML = "Il prezzo del biglietto e' " + prezzoFinaleArrotondato + " €";