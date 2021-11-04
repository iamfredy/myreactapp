import React from 'react'
import MovieCard from '../components/MovieCard';

const MOVIES_DATA=[
  {
    "title": "A Rainy Day in New York",
    "rating": "PG-13",
    "year": "2019",
    "users_rating": "6.6",
    "votes": "21,903",
    "metascore": "44",
    "img_url": "https://m.media-amazon.com/images/M/MV5BODAwZDlhZjUtYzM2MS00MGVmLWFjNWMtODc5NjM2OTNkNjExXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Timothée Chalamet",
      "Elle Fanning",
      "Liev Schreiber",
      "Suzanne Smith",
      "Olivia Boreham-Wing",
      "Ben Warheit",
      "Griffin Newman",
      "Selena Gomez",
      "Gus Birney",
      "Elijah Boothe",
      "Will Rogers",
      "Annaleigh Ashford",
      "Jude Law",
      "Frank Marzullo",
      "Kirby Mitchell"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "tagline": null,
    "description": "A young couple arrives in New York for a weekend where they are met with bad weather and a series of adventures.",
    "directors": [
      "Woody Allen"
    ],
    "runtime": "92 min",
    "imdb_url": "https://www.imdb.com/title/tt7139936/"
  },
  {
    "title": "Murder Manual",
    "rating": "18",
    "year": "2020",
    "users_rating": "2.4",
    "votes": "192",
    "metascore": null,
    "img_url": "https://m.media-amazon.com/images/M/MV5BMDI5ZDU2OWItZTkyMy00NTYwLTgwNjktNGRjNjgxNzJkM2M1XkEyXkFqcGdeQXVyMjY5ODU3OA@@._V1_UY268_CR9,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Emilia Clarke",
      "Hadley Fraser",
      "Sylvia Panacione",
      "Maria Olsen",
      "Brittany Samson",
      "Milly Sanders",
      "Melanie Cruz",
      "Van Hansis",
      "Sally Hughes",
      "Anthony Goss",
      "Bryan Manley Davis",
      "Sophie Knapp",
      "Jeff Torres",
      "Joe Reegan",
      "Frida Rossi"
    ],
    "genre": [
      "Horror",
      "Thriller"
    ],
    "tagline": "When it comes to murder, they wrote the book",
    "description": "Creepy, terrifying chapters from our book of horror include a little girl's journey from a world of nightmares into the nightmare of reality, a gay couple's romantic getaway in Palm Springs...",
    "directors": [
      "Michael Escobedo",
      "Kelly Hallmark",
      "4 more credits"
    ],
    "runtime": "91 min",
    "imdb_url": "https://www.imdb.com/title/tt12384178/"
  },
  {
    "title": "Ferris Bueller's Day Off",
    "rating": "PG-13",
    "year": "1986",
    "users_rating": "7.8",
    "votes": "308,847",
    "metascore": "61",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMDA0NjZhZWUtNmI2NC00MmFjLTgwZDYtYzVjZmNhMDVmOTBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "German"
    ],
    "actors": [
      "Matthew Broderick",
      "Alan Ruck",
      "Mia Sara",
      "Jeffrey Jones",
      "Jennifer Grey",
      "Cindy Pickett",
      "Lyman Ward",
      "Edie McClurg",
      "Charlie Sheen",
      "Ben Stein",
      "Del Close",
      "Virginia Capers",
      "Richard Edson",
      "Larry Flash Jenkins",
      "Kristy Swanson"
    ],
    "genre": [
      "Comedy"
    ],
    "tagline": "Because life is too beautiful a thing to waste.",
    "description": "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.",
    "directors": [
      "John Hughes"
    ],
    "runtime": "103 min",
    "imdb_url": "https://www.imdb.com/title/tt0091042/"
  },
  {
    "title": "Cape Fear",
    "rating": "R",
    "year": "1991",
    "users_rating": "7.3",
    "votes": "165,628",
    "metascore": "73",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNjdhNzZlYzYtYTBlNS00NTJiLWI2ZWUtMDI2YzI2MzM5NjY4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Robert De Niro",
      "Nick Nolte",
      "Jessica Lange",
      "Juliette Lewis",
      "Joe Don Baker",
      "Robert Mitchum",
      "Gregory Peck",
      "Martin Balsam",
      "Illeana Douglas",
      "Fred Thompson",
      "Zully Montero",
      "Craig Henne",
      "Forest Burton",
      "Edgar Allan Poe IV",
      "Rod Ball"
    ],
    "genre": [
      "Crime",
      "Thriller"
    ],
    "tagline": "There is nothing in the dark that isn't there in the light. Except fear.",
    "description": "A convicted rapist, released from prison after serving a fourteen-year sentence, stalks the family of the lawyer who originally defended him.",
    "directors": [
      "Martin Scorsese"
    ],
    "runtime": "128 min",
    "imdb_url": "https://www.imdb.com/title/tt0101540/"
  },
  {
    "title": "Mean Girls",
    "rating": "PG-13",
    "year": "2004",
    "users_rating": "7.0",
    "votes": "320,492",
    "metascore": "66",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Canada"
    ],
    "languages": [
      "English",
      "German",
      "Vietnamese",
      "Swahili"
    ],
    "actors": [
      "Lindsay Lohan",
      "Rachel McAdams",
      "Tina Fey",
      "Tim Meadows",
      "Amy Poehler",
      "Ana Gasteyer",
      "Lacey Chabert",
      "Lizzy Caplan",
      "Daniel Franzese",
      "Neil Flynn",
      "Jonathan Bennett",
      "Amanda Seyfried",
      "Rajiv Surendra",
      "Elana Shilling",
      "Graham Kartna"
    ],
    "genre": [
      "Comedy"
    ],
    "tagline": "Survival of the Ruthless",
    "description": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    "directors": [
      "Mark Waters"
    ],
    "runtime": "97 min",
    "imdb_url": "https://www.imdb.com/title/tt0377092/"
  },
  {
    "title": "Gretel & Hansel",
    "rating": "PG-13",
    "year": "2020",
    "users_rating": "5.3",
    "votes": "15,051",
    "metascore": "64",
    "img_url": "https://m.media-amazon.com/images/M/MV5BOTIyYWJjZDctODY4OC00NWExLWE2NTktZmY0MWY2YWZjMWIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "Canada",
      "Ireland",
      "USA",
      "South Africa"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Sophia Lillis",
      "Samuel Leakey",
      "Alice Krige",
      "Jessica De Gouw",
      "Fiona O'Shaughnessy",
      "Donncha Crowley",
      "Jonathan Gunning",
      "Charles Babalola",
      "Giulia Doherty",
      "Jonathan Delaney Tynan",
      "Darlene Garr",
      "Melody Carrillo",
      "Nessa Last",
      "Harry O'Cualacháin"
    ],
    "genre": [
      "Fantasy",
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "tagline": "Follow the crumbs.",
    "description": "A long time ago in a distant fairy tale countryside, a young girl leads her little brother into a dark wood in desperate search of food and work, only to stumble upon a nexus of terrifying evil.",
    "directors": [
      "Oz Perkins"
    ],
    "runtime": "87 min",
    "imdb_url": "https://www.imdb.com/title/tt9086228/"
  },
  {
    "title": "Jurassic World: Fallen Kingdom",
    "rating": "PG-13",
    "year": "2018",
    "users_rating": "6.2",
    "votes": "250,190",
    "metascore": "51",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Russian"
    ],
    "actors": [
      "Chris Pratt",
      "Bryce Dallas Howard",
      "Rafe Spall",
      "Justice Smith",
      "Daniella Pineda",
      "James Cromwell",
      "Toby Jones",
      "Ted Levine",
      "Jeff Goldblum",
      "BD Wong",
      "Geraldine Chaplin",
      "Isabella Sermon",
      "Robert Emms",
      "Peter Jason",
      "Kevin Layne"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "tagline": "Off the Island. Into your Home.",
    "description": "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
    "directors": [
      "J.A. Bayona"
    ],
    "runtime": "128 min",
    "imdb_url": "https://www.imdb.com/title/tt4881806/"
  },
  {
    "title": "The Avengers",
    "rating": "PG-13",
    "year": "2012",
    "users_rating": "8.0",
    "votes": "1,233,746",
    "metascore": "69",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Russian",
      "Hindi"
    ],
    "actors": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
      "Tom Hiddleston",
      "Clark Gregg",
      "Cobie Smulders",
      "Stellan Skarsgård",
      "Samuel L. Jackson",
      "Gwyneth Paltrow",
      "Paul Bettany",
      "Alexis Denisof",
      "Tina Benko"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "tagline": "Avengers Assemble!",
    "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "directors": [
      "Joss Whedon"
    ],
    "runtime": "143 min",
    "imdb_url": "https://www.imdb.com/title/tt0848228/"
  },
  {
    "title": "Good Will Hunting",
    "rating": "R",
    "year": "1997",
    "users_rating": "8.3",
    "votes": "826,970",
    "metascore": "70",
    "img_url": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Matt Damon",
      "Ben Affleck",
      "Stellan Skarsgård",
      "John Mighton",
      "Rachel Majorowski",
      "Colleen McCauley",
      "Casey Affleck",
      "Cole Hauser",
      "Matt Mercier",
      "Ralph St. George",
      "Rob Lynds",
      "Dan Washington",
      "Alison Folland",
      "Derrick Bridgeman",
      "Vik Sahay"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "tagline": "Wildly charismatic. Impossibly brilliant. Totally rebellious. For the first 20 years of his life, Will Hunting has called the shots. Now he's about to meet his match.",
    "description": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    "directors": [
      "Gus Van Sant"
    ],
    "runtime": "126 min",
    "imdb_url": "https://www.imdb.com/title/tt0119217/"
  },
  {
    "title": "2001: A Space Odyssey",
    "rating": "G",
    "year": "1968",
    "users_rating": "8.3",
    "votes": "580,491",
    "metascore": "84",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English",
      "Russian"
    ],
    "actors": [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester",
      "Daniel Richter",
      "Leonard Rossiter",
      "Margaret Tyzack",
      "Robert Beatty",
      "Sean Sullivan",
      "Douglas Rain",
      "Frank Miller",
      "Bill Weston",
      "Ed Bishop",
      "Glenn Beck",
      "Alan Gifford",
      "Ann Gillis"
    ],
    "genre": [
      "Adventure",
      "Sci-Fi"
    ],
    "tagline": "50 Years Ago One Movie Changed All Movies Forever [2018 Re-release]",
    "description": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    "directors": [
      "Stanley Kubrick"
    ],
    "runtime": "149 min",
    "imdb_url": "https://www.imdb.com/title/tt0062622/"
  },
  {
    "title": "Scarface",
    "rating": "R",
    "year": "1983",
    "users_rating": "8.3",
    "votes": "712,283",
    "metascore": "65",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Spanish"
    ],
    "actors": [
      "Al Pacino",
      "Steven Bauer",
      "Michelle Pfeiffer",
      "Mary Elizabeth Mastrantonio",
      "Robert Loggia",
      "Miriam Colon",
      "F. Murray Abraham",
      "Paul Shenar",
      "Harris Yulin",
      "Ángel Salazar",
      "Arnaldo Santana",
      "Pepe Serna",
      "Michael P. Moran",
      "Al Israel",
      "Dennis Holahan"
    ],
    "genre": [
      "Crime",
      "Drama"
    ],
    "tagline": "The world is yours...",
    "description": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    "directors": [
      "Brian De Palma"
    ],
    "runtime": "170 min",
    "imdb_url": "https://www.imdb.com/title/tt0086250/"
  },
  {
    "title": "Dazed and Confused",
    "rating": "R",
    "year": "1993",
    "users_rating": "7.6",
    "votes": "158,876",
    "metascore": "78",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jason London",
      "Joey Lauren Adams",
      "Milla Jovovich",
      "Shawn Andrews",
      "Rory Cochrane",
      "Adam Goldberg",
      "Anthony Rapp",
      "Sasha Jenson",
      "Marissa Ribisi",
      "Deena Martin",
      "Michelle Burke",
      "Cole Hauser",
      "Christine Harnos",
      "Wiley Wiggins",
      "Mark Vandermeulen"
    ],
    "genre": [
      "Comedy"
    ],
    "tagline": "Weed rules.",
    "description": "The adventures of high school and junior high students on the last day of school in May 1976.",
    "directors": [
      "Richard Linklater"
    ],
    "runtime": "102 min",
    "imdb_url": "https://www.imdb.com/title/tt0106677/"
  },
  {
    "title": "Our House",
    "rating": "PG-13",
    "year": "2018",
    "users_rating": "5.3",
    "votes": "5,563",
    "metascore": "45",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMzk0MWNkMGItMmNjNC00YThkLThmOGMtMDFmMjUyMTVjZDZiXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "Canada",
      "Germany",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "John Ralston",
      "Thomas Mann",
      "Percy Hynes White",
      "Lucius Hoyos",
      "Allison Hossack",
      "Kate Moyer",
      "Nicola Peltz",
      "Marcia Bennett",
      "Robert B. Kennedy",
      "Aaron Hale",
      "Xavier de Guzman",
      "Evan Marsh",
      "Neil Whitely",
      "Ryan Wilson",
      "Magda Vasko"
    ],
    "genre": [
      "Drama",
      "Horror",
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "Houses Are As Haunted As You Make Them",
    "description": "A young genius accidentally invents a device that amplifies the paranormal activity within his family's house, possibly bringing back the spirits of loved ones, and unleashing things far worse.",
    "directors": [
      "Anthony Scott Burns"
    ],
    "runtime": "90 min",
    "imdb_url": "https://www.imdb.com/title/tt2018069/"
  },
  {
    "title": "Full Metal Jacket",
    "rating": "R",
    "year": "1987",
    "users_rating": "8.3",
    "votes": "650,539",
    "metascore": "76",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English",
      "Vietnamese"
    ],
    "actors": [
      "Matthew Modine",
      "Adam Baldwin",
      "Vincent D'Onofrio",
      "R. Lee Ermey",
      "Dorian Harewood",
      "Kevyn Major Howard",
      "Arliss Howard",
      "Ed O'Ross",
      "John Terry",
      "Kieron Jecchinis",
      "Kirk Taylor",
      "Tim Colceri",
      "Jon Stafford",
      "Bruce Boa",
      "Ian Tyler"
    ],
    "genre": [
      "Drama",
      "War"
    ],
    "tagline": "Acclaimed by critics as the best war movie ever made",
    "description": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    "directors": [
      "Stanley Kubrick"
    ],
    "runtime": "116 min",
    "imdb_url": "https://www.imdb.com/title/tt0093058/"
  },
  {
    "title": "Harry Potter and the Chamber of Secrets",
    "rating": "PG",
    "year": "2002",
    "users_rating": "7.4",
    "votes": "529,173",
    "metascore": "63",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA",
      "Germany"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Richard Griffiths",
      "Fiona Shaw",
      "Harry Melling",
      "Toby Jones",
      "Jim Norton",
      "Veronica Clifford",
      "James Phelps",
      "Oliver Phelps",
      "Julie Walters",
      "Bonnie Wright",
      "Mark Williams",
      "Chris Rankin"
    ],
    "genre": [
      "Adventure",
      "Family",
      "Fantasy",
      "Mystery"
    ],
    "tagline": "\"Dobby has come to warn you Sir.\"",
    "description": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
    "directors": [
      "Chris Columbus"
    ],
    "runtime": "161 min",
    "imdb_url": "https://www.imdb.com/title/tt0295297/"
  },
  {
    "title": "Gran Torino",
    "rating": "R",
    "year": "2008",
    "users_rating": "8.1",
    "votes": "701,410",
    "metascore": "72",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "Germany",
      "USA"
    ],
    "languages": [
      "English",
      "Hmong"
    ],
    "actors": [
      "Clint Eastwood",
      "Christopher Carley",
      "Bee Vang",
      "Ahney Her",
      "Brian Haley",
      "Geraldine Hughes",
      "Dreama Walker",
      "Brian Howe",
      "John Carroll Lynch",
      "William Hill",
      "Brooke Chia Thao",
      "Chee Thao",
      "Choua Kue",
      "Scott Eastwood",
      "Xia Soua Chang"
    ],
    "genre": [
      "Drama"
    ],
    "tagline": null,
    "description": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
    "directors": [
      "Clint Eastwood"
    ],
    "runtime": "116 min",
    "imdb_url": "https://www.imdb.com/title/tt1205489/"
  },
  {
    "title": "Three Billboards Outside Ebbing, Missouri",
    "rating": "R",
    "year": "2017",
    "users_rating": "8.2",
    "votes": "401,685",
    "metascore": "88",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Frances McDormand",
      "Caleb Landry Jones",
      "Kerry Condon",
      "Sam Rockwell",
      "Alejandro Barrios",
      "Jason Ledford",
      "Darrell Britt-Gibson",
      "Woody Harrelson",
      "Abbie Cornish",
      "Riya May Atwood",
      "Selah Atwood",
      "Lucas Hedges",
      "Zeljko Ivanek",
      "Amanda Warren",
      "Malaya Rivera Drew"
    ],
    "genre": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "tagline": null,
    "description": "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    "directors": [
      "Martin McDonagh"
    ],
    "runtime": "115 min",
    "imdb_url": "https://www.imdb.com/title/tt5027774/"
  },
  {
    "title": "Cast Away",
    "rating": "PG-13",
    "year": "2000",
    "users_rating": "7.8",
    "votes": "504,512",
    "metascore": "73",
    "img_url": "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Russian"
    ],
    "actors": [
      "Paul Sanchez",
      "Lari White",
      "Leonid Citer",
      "David Allen Brooks",
      "Yelena Popovic",
      "Valentina Ananina",
      "Semion Sudarikov",
      "Tom Hanks",
      "Peter Von Berg",
      "Dmitri S. Boudrine",
      "François Duhamel",
      "Michael Forest",
      "Viveka Davis",
      "Nick Searcy",
      "Jennifer Choe"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "Romance"
    ],
    "tagline": "At the edge of the world, his journey begins.",
    "description": "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
    "directors": [
      "Robert Zemeckis"
    ],
    "runtime": "143 min",
    "imdb_url": "https://www.imdb.com/title/tt0162222/"
  },
  {
    "title": "Star Wars: Episode III - Revenge of the Sith",
    "rating": "PG-13",
    "year": "2005",
    "users_rating": "7.5",
    "votes": "688,367",
    "metascore": "68",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Ewan McGregor",
      "Natalie Portman",
      "Hayden Christensen",
      "Ian McDiarmid",
      "Samuel L. Jackson",
      "Jimmy Smits",
      "Frank Oz",
      "Anthony Daniels",
      "Christopher Lee",
      "Keisha Castle-Hughes",
      "Silas Carson",
      "Jay Laga'aia",
      "Bruce Spence",
      "Wayne Pygram",
      "Temuera Morrison"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "tagline": "The saga is complete.",
    "description": "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
    "directors": [
      "George Lucas"
    ],
    "runtime": "140 min",
    "imdb_url": "https://www.imdb.com/title/tt0121766/"
  },
  {
    "title": "Bird Box",
    "rating": "R",
    "year": "2018",
    "users_rating": "6.6",
    "votes": "260,466",
    "metascore": "51",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Sandra Bullock",
      "Trevante Rhodes",
      "John Malkovich",
      "Sarah Paulson",
      "Jacki Weaver",
      "Rosa Salazar",
      "Danielle Macdonald",
      "Lil Rel Howery",
      "Tom Hollander",
      "Machine Gun Kelly",
      "BD Wong",
      "Pruitt Taylor Vince",
      "Vivien Lyra Blair",
      "Julian Edwards",
      "Parminder Nagra"
    ],
    "genre": [
      "Drama",
      "Horror",
      "Sci-Fi"
    ],
    "tagline": "Never Lose Sight of Survival",
    "description": "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.",
    "directors": [
      "Susanne Bier"
    ],
    "runtime": "124 min",
    "imdb_url": "https://www.imdb.com/title/tt2737304/"
  },
  {
    "title": "Seberg",
    "rating": "R",
    "year": "2019",
    "users_rating": "5.5",
    "votes": "3,550",
    "metascore": "54",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNjk5MTdhZGQtMDEzMC00NTk3LTg1ZjgtZTNhN2RlYzY3N2U1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English",
      "French"
    ],
    "actors": [
      "Kristen Stewart",
      "Yvan Attal",
      "Gabriel Sky",
      "Jack O'Connell",
      "Margaret Qualley",
      "Colm Meaney",
      "Vince Vaughn",
      "Stephen Root",
      "Anthony Mackie",
      "Victoria Barabas",
      "Sean Bolger",
      "Ben Kliewer",
      "Brian Michael Jones",
      "Celeste Pechous",
      "Laura Campbell"
    ],
    "genre": [
      "Biography",
      "Drama",
      "Thriller"
    ],
    "tagline": "Actress. Activist. Adversary.",
    "description": "Inspired by real events in the life of French New Wave icon",
    "directors": [
      "Benedict Andrews"
    ],
    "runtime": "102 min",
    "imdb_url": "https://www.imdb.com/title/tt1780967/"
  },
  {
    "title": "School of Rock",
    "rating": "PG-13",
    "year": "2003",
    "users_rating": "7.1",
    "votes": "259,325",
    "metascore": "82",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjEwOTMzNjYzMl5BMl5BanBnXkFtZTcwNjczMTQyMQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Germany"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jack Black",
      "Adam Pascal",
      "Lucas Papaelias",
      "Chris Stack",
      "Sarah Silverman",
      "Mike White",
      "Lucas Babin",
      "Joan Cusack",
      "Jordan-Claire Green",
      "Veronica Afflerbach",
      "Miranda Cosgrove",
      "Joey Gaydos Jr.",
      "Robert Tsai",
      "Angelo Massagli",
      "Kevin Alexander Clark"
    ],
    "genre": [
      "Comedy",
      "Music"
    ],
    "tagline": "We shall teach Rock & Roll to the world!",
    "description": "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band.",
    "directors": [
      "Richard Linklater"
    ],
    "runtime": "109 min",
    "imdb_url": "https://www.imdb.com/title/tt0332379/"
  },
  {
    "title": "Malena",
    "rating": "R",
    "year": "2000",
    "users_rating": "7.5",
    "votes": "86,357",
    "metascore": "54",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZGViM2E0MjktZTdlNy00Y2M0LThlN2UtZThkZGNlMWIyMmY1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "Italy",
      "USA"
    ],
    "languages": [
      "Italian",
      "English",
      "Latin",
      "Greek, Ancient (to 1453)"
    ],
    "actors": [
      "Monica Bellucci",
      "Giuseppe Sulfaro",
      "Luciano Federico",
      "Matilde Piana",
      "Pietro Notarianni",
      "Gaetano Aronica",
      "Gilberto Idonea",
      "Angelo Pellegrino",
      "Gabriella Di Luzio",
      "Pippo Provvidenti",
      "Maria Terranova",
      "Marcello Catalano",
      "Elisa Morucci",
      "Domenico Gennaro",
      "Vitalba Andrea"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance",
      "War"
    ],
    "tagline": "An intimate portrait and an epic story of the courage we discover, the innocence we surrender, and the memories we cherish.....forever.",
    "description": "Amidst the war climate, a teenage boy discovering himself becomes love-stricken by Malèna, a sensual woman living in a small, narrow-minded Italian town.",
    "directors": [
      "Giuseppe Tornatore"
    ],
    "runtime": "108 min",
    "imdb_url": "https://www.imdb.com/title/tt0213847/"
  },
  {
    "title": "A Beautiful Mind",
    "rating": "PG-13",
    "year": "2001",
    "users_rating": "8.2",
    "votes": "819,184",
    "metascore": "72",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Russell Crowe",
      "Ed Harris",
      "Jennifer Connelly",
      "Christopher Plummer",
      "Paul Bettany",
      "Adam Goldberg",
      "Josh Lucas",
      "Anthony Rapp",
      "Jason Gray-Stanford",
      "Judd Hirsch",
      "Austin Pendleton",
      "Vivien Cardone",
      "Jillie Simon",
      "Victor Steinbach",
      "Tanya Clarke"
    ],
    "genre": [
      "Biography",
      "Drama"
    ],
    "tagline": "I need to believe that something extra ordinary is possible...",
    "description": "After",
    "directors": [
      "Ron Howard"
    ],
    "runtime": "135 min",
    "imdb_url": "https://www.imdb.com/title/tt0268978/"
  },
  {
    "title": "Fargo",
    "rating": "R",
    "year": "1996",
    "users_rating": "8.1",
    "votes": "594,745",
    "metascore": "85",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "William H. Macy",
      "Steve Buscemi",
      "Peter Stormare",
      "Kristin Rudrüd",
      "Harve Presnell",
      "Tony Denman",
      "Gary Houston",
      "Sally Wingert",
      "Kurt Schweickhardt",
      "Larissa Kokernot",
      "Melissa Peterman",
      "Steve Reevis",
      "Warren Keith",
      "Steve Edelman",
      "Sharon Anderson"
    ],
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "tagline": "An ordinary place, an extraordinary thriller",
    "description": "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
    "directors": [
      "Joel Coen",
      "Ethan Coen"
    ],
    "runtime": "98 min",
    "imdb_url": "https://www.imdb.com/title/tt0116282/"
  },
  {
    "title": "True Grit",
    "rating": "PG-13",
    "year": "2010",
    "users_rating": "7.6",
    "votes": "301,162",
    "metascore": "80",
    "img_url": "https://m.media-amazon.com/images/M/MV5BODhkZDIzNjgtOTA5ZS00MmMzLWFkNjYtM2Y2MzFjN2FkNjAzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR2,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jeff Bridges",
      "Hailee Steinfeld",
      "Matt Damon",
      "Josh Brolin",
      "Barry Pepper",
      "Dakin Matthews",
      "Jarlath Conroy",
      "Paul Rae",
      "Domhnall Gleeson",
      "Elizabeth Marvel",
      "Roy Lee Jones",
      "Ed Corbin",
      "Leon Russom",
      "Bruce Green",
      "Candyce Hinkle"
    ],
    "genre": [
      "Drama",
      "Western"
    ],
    "tagline": "Retribution",
    "description": "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
    "directors": [
      "Ethan Coen",
      "Joel Coen"
    ],
    "runtime": "110 min",
    "imdb_url": "https://www.imdb.com/title/tt1403865/"
  },
  {
    "title": "Les Misérables",
    "rating": "PG-13",
    "year": "2012",
    "users_rating": "7.6",
    "votes": "300,159",
    "metascore": "63",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Hugh Jackman",
      "Russell Crowe",
      "Anne Hathaway",
      "Amanda Seyfried",
      "Sacha Baron Cohen",
      "Helena Bonham Carter",
      "Eddie Redmayne",
      "Aaron Tveit",
      "Samantha Barks",
      "Daniel Huttlestone",
      "Cavin Cornwall",
      "Josef Altin",
      "Dave Hawley",
      "Adam Jones",
      "John Barr"
    ],
    "genre": [
      "Drama",
      "History",
      "Musical",
      "Romance",
      "War"
    ],
    "tagline": "Fight. Dream. Hope. Love.",
    "description": "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
    "directors": [
      "Tom Hooper"
    ],
    "runtime": "158 min",
    "imdb_url": "https://www.imdb.com/title/tt1707386/"
  },
  {
    "title": "Cinderella",
    "rating": "PG",
    "year": "2015",
    "users_rating": "6.9",
    "votes": "153,807",
    "metascore": "67",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Cate Blanchett",
      "Lily James",
      "Richard Madden",
      "Helena Bonham Carter",
      "Nonso Anozie",
      "Stellan Skarsgård",
      "Sophie McShera",
      "Holliday Grainger",
      "Derek Jacobi",
      "Ben Chaplin",
      "Hayley Atwell",
      "Rob Brydon",
      "Jana Pérez",
      "Alex Macqueen",
      "Tom Edden"
    ],
    "genre": [
      "Drama",
      "Family",
      "Fantasy",
      "Romance"
    ],
    "tagline": "Midnight is just the beginning.",
    "description": "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.",
    "directors": [
      "Kenneth Branagh"
    ],
    "runtime": "105 min",
    "imdb_url": "https://www.imdb.com/title/tt1661199/"
  },
  {
    "title": "Superbad",
    "rating": "R",
    "year": "2007",
    "users_rating": "7.6",
    "votes": "507,141",
    "metascore": "76",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jonah Hill",
      "Michael Cera",
      "Christopher Mintz-Plasse",
      "Bill Hader",
      "Seth Rogen",
      "Martha MacIsaac",
      "Emma Stone",
      "Aviva Baumann",
      "Joe Lo Truglio",
      "Kevin Corrigan",
      "Clement Blake",
      "Erica Vittina Phillips",
      "Joe Nunez",
      "Dave Franco",
      "Marcella Lentz-Pope"
    ],
    "genre": [
      "Comedy"
    ],
    "tagline": "Come and Get Some",
    "description": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    "directors": [
      "Greg Mottola"
    ],
    "runtime": "113 min",
    "imdb_url": "https://www.imdb.com/title/tt0829482/"
  },
  {
    "title": "I Am Legend",
    "rating": "PG-13",
    "year": "2007",
    "users_rating": "7.2",
    "votes": "669,173",
    "metascore": "65",
    "img_url": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Will Smith",
      "Alice Braga",
      "Charlie Tahan",
      "Salli Richardson-Whitfield",
      "Willow Smith",
      "Darrell Foster",
      "April Grace",
      "Dash Mihok",
      "Joanna Numata",
      "Abbey",
      "Kona",
      "Samuel Glen",
      "James McCauley",
      "Marin Ireland",
      "Pedro Mojica"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "Welcome to earth. Population 1.",
    "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure in this post-apocalyptic action thriller.",
    "directors": [
      "Francis Lawrence"
    ],
    "runtime": "101 min",
    "imdb_url": "https://www.imdb.com/title/tt0480249/"
  },
  {
    "title": "The Kitchen",
    "rating": "R",
    "year": "2019",
    "users_rating": "5.4",
    "votes": "12,248",
    "metascore": "35",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZGEwMWJlNzMtMjQ4YS00YjI4LTkwZTYtMGFiZTY5YmE2ZTIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Canada"
    ],
    "languages": [
      "English",
      "Hebrew"
    ],
    "actors": [
      "Melissa McCarthy",
      "Tiffany Haddish",
      "Elisabeth Moss",
      "Domhnall Gleeson",
      "James Badge Dale",
      "Brian d'Arcy James",
      "Jeremy Bobb",
      "Margo Martindale",
      "Bill Camp",
      "Common",
      "E.J. Bonilla",
      "Myk Watford",
      "Wayne Duvall",
      "Pamela Dunlap",
      "John Sharian"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "tagline": null,
    "description": "The wives of New York gangsters in Hell's Kitchen in the 1970s continue to operate their husbands' rackets after they're locked up in prison.",
    "directors": [
      "Andrea Berloff"
    ],
    "runtime": "102 min",
    "imdb_url": "https://www.imdb.com/title/tt5822564/"
  },
  {
    "title": "Star Wars: Episode II - Attack of the Clones",
    "rating": "PG",
    "year": "2002",
    "users_rating": "6.5",
    "votes": "620,176",
    "metascore": "54",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Ewan McGregor",
      "Natalie Portman",
      "Hayden Christensen",
      "Christopher Lee",
      "Samuel L. Jackson",
      "Frank Oz",
      "Ian McDiarmid",
      "Pernilla August",
      "Temuera Morrison",
      "Jimmy Smits",
      "Jack Thompson",
      "Leeanna Walsman",
      "Ahmed Best",
      "Rose Byrne",
      "Oliver Ford Davies"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "tagline": "A Jedi Shall Not Know Anger.  Nor Hatred.  Nor Love.",
    "description": "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
    "directors": [
      "George Lucas"
    ],
    "runtime": "142 min",
    "imdb_url": "https://www.imdb.com/title/tt0121765/"
  },
  {
    "title": "Vertigo",
    "rating": "PG",
    "year": "1958",
    "users_rating": "8.3",
    "votes": "346,708",
    "metascore": "100",
    "img_url": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "James Stewart",
      "Kim Novak",
      "Barbara Bel Geddes",
      "Tom Helmore",
      "Henry Jones",
      "Raymond Bailey",
      "Ellen Corby",
      "Konstantin Shayne",
      "Lee Patrick"
    ],
    "genre": [
      "Mystery",
      "Romance",
      "Thriller"
    ],
    "tagline": "A tall story about a pushover [Video]",
    "description": "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
    "directors": [
      "Alfred Hitchcock"
    ],
    "runtime": "128 min",
    "imdb_url": "https://www.imdb.com/title/tt0052357/"
  },
  {
    "title": "Debt Collectors",
    "rating": null,
    "year": "2020",
    "users_rating": "5.6",
    "votes": "562",
    "metascore": null,
    "img_url": "https://m.media-amazon.com/images/M/MV5BNDI4YTM4YjEtODhjNC00ZmEwLWIzOWItMmM1M2Y3MmVlZTIzXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Scott Adkins",
      "Louis Mandylor",
      "Marina Sirtis",
      "Catherine Black",
      "Josef Cannon",
      "Ski Carr",
      "Charity Collins",
      "Robert Dobson",
      "Austin Durden",
      "Dasha German",
      "R Scott Hoffman",
      "Jermaine Jacox",
      "Vladimir Kulich",
      "Mike Maolucci",
      "Mariano 'Big Dawg' Mendoza"
    ],
    "genre": [
      "Action"
    ],
    "tagline": null,
    "description": "A pair of debt collectors are thrust into an explosively dangerous situation, chasing down various lowlifes while also evading a vengeful kingpin. -Samuel Goldwyn Films-",
    "directors": [
      "Jesse V. Johnson"
    ],
    "runtime": "97 min",
    "imdb_url": "https://www.imdb.com/title/tt10933680/"
  },
  {
    "title": "Mortal Kombat Legends: Scorpion's Revenge",
    "rating": "R",
    "year": "2020",
    "users_rating": "7.5",
    "votes": "7,885",
    "metascore": null,
    "img_url": "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jennifer Carpenter",
      "Joel McHale",
      "Ike Amadi",
      "Steve Blum",
      "Artt Butler",
      "Darin De Paul",
      "Robin Atkin Downes",
      "Grey Griffin",
      "Dave B. Mitchell",
      "Kevin Michael Richardson",
      "Jordan Rodrigues",
      "Patrick Seitz",
      "Fred Tatasciore"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "tagline": null,
    "description": "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
    "directors": [
      "Ethan Spaulding"
    ],
    "runtime": "80 min",
    "imdb_url": "https://www.imdb.com/title/tt9580138/"
  },
  {
    "title": "Blade Runner",
    "rating": "R",
    "year": "1982",
    "users_rating": "8.1",
    "votes": "670,715",
    "metascore": "84",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "German",
      "Cantonese",
      "Japanese",
      "Hungarian",
      "Arabic"
    ],
    "actors": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young",
      "Edward James Olmos",
      "M. Emmet Walsh",
      "Daryl Hannah",
      "William Sanderson",
      "Brion James",
      "Joe Turkel",
      "Joanna Cassidy",
      "James Hong",
      "Morgan Paull",
      "Kevin Thompson",
      "John Edward Allen",
      "Hy Pyke"
    ],
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "The star of \"RAIDERS OF THE LOST ARK\" and the director of \"ALIEN\" take you on a spectacular journey to the savage world of the year 2019!!",
    "description": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    "directors": [
      "Ridley Scott"
    ],
    "runtime": "117 min",
    "imdb_url": "https://www.imdb.com/title/tt0083658/"
  },
  {
    "title": "Watchmen",
    "rating": "R",
    "year": "2009",
    "users_rating": "7.6",
    "votes": "486,131",
    "metascore": "56",
    "img_url": "https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Malin Akerman",
      "Billy Crudup",
      "Matthew Goode",
      "Jackie Earle Haley",
      "Jeffrey Dean Morgan",
      "Patrick Wilson",
      "Carla Gugino",
      "Matt Frewer",
      "Stephen McHattie",
      "Laura Mennell",
      "Rob LaBelle",
      "Gary Houston",
      "James M. Connor",
      "Mary Ann Burger",
      "John Shaw"
    ],
    "genre": [
      "Action",
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "tagline": "We're society's only protection.",
    "description": "In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.",
    "directors": [
      "Zack Snyder"
    ],
    "runtime": "162 min",
    "imdb_url": "https://www.imdb.com/title/tt0409459/"
  },
  {
    "title": "Richard Jewell",
    "rating": "R",
    "year": "2019",
    "users_rating": "7.5",
    "votes": "41,140",
    "metascore": "68",
    "img_url": "https://m.media-amazon.com/images/M/MV5BOTFlODg1MTEtZTJhOC00OTY1LWE0YzctZjRlODdkYWY5ZDM4XkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Paul Walter Hauser",
      "Sam Rockwell",
      "Brandon Stanley",
      "Ryan Boz",
      "Charles Green",
      "Olivia Wilde",
      "Mike Pniewski",
      "Jon Hamm",
      "Ian Gomez",
      "Nina Arianda",
      "Kathy Bates",
      "Ronnie Allen",
      "David Lengel",
      "Beth Keener",
      "Grant Roberts"
    ],
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "tagline": "Based on the true story of the 1996 Atlanta Bombing.",
    "description": "American security guard",
    "directors": [
      "Clint Eastwood"
    ],
    "runtime": "131 min",
    "imdb_url": "https://www.imdb.com/title/tt3513548/"
  },
  {
    "title": "Downton Abbey",
    "rating": "PG",
    "year": "2019",
    "users_rating": "7.4",
    "votes": "33,013",
    "metascore": "64",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMmQxNGRkMjYtZTAyMy00MDUyLThiNmYtODI1NTkyNmI0ZTNlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Stephen Campbell Moore",
      "Michael Fox",
      "Lesley Nicol",
      "Sophie McShera",
      "Robert James-Collier",
      "Hugh Bonneville",
      "Allen Leech",
      "Michelle Dockery",
      "Phyllis Logan",
      "Laura Carmichael",
      "Elizabeth McGovern",
      "Jim Carter",
      "Geraldine James",
      "Imelda Staunton",
      "Alex Crisp"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "tagline": "We've Been Expecting You",
    "description": "The continuing story of the Crawley family, wealthy owners of a large estate in the English countryside in the early twentieth century.",
    "directors": [
      "Michael Engler"
    ],
    "runtime": "122 min",
    "imdb_url": "https://www.imdb.com/title/tt6398184/"
  },
  {
    "title": "Toy Story 4",
    "rating": "G",
    "year": "2019",
    "users_rating": "7.8",
    "votes": "181,918",
    "metascore": "84",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Tom Hanks",
      "Tim Allen",
      "Annie Potts",
      "Tony Hale",
      "Keegan-Michael Key",
      "Madeleine McGraw",
      "Christina Hendricks",
      "Jordan Peele",
      "Keanu Reeves",
      "Ally Maki",
      "Jay Hernandez",
      "Lori Alan",
      "Joan Cusack",
      "Bonnie Hunt",
      "Kristen Schaal"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "tagline": "Get Ready To Hit The Road.",
    "description": "When a new toy called \"Forky\" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
    "directors": [
      "Josh Cooley"
    ],
    "runtime": "100 min",
    "imdb_url": "https://www.imdb.com/title/tt1979376/"
  },
  {
    "title": "San Andreas",
    "rating": "PG-13",
    "year": "2015",
    "users_rating": "6.0",
    "votes": "205,022",
    "metascore": "43",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNzZhYmQ2NGMtZmRmYi00NzgzLTllNmUtNDQwZDAxMmE3NzI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Dwayne Johnson",
      "Carla Gugino",
      "Alexandra Daddario",
      "Ioan Gruffudd",
      "Archie Panjabi",
      "Paul Giamatti",
      "Hugo Johnstone-Burt",
      "Art Parkinson",
      "Will Yun Lee",
      "Kylie Minogue",
      "Colton Haynes",
      "Todd Williams",
      "Matt Gerald",
      "Alec Utgoff",
      "Marissa Neitling"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "tagline": "Ever have one of THOSE days...? Pray you don't.",
    "description": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife across the state in order to rescue his daughter.",
    "directors": [
      "Brad Peyton"
    ],
    "runtime": "114 min",
    "imdb_url": "https://www.imdb.com/title/tt2126355/"
  },
  {
    "title": "The Age of Adaline",
    "rating": "PG-13",
    "year": "2015",
    "users_rating": "7.2",
    "votes": "148,852",
    "metascore": "51",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTAzMTQzMTA2MjheQTJeQWpwZ15BbWU4MDk2MTg2MzUx._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Canada"
    ],
    "languages": [
      "English",
      "Portuguese",
      "Italian"
    ],
    "actors": [
      "Blake Lively",
      "Michiel Huisman",
      "Harrison Ford",
      "Ellen Burstyn",
      "Kathy Baker",
      "Amanda Crew",
      "Lynda Boyd",
      "Hugh Ross",
      "Richard Harmon",
      "Fulvio Cecere",
      "Anjali Jay",
      "Hiro Kanagawa",
      "Peter J. Gray",
      "Izabel Pearce",
      "Cate Richardson"
    ],
    "genre": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "tagline": "Adaline was ageless until she found something timeless.",
    "description": "A young woman, born at the turn of the 20th century, is rendered ageless after an accident. After many solitary years, she meets a man who complicates the eternal life she has settled into.",
    "directors": [
      "Lee Toland Krieger"
    ],
    "runtime": "112 min",
    "imdb_url": "https://www.imdb.com/title/tt1655441/"
  },
  {
    "title": "It Comes At Night",
    "rating": "R",
    "year": "2017",
    "users_rating": "6.2",
    "votes": "79,172",
    "metascore": "78",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjQ3MDA0ODA2N15BMl5BanBnXkFtZTgwNzg0NzgwMjI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Joel Edgerton",
      "Christopher Abbott",
      "Carmen Ejogo",
      "Riley Keough",
      "Kelvin Harrison Jr.",
      "Griffin Robert Faulkner",
      "David Pendleton",
      "Mikey",
      "Chase Joliet",
      "Mick O'Rourke"
    ],
    "genre": [
      "Horror",
      "Mystery"
    ],
    "tagline": null,
    "description": "Secure within a desolate home as an unnatural threat terrorizes the world, a man has established a tenuous domestic order with his wife and son. Then a desperate young family arrives seeking refuge.",
    "directors": [
      "Trey Edward Shults"
    ],
    "runtime": "91 min",
    "imdb_url": "https://www.imdb.com/title/tt4695012/"
  },
  {
    "title": "The Master",
    "rating": "R",
    "year": "2012",
    "users_rating": "7.2",
    "votes": "147,339",
    "metascore": "86",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTQ2NjQ5MzMwMF5BMl5BanBnXkFtZTcwMjczNTAzOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "Filipino",
      "English"
    ],
    "actors": [
      "Joaquin Phoenix",
      "Price Carson",
      "Mike Howard",
      "Sarah Shoshana David",
      "Bruce Goodchild",
      "Matt Hering",
      "Dan Anderson",
      "Andrew Koponen",
      "Jeffrey W. Jenkins",
      "Patrick Wilder",
      "Ryan Curtis",
      "Jay Laurence",
      "Abraxas Adams",
      "Tina Bruna",
      "Kevin Hudnell"
    ],
    "genre": [
      "Drama"
    ],
    "tagline": null,
    "description": "A Naval veteran arrives home from war unsettled and uncertain of his future - until he is tantalized by the Cause and its charismatic leader.",
    "directors": [
      "Paul Thomas Anderson"
    ],
    "runtime": "138 min",
    "imdb_url": "https://www.imdb.com/title/tt1560747/"
  },
  {
    "title": "No Escape",
    "rating": "R",
    "year": "2015",
    "users_rating": "6.8",
    "votes": "75,312",
    "metascore": "38",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Thailand"
    ],
    "languages": [
      "English",
      "French",
      "Thai",
      "Khmer"
    ],
    "actors": [
      "Owen Wilson",
      "Lake Bell",
      "Sterling Jerins",
      "Claire Geare",
      "Pierce Brosnan",
      "Thanawut Ketsaro",
      "Chatchawai Kamonsakpitak",
      "Sahajak Boonthanakit",
      "Tanapol Chuksrida",
      "Nophand Boonyai",
      "Kanarpat Phintiang",
      "Jon Goldney",
      "Duang Maidork",
      "Suphornnaphat Jenselius",
      "Barthélemy Son"
    ],
    "genre": [
      "Action",
      "Thriller"
    ],
    "tagline": "Outrun the enemy",
    "description": "In their new overseas house, an American family soon finds themselves caught in the middle of a coup, and they frantically look for a safe escape from an environment where foreigners are being immediately executed.",
    "directors": [
      "John Erick Dowdle"
    ],
    "runtime": "103 min",
    "imdb_url": "https://www.imdb.com/title/tt1781922/"
  },
  {
    "title": "Robin Hood",
    "rating": "PG-13",
    "year": "2010",
    "users_rating": "6.6",
    "votes": "247,986",
    "metascore": "53",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English",
      "French",
      "Ukrainian"
    ],
    "actors": [
      "Russell Crowe",
      "Cate Blanchett",
      "Max von Sydow",
      "William Hurt",
      "Mark Strong",
      "Oscar Isaac",
      "Danny Huston",
      "Eileen Atkins",
      "Mark Addy",
      "Matthew Macfadyen",
      "Kevin Durand",
      "Scott Grimes",
      "Alan Doyle",
      "Douglas Hodge",
      "Léa Seydoux"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "History"
    ],
    "tagline": "Outlaw. Warrior. Hero.",
    "description": "In twelfth century England, Robin Longstride (",
    "directors": [
      "Ridley Scott"
    ],
    "runtime": "140 min",
    "imdb_url": "https://www.imdb.com/title/tt0955308/"
  },
  {
    "title": "Immortals",
    "rating": "R",
    "year": "2011",
    "users_rating": "6.0",
    "votes": "157,957",
    "metascore": "46",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTMzMjA2MjA2N15BMl5BanBnXkFtZTcwMTkwNTc5Ng@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Canada",
      "UK"
    ],
    "languages": [
      "English",
      "Greek"
    ],
    "actors": [
      "Henry Cavill",
      "Mickey Rourke",
      "Stephen Dorff",
      "Freida Pinto",
      "Luke Evans",
      "John Hurt",
      "Joseph Morgan",
      "Anne Day-Jones",
      "Greg Bryk",
      "Alan Van Sprang",
      "Peter Stebbings",
      "Daniel Sharman",
      "Isabel Lucas",
      "Kellan Lutz",
      "Steve Byers"
    ],
    "genre": [
      "Action",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "tagline": "The Gods Need a Hero",
    "description": "Theseus is a mortal man chosen by Zeus to lead the fight against the ruthless King Hyperion, who is on a rampage across Greece to obtain a weapon that can destroy humanity.",
    "directors": [
      "Tarsem Singh"
    ],
    "runtime": "110 min",
    "imdb_url": "https://www.imdb.com/title/tt1253864/"
  },
  {
    "title": "American Graffiti",
    "rating": "PG",
    "year": "1973",
    "users_rating": "7.4",
    "votes": "78,975",
    "metascore": "97",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjI5NjM5MjIyNF5BMl5BanBnXkFtZTgwNjg2MTUxMDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Richard Dreyfuss",
      "Ron Howard",
      "Paul Le Mat",
      "Charles Martin Smith",
      "Cindy Williams",
      "Candy Clark",
      "Mackenzie Phillips",
      "Wolfman Jack",
      "Bo Hopkins",
      "Manuel Padilla Jr.",
      "Beau Gentry",
      "Harrison Ford",
      "Jim Bohan",
      "Jana Bellan",
      "Deby Celiz"
    ],
    "genre": [
      "Comedy",
      "Drama"
    ],
    "tagline": "...is back! [1978 Re-release]",
    "description": "A couple of high school grads spend one final night cruising the strip with their buddies before they go off to college.",
    "directors": [
      "George Lucas"
    ],
    "runtime": "110 min",
    "imdb_url": "https://www.imdb.com/title/tt0069704/"
  },
  {
    "title": "The Professor and the Madman",
    "rating": null,
    "year": "2019",
    "users_rating": "7.3",
    "votes": "27,015",
    "metascore": "25",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNjRjNWIxMWMtNzcxYi00NDYyLWFmMzAtZTRiZWZhZDMwZmVkXkEyXkFqcGdeQXVyMjExMDE1MzQ@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
    "countries": [
      "Ireland",
      "France",
      "Iceland",
      "USA",
      "Mexico",
      "Belgium",
      "UK",
      "Hong Kong"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Mel Gibson",
      "Sean Penn",
      "Eddie Marsan",
      "Natalie Dormer",
      "Jennifer Ehle",
      "Steve Coogan",
      "Stephen Dillane",
      "Ioan Gruffudd",
      "Jeremy Irvine",
      "Laurence Fox",
      "Anthony Andrews",
      "Lars Brygmann",
      "Bryan Murray",
      "David O'Hara",
      "Sean Duggan"
    ],
    "genre": [
      "Biography",
      "Drama"
    ],
    "tagline": "The Incredible True Story That Defined Our World.",
    "description": "Professor James Murray begins work compiling words for the first edition of the Oxford English Dictionary in the mid-19th century, and receives over 10,000 entries from a patient at Broadmoor Criminal Lunatic Asylum, Dr. William Minor.",
    "directors": [
      "Farhad Safinia"
    ],
    "runtime": "124 min",
    "imdb_url": "https://www.imdb.com/title/tt5932728/"
  },
  {
    "title": "Sixteen Candles",
    "rating": "PG",
    "year": "1984",
    "users_rating": "7.1",
    "votes": "101,110",
    "metascore": "61",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTgzNTkxMTkxMl5BMl5BanBnXkFtZTgwMjE3NjkzMTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Molly Ringwald",
      "Justin Henry",
      "Michael Schoeffling",
      "Haviland Morris",
      "Gedde Watanabe",
      "Anthony Michael Hall",
      "Paul Dooley",
      "Carlin Glynn",
      "Blanche Baker",
      "Edward Andrews",
      "Billie Bird",
      "Carole Cook",
      "Max Showalter",
      "Liane Curtis",
      "John Cusack"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "tagline": "This is Samantha Baker and today is her 16th birthday. The problem is, nobody remembers.",
    "description": "A girl's \"sweet\" sixteenth birthday becomes anything but special, as she suffers from every embarrassment possible.",
    "directors": [
      "John Hughes"
    ],
    "runtime": "93 min",
    "imdb_url": "https://www.imdb.com/title/tt0088128/"
  },
  {
    "title": "Fractured",
    "rating": "TV-MA",
    "year": "2019",
    "users_rating": "6.4",
    "votes": "46,200",
    "metascore": "36",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZTE0MWE4NzMtMzc4Ny00NWE4LTg2OTQtZmIyNDdhZjdiZmJhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UY268_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Sam Worthington",
      "Lily Rabe",
      "Lucy Capri",
      "Adjoa Andoh",
      "Stephen Tobolowsky",
      "Lauren Cochrane",
      "Shane Dean",
      "Chris Sigurdson",
      "Chad Bruce",
      "Gabriel Daniels",
      "Stephanie Sy",
      "Marina Stephenson Kerr",
      "Dorothy Carroll",
      "Erik Athavale",
      "Natalie Malaika"
    ],
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "tagline": "Finding his family means facing the truth",
    "description": "A couple stops at a gas station, where their 6 y.o. daughter's arm is fractured. They hurry to a hospital. Something strange is going on there. The wife and daughter go missing.",
    "directors": [
      "Brad Anderson"
    ],
    "runtime": "99 min",
    "imdb_url": "https://www.imdb.com/title/tt4332232/"
  },
  {
    "title": "Battleship",
    "rating": "PG-13",
    "year": "2012",
    "users_rating": "5.8",
    "votes": "232,029",
    "metascore": "41",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjI5NTM5MDA2N15BMl5BanBnXkFtZTcwNjkwMzQxNw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Japanese"
    ],
    "actors": [
      "Taylor Kitsch",
      "Alexander Skarsgård",
      "Rihanna",
      "Brooklyn Decker",
      "Tadanobu Asano",
      "Hamish Linklater",
      "Liam Neeson",
      "Peter MacNicol",
      "John Tui",
      "Jesse Plemons",
      "Gregory D. Gadson",
      "Jerry Ferrara",
      "Adam Godley",
      "Rico McClinton",
      "Joji Yoshida"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "The Battle for Earth Begins at Sea",
    "description": "A fleet of ships is forced to do battle with an armada of unknown origins in order to discover and thwart their destructive goals.",
    "directors": [
      "Peter Berg"
    ],
    "runtime": "131 min",
    "imdb_url": "https://www.imdb.com/title/tt1440129/"
  },
  {
    "title": "Batman & Robin",
    "rating": "PG-13",
    "year": "1997",
    "users_rating": "3.7",
    "votes": "228,233",
    "metascore": "28",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Arnold Schwarzenegger",
      "George Clooney",
      "Chris O'Donnell",
      "Uma Thurman",
      "Alicia Silverstone",
      "Michael Gough",
      "Pat Hingle",
      "John Glover",
      "Elle Macpherson",
      "Vivica A. Fox",
      "Vendela Kirsebom",
      "Elizabeth Sanders",
      "Jeep Swenson",
      "John Fink",
      "Michael Reid MacKay"
    ],
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "tagline": "Strength Now. Courage Always. Family, Above All. Batman and Robin!",
    "description": "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
    "directors": [
      "Joel Schumacher"
    ],
    "runtime": "125 min",
    "imdb_url": "https://www.imdb.com/title/tt0118688/"
  },
  {
    "title": "Matilda",
    "rating": "PG",
    "year": "1996",
    "users_rating": "6.9",
    "votes": "121,733",
    "metascore": "72",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZTA4MmI5YzgtOTU1Yy00NGVjLTgyMGQtNjNlMDY2YWVlZmYyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Mara Wilson",
      "Danny DeVito",
      "Rhea Perlman",
      "Embeth Davidtz",
      "Pam Ferris",
      "Paul Reubens",
      "Tracey Walter",
      "Brian Levinson",
      "Jean Speegle Howard",
      "Sara Magdalin",
      "R.D. Robb",
      "Gregory R. Goliath",
      "Fred Parnes",
      "Kiami Davael",
      "Leor Livneh Hackel"
    ],
    "genre": [
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "tagline": "A little magic goes a long way.",
    "description": "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable.",
    "directors": [
      "Danny DeVito"
    ],
    "runtime": "98 min",
    "imdb_url": "https://www.imdb.com/title/tt0117008/"
  },
  {
    "title": "Black Hawk Down",
    "rating": "R",
    "year": "2001",
    "users_rating": "7.7",
    "votes": "355,348",
    "metascore": "74",
    "img_url": "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English",
      "Somali",
      "Arabic"
    ],
    "actors": [
      "Josh Hartnett",
      "Ewan McGregor",
      "Tom Sizemore",
      "Eric Bana",
      "William Fichtner",
      "Ewen Bremner",
      "Sam Shepard",
      "Gabriel Casseus",
      "Kim Coates",
      "Hugh Dancy",
      "Ron Eldard",
      "Ioan Gruffudd",
      "Tom Guiry",
      "Charlie Hofheimer",
      "Danny Hoch"
    ],
    "genre": [
      "Drama",
      "History",
      "War"
    ],
    "tagline": "Rangers Lead the Way.",
    "description": "160 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis.",
    "directors": [
      "Ridley Scott"
    ],
    "runtime": "144 min",
    "imdb_url": "https://www.imdb.com/title/tt0265086/"
  },
  {
    "title": "The Art of Racing in the Rain",
    "rating": "PG",
    "year": "2019",
    "users_rating": "7.5",
    "votes": "19,447",
    "metascore": "43",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZjU5ZTYzM2MtNDNhYi00YjU1LWE4MzEtODc0NmNlODZlMjlhXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Italian"
    ],
    "actors": [
      "Kevin Costner",
      "Milo Ventimiglia",
      "Jackie Minns",
      "Marcus Hondro",
      "Ian Lake",
      "Andres Joseph",
      "Gary Cole",
      "Donald Heng",
      "Peter Ciuffa",
      "Matthew Kevin Anderson",
      "Amanda Seyfried",
      "Kathy Baker",
      "Martin Donovan",
      "Reva Dexter",
      "Kasia Machelak"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance",
      "Sport"
    ],
    "tagline": "Meet the Dog Who Will Show the World How to Be Human",
    "description": "Through his bond with his owner, aspiring Formula One race car driver Denny, golden retriever Enzo learns that the techniques needed on the racetrack can also be used to successfully navigate the journey of life.",
    "directors": [
      "Simon Curtis"
    ],
    "runtime": "109 min",
    "imdb_url": "https://www.imdb.com/title/tt1478839/"
  },
  {
    "title": "The Last House on the Left",
    "rating": "R",
    "year": "2009",
    "users_rating": "6.5",
    "votes": "83,276",
    "metascore": "42",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjExMTM4MDAwOF5BMl5BanBnXkFtZTcwODcyMDIzMg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Garret Dillahunt",
      "Michael Bowen",
      "Josh Coxx",
      "Riki Lindhome",
      "Aaron Paul",
      "Sara Paxton",
      "Monica Potter",
      "Tony Goldwyn",
      "Martha MacIsaac",
      "Spencer Treat Clark",
      "Usha Khan"
    ],
    "genre": [
      "Horror",
      "Thriller"
    ],
    "tagline": "If someone hurt someone you love, how far would you go to get revenge?",
    "description": "After kidnapping and brutally assaulting two young women, a gang unknowingly finds refuge at a vacation home belonging to the parents of one of the victims: a mother and father who devise an increasingly gruesome series of revenge tactics.",
    "directors": [
      "Dennis Iliadis"
    ],
    "runtime": "110 min",
    "imdb_url": "https://www.imdb.com/title/tt0844708/"
  },
  {
    "title": "O Brother, Where Art Thou?",
    "rating": "PG-13",
    "year": "2000",
    "users_rating": "7.7",
    "votes": "276,307",
    "metascore": "69",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "France",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "George Clooney",
      "John Turturro",
      "Tim Blake Nelson",
      "John Goodman",
      "Holly Hunter",
      "Chris Thomas King",
      "Charles Durning",
      "Del Pentecost",
      "Michael Badalucco",
      "J.R. Horne",
      "Brian Reddy",
      "Wayne Duvall",
      "Ed Gale",
      "Ray McKinnon",
      "Daniel von Bargen"
    ],
    "genre": [
      "Adventure",
      "Comedy",
      "Crime",
      "Music"
    ],
    "tagline": "Sometimes, you have to lose your way to get back home",
    "description": "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.",
    "directors": [
      "Joel Coen",
      "Ethan Coen"
    ],
    "runtime": "107 min",
    "imdb_url": "https://www.imdb.com/title/tt0190590/"
  },
  {
    "title": "Moon",
    "rating": "R",
    "year": "2009",
    "users_rating": "7.9",
    "votes": "326,750",
    "metascore": "67",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English",
      "Spanish"
    ],
    "actors": [
      "Sam Rockwell",
      "Kevin Spacey",
      "Dominique McElligott",
      "Rosie Shaw",
      "Adrienne Shaw",
      "Kaya Scodelario",
      "Benedict Wong",
      "Matt Berry",
      "Malcolm Stewart",
      "Robin Chalk"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "tagline": "The last place you'd ever expect to find yourself",
    "description": "Astronaut Sam Bell has a quintessentially personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends back to Earth parcels of a resource that has helped diminish our planet's power problems.",
    "directors": [
      "Duncan Jones"
    ],
    "runtime": "97 min",
    "imdb_url": "https://www.imdb.com/title/tt1182345/"
  },
  {
    "title": "No Strings Attached",
    "rating": "R",
    "year": "2011",
    "users_rating": "6.2",
    "votes": "207,702",
    "metascore": "50",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTg2MDQ1NTEzNl5BMl5BanBnXkFtZTcwOTgxNTMyNA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English",
      "Ukrainian"
    ],
    "actors": [
      "Natalie Portman",
      "Ashton Kutcher",
      "Kevin Kline",
      "Cary Elwes",
      "Greta Gerwig",
      "Lake Bell",
      "Olivia Thirlby",
      "Ludacris",
      "Jake Johnson",
      "Mindy Kaling",
      "Talia Balsam",
      "Ophelia Lovibond",
      "Guy Branum",
      "Ben Lawson",
      "Jennifer Irwin"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "tagline": "Friendship has its benefits",
    "description": "A guy and girl try to keep their relationship strictly physical, but it's not long before they learn that they want something more.",
    "directors": [
      "Ivan Reitman"
    ],
    "runtime": "108 min",
    "imdb_url": "https://www.imdb.com/title/tt1411238/"
  },
  {
    "title": "Movie 43",
    "rating": "R",
    "year": "2013",
    "users_rating": "4.3",
    "votes": "97,355",
    "metascore": "18",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTg4NzQ3NDM1Nl5BMl5BanBnXkFtZTcwNjEzMjM3OA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Dennis Quaid",
      "Greg Kinnear",
      "Common",
      "Charlie Saxton",
      "Will Sasso",
      "Odessa Rae",
      "Seth MacFarlane",
      "Mike Meldman",
      "Hugh Jackman",
      "Kate Winslet",
      "Julie Claire",
      "Katie Finneran",
      "Roy Jenkins",
      "Rocky Russo",
      "Anna Madigan"
    ],
    "genre": [
      "Comedy"
    ],
    "tagline": "Some extremely warped minds have gathered together the most astonishing A list cast in cinematic history... and then made them expose themselves like never before.",
    "description": "A series of interconnected short films follows a washed-up producer as he pitches insane story lines featuring some of the biggest stars in Hollywood.",
    "directors": [
      "Elizabeth Banks",
      "Steven Brill",
      "11 more credits"
    ],
    "runtime": "94 min",
    "imdb_url": "https://www.imdb.com/title/tt1333125/"
  },
  {
    "title": "The Gift",
    "rating": "R",
    "year": "2015",
    "users_rating": "7.0",
    "votes": "133,058",
    "metascore": "77",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTQzMjM2NjM1Nl5BMl5BanBnXkFtZTgwMDM1MjQyNTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Australia",
      "China"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jason Bateman",
      "Rebecca Hall",
      "Joel Edgerton",
      "Allison Tolman",
      "Tim Griffin",
      "Busy Philipps",
      "Adam Lazarre-White",
      "Beau Knapp",
      "Wendell Pierce",
      "Mirrah Foulkes",
      "Nash Edgerton",
      "David Denman",
      "Katie Aselton",
      "David Joseph Craig",
      "Susan May Pratt"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "tagline": "Not Every Gift Is Welcome.",
    "description": "A young married couple's lives are thrown into a harrowing tailspin when an acquaintance from the husband's past brings mysterious gifts and a horrifying secret to light after more than 20 years.",
    "directors": [
      "Joel Edgerton"
    ],
    "runtime": "108 min",
    "imdb_url": "https://www.imdb.com/title/tt4178092/"
  },
  {
    "title": "The Da Vinci Code",
    "rating": "PG-13",
    "year": "2006",
    "users_rating": "6.6",
    "votes": "389,770",
    "metascore": "46",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjIxMjQyMTc3Nl5BMl5BanBnXkFtZTcwMTA1MDUzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Malta",
      "France",
      "UK"
    ],
    "languages": [
      "English",
      "French",
      "Latin",
      "Spanish"
    ],
    "actors": [
      "Tom Hanks",
      "Audrey Tautou",
      "Ian McKellen",
      "Jean Reno",
      "Paul Bettany",
      "Alfred Molina",
      "Jürgen Prochnow",
      "Jean-Yves Berteloot",
      "Etienne Chicot",
      "Jean-Pierre Marielle",
      "Marie-Françoise Audollent",
      "Rita Davies",
      "Francesco Carnelutti",
      "Seth Gabel",
      "Shane Zaza"
    ],
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "tagline": "Seek The Truth",
    "description": "A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity.",
    "directors": [
      "Ron Howard"
    ],
    "runtime": "149 min",
    "imdb_url": "https://www.imdb.com/title/tt0382625/"
  },
  {
    "title": "The Equalizer 2",
    "rating": "R",
    "year": "2018",
    "users_rating": "6.7",
    "votes": "119,751",
    "metascore": "50",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "French",
      "Turkish",
      "Hebrew",
      "Arabic",
      "Spanish"
    ],
    "actors": [
      "Denzel Washington",
      "Pedro Pascal",
      "Ashton Sanders",
      "Orson Bean",
      "Bill Pullman",
      "Melissa Leo",
      "Jonathan Scarfe",
      "Sakina Jaffrey",
      "Kazy Tauginas",
      "Garrett Golden",
      "Adam Karst",
      "Alican Barlas",
      "Rhys Olivia Cote",
      "Tamara Hickey",
      "Ken Baltin"
    ],
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "tagline": "There will be consequences.",
    "description": "Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?",
    "directors": [
      "Antoine Fuqua"
    ],
    "runtime": "121 min",
    "imdb_url": "https://www.imdb.com/title/tt3766354/"
  },
  {
    "title": "Blow the Man Down",
    "rating": "R",
    "year": "2019",
    "users_rating": "6.4",
    "votes": "4,228",
    "metascore": "72",
    "img_url": "https://m.media-amazon.com/images/M/MV5BYmM3MDlkNDItN2RhNy00Mjc2LWJmNjktODk4NGE0NmRmMTFkXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "David Coffin",
      "David Pridemore",
      "Adam Wolf Mayerson",
      "Mark S. Cartier",
      "Meredith Holzman",
      "Ebon Moss-Bachrach",
      "Sophie Lowe",
      "Morgan Saylor",
      "June Squibb",
      "Marceline Hugot",
      "Annette O'Toole",
      "Linda Shary",
      "Margo Martindale",
      "Owen Burke",
      "Skipp Sudduth"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Mystery"
    ],
    "tagline": null,
    "description": "Mary Beth and Priscilla Connolly attempt to cover up a gruesome run-in with a dangerous man. To conceal their crime, the sisters must go deep into the criminal underbelly of their hometown, uncovering the town's darkest secrets.",
    "directors": [
      "Bridget Savage Cole",
      "Danielle Krudy"
    ],
    "runtime": "91 min",
    "imdb_url": "https://www.imdb.com/title/tt8299768/"
  },
  {
    "title": "Notting Hill",
    "rating": "PG-13",
    "year": "1999",
    "users_rating": "7.1",
    "votes": "262,262",
    "metascore": "68",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTE5OTkwYzYtNDhlNC00MzljLTk1YTktY2IxZjliZmNjMjUzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English",
      "Spanish"
    ],
    "actors": [
      "Julia Roberts",
      "Hugh Grant",
      "Richard McCabe",
      "Rhys Ifans",
      "James Dreyfus",
      "Dylan Moran",
      "Roger Frost",
      "Henry Goodman",
      "Julian Rhind-Tutt",
      "Lorelei King",
      "John Shrapnel",
      "Clarke Peters",
      "Arturo Venegas",
      "Yolanda Vazquez",
      "Mischa Barton"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "tagline": "Can the most famous film star in the world fall for just an ordinary guy?",
    "description": "The life of a simple bookshop owner changes when he meets the most famous film star in the world.",
    "directors": [
      "Roger Michell"
    ],
    "runtime": "124 min",
    "imdb_url": "https://www.imdb.com/title/tt0125439/"
  },
  {
    "title": "The Waterboy",
    "rating": "PG-13",
    "year": "1998",
    "users_rating": "6.1",
    "votes": "144,663",
    "metascore": "41",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNzJmZDZlMGItZGJhOC00Y2NjLTljNzctMDg5YmQ1NzU3NzYzL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Adam Sandler",
      "Kathy Bates",
      "Henry Winkler",
      "Fairuza Balk",
      "Jerry Reed",
      "Lawrence Gilliard Jr.",
      "Blake Clark",
      "Peter Dante",
      "Jonathan Loughran",
      "Al Whiting",
      "Clint Howard",
      "Allen Covert",
      "Rob Schneider",
      "Todd Holland",
      "Robert Kokol"
    ],
    "genre": [
      "Comedy",
      "Sport"
    ],
    "tagline": "Everybody will feel his pain November 6.",
    "description": "A waterboy for a college football team discovers he has a unique tackling ability and becomes a member of the team.",
    "directors": [
      "Frank Coraci"
    ],
    "runtime": "90 min",
    "imdb_url": "https://www.imdb.com/title/tt0120484/"
  },
  {
    "title": "Dredd",
    "rating": "R",
    "year": "2012",
    "users_rating": "7.1",
    "votes": "244,379",
    "metascore": "60",
    "img_url": "https://m.media-amazon.com/images/M/MV5BODkyNDQzMzUzOF5BMl5BanBnXkFtZTcwODYyMDEyOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "South Africa",
      "USA",
      "India"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Karl Urban",
      "Rachel Wood",
      "Andile Mngadi",
      "Porteus Xandau",
      "Jason Cope",
      "Emma Breschi",
      "Olivia Thirlby",
      "Rakie Ayola",
      "Lena Headey",
      "Tamer Burjaq",
      "Warrick Grier",
      "Wood Harris",
      "Shoki Mokgapa",
      "Yohan Chun",
      "Eden Knowles"
    ],
    "genre": [
      "Action",
      "Crime",
      "Sci-Fi"
    ],
    "tagline": "Judgment is coming",
    "description": "In a violent, futuristic city where the police have the authority to act as judge, jury and executioner, a cop teams with a trainee to take down a gang that deals the reality-altering drug, SLO-MO.",
    "directors": [
      "Pete Travis"
    ],
    "runtime": "95 min",
    "imdb_url": "https://www.imdb.com/title/tt1343727/"
  },
  {
    "title": "Fast & Furious 6",
    "rating": "PG-13",
    "year": "2013",
    "users_rating": "7.1",
    "votes": "360,689",
    "metascore": "61",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Japan",
      "Spain",
      "UK"
    ],
    "languages": [
      "English",
      "Spanish",
      "Russian",
      "Japanese",
      "Cantonese",
      "Dutch"
    ],
    "actors": [
      "Vin Diesel",
      "Paul Walker",
      "Dwayne Johnson",
      "Jordana Brewster",
      "Michelle Rodriguez",
      "Tyrese Gibson",
      "Sung Kang",
      "Gal Gadot",
      "Ludacris",
      "Luke Evans",
      "Elsa Pataky",
      "Gina Carano",
      "Clara Paget",
      "Kim Kold",
      "Joe Taslim"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "tagline": "All roads lead to this",
    "description": "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
    "directors": [
      "Justin Lin"
    ],
    "runtime": "130 min",
    "imdb_url": "https://www.imdb.com/title/tt1905041/"
  },
  {
    "title": "Scent of a Woman",
    "rating": "R",
    "year": "1992",
    "users_rating": "8.0",
    "votes": "248,620",
    "metascore": "59",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZTM3ZjA3NTctZThkYy00ODYyLTk2ZjItZmE0MmZlMTk3YjQwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Al Pacino",
      "Chris O'Donnell",
      "James Rebhorn",
      "Gabrielle Anwar",
      "Philip Seymour Hoffman",
      "Richard Venture",
      "Bradley Whitford",
      "Rochelle Oliver",
      "Margaret Eginton",
      "Tom Riis Farrell",
      "Nicholas Sadler",
      "Todd Louiso",
      "Matt Smith",
      "Gene Canfield",
      "Frances Conroy"
    ],
    "genre": [
      "Drama"
    ],
    "tagline": "Col. Frank Slade has a very special plan for the weekend. It involves travel, women, good food, fine wine, the tango, chauffeured limousines and a loaded forty-five. And he's bringing Charlie along for the ride.",
    "description": "A prep school student needing money agrees to \"babysit\" a blind man, but the job is not at all what he anticipated.",
    "directors": [
      "Martin Brest"
    ],
    "runtime": "156 min",
    "imdb_url": "https://www.imdb.com/title/tt0105323/"
  },
  {
    "title": "The Laundromat",
    "rating": "R",
    "year": "2019",
    "users_rating": "6.3",
    "votes": "38,813",
    "metascore": "57",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjFjMGVmYjUtNGVmYy00NTAwLWJhNjAtZGFkYjgzNzI3YTY4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Mandarin",
      "Spanish",
      "Russian"
    ],
    "actors": [
      "Gary Oldman",
      "Antonio Banderas",
      "AJ Meijer",
      "Arsenio Castellanos",
      "Lucy Morningstar",
      "Meryl Streep",
      "James Cromwell",
      "Jeff Michalski",
      "Jane Morris",
      "Robert Patrick",
      "Chris McLaughlin",
      "Jay Paulson",
      "Melissa Rauch",
      "Juliet Donenfeld",
      "Brock Brenner"
    ],
    "genre": [
      "Comedy",
      "Crime",
      "Drama",
      "History"
    ],
    "tagline": "Based on actual secrets",
    "description": "A widow investigates an insurance fraud, chasing leads to a pair of Panama City law partners exploiting the world's financial system.",
    "directors": [
      "Steven Soderbergh"
    ],
    "runtime": "95 min",
    "imdb_url": "https://www.imdb.com/title/tt5865326/"
  },
  {
    "title": "Edward Scissorhands",
    "rating": "PG-13",
    "year": "1990",
    "users_rating": "7.9",
    "votes": "433,811",
    "metascore": "74",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNDUxN2I5NDUtZjdlMC00NjlmLTg0OTQtNjk0NjAxZjFmZTUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Johnny Depp",
      "Winona Ryder",
      "Dianne Wiest",
      "Anthony Michael Hall",
      "Kathy Baker",
      "Robert Oliveri",
      "Conchata Ferrell",
      "Caroline Aaron",
      "Dick Anthony Williams",
      "O-Lan Jones",
      "Vincent Price",
      "Alan Arkin",
      "Susan Blommaert",
      "Linda Perri",
      "John Davidson"
    ],
    "genre": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "tagline": "His scars run deep.",
    "description": "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.",
    "directors": [
      "Tim Burton"
    ],
    "runtime": "105 min",
    "imdb_url": "https://www.imdb.com/title/tt0099487/"
  },
  {
    "title": "High Life",
    "rating": "R",
    "year": "2018",
    "users_rating": "5.8",
    "votes": "24,503",
    "metascore": "77",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMDNjN2NjYmItMjAyZi00NmNkLWJmYTQtYzcwZGRiM2RmNGNlXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "France",
      "UK",
      "Germany",
      "Poland",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Robert Pattinson",
      "Juliette Binoche",
      "André Benjamin",
      "Mia Goth",
      "Agata Buzek",
      "Lars Eidinger",
      "Claire Tran",
      "Ewan Mitchell",
      "Gloria Obianyo",
      "Scarlett Lindsey",
      "Jessie Ross",
      "Victor Banerjee",
      "Juliette Picollot",
      "Mikolaj Gruss",
      "Weronika Wachowska"
    ],
    "genre": [
      "Adventure",
      "Drama",
      "Horror",
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "Oblivion awaits.",
    "description": "A father and his daughter struggle to survive in deep space where they live in isolation.",
    "directors": [
      "Claire Denis"
    ],
    "runtime": "113 min",
    "imdb_url": "https://www.imdb.com/title/tt4827558/"
  },
  {
    "title": "Kids",
    "rating": "Unrated",
    "year": "1995",
    "users_rating": "7.1",
    "votes": "71,032",
    "metascore": "63",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNTNmN2QyNTgtMTk0ZC00NmFhLWJlNzctZmMyYTczZTYyMzA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Leo Fitzpatrick",
      "Sarah Henderson",
      "Justin Pierce",
      "Joseph Chan",
      "Johnathan Staci Kim",
      "Adriane Brown",
      "Sajan Bhagat",
      "Billy Valdes",
      "Billy Waldeman",
      "Javier Nunez",
      "Luis Núñez",
      "Christian Bruna",
      "Alex Glen",
      "Chloë Sevigny",
      "Rosario Dawson"
    ],
    "genre": [
      "Drama"
    ],
    "tagline": null,
    "description": "A day in the life of a group of teens as they travel around New York City skating, drinking, smoking and deflowering virgins.",
    "directors": [
      "Larry Clark"
    ],
    "runtime": "91 min",
    "imdb_url": "https://www.imdb.com/title/tt0113540/"
  },
  {
    "title": "Thirteen",
    "rating": "R",
    "year": "2003",
    "users_rating": "6.8",
    "votes": "78,129",
    "metascore": "70",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTYzNDYxNzY2MF5BMl5BanBnXkFtZTYwNzk2NTc3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "UK"
    ],
    "languages": [
      "English",
      "Spanish",
      "Portuguese"
    ],
    "actors": [
      "Nikki Reed",
      "Evan Rachel Wood",
      "Vanessa Hudgens",
      "Holly Hunter",
      "Brady Corbet",
      "Ulysses Estrada",
      "Sarah Blakley-Cartwright",
      "Jenicka Carey",
      "Sarah Clarke",
      "Jasmine Di Angelo",
      "Tessa Ludwick",
      "Kip Pardue",
      "Cece Tsou",
      "Jeremy Sisto",
      "Jamison Yang"
    ],
    "genre": [
      "Drama"
    ],
    "tagline": "They're not little girls anymore",
    "description": "A thirteen-year-old girl's relationship with her mother is put to the test as she discovers drugs, sex, and petty crime in the company of her cool but troubled best friend.",
    "directors": [
      "Catherine Hardwicke"
    ],
    "runtime": "100 min",
    "imdb_url": "https://www.imdb.com/title/tt0328538/"
  },
  {
    "title": "The Nun",
    "rating": "R",
    "year": "2018",
    "users_rating": "5.3",
    "votes": "109,536",
    "metascore": "46",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "French",
      "Romanian",
      "Latin"
    ],
    "actors": [
      "Demián Bichir",
      "Taissa Farmiga",
      "Jonas Bloquet",
      "Bonnie Aarons",
      "Ingrid Bisu",
      "Patrick Wilson",
      "Vera Farmiga",
      "Lili Taylor",
      "Charlotte Hope",
      "Sandra Teles",
      "Maria Obretin",
      "August Maturo",
      "Jack Falk",
      "Lynnette Gaza",
      "Ani Sava"
    ],
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "tagline": "Pray For Forgiveness",
    "description": "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
    "directors": [
      "Corin Hardy"
    ],
    "runtime": "96 min",
    "imdb_url": "https://www.imdb.com/title/tt5814060/"
  },
  {
    "title": "Before Sunrise",
    "rating": "R",
    "year": "1995",
    "users_rating": "8.1",
    "votes": "257,987",
    "metascore": "77",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Austria",
      "Switzerland"
    ],
    "languages": [
      "English",
      "German",
      "French"
    ],
    "actors": [
      "Ethan Hawke",
      "Julie Delpy",
      "Andrea Eckert",
      "Hanno Pöschl",
      "Karl Bruckschwaiger",
      "Tex Rubinowitz",
      "Erni Mangold",
      "Dominik Castell",
      "Haymon Maria Buttinger",
      "Harald Waiglein",
      "Bilge Jeschim",
      "Kurti",
      "Hans Weingartner",
      "Liese Lyon",
      "Peter Ily Huemer"
    ],
    "genre": [
      "Drama",
      "Romance"
    ],
    "tagline": "... When love can come as a complete surprise",
    "description": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
    "directors": [
      "Richard Linklater"
    ],
    "runtime": "101 min",
    "imdb_url": "https://www.imdb.com/title/tt0112471/"
  },
  {
    "title": "Run All Night",
    "rating": "R",
    "year": "2015",
    "users_rating": "6.6",
    "votes": "99,067",
    "metascore": "59",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTU2ODI3ODEyOV5BMl5BanBnXkFtZTgwMTM3NTQzNDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Liam Neeson",
      "Ed Harris",
      "Joel Kinnaman",
      "Boyd Holbrook",
      "Bruce McGill",
      "Genesis Rodriguez",
      "Vincent D'Onofrio",
      "Lois Smith",
      "Common",
      "Beau Knapp",
      "Patricia Kalember",
      "Daniel Stewart Sherman",
      "James Martinez",
      "Radivoje Bukvic",
      "Tony Naumovski"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "tagline": "One night to settle the score.",
    "description": "Mobster and hit man Jimmy Conlon has one night to figure out where his loyalties lie: with his estranged son, Mike, whose life is in danger, or his longtime best friend, mob boss Shawn Maguire, who wants Mike to pay for the death of his own son.",
    "directors": [
      "Jaume Collet-Serra"
    ],
    "runtime": "114 min",
    "imdb_url": "https://www.imdb.com/title/tt2199571/"
  },
  {
    "title": "Atlantis: The Lost Empire",
    "rating": "PG",
    "year": "2001",
    "users_rating": "6.9",
    "votes": "99,890",
    "metascore": "52",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNjM2NzNjMDAtZTAyMi00NTQzLWFlMTctNTUzMGE1ODE2NDRlXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "French",
      "Spanish"
    ],
    "actors": [
      "Corey Burton",
      "Claudia Christian",
      "Michael J. Fox",
      "James Garner",
      "John Mahoney",
      "Phil Morris",
      "Leonard Nimoy",
      "Don Novello",
      "Jacqueline Obradors",
      "Florence Stanley",
      "David Ogden Stiers",
      "Natalie Strom",
      "Cree Summer",
      "Jim Varney",
      "Jim Cummings"
    ],
    "genre": [
      "Animation",
      "Action",
      "Adventure",
      "Family",
      "Fantasy",
      "Sci-Fi"
    ],
    "tagline": "\"...in a single day and night of misfortune, the island of Atlantis disappeared into the depths of the sea.\" -- Plato, 360 B.C.",
    "description": "A young adventurer named Milo Thatch joins an intrepid group of explorers to find the mysterious lost continent of Atlantis.",
    "directors": [
      "Gary Trousdale",
      "Kirk Wise"
    ],
    "runtime": "95 min",
    "imdb_url": "https://www.imdb.com/title/tt0230011/"
  },
  {
    "title": "The Girl in the Spider's Web",
    "rating": "R",
    "year": "2018",
    "users_rating": "6.1",
    "votes": "37,621",
    "metascore": "43",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZWU4ZDI5OGEtOTdmZS00MmNiLWIzNjQtZGM1MGE0M2UzYTczXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "Germany",
      "Sweden",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Claire Foy",
      "Beau Gadsdon",
      "Sverrir Gudnason",
      "LaKeith Stanfield",
      "Sylvia Hoeks",
      "Carlotta von Falkenhayn",
      "Stephen Merchant",
      "Christopher Convery",
      "Claes Bang",
      "Synnøve Macody Lund",
      "Cameron Britton",
      "Vicky Krieps",
      "Andreja Pejic",
      "Mikael Persbrandt",
      "Thomas Wingrich"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "tagline": "Discover what made her the girl.",
    "description": "Young computer hacker Lisbeth Salander and journalist Mikael Blomkvist find themselves caught in a web of spies, cybercriminals and corrupt government officials.",
    "directors": [
      "Fede Alvarez"
    ],
    "runtime": "115 min",
    "imdb_url": "https://www.imdb.com/title/tt5177088/"
  },
  {
    "title": "Swallow",
    "rating": "R",
    "year": "2019",
    "users_rating": "6.4",
    "votes": "7,111",
    "metascore": "65",
    "img_url": "https://m.media-amazon.com/images/M/MV5BYmUxYzAxMTgtNzhjNC00YjI1LTlmMTItOGU0ZmZjZmQ5NmVlXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "France"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Haley Bennett",
      "Austin Stowell",
      "Denis O'Hare",
      "Elizabeth Marvel",
      "David Rasche",
      "Luna Lauren Velez",
      "Zabryna Guevara",
      "Laith Nakli",
      "Babak Tafti",
      "Nicole Kang",
      "Olivia Perez",
      "Kristi Kirk",
      "Alyssa Bresnahan",
      "Maya Days",
      "Elise Santora"
    ],
    "genre": [
      "Drama",
      "Thriller"
    ],
    "tagline": "Open Up.",
    "description": "Hunter, a newly pregnant housewife, finds herself increasingly compelled to consume dangerous objects. As her husband and his family tighten their control over her life, she must confront the dark secret behind her new obsession.",
    "directors": [
      "Carlo Mirabella-Davis"
    ],
    "runtime": "94 min",
    "imdb_url": "https://www.imdb.com/title/tt8372298/"
  },
  {
    "title": "Transformers: Dark of the Moon",
    "rating": "PG-13",
    "year": "2011",
    "users_rating": "6.2",
    "votes": "377,938",
    "metascore": "42",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Shia LaBeouf",
      "Rosie Huntington-Whiteley",
      "Josh Duhamel",
      "John Turturro",
      "Tyrese Gibson",
      "Patrick Dempsey",
      "Frances McDormand",
      "John Malkovich",
      "Kevin Dunn",
      "Julie White",
      "Alan Tudyk",
      "Ken Jeong",
      "Glenn Morshower",
      "Lester Speight",
      "Buzz Aldrin"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "tagline": "Earth's last stand",
    "description": "The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons to reach it and to learn its secrets.",
    "directors": [
      "Michael Bay"
    ],
    "runtime": "154 min",
    "imdb_url": "https://www.imdb.com/title/tt1399103/"
  },
  {
    "title": "The Fugitive",
    "rating": "PG-13",
    "year": "1993",
    "users_rating": "7.8",
    "votes": "259,155",
    "metascore": "87",
    "img_url": "https://m.media-amazon.com/images/M/MV5BYmFmOGZjYTItYjY1ZS00OWRiLTk0NDgtMjQ5MzBkYWE2YWE0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Polish",
      "Spanish"
    ],
    "actors": [
      "Harrison Ford",
      "Tommy Lee Jones",
      "Sela Ward",
      "Julianne Moore",
      "Joe Pantoliano",
      "Andreas Katsulas",
      "Jeroen Krabbé",
      "Daniel Roebuck",
      "L. Scott Caldwell",
      "Tom Wood",
      "Ron Dean",
      "Joseph F. Kosala",
      "Miguel Nino",
      "John Drummond",
      "Tony Fosco"
    ],
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "tagline": "A murdered wife. A one-armed man. An obsessed detective. The chase begins.",
    "description": "Dr. Richard Kimble, unjustly accused of murdering his wife, must find the real killer while being the target of a nationwide manhunt led by a seasoned U.S. Marshal.",
    "directors": [
      "Andrew Davis"
    ],
    "runtime": "130 min",
    "imdb_url": "https://www.imdb.com/title/tt0106977/"
  },
  {
    "title": "Pet Sematary",
    "rating": "R",
    "year": "2019",
    "users_rating": "5.7",
    "votes": "74,189",
    "metascore": "57",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjJiN2UwYWItNWJjNi00Zjg4LWE5NmItMmM4N2I3ZjY3OTY2XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "Canada"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jason Clarke",
      "Amy Seimetz",
      "John Lithgow",
      "Jeté Laurence",
      "Hugo Lavoie",
      "Lucas Lavoie",
      "Obssa Ahmed",
      "Alyssa Brooke Levine",
      "Maria Herrera",
      "Frank Schorpion",
      "Linda E. Smith",
      "Sonia Maria Chirila",
      "Naomi Frenette",
      "Suzi Stingl",
      "Kelly Lee"
    ],
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "tagline": "Sometimes Dead Is Better",
    "description": "Dr. Louis Creed and his wife, Rachel, relocate from Boston to rural Maine with their two young children. The couple soon discover a mysterious burial ground hidden deep in the woods near their new home.",
    "directors": [
      "Kevin Kölsch",
      "Dennis Widmyer"
    ],
    "runtime": "101 min",
    "imdb_url": "https://www.imdb.com/title/tt0837563/"
  },
  {
    "title": "This Is Where I Leave You",
    "rating": "R",
    "year": "2014",
    "users_rating": "6.6",
    "votes": "69,638",
    "metascore": "44",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjkzNzQ2NDMyNl5BMl5BanBnXkFtZTgwMTY3MTcxMjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Hebrew"
    ],
    "actors": [
      "Jason Bateman",
      "Tina Fey",
      "Jane Fonda",
      "Adam Driver",
      "Rose Byrne",
      "Corey Stoll",
      "Kathryn Hahn",
      "Connie Britton",
      "Timothy Olyphant",
      "Dax Shepard",
      "Debra Monk",
      "Abigail Spencer",
      "Ben Schwartz",
      "Aaron Lazar",
      "Cade Lappin"
    ],
    "genre": [
      "Comedy",
      "Drama"
    ],
    "tagline": "Welcome Home. Get Uncomfortable.",
    "description": "When their father passes away, four grown siblings are forced to return to their childhood home and live under the same roof together for a week, along with their over-sharing mother and an assortment of spouses, exes and might-have-beens.",
    "directors": [
      "Shawn Levy"
    ],
    "runtime": "103 min",
    "imdb_url": "https://www.imdb.com/title/tt1371150/"
  },
  {
    "title": "Flight",
    "rating": "R",
    "year": "2012",
    "users_rating": "7.3",
    "votes": "316,942",
    "metascore": "76",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "United Arab Emirates"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Nadine Velazquez",
      "Denzel Washington",
      "Carter Cabassa",
      "Adam C. Edwards",
      "Tamara Tunie",
      "Brian Geraghty",
      "Kelly Reilly",
      "Conor O'Neill",
      "Charlie E. Schmidt",
      "Will Sherrod",
      "Boni Yanagisawa",
      "Adam Tomei",
      "Dane Davenport",
      "John Crow",
      "Bruce Greenwood"
    ],
    "genre": [
      "Drama",
      "Thriller"
    ],
    "tagline": null,
    "description": "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
    "directors": [
      "Robert Zemeckis"
    ],
    "runtime": "138 min",
    "imdb_url": "https://www.imdb.com/title/tt1907668/"
  },
  {
    "title": "Alex Rider: Operation Stormbreaker",
    "rating": "PG",
    "year": "2006",
    "users_rating": "5.1",
    "votes": "22,968",
    "metascore": "42",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjAwODY1NzAzNF5BMl5BanBnXkFtZTYwODUxNDc3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA",
      "Germany"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Sarah Bolger",
      "Robbie Coltrane",
      "Stephen Fry",
      "Damian Lewis",
      "Ewan McGregor",
      "Bill Nighy",
      "Sophie Okonedo",
      "Alex Pettyfer",
      "Missi Pyle",
      "Mickey Rourke",
      "Andy Serkis",
      "Alicia Silverstone",
      "Ashley Walters",
      "Alex Barrett",
      "Richard Huw"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Family",
      "Thriller"
    ],
    "tagline": "Action. Adrenaline. Adventure.",
    "description": "After the death of his uncle, the 14-year-old schoolboy Alex Rider is forced by the Special Operations Division of the UK's secret intelligence service, MI6, into a mission which will save millions of lives.",
    "directors": [
      "Geoffrey Sax"
    ],
    "runtime": "93 min",
    "imdb_url": "https://www.imdb.com/title/tt0457495/"
  },
  {
    "title": "Despicable Me 2",
    "rating": "PG",
    "year": "2013",
    "users_rating": "7.3",
    "votes": "360,585",
    "metascore": "62",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA",
      "France",
      "Japan"
    ],
    "languages": [
      "English",
      "Ukrainian"
    ],
    "actors": [
      "Steve Carell",
      "Kristen Wiig",
      "Benjamin Bratt",
      "Miranda Cosgrove",
      "Russell Brand",
      "Ken Jeong",
      "Steve Coogan",
      "Elsie Fisher",
      "Dana Gaier",
      "Moises Arias",
      "Nasim Pedrad",
      "Kristen Schaal",
      "Pierre Coffin",
      "Chris Renaud",
      "Nickolai Stoilov"
    ],
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Sci-Fi"
    ],
    "tagline": "More minions. More despicable.",
    "description": "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
    "directors": [
      "Pierre Coffin",
      "Chris Renaud"
    ],
    "runtime": "98 min",
    "imdb_url": "https://www.imdb.com/title/tt1690953/"
  },
  {
    "title": "Brazil",
    "rating": "R",
    "year": "1985",
    "users_rating": "7.9",
    "votes": "182,825",
    "metascore": "84",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMDM0YTM3Y2UtNzY5MC00OTc4LThhZTYtMmM0ZGZjMmU1ZjdmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UY268_CR1,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jonathan Pryce",
      "Robert De Niro",
      "Katherine Helmond",
      "Ian Holm",
      "Bob Hoskins",
      "Michael Palin",
      "Ian Richardson",
      "Peter Vaughan",
      "Kim Greist",
      "Jim Broadbent",
      "Barbara Hicks",
      "Charles McKeown",
      "Derrick O'Connor",
      "Kathryn Pogson",
      "Bryan Pringle"
    ],
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "tagline": "Have a laugh at the horror of things to come.",
    "description": "A bureaucrat in a dystopic society becomes an enemy of the state as he pursues the woman of his dreams.",
    "directors": [
      "Terry Gilliam"
    ],
    "runtime": "132 min",
    "imdb_url": "https://www.imdb.com/title/tt0088846/"
  },
  {
    "title": "American Pie 2",
    "rating": "R",
    "year": "2001",
    "users_rating": "6.4",
    "votes": "234,553",
    "metascore": "43",
    "img_url": "https://m.media-amazon.com/images/M/MV5BOTEyYjhiMjYtNjU3YS00NmQ4LTlhNTEtYTczNWY3MGJmNzE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Jason Biggs",
      "Shannon Elizabeth",
      "Alyson Hannigan",
      "Chris Klein",
      "Thomas Ian Nicholas",
      "Natasha Lyonne",
      "Tara Reid",
      "Seann William Scott",
      "Mena Suvari",
      "Eddie Kaye Thomas",
      "Chris Owen",
      "Eugene Levy",
      "Molly Cheek",
      "Denise Faye",
      "Lisa Arturo"
    ],
    "genre": [
      "Comedy"
    ],
    "tagline": "It's time for a second helping.",
    "description": "Jim and his friends are now in college, and they decide to meet up at the beach house for some fun.",
    "directors": [
      "J.B. Rogers"
    ],
    "runtime": "108 min",
    "imdb_url": "https://www.imdb.com/title/tt0252866/"
  },
  {
    "title": "The Circle",
    "rating": "PG-13",
    "year": "2017",
    "users_rating": "5.3",
    "votes": "80,075",
    "metascore": "43",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjY2OTM2Njc3Ml5BMl5BanBnXkFtZTgwNDgzODU3MTI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "United Arab Emirates",
      "USA",
      "France"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Emma Watson",
      "Ellar Coltrane",
      "Glenne Headly",
      "Bill Paxton",
      "Karen Gillan",
      "Tom Hanks",
      "Beck",
      "Nate Corddry",
      "Mamoudou Athie",
      "Roger Joseph Manning Jr.",
      "Joey Waronker",
      "Michael Shuman",
      "Nick Valensi",
      "John Boyega",
      "Regina Saldivar"
    ],
    "genre": [
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "Based on the best-selling novel.",
    "description": "A woman lands a dream job at a powerful tech company called the Circle, only to uncover an agenda that will affect the lives of all of humanity.",
    "directors": [
      "James Ponsoldt"
    ],
    "runtime": "110 min",
    "imdb_url": "https://www.imdb.com/title/tt4287320/"
  },
  {
    "title": "Beauty and the Beast",
    "rating": "G",
    "year": "1991",
    "users_rating": "8.0",
    "votes": "407,770",
    "metascore": "95",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "French"
    ],
    "actors": [
      "Robby Benson",
      "Jesse Corti",
      "Rex Everhart",
      "Angela Lansbury",
      "Paige O'Hara",
      "Jerry Orbach",
      "Bradley Pierce",
      "David Ogden Stiers",
      "Richard White",
      "Jo Anne Worley",
      "Mary Kay Bergman",
      "Brian Cummings",
      "Alvin Epstein",
      "Tony Jay",
      "Alec Murphy"
    ],
    "genre": [
      "Animation",
      "Family",
      "Fantasy",
      "Musical",
      "Romance"
    ],
    "tagline": "The most beautiful love story ever told as it has never been seen before. [IMAX version]",
    "description": "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love.",
    "directors": [
      "Gary Trousdale",
      "Kirk Wise"
    ],
    "runtime": "84 min",
    "imdb_url": "https://www.imdb.com/title/tt0101414/"
  },
  {
    "title": "The Color Purple",
    "rating": "PG-13",
    "year": "1985",
    "users_rating": "7.8",
    "votes": "75,396",
    "metascore": "78",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZDRkOWQ5NGUtYTVmOS00ZjNhLWEwODgtOGI2MmUxNTBkMjU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Danny Glover",
      "Whoopi Goldberg",
      "Margaret Avery",
      "Oprah Winfrey",
      "Willard E. Pugh",
      "Akosua Busia",
      "Desreta Jackson",
      "Adolph Caesar",
      "Rae Dawn Chong",
      "Dana Ivey",
      "Leonard Jackson",
      "Bennet Guillory",
      "John Patton Jr.",
      "Carl Anderson",
      "Susan Beaubian"
    ],
    "genre": [
      "Drama"
    ],
    "tagline": "It's about life.  It's about love.  It's about us.",
    "description": "A black Southern woman struggles to find her identity after suffering abuse from her father and others over four decades.",
    "directors": [
      "Steven Spielberg"
    ],
    "runtime": "154 min",
    "imdb_url": "https://www.imdb.com/title/tt0088939/"
  },
  {
    "title": "Peter Pan",
    "rating": "PG",
    "year": "2003",
    "users_rating": "6.8",
    "votes": "64,689",
    "metascore": "64",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL__QL50.jpg",
    "countries": [
      "UK",
      "Australia",
      "USA",
      "New Zealand"
    ],
    "languages": [
      "English",
      "North American Indian"
    ],
    "actors": [
      "Jason Isaacs",
      "Jeremy Sumpter",
      "Rachel Hurd-Wood",
      "Lynn Redgrave",
      "Richard Briers",
      "Olivia Williams",
      "Geoffrey Palmer",
      "Harry Newell",
      "Freddie Popplewell",
      "Ludivine Sagnier",
      "Theodore Chester",
      "Rupert Simonian",
      "George MacKay",
      "Harry Eden",
      "Patrick Gooch"
    ],
    "genre": [
      "Adventure",
      "Family",
      "Fantasy",
      "Romance"
    ],
    "tagline": "Let the fight begin",
    "description": "The Darling family children receive a visit from Peter Pan, who takes them to Never Never Land where an ongoing war with the evil Pirate Captain Hook is taking place.",
    "directors": [
      "P.J. Hogan"
    ],
    "runtime": "113 min",
    "imdb_url": "https://www.imdb.com/title/tt0316396/"
  },
  {
    "title": "Big",
    "rating": "PG",
    "year": "1988",
    "users_rating": "7.3",
    "votes": "191,190",
    "metascore": "73",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMDQ1ODM5MTMtMjAwYi00ZGUxLTliNTMtN2ZhODAwMjVhMTRlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Spanish"
    ],
    "actors": [
      "Tom Hanks",
      "Elizabeth Perkins",
      "Robert Loggia",
      "John Heard",
      "Jared Rushton",
      "David Moscow",
      "Jon Lovitz",
      "Mercedes Ruehl",
      "Josh Clark",
      "Kimberlee M. Davis",
      "Oliver Block",
      "Erika Katz",
      "Allan Wasserman",
      "Mark Ballou",
      "Gary Howard Klar"
    ],
    "genre": [
      "Comedy",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "tagline": "Yesterday Josh Wanted Everything In Life - Girls...Money...Cars... Today, All His Wildest Dreams Have Come True!",
    "description": "After wishing to be made big, a teenage boy wakes the next morning to find himself mysteriously in the body of an adult.",
    "directors": [
      "Penny Marshall"
    ],
    "runtime": "104 min",
    "imdb_url": "https://www.imdb.com/title/tt0094737/"
  },
  {
    "title": "Signs",
    "rating": "PG-13",
    "year": "2002",
    "users_rating": "6.7",
    "votes": "329,527",
    "metascore": "59",
    "img_url": "https://m.media-amazon.com/images/M/MV5BNDUwMDUyMDAyNF5BMl5BanBnXkFtZTYwMDQ3NzM3._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "Portuguese"
    ],
    "actors": [
      "Mel Gibson",
      "Joaquin Phoenix",
      "Rory Culkin",
      "Abigail Breslin",
      "Cherry Jones",
      "M. Night Shyamalan",
      "Patricia Kalember",
      "Ted Sutton",
      "Merritt Wever",
      "Lanny Flaherty",
      "Marion McCorry",
      "Michael Showalter",
      "Kevin Pires",
      "Clifford David",
      "Rhonda Overby"
    ],
    "genre": [
      "Drama",
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "A message. A warning. A sign...of things to come.",
    "description": "A family living on a farm finds mysterious crop circles in their fields which suggests something more frightening to come.",
    "directors": [
      "M. Night Shyamalan"
    ],
    "runtime": "106 min",
    "imdb_url": "https://www.imdb.com/title/tt0286106/"
  },
  {
    "title": "WarGames",
    "rating": "PG",
    "year": "1983",
    "users_rating": "7.1",
    "votes": "87,595",
    "metascore": "77",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Matthew Broderick",
      "Dabney Coleman",
      "John Wood",
      "Ally Sheedy",
      "Barry Corbin",
      "Juanin Clay",
      "Kent Williams",
      "Dennis Lipscomb",
      "Joe Dorsey",
      "Irving Metzman",
      "Michael Ensign",
      "William Bogert",
      "Susan Davis",
      "James Tolkan",
      "David Clover"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "tagline": "The only winning move is not to play.",
    "description": "A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III.",
    "directors": [
      "John Badham"
    ],
    "runtime": "114 min",
    "imdb_url": "https://www.imdb.com/title/tt0086567/"
  },
  {
    "title": "Final Destination",
    "rating": "R",
    "year": "2000",
    "users_rating": "6.7",
    "votes": "222,870",
    "metascore": "36",
    "img_url": "https://m.media-amazon.com/images/M/MV5BZTI0NGM2OGYtNzVmMi00NGQ2LTk2MDAtN2RmYjIzMGRkZGYxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "French"
    ],
    "actors": [
      "Devon Sawa",
      "Ali Larter",
      "Kerr Smith",
      "Kristen Cloke",
      "Daniel Roebuck",
      "Roger Guenveur Smith",
      "Chad Donella",
      "Seann William Scott",
      "Tony Todd",
      "Amanda Detmer",
      "Brendan Fehr",
      "Forbes Angus",
      "Lisa Marie Caruk",
      "Christine Chatelain",
      "Barbara Tyson"
    ],
    "genre": [
      "Horror",
      "Thriller"
    ],
    "tagline": "Death is the Final Destination, Boarding Starts Now!",
    "description": "After a teenager has a terrifying vision of him and his friends dying in a plane crash, he prevents the accident only to have Death hunt them down, one by one.",
    "directors": [
      "James Wong"
    ],
    "runtime": "98 min",
    "imdb_url": "https://www.imdb.com/title/tt0195714/"
  },
  {
    "title": "Failure to Launch",
    "rating": "PG-13",
    "year": "2006",
    "users_rating": "5.6",
    "votes": "71,433",
    "metascore": "47",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMTg0OTc2MDQ3NV5BMl5BanBnXkFtZTcwNDUwMjEzMw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English"
    ],
    "actors": [
      "Matthew McConaughey",
      "Sarah Jessica Parker",
      "Zooey Deschanel",
      "Justin Bartha",
      "Bradley Cooper",
      "Terry Bradshaw",
      "Kathy Bates",
      "Tyrel Jackson Williams",
      "Katheryn Winnick",
      "Rob Corddry",
      "Patton Oswalt",
      "Stephen Tobolowsky",
      "Kate McGregor-Stewart",
      "Adam Alexi-Malle",
      "Gretchen Cleevely"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "tagline": "To leave the nest, some men just need a little push.",
    "description": "A thirty-something is still living with his parents until they hire an interventionist to help him graduate out of the house. That's when the fun begins.",
    "directors": [
      "Tom Dey"
    ],
    "runtime": "97 min",
    "imdb_url": "https://www.imdb.com/title/tt0427229/"
  },
  {
    "title": "Overboard",
    "rating": "PG",
    "year": "1987",
    "users_rating": "6.9",
    "votes": "50,603",
    "metascore": "53",
    "img_url": "https://m.media-amazon.com/images/M/MV5BMjIzMjMxOTgzM15BMl5BanBnXkFtZTcwMTAwODM2NA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    "countries": [
      "USA"
    ],
    "languages": [
      "English",
      "French",
      "Portuguese"
    ],
    "actors": [
      "Goldie Hawn",
      "Kurt Russell",
      "Edward Herrmann",
      "Katherine Helmond",
      "Mike Hagerty",
      "Roddy McDowall",
      "Jared Rushton",
      "Jeffrey Wiseman",
      "Brian Price",
      "Jamie Wild",
      "Frank Campanella",
      "Harvey Miller",
      "Frank Buxton",
      "Carol Williard",
      "Doris Hess"
    ],
    "genre": [
      "Comedy",
      "Romance"
    ],
    "tagline": "She was born to spend. He was born to offend. There's only one way they could fall in love... by accident.",
    "description": "A cruel but beautiful heiress mocks and cheats a hired carpenter. When she gets amnesia after an accident, he decides to introduce her to regular life by convincing her they're husband and wife.",
    "directors": [
      "Garry Marshall"
    ],
    "runtime": "112 min",
    "imdb_url": "https://www.imdb.com/title/tt0093693/"
  }
]
export default function AllMeetUpsPage() {
    return (
        <div>
            <h1>All Movies</h1>
            {MOVIES_DATA.map((movie)=>{
                // return <MovieCard props={movie}></MovieCard>
                return <MovieCard data={movie}></MovieCard>
            })}
        </div>
    )
}
