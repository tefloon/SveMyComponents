import { writable } from "svelte/store";

const people = writable([
    {
        id: 1,
        imię: "Nataliia",
        nazwisko: "Kurek",
        płeć: "Kobieta",
        adres: "ul. Globusowa 5",
        miasto: "Warszawa"
    },
    {
        id: 2,
        imię: "Zdzisław",
        nazwisko: "Krajewska",
        płeć: "Mężczyzna",
        adres: "al. Jerozolimskie 198S",
        miasto: "Warszawa"
    },
    {
        id: 3,
        imię: "Helena",
        nazwisko: "Woźniak",
        płeć: "Kobieta",
        adres: "ul. Globusowa 17",
        miasto: "Warszawa"
    },
    {
        id: 4,
        imię: "Andrzej",
        nazwisko: "Nowak",
        płeć: "Mężczyzna",
        adres: "ul. Globusowa 26",
        miasto: "Poznań"
    },
]);

export default people;