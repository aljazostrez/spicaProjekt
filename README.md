# SpicaProjekt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Opis aplikacije

To je polna verzija aplikacije, v kateri prikažem, kako se povezati z API-jem ter nekaj ostalih elementov in zmožnosti Angular-ja.

V zavihku **Nastavitve** sta dva okna, v katerega uporabnik vstavi url strežnika, na katerega bi se želel povezati, in avtorizacijski ključ. Po tem, ko vnese primeren url in ključ, lahko obišče stran **Zaposleni** in **Prisotni**. Če se hoče uporabnik povezati na drug strežnik, mora prekiniti povezavo s prvim. Za testiranje povezave smo uporabil url http://rdweb.spica.&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast;&ast; in avtorizacijski ključ *SpicaToken EBD9E633-&ast;&ast;&ast;&ast;-&ast;&ast;&ast;&ast;-&ast;&ast;&ast;&ast;-&ast;&ast;&ast;&ast;*.

V zavihku **Zaposleni** so v tabeli prikazani vsi zaposleni ter njihovi podatki (ime, priimek, email, matična). Iskalno okno nad tabelo omogoča, da iščemo med uslužbenci po imenu, priimku, emailu ali matični številki. Tabela je sestavljena iz več strani ter nam ponuja možnost, da izberemo, koliko uslužbencev hkrati želimo videti. Pod tabelo je gumb *Dodaj*, s katerim lahko dodamo novega uslužbenca tako, da vnesemo njegovo ime, priimek, email in matično številko.    
**OPOMBA:** matična številka je shranjena v ključu "ReferenceId", saj izmed ključev v tipu zaposleni nisem našel bolj primernega prevoda.

V zavihku **Prisotni** je na eni strani seznam vseh uslužbencev, ki so prisotni, na drugi strani pa seznam vseh uslužbencev, ki so odsotni. Zraven je še gumb *Osveži*, s katerim osvežimo seznam prisotnih/odsotnih.
