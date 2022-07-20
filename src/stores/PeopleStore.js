import { writable } from "svelte/store";

const people = writable([
    {
        "id": 1,
        "imię": "Nadzieja",
        "nazwisko": "Staniszewska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 26",
        "miasto": "Warszawa"
    },
    {
        "id": 2,
        "imię": "Jagoda",
        "nazwisko": "Urbańska",
        "płeć": "F",
        "adres": "al. Krakowska 187",
        "miasto": "Warszawa"
    },
    {
        "id": 3,
        "imię": "Monika",
        "nazwisko": "Wierzbicka",
        "płeć": "F",
        "adres": "ul. Kleszczowa 6",
        "miasto": "Warszawa"
    },
    {
        "id": 4,
        "imię": "Zenon",
        "nazwisko": "Janik",
        "płeć": "M",
        "adres": "ul. Nike 29",
        "miasto": "Warszawa"
    },
    {
        "id": 5,
        "imię": "Ireneusz",
        "nazwisko": "Kozak",
        "płeć": "M",
        "adres": "ul. Nike 21",
        "miasto": "Warszawa"
    },
    {
        "id": 6,
        "imię": "Włodzimierz",
        "nazwisko": "Piotrowski",
        "płeć": "M",
        "adres": "ul. Nike 41A",
        "miasto": "Warszawa"
    },
    {
        "id": 7,
        "imię": "Zdzisław",
        "nazwisko": "Mróz",
        "płeć": "M",
        "adres": "ul. Globusowa 24",
        "miasto": "Warszawa"
    },
    {
        "id": 8,
        "imię": "Julianna",
        "nazwisko": "Mikołajczyk",
        "płeć": "F",
        "adres": "ul. Globusowa 20",
        "miasto": "Warszawa"
    },
    {
        "id": 9,
        "imię": "Otylia",
        "nazwisko": "Jabłońska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 21A",
        "miasto": "Warszawa"
    },
    {
        "id": 10,
        "imię": "Rita",
        "nazwisko": "Rogala",
        "płeć": "F",
        "adres": "ul. Janiszowska 4A",
        "miasto": "Warszawa"
    },
    {
        "id": 11,
        "imię": "Lidia",
        "nazwisko": "Bogusz",
        "płeć": "F",
        "adres": "ul. Janiszowska 29A",
        "miasto": "Warszawa"
    },
    {
        "id": 12,
        "imię": "Marzenna",
        "nazwisko": "Skowron",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 6",
        "miasto": "Warszawa"
    },
    {
        "id": 13,
        "imię": "Martina",
        "nazwisko": "Mielczarek",
        "płeć": "F",
        "adres": "al. Krakowska 145",
        "miasto": "Warszawa"
    },
    {
        "id": 14,
        "imię": "Franciszek",
        "nazwisko": "Piątek",
        "płeć": "M",
        "adres": "ul. Popularna 41",
        "miasto": "Warszawa"
    },
    {
        "id": 15,
        "imię": "Dmytro",
        "nazwisko": "Pietrzak",
        "płeć": "M",
        "adres": "ul. Płomyka 42",
        "miasto": "Warszawa"
    },
    {
        "id": 16,
        "imię": "Marlena",
        "nazwisko": "Michalak",
        "płeć": "F",
        "adres": "ul. Geologiczna 20",
        "miasto": "Warszawa"
    },
    {
        "id": 17,
        "imię": "Lilla",
        "nazwisko": "Dudek",
        "płeć": "F",
        "adres": "ul. Kleszczowa 2",
        "miasto": "Warszawa"
    },
    {
        "id": 18,
        "imię": "Myroslava",
        "nazwisko": "Sikorska",
        "płeć": "F",
        "adres": "ul. Janiszowska 13A",
        "miasto": "Warszawa"
    },
    {
        "id": 19,
        "imię": "Viktoryia",
        "nazwisko": "Kujawa",
        "płeć": "F",
        "adres": "ul. Galaktyki 21",
        "miasto": "Warszawa"
    },
    {
        "id": 20,
        "imię": "Izabela",
        "nazwisko": "Szydłowska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 5",
        "miasto": "Warszawa"
    },
    {
        "id": 21,
        "imię": "Patryk",
        "nazwisko": "Tomaszewski",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 16",
        "miasto": "Warszawa"
    },
    {
        "id": 22,
        "imię": "Grzegorz",
        "nazwisko": "Włodarczyk",
        "płeć": "M",
        "adres": "ul. Mikołajska 8A",
        "miasto": "Warszawa"
    },
    {
        "id": 23,
        "imię": "Oleksandr",
        "nazwisko": "Jarosz",
        "płeć": "M",
        "adres": "ul. Bolesława Gidzińskiego 1",
        "miasto": "Warszawa"
    },
    {
        "id": 24,
        "imię": "Marharyta",
        "nazwisko": "Wawrzyniak",
        "płeć": "F",
        "adres": "ul. Klinkierowa 2",
        "miasto": "Warszawa"
    },
    {
        "id": 25,
        "imię": "Bolesława",
        "nazwisko": "Panek",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 27",
        "miasto": "Warszawa"
    },
    {
        "id": 26,
        "imię": "Marzanna",
        "nazwisko": "Sienkiewicz",
        "płeć": "F",
        "adres": "al. Krakowska 214",
        "miasto": "Warszawa"
    },
    {
        "id": 27,
        "imię": "Maya",
        "nazwisko": "Przybyła",
        "płeć": "F",
        "adres": "al. Jerozolimskie 212A",
        "miasto": "Warszawa"
    },
    {
        "id": 28,
        "imię": "Olesia",
        "nazwisko": "Nowakowska",
        "płeć": "F",
        "adres": "ul. Klinowa 4",
        "miasto": "Warszawa"
    },
    {
        "id": 29,
        "imię": "Longina",
        "nazwisko": "Kubiak",
        "płeć": "F",
        "adres": "ul. Globusowa 12",
        "miasto": "Warszawa"
    },
    {
        "id": 30,
        "imię": "Henryka",
        "nazwisko": "Duda",
        "płeć": "F",
        "adres": "al. Krakowska 81",
        "miasto": "Warszawa"
    },
    {
        "id": 31,
        "imię": "Anita",
        "nazwisko": "Rosińska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 36",
        "miasto": "Warszawa"
    },
    {
        "id": 32,
        "imię": "Blanka",
        "nazwisko": "Witkowska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 184",
        "miasto": "Warszawa"
    },
    {
        "id": 33,
        "imię": "Kamila",
        "nazwisko": "Wójtowicz",
        "płeć": "F",
        "adres": "ul. Kleszczowa 13",
        "miasto": "Warszawa"
    },
    {
        "id": 34,
        "imię": "Andrii",
        "nazwisko": "Maciejewski",
        "płeć": "M",
        "adres": "ul. Płomyka 2",
        "miasto": "Warszawa"
    },
    {
        "id": 35,
        "imię": "Oksana",
        "nazwisko": "Zielińska",
        "płeć": "F",
        "adres": "al. Krakowska 127",
        "miasto": "Warszawa"
    },
    {
        "id": 36,
        "imię": "Marika",
        "nazwisko": "Lis",
        "płeć": "F",
        "adres": "ul. Kolneńska 18",
        "miasto": "Warszawa"
    },
    {
        "id": 37,
        "imię": "Błażej",
        "nazwisko": "Sadowski",
        "płeć": "M",
        "adres": "ul. Globusowa 8",
        "miasto": "Warszawa"
    },
    {
        "id": 38,
        "imię": "Władysław",
        "nazwisko": "Wójcik",
        "płeć": "M",
        "adres": "ul. Przyłęcka 8",
        "miasto": "Warszawa"
    },
    {
        "id": 39,
        "imię": "Helena",
        "nazwisko": "Sobczak",
        "płeć": "F",
        "adres": "ul. Fraszki 15",
        "miasto": "Warszawa"
    },
    {
        "id": 40,
        "imię": "Bernadetta",
        "nazwisko": "Ziółkowska",
        "płeć": "F",
        "adres": "ul. Jantar 9",
        "miasto": "Warszawa"
    },
    {
        "id": 41,
        "imię": "Norbert",
        "nazwisko": "Krajewski",
        "płeć": "M",
        "adres": "ul. Globusowa 13",
        "miasto": "Warszawa"
    },
    {
        "id": 42,
        "imię": "Zenona",
        "nazwisko": "Kostrzewa",
        "płeć": "F",
        "adres": "ul. Jantar 23",
        "miasto": "Warszawa"
    },
    {
        "id": 43,
        "imię": "Piotr",
        "nazwisko": "Ciesielski",
        "płeć": "M",
        "adres": "ul. Popularna 40",
        "miasto": "Warszawa"
    },
    {
        "id": 44,
        "imię": "Kseniia",
        "nazwisko": "Kozak",
        "płeć": "F",
        "adres": "ul. Janiszowska 4",
        "miasto": "Warszawa"
    },
    {
        "id": 45,
        "imię": "Barbara",
        "nazwisko": "Jurek",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 4",
        "miasto": "Warszawa"
    },
    {
        "id": 46,
        "imię": "Ewa",
        "nazwisko": "Pluta",
        "płeć": "F",
        "adres": "al. Krakowska 14",
        "miasto": "Warszawa"
    },
    {
        "id": 47,
        "imię": "Karol",
        "nazwisko": "Lis",
        "płeć": "M",
        "adres": "ul. Mikołajska 7B",
        "miasto": "Warszawa"
    },
    {
        "id": 48,
        "imię": "Witold",
        "nazwisko": "Kalinowski",
        "płeć": "M",
        "adres": "ul. Mikołajska 35",
        "miasto": "Warszawa"
    },
    {
        "id": 49,
        "imię": "Julia",
        "nazwisko": "Pawlik",
        "płeć": "F",
        "adres": "ul. Janiszowska 17",
        "miasto": "Warszawa"
    },
    {
        "id": 50,
        "imię": "Łucja",
        "nazwisko": "Krajewska",
        "płeć": "F",
        "adres": "ul. Globusowa 17",
        "miasto": "Warszawa"
    },
    {
        "id": 51,
        "imię": "Vitalii",
        "nazwisko": "Głowacki",
        "płeć": "M",
        "adres": "ul. Nike 13",
        "miasto": "Warszawa"
    },
    {
        "id": 52,
        "imię": "Sebastian",
        "nazwisko": "Baranowski",
        "płeć": "M",
        "adres": "ul. Milanowska 9",
        "miasto": "Warszawa"
    },
    {
        "id": 53,
        "imię": "Ryszard",
        "nazwisko": "Tomczak",
        "płeć": "M",
        "adres": "ul. Bolesława Gidzińskiego 7",
        "miasto": "Warszawa"
    },
    {
        "id": 54,
        "imię": "Marcela",
        "nazwisko": "Matuszewska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 17",
        "miasto": "Warszawa"
    },
    {
        "id": 55,
        "imię": "Veronica",
        "nazwisko": "Błaszczyk",
        "płeć": "F",
        "adres": "ul. Jantar 5",
        "miasto": "Warszawa"
    },
    {
        "id": 56,
        "imię": "Jakub",
        "nazwisko": "Żak",
        "płeć": "M",
        "adres": "ul. Mikołajska 22",
        "miasto": "Warszawa"
    },
    {
        "id": 57,
        "imię": "Regina",
        "nazwisko": "Madej",
        "płeć": "F",
        "adres": "al. Krakowska 129",
        "miasto": "Warszawa"
    },
    {
        "id": 58,
        "imię": "Uliana",
        "nazwisko": "Jóźwiak",
        "płeć": "F",
        "adres": "al. Krakowska 16",
        "miasto": "Warszawa"
    },
    {
        "id": 59,
        "imię": "Sabina",
        "nazwisko": "Winiarska",
        "płeć": "F",
        "adres": "ul. Fraszki 12",
        "miasto": "Warszawa"
    },
    {
        "id": 60,
        "imię": "Wioleta",
        "nazwisko": "Malec",
        "płeć": "F",
        "adres": "al. Jerozolimskie 217",
        "miasto": "Warszawa"
    },
    {
        "id": 61,
        "imię": "Mykhailo",
        "nazwisko": "Baran",
        "płeć": "M",
        "adres": "ul. Nike 19",
        "miasto": "Warszawa"
    },
    {
        "id": 62,
        "imię": "Pelagia",
        "nazwisko": "Pietrzyk",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198R",
        "miasto": "Warszawa"
    },
    {
        "id": 63,
        "imię": "Florentyna",
        "nazwisko": "Szymczak",
        "płeć": "F",
        "adres": "al. Jerozolimskie 184B",
        "miasto": "Warszawa"
    },
    {
        "id": 64,
        "imię": "Edyta",
        "nazwisko": "Laskowska",
        "płeć": "F",
        "adres": "ul. Janiszowska 35",
        "miasto": "Warszawa"
    },
    {
        "id": 65,
        "imię": "Gloria",
        "nazwisko": "Świderska",
        "płeć": "F",
        "adres": "al. Krakowska 149",
        "miasto": "Warszawa"
    },
    {
        "id": 66,
        "imię": "Stefania",
        "nazwisko": "Kaleta",
        "płeć": "F",
        "adres": "al. Krakowska 39",
        "miasto": "Warszawa"
    },
    {
        "id": 67,
        "imię": "Marek",
        "nazwisko": "Laskowski",
        "płeć": "M",
        "adres": "ul. Płomyka 32",
        "miasto": "Warszawa"
    },
    {
        "id": 68,
        "imię": "Jacek",
        "nazwisko": "Krupa",
        "płeć": "M",
        "adres": "ul. Przyłęcka 10",
        "miasto": "Warszawa"
    },
    {
        "id": 69,
        "imię": "Mariola",
        "nazwisko": "Kłos",
        "płeć": "F",
        "adres": "ul. Janiszowska 33",
        "miasto": "Warszawa"
    },
    {
        "id": 70,
        "imię": "Janina",
        "nazwisko": "Mucha",
        "płeć": "F",
        "adres": "al. Krakowska 212",
        "miasto": "Warszawa"
    },
    {
        "id": 71,
        "imię": "Anastasiya",
        "nazwisko": "Popławska",
        "płeć": "F",
        "adres": "ul. Fraszki 19",
        "miasto": "Warszawa"
    },
    {
        "id": 72,
        "imię": "Apolonia",
        "nazwisko": "Kosińska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 1",
        "miasto": "Warszawa"
    },
    {
        "id": 73,
        "imię": "Żaneta",
        "nazwisko": "Domagała",
        "płeć": "F",
        "adres": "ul. Jantar 2",
        "miasto": "Warszawa"
    },
    {
        "id": 74,
        "imię": "Oliwier",
        "nazwisko": "Kołodziej",
        "płeć": "M",
        "adres": "al. Krakowska 109A",
        "miasto": "Warszawa"
    },
    {
        "id": 75,
        "imię": "Iryna",
        "nazwisko": "Cybulska",
        "płeć": "F",
        "adres": "ul. Kolneńska 4",
        "miasto": "Warszawa"
    },
    {
        "id": 76,
        "imię": "Liudmyla",
        "nazwisko": "Jędrzejewska",
        "płeć": "F",
        "adres": "ul. Klinkierowa 4",
        "miasto": "Warszawa"
    },
    {
        "id": 77,
        "imię": "Raisa",
        "nazwisko": "Zakrzewska",
        "płeć": "F",
        "adres": "ul. Jantar 24",
        "miasto": "Warszawa"
    },
    {
        "id": 78,
        "imię": "Mariia",
        "nazwisko": "Czaja",
        "płeć": "F",
        "adres": "ul. Geologiczna 7A",
        "miasto": "Warszawa"
    },
    {
        "id": 79,
        "imię": "Amelia",
        "nazwisko": "Dębska",
        "płeć": "F",
        "adres": "ul. Fraszki 2",
        "miasto": "Warszawa"
    },
    {
        "id": 80,
        "imię": "Romana",
        "nazwisko": "Gawrońska",
        "płeć": "F",
        "adres": "ul. Fraszki 16",
        "miasto": "Warszawa"
    },
    {
        "id": 81,
        "imię": "Klaudia",
        "nazwisko": "Jasińska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 4",
        "miasto": "Warszawa"
    },
    {
        "id": 82,
        "imię": "Kazimiera",
        "nazwisko": "Konieczna",
        "płeć": "F",
        "adres": "ul. Klinowa 5",
        "miasto": "Warszawa"
    },
    {
        "id": 83,
        "imię": "Rozalia",
        "nazwisko": "Marek",
        "płeć": "F",
        "adres": "ul. Jantar 16",
        "miasto": "Warszawa"
    },
    {
        "id": 84,
        "imię": "Fabian",
        "nazwisko": "Dąbrowski",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 11",
        "miasto": "Warszawa"
    },
    {
        "id": 85,
        "imię": "Viktor",
        "nazwisko": "Szczepański",
        "płeć": "M",
        "adres": "ul. Mikołajska 16",
        "miasto": "Warszawa"
    },
    {
        "id": 86,
        "imię": "Eleonora",
        "nazwisko": "Marszałek",
        "płeć": "F",
        "adres": "ul. Janiszowska 15",
        "miasto": "Warszawa"
    },
    {
        "id": 87,
        "imię": "Claudia",
        "nazwisko": "Bednarczyk",
        "płeć": "F",
        "adres": "ul. Janiszowska 31",
        "miasto": "Warszawa"
    },
    {
        "id": 88,
        "imię": "Irmgarda",
        "nazwisko": "Tomczak",
        "płeć": "F",
        "adres": "ul. Galaktyki 11",
        "miasto": "Warszawa"
    },
    {
        "id": 89,
        "imię": "Judyta",
        "nazwisko": "Banach",
        "płeć": "F",
        "adres": "ul. Janiszowska 5",
        "miasto": "Warszawa"
    },
    {
        "id": 90,
        "imię": "Wiesław",
        "nazwisko": "Kaczmarczyk",
        "płeć": "M",
        "adres": "ul. Józefa Ignacego Kraszewskiego 31",
        "miasto": "Warszawa"
    },
    {
        "id": 91,
        "imię": "Alla",
        "nazwisko": "Michalik",
        "płeć": "F",
        "adres": "al. Krakowska 48/52",
        "miasto": "Warszawa"
    },
    {
        "id": 92,
        "imię": "Nikodem",
        "nazwisko": "Król",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 61",
        "miasto": "Warszawa"
    },
    {
        "id": 93,
        "imię": "Lech",
        "nazwisko": "Błaszczyk",
        "płeć": "M",
        "adres": "ul. Płomyka 24",
        "miasto": "Warszawa"
    },
    {
        "id": 94,
        "imię": "Aniela",
        "nazwisko": "Jarosz",
        "płeć": "F",
        "adres": "al. Krakowska 257",
        "miasto": "Warszawa"
    },
    {
        "id": 95,
        "imię": "Liubov",
        "nazwisko": "Sowińska",
        "płeć": "F",
        "adres": "al. Krakowska 62",
        "miasto": "Warszawa"
    },
    {
        "id": 96,
        "imię": "Angela",
        "nazwisko": "Sosnowska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 29A",
        "miasto": "Warszawa"
    },
    {
        "id": 97,
        "imię": "Adelajda",
        "nazwisko": "Markowska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 24A",
        "miasto": "Warszawa"
    },
    {
        "id": 98,
        "imię": "Arkadiusz",
        "nazwisko": "Gajewski",
        "płeć": "M",
        "adres": "ul. Płomyka 54",
        "miasto": "Warszawa"
    },
    {
        "id": 99,
        "imię": "Violetta",
        "nazwisko": "Chmiel",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 40",
        "miasto": "Warszawa"
    },
    {
        "id": 100,
        "imię": "Bogusław",
        "nazwisko": "Nowak",
        "płeć": "M",
        "adres": "ul. Płomyka 43",
        "miasto": "Warszawa"
    },
    {
        "id": 101,
        "imię": "Sarah",
        "nazwisko": "Piasecka",
        "płeć": "F",
        "adres": "al. Krakowska 40",
        "miasto": "Warszawa"
    },
    {
        "id": 102,
        "imię": "Edeltrauda",
        "nazwisko": "Kowal",
        "płeć": "F",
        "adres": "ul. Kolneńska 5",
        "miasto": "Warszawa"
    },
    {
        "id": 103,
        "imię": "Angelika",
        "nazwisko": "Murawska",
        "płeć": "F",
        "adres": "ul. Janiszowska 10A",
        "miasto": "Warszawa"
    },
    {
        "id": 104,
        "imię": "Zhanna",
        "nazwisko": "Młynarczyk",
        "płeć": "F",
        "adres": "ul. Klinkierowa 1",
        "miasto": "Warszawa"
    },
    {
        "id": 105,
        "imię": "Renata",
        "nazwisko": "Wiśniewska",
        "płeć": "F",
        "adres": "al. Krakowska 10",
        "miasto": "Warszawa"
    },
    {
        "id": 106,
        "imię": "Michalina",
        "nazwisko": "Szostak",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 42",
        "miasto": "Warszawa"
    },
    {
        "id": 107,
        "imię": "Kacper",
        "nazwisko": "Kołodziejczyk",
        "płeć": "M",
        "adres": "ul. Popularna 15A",
        "miasto": "Warszawa"
    },
    {
        "id": 108,
        "imię": "Bianka",
        "nazwisko": "Kaczmarek",
        "płeć": "F",
        "adres": "ul. Geologiczna 8A",
        "miasto": "Warszawa"
    },
    {
        "id": 109,
        "imię": "Radosław",
        "nazwisko": "Jankowski",
        "płeć": "M",
        "adres": "ul. Milanowska 10",
        "miasto": "Warszawa"
    },
    {
        "id": 110,
        "imię": "Ruslana",
        "nazwisko": "Leszczyńska",
        "płeć": "F",
        "adres": "ul. Fraszki 7",
        "miasto": "Warszawa"
    },
    {
        "id": 111,
        "imię": "Gerda",
        "nazwisko": "Chmielewska",
        "płeć": "F",
        "adres": "ul. Galaktyki 19",
        "miasto": "Warszawa"
    },
    {
        "id": 112,
        "imię": "Henryk",
        "nazwisko": "Wieczorek",
        "płeć": "M",
        "adres": "ul. Nike 16A",
        "miasto": "Warszawa"
    },
    {
        "id": 113,
        "imię": "Marcelina",
        "nazwisko": "Kowalewska",
        "płeć": "F",
        "adres": "ul. Kolneńska 19",
        "miasto": "Warszawa"
    },
    {
        "id": 114,
        "imię": "Łukasz",
        "nazwisko": "Ostrowski",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 29",
        "miasto": "Warszawa"
    },
    {
        "id": 115,
        "imię": "Sylwester",
        "nazwisko": "Jabłoński",
        "płeć": "M",
        "adres": "ul. Popularna 43",
        "miasto": "Warszawa"
    },
    {
        "id": 116,
        "imię": "Lena",
        "nazwisko": "Kubicka",
        "płeć": "F",
        "adres": "ul. Janiszowska 29",
        "miasto": "Warszawa"
    },
    {
        "id": 117,
        "imię": "Alfreda",
        "nazwisko": "Cichoń",
        "płeć": "F",
        "adres": "ul. Kolneńska 21",
        "miasto": "Warszawa"
    },
    {
        "id": 118,
        "imię": "Felicja",
        "nazwisko": "Tomczyk",
        "płeć": "F",
        "adres": "ul. Kolneńska 9",
        "miasto": "Warszawa"
    },
    {
        "id": 119,
        "imię": "Bohdan",
        "nazwisko": "Adamski",
        "płeć": "M",
        "adres": "ul. Nike 43A",
        "miasto": "Warszawa"
    },
    {
        "id": 120,
        "imię": "Olaf",
        "nazwisko": "Sobczak",
        "płeć": "M",
        "adres": "ul. Popularna 18",
        "miasto": "Warszawa"
    },
    {
        "id": 121,
        "imię": "Donata",
        "nazwisko": "Kamińska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 3",
        "miasto": "Warszawa"
    },
    {
        "id": 122,
        "imię": "Marina",
        "nazwisko": "Łukasik",
        "płeć": "F",
        "adres": "ul. Kleszczowa 9",
        "miasto": "Warszawa"
    },
    {
        "id": 123,
        "imię": "Oskar",
        "nazwisko": "Cieślak",
        "płeć": "M",
        "adres": "ul. Nike 41",
        "miasto": "Warszawa"
    },
    {
        "id": 124,
        "imię": "Liliana",
        "nazwisko": "Jankowska",
        "płeć": "F",
        "adres": "ul. Geologiczna 5",
        "miasto": "Warszawa"
    },
    {
        "id": 125,
        "imię": "Walentyna",
        "nazwisko": "Gołębiewska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 27",
        "miasto": "Warszawa"
    },
    {
        "id": 126,
        "imię": "Grażyna",
        "nazwisko": "Kacprzak",
        "płeć": "F",
        "adres": "ul. Geologiczna 11",
        "miasto": "Warszawa"
    },
    {
        "id": 127,
        "imię": "Bronisława",
        "nazwisko": "Marczak",
        "płeć": "F",
        "adres": "al. Krakowska 231",
        "miasto": "Warszawa"
    },
    {
        "id": 128,
        "imię": "Veronika",
        "nazwisko": "Lipińska",
        "płeć": "F",
        "adres": "ul. Jamińska 14",
        "miasto": "Warszawa"
    },
    {
        "id": 129,
        "imię": "Natallia",
        "nazwisko": "Żukowska",
        "płeć": "F",
        "adres": "ul. Fraszki 10",
        "miasto": "Warszawa"
    },
    {
        "id": 130,
        "imię": "Arleta",
        "nazwisko": "Węgrzyn",
        "płeć": "F",
        "adres": "ul. Jamińska 6A",
        "miasto": "Warszawa"
    },
    {
        "id": 131,
        "imię": "Nadiia",
        "nazwisko": "Chrzanowska",
        "płeć": "F",
        "adres": "ul. Globusowa 19",
        "miasto": "Warszawa"
    },
    {
        "id": 132,
        "imię": "Maciej",
        "nazwisko": "Wróblewski",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 57",
        "miasto": "Warszawa"
    },
    {
        "id": 133,
        "imię": "Alisa",
        "nazwisko": "Borkowska",
        "płeć": "F",
        "adres": "al. Krakowska 2",
        "miasto": "Warszawa"
    },
    {
        "id": 134,
        "imię": "Karyna",
        "nazwisko": "Przybylska",
        "płeć": "F",
        "adres": "ul. Klinkierowa 12",
        "miasto": "Warszawa"
    },
    {
        "id": 135,
        "imię": "Viktoria",
        "nazwisko": "Król",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 51",
        "miasto": "Warszawa"
    },
    {
        "id": 136,
        "imię": "Olha",
        "nazwisko": "Borowska",
        "płeć": "F",
        "adres": "ul. Jantar 7",
        "miasto": "Warszawa"
    },
    {
        "id": 137,
        "imię": "Pamela",
        "nazwisko": "Polak",
        "płeć": "F",
        "adres": "al. Krakowska 4/6",
        "miasto": "Warszawa"
    },
    {
        "id": 138,
        "imię": "Eugenia",
        "nazwisko": "Kwiecień",
        "płeć": "F",
        "adres": "ul. Geologiczna 15",
        "miasto": "Warszawa"
    },
    {
        "id": 139,
        "imię": "Sandra",
        "nazwisko": "Trzcińska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 41C",
        "miasto": "Warszawa"
    },
    {
        "id": 140,
        "imię": "Hildegarda",
        "nazwisko": "Milewska",
        "płeć": "F",
        "adres": "al. Krakowska 16B",
        "miasto": "Warszawa"
    },
    {
        "id": 141,
        "imię": "Vanessa",
        "nazwisko": "Gajewska",
        "płeć": "F",
        "adres": "ul. Janiszowska 27",
        "miasto": "Warszawa"
    },
    {
        "id": 142,
        "imię": "Nadia",
        "nazwisko": "Rzepka",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 25",
        "miasto": "Warszawa"
    },
    {
        "id": 143,
        "imię": "Iga",
        "nazwisko": "Kuczyńska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198S",
        "miasto": "Warszawa"
    },
    {
        "id": 144,
        "imię": "Anetta",
        "nazwisko": "Cieśla",
        "płeć": "F",
        "adres": "ul. Janiszowska 27A",
        "miasto": "Warszawa"
    },
    {
        "id": 145,
        "imię": "Brygida",
        "nazwisko": "Socha",
        "płeć": "F",
        "adres": "ul. Kleszczowa 6C",
        "miasto": "Warszawa"
    },
    {
        "id": 146,
        "imię": "Edmund",
        "nazwisko": "Kucharski",
        "płeć": "M",
        "adres": "ul. Popularna 16",
        "miasto": "Warszawa"
    },
    {
        "id": 147,
        "imię": "Khrystyna",
        "nazwisko": "Janik",
        "płeć": "F",
        "adres": "ul. Galaktyki 13",
        "miasto": "Warszawa"
    },
    {
        "id": 148,
        "imię": "Maryna",
        "nazwisko": "Różycka",
        "płeć": "F",
        "adres": "ul. Jantar 20",
        "miasto": "Warszawa"
    },
    {
        "id": 149,
        "imię": "Lila",
        "nazwisko": "Walczak",
        "płeć": "F",
        "adres": "ul. Galaktyki 29",
        "miasto": "Warszawa"
    },
    {
        "id": 150,
        "imię": "Hanna",
        "nazwisko": "Kulik",
        "płeć": "F",
        "adres": "ul. Janiszowska 28",
        "miasto": "Warszawa"
    },
    {
        "id": 151,
        "imię": "Faustyna",
        "nazwisko": "Owczarek",
        "płeć": "F",
        "adres": "ul. Klinkierowa 6",
        "miasto": "Warszawa"
    },
    {
        "id": 152,
        "imię": "Eva",
        "nazwisko": "Czyż",
        "płeć": "F",
        "adres": "al. Jerozolimskie 200",
        "miasto": "Warszawa"
    },
    {
        "id": 153,
        "imię": "Angelina",
        "nazwisko": "Ptak",
        "płeć": "F",
        "adres": "al. Krakowska 193",
        "miasto": "Warszawa"
    },
    {
        "id": 154,
        "imię": "Yelyzaveta",
        "nazwisko": "Matusiak",
        "płeć": "F",
        "adres": "ul. Janiszowska 21",
        "miasto": "Warszawa"
    },
    {
        "id": 155,
        "imię": "Lucjan",
        "nazwisko": "Szymański",
        "płeć": "M",
        "adres": "ul. Milanowska 22",
        "miasto": "Warszawa"
    },
    {
        "id": 156,
        "imię": "Karolina",
        "nazwisko": "Zięba",
        "płeć": "F",
        "adres": "ul. Kolneńska 13",
        "miasto": "Warszawa"
    },
    {
        "id": 157,
        "imię": "Lucja",
        "nazwisko": "Górecka",
        "płeć": "F",
        "adres": "ul. Janiszowska 14",
        "miasto": "Warszawa"
    },
    {
        "id": 158,
        "imię": "Wacława",
        "nazwisko": "Paluch",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 27A",
        "miasto": "Warszawa"
    },
    {
        "id": 159,
        "imię": "Filip",
        "nazwisko": "Michalski",
        "płeć": "M",
        "adres": "ul. Mikołajska 11A",
        "miasto": "Warszawa"
    },
    {
        "id": 160,
        "imię": "Linda",
        "nazwisko": "Urban",
        "płeć": "F",
        "adres": "ul. Jantar 28A",
        "miasto": "Warszawa"
    },
    {
        "id": 161,
        "imię": "Bartłomiej",
        "nazwisko": "Wróbel",
        "płeć": "M",
        "adres": "ul. Płomyka 38",
        "miasto": "Warszawa"
    },
    {
        "id": 162,
        "imię": "Celina",
        "nazwisko": "Gruszka",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198K",
        "miasto": "Warszawa"
    },
    {
        "id": 163,
        "imię": "Zygmunt",
        "nazwisko": "Leszczyński",
        "płeć": "M",
        "adres": "ul. Globusowa 23",
        "miasto": "Warszawa"
    },
    {
        "id": 164,
        "imię": "Dobrosława",
        "nazwisko": "Filipiak",
        "płeć": "F",
        "adres": "al. Krakowska 222",
        "miasto": "Warszawa"
    },
    {
        "id": 165,
        "imię": "Serhii",
        "nazwisko": "Chojnacki",
        "płeć": "M",
        "adres": "ul. Mikołajska 38B",
        "miasto": "Warszawa"
    },
    {
        "id": 166,
        "imię": "Nataliia",
        "nazwisko": "Niewiadomska",
        "płeć": "F",
        "adres": "ul. Kolneńska 6B",
        "miasto": "Warszawa"
    },
    {
        "id": 167,
        "imię": "Eryk",
        "nazwisko": "Wiśniewski",
        "płeć": "M",
        "adres": "ul. Józefa Ignacego Kraszewskiego 20A",
        "miasto": "Warszawa"
    },
    {
        "id": 168,
        "imię": "Weronika",
        "nazwisko": "Szewczyk",
        "płeć": "F",
        "adres": "al. Krakowska 2A",
        "miasto": "Warszawa"
    },
    {
        "id": 169,
        "imię": "Adriana",
        "nazwisko": "Matysiak",
        "płeć": "F",
        "adres": "ul. Globusowa 44",
        "miasto": "Warszawa"
    },
    {
        "id": 170,
        "imię": "Mikołaj",
        "nazwisko": "Domański",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 25",
        "miasto": "Warszawa"
    },
    {
        "id": 171,
        "imię": "Valentyna",
        "nazwisko": "Andrzejewska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 26B",
        "miasto": "Warszawa"
    },
    {
        "id": 172,
        "imię": "Nela",
        "nazwisko": "Bartczak",
        "płeć": "F",
        "adres": "ul. Janiszowska 19",
        "miasto": "Warszawa"
    },
    {
        "id": 173,
        "imię": "Dominika",
        "nazwisko": "Szulc",
        "płeć": "F",
        "adres": "ul. Janiszowska 24",
        "miasto": "Warszawa"
    },
    {
        "id": 174,
        "imię": "Kornelia",
        "nazwisko": "Przybysz",
        "płeć": "F",
        "adres": "ul. Jantar 26",
        "miasto": "Warszawa"
    },
    {
        "id": 175,
        "imię": "Tola",
        "nazwisko": "Bieniek",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 28",
        "miasto": "Warszawa"
    },
    {
        "id": 176,
        "imię": "Bożena",
        "nazwisko": "Kwiatkowska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 184A",
        "miasto": "Warszawa"
    },
    {
        "id": 177,
        "imię": "Teodozja",
        "nazwisko": "Kasprzyk",
        "płeć": "F",
        "adres": "al. Krakowska 289",
        "miasto": "Warszawa"
    },
    {
        "id": 178,
        "imię": "Lesia",
        "nazwisko": "Pawlak",
        "płeć": "F",
        "adres": "ul. Kolneńska 14",
        "miasto": "Warszawa"
    },
    {
        "id": 179,
        "imię": "Bronisław",
        "nazwisko": "Kaczmarek",
        "płeć": "M",
        "adres": "al. Krakowska 102",
        "miasto": "Warszawa"
    },
    {
        "id": 180,
        "imię": "Patrycja",
        "nazwisko": "Stachowiak",
        "płeć": "F",
        "adres": "ul. Fraszki 20",
        "miasto": "Warszawa"
    },
    {
        "id": 181,
        "imię": "Wanda",
        "nazwisko": "Mazur",
        "płeć": "F",
        "adres": "ul. Kleszczowa 17E",
        "miasto": "Warszawa"
    },
    {
        "id": 182,
        "imię": "Magda",
        "nazwisko": "Grzegorczyk",
        "płeć": "F",
        "adres": "ul. Kleszczowa 5A",
        "miasto": "Warszawa"
    },
    {
        "id": 183,
        "imię": "Natasza",
        "nazwisko": "Długosz",
        "płeć": "F",
        "adres": "ul. Geologiczna 4",
        "miasto": "Warszawa"
    },
    {
        "id": 184,
        "imię": "Eliza",
        "nazwisko": "Górna",
        "płeć": "F",
        "adres": "ul. Geologiczna 5A",
        "miasto": "Warszawa"
    },
    {
        "id": 185,
        "imię": "Helga",
        "nazwisko": "Turek",
        "płeć": "F",
        "adres": "ul. Kleszczowa 14",
        "miasto": "Warszawa"
    },
    {
        "id": 186,
        "imię": "Zbigniew",
        "nazwisko": "Zięba",
        "płeć": "M",
        "adres": "ul. Mikołajska 11",
        "miasto": "Warszawa"
    },
    {
        "id": 187,
        "imię": "Alan",
        "nazwisko": "Zalewski",
        "płeć": "M",
        "adres": "ul. Mikołajska 15",
        "miasto": "Warszawa"
    },
    {
        "id": 188,
        "imię": "Ala",
        "nazwisko": "Małek",
        "płeć": "F",
        "adres": "ul. Jantar 15",
        "miasto": "Warszawa"
    },
    {
        "id": 189,
        "imię": "Natalia",
        "nazwisko": "Niemiec",
        "płeć": "F",
        "adres": "al. Krakowska 155",
        "miasto": "Warszawa"
    },
    {
        "id": 190,
        "imię": "Agnieszka",
        "nazwisko": "Gajda",
        "płeć": "F",
        "adres": "al. Jerozolimskie 204",
        "miasto": "Warszawa"
    },
    {
        "id": 191,
        "imię": "Alexandra",
        "nazwisko": "Wesołowska",
        "płeć": "F",
        "adres": "al. Krakowska 177",
        "miasto": "Warszawa"
    },
    {
        "id": 192,
        "imię": "Aldona",
        "nazwisko": "Kurek",
        "płeć": "F",
        "adres": "ul. Kleszczowa 28",
        "miasto": "Warszawa"
    },
    {
        "id": 193,
        "imię": "Honorata",
        "nazwisko": "Lewicka",
        "płeć": "F",
        "adres": "ul. Kleszczowa 8",
        "miasto": "Warszawa"
    },
    {
        "id": 194,
        "imię": "Szymon",
        "nazwisko": "Witkowski",
        "płeć": "M",
        "adres": "ul. Płomyka 11B",
        "miasto": "Warszawa"
    },
    {
        "id": 195,
        "imię": "Noemi",
        "nazwisko": "Buczek",
        "płeć": "F",
        "adres": "al. Krakowska 113A",
        "miasto": "Warszawa"
    },
    {
        "id": 196,
        "imię": "Maria",
        "nazwisko": "Kaczyńska",
        "płeć": "F",
        "adres": "al. Krakowska 107",
        "miasto": "Warszawa"
    },
    {
        "id": 197,
        "imię": "Volha",
        "nazwisko": "Czarnecka",
        "płeć": "F",
        "adres": "ul. Kolneńska 3",
        "miasto": "Warszawa"
    },
    {
        "id": 198,
        "imię": "Anastazja",
        "nazwisko": "Gil",
        "płeć": "F",
        "adres": "al. Krakowska 121",
        "miasto": "Warszawa"
    },
    {
        "id": 199,
        "imię": "Eryka",
        "nazwisko": "Grzelak",
        "płeć": "F",
        "adres": "ul. Kleszczowa 3",
        "miasto": "Warszawa"
    },
    {
        "id": 200,
        "imię": "Wojciech",
        "nazwisko": "Kowalik",
        "płeć": "M",
        "adres": "al. Krakowska 100A",
        "miasto": "Warszawa"
    },
    {
        "id": 201,
        "imię": "Wiera",
        "nazwisko": "Kucharska",
        "płeć": "F",
        "adres": "ul. Fraszki 5",
        "miasto": "Warszawa"
    },
    {
        "id": 202,
        "imię": "Amanda",
        "nazwisko": "Zawadzka",
        "płeć": "F",
        "adres": "ul. Kleszczowa 3A",
        "miasto": "Warszawa"
    },
    {
        "id": 203,
        "imię": "Oktawia",
        "nazwisko": "Szymczyk",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 19",
        "miasto": "Warszawa"
    },
    {
        "id": 204,
        "imię": "Aurelia",
        "nazwisko": "Konopka",
        "płeć": "F",
        "adres": "ul. Kleszczowa 43",
        "miasto": "Warszawa"
    },
    {
        "id": 205,
        "imię": "Olivia",
        "nazwisko": "Piekarska",
        "płeć": "F",
        "adres": "al. Krakowska 19",
        "miasto": "Warszawa"
    },
    {
        "id": 206,
        "imię": "Anastasiia",
        "nazwisko": "Maćkowiak",
        "płeć": "F",
        "adres": "ul. Janiszowska 13",
        "miasto": "Warszawa"
    },
    {
        "id": 207,
        "imię": "Artur",
        "nazwisko": "Kurek",
        "płeć": "M",
        "adres": "ul. Bolesława Gidzińskiego 1A",
        "miasto": "Warszawa"
    },
    {
        "id": 208,
        "imię": "Gabriela",
        "nazwisko": "Woźniak",
        "płeć": "F",
        "adres": "ul. Globusowa 5",
        "miasto": "Warszawa"
    },
    {
        "id": 209,
        "imię": "Karina",
        "nazwisko": "Frączek",
        "płeć": "F",
        "adres": "ul. Jakobinów 37",
        "miasto": "Warszawa"
    },
    {
        "id": 210,
        "imię": "Wioletta",
        "nazwisko": "Hajduk",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 33",
        "miasto": "Warszawa"
    },
    {
        "id": 211,
        "imię": "Borys",
        "nazwisko": "Marciniak",
        "płeć": "M",
        "adres": "ul. Płomyka 11A",
        "miasto": "Warszawa"
    },
    {
        "id": 212,
        "imię": "Robert",
        "nazwisko": "Brzozowski",
        "płeć": "M",
        "adres": "ul. Nike 47",
        "miasto": "Warszawa"
    },
    {
        "id": 213,
        "imię": "Anzhela",
        "nazwisko": "Jakubowska",
        "płeć": "F",
        "adres": "ul. Galaktyki 15",
        "miasto": "Warszawa"
    },
    {
        "id": 214,
        "imię": "Mariusz",
        "nazwisko": "Duda",
        "płeć": "M",
        "adres": "ul. Popularna 14",
        "miasto": "Warszawa"
    },
    {
        "id": 215,
        "imię": "Waldemar",
        "nazwisko": "Rutkowski",
        "płeć": "M",
        "adres": "ul. Popularna 24",
        "miasto": "Warszawa"
    },
    {
        "id": 216,
        "imię": "Lilianna",
        "nazwisko": "Wilk",
        "płeć": "F",
        "adres": "ul. Kleszczowa 8A",
        "miasto": "Warszawa"
    },
    {
        "id": 217,
        "imię": "Feliksa",
        "nazwisko": "Tomaszewska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 34",
        "miasto": "Warszawa"
    },
    {
        "id": 218,
        "imię": "Inna",
        "nazwisko": "Strzelecka",
        "płeć": "F",
        "adres": "ul. Kleszczowa 18",
        "miasto": "Warszawa"
    },
    {
        "id": 219,
        "imię": "Ruta",
        "nazwisko": "Grzybowska",
        "płeć": "F",
        "adres": "ul. Jamińska 12",
        "miasto": "Warszawa"
    },
    {
        "id": 220,
        "imię": "Alicja",
        "nazwisko": "Stępień",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 54",
        "miasto": "Warszawa"
    },
    {
        "id": 221,
        "imię": "Michelle",
        "nazwisko": "Kaczmarczyk",
        "płeć": "F",
        "adres": "ul. Jantar 6",
        "miasto": "Warszawa"
    },
    {
        "id": 222,
        "imię": "Olga",
        "nazwisko": "Maliszewska",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 2",
        "miasto": "Warszawa"
    },
    {
        "id": 223,
        "imię": "Ilona",
        "nazwisko": "Kowalczyk",
        "płeć": "F",
        "adres": "al. Krakowska 236",
        "miasto": "Warszawa"
    },
    {
        "id": 224,
        "imię": "Sophie",
        "nazwisko": "Dziedzic",
        "płeć": "F",
        "adres": "ul. Geologiczna 3",
        "miasto": "Warszawa"
    },
    {
        "id": 225,
        "imię": "Andrea",
        "nazwisko": "Klimczak",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 20",
        "miasto": "Warszawa"
    },
    {
        "id": 226,
        "imię": "Darya",
        "nazwisko": "Cichocka",
        "płeć": "F",
        "adres": "al. Jerozolimskie 202",
        "miasto": "Warszawa"
    },
    {
        "id": 227,
        "imię": "Bogna",
        "nazwisko": "Góra",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 26",
        "miasto": "Warszawa"
    },
    {
        "id": 228,
        "imię": "Zuzanna",
        "nazwisko": "Leśniewska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 10",
        "miasto": "Warszawa"
    },
    {
        "id": 229,
        "imię": "Nikola",
        "nazwisko": "Makowska",
        "płeć": "F",
        "adres": "ul. Geologiczna 12A",
        "miasto": "Warszawa"
    },
    {
        "id": 230,
        "imię": "Aleksander",
        "nazwisko": "Wojciechowski",
        "płeć": "M",
        "adres": "ul. Nike 43",
        "miasto": "Warszawa"
    },
    {
        "id": 231,
        "imię": "Gabriel",
        "nazwisko": "Szewczyk",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 4A",
        "miasto": "Warszawa"
    },
    {
        "id": 232,
        "imię": "Vasyl",
        "nazwisko": "Wasilewski",
        "płeć": "M",
        "adres": "ul. Nike 38",
        "miasto": "Warszawa"
    },
    {
        "id": 233,
        "imię": "Przemysław",
        "nazwisko": "Musiał",
        "płeć": "M",
        "adres": "ul. Mikołajska 38C",
        "miasto": "Warszawa"
    },
    {
        "id": 234,
        "imię": "Cezary",
        "nazwisko": "Kania",
        "płeć": "M",
        "adres": "ul. Nike 22",
        "miasto": "Warszawa"
    },
    {
        "id": 235,
        "imię": "Edwarda",
        "nazwisko": "Gąsior",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198P",
        "miasto": "Warszawa"
    },
    {
        "id": 236,
        "imię": "Irena",
        "nazwisko": "Sroka",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 15",
        "miasto": "Warszawa"
    },
    {
        "id": 237,
        "imię": "Irmina",
        "nazwisko": "Słowik",
        "płeć": "F",
        "adres": "ul. Jantar 14",
        "miasto": "Warszawa"
    },
    {
        "id": 238,
        "imię": "Leon",
        "nazwisko": "Kozioł",
        "płeć": "M",
        "adres": "ul. Mikołajska 29",
        "miasto": "Warszawa"
    },
    {
        "id": 239,
        "imię": "Tamara",
        "nazwisko": "Kaczor",
        "płeć": "F",
        "adres": "ul. Jantar 32",
        "miasto": "Warszawa"
    },
    {
        "id": 240,
        "imię": "Mirella",
        "nazwisko": "Maciejewska",
        "płeć": "F",
        "adres": "ul. Jantar 28",
        "miasto": "Warszawa"
    },
    {
        "id": 241,
        "imię": "Ana",
        "nazwisko": "Kozieł",
        "płeć": "F",
        "adres": "ul. Kleszczowa 39",
        "miasto": "Warszawa"
    },
    {
        "id": 242,
        "imię": "Estera",
        "nazwisko": "Pietrzak",
        "płeć": "F",
        "adres": "al. Jerozolimskie 178A",
        "miasto": "Warszawa"
    },
    {
        "id": 243,
        "imię": "Julita",
        "nazwisko": "Marzec",
        "płeć": "F",
        "adres": "ul. Jantar 19",
        "miasto": "Warszawa"
    },
    {
        "id": 244,
        "imię": "Marietta",
        "nazwisko": "Piotrowska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 8A",
        "miasto": "Warszawa"
    },
    {
        "id": 245,
        "imię": "Krystian",
        "nazwisko": "Przybylski",
        "płeć": "M",
        "adres": "ul. Płomyka 40",
        "miasto": "Warszawa"
    },
    {
        "id": 246,
        "imię": "Jaśmina",
        "nazwisko": "Bednarz",
        "płeć": "F",
        "adres": "al. Krakowska 115A",
        "miasto": "Warszawa"
    },
    {
        "id": 247,
        "imię": "Teofila",
        "nazwisko": "Kulesza",
        "płeć": "F",
        "adres": "ul. Jantar 30",
        "miasto": "Warszawa"
    },
    {
        "id": 248,
        "imię": "Mariya",
        "nazwisko": "Podgórska",
        "płeć": "F",
        "adres": "ul. Janiszowska 19A",
        "miasto": "Warszawa"
    },
    {
        "id": 249,
        "imię": "Galyna",
        "nazwisko": "Adamczyk",
        "płeć": "F",
        "adres": "al. Krakowska 206",
        "miasto": "Warszawa"
    },
    {
        "id": 250,
        "imię": "Dariia",
        "nazwisko": "Osińska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 17C",
        "miasto": "Warszawa"
    },
    {
        "id": 251,
        "imię": "Emilia",
        "nazwisko": "Rybak",
        "płeć": "F",
        "adres": "al. Jerozolimskie 172",
        "miasto": "Warszawa"
    },
    {
        "id": 252,
        "imię": "Maja",
        "nazwisko": "Rak",
        "płeć": "F",
        "adres": "ul. Globusowa 16",
        "miasto": "Warszawa"
    },
    {
        "id": 253,
        "imię": "Igor",
        "nazwisko": "Jakubowski",
        "płeć": "M",
        "adres": "ul. Mikołajska 39",
        "miasto": "Warszawa"
    },
    {
        "id": 254,
        "imię": "Joanna",
        "nazwisko": "Morawska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 195A",
        "miasto": "Warszawa"
    },
    {
        "id": 255,
        "imię": "Oleksandra",
        "nazwisko": "Rogowska",
        "płeć": "F",
        "adres": "ul. Janiszowska 9B",
        "miasto": "Warszawa"
    },
    {
        "id": 256,
        "imię": "Ola",
        "nazwisko": "Rutkowska",
        "płeć": "F",
        "adres": "ul. Galaktyki 31",
        "miasto": "Warszawa"
    },
    {
        "id": 257,
        "imię": "Sylwia",
        "nazwisko": "Witczak",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 24",
        "miasto": "Warszawa"
    },
    {
        "id": 258,
        "imię": "Kinga",
        "nazwisko": "Bąk",
        "płeć": "F",
        "adres": "ul. Kolneńska 12",
        "miasto": "Warszawa"
    },
    {
        "id": 259,
        "imię": "Ada",
        "nazwisko": "Olejniczak",
        "płeć": "F",
        "adres": "ul. Janiszowska 9A",
        "miasto": "Warszawa"
    },
    {
        "id": 260,
        "imię": "Stanisław",
        "nazwisko": "Wesołowski",
        "płeć": "M",
        "adres": "ul. Nike 30",
        "miasto": "Warszawa"
    },
    {
        "id": 261,
        "imię": "Liliia",
        "nazwisko": "Pawłowska",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 39",
        "miasto": "Warszawa"
    },
    {
        "id": 262,
        "imię": "Eulalia",
        "nazwisko": "Ratajczak",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 39",
        "miasto": "Warszawa"
    },
    {
        "id": 263,
        "imię": "Tetiana",
        "nazwisko": "Wieczorek",
        "płeć": "F",
        "adres": "al. Krakowska 38",
        "miasto": "Warszawa"
    },
    {
        "id": 264,
        "imię": "Bernadeta",
        "nazwisko": "Cieślak",
        "płeć": "F",
        "adres": "ul. Fraszki 3",
        "miasto": "Warszawa"
    },
    {
        "id": 265,
        "imię": "Bernard",
        "nazwisko": "Mazur",
        "płeć": "M",
        "adres": "ul. Bolesława Gidzińskiego 1B",
        "miasto": "Warszawa"
    },
    {
        "id": 266,
        "imię": "Emma",
        "nazwisko": "Jaworska",
        "płeć": "F",
        "adres": "ul. Jantar 10",
        "miasto": "Warszawa"
    },
    {
        "id": 267,
        "imię": "Roma",
        "nazwisko": "Cieślik",
        "płeć": "F",
        "adres": "ul. Kleszczowa 37A",
        "miasto": "Warszawa"
    },
    {
        "id": 268,
        "imię": "Ivanna",
        "nazwisko": "Wasilewska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 31A",
        "miasto": "Warszawa"
    },
    {
        "id": 269,
        "imię": "Inga",
        "nazwisko": "Olszewska",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 5",
        "miasto": "Warszawa"
    },
    {
        "id": 270,
        "imię": "Elfryda",
        "nazwisko": "Siwek",
        "płeć": "F",
        "adres": "ul. Globusowa 7",
        "miasto": "Warszawa"
    },
    {
        "id": 271,
        "imię": "Mariana",
        "nazwisko": "Smolińska",
        "płeć": "F",
        "adres": "al. Krakowska 43",
        "miasto": "Warszawa"
    },
    {
        "id": 272,
        "imię": "Yurii",
        "nazwisko": "Wilk",
        "płeć": "M",
        "adres": "ul. Płomyka 1",
        "miasto": "Warszawa"
    },
    {
        "id": 273,
        "imię": "Anhelina",
        "nazwisko": "Żak",
        "płeć": "F",
        "adres": "ul. Janiszowska 17A",
        "miasto": "Warszawa"
    },
    {
        "id": 274,
        "imię": "Kamil",
        "nazwisko": "Pawlak",
        "płeć": "M",
        "adres": "ul. Popularna 43A",
        "miasto": "Warszawa"
    },
    {
        "id": 275,
        "imię": "Józefa",
        "nazwisko": "Klimek",
        "płeć": "F",
        "adres": "ul. Janiszowska 3",
        "miasto": "Warszawa"
    },
    {
        "id": 276,
        "imię": "Bolesław",
        "nazwisko": "Wysocki",
        "płeć": "M",
        "adres": "ul. Popularna 23",
        "miasto": "Warszawa"
    },
    {
        "id": 277,
        "imię": "Greta",
        "nazwisko": "Głowacka",
        "płeć": "F",
        "adres": "ul. Klinkierowa 8",
        "miasto": "Warszawa"
    },
    {
        "id": 278,
        "imię": "Julian",
        "nazwisko": "Zawadzki",
        "płeć": "M",
        "adres": "ul. Nike 24",
        "miasto": "Warszawa"
    },
    {
        "id": 279,
        "imię": "Kateryna",
        "nazwisko": "Zając",
        "płeć": "F",
        "adres": "al. Jerozolimskie 213",
        "miasto": "Warszawa"
    },
    {
        "id": 280,
        "imię": "Katsiaryna",
        "nazwisko": "Kruk",
        "płeć": "F",
        "adres": "ul. Kolneńska 17",
        "miasto": "Warszawa"
    },
    {
        "id": 281,
        "imię": "Elena",
        "nazwisko": "Kurowska",
        "płeć": "F",
        "adres": "ul. Kolneńska 16",
        "miasto": "Warszawa"
    },
    {
        "id": 282,
        "imię": "Irina",
        "nazwisko": "Szczepaniak",
        "płeć": "F",
        "adres": "ul. Janiszowska 25",
        "miasto": "Warszawa"
    },
    {
        "id": 283,
        "imię": "Inez",
        "nazwisko": "Majchrzak",
        "płeć": "F",
        "adres": "ul. Geologiczna 10",
        "miasto": "Warszawa"
    },
    {
        "id": 284,
        "imię": "Matylda",
        "nazwisko": "Włodarczyk",
        "płeć": "F",
        "adres": "ul. Galaktyki 17",
        "miasto": "Warszawa"
    },
    {
        "id": 285,
        "imię": "Marzena",
        "nazwisko": "Janiszewska",
        "płeć": "F",
        "adres": "ul. Geologiczna 12",
        "miasto": "Warszawa"
    },
    {
        "id": 286,
        "imię": "Ludmiła",
        "nazwisko": "Mikołajczak",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 38",
        "miasto": "Warszawa"
    },
    {
        "id": 287,
        "imię": "Mieczysław",
        "nazwisko": "Adamczyk",
        "płeć": "M",
        "adres": "ul. Nike 9",
        "miasto": "Warszawa"
    },
    {
        "id": 288,
        "imię": "Halyna",
        "nazwisko": "Musiał",
        "płeć": "F",
        "adres": "ul. Kleszczowa 22",
        "miasto": "Warszawa"
    },
    {
        "id": 289,
        "imię": "Yana",
        "nazwisko": "Piątek",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 22",
        "miasto": "Warszawa"
    },
    {
        "id": 290,
        "imię": "Bogumiła",
        "nazwisko": "Marcinkowska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 29",
        "miasto": "Warszawa"
    },
    {
        "id": 291,
        "imię": "Lara",
        "nazwisko": "Sobolewska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 25",
        "miasto": "Warszawa"
    },
    {
        "id": 292,
        "imię": "Bernardyna",
        "nazwisko": "Janiak",
        "płeć": "F",
        "adres": "al. Jerozolimskie 211",
        "miasto": "Warszawa"
    },
    {
        "id": 293,
        "imię": "Bernarda",
        "nazwisko": "Szczepańska",
        "płeć": "F",
        "adres": "ul. Galaktyki 1",
        "miasto": "Warszawa"
    },
    {
        "id": 294,
        "imię": "Marianna",
        "nazwisko": "Wróblewska",
        "płeć": "F",
        "adres": "ul. Jantar 4",
        "miasto": "Warszawa"
    },
    {
        "id": 295,
        "imię": "Oliwia",
        "nazwisko": "Rogalska",
        "płeć": "F",
        "adres": "ul. Fraszki 14",
        "miasto": "Warszawa"
    },
    {
        "id": 296,
        "imię": "Ryszarda",
        "nazwisko": "Wilczyńska",
        "płeć": "F",
        "adres": "ul. Kolneńska 7",
        "miasto": "Warszawa"
    },
    {
        "id": 297,
        "imię": "Natalie",
        "nazwisko": "Nowak",
        "płeć": "F",
        "adres": "ul. Globusowa 27",
        "miasto": "Warszawa"
    },
    {
        "id": 298,
        "imię": "Tadeusz",
        "nazwisko": "Kopeć",
        "płeć": "M",
        "adres": "ul. Płomyka 22",
        "miasto": "Warszawa"
    },
    {
        "id": 299,
        "imię": "Samanta",
        "nazwisko": "Dąbrowska",
        "płeć": "F",
        "adres": "ul. Janiszowska 16",
        "miasto": "Warszawa"
    },
    {
        "id": 300,
        "imię": "Polina",
        "nazwisko": "Antczak",
        "płeć": "F",
        "adres": "ul. Galaktyki 3",
        "miasto": "Warszawa"
    },
    {
        "id": 301,
        "imię": "Victoria",
        "nazwisko": "Gołębiowska",
        "płeć": "F",
        "adres": "al. Krakowska 115",
        "miasto": "Warszawa"
    },
    {
        "id": 302,
        "imię": "Iza",
        "nazwisko": "Janicka",
        "płeć": "F",
        "adres": "ul. Kolneńska 8",
        "miasto": "Warszawa"
    },
    {
        "id": 303,
        "imię": "Ksawery",
        "nazwisko": "Kubiak",
        "płeć": "M",
        "adres": "ul. Nike 34/36",
        "miasto": "Warszawa"
    },
    {
        "id": 304,
        "imię": "Tymoteusz",
        "nazwisko": "Nowacki",
        "płeć": "M",
        "adres": "ul. Józefa Ignacego Kraszewskiego 11A",
        "miasto": "Warszawa"
    },
    {
        "id": 305,
        "imię": "Tymon",
        "nazwisko": "Majewski",
        "płeć": "M",
        "adres": "ul. Popularna 34A",
        "miasto": "Warszawa"
    },
    {
        "id": 306,
        "imię": "Dominik",
        "nazwisko": "Malinowski",
        "płeć": "M",
        "adres": "ul. Popularna 31",
        "miasto": "Warszawa"
    },
    {
        "id": 307,
        "imię": "Zinaida",
        "nazwisko": "Białek",
        "płeć": "F",
        "adres": "al. Krakowska 226",
        "miasto": "Warszawa"
    },
    {
        "id": 308,
        "imię": "Agata",
        "nazwisko": "Sadowska",
        "płeć": "F",
        "adres": "ul. Jantar 22",
        "miasto": "Warszawa"
    },
    {
        "id": 309,
        "imię": "Livia",
        "nazwisko": "Markiewicz",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 2",
        "miasto": "Warszawa"
    },
    {
        "id": 310,
        "imię": "Michał",
        "nazwisko": "Jasiński",
        "płeć": "M",
        "adres": "ul. Płomyka 58",
        "miasto": "Warszawa"
    },
    {
        "id": 311,
        "imię": "Lilia",
        "nazwisko": "Brzezińska",
        "płeć": "F",
        "adres": "ul. Janiszowska 11",
        "miasto": "Warszawa"
    },
    {
        "id": 312,
        "imię": "Izabella",
        "nazwisko": "Kozłowska",
        "płeć": "F",
        "adres": "al. Krakowska 25",
        "miasto": "Warszawa"
    },
    {
        "id": 313,
        "imię": "Mirosław",
        "nazwisko": "Pawlik",
        "płeć": "M",
        "adres": "ul. Popularna 55",
        "miasto": "Warszawa"
    },
    {
        "id": 314,
        "imię": "Sviatlana",
        "nazwisko": "Śliwa",
        "płeć": "F",
        "adres": "ul. Janiszowska 12A",
        "miasto": "Warszawa"
    },
    {
        "id": 315,
        "imię": "Valeriia",
        "nazwisko": "Nowicka",
        "płeć": "F",
        "adres": "al. Krakowska 16A",
        "miasto": "Warszawa"
    },
    {
        "id": 316,
        "imię": "Klara",
        "nazwisko": "Banasiak",
        "płeć": "F",
        "adres": "ul. Janiszowska 18",
        "miasto": "Warszawa"
    },
    {
        "id": 317,
        "imię": "Vita",
        "nazwisko": "Łuczak",
        "płeć": "F",
        "adres": "ul. Fraszki 21",
        "miasto": "Warszawa"
    },
    {
        "id": 318,
        "imię": "Bożenna",
        "nazwisko": "Małecka",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 31",
        "miasto": "Warszawa"
    },
    {
        "id": 319,
        "imię": "Adrianna",
        "nazwisko": "Trojanowska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 4",
        "miasto": "Warszawa"
    },
    {
        "id": 320,
        "imię": "Wacław",
        "nazwisko": "Lewandowski",
        "płeć": "M",
        "adres": "ul. Popularna 64",
        "miasto": "Warszawa"
    },
    {
        "id": 321,
        "imię": "Alena",
        "nazwisko": "Pałka",
        "płeć": "F",
        "adres": "ul. Krzysztofa Kolumba 21",
        "miasto": "Warszawa"
    },
    {
        "id": 322,
        "imię": "Jan",
        "nazwisko": "Grabowski",
        "płeć": "M",
        "adres": "ul. Nike 11",
        "miasto": "Warszawa"
    },
    {
        "id": 323,
        "imię": "Edward",
        "nazwisko": "Mikołajczyk",
        "płeć": "M",
        "adres": "ul. Płomyka 26",
        "miasto": "Warszawa"
    },
    {
        "id": 324,
        "imię": "Maryla",
        "nazwisko": "Gawron",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 46",
        "miasto": "Warszawa"
    },
    {
        "id": 325,
        "imię": "Albina",
        "nazwisko": "Stasiak",
        "płeć": "F",
        "adres": "ul. Globusowa 40",
        "miasto": "Warszawa"
    },
    {
        "id": 326,
        "imię": "Natan",
        "nazwisko": "Pawłowski",
        "płeć": "M",
        "adres": "ul. Popularna 47",
        "miasto": "Warszawa"
    },
    {
        "id": 327,
        "imię": "Kajetan",
        "nazwisko": "Orłowski",
        "płeć": "M",
        "adres": "ul. Józefa Ignacego Kraszewskiego 22",
        "miasto": "Warszawa"
    },
    {
        "id": 328,
        "imię": "Jolanta",
        "nazwisko": "Lisowska",
        "płeć": "F",
        "adres": "ul. Janiszowska 8",
        "miasto": "Warszawa"
    },
    {
        "id": 329,
        "imię": "Adela",
        "nazwisko": "Kalinowska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 200A",
        "miasto": "Warszawa"
    },
    {
        "id": 330,
        "imię": "Wiktor",
        "nazwisko": "Makowski",
        "płeć": "M",
        "adres": "ul. Popularna 72",
        "miasto": "Warszawa"
    },
    {
        "id": 331,
        "imię": "Ivan",
        "nazwisko": "Walczak",
        "płeć": "M",
        "adres": "ul. Mikołajska 13",
        "miasto": "Warszawa"
    },
    {
        "id": 332,
        "imię": "Remigiusz",
        "nazwisko": "Sawicki",
        "płeć": "M",
        "adres": "ul. Popularna 29",
        "miasto": "Warszawa"
    },
    {
        "id": 333,
        "imię": "Cecylia",
        "nazwisko": "Piątkowska",
        "płeć": "F",
        "adres": "al. Krakowska 271",
        "miasto": "Warszawa"
    },
    {
        "id": 334,
        "imię": "Antonia",
        "nazwisko": "Czerwińska",
        "płeć": "F",
        "adres": "al. Krakowska 93",
        "miasto": "Warszawa"
    },
    {
        "id": 335,
        "imię": "Olena",
        "nazwisko": "Stankiewicz",
        "płeć": "F",
        "adres": "ul. Kleszczowa 7",
        "miasto": "Warszawa"
    },
    {
        "id": 336,
        "imię": "Władysława",
        "nazwisko": "Krupa",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 9",
        "miasto": "Warszawa"
    },
    {
        "id": 337,
        "imię": "Leokadia",
        "nazwisko": "Czajka",
        "płeć": "F",
        "adres": "al. Krakowska 110/114",
        "miasto": "Warszawa"
    },
    {
        "id": 338,
        "imię": "Kaja",
        "nazwisko": "Świątek",
        "płeć": "F",
        "adres": "ul. Kleszczowa 41E",
        "miasto": "Warszawa"
    },
    {
        "id": 339,
        "imię": "Paula",
        "nazwisko": "Michałowska",
        "płeć": "F",
        "adres": "ul. Janiszowska 23",
        "miasto": "Warszawa"
    },
    {
        "id": 340,
        "imię": "Daniela",
        "nazwisko": "Kucharczyk",
        "płeć": "F",
        "adres": "ul. Kolneńska 10",
        "miasto": "Warszawa"
    },
    {
        "id": 341,
        "imię": "Viktoriia",
        "nazwisko": "Zarzycka",
        "płeć": "F",
        "adres": "ul. Kolneńska 15",
        "miasto": "Warszawa"
    },
    {
        "id": 342,
        "imię": "Ignacy",
        "nazwisko": "Tomczyk",
        "płeć": "M",
        "adres": "ul. Nike 35",
        "miasto": "Warszawa"
    },
    {
        "id": 343,
        "imię": "Vira",
        "nazwisko": "Skiba",
        "płeć": "F",
        "adres": "ul. Fraszki 29",
        "miasto": "Warszawa"
    },
    {
        "id": 344,
        "imię": "Luiza",
        "nazwisko": "Skrzypczak",
        "płeć": "F",
        "adres": "al. Krakowska 131",
        "miasto": "Warszawa"
    },
    {
        "id": 345,
        "imię": "Gertruda",
        "nazwisko": "Kasprzak",
        "płeć": "F",
        "adres": "ul. Kleszczowa 33",
        "miasto": "Warszawa"
    },
    {
        "id": 346,
        "imię": "Romuald",
        "nazwisko": "Chmielewski",
        "płeć": "M",
        "adres": "ul. Nike 26",
        "miasto": "Warszawa"
    },
    {
        "id": 347,
        "imię": "Milena",
        "nazwisko": "Witek",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 6",
        "miasto": "Warszawa"
    },
    {
        "id": 348,
        "imię": "Paweł",
        "nazwisko": "Mucha",
        "płeć": "M",
        "adres": "ul. Nike 6",
        "miasto": "Warszawa"
    },
    {
        "id": 349,
        "imię": "Tatiana",
        "nazwisko": "Stefańska",
        "płeć": "F",
        "adres": "ul. Krzysztofa Kolumba 17",
        "miasto": "Warszawa"
    },
    {
        "id": 350,
        "imię": "Malina",
        "nazwisko": "Czajkowska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 2A",
        "miasto": "Warszawa"
    },
    {
        "id": 351,
        "imię": "Czesław",
        "nazwisko": "Ziółkowski",
        "płeć": "M",
        "adres": "ul. Nike 16",
        "miasto": "Warszawa"
    },
    {
        "id": 352,
        "imię": "Gizela",
        "nazwisko": "Krzemińska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 23",
        "miasto": "Warszawa"
    },
    {
        "id": 353,
        "imię": "Krzysztof",
        "nazwisko": "Michalak",
        "płeć": "M",
        "adres": "ul. Milanowska 14",
        "miasto": "Warszawa"
    },
    {
        "id": 354,
        "imię": "Franciszka",
        "nazwisko": "Lewandowska",
        "płeć": "F",
        "adres": "al. Krakowska 157",
        "miasto": "Warszawa"
    },
    {
        "id": 355,
        "imię": "Romualda",
        "nazwisko": "Kozioł",
        "płeć": "F",
        "adres": "al. Krakowska 216",
        "miasto": "Warszawa"
    },
    {
        "id": 356,
        "imię": "Ewelina",
        "nazwisko": "Żebrowska",
        "płeć": "F",
        "adres": "al. Krakowska 240/242",
        "miasto": "Warszawa"
    },
    {
        "id": 357,
        "imię": "Marcin",
        "nazwisko": "Szulc",
        "płeć": "M",
        "adres": "al. Krakowska 106",
        "miasto": "Warszawa"
    },
    {
        "id": 358,
        "imię": "Marcel",
        "nazwisko": "Nowakowski",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 8",
        "miasto": "Warszawa"
    },
    {
        "id": 359,
        "imię": "Liwia",
        "nazwisko": "Radomska",
        "płeć": "F",
        "adres": "al. Krakowska 123",
        "miasto": "Warszawa"
    },
    {
        "id": 360,
        "imię": "Nikol",
        "nazwisko": "Kołodziejczyk",
        "płeć": "F",
        "adres": "ul. Kleszczowa 17A",
        "miasto": "Warszawa"
    },
    {
        "id": 361,
        "imię": "Manuela",
        "nazwisko": "Gawlik",
        "płeć": "F",
        "adres": "ul. Jantar 3",
        "miasto": "Warszawa"
    },
    {
        "id": 362,
        "imię": "Stella",
        "nazwisko": "Kopeć",
        "płeć": "F",
        "adres": "al. Krakowska 75",
        "miasto": "Warszawa"
    },
    {
        "id": 363,
        "imię": "Magdalena",
        "nazwisko": "Zaręba",
        "płeć": "F",
        "adres": "ul. Fraszki 11",
        "miasto": "Warszawa"
    },
    {
        "id": 364,
        "imię": "Nicole",
        "nazwisko": "Tokarska",
        "płeć": "F",
        "adres": "al. Krakowska 22",
        "miasto": "Warszawa"
    },
    {
        "id": 365,
        "imię": "Jadwiga",
        "nazwisko": "Bartkowiak",
        "płeć": "F",
        "adres": "ul. Kleszczowa 41",
        "miasto": "Warszawa"
    },
    {
        "id": 366,
        "imię": "Iuliia",
        "nazwisko": "Augustyniak",
        "płeć": "F",
        "adres": "ul. Jantar 8",
        "miasto": "Warszawa"
    },
    {
        "id": 367,
        "imię": "Teodora",
        "nazwisko": "Sikora",
        "płeć": "F",
        "adres": "ul. Janiszowska 6",
        "miasto": "Warszawa"
    },
    {
        "id": 368,
        "imię": "Daria",
        "nazwisko": "Adamska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 60",
        "miasto": "Warszawa"
    },
    {
        "id": 369,
        "imię": "Jowita",
        "nazwisko": "Szczygieł",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 43",
        "miasto": "Warszawa"
    },
    {
        "id": 370,
        "imię": "Emily",
        "nazwisko": "Ciesielska",
        "płeć": "F",
        "adres": "ul. Galaktyki 5",
        "miasto": "Warszawa"
    },
    {
        "id": 371,
        "imię": "Diana",
        "nazwisko": "Ostrowska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 1B",
        "miasto": "Warszawa"
    },
    {
        "id": 372,
        "imię": "Ludwika",
        "nazwisko": "Michalska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 16",
        "miasto": "Warszawa"
    },
    {
        "id": 373,
        "imię": "Stanisława",
        "nazwisko": "Kot",
        "płeć": "F",
        "adres": "al. Jerozolimskie 178",
        "miasto": "Warszawa"
    },
    {
        "id": 374,
        "imię": "Stefan",
        "nazwisko": "Sikorski",
        "płeć": "M",
        "adres": "ul. Milanowska 19",
        "miasto": "Warszawa"
    },
    {
        "id": 375,
        "imię": "Wiesława",
        "nazwisko": "Zalewska",
        "płeć": "F",
        "adres": "ul. Klinkierowa 3",
        "miasto": "Warszawa"
    },
    {
        "id": 376,
        "imię": "Sofia",
        "nazwisko": "Wróbel",
        "płeć": "F",
        "adres": "ul. Kleszczowa 17B",
        "miasto": "Warszawa"
    },
    {
        "id": 377,
        "imię": "Elwira",
        "nazwisko": "Królikowska",
        "płeć": "F",
        "adres": "ul. Jamińska 2A",
        "miasto": "Warszawa"
    },
    {
        "id": 378,
        "imię": "Elżbieta",
        "nazwisko": "Szymańska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 216",
        "miasto": "Warszawa"
    },
    {
        "id": 379,
        "imię": "Martyna",
        "nazwisko": "Muszyńska",
        "płeć": "F",
        "adres": "al. Krakowska 175",
        "miasto": "Warszawa"
    },
    {
        "id": 380,
        "imię": "Bartosz",
        "nazwisko": "Górski",
        "płeć": "M",
        "adres": "ul. Mikołajska 18",
        "miasto": "Warszawa"
    },
    {
        "id": 381,
        "imię": "Lidiia",
        "nazwisko": "Kuś",
        "płeć": "F",
        "adres": "ul. Janiszowska 22",
        "miasto": "Warszawa"
    },
    {
        "id": 382,
        "imię": "Zyta",
        "nazwisko": "Mróz",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 21",
        "miasto": "Warszawa"
    },
    {
        "id": 383,
        "imię": "Vladyslav",
        "nazwisko": "Krawczyk",
        "płeć": "M",
        "adres": "ul. Józefa Ignacego Kraszewskiego 33",
        "miasto": "Warszawa"
    },
    {
        "id": 384,
        "imię": "Dawid",
        "nazwisko": "Kowalewski",
        "płeć": "M",
        "adres": "ul. Płomyka 36",
        "miasto": "Warszawa"
    },
    {
        "id": 385,
        "imię": "Yuliia",
        "nazwisko": "Bednarek",
        "płeć": "F",
        "adres": "ul. Geologiczna 1",
        "miasto": "Warszawa"
    },
    {
        "id": 386,
        "imię": "Krystyna",
        "nazwisko": "Śliwińska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 41D",
        "miasto": "Warszawa"
    },
    {
        "id": 387,
        "imię": "Kalina",
        "nazwisko": "Różańska",
        "płeć": "F",
        "adres": "al. Krakowska 103",
        "miasto": "Warszawa"
    },
    {
        "id": 388,
        "imię": "Mia",
        "nazwisko": "Kula",
        "płeć": "F",
        "adres": "ul. Fraszki 21A",
        "miasto": "Warszawa"
    },
    {
        "id": 389,
        "imię": "Róża",
        "nazwisko": "Jastrzębska",
        "płeć": "F",
        "adres": "al. Krakowska 51",
        "miasto": "Warszawa"
    },
    {
        "id": 390,
        "imię": "Małgorzata",
        "nazwisko": "Wolska",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 45",
        "miasto": "Warszawa"
    },
    {
        "id": 391,
        "imię": "Zenobia",
        "nazwisko": "Brzozowska",
        "płeć": "F",
        "adres": "ul. Galaktyki 25",
        "miasto": "Warszawa"
    },
    {
        "id": 392,
        "imię": "Leszek",
        "nazwisko": "Kowalczyk",
        "płeć": "M",
        "adres": "ul. Nike 17",
        "miasto": "Warszawa"
    },
    {
        "id": 393,
        "imię": "Maksym",
        "nazwisko": "Konieczny",
        "płeć": "M",
        "adres": "ul. Nike 25",
        "miasto": "Warszawa"
    },
    {
        "id": 394,
        "imię": "Larysa",
        "nazwisko": "Rudnicka",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198L",
        "miasto": "Warszawa"
    },
    {
        "id": 395,
        "imię": "Bogdan",
        "nazwisko": "Andrzejewski",
        "płeć": "M",
        "adres": "ul. Popularna 71",
        "miasto": "Warszawa"
    },
    {
        "id": 396,
        "imię": "Sławomira",
        "nazwisko": "Żurawska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 24",
        "miasto": "Warszawa"
    },
    {
        "id": 397,
        "imię": "Beata",
        "nazwisko": "Skowrońska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 41B",
        "miasto": "Warszawa"
    },
    {
        "id": 398,
        "imię": "Jerzy",
        "nazwisko": "Dudek",
        "płeć": "M",
        "adres": "ul. Popularna 30",
        "miasto": "Warszawa"
    },
    {
        "id": 399,
        "imię": "Salomea",
        "nazwisko": "Maj",
        "płeć": "F",
        "adres": "ul. Krzysztofa Kolumba 8",
        "miasto": "Warszawa"
    },
    {
        "id": 400,
        "imię": "Jarosława",
        "nazwisko": "Komorowska",
        "płeć": "F",
        "adres": "ul. Galaktyki 7",
        "miasto": "Warszawa"
    },
    {
        "id": 401,
        "imię": "Oleh",
        "nazwisko": "Urbański",
        "płeć": "M",
        "adres": "ul. Krzysztofa Kolumba 6",
        "miasto": "Warszawa"
    },
    {
        "id": 402,
        "imię": "Alina",
        "nazwisko": "Bednarska",
        "płeć": "F",
        "adres": "ul. Jantar 12",
        "miasto": "Warszawa"
    },
    {
        "id": 403,
        "imię": "Zoja",
        "nazwisko": "Bukowska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 29",
        "miasto": "Warszawa"
    },
    {
        "id": 404,
        "imię": "Mieczysława",
        "nazwisko": "Banaś",
        "płeć": "F",
        "adres": "al. Krakowska 41A",
        "miasto": "Warszawa"
    },
    {
        "id": 405,
        "imię": "Erika",
        "nazwisko": "Chojnacka",
        "płeć": "F",
        "adres": "al. Jerozolimskie 214",
        "miasto": "Warszawa"
    },
    {
        "id": 406,
        "imię": "Ksenia",
        "nazwisko": "Sawicka",
        "płeć": "F",
        "adres": "ul. Fraszki 12A",
        "miasto": "Warszawa"
    },
    {
        "id": 407,
        "imię": "Halina",
        "nazwisko": "Grzyb",
        "płeć": "F",
        "adres": "ul. Jantar 21",
        "miasto": "Warszawa"
    },
    {
        "id": 408,
        "imię": "Nel",
        "nazwisko": "Sokołowska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 5",
        "miasto": "Warszawa"
    },
    {
        "id": 409,
        "imię": "Miriam",
        "nazwisko": "Urbaniak",
        "płeć": "F",
        "adres": "al. Krakowska 208",
        "miasto": "Warszawa"
    },
    {
        "id": 410,
        "imię": "Tatsiana",
        "nazwisko": "Szczepanik",
        "płeć": "F",
        "adres": "ul. Fraszki 9",
        "miasto": "Warszawa"
    },
    {
        "id": 411,
        "imię": "Lucyna",
        "nazwisko": "Krawiec",
        "płeć": "F",
        "adres": "ul. Kleszczowa 31",
        "miasto": "Warszawa"
    },
    {
        "id": 412,
        "imię": "Mykola",
        "nazwisko": "Borowski",
        "płeć": "M",
        "adres": "ul. Mikołajska 8",
        "miasto": "Warszawa"
    },
    {
        "id": 413,
        "imię": "Mirosława",
        "nazwisko": "Graczyk",
        "płeć": "F",
        "adres": "ul. Kleszczowa 19",
        "miasto": "Warszawa"
    },
    {
        "id": 414,
        "imię": "Konrad",
        "nazwisko": "Borkowski",
        "płeć": "M",
        "adres": "ul. Płomyka 13",
        "miasto": "Warszawa"
    },
    {
        "id": 415,
        "imię": "Waleria",
        "nazwisko": "Baran",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 5A",
        "miasto": "Warszawa"
    },
    {
        "id": 416,
        "imię": "Ihor",
        "nazwisko": "Kowalski",
        "płeć": "M",
        "adres": "ul. Popularna 58",
        "miasto": "Warszawa"
    },
    {
        "id": 417,
        "imię": "Yuliya",
        "nazwisko": "Serafin",
        "płeć": "F",
        "adres": "al. Krakowska 173",
        "miasto": "Warszawa"
    },
    {
        "id": 418,
        "imię": "Andżelika",
        "nazwisko": "Kubik",
        "płeć": "F",
        "adres": "ul. Kleszczowa 14A",
        "miasto": "Warszawa"
    },
    {
        "id": 419,
        "imię": "Mirela",
        "nazwisko": "Godlewska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 192G",
        "miasto": "Warszawa"
    },
    {
        "id": 420,
        "imię": "Roman",
        "nazwisko": "Kozłowski",
        "płeć": "M",
        "adres": "ul. Mikołajska 24",
        "miasto": "Warszawa"
    },
    {
        "id": 421,
        "imię": "Konstancja",
        "nazwisko": "Pająk",
        "płeć": "F",
        "adres": "ul. Kleszczowa 1B",
        "miasto": "Warszawa"
    },
    {
        "id": 422,
        "imię": "Dorota",
        "nazwisko": "Janus",
        "płeć": "F",
        "adres": "ul. Janiszowska 12",
        "miasto": "Warszawa"
    },
    {
        "id": 423,
        "imię": "Jarosław",
        "nazwisko": "Zakrzewski",
        "płeć": "M",
        "adres": "ul. Bolesława Gidzińskiego 3",
        "miasto": "Warszawa"
    },
    {
        "id": 424,
        "imię": "Nicol",
        "nazwisko": "Żurek",
        "płeć": "F",
        "adres": "ul. Geologiczna 18",
        "miasto": "Warszawa"
    },
    {
        "id": 425,
        "imię": "Tetyana",
        "nazwisko": "Mazurkiewicz",
        "płeć": "F",
        "adres": "ul. Kleszczowa 17D",
        "miasto": "Warszawa"
    },
    {
        "id": 426,
        "imię": "Daniel",
        "nazwisko": "Zając",
        "płeć": "M",
        "adres": "ul. Nike 15",
        "miasto": "Warszawa"
    },
    {
        "id": 427,
        "imię": "Adrian",
        "nazwisko": "Kaźmierczak",
        "płeć": "M",
        "adres": "ul. Józefa Ignacego Kraszewskiego 38",
        "miasto": "Warszawa"
    },
    {
        "id": 428,
        "imię": "Aleksandra",
        "nazwisko": "Wysocka",
        "płeć": "F",
        "adres": "al. Krakowska 15",
        "miasto": "Warszawa"
    },
    {
        "id": 429,
        "imię": "Roksana",
        "nazwisko": "Baranowska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 1A",
        "miasto": "Warszawa"
    },
    {
        "id": 430,
        "imię": "Ida",
        "nazwisko": "Kędzierska",
        "płeć": "F",
        "adres": "ul. Geologiczna 13",
        "miasto": "Warszawa"
    },
    {
        "id": 431,
        "imię": "Genowefa",
        "nazwisko": "Karczewska",
        "płeć": "F",
        "adres": "ul. Klinkierowa 10",
        "miasto": "Warszawa"
    },
    {
        "id": 432,
        "imię": "Wiktoria",
        "nazwisko": "Sowa",
        "płeć": "F",
        "adres": "ul. Galaktyki 27",
        "miasto": "Warszawa"
    },
    {
        "id": 433,
        "imię": "Arletta",
        "nazwisko": "Malinowska",
        "płeć": "F",
        "adres": "al. Krakowska 218",
        "miasto": "Warszawa"
    },
    {
        "id": 434,
        "imię": "Jagna",
        "nazwisko": "Wrona",
        "płeć": "F",
        "adres": "al. Krakowska 157A",
        "miasto": "Warszawa"
    },
    {
        "id": 435,
        "imię": "Miłosz",
        "nazwisko": "Kamiński",
        "płeć": "M",
        "adres": "ul. Nike 27",
        "miasto": "Warszawa"
    },
    {
        "id": 436,
        "imię": "Klementyna",
        "nazwisko": "Majewska",
        "płeć": "F",
        "adres": "al. Krakowska 255",
        "miasto": "Warszawa"
    },
    {
        "id": 437,
        "imię": "Sofiia",
        "nazwisko": "Biernat",
        "płeć": "F",
        "adres": "ul. Janiszowska 28A",
        "miasto": "Warszawa"
    },
    {
        "id": 438,
        "imię": "Laura",
        "nazwisko": "Bagińska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 11",
        "miasto": "Warszawa"
    },
    {
        "id": 439,
        "imię": "Adam",
        "nazwisko": "Czarnecki",
        "płeć": "M",
        "adres": "ul. Przyłęcka 17",
        "miasto": "Warszawa"
    },
    {
        "id": 440,
        "imię": "Malwina",
        "nazwisko": "Lech",
        "płeć": "F",
        "adres": "ul. Jantar 3A",
        "miasto": "Warszawa"
    },
    {
        "id": 441,
        "imię": "Katarzyna",
        "nazwisko": "Krzyżanowska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198M",
        "miasto": "Warszawa"
    },
    {
        "id": 442,
        "imię": "Krzysztofa",
        "nazwisko": "Górka",
        "płeć": "F",
        "adres": "al. Jerozolimskie 202A",
        "miasto": "Warszawa"
    },
    {
        "id": 443,
        "imię": "Teresa",
        "nazwisko": "Drozd",
        "płeć": "F",
        "adres": "ul. Kleszczowa 6D",
        "miasto": "Warszawa"
    },
    {
        "id": 444,
        "imię": "Kristina",
        "nazwisko": "Stefaniak",
        "płeć": "F",
        "adres": "ul. Klinkierowa 5",
        "miasto": "Warszawa"
    },
    {
        "id": 445,
        "imię": "Melania",
        "nazwisko": "Zaremba",
        "płeć": "F",
        "adres": "ul. Janiszowska 9",
        "miasto": "Warszawa"
    },
    {
        "id": 446,
        "imię": "Danuta",
        "nazwisko": "Mazurek",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 40A",
        "miasto": "Warszawa"
    },
    {
        "id": 447,
        "imię": "Kamilla",
        "nazwisko": "Grochowska",
        "płeć": "F",
        "adres": "ul. Jantar 18",
        "miasto": "Warszawa"
    },
    {
        "id": 448,
        "imię": "Damian",
        "nazwisko": "Szczepaniak",
        "płeć": "M",
        "adres": "ul. Płomyka 28",
        "miasto": "Warszawa"
    },
    {
        "id": 449,
        "imię": "Tomasz",
        "nazwisko": "Czerwiński",
        "płeć": "M",
        "adres": "ul. Globusowa 38",
        "miasto": "Warszawa"
    },
    {
        "id": 450,
        "imię": "Sophia",
        "nazwisko": "Biernacka",
        "płeć": "F",
        "adres": "ul. Geologiczna 9",
        "miasto": "Warszawa"
    },
    {
        "id": 451,
        "imię": "Dagmara",
        "nazwisko": "Książek",
        "płeć": "F",
        "adres": "ul. Geologiczna 16",
        "miasto": "Warszawa"
    },
    {
        "id": 452,
        "imię": "Sławomir",
        "nazwisko": "Kwiatkowski",
        "płeć": "M",
        "adres": "al. Krakowska 100B",
        "miasto": "Warszawa"
    },
    {
        "id": 453,
        "imię": "Emil",
        "nazwisko": "Stępień",
        "płeć": "M",
        "adres": "ul. Bolesława Gidzińskiego 5",
        "miasto": "Warszawa"
    },
    {
        "id": 454,
        "imię": "Nina",
        "nazwisko": "Romanowska",
        "płeć": "F",
        "adres": "ul. Kolneńska 6C",
        "miasto": "Warszawa"
    },
    {
        "id": 455,
        "imię": "Czesława",
        "nazwisko": "Mikulska",
        "płeć": "F",
        "adres": "al. Krakowska 217",
        "miasto": "Warszawa"
    },
    {
        "id": 456,
        "imię": "Paulina",
        "nazwisko": "Dobrowolska",
        "płeć": "F",
        "adres": "ul. Klinowa 3",
        "miasto": "Warszawa"
    },
    {
        "id": 457,
        "imię": "Janusz",
        "nazwisko": "Szymczak",
        "płeć": "M",
        "adres": "ul. Nike 31",
        "miasto": "Warszawa"
    },
    {
        "id": 458,
        "imię": "Zdzisława",
        "nazwisko": "Grabowska",
        "płeć": "F",
        "adres": "ul. Galaktyki 9",
        "miasto": "Warszawa"
    },
    {
        "id": 459,
        "imię": "Sara",
        "nazwisko": "Kołodziej",
        "płeć": "F",
        "adres": "ul. Kolneńska 6",
        "miasto": "Warszawa"
    },
    {
        "id": 460,
        "imię": "Olimpia",
        "nazwisko": "Kaźmierczak",
        "płeć": "F",
        "adres": "ul. Jantar 13",
        "miasto": "Warszawa"
    },
    {
        "id": 461,
        "imię": "Marta",
        "nazwisko": "Olejnik",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 19",
        "miasto": "Warszawa"
    },
    {
        "id": 462,
        "imię": "Bogusława",
        "nazwisko": "Janowska",
        "płeć": "F",
        "adres": "ul. Jantar 11",
        "miasto": "Warszawa"
    },
    {
        "id": 463,
        "imię": "Gaja",
        "nazwisko": "Orłowska",
        "płeć": "F",
        "adres": "ul. Józefa Ignacego Kraszewskiego 13",
        "miasto": "Warszawa"
    },
    {
        "id": 464,
        "imię": "Justyna",
        "nazwisko": "Domańska",
        "płeć": "F",
        "adres": "ul. Janiszowska 10",
        "miasto": "Warszawa"
    },
    {
        "id": 465,
        "imię": "Svitlana",
        "nazwisko": "Zych",
        "płeć": "F",
        "adres": "al. Krakowska 215",
        "miasto": "Warszawa"
    },
    {
        "id": 466,
        "imię": "Andrzej",
        "nazwisko": "Zieliński",
        "płeć": "M",
        "adres": "ul. Popularna 60",
        "miasto": "Warszawa"
    },
    {
        "id": 467,
        "imię": "Ines",
        "nazwisko": "Marciniak",
        "płeć": "F",
        "adres": "al. Krakowska 269",
        "miasto": "Warszawa"
    },
    {
        "id": 468,
        "imię": "Eugeniusz",
        "nazwisko": "Brzeziński",
        "płeć": "M",
        "adres": "ul. Płomyka 30",
        "miasto": "Warszawa"
    },
    {
        "id": 469,
        "imię": "Kuba",
        "nazwisko": "Nowicki",
        "płeć": "M",
        "adres": "ul. Popularna 54",
        "miasto": "Warszawa"
    },
    {
        "id": 470,
        "imię": "Klaudyna",
        "nazwisko": "Barańska",
        "płeć": "F",
        "adres": "ul. Kolneńska 11",
        "miasto": "Warszawa"
    },
    {
        "id": 471,
        "imię": "Antoni",
        "nazwisko": "Olszewski",
        "płeć": "M",
        "adres": "ul. Płomyka 29",
        "miasto": "Warszawa"
    },
    {
        "id": 472,
        "imię": "Mila",
        "nazwisko": "Wójcik",
        "płeć": "F",
        "adres": "ul. Janiszowska 30",
        "miasto": "Warszawa"
    },
    {
        "id": 473,
        "imię": "Anastasia",
        "nazwisko": "Orzechowska",
        "płeć": "F",
        "adres": "ul. Janka Muzykanta 19",
        "miasto": "Warszawa"
    },
    {
        "id": 474,
        "imię": "Daryna",
        "nazwisko": "Kowalska",
        "płeć": "F",
        "adres": "ul. Jakobinów 28",
        "miasto": "Warszawa"
    },
    {
        "id": 475,
        "imię": "Mateusz",
        "nazwisko": "Woźniak",
        "płeć": "M",
        "adres": "ul. Globusowa 46",
        "miasto": "Warszawa"
    },
    {
        "id": 476,
        "imię": "Jessica",
        "nazwisko": "Górska",
        "płeć": "F",
        "adres": "al. Krakowska 91",
        "miasto": "Warszawa"
    },
    {
        "id": 477,
        "imię": "Wanessa",
        "nazwisko": "Wojciechowska",
        "płeć": "F",
        "adres": "al. Jerozolimskie 193",
        "miasto": "Warszawa"
    },
    {
        "id": 478,
        "imię": "Alona",
        "nazwisko": "Rojek",
        "płeć": "F",
        "adres": "al. Krakowska 45",
        "miasto": "Warszawa"
    },
    {
        "id": 479,
        "imię": "Yevheniia",
        "nazwisko": "Kowalik",
        "płeć": "F",
        "adres": "ul. Jantar 17",
        "miasto": "Warszawa"
    },
    {
        "id": 480,
        "imię": "Aneta",
        "nazwisko": "Kania",
        "płeć": "F",
        "adres": "ul. Janiszowska 23A",
        "miasto": "Warszawa"
    },
    {
        "id": 481,
        "imię": "Hubert",
        "nazwisko": "Sokołowski",
        "płeć": "M",
        "adres": "ul. Popularna 45",
        "miasto": "Warszawa"
    },
    {
        "id": 482,
        "imię": "Leonarda",
        "nazwisko": "Szczęsna",
        "płeć": "F",
        "adres": "ul. Kleszczowa 1A",
        "miasto": "Warszawa"
    },
    {
        "id": 483,
        "imię": "Rafał",
        "nazwisko": "Górecki",
        "płeć": "M",
        "adres": "ul. Popularna 17A",
        "miasto": "Warszawa"
    },
    {
        "id": 484,
        "imię": "Urszula",
        "nazwisko": "Zawada",
        "płeć": "F",
        "adres": "al. Jerozolimskie 212",
        "miasto": "Warszawa"
    },
    {
        "id": 485,
        "imię": "Maksymilian",
        "nazwisko": "Lipiński",
        "płeć": "M",
        "adres": "ul. Płomyka 31",
        "miasto": "Warszawa"
    },
    {
        "id": 486,
        "imię": "Kazimierz",
        "nazwisko": "Markowski",
        "płeć": "M",
        "adres": "ul. Milanowska 12A",
        "miasto": "Warszawa"
    },
    {
        "id": 487,
        "imię": "Józef",
        "nazwisko": "Sikora",
        "płeć": "M",
        "adres": "ul. Milanowska 20A",
        "miasto": "Warszawa"
    },
    {
        "id": 488,
        "imię": "Anna",
        "nazwisko": "Leśniak",
        "płeć": "F",
        "adres": "al. Jerozolimskie 198N",
        "miasto": "Warszawa"
    },
    {
        "id": 489,
        "imię": "Marian",
        "nazwisko": "Mazurek",
        "płeć": "M",
        "adres": "ul. Nike 39A",
        "miasto": "Warszawa"
    },
    {
        "id": 490,
        "imię": "Maryia",
        "nazwisko": "Stańczyk",
        "płeć": "F",
        "adres": "al. Krakowska 17",
        "miasto": "Warszawa"
    },
    {
        "id": 491,
        "imię": "Nataliya",
        "nazwisko": "Nawrocka",
        "płeć": "F",
        "adres": "ul. Geologiczna 7",
        "miasto": "Warszawa"
    },
    {
        "id": 492,
        "imię": "Sonia",
        "nazwisko": "Sobczyk",
        "płeć": "F",
        "adres": "ul. Kleszczowa 17",
        "miasto": "Warszawa"
    },
    {
        "id": 493,
        "imię": "Lea",
        "nazwisko": "Rakowska",
        "płeć": "F",
        "adres": "ul. Kleszczowa 15",
        "miasto": "Warszawa"
    },
    {
        "id": 494,
        "imię": "Nicola",
        "nazwisko": "Karpińska",
        "płeć": "F",
        "adres": "ul. Bolesława Gidzińskiego 8",
        "miasto": "Warszawa"
    },
    {
        "id": 495,
        "imię": "Pola",
        "nazwisko": "Nowacka",
        "płeć": "F",
        "adres": "ul. Kleszczowa 41A",
        "miasto": "Warszawa"
    },
    {
        "id": 496,
        "imię": "Iwona",
        "nazwisko": "Bielecka",
        "płeć": "F",
        "adres": "ul. Globusowa 42",
        "miasto": "Warszawa"
    },
    {
        "id": 497,
        "imię": "Volodymyr",
        "nazwisko": "Jaworski",
        "płeć": "M",
        "adres": "ul. Popularna 48",
        "miasto": "Warszawa"
    },
    {
        "id": 498,
        "imię": "Dariusz",
        "nazwisko": "Bąk",
        "płeć": "M",
        "adres": "ul. Nike 39",
        "miasto": "Warszawa"
    },
]);

export default people;