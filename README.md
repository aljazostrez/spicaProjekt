# SpicaProjekt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Opis aplikacije

Cilju naloge sem se poskušal približati, kolikor se je le dalo, vendar ni čisto popolno. Kar manjka je, da bi se aplikacija povezovala s strežnikom, iz katerega bi črpala podatke. Ker aplikacija deluje na bazi lokalnih podatkov, bo ob vsaki osvežitvi strani aplikacija skočila na prvotno stanje in vse spremembe bodo izbrisane.

V zavihku **Nastavitve** sta dva okna, v katerega bi uporabnik vstavil url strežnika, na katerega bi se želel povezati, in avtorizacijski ključ. Po tem, ko bi vnesel primeren url in ključ, bi lahko obiskal stran **Zaposleni** in **Prisotni**.

V zavihku **Zaposleni** so v tabeli prikazani vsi zaposleni ter njihovi podatki (ime, priimek, email, matična, prisotnost). Iskalni okni nad tabelo nam omogočata, da iščemo med uslužbenci po imenu oziroma priimku. Če bi se povezali z bazo, bi iz baze dobili podatke o tem, ali je zaposlen prisoten ali odsoten. V mojem primeru, ko tega nisem storil, sem poleg teh podatkov naredil še stolpec akcija, v kateri lahko ročno nastavimo, ali je uslužbenec prišel oz. odšel. Zadnji stolpec nam omogoča, da uslužbenca izbrišemo. Pod tabelo je gumb *Dodaj*, s katerim lahko dodamo novega uslužbenca tako, da vnesemo njegovo ime, priimek, email in matično številko. Izmed vseh lastnosti je matična številka edinstvena, zato ne moremo dodati uslužbenca, če kateri izmed že obstoječih uslužbencev že ima takšno matično številko.

V zavihku **Prisotni** je na eni strani seznam vseh uslužbencev, ki so prisotni, na drugi strani pa seznam vseh uslužbencev, ki so odsotni. Če bi podatke črpali iz baze, bi dodali še gumb *Osveži*, s katerim bi osvežili seznam prisotnih/odsotnih.
