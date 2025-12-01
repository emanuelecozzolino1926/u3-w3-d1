/*
1) Quali sono i tipi primitivi principali in TypeScript?
string: Rappresenta dati testuali (es. "Ciao mondo").
number: Rappresenta sia numeri interi che a virgola mobile
boolean: Rappresenta un valore logico, solo true o false.
null: Rappresenta l'assenza intenzionale di qualsiasi valore.
undefined: Indica che una variabile non è stata assegnata a un valore.
*/
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
{
    var firstname = "Emanuele";
    var eta = 23;
    var studioTs = true;
}
//3) Tipizza il parametro della seguente funzione:
{
    var greet = function (name) {
        return "Ciao " + name;
    };
    console.log(greet("Emanuele"));
}
//4) Specifica il tipo di ritorno della seguente funzione:
{
    var sum = function (a, b) {
        return a + b;
    };
}
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
{
    var calcolaPrezzoConIVA = function (prezzoBase) {
        var IVA = 0.22;
        return prezzoBase * (1 + IVA);
    };
    console.log(calcolaPrezzoConIVA(50));
}
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
{
    var lunghezza = function (str1, str2) {
        var risultato = str1 + str2;
        return risultato.length;
    };
    console.log(lunghezza("Ciao", "Epicode"));
}
//7) Cos'è un Type Union e come si scrive?
//Un Type Union è un modo di dichiarere una variabile che puo accettare solo un tipo specifico esempio:
{
    //8) Crea una variabile che possa contenere un numero, null o undefined.
    var typeEsempio = 42;
    var giornoAttuale = "Lunedì";
    console.log(giornoAttuale);
    //10) Tipizza il seguente array di numeri nei due modi possibili:
    var numbers = [1, 2, 3];
    console.log(numbers);
    var dati = ["Emanuele", "Cozzolino", "Email", 1234, 45.5];
    console.log(dati);
}
//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
//17) Crea un oggetto che implementi l'interfaccia Auto.
//18) Cosa sono i Generics in TypeScript?
//19) È possibile avere più tipi generici in un'interfaccia?
//20) Crea un'interfaccia generica per una risposta API.
