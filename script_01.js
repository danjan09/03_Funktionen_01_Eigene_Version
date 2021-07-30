/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// test();                          // Funktionsaufruf (call) | caller     // Funktionen können auch vor dem body aufgerufen werden

// function test()                 // Funktionsrumpf (body) | callee
// {
//     console.log("Hallo Welt!");
// }

// test();                          // Funktionsaufruf (call) | caller



/***** Funktionen 02 *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// function ausgabeNamen()
// {
//     console.log("Hallo Welt!");
//     console.log("Hallo Welt Zwei!");
//     console.log("Hallo Welt Drei!");
// }

// ausgabeNamen();


// function ausgabeNamen()
// {
//     const firstName = "Welt";       // variable --> lokal scoop
//     console.log("Hallo " + firstName + "!");
// }                                           // Änderungen innerhalb der Funktion nennt man refactoring

// ausgabeNamen();

// console.log(firstName);     // Fehler --> lokal !

// 2b. Parametrisierung + Datenübergabe von AUSSEN

// function ausgabeNamenParam(firstName)
// {
//     console.log("Hallo " + firstName + "!");
// }

// // ausgabeNamenParam("World");     // --> Argument(e)
// // ausgabeNamenParam("Worldy");

// ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));


// function ausgabeNamenParam(firstName)
// {
//     if(firstName == "")
//     {
//         firstName = "Nobody";
//     }

//     console.log("Hallo " + firstName + "!");
// }

// ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));


// function ausgabeNamenParam(firstName)
// {
//     if(firstName == "" || firstName == undefined)
//     {
//         firstName = "Nobody";
//     }

//     console.log("Hallo " + firstName + "!");
// }

// ausgabeNamenParam();


/***** Funktionen 02 *****/
// 2c. Mehrere Parameter

// function ausgabeNamenParams(firstName, familyName)
// {
//     console.log("Hallo " + firstName + " " + familyName + "!");
// }

// ausgabeNamenParams("Max", "Mütze");

// ausgabeNamenParams(prompt("Vorname:"), prompt("Nachname:"));



/***** Funktionen 03 *****/
// 3a. Mehrere Parameter

// Postulat: one function = one job (uncle Bob)
// SRP (single responsibilty principle)


// function ausgabeNamenParams(firstName, familyName)
// {
//     // 1. Job: string composing
//     const gap = " ";
//     const outputStr = "Hallo " + firstName + gap + familyName + "!";
    
//         // 2. Job: string output
//     // console.log(outputStr);

// }

// ausgabeNamenParams("Max", "Mütze");


// 3b. Mehrere Parameter

    // 1. Job: string composing
output(getString("Max","Mütze"));

function getString(firstName,familyName)
{
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr;       // --> Daten werden nach der Bearbeitung wieder zurück geliefert
}

    // 2. Job: string output
// output("hi");   // Test UNIT-Test TDD (test driven development)


function output(outputStr)
{
    console.log(outputStr);         // Warum braucht man hier kein return?
}
