const hombreMagico = {
    culpable: "Savid Duárez",
    adventure: {
        step1: {
            title: "El misterio de los chistes perdidos",
            description: "¡Alerta en el teatro! Has desaparecido después de hacer un chiste que no gustó a todos. Los investigadores sospechan que estás siendo perseguido por tus bromas. ¿Podrás seguir el rastro de tus chistes y aprender cuándo el humor puede herir a otros? ¡La diversión responsable necesita tu ayuda!"
        },
        step2: {
            title: "Pistas en el camerino",
            description: "El camerino está lleno de tus notas y guiones de comedia. Los investigadores buscan pistas sobre los chistes que causaron problemas. Las pruebas sugieren que has estado haciendo bromas que pueden herir los sentimientos de otros."
        },
        step3: {
            title: "El enigma de las risas",
            description: "Los registros contienen testimonios de personas que se sintieron ofendidas por tus chistes. Has estado aprendiendo que el humor tiene límites. Tu misión: analizar los casos, identificar cuándo una broma puede ser dañina y entender cómo hacer reír sin hacer daño."
        },
        step4: {
            title: "Viaje al teatro de la diversión responsable",
            description: "Las pistas te llevan a un teatro especial donde se enseña a hacer reír de manera respetuosa. Planeas presentar un nuevo espectáculo, pero necesitas aprender a hacer chistes que no hieran a nadie. Tu reto: demostrar que se puede ser gracioso siendo respetuoso."
        },
        step5: {
            title: "Desenlace en el gran espectáculo",
            description: "Planeas presentar tu nuevo espectáculo de magia y humor. Tu objetivo final: utilizar todos los conocimientos recopilados para crear un show que haga reír a todos sin hacer daño a nadie."
        }
    },
    case: {
        startingLocation: {
            name: "Teatro Príncipe Gran Vía",
            city: "Madrid",
            country: "España",
            year: "2025",
            description: "Eres el Hombre Mágico, un superhéroe que ha decidido que quiere hacer reír a la gente aunque aún no tienes tus poderes, porque no sabes hacer chistes. Y lo peor es que hay un cómico misterioso, el autodenominado \"Mago Sin Filtros\", que está causando problemas en la ciudad con sus chistes ofensivos, captando toda la atención del público y sin tener muy claro qué objetivo tiene. ¿Podrás aprender a hacer reír a la gente sin hacer daño a nadie, y así poder robarle la atención que tanto ansía a costa de cualquiera?",
            witnesses: [
                {
                    name: "Jorge Ponce",
                    role: "Mago Payaso",
                    area: "Camerino",
                    testimony: "¡Tío! ¿Sabes qué? Hacer chistes que ofenden a colectivos minoritarios u oprimidos es como cuando alguien se tira un pedo en el ascensor de tu casa justo antes de que lo uses tú, y al salir te encuentras con otro vecino que va a pensar que el olor es tuyo. ¡Es igual de injusto! ¿Me entiendes, tío?",
                    clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                },
                {
                    name: "Sergio Bezos",
                    role: "Mago de la Risa",
                    area: "Asientos del público",
                    testimony: "Mira, hacer trucos que pueden hacer daño es como cuando te pones a bailar en una boda y todo el mundo te mira mal: es fácil, es malo y demuestra que no sabes lo que es la magia de verdad. ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin seguidores! ¡Qué fuerte! Por cierto, ¿has visto a ese tipo con el sombrero de copa y la baraja de cartas? Siempre anda por aquí haciendo trucos ofensivos...",
                    clue: "La mejor magia es como cuando te pones a cantar en el karaoke y todo el mundo te aplaude: ¡hace que la gente se sienta bien y quiera más! "
                },
                {
                    name: "Lalachus",
                    role: "Reina de la Risa",
                    area: "Camerino de Broncano",
                    testimony: "¡Chiqui! ¿Confundes diversión con hacer daño a gente excluida? ¡Qué idea tan brillante! ¿También te gusta usar un martillo como juguete? Porque es igual de seguro... ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin trabajo! ¡Qué fuerte, mi amor! ¡Es como cuando te pones a cantar en el karaoke y todo el mundo te silba, pero en vez de un karaoke es un truco de magia que hace daño! Por cierto, ¿has visto a ese mago con la ropa elegante y el sombrero? Siempre anda dejando cartas de la baraja por ahí...",
                    clue: "Haz el bien, y no mires a quién"
                }
            ]
        },
        travels: [
            {
                name: "Paso 1: Aprende a hacer chistes",
                description: "Estás en el Teatro Principal, observando a un grupo de cómicas que acaban de terminar su actuación. ¿Qué haces?",
                locations: [
                    {
                        name: "Pides consejo",
                        target: true,
                        descriptionTarget: "",
                        description: "Te acercas a un grupo de cómicos que está cuchicheando en una mesa cercana. Ellos tienen que tener algún secreto para evitar la cancelación al hacer cualquier chiste que aún desconoces.",
                        witnesses: [
                            {
                                name: "Sergio Bezos",
                                role: "Guionista",
                                area: "Oficina",
                                testimony: "¡Tío! ¿Sabes qué? Hacer chistes buenos es como cuando te pones a contar un chiste y todo el mundo se ríe, ¡pero de verdad! ¡No como cuando te pones a contar un chiste y todo el mundo se ríe, pero de ti! ¡Qué fuerte, tío! Por cierto, ¿has visto a ese mago con el sombrero de copa? Siempre anda por aquí haciendo trucos ofensivos...",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Jorge Ponce",
                                role: "Humorista",
                                area: "Sala de ensayo",
                                testimony: "¡Chiqui! ¿Sabes qué? Hacer chistes buenos es como cuando te pones a cantar en el karaoke y todo el mundo te aplaude, ¡pero de verdad! ¡No como cuando te pones a cantar en el karaoke y todo el mundo te silba! ¡Qué fuerte, mi amor! Por cierto, ¿has visto a ese tipo con la ropa de mago? Siempre anda dejando cartas de la baraja por ahí...",
                                clue: "La mejor magia es la que hace feliz a todo el mundo, no la que hace daño a algunos. ¡Como cuando te pones a cantar en el karaoke y todo el mundo te aplaude!"
                            },
                            {
                                name: "Ernesto Sevilla",
                                role: "Actor",
                                area: "Escenario",
                                testimony: "¡Tío! ¿Sabes qué? Hacer chistes buenos es como cuando te pones a bailar en una boda y todo el mundo te aplaude, ¡pero de verdad! ¡No como cuando te pones a bailar en una boda y todo el mundo te mira mal! ¡Qué fuerte, tío!",
                                clue: "La mejor magia es la que une a la gente, no la que la separa. ¡Como cuando te pones a bailar en una boda y todo el mundo te aplaude!"
                            }
                        ]
                    },
                    {
                        name: "Haces otro chiste",
                        target: false,
                        description: "¿Sabéis qué? Las mujeres y los mejores jugadores de fútbol, en realidad, son iguales... ¡si son buenas, también acaban metiendose hasta la cocina!",
                        witnesses: [
                            {
                                name: "Pablo Ibarburu",
                                role: "Comediante",
                                area: "Oficina",
                                testimony: "¡Vaya, vaya! ¿Otro chiste de cocina? ¡Qué original! ¿También te gusta hacer chistes de bajitos? Seguro que los tuyos me encantan... ",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta menos que otros."
                            },
                            {
                                name: "Nacho García",
                                role: "Mago de la Risa",
                                area: "Sala de ensayo",
                                testimony: "Mira, hacer trucos que pueden hacer daño es como cuando te pones a bailar en una boda y todo el mundo te mira mal: es fácil, es malo y demuestra que no sabes lo que es la magia de verdad. ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin seguidores! ¡Qué fuerte!",
                                clue: "La mejor magia es como cuando te pones a cantar en el karaoke y todo el mundo te aplaude: ¡hace que la gente se sienta bien y quiera más! "
                            }
                        ]
                    },
                    {
                        name: "Te vas",
                        target: false,
                        descriptionTarget: "Los cómicos te replican según te alejas...",
                        description: "",
                        witnesses: [
                            {
                                name: "Grison",
                                role: "Productor",
                                area: "Oficina",
                                testimony: "¡Vaya, vaya! ¿Ignorar los sentimientos? ¡Qué original! ¿También te gusta ignorar cuando te dicen que el fuego quema? Porque es igual de divertido... ",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Guionista",
                                area: "Sala de ensayo",
                                testimony: "¡Tío! ¿Sabes qué? Ignorar los sentimientos es como cuando alguien se tira un pedo en el ascensor de tu casa justo antes de que lo uses tú, y al salir te encuentras con otro vecino que va a pensar que el olor es tuyo. ¡Es igual de injusto! ¿Me entiendes, tío?",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Jorge Ponce",
                                role: "Humorista",
                                area: "Escenario",
                                testimony: "¡Chiqui! ¿Ignorar los sentimientos? ¡Qué idea tan brillante! ¿También te gusta ignorar cuando te dicen que el fuego quema? Porque es igual de seguro... ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin trabajo! ¡Qué fuerte, mi amor!",
                                clue: "Haz el bien, y no mires a quién"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Paso 2: Aprende de tus errores",
                description: "Estás en la Gran Vía de Madrid, caminando con Jorge Ponce. ¿Qué haces?",
                locations: [
                    {
                        name: "Pedir consejo",
                        target: true,
                        description: "Le explicas a Jorge que quieres aprender a hacer chistes que no hagan daño. Él sonríe y te cuenta la historia de un cómico que perdió su carrera por no aprender esta lección. 'Era un tipo brillante', dice, 'pero se obsesionó con los chistes fáciles y ofensivos. Ahora está solo, sin público, sin amigos...' Los cómicos que pasan por la calle te saludan con aprobación...",
                        witnesses: [
                            {
                                name: "Ernesto Sevilla",
                                role: "Actor",
                                area: "Oficina",
                                testimony: "¡Tío! ¿Sabes qué? Aprender de los errores es como cuando te pones a ensayar un truco y al final sale bien, ¡pero de verdad! ¡No como cuando te pones a ensayar un truco y al final sale mal! ¡Qué fuerte, tío!",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Comediante",
                                area: "Sala de ensayo",
                                testimony: "¡Vaya, vaya! ¿Aprender de los errores? ¡Qué original! ¿También te gusta aprender cuando te dicen que el fuego quema? Porque es igual de divertido... ",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            }
                        ]
                    },
                    {
                        name: "Reírme de un novato",
                        target: false,
                        descriptionTarget: "",
                        description: "Ves a un cómico novato que se tropieza con el micrófono en el escenario. Te ríes a carcajadas: '¡Jaja! ¡Mira cómo se cae! ¡Qué patoso!' Los demás cómicos te miran con desaprobación. Uno se acerca y te susurra: '¿Sabes? Hay un cómico que empezó así, riéndose de los demás... y ahora nadie se ríe con él. Está solo, sin público, sin amigos...'",
                        witnesses: [
                            {
                                name: "Nacho García",
                                role: "Mago de la Risa",
                                area: "Oficina",
                                testimony: "Mira, reírte de los errores de otros es como cuando te pones a bailar en una boda y todo el mundo te mira mal: es fácil, es malo y demuestra que no sabes lo que es la magia de verdad. ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin seguidores! ¡Qué fuerte!",
                                clue: "La mejor magia es la que une a la gente, no la que la separa. ¡Como cuando te pones a bailar en una boda y todo el mundo te mira mal!"
                            },
                            {
                                name: "Grison",
                                role: "Productor",
                                area: "Sala de ensayo",
                                testimony: "¡Vaya, vaya! ¿Reírte de los demás? ¡Qué original! ¿También te gusta reírte de los bebés cuando lloran? Porque es igual de divertido... ",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            }
                        ]
                    },
                    {
                        name: "Ignorar consejos",
                        target: false,
                        description: "Cuando Jorge te da consejos sobre tus chistes, te encoges de hombros y dices: '¡Bah! Son solo chistes, no exageréis!' Los cómicos intercambian miradas preocupadas. Uno de ellos te muestra un artículo sobre un cómico que perdió su carrera por no escuchar a los demás. 'Era un tipo brillante', dice, 'pero se volvió arrogante y empezó a hacer chistes ofensivos. Ahora está solo, sin público, sin amigos...'",
                        witnesses: [
                            {
                                name: "Jorge Ponce",
                                role: "Humorista",
                                area: "Oficina",
                                testimony: "¡Chiqui! ¿Ignorar las quejas? ¡Qué idea tan brillante! ¿También te gusta ignorar cuando te dicen que el fuego quema? Porque es igual de seguro... ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin trabajo! ¡Qué fuerte, mi amor!",
                                clue: "Haz el bien, y no mires a quién"
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Guionista",
                                area: "Sala de ensayo",
                                testimony: "¡Tío! ¿Sabes qué? Ignorar las quejas es como cuando alguien se tira un pedo en el ascensor de tu casa justo antes de que lo uses tú, y al salir te encuentras con otro vecino que va a pensar que el olor es tuyo. ¡Es igual de injusto! ¿Me entiendes, tío?",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Paso 3: Crea tu show",
                description: "Estás en el escenario principal del Teatro Principal. ¿Qué haces?",
                locations: [
                    {
                        name: "Proponer show divertido",
                        target: true,
                        description: "Te reúnes con todos los cómicos y propones: '¿Qué os parece si hacemos un show donde todos nos riamos juntos, sin hacer daño a nadie?' Los cómicos asienten con entusiasmo. Mientras preparáis el show, alguien menciona que hay un cómico que está intentando volver con un nuevo espectáculo, pero nadie quiere trabajar con él. 'Era un tipo brillante', dicen, 'pero se volvió arrogante y empezó a hacer chistes ofensivos. Ahora está solo, sin público, sin amigos...'",
                        witnesses: [
                            {
                                name: "Quequé",
                                role: "Mago Payaso",
                                area: "Oficina",
                                testimony: "¡Tío! ¿Sabes qué? Hacer un show divertido es como cuando te pones a contar un chiste y todo el mundo se ríe, ¡pero de verdad! ¡No como cuando te pones a contar un chiste y todo el mundo se ríe, pero de ti! ¡Qué fuerte, tío!",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Thais Villas",
                                role: "Maga de la Diversión",
                                area: "Sala de ensayo",
                                testimony: "¡Chiqui! ¿Sabes qué? Hacer un show divertido es como cuando te pones a cantar en el karaoke y todo el mundo te aplaude, ¡pero de verdad! ¡No como cuando te pones a cantar en el karaoke y todo el mundo te silba! ¡Qué fuerte, mi amor!",
                                clue: "La mejor magia es la que hace feliz a todo el mundo, no la que hace daño a algunos. ¡Como cuando te pones a cantar en el karaoke y todo el mundo te aplaude!"
                            },
                            {
                                name: "Nacho García",
                                role: "Mago de la Risa",
                                area: "Escenario",
                                testimony: "Mira, hacer un show divertido es como cuando te pones a bailar en una boda y todo el mundo te aplaude, ¡pero de verdad! ¡No como cuando te pones a bailar en una boda y todo el mundo te mira mal! ¡Qué fuerte!",
                                clue: "La mejor magia es la que une a la gente, no la que la separa. ¡Como cuando te pones a bailar en una boda y todo el mundo te aplaude!"
                            }
                        ]
                    },
                    {
                        name: "Proponer show ofensivo",
                        target: false,
                        description: "Te reúnes con los cómicos y dices: '¿Qué os parece si hacemos un show donde nos riamos de todo y de todos? ¡Sin filtros!' Los cómicos intercambian miradas preocupadas. Uno de ellos te muestra un video de un cómico haciendo exactamente lo mismo, y cómo el público se fue del teatro. 'Era un tipo brillante', dicen, 'pero se volvió arrogante y empezó a hacer chistes ofensivos. Ahora está solo, sin público, sin amigos...'",
                        witnesses: [
                            {
                                name: "Sergio Bezos",
                                role: "Guionista",
                                area: "Oficina",
                                testimony: "¡Tío! ¿Sabes qué? Hacer un show ofensivo es como cuando te pones a contar un chiste y todo el mundo se ríe, ¡pero de ti! ¡No como cuando te pones a contar un chiste y todo el mundo se ríe, pero de verdad! ¡Qué fuerte, tío!",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Jorge Ponce",
                                role: "Humorista",
                                area: "Sala de ensayo",
                                testimony: "¡Chiqui! ¿Sabes qué? Hacer un show ofensivo es como cuando te pones a cantar en el karaoke y todo el mundo te silba, ¡pero de verdad! ¡No como cuando te pones a cantar en el karaoke y todo el mundo te aplaude! ¡Qué fuerte, mi amor!",
                                clue: "La mejor magia es la que hace feliz a todo el mundo, no la que hace daño a algunos. ¡Como cuando te pones a cantar en el karaoke y todo el mundo te silba!"
                            },
                            {
                                name: "Ernesto Sevilla",
                                role: "Actor",
                                area: "Escenario",
                                testimony: "¡Tío! ¿Sabes qué? Hacer un show ofensivo es como cuando te pones a bailar en una boda y todo el mundo te mira mal, ¡pero de verdad! ¡No como cuando te pones a bailar en una boda y todo el mundo te aplaude! ¡Qué fuerte, tío!",
                                clue: "La mejor magia es la que une a la gente, no la que la separa. ¡Como cuando te pones a bailar en una boda y todo el mundo te mira mal!"
                            }
                        ]
                    },
                    {
                        name: "Ignorar sugerencias",
                        target: false,
                        description: "Cuando los cómicos te dan ideas para mejorar el show, te encoges de hombros y dices: '¡Bah! Yo sé lo que hago, no necesito vuestras ideas.' Los cómicos intercambian miradas preocupadas. Uno de ellos te muestra un artículo sobre un cómico que perdió su carrera por no escuchar a sus compañeros. 'Era un tipo brillante', dicen, 'pero se volvió arrogante y empezó a hacer chistes ofensivos. Ahora está solo, sin público, sin amigos...'",
                        witnesses: [
                            {
                                name: "Pablo Ibarburu",
                                role: "Comediante",
                                area: "Oficina",
                                testimony: "¡Vaya, vaya! ¿Ignorar las sugerencias? ¡Qué original! ¿También te gusta ignorar cuando te dicen que el fuego quema? Porque es igual de divertido... ",
                                clue: "La mejor magia es la que hace reír a todos, no la que hace que alguien se sienta como el vecino del ascensor. ¡Nadie merece que le echen la culpa de algo que no ha hecho!"
                            },
                            {
                                name: "Nacho García",
                                role: "Mago de la Risa",
                                area: "Sala de ensayo",
                                testimony: "Mira, ignorar las sugerencias es como cuando te pones a bailar en una boda y todo el mundo te mira mal: es fácil, es malo y demuestra que no sabes lo que es la magia de verdad. ¡Y mira, hasta el Mago Sin Filtros se ha quedado sin seguidores! ¡Qué fuerte!",
                                clue: "La mejor magia es la que une a la gente, no la que la separa. ¡Como cuando te pones a bailar en una boda y todo el mundo te mira mal!"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 