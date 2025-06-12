const falsificadorArte = {
    culpable: "El Falsificador de Arte",
    adventure: {
        step1: {
            title: "El robo en el Museo del Louvre",
            description: "Una obra maestra ha sido sustituida por una copia perfecta. El director sospecha de una red internacional de falsificadores."
        },
        step2: {
            title: "Pistas en el Museo del Prado",
            description: "Se ha detectado una falsificación en una sala de Velázquez. Los expertos buscan pistas en los pigmentos y firmas."
        },
        step3: {
            title: "El misterio en Florencia",
            description: "Una escultura renacentista ha sido reemplazada por una réplica. El culpable deja mensajes en clave en las etiquetas de las obras."
        },
        step4: {
            title: "Viaje a Nueva York",
            description: "El rastro lleva hasta el MoMA, donde se prepara una subasta de arte moderno. El falsificador planea vender varias copias."
        },
        step5: {
            title: "Desenlace en el Museo Reina Sofía",
            description: "El Falsificador de Arte planea exponer su obra en una galería clandestina. Hay que desenmascararlo antes de que engañe a los expertos."
        }
    },
    case: {
        startingLocation: {
            name: "Museo del Louvre",
            city: "París",
            country: "Francia",
            year: "2023",
            description: "El museo más famoso del mundo, hogar de la Mona Lisa y otras obras maestras."
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
                        description: "Donde se expone la obra más famosa de Leonardo da Vinci.",
                        witnesses: [
                            {
                                name: "Marie",
                                role: "Guía del museo",
                                area: "Frente a la Mona Lisa",
                                testimony: "Vi a alguien con guantes y una lupa revisando el marco del cuadro.",
                                clue: "El cristal tenía una huella dactilar sospechosa."
                            },
                            {
                                name: "Jean",
                                role: "Vigilante",
                                area: "Puerta lateral",
                                testimony: "Las cámaras captaron a una figura encapuchada saliendo con un tubo de lienzo.",
                                clue: "El tubo tenía una etiqueta con destino Madrid."
                            },
                            {
                                name: "Sophie",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Vi a un hombre tomar notas sobre la técnica de Leonardo.",
                                clue: "Anotaba detalles sobre el sfumato y los pigmentos."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Louvre",
                        target: false,
                        city: "París",
                        country: "Francia",
                        year: "2023",
                        description: "Zona de descanso para visitantes y trabajadores.",
                        witnesses: [
                            {
                                name: "Pierre",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie con tubos de lienzo."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de la Mona Lisa."
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
                        name: "Tienda del Louvre",
                        target: false,
                        city: "París",
                        country: "Francia",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de arte.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de arte hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por técnicas de Leonardo."
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
                                testimony: "He comprado una guía de París. No he visto a nadie sospechoso.",
                                clue: "Todo normal en la tienda."
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
                        description: "Donde cuelgan las grandes obras de Velázquez.",
                        witnesses: [
                            {
                                name: "María",
                                role: "Guía del museo",
                                area: "Frente a Las Meninas",
                                testimony: "Vi a alguien dejar una copia junto al cuadro original.",
                                clue: "La copia tenía una firma falsa."
                            },
                            {
                                name: "Javier",
                                role: "Visitante",
                                area: "Sala lateral",
                                testimony: "Un hombre encapuchado preguntó por los pigmentos originales de Velázquez.",
                                clue: "Buscaba información sobre la composición de los colores."
                            },
                            {
                                name: "Elena",
                                role: "Conservadora",
                                area: "Despacho",
                                testimony: "Faltan folletos sobre la historia de la pintura española.",
                                clue: "Alguien se llevó todos los folletos de la sala."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para visitantes.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie dejar copias de cuadros."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de los cuadros."
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
                        name: "Tienda del Museo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de arte.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de arte hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por técnicas de Velázquez."
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
                                testimony: "He comprado una guía de Madrid. No he visto a nadie sospechoso.",
                                clue: "Todo normal en la tienda."
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
    }
}; 