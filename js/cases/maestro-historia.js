const maestroHistoria = {
    culpable: "Profesor Martínez",
    adventure: {
        step1: {
            title: "El robo en la Biblioteca Nacional",
            description: "¡Alerta máxima en la Biblioteca Nacional! Un manuscrito medieval del siglo XIII, clave para entender la historia de España, ha desaparecido bajo misteriosas circunstancias. El documento, escrito en latín y árabe, contiene los secretos de la Escuela de Traductores de Toledo, donde sabios cristianos, judíos y musulmanes trabajaban juntos. El Maestro de la Historia ha dejado pistas enigmáticas y solo los más valientes podrán seguir el rastro a través de los siglos. ¿Te atreves a sumergirte en una aventura donde el pasado y el presente se entrelazan? ¡La historia te necesita!"
        },
        step2: {
            title: "Pistas en el Museo del Prado",
            description: "Las pistas te llevan al Museo del Prado, donde 'Las Meninas' de Velázquez esconde un mensaje cifrado. El cuadro, pintado en 1656, representa la corte del rey Felipe IV y es clave para entender el Siglo de Oro español. El Maestro de la Historia ha dejado pistas que conectan el arte barroco con la historia de la Reconquista, utilizando símbolos alquímicos y referencias a la Escuela de Traductores de Toledo. Tu objetivo: analizar los símbolos artísticos y descubrir cómo se relacionan con los eventos históricos de la época."
        },
        step3: {
            title: "El enigma de la Alhambra",
            description: "La investigación te lleva a la Alhambra de Granada, último bastión del reino nazarí hasta 1492. El palacio, construido entre los siglos XIII y XIV, es un tesoro de la arquitectura islámica y un símbolo de la convivencia entre culturas. El Maestro de la Historia ha escondido un fragmento del manuscrito en la Sala de los Reyes, donde los techos decorados con los siete reyes nazaríes guardan secretos sobre la astronomía árabe. Tu tarea: descifrar los símbolos matemáticos y astronómicos que conectan la cultura árabe con la cristiana, siguiendo las enseñanzas de los sabios de la Escuela de Traductores."
        },
        step4: {
            title: "Viaje a Atenas",
            description: "El rastro histórico te lleva hasta el Partenón de Atenas, construido en el siglo V a.C. El manuscrito robado contiene referencias a cómo los sabios medievales españoles estudiaron la democracia ateniense y la adaptaron a sus necesidades. El Maestro de la Historia busca manipular estos conocimientos para reescribir la historia de la democracia en España. Tu misión: analizar las conexiones entre la democracia ateniense y los sistemas políticos medievales españoles, siguiendo las huellas de los traductores de Toledo."
        },
        step5: {
            title: "Desenlace en la Universidad de Salamanca",
            description: "La investigación culmina en la Universidad de Salamanca, fundada en 1218, donde el Maestro de la Historia planea subastar el manuscrito. La universidad, una de las más antiguas de Europa, fue crucial en la transmisión del conocimiento durante la Edad Media. Tu objetivo final: utilizar todos los conocimientos históricos recopilados para exponer la manipulación histórica y recuperar el manuscrito original, preservando así el legado de la Escuela de Traductores de Toledo."
        }
    },
    case: {
        startingLocation: {
            name: "Biblioteca Nacional",
            city: "Madrid",
            country: "España",
            year: "1974",
            description: "La Biblioteca Nacional de Madrid, fundada en 1712 por Felipe V, es un templo del saber donde el tiempo parece detenerse entre manuscritos y secretos. Su impresionante fachada neoclásica, construida en 1892, alberga más de 30 millones de documentos. Hoy, sin embargo, la rutina se ve alterada por un robo que puede cambiar la historia. ¿Te atreves a cruzar sus puertas y sumergirte en una investigación que te llevará a través de los siglos?",
            witnesses: [
                {
                    name: "Doña Pilar",
                    role: "Directora de la biblioteca",
                    area: "Recepción",
                    testimony: "Esta mañana, al abrir la sala de manuscritos, noté que uno de los documentos más valiosos había desaparecido. Se trata de un códice del siglo XIII que contiene las traducciones de la Escuela de Traductores de Toledo. Nadie ha visto nada, pero el ladrón sabía exactamente lo que buscaba.",
                    clue: "Encontré una pluma antigua junto a la vitrina vacía. Tiene grabados que parecen medievales y símbolos alquímicos que se usaban en la Escuela de Traductores."
                },
                {
                    name: "Javier",
                    role: "Estudiante de historia",
                    area: "Sala de lectura",
                    testimony: "Vi a un hombre con gabardina revisando libros antiguos. Parecía muy interesado en los mapas y crónicas de la Reconquista, especialmente en los documentos relacionados con la Escuela de Traductores de Toledo. Estaba tomando notas sobre las traducciones del árabe al latín.",
                    clue: "En su mesa quedó un papel con símbolos extraños y una lista de ciudades históricas. Los símbolos parecen ser una mezcla de escritura árabe y latina, similar a la que usaban los traductores medievales."
                },
                {
                    name: "Don Ernesto",
                    role: "Vigilante",
                    area: "Pasillo principal",
                    testimony: "Anoche escuché pasos y vi una sombra moverse entre las estanterías. Cuando fui a mirar, ya no había nadie, pero la puerta trasera estaba entreabierta. Lo más extraño es que encontré restos de tinta medieval, del tipo que se usaba en los scriptoriums.",
                    clue: "En el suelo encontré una huella de barro y un trozo de pergamino antiguo. El pergamino tiene marcas de escritura en árabe y latín, típicas de los documentos de la Escuela de Traductores."
                }
            ]
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
                        description: "Sala especial con ambiente controlado para preservar documentos antiguos. Las vitrinas contienen manuscritos medievales, incluyendo traducciones de la Escuela de Traductores de Toledo. Hay una visita guiada para escolares sobre la importancia de la transmisión del conocimiento en la Edad Media.",
                        witnesses: [
                            {
                                name: "Bibliotecario",
                                role: "Jefe de sala",
                                area: "Mostrador",
                                testimony: "El profesor Martínez viene a menudo a consultar manuscritos medievales. Últimamente ha estado muy interesado en documentos sobre la Reconquista y la Escuela de Traductores. Estaba especialmente fascinado con las traducciones del árabe al latín.",
                                clue: "Encontré una nota con coordenadas geográficas en un libro sobre la Reconquista. Las coordenadas parecen señalar lugares importantes de la Escuela de Traductores."
                            },
                            {
                                name: "Estudiante",
                                role: "Investigador",
                                area: "Sala de lectura",
                                testimony: "El profesor Martínez me ayudó a encontrar información sobre la Reconquista. Parecía muy emocionado con algo que había descubierto sobre las traducciones medievales. Mencionó algo sobre símbolos alquímicos en los manuscritos.",
                                clue: "Vi un mapa antiguo con marcas en varios lugares de España. Las marcas coinciden con las rutas de los traductores medievales."
                            },
                            {
                                name: "Guardia de seguridad",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "El profesor Martínez salió ayer tarde con una carpeta grande. Parecía nervioso y llevaba guantes blancos, como los que usamos para manejar documentos antiguos.",
                                clue: "Encontré un plano del museo con marcas en varias salas. Las marcas forman símbolos alquímicos medievales."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la Biblioteca",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Cafetería para investigadores y estudiantes, ubicada en el antiguo claustro de la biblioteca. Las paredes conservan frescos del siglo XVIII que representan escenas de la vida académica. Hoy hay un descuento especial en el menú del día.",
                        witnesses: [
                            {
                                name: "Camarero",
                                role: "Personal",
                                area: "Barra",
                                testimony: "Aquí solo vienen estudiantes y profesores a tomar café. Nada de misterios, aunque noté a alguien estudiando un libro antiguo sobre alquimia medieval.",
                                clue: "Todo normal en la cafetería, pero encontré una nota con símbolos alquímicos en una mesa."
                            },
                            {
                                name: "Estudiante",
                                role: "Cliente",
                                area: "Mesa",
                                testimony: "Solo vengo a estudiar. No he visto nada raro, aunque alguien dejó un libro sobre la Escuela de Traductores de Toledo.",
                                clue: "Aquí solo se habla de exámenes, pero el libro tiene marcas en páginas sobre símbolos medievales."
                            },
                            {
                                name: "Profesor",
                                role: "Cliente",
                                area: "Esquina",
                                testimony: "Lugar tranquilo para preparar clases. Nada más, aunque noté a alguien muy interesado en los frescos del techo.",
                                clue: "Solo vengo a trabajar, pero los frescos representan escenas de la vida académica medieval."
                            }
                        ]
                    },
                    {
                        name: "Jardines de Recoletos",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Jardines históricos junto a la biblioteca, diseñados en el siglo XIX. Los árboles centenarios y las fuentes neoclásicas crean un ambiente de estudio y reflexión. Esta tarde hay un concierto de música clásica.",
                        witnesses: [
                            {
                                name: "Jardinero",
                                role: "Personal",
                                area: "Rosaleda",
                                testimony: "Solo veo paseantes y turistas. Nada fuera de lo normal, aunque alguien dejó un libro sobre jardines medievales.",
                                clue: "Todo tranquilo en los jardines, pero el libro tiene marcas en páginas sobre jardines árabes."
                            },
                            {
                                name: "Paseante",
                                role: "Vecino",
                                area: "Paseo central",
                                testimony: "Lugar agradable para pasear. Nada más que contar, aunque vi a alguien estudiando un mapa antiguo.",
                                clue: "Solo vengo a disfrutar del día, pero el mapa parece ser de la época medieval."
                            },
                            {
                                name: "Turista",
                                role: "Visitante",
                                area: "Fuente",
                                testimony: "Hermosos jardines. Nada más que decir, aunque alguien dejó una nota con símbolos extraños.",
                                clue: "Solo vengo a hacer fotos, pero la nota tiene símbolos alquímicos medievales."
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
                        description: "El museo más importante de España, fundado en 1819. Sus salas albergan obras maestras del Siglo de Oro español. Hoy hay una visita guiada especial sobre Velázquez y su influencia en el arte barroco.",
                        witnesses: [
                            {
                                name: "Guía del museo",
                                role: "Personal",
                                area: "Sala Velázquez",
                                testimony: "El profesor Martínez ha estado estudiando Las Meninas. Dice que ha encontrado algo importante sobre la Reconquista y la Escuela de Traductores. Estaba especialmente interesado en los símbolos ocultos en el cuadro.",
                                clue: "Encontré una nota con símbolos medievales en la sala de Velázquez. Los símbolos parecen ser una mezcla de escritura árabe y latina."
                            },
                            {
                                name: "Restaurador",
                                role: "Personal",
                                area: "Taller",
                                testimony: "El profesor Martínez me mostró unos documentos antiguos. Parecía muy emocionado con un descubrimiento sobre las técnicas de pintura medieval. Mencionó algo sobre pigmentos y símbolos alquímicos.",
                                clue: "Vi un mapa con marcas en varios lugares de España. Las marcas forman símbolos alquímicos medievales."
                            },
                            {
                                name: "Guardia de seguridad",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "El profesor Martínez viene a menudo a ver Las Meninas. Últimamente ha estado tomando muchas notas sobre los símbolos ocultos en el cuadro. Parece obsesionado con encontrar mensajes secretos.",
                                clue: "Encontré un plano del museo con marcas en varias salas. Las marcas coinciden con las rutas de los traductores medievales."
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
                        description: "Una de las salas más emblemáticas de la Alhambra, decorada con pinturas medievales que representan a los siete reyes nazaríes. Los techos están decorados con símbolos astronómicos y matemáticos árabes, que los sabios medievales estudiaron en la Escuela de Traductores.",
                        witnesses: [
                            {
                                name: "Ahmed",
                                role: "Guía turístico",
                                area: "Entrada",
                                testimony: "Vi a una persona tomando notas frente a los frescos de los reyes nazaríes. Estaba especialmente interesado en los símbolos astronómicos del techo, que son similares a los que se encuentran en los manuscritos de la Escuela de Traductores.",
                                clue: "Buscaba símbolos ocultos en las pinturas, especialmente en las representaciones de constelaciones árabes."
                            },
                            {
                                name: "Lucía",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un papel con palabras en griego antiguo. El papel menciona la conexión entre la astronomía árabe y la griega, un tema que los traductores medievales estudiaron en profundidad.",
                                clue: "El papel menciona 'Atenas' y 'democracia', y tiene símbolos astronómicos árabes."
                            },
                            {
                                name: "Manuel",
                                role: "Vigilante",
                                area: "Pasillo lateral",
                                testimony: "Vi a una figura encapuchada salir apresurada hacia la salida este. Llevaba un libro antiguo bajo el brazo, con símbolos que parecen ser de la Escuela de Traductores.",
                                clue: "Llevaba un libro antiguo bajo el brazo, con marcas en páginas sobre astronomía árabe."
                            }
                        ]
                    },
                    {
                        name: "Patio de los Leones",
                        target: false,
                        city: "Granada",
                        country: "España",
                        year: "2023",
                        description: "El patio más famoso de la Alhambra, con su fuente central y columnas. Los leones de la fuente representan los doce signos del zodíaco árabe, un tema que los traductores medievales estudiaron en profundidad.",
                        witnesses: [
                            {
                                name: "Rosa",
                                role: "Guía",
                                area: "Fuente",
                                testimony: "Solo he visto turistas haciéndose fotos. Nadie sospechoso, aunque alguien dejó un libro sobre astronomía árabe.",
                                clue: "Aquí no ha pasado nada raro, pero el libro tiene marcas en páginas sobre constelaciones árabes."
                            },
                            {
                                name: "Javier",
                                role: "Turista",
                                area: "Columna norte",
                                testimony: "He estado admirando la arquitectura. No he visto nada extraño, aunque noté a alguien estudiando los símbolos de las columnas.",
                                clue: "Solo turistas y guías, pero los símbolos de las columnas son similares a los de los manuscritos medievales."
                            },
                            {
                                name: "Antonio",
                                role: "Vigilante",
                                area: "Puerta sur",
                                testimony: "Todo normal por aquí. Solo turistas admirando la arquitectura, aunque alguien dejó una nota con símbolos astronómicos.",
                                clue: "Nada fuera de lo común, pero la nota tiene símbolos que parecen ser de la Escuela de Traductores."
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