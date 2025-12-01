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
  const firstname: string = "Emanuele";
  const eta: number = 23;
  const studioTs: boolean = true;
}
//3) Tipizza il parametro della seguente funzione:
{
  const greet = (name: string) => {
    return "Ciao " + name;
  };
  console.log(greet("Emanuele"));
}
//4) Specifica il tipo di ritorno della seguente funzione:
{
  const sum = (a: number, b: number) => {
    return a + b;
  };
}
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
{
  const calcolaPrezzoConIVA = (prezzoBase: number): number => {
    const IVA: number = 0.22;
    return prezzoBase * (1 + IVA);
  };
  console.log(calcolaPrezzoConIVA(50));
}
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
{
  const lunghezza = (str1: string, str2: string): number => {
    const risultato: string = str1 + str2;
    return risultato.length;
  };
  console.log(lunghezza("Ciao", "Epicode"));
}

//7) Cos'è un Type Union e come si scrive?
//Un Type Union è un modo di dichiarere una variabile che puo accettare solo un tipo specifico esempio:
{
  type numeroTelefono = number | string;
  //8) Crea una variabile che possa contenere un numero, null o undefined.
  let typeEsempio: number | null | undefined = 42;
  //9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
  type GiorniDellaSettimana =
    | "Lunedì"
    | "Martedì"
    | "Mercoledì"
    | "Giovedì"
    | "Venerdì"
    | "Sabato"
    | "Domenica";

  const giornoAttuale: GiorniDellaSettimana = "Lunedì";

  console.log(giornoAttuale);

  //10) Tipizza il seguente array di numeri nei due modi possibili:
  const numbers: Array<number> = [1, 2, 3];

  console.log(numbers);

  //11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
  type DatiUtente = [string, string, string, number, number];

  const dati: DatiUtente = ["Emanuele", "Cozzolino", "Email", 1234, 45.5];
  console.log(dati);

  //12) Qual è la differenza tra type e interface?
  //13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
  interface User {
    firstname: string;
    lastname: string;
    age: number;
  }

  //14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
  interface User {
    email: string;
    telefono?: string;
  }

  //15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
  interface Studente {
    nome: string;
    voto: number;
  }

  const classe: Studente[] = [
    { nome: "Emanuele", voto: 7.5 },
    { nome: "Riaccardo", voto: 9 },
    { nome: "Gianluca", voto: 6.8 },
  ];

  //16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
  interface Veicolo {
    marca: string;
    anno: number;
  }

  interface Auto extends Veicolo {
    modello: string;
    porte: number;
  }

  //17) Crea un oggetto che implementi l'interfaccia Auto.
  const miaAuto: Auto = {
    marca: "Audi",
    anno: 2021,
    modello: "Q3",
    porte: 5,
  };
  //18) Cosa sono i Generics in TypeScript?
  //19) È possibile avere più tipi generici in un'interfaccia?
  //20) Crea un'interfaccia generica per una risposta API.
}
