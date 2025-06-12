const cientificoLoco = {
    culpable: "Dr. Martínez",
    adventure: {
        step1: {
            title: "Desaparición en el laboratorio central",
            description: "¡Alerta en el Laboratorio Central de Biología! Un experimento revolucionario ha desaparecido: el 'Proyecto ADN Verde', una investigación que busca crear plantas capaces de limpiar la contaminación ambiental mediante modificación genética. El Dr. Vega, director del laboratorio, sospecha de un antiguo empleado que fue expulsado por intentar acelerar los experimentos sin seguir el método científico. Tu misión: seguir el rastro científico y tecnológico para recuperar el experimento antes de que sea utilizado de forma irresponsable."
        },
        step2: {
            title: "Pistas en el Jardín Botánico",
            description: "Las pistas te llevan al Jardín Botánico, donde se han encontrado plantas modificadas genéticamente. El Científico Loco está experimentando con la transferencia horizontal de genes, un proceso natural que permite a las bacterias compartir material genético. Tu objetivo: analizar las modificaciones genéticas y entender cómo afectan al ecosistema local."
        },
        step3: {
            title: "El misterio del Acuario",
            description: "La investigación te lleva al Acuario, donde un pez modificado genéticamente ha sido robado. El pez, resultado de experimentos con genes de bioluminiscencia, podría alterar el equilibrio ecológico si se libera en la naturaleza. Tu tarea: estudiar los efectos de la modificación genética en especies acuáticas y prevenir un desastre ecológico."
        },
        step4: {
            title: "Viaje al CERN",
            description: "El rastro científico te lleva hasta el CERN en Ginebra, donde se investiga la materia oscura. El Científico Loco busca utilizar la tecnología del Gran Colisionador de Hadrones para acelerar mutaciones genéticas. Tu misión: entender los principios de la física de partículas y cómo podrían afectar a los experimentos genéticos."
        },
        step5: {
            title: "Desenlace en la Real Academia de Ciencias",
            description: "La investigación culmina en la Real Academia de Ciencias, donde el Científico Loco planea presentar sus experimentos en una conferencia internacional. Tu objetivo final: utilizar todos los conocimientos científicos recopilados para exponer los riesgos de sus experimentos y prevenir un desastre ecológico."
        }
    },
    case: {
        startingLocation: {
            name: "Laboratorio Central de Biología",
            city: "Madrid",
            country: "España",
            year: "1974",
            description: "Centro de investigación biológica. Hoy hay una jornada de puertas abiertas para estudiantes."
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Laboratorio de Genética",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Laboratorio especializado en investigación genética. Hay una demostración de técnicas de laboratorio.",
                        witnesses: [
                            {
                                name: "Dr. García",
                                role: "Investigador jefe",
                                area: "Laboratorio principal",
                                testimony: "El Dr. Martínez ha estado trabajando en un proyecto secreto. Últimamente ha estado muy nervioso.",
                                clue: "Encontré notas sobre transferencia genética en plantas y peces."
                            },
                            {
                                name: "Ana",
                                role: "Técnica de laboratorio",
                                area: "Sala de cultivos",
                                testimony: "El Dr. Martínez ha estado haciendo experimentos con plantas y peces. Parece muy emocionado con algo.",
                                clue: "Vi muestras de ADN modificado en el microscopio."
                            },
                            {
                                name: "Guardia de seguridad",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "El Dr. Martínez salió ayer tarde con una caja térmica. Parecía nervioso.",
                                clue: "Encontré un plano del jardín botánico con marcas."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Instituto",
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
                                testimony: "Aquí solo vienen investigadores y estudiantes. Nada de misterios.",
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
                        name: "Biblioteca Científica",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Biblioteca especializada en ciencias. Hoy hay una exposición sobre genética.",
                        witnesses: [
                            {
                                name: "Bibliotecario",
                                role: "Personal",
                                area: "Mostrador",
                                testimony: "Solo veo estudiantes e investigadores. Nada fuera de lo normal.",
                                clue: "Todo tranquilo en la biblioteca."
                            },
                            {
                                name: "Investigador",
                                role: "Usuario",
                                area: "Sala de lectura",
                                testimony: "Lugar agradable para estudiar. Nada más que contar.",
                                clue: "Solo vengo a investigar."
                            },
                            {
                                name: "Estudiante",
                                role: "Visitante",
                                area: "Estanterías",
                                testimony: "Hermosa biblioteca. Nada más que decir.",
                                clue: "Solo vengo a hacer trabajos."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Jardín Botánico",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Jardín histórico con gran variedad de plantas. Hoy hay una visita guiada sobre especies autóctonas.",
                        witnesses: [
                            {
                                name: "Botánico",
                                role: "Personal",
                                area: "Invernadero",
                                testimony: "El Dr. Martínez ha estado estudiando plantas modificadas. Dice que ha encontrado algo importante.",
                                clue: "Encontré notas sobre transferencia genética en plantas."
                            },
                            {
                                name: "Jardinero",
                                role: "Personal",
                                area: "Vivero",
                                testimony: "El Dr. Martínez me mostró unas plantas extrañas. Parecía muy emocionado.",
                                clue: "Vi muestras de plantas modificadas en el laboratorio."
                            },
                            {
                                name: "Guardia",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "El Dr. Martínez viene a menudo a estudiar plantas. Últimamente ha estado tomando muchas muestras.",
                                clue: "Encontré un plano del jardín con marcas en varias zonas."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Acuario principal",
                        target: true,
                        city: "Valencia",
                        country: "España",
                        year: "2023",
                        description: "El mayor acuario de Europa, con especies de todo el mundo.",
                        witnesses: [
                            {
                                name: "Dr. Torres",
                                role: "Director del acuario",
                                area: "Oficina",
                                testimony: "Vi a una persona con bata blanca revisando los tanques de peces exóticos.",
                                clue: "Falta un pez amazónico muy raro."
                            },
                            {
                                name: "Marina",
                                role: "Bióloga marina",
                                area: "Laboratorio",
                                testimony: "Alguien dejó una nota con fórmulas químicas junto al tanque de los tiburones.",
                                clue: "La nota menciona ADN y mutaciones."
                            },
                            {
                                name: "Pablo",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con gafas oscuras salir apresurada con una caja de muestras.",
                                clue: "La caja tenía símbolos de laboratorio."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del Acuario",
                        target: false,
                        city: "Valencia",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para visitantes y trabajadores.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido turistas y escolares. Nadie sospechoso.",
                                clue: "No he visto a nadie con cajas ni batas."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en el acuario principal."
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
                        name: "Tienda del Acuario",
                        target: false,
                        city: "Valencia",
                        country: "España",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de biología marina.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de peces hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por especies exóticas."
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
                                testimony: "He comprado una guía de Valencia. No he visto a nadie sospechoso.",
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
                        name: "Laboratorio de física de partículas, CERN",
                        target: true,
                        city: "Ginebra",
                        country: "Suiza",
                        year: "2023",
                        description: "Donde se investiga la materia oscura y las partículas elementales.",
                        witnesses: [
                            {
                                name: "Dr. Müller",
                                role: "Físico",
                                area: "Sala de control",
                                testimony: "Vi a una persona con bata blanca revisando los monitores de partículas.",
                                clue: "Buscaba información sobre la partícula X."
                            },
                            {
                                name: "Sophie",
                                role: "Ingeniera",
                                area: "Pasillo central",
                                testimony: "Alguien preguntó por experimentos de materia oscura.",
                                clue: "Mencionó cambiar el mundo con un nuevo descubrimiento."
                            },
                            {
                                name: "Jean",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con gafas oscuras salir con una caja de muestras.",
                                clue: "La caja tenía símbolos de laboratorio y física."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del CERN",
                        target: false,
                        city: "Ginebra",
                        country: "Suiza",
                        year: "2023",
                        description: "Zona de descanso para científicos de todo el mundo.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido científicos y estudiantes. Nadie sospechoso.",
                                clue: "No he visto a nadie con cajas ni batas."
                            },
                            {
                                name: "Isabel",
                                role: "Turista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en el laboratorio de física."
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
                        name: "Tienda del CERN",
                        target: false,
                        city: "Ginebra",
                        country: "Suiza",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de física.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de física hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por partículas extrañas."
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
                                testimony: "He comprado una guía de Suiza. No he visto a nadie sospechoso.",
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
                        name: "Salón de actos, Real Academia de Ciencias",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se celebran las conferencias científicas más importantes.",
                        witnesses: [
                            {
                                name: "Dr. García",
                                role: "Presidente de la Academia",
                                area: "Atril",
                                testimony: "Vi a una figura con bata blanca preparando una presentación secreta.",
                                clue: "El Científico Loco iba a mostrar su invento al mundo."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante",
                                area: "Fila central",
                                testimony: "Escuché hablar de un invento revolucionario y de un experimento peligroso.",
                                clue: "El Científico Loco planea huir tras la presentación."
                            },
                            {
                                name: "Luis",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Vi a la policía entrar justo a tiempo para detener al culpable.",
                                clue: "El invento fue requisado y destruido."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la Academia",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Lugar de encuentro de científicos y estudiantes.",
                        witnesses: [
                            {
                                name: "Clara",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes a repasar exámenes. Nadie sospechoso.",
                                clue: "No he visto a nadie con inventos extraños."
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
                        description: "El parque más famoso de Madrid, lleno de vida y turistas.",
                        witnesses: [
                            {
                                name: "Javier",
                                role: "Guía turístico",
                                area: "Centro del parque",
                                testimony: "He dado visitas guiadas todo el día. Nadie sospechoso.",
                                clue: "Solo turistas y estudiantes."
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
                                clue: "Solo estudiantes y turistas."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 