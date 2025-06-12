const maestroHistoria = {
    culpable: "Profesor Martínez",
    adventure: {
        step1: {
            title: "El robo en la Biblioteca Nacional",
            description: "¡Alerta en la Biblioteca Nacional! Un manuscrito medieval único ha desaparecido: 'Las Crónicas de Alfonso X', un documento del siglo XIII que contiene valiosos conocimientos sobre astronomía, matemáticas y la historia de la Reconquista. Este manuscrito es crucial para entender cómo los sabios medievales combinaban ciencia y cultura. El ladrón, conocido como 'El Maestro de la Historia', busca reunir documentos históricos para crear una versión manipulada de la historia de España. Tu misión: seguir el rastro histórico y cultural para recuperar el manuscrito antes de que sea alterado."
        },
        step2: {
            title: "Pistas en el Museo del Prado",
            description: "Las pistas te llevan al Museo del Prado, donde 'Las Meninas' de Velázquez esconde un mensaje cifrado. El cuadro, pintado en 1656, representa la corte del rey Felipe IV y es clave para entender el Siglo de Oro español. El Maestro de la Historia ha dejado pistas que conectan el arte barroco con la historia de la Reconquista. Tu objetivo: analizar los símbolos artísticos y descubrir cómo se relacionan con los eventos históricos de la época."
        },
        step3: {
            title: "El enigma de la Alhambra",
            description: "La investigación te lleva a la Alhambra de Granada, último bastión del reino nazarí hasta 1492. El palacio, construido entre los siglos XIII y XIV, es un tesoro de la arquitectura islámica y un símbolo de la convivencia entre culturas. El Maestro de la Historia ha escondido un fragmento del manuscrito en la Sala de los Reyes, donde los techos decorados con los siete reyes nazaríes guardan secretos sobre la astronomía árabe. Tu tarea: descifrar los símbolos matemáticos y astronómicos que conectan la cultura árabe con la cristiana."
        },
        step4: {
            title: "Viaje a Atenas",
            description: "El rastro histórico te lleva hasta el Partenón de Atenas, construido en el siglo V a.C. El manuscrito robado contiene referencias a cómo los sabios medievales españoles estudiaron la democracia ateniense y la adaptaron a sus necesidades. El Maestro de la Historia busca manipular estos conocimientos para reescribir la historia de la democracia en España. Tu misión: analizar las conexiones entre la democracia ateniense y los sistemas políticos medievales españoles."
        },
        step5: {
            title: "Desenlace en la Universidad de Salamanca",
            description: "La investigación culmina en la Universidad de Salamanca, fundada en 1218, donde el Maestro de la Historia planea subastar el manuscrito. La universidad, una de las más antiguas de Europa, fue crucial en la transmisión del conocimiento durante la Edad Media. Tu objetivo final: utilizar todos los conocimientos históricos recopilados para exponer la manipulación histórica y recuperar el manuscrito original."
        }
    },
    case: {
        startingLocation: {
            name: "Biblioteca Nacional",
            city: "Madrid",
            country: "España",
            year: "1974",
            description: "La biblioteca más importante de España. Hoy hay una exposición sobre manuscritos medievales."
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Sala de Manuscritos",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Sala especial con ambiente controlado para preservar documentos antiguos. Hay una visita guiada para escolares.",
                        witnesses: [
                            {
                                name: "Bibliotecario",
                                role: "Jefe de sala",
                                area: "Mostrador",
                                testimony: "El profesor Martínez viene a menudo a consultar manuscritos medievales. Últimamente ha estado muy interesado en documentos sobre la Reconquista.",
                                clue: "Encontré una nota con coordenadas geográficas en un libro sobre la Reconquista."
                            },
                            {
                                name: "Estudiante",
                                role: "Investigador",
                                area: "Sala de lectura",
                                testimony: "El profesor Martínez me ayudó a encontrar información sobre la Reconquista. Parecía muy emocionado con algo que había descubierto.",
                                clue: "Vi un mapa antiguo con marcas en varios lugares de España."
                            },
                            {
                                name: "Guardia de seguridad",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "El profesor Martínez salió ayer tarde con una carpeta grande. Parecía nervioso.",
                                clue: "Encontré un plano del museo con marcas en varias salas."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la Biblioteca",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Cafetería para investigadores y estudiantes. Hoy hay un descuento especial en el menú del día.",
                        witnesses: [
                            {
                                name: "Camarero",
                                role: "Personal",
                                area: "Barra",
                                testimony: "Aquí solo vienen estudiantes y profesores a tomar café. Nada de misterios.",
                                clue: "Todo normal en la cafetería."
                            },
                            {
                                name: "Estudiante",
                                role: "Cliente",
                                area: "Mesa",
                                testimony: "Solo vengo a estudiar. No he visto nada raro.",
                                clue: "Aquí solo se habla de exámenes."
                            },
                            {
                                name: "Profesor",
                                role: "Cliente",
                                area: "Esquina",
                                testimony: "Lugar tranquilo para preparar clases. Nada más.",
                                clue: "Solo vengo a trabajar."
                            }
                        ]
                    },
                    {
                        name: "Jardines de Recoletos",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Jardines históricos junto a la biblioteca. Esta tarde hay un concierto de música clásica.",
                        witnesses: [
                            {
                                name: "Jardinero",
                                role: "Personal",
                                area: "Rosaleda",
                                testimony: "Solo veo paseantes y turistas. Nada fuera de lo normal.",
                                clue: "Todo tranquilo en los jardines."
                            },
                            {
                                name: "Paseante",
                                role: "Vecino",
                                area: "Paseo central",
                                testimony: "Lugar agradable para pasear. Nada más que contar.",
                                clue: "Solo vengo a disfrutar del día."
                            },
                            {
                                name: "Turista",
                                role: "Visitante",
                                area: "Fuente",
                                testimony: "Hermosos jardines. Nada más que decir.",
                                clue: "Solo vengo a hacer fotos."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Museo del Prado",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "El museo más importante de España. Hoy hay una visita guiada especial sobre Velázquez.",
                        witnesses: [
                            {
                                name: "Guía del museo",
                                role: "Personal",
                                area: "Sala Velázquez",
                                testimony: "El profesor Martínez ha estado estudiando Las Meninas. Dice que ha encontrado algo importante sobre la Reconquista.",
                                clue: "Encontré una nota con símbolos medievales en la sala de Velázquez."
                            },
                            {
                                name: "Restaurador",
                                role: "Personal",
                                area: "Taller",
                                testimony: "El profesor Martínez me mostró unos documentos antiguos. Parecía muy emocionado con un descubrimiento.",
                                clue: "Vi un mapa con marcas en varios lugares de España."
                            },
                            {
                                name: "Guardia de seguridad",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "El profesor Martínez viene a menudo a ver Las Meninas. Últimamente ha estado tomando muchas notas.",
                                clue: "Encontré un plano del museo con marcas en varias salas."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Sala de los Reyes, Alhambra",
                        target: true,
                        city: "Granada",
                        country: "España",
                        year: "2023",
                        description: "Una de las salas más emblemáticas de la Alhambra, decorada con pinturas medievales.",
                        witnesses: [
                            {
                                name: "Ahmed",
                                role: "Guía turístico",
                                area: "Entrada",
                                testimony: "Vi a una persona tomando notas frente a los frescos de los reyes nazaríes.",
                                clue: "Buscaba símbolos ocultos en las pinturas."
                            },
                            {
                                name: "Lucía",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un papel con palabras en griego antiguo.",
                                clue: "El papel menciona 'Atenas' y 'democracia'."
                            },
                            {
                                name: "Manuel",
                                role: "Vigilante",
                                area: "Pasillo lateral",
                                testimony: "Vi a una figura encapuchada salir apresurada hacia la salida este.",
                                clue: "Llevaba un libro antiguo bajo el brazo."
                            }
                        ]
                    },
                    {
                        name: "Patio de los Leones",
                        target: false,
                        city: "Granada",
                        country: "España",
                        year: "2023",
                        description: "El patio más famoso de la Alhambra, con su fuente central y columnas."
                        ,witnesses: [
                            {
                                name: "Rosa",
                                role: "Guía",
                                area: "Fuente",
                                testimony: "Solo he visto turistas haciéndose fotos. Nadie sospechoso.",
                                clue: "Aquí no ha pasado nada raro."
                            },
                            {
                                name: "Javier",
                                role: "Turista",
                                area: "Columna norte",
                                testimony: "He estado admirando la arquitectura. No he visto nada extraño.",
                                clue: "Solo turistas y guías."
                            },
                            {
                                name: "Antonio",
                                role: "Vigilante",
                                area: "Puerta sur",
                                testimony: "Todo tranquilo en el patio. Nadie con libros antiguos."
                                ,clue: "Quizá deberías buscar en otra sala."
                            }
                        ]
                    },
                    {
                        name: "Mirador de San Nicolás",
                        target: false,
                        city: "Granada",
                        country: "España",
                        year: "2023",
                        description: "Famoso mirador con vistas a la Alhambra y Sierra Nevada.",
                        witnesses: [
                            {
                                name: "Paco",
                                role: "Músico callejero",
                                area: "Plaza",
                                testimony: "He tocado la guitarra toda la tarde. Solo turistas y vecinos."
                                ,clue: "No he visto a nadie sospechoso."
                            },
                            {
                                name: "Marina",
                                role: "Vendedora ambulante",
                                area: "Puesto de artesanía",
                                testimony: "He vendido pulseras y collares, nada fuera de lo común.",
                                clue: "Solo turistas y músicos."
                            },
                            {
                                name: "Sergio",
                                role: "Turista",
                                area: "Banco de piedra",
                                testimony: "He estado sacando fotos. No he visto nada raro.",
                                clue: "Todo normal en el mirador."
                            }
                        ]
                    }
                ]
            },
            // Paso 4
            {
                locations: [
                    {
                        name: "Partenón",
                        target: true,
                        city: "Atenas",
                        country: "Grecia",
                        year: "2023",
                        description: "Templo de la antigua Grecia, símbolo de la democracia ateniense.",
                        witnesses: [
                            {
                                name: "Nikos",
                                role: "Guía griego",
                                area: "Entrada",
                                testimony: "Vi a una persona tomando notas sobre la historia de la democracia.",
                                clue: "Buscaba referencias a la Asamblea y el Ágora."
                            },
                            {
                                name: "Helena",
                                role: "Estudiante",
                                area: "Columnata",
                                testimony: "Alguien preguntó por los filósofos griegos y la democracia.",
                                clue: "Mencionó a Pericles y a Sócrates."
                            },
                            {
                                name: "Yannis",
                                role: "Vigilante",
                                area: "Puerta lateral",
                                testimony: "Vi a una figura encapuchada salir con un libro antiguo.",
                                clue: "El libro tenía símbolos griegos y españoles."
                            }
                        ]
                    },
                    {
                        name: "Museo de la Acrópolis",
                        target: false,
                        city: "Atenas",
                        country: "Grecia",
                        year: "2023",
                        description: "Museo con piezas de la antigua Grecia.",
                        witnesses: [
                            {
                                name: "Dimitra",
                                role: "Conservadora",
                                area: "Sala de esculturas",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie con libros antiguos."
                            },
                            {
                                name: "Alexis",
                                role: "Guía",
                                area: "Vestíbulo",
                                testimony: "He dado visitas guiadas todo el día. Nada fuera de lo común.",
                                clue: "Solo turistas y estudiantes."
                            },
                            {
                                name: "Sofia",
                                role: "Visitante",
                                area: "Tienda",
                                testimony: "He comprado recuerdos, no he visto nada raro.",
                                clue: "Todo normal en el museo."
                            }
                        ]
                    },
                    {
                        name: "Plaza Sintagma",
                        target: false,
                        city: "Atenas",
                        country: "Grecia",
                        year: "2023",
                        description: "Plaza central de Atenas, llena de vida y turistas.",
                        witnesses: [
                            {
                                name: "Kostas",
                                role: "Vendedor ambulante",
                                area: "Puesto de souvlaki",
                                testimony: "He vendido comida todo el día. Nadie sospechoso.",
                                clue: "Solo turistas y locales."
                            },
                            {
                                name: "Maria",
                                role: "Estudiante",
                                area: "Banco central",
                                testimony: "He estado estudiando con amigos. No he visto nada raro.",
                                clue: "Todo normal en la plaza."
                            },
                            {
                                name: "Giorgos",
                                role: "Músico",
                                area: "Esquina norte",
                                testimony: "He tocado el bouzouki toda la tarde. Solo turistas y niños bailando.",
                                clue: "Nada fuera de lo común."
                            }
                        ]
                    }
                ]
            },
            // Paso 5
            {
                locations: [
                    {
                        name: "Aula Magna, Universidad de Salamanca",
                        target: true,
                        city: "Salamanca",
                        country: "España",
                        year: "2023",
                        description: "La sala más emblemática de la universidad más antigua de España.",
                        witnesses: [
                            {
                                name: "Don Gregorio",
                                role: "Catedrático de Historia",
                                area: "Atril",
                                testimony: "Vi a una figura encapuchada preparando una subasta secreta.",
                                clue: "El manuscrito iba a ser vendido a un coleccionista extranjero."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante",
                                area: "Fila central",
                                testimony: "Escuché hablar de una subasta y de un libro muy antiguo.",
                                clue: "El Maestro de la Historia planea huir tras la venta."
                            },
                            {
                                name: "Luis",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Vi a la policía entrar justo a tiempo para detener al culpable.",
                                clue: "El manuscrito fue recuperado y devuelto a la Biblioteca Nacional."
                            }
                        ]
                    },
                    {
                        name: "Cafetería Universitaria",
                        target: false,
                        city: "Salamanca",
                        country: "España",
                        year: "2023",
                        description: "Lugar de encuentro de estudiantes y profesores.",
                        witnesses: [
                            {
                                name: "Clara",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes a repasar exámenes. Nadie sospechoso.",
                                clue: "No he visto a nadie con libros antiguos."
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
                        name: "Plaza Mayor de Salamanca",
                        target: false,
                        city: "Salamanca",
                        country: "España",
                        year: "2023",
                        description: "La plaza más famosa de Salamanca, llena de vida y turistas.",
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