const miranda = {
    culpable: "Miranda San Francisco",
    adventure: {
        step1: {
            title: "El enigma de los saberes",
            description: "¡Un misterio desafía a los mejores cerebros! Un objeto legendario ha sido robado del Museo de la Educación y solo una mente brillante como la tuya podrá descifrar las pistas que Miranda San Francisco ha dejado en su huida. ¿Te atreves a enfrentarte a retos de todas las materias y convertirte en el héroe del conocimiento? ¡La aventura educativa definitiva comienza ahora!"
        },
        step2: {
            title: "Pistas en la Biblioteca Universal",
            description: "Se han encontrado mensajes cifrados en libros de matemáticas, historia, arte y ciencias. El culpable desafía a los investigadores a resolverlos."
        },
        step3: {
            title: "El misterio en el Laboratorio de Ideas",
            description: "Un experimento interdisciplinar ha sido saboteado. Las cámaras muestran a una figura con una gabardina y una libreta llena de anotaciones."
        },
        step4: {
            title: "Viaje a la Ciudad del Saber",
            description: "El rastro lleva hasta una ciudad donde se celebran olimpiadas de conocimiento. Miranda planea lanzar un reto mundial."
        },
        step5: {
            title: "Desenlace en la Gran Final Educativa",
            description: "Miranda San Francisco planea desafiar a los mejores estudiantes del mundo. Hay que detenerla antes de que desaparezca con el secreto de los saberes."
        }
    },
    case: {
        startingLocation: {
            name: "Museo de la Educación",
            city: "Madrid",
            country: "España",
            year: "2023",
            description: "El Museo de la Educación, donde el conocimiento cobra vida, se despierta hoy con un misterio: un objeto legendario ha desaparecido y las pistas desafían a los más sabios. ¿Te atreves a cruzar sus puertas y convertirte en el héroe que salvará el saber universal? ¡La aventura comienza aquí!",
            witnesses: [
                {
                    name: "Doña Pilar",
                    role: "Guía principal",
                    area: "Vestíbulo",
                    testimony: "Esta mañana, al abrir el museo, noté que la vitrina central estaba vacía. El objeto más valioso ha desaparecido y nadie vio nada.",
                    clue: "En el suelo encontré una nota con símbolos de matemáticas, historia y arte."
                },
                {
                    name: "Miguel",
                    role: "Estudiante visitante",
                    area: "Sala de inventos",
                    testimony: "Vi a una persona con gabardina tomando notas en todas las salas. Parecía saber mucho de todo.",
                    clue: "Dejó olvidada una libreta con acertijos de varias materias."
                },
                {
                    name: "Lucía",
                    role: "Vigilante nocturna",
                    area: "Pasillo de exposiciones",
                    testimony: "Anoche escuché pasos y vi una sombra moverse entre los paneles. Cuando fui a mirar, ya no había nadie, pero la puerta trasera estaba abierta.",
                    clue: "Junto a la puerta encontré una pluma estilográfica con las iniciales M.S.F." 
                }
            ]
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Sala de los inventos",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Sala donde se exponen inventos de la humanidad.",
                        witnesses: [
                            {
                                name: "Doña Pilar",
                                role: "Guía del museo",
                                area: "Mostrador",
                                testimony: "Vi a alguien con una libreta tomando notas sobre los inventos.",
                                clue: "Faltan fichas de inventos de todas las materias."
                            },
                            {
                                name: "Carlos",
                                role: "Estudiante",
                                area: "Sala de experimentos",
                                testimony: "Escuché pasos y vi una sombra desaparecer entre los paneles de ciencias.",
                                clue: "Alguien dejó una pluma junto a un libro de matemáticas."
                            },
                            {
                                name: "Don Ernesto",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Las cámaras captaron a una figura con gabardina saliendo por la puerta trasera.",
                                clue: "La figura llevaba una libreta con símbolos de todas las materias."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para visitantes y trabajadores.",
                        witnesses: [
                            {
                                name: "Lucía",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido los habituales. Nadie extraño ni con prisas.",
                                clue: "No he visto a nadie con libretas misteriosas."
                            },
                            {
                                name: "Miguel",
                                role: "Investigador",
                                area: "Mesa del fondo",
                                testimony: "Estaba tan concentrado en mis apuntes que no vi nada raro.",
                                clue: "Quizá deberías buscar en la sala de los inventos."
                            },
                            {
                                name: "Sofía",
                                role: "Estudiante",
                                area: "Terraza",
                                testimony: "Solo he visto a gente tomando café y leyendo periódicos.",
                                clue: "Aquí no ha pasado nada fuera de lo común."
                            }
                        ]
                    },
                    {
                        name: "Jardines del museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Parque junto al museo, con esculturas de pensadores.",
                        witnesses: [
                            {
                                name: "Don Julián",
                                role: "Jardinero",
                                area: "Rosaleda",
                                testimony: "He visto a niños jugando, pero ningún adulto sospechoso.",
                                clue: "Quizá deberías buscar dentro del museo."
                            },
                            {
                                name: "Ana",
                                role: "Paseante",
                                area: "Banco central",
                                testimony: "Solo he visto a gente paseando perros y leyendo al sol.",
                                clue: "No he visto a nadie con libretas misteriosas."
                            },
                            {
                                name: "Pedro",
                                role: "Ciclista",
                                area: "Carril bici",
                                testimony: "He pasado rápido, pero no he notado nada raro.",
                                clue: "Todo tranquilo en los jardines."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Sala de matemáticas, Biblioteca Universal",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Sala donde se guardan tratados matemáticos.",
                        witnesses: [
                            {
                                name: "María",
                                role: "Bibliotecaria",
                                area: "Mostrador",
                                testimony: "Vi a alguien resolviendo ecuaciones en la pizarra digital.",
                                clue: "Faltan libros de álgebra y geometría."
                            },
                            {
                                name: "Javier",
                                role: "Estudiante",
                                area: "Sala de estudio",
                                testimony: "Un visitante preguntó por problemas de lógica y criptografía.",
                                clue: "Buscaba información sobre códigos secretos."
                            },
                            {
                                name: "Elena",
                                role: "Conservadora",
                                area: "Despacho",
                                testimony: "Faltan folletos sobre la historia de las matemáticas.",
                                clue: "Alguien se llevó todos los folletos de la sala."
                            }
                        ]
                    },
                    {
                        name: "Sala de historia",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Sala donde se guardan tratados históricos.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Guía",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie resolviendo enigmas."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de matemáticas."
                            },
                            {
                                name: "Tomás",
                                role: "Profesor",
                                area: "Terraza",
                                testimony: "Solo he visto a mis alumnos y a otros profesores.",
                                clue: "Nada fuera de lo común en la sala de historia."
                            }
                        ]
                    },
                    {
                        name: "Sala de arte",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Sala donde se exponen obras de arte.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Guía de arte",
                                area: "Caja",
                                testimony: "He visto a una persona admirando cuadros y tomando notas.",
                                clue: "Nadie ha preguntado por matemáticas."
                            },
                            {
                                name: "Luis",
                                role: "Estudiante",
                                area: "Estantería de libros",
                                testimony: "Buscaba un regalo para mi madre. No he visto nada extraño.",
                                clue: "Solo libros y recuerdos."
                            },
                            {
                                name: "Patricia",
                                role: "Turista",
                                area: "Mostrador",
                                testimony: "He comprado una guía de arte. No he visto a nadie sospechoso.",
                                clue: "Todo normal en la sala de arte."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Laboratorio de Ideas",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se desarrollan proyectos interdisciplinares y experimentos educativos.",
                        witnesses: [
                            {
                                name: "Dr. Torres",
                                role: "Coordinador de proyectos",
                                area: "Oficina",
                                testimony: "Vi a una persona con gabardina manipulando los experimentos.",
                                clue: "El experimento saboteado mezclaba ciencias, arte y matemáticas."
                            },
                            {
                                name: "Marina",
                                role: "Estudiante",
                                area: "Banco de trabajo",
                                testimony: "Alguien dejó una libreta con anotaciones de todas las materias.",
                                clue: "La libreta menciona un reto mundial."
                            },
                            {
                                name: "Pablo",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con gabardina salir apresurada con una caja de experimentos.",
                                clue: "La caja tenía símbolos de todas las materias."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del laboratorio",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para estudiantes y profesores.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes y profesores. Nadie sospechoso.",
                                clue: "No he visto a nadie con cajas ni libretas."
                            },
                            {
                                name: "Isabel",
                                role: "Estudiante",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en el laboratorio de ideas."
                            },
                            {
                                name: "Tomás",
                                role: "Profesor",
                                area: "Terraza",
                                testimony: "Solo he visto a mis alumnos y a otros profesores.",
                                clue: "Nada fuera de lo común en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Tienda del laboratorio",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se venden kits y libros de experimentos educativos.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos kits de experimentos hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por experimentos interdisciplinares."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de kits",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño.",
                                clue: "Solo kits y libros."
                            },
                            {
                                name: "Patricia",
                                role: "Estudiante",
                                area: "Mostrador",
                                testimony: "He comprado un manual de experimentos. No he visto a nadie sospechoso.",
                                clue: "Todo normal en la tienda."
                            }
                        ]
                    }
                ]
            },
            // Paso 4
            {
                locations: [
                    {
                        name: "Ciudad del Saber",
                        target: true,
                        city: "Panamá",
                        country: "Panamá",
                        year: "2023",
                        description: "Centro internacional de innovación y conocimiento, sede de olimpiadas educativas.",
                        witnesses: [
                            {
                                name: "John",
                                role: "Organizador",
                                area: "Sala de conferencias",
                                testimony: "Vi a una persona con gabardina presentando un reto mundial.",
                                clue: "Buscaba a los mejores estudiantes de cada materia."
                            },
                            {
                                name: "Emily",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un catálogo con anotaciones sobre saberes."
                                ,clue: "El catálogo menciona una gran final educativa."
                            },
                            {
                                name: "Michael",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con gabardina salir con una mochila llena de libros y experimentos.",
                                clue: "La mochila tenía pegatinas de olimpiadas educativas."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la Ciudad del Saber",
                        target: false,
                        city: "Panamá",
                        country: "Panamá",
                        year: "2023",
                        description: "Zona de descanso para estudiantes y profesores de todo el mundo.",
                        witnesses: [
                            {
                                name: "Anna",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes y profesores. Nadie sospechoso.",
                                clue: "No he visto a nadie con mochilas sospechosas."
                            },
                            {
                                name: "David",
                                role: "Estudiante",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de conferencias."
                            },
                            {
                                name: "Sarah",
                                role: "Profesora",
                                area: "Terraza",
                                testimony: "Solo he visto a mis alumnos y a otros profesores.",
                                clue: "Nada fuera de lo común en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Tienda de la Ciudad del Saber",
                        target: false,
                        city: "Panamá",
                        country: "Panamá",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de todas las materias.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de todas las materias hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por retos mundiales."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de libros",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño.",
                                clue: "Solo libros y recuerdos."
                            },
                            {
                                name: "Patricia",
                                role: "Visitante",
                                area: "Mostrador",
                                testimony: "He comprado una guía de Panamá. No he visto a nadie sospechoso.",
                                clue: "Todo normal en la tienda."
                            }
                        ]
                    }
                ]
            },
            // Paso 5
            {
                locations: [
                    {
                        name: "Gran Final Educativa",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "El mayor evento educativo del mundo, con estudiantes de todos los países.",
                        witnesses: [
                            {
                                name: "Don Gregorio",
                                role: "Catedrático de Educación",
                                area: "Atril",
                                testimony: "Vi a Miranda San Francisco preparando el reto final.",
                                clue: "Miranda iba a desafiar a los mejores estudiantes del mundo."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante",
                                area: "Fila central",
                                testimony: "Escuché hablar de un reto que mezcla todas las materias.",
                                clue: "Miranda planea huir tras la final."
                            },
                            {
                                name: "Luis",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Vi a la policía entrar justo a tiempo para detener a Miranda.",
                                clue: "El secreto de los saberes fue recuperado y compartido con el mundo."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la final",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Lugar de encuentro de estudiantes y profesores de todo el mundo.",
                        witnesses: [
                            {
                                name: "Clara",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes a repasar apuntes. Nadie sospechoso.",
                                clue: "No he visto a nadie con libretas sospechosas."
                            },
                            {
                                name: "Pedro",
                                role: "Profesor",
                                area: "Mesa del fondo",
                                testimony: "He corregido exámenes toda la tarde. Nada fuera de lo común.",
                                clue: "Solo estudiantes y profesores."
                            },
                            {
                                name: "Lucía",
                                role: "Estudiante",
                                area: "Terraza",
                                testimony: "He estado estudiando con amigas. No he visto nada raro.",
                                clue: "Todo normal en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Parque del Retiro",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "El parque más famoso de Madrid, lleno de vida y estudiantes."
                        ,witnesses: [
                            {
                                name: "Javier",
                                role: "Guía turístico",
                                area: "Centro del parque",
                                testimony: "He dado visitas guiadas todo el día. Nadie sospechoso.",
                                clue: "Solo estudiantes y profesores."
                            },
                            {
                                name: "María",
                                role: "Vendedora de helados",
                                area: "Puesto de helados",
                                testimony: "He vendido helados a niños y familias. Nada fuera de lo común.",
                                clue: "Todo normal en el parque."
                            },
                            {
                                name: "Andrés",
                                role: "Estudiante",
                                area: "Banco central",
                                testimony: "He estado charlando con amigos. No he visto nada raro.",
                                clue: "Solo estudiantes y profesores."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 