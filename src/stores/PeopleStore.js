import { writable } from "svelte/store";

const people = writable([
    {
        id: 1,
        name: "Nataliia",
        surname: "Kurek",
        gender: "F",
        address: "ul. Globusowa 5",
        city: "Warszawa"
    },
    {
        id: 2,
        name: "Zdzisław",
        surname: "Krajewska",
        gender: "M",
        address: "al. Jerozolimskie 198S",
        city: "Warszawa"
    },
    {
        id: 3,
        name: "Helena",
        surname: "Woźniak",
        gender: "F",
        address: "ul. Globusowa 17",
        city: "Warszawa"
    },
]);

export default people;