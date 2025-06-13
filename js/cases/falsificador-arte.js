const falsificadorArte = {
    culpable: "El Falsificador de Arte",
    adventure: {
        step1: {
            title: "El robo en el Museo del Louvre",
            description: "¡París amanece conmocionada! Una obra maestra ha sido sustituida por una copia tan perfecta que ni los expertos pueden distinguirla. El director del Louvre sospecha de una red internacional de falsificadores que utiliza técnicas antiguas de los maestros renacentistas. ¿Te atreves a seguir el rastro del arte perdido y descubrir los secretos que se esconden tras los lienzos? ¡El mundo del arte te espera!"
        },
        step2: {
            title: "Pistas en el Museo del Prado",
            description: "Se ha detectado una falsificación en una sala de Velázquez. Los expertos buscan pistas en los pigmentos y firmas. El falsificador ha utilizado técnicas del siglo XVII, incluyendo el uso de bermellón y azurita, pigmentos que Velázquez usaba en sus obras."
        },
        step3: {
            title: "El misterio en Florencia",
            description: "Una escultura renacentista ha sido reemplazada por una réplica. El culpable deja mensajes en clave en las etiquetas de las obras, utilizando símbolos alquímicos del siglo XV que indican la composición de los materiales utilizados."
        },
        step4: {
            title: "Viaje a Nueva York",
            description: "El rastro lleva hasta el MoMA, donde se prepara una subasta de arte moderno. El falsificador planea vender varias copias, utilizando técnicas de los maestros impresionistas del siglo XIX, como el uso de colores puros y pinceladas sueltas."
        },
        step5: {
            title: "Desenlace en el Museo Reina Sofía",
            description: "El Falsificador de Arte planea exponer su obra en una galería clandestina. Hay que desenmascararlo antes de que engañe a los expertos. Sus últimas falsificaciones imitan el estilo de los maestros del siglo XX, incluyendo técnicas de Picasso y Dalí."
        }
    },
    case: {
        startingLocation: {
            name: "Museo del Louvre",
            city: "París",
            country: "Francia",
            year: "2023",
            description: "El Museo del Louvre, antiguo palacio real construido en el siglo XII y transformado en museo durante la Revolución Francesa, despierta hoy con un escándalo: una obra maestra ha sido sustituida por una copia perfecta. Entre pasillos llenos de arte y misterio, tu aventura para descubrir la verdad está a punto de comenzar. ¿Te atreves a entrar?",
            witnesses: [
                {
                    name: "Marie",
                    role: "Guía del museo",
                    area: "Entrada principal",
                    testimony: "Esta mañana, al abrir la sala, noté que la Mona Lisa parecía... diferente. El marco, que data del siglo XVI, estaba ligeramente torcido y el cristal tenía una huella extraña. Además, los pigmentos del sfumato, la técnica característica de Leonardo, parecen haber sido alterados.",
                    clue: "Encontré una etiqueta de equipaje con destino Madrid cerca de la puerta de servicio, junto a un frasco de barniz de almáciga, un material que Leonardo usaba para proteger sus obras."
                },
                {
                    name: "Jean",
                    role: "Vigilante nocturno",
                    area: "Pasillo lateral",
                    testimony: "Anoche vi a una figura encapuchada merodeando por los pasillos. Cuando me acerqué, desapareció entre las sombras. Lo más extraño es que llevaba un maletín con el símbolo de la Escuela de Bellas Artes de Florencia, fundada en 1563.",
                    clue: "En el suelo quedó un trozo de tela con restos de pintura fresca. El análisis químico revela que contiene lapislázuli, un pigmento ultramarino que solo los maestros renacentistas podían permitirse."
                },
                {
                    name: "Sophie",
                    role: "Visitante",
                    area: "Tienda de recuerdos",
                    testimony: "Vi a un hombre tomar notas sobre la técnica de Leonardo y comprar varios libros de arte. Parecía muy interesado en los detalles, especialmente en el uso del sfumato y la perspectiva aérea, técnicas que Leonardo perfeccionó en el siglo XV.",
                    clue: "Dejó olvidado un cuaderno con bocetos de cuadros famosos y fórmulas químicas. Las fórmulas corresponden a recetas de pigmentos del Renacimiento, incluyendo la composición del bermellón y el azurita."
                }
            ]
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Sala de la Mona Lisa",
                        target: true,
                        city: "París",
                        country: "Francia",
                        year: "2023",
                        description: "La sala que alberga la obra más famosa de Leonardo da Vinci, pintada entre 1503 y 1519. El cuadro ha sobrevivido a la Revolución Francesa y a dos guerras mundiales, pero ahora enfrenta su mayor desafío.",
                        witnesses: [
                            {
                                name: "Marie",
                                role: "Guía del museo",
                                area: "Frente a la Mona Lisa",
                                testimony: "Vi a alguien con guantes y una lupa revisando el marco del cuadro. Lo más extraño es que llevaba un pincel de pelo de marta, el mismo tipo que Leonardo usaba para aplicar el sfumato.",
                                clue: "El cristal tenía una huella dactilar sospechosa y restos de barniz de almáciga, un material que solo se usaba en el Renacimiento."
                            },
                            {
                                name: "Jean",
                                role: "Vigilante",
                                area: "Puerta lateral",
                                testimony: "Las cámaras captaron a una figura encapuchada saliendo con un tubo de lienzo. Lo más extraño es que el tubo tenía el sello de la Academia de Bellas Artes de Florencia, fundada en 1563.",
                                clue: "El tubo tenía una etiqueta con destino Madrid y restos de pigmentos históricos, incluyendo lapislázuli y bermellón."
                            },
                            {
                                name: "Sophie",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Vi a un hombre tomar notas sobre la técnica de Leonardo. Estaba especialmente interesado en el sfumato y la perspectiva aérea, técnicas que Leonardo perfeccionó en el siglo XV.",
                                clue: "Anotaba detalles sobre el sfumato y los pigmentos, incluyendo fórmulas químicas de colores que solo se usaban en el Renacimiento."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Louvre",
                        target: false,
                        city: "París",
                        country: "Francia",
                        year: "2023",
                        description: "La cafetería, ubicada en el antiguo patio del palacio real, es una zona de descanso para visitantes y trabajadores. Sus paredes conservan frescos del siglo XVII.",
                        witnesses: [
                            {
                                name: "Pierre",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso, aunque noté a alguien estudiando los frescos del techo con mucha atención.",
                                clue: "No he visto a nadie con tubos de lienzo, pero encontré un pincel de pelo de marta en el baño."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro, aunque noté a alguien tomando notas sobre los frescos del techo.",
                                clue: "Quizá deberías buscar en la sala de la Mona Lisa. Vi a alguien muy interesado en las técnicas de pintura al fresco."
                            },
                            {
                                name: "Tomás",
                                role: "Profesor",
                                area: "Terraza",
                                testimony: "Solo he visto a mis alumnos y a otros profesores. Aunque noté a alguien estudiando los frescos del patio con una lupa.",
                                clue: "Nada fuera de lo común en la cafetería, pero los frescos del patio son del siglo XVII."
                            }
                        ]
                    },
                    {
                        name: "Tienda del Louvre",
                        target: false,
                        city: "París",
                        country: "Francia",
                        year: "2023",
                        description: "La tienda, ubicada en una antigua sala del palacio, vende recuerdos y libros de arte. Sus estanterías están decoradas con reproducciones de obras maestras.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de arte hoy, pero nada raro. Aunque noté a alguien muy interesado en los libros sobre técnicas de pintura renacentista.",
                                clue: "Nadie ha preguntado por técnicas de Leonardo, pero alguien compró todos los libros sobre pigmentos históricos."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de libros",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño, aunque noté a alguien estudiando los libros sobre técnicas de pintura al fresco.",
                                clue: "Solo libros y recuerdos, pero los libros sobre técnicas históricas están desordenados."
                            },
                            {
                                name: "Patricia",
                                role: "Turista",
                                area: "Mostrador",
                                testimony: "He comprado una guía de París. No he visto a nadie sospechoso, aunque noté a alguien muy interesado en los libros sobre pigmentos históricos.",
                                clue: "Todo normal en la tienda, pero los libros sobre técnicas renacentistas están desordenados."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Sala Velázquez, Museo del Prado",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "La sala que alberga las grandes obras de Velázquez, incluyendo Las Meninas, pintada en 1656. El museo, fundado en 1819, conserva la mayor colección de obras del maestro sevillano.",
                        witnesses: [
                            {
                                name: "María",
                                role: "Guía del museo",
                                area: "Frente a Las Meninas",
                                testimony: "Vi a alguien dejar una copia junto al cuadro original. Lo más extraño es que usó los mismos pigmentos que Velázquez: bermellón, azurita y lapislázuli.",
                                clue: "La copia tenía una firma falsa y restos de barniz de almáciga, un material que solo se usaba en el siglo XVII."
                            },
                            {
                                name: "Javier",
                                role: "Visitante",
                                area: "Sala lateral",
                                testimony: "Un hombre encapuchado preguntó por los pigmentos originales de Velázquez. Estaba especialmente interesado en el bermellón y el azurita, pigmentos que el maestro usaba en sus obras.",
                                clue: "Buscaba información sobre la composición de los colores, especialmente sobre los pigmentos históricos del siglo XVII."
                            },
                            {
                                name: "Elena",
                                role: "Conservadora",
                                area: "Despacho",
                                testimony: "Faltan folletos sobre la historia de la pintura española. Lo más extraño es que solo faltan los que hablan sobre las técnicas y pigmentos del siglo XVII.",
                                clue: "Alguien se llevó todos los folletos de la sala, especialmente los que detallan las técnicas de Velázquez."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "La cafetería, ubicada en el antiguo claustro del museo, es una zona de descanso para visitantes. Sus paredes conservan frescos del siglo XIX.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso, aunque noté a alguien estudiando los frescos del techo con mucha atención.",
                                clue: "No he visto a nadie dejar copias de cuadros, pero encontré un pincel de pelo de marta en el baño."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro, aunque noté a alguien tomando notas sobre los frescos del techo.",
                                clue: "Quizá deberías buscar en la sala de los cuadros. Vi a alguien muy interesado en las técnicas de pintura al fresco."
                            },
                            {
                                name: "Tomás",
                                role: "Profesor",
                                area: "Terraza",
                                testimony: "Solo he visto a mis alumnos y a otros profesores. Aunque noté a alguien estudiando los frescos del patio con una lupa.",
                                clue: "Nada fuera de lo común en la cafetería, pero los frescos del patio son del siglo XIX."
                            }
                        ]
                    },
                    {
                        name: "Tienda del Museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "La tienda, ubicada en una antigua sala del museo, vende recuerdos y libros de arte. Sus estanterías están decoradas con reproducciones de obras maestras.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de arte hoy, pero nada raro. Aunque noté a alguien muy interesado en los libros sobre técnicas de pintura del siglo XVII.",
                                clue: "Nadie ha preguntado por técnicas de Velázquez, pero alguien compró todos los libros sobre pigmentos históricos."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de libros",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño, aunque noté a alguien estudiando los libros sobre técnicas de pintura al fresco.",
                                clue: "Solo libros y recuerdos, pero los libros sobre técnicas históricas están desordenados."
                            },
                            {
                                name: "Patricia",
                                role: "Turista",
                                area: "Mostrador",
                                testimony: "He comprado una guía de Madrid. No he visto a nadie sospechoso, aunque noté a alguien muy interesado en los libros sobre pigmentos históricos.",
                                clue: "Todo normal en la tienda, pero los libros sobre técnicas del siglo XVII están desordenados."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Galería Uffizi",
                        target: true,
                        city: "Florencia",
                        country: "Italia",
                        year: "2023",
                        description: "Uno de los museos de arte más importantes del mundo, con obras del Renacimiento.",
                        witnesses: [
                            {
                                name: "Giovanni",
                                role: "Guía italiano",
                                area: "Sala Botticelli",
                                testimony: "Vi a una persona tomando notas sobre las esculturas renacentistas.",
                                clue: "Buscaba símbolos ocultos en las etiquetas."
                            },
                            {
                                name: "Lucía",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un papel con palabras en latín junto a una escultura.",
                                clue: "El papel menciona 'copia' y 'original'."
                            },
                            {
                                name: "Manuel",
                                role: "Vigilante",
                                area: "Pasillo lateral",
                                testimony: "Vi a una figura encapuchada salir apresurada hacia la salida este.",
                                clue: "Llevaba una escultura pequeña bajo el brazo."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de los Uffizi",
                        target: false,
                        city: "Florencia",
                        country: "Italia",
                        year: "2023",
                        description: "Zona de descanso para visitantes y trabajadores.",
                        witnesses: [
                            {
                                name: "Rosa",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie con esculturas."
                            },
                            {
                                name: "Javier",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la galería."
                            },
                            {
                                name: "Antonio",
                                role: "Profesor",
                                area: "Terraza",
                                testimony: "Solo he visto a mis alumnos y a otros profesores.",
                                clue: "Nada fuera de lo común en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Tienda de los Uffizi",
                        target: false,
                        city: "Florencia",
                        country: "Italia",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de arte.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de arte hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por esculturas renacentistas."
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
                                role: "Turista",
                                area: "Mostrador",
                                testimony: "He comprado una guía de Florencia. No he visto a nadie sospechoso.",
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
                        name: "MoMA, Nueva York",
                        target: true,
                        city: "Nueva York",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Museo de Arte Moderno, epicentro del arte contemporáneo mundial.",
                        witnesses: [
                            {
                                name: "John",
                                role: "Guía del museo",
                                area: "Sala de exposiciones",
                                testimony: "Vi a una persona tomando fotos de las obras más valiosas.",
                                clue: "Buscaba detalles para hacer copias."
                            },
                            {
                                name: "Emily",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un catálogo con anotaciones sobre precios y autores.",
                                clue: "El catálogo menciona una subasta secreta."
                            },
                            {
                                name: "Michael",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura encapuchada salir con un portafolios grande.",
                                clue: "El portafolios tenía etiquetas de varias ciudades."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del MoMA",
                        target: false,
                        city: "Nueva York",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Zona de descanso para visitantes y trabajadores.",
                        witnesses: [
                            {
                                name: "Anna",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie con portafolios grandes."
                            },
                            {
                                name: "David",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de exposiciones."
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
                        name: "Tienda del MoMA",
                        target: false,
                        city: "Nueva York",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de arte moderno.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de arte hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por técnicas de arte moderno."
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
                                role: "Turista",
                                area: "Mostrador",
                                testimony: "He comprado una guía de Nueva York. No he visto a nadie sospechoso.",
                                clue: "Todo normal en la tienda."
                            }
                        ]
                    }
                ]
            },
            // Paso 5
            {
                waitForAllClues: true,
                locations: [
                    {
                        name: "Galería clandestina, Museo Reina Sofía",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Una sala secreta donde se exponen obras falsas para coleccionistas privados.",
                        witnesses: [
                            {
                                name: "Don Gregorio",
                                role: "Catedrático de Arte",
                                area: "Atril",
                                testimony: "Vi a una figura encapuchada preparando una subasta secreta.",
                                clue: "El Falsificador de Arte iba a vender varias copias."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante",
                                area: "Fila central",
                                testimony: "Escuché hablar de una subasta y de varias obras falsas.",
                                clue: "El Falsificador planea huir tras la venta."
                            },
                            {
                                name: "Luis",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Vi a la policía entrar justo a tiempo para detener al culpable.",
                                clue: "Las obras falsas fueron requisadas y destruidas."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Reina Sofía",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Lugar de encuentro de artistas y estudiantes.",
                        witnesses: [
                            {
                                name: "Clara",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes a repasar exámenes. Nadie sospechoso.",
                                clue: "No he visto a nadie con obras de arte."
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
                        name: "Plaza del Museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "La plaza frente al Reina Sofía, llena de vida y turistas.",
                        witnesses: [
                            {
                                name: "Javier",
                                role: "Guía turístico",
                                area: "Centro de la plaza",
                                testimony: "He dado visitas guiadas todo el día. Nadie sospechoso.",
                                clue: "Solo turistas y estudiantes."
                            },
                            {
                                name: "María",
                                role: "Vendedora de helados",
                                area: "Puesto de helados",
                                testimony: "He vendido helados a niños y familias. Nada fuera de lo común.",
                                clue: "Todo normal en la plaza."
                            },
                            {
                                name: "Andrés",
                                role: "Estudiante",
                                area: "Banco central",
                                testimony: "He estado charlando con amigos. No he visto nada raro.",
                                clue: "Solo estudiantes y turistas."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    title: 'El Misterio del Cuadro Viviente',
    description: 'Un famoso cuadro ha cobrado vida y está causando estragos en el museo. ¿Quién podría estar detrás de este fenómeno?',
    difficulty: 'alta',
    timeLimit: 20,
    location: 'Museo de Arte Moderno, Valencia',
    suspects: [
        {
            id: 'artista-digital',
            name: 'Luna "La Píxel" Vega',
            description: 'Una artista digital que cree que el arte debe ser interactivo y vivo. Lleva un pendrive con forma de pincel que brilla con colores cambiantes.',
            image: 'artista-digital.jpg',
            motive: 'Quiere demostrar que el arte digital puede ser tan valioso como el tradicional',
            alibi: 'Estaba dando una charla sobre arte digital en la universidad',
            clues: [
                'Su pendrive-pincel brilla con colores cambiantes',
                'Tiene un portátil con stickers de obras de arte famosas',
                'Lleva una camiseta con el logo de un programa de edición de imágenes',
                'Tiene un tatuaje de un código QR en la muñeca',
                'Su mochila tiene un diseño de píxeles animados'
            ]
        }
    ],
    witnesses: [
        {
            id: 'conservador',
            name: 'Conservador del Museo',
            description: 'Un experto en conservación de arte que ha notado cambios extraños en los cuadros',
            testimony: 'Los cuadros... ¡se mueven! Y no es una ilusión óptica. He visto píxeles flotando alrededor de las obras.',
            clues: [
                'Menciona que los cuadros tienen un brillo digital',
                'Dice que ha visto píxeles flotando',
                'Notó que las obras tienen un aura digital'
            ]
        },
        {
            id: 'tecnico',
            name: 'Técnico de Sistemas',
            description: 'El encargado de la tecnología del museo',
            testimony: 'He detectado una señal WiFi extraña que viene de los cuadros. ¡Como si estuvieran conectados a internet!',
            clues: [
                'Ha detectado señales WiFi anómalas',
                'Menciona que los cuadros emiten datos',
                'Dice que hay píxeles flotando en el aire'
            ]
        },
        {
            id: 'visitante',
            name: 'Visitante del Museo',
            description: 'Una turista que grababa el museo con su teléfono',
            testimony: '¡En mi video se ve cómo los cuadros cobran vida! Y hay una chica con un pincel digital que parece controlarlos.',
            clues: [
                'Tiene un video de los cuadros moviéndose',
                'Menciona a una chica con un pincel digital',
                'Dice que los cuadros tienen efectos digitales'
            ]
        }
    ],
    clues: [
        {
            id: 'pendrive-pincel',
            name: 'Pendrive-Pincel',
            description: 'Un pendrive con forma de pincel que brilla con colores cambiantes. ¿Qué contiene?',
            location: 'En la mochila de Luna',
            type: 'objeto',
            difficulty: 'facil',
            hint: 'Los colores cambiantes podrían ser datos...',
            solution: 'El pendrive contiene el código que da vida a los cuadros'
        },
        {
            id: 'portatil-stickers',
            name: 'Portátil con Stickers',
            description: 'Un portátil lleno de stickers de obras de arte famosas. ¿Qué programas tiene instalados?',
            location: 'En la mesa de Luna',
            type: 'objeto',
            difficulty: 'media',
            hint: 'Los stickers podrían ser pistas de los programas...',
            solution: 'El portátil tiene programas de edición y animación digital'
        },
        {
            id: 'camiseta-logo',
            name: 'Camiseta con Logo',
            description: 'Una camiseta con el logo de un programa de edición de imágenes. ¿Qué significa?',
            location: 'En el armario de Luna',
            type: 'objeto',
            difficulty: 'facil',
            hint: 'El logo podría ser una pista del programa usado...',
            solution: 'La camiseta indica el programa usado para animar los cuadros'
        },
        {
            id: 'tatuaje-qr',
            name: 'Tatuaje QR',
            description: 'Un tatuaje de código QR en la muñeca. ¿Qué información contiene?',
            location: 'En la muñeca de Luna',
            type: 'fisico',
            difficulty: 'dificil',
            hint: 'El código QR podría contener instrucciones...',
            solution: 'El código QR contiene las instrucciones para animar los cuadros'
        },
        {
            id: 'mochila-pixeles',
            name: 'Mochila de Píxeles',
            description: 'Una mochila con diseño de píxeles animados. ¿Qué esconde?',
            location: 'En el suelo junto a Luna',
            type: 'objeto',
            difficulty: 'media',
            hint: 'Los píxeles podrían ser parte del código...',
            solution: 'La mochila contiene herramientas digitales para el arte'
        }
    ],
    solution: {
        explanation: 'Luna Vega, una artista digital, ha desarrollado una tecnología que permite animar cuadros tradicionales usando realidad aumentada y programación. Su pendrive-pincel contiene el código que da vida a las obras, el portátil tiene los programas necesarios, la camiseta indica el software usado, el tatuaje QR contiene las instrucciones, y la mochila guarda las herramientas digitales. Su objetivo es demostrar que el arte digital puede ser tan valioso como el tradicional.',
        steps: [
            'Luna usó su pendrive-pincel para animar los cuadros',
            'El portátil contiene los programas de edición',
            'La camiseta indica el software usado',
            'El tatuaje QR tiene las instrucciones',
            'La mochila guarda las herramientas digitales'
        ]
    }
}; 