const hackerCreativo = {
    culpable: "El Hacker Creativo",
    adventure: {
        step1: {
            title: "Ataque al servidor escolar",
            description: "¡Alarma digital en el Colegio San Isidro! Un misterioso hacker ha dejado un mensaje en código binario y ha puesto en jaque a todo el sistema informático. ¿Podrás descifrar los códigos, rastrear al genio informático y salvar la red antes de que el caos se apodere de la escuela? ¡Prepárate para una aventura llena de lógica, ingenio y tecnología!"
        },
        step2: {
            title: "Pistas en la biblioteca digital",
            description: "Se han detectado accesos no autorizados a la base de datos de libros electrónicos. El culpable busca información sobre criptografía."
        },
        step3: {
            title: "El misterio del laboratorio de robótica",
            description: "Un robot ha sido reprogramado para repartir mensajes en clave. Las cámaras muestran a una figura con sudadera y portátil."
        },
        step4: {
            title: "Viaje al Silicon Valley",
            description: "El rastro lleva hasta una feria tecnológica en California. El Hacker Creativo planea mostrar su invento al mundo."
        },
        step5: {
            title: "Desenlace en la Agencia de Ciberseguridad",
            description: "El Hacker Creativo planea liberar un virus educativo. Hay que detenerlo antes de que cause un caos informático."
        }
    },
    case: {
        startingLocation: {
            name: "Colegio San Isidro",
            city: "Madrid",
            country: "España",
            year: "2023",
            description: "El Colegio San Isidro, pionero en tecnología educativa, se convierte hoy en el escenario de un misterio digital. Los pasillos zumban con rumores: alguien ha hackeado el sistema y ha dejado un reto para los más ingeniosos. ¿Serás tú quien descifre el enigma y devuelva la calma a la escuela?",
            witnesses: [
                {
                    name: "Dra. López",
                    role: "Responsable TIC",
                    area: "Sala de servidores",
                    testimony: "Esta mañana, al encender los ordenadores, apareció un mensaje en código binario. El sistema está bloqueado y nadie puede acceder a los archivos.",
                    clue: "Encontré un USB con una pegatina de un robot y un papel con símbolos extraños."
                },
                {
                    name: "Sergio",
                    role: "Estudiante curioso",
                    area: "Pasillo principal",
                    testimony: "Vi a alguien con sudadera y portátil revisando los armarios de red. Se movía rápido y no era de mi clase.",
                    clue: "En el suelo quedó una tarjeta de acceso con el nombre 'Neo'."
                },
                {
                    name: "Elena",
                    role: "Profesora de matemáticas",
                    area: "Aula 3B",
                    testimony: "Ayer, durante la última clase, noté que alguien había cambiado la contraseña de la red. Nadie reconoció el mensaje que apareció en la pizarra digital.",
                    clue: "En la papelera encontré una hoja con ecuaciones y un dibujo de un candado."
                }
            ]
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Sala de servidores",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Sala donde se almacenan los datos y se gestiona la red escolar.",
                        witnesses: [
                            {
                                name: "Dra. López",
                                role: "Responsable TIC",
                                area: "Oficina",
                                testimony: "Vi a alguien con sudadera y portátil revisando los cables del servidor.",
                                clue: "Faltan discos duros y hay un USB sospechoso."
                            },
                            {
                                name: "Luis",
                                role: "Técnico informático",
                                area: "Sala de control",
                                testimony: "Escuché ruidos extraños y vi una sudadera desaparecer por la puerta trasera.",
                                clue: "Alguien dejó un papel con código binario."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante en prácticas",
                                area: "Pasillo",
                                testimony: "Vi a una persona con portátil revisando los armarios de red.",
                                clue: "Faltan cables y hay un router reiniciado."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del colegio",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para alumnos y profesores.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido los habituales. Nadie con portátil ni prisas.",
                                clue: "No he visto a nadie con cables ni discos duros."
                            },
                            {
                                name: "Elena",
                                role: "Profesora",
                                area: "Mesa del fondo",
                                testimony: "Estaba revisando exámenes. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de servidores."
                            },
                            {
                                name: "Sergio",
                                role: "Estudiante",
                                area: "Terraza",
                                testimony: "Solo he visto a gente tomando café y leyendo revistas.",
                                clue: "Aquí no ha pasado nada fuera de lo común."
                            }
                        ]
                    },
                    {
                        name: "Patio del colegio",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de recreo para los alumnos, con bancos y árboles.",
                        witnesses: [
                            {
                                name: "Don Manuel",
                                role: "Conserje",
                                area: "Puerta principal",
                                testimony: "He visto a niños jugando, pero ningún adulto sospechoso.",
                                clue: "Quizá deberías buscar dentro del colegio."
                            },
                            {
                                name: "Ana",
                                role: "Paseante",
                                area: "Banco central",
                                testimony: "Solo he visto a gente paseando y leyendo al sol.",
                                clue: "No he visto a nadie con portátiles ni cables."
                            },
                            {
                                name: "Pedro",
                                role: "Ciclista",
                                area: "Carril bici",
                                testimony: "He pasado rápido, pero no he notado nada raro.",
                                clue: "Todo tranquilo en el patio."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Biblioteca digital",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Sala donde se almacenan los libros electrónicos y recursos digitales.",
                        witnesses: [
                            {
                                name: "Dra. Ramos",
                                role: "Bibliotecaria",
                                area: "Mostrador",
                                testimony: "Vi a alguien descargando archivos de la base de datos.",
                                clue: "Faltan libros sobre criptografía y lógica."
                            },
                            {
                                name: "Jorge",
                                role: "Estudiante",
                                area: "Banco de trabajo",
                                testimony: "Alguien dejó un USB con archivos cifrados.",
                                clue: "El USB tenía una etiqueta con símbolos matemáticos."
                            },
                            {
                                name: "Lucía",
                                role: "Visitante",
                                area: "Pasillo central",
                                testimony: "Vi a una persona con sudadera y portátil salir apresurada.",
                                clue: "Llevaba una carpeta con códigos y claves."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la biblioteca",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para lectores y estudiantes.",
                        witnesses: [
                            {
                                name: "Raquel",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido estudiantes y profesores. Nadie sospechoso.",
                                clue: "No he visto a nadie con portátiles ni carpetas."
                            },
                            {
                                name: "Isabel",
                                role: "Estudiante",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la biblioteca digital."
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
                        name: "Tienda de la biblioteca",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Tienda de la biblioteca con libros y material escolar.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de informática hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por criptografía."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de libros",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño.",
                                clue: "Solo libros y material escolar."
                            },
                            {
                                name: "Patricia",
                                role: "Estudiante",
                                area: "Mostrador",
                                testimony: "He comprado una guía de programación. No he visto a nadie sospechoso.",
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
                        name: "Laboratorio de robótica",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se construyen y programan robots educativos.",
                        witnesses: [
                            {
                                name: "Dr. Torres",
                                role: "Profesor de tecnología",
                                area: "Oficina",
                                testimony: "Vi a una persona con sudadera reprogramando un robot.",
                                clue: "El robot repartía mensajes en clave."
                            },
                            {
                                name: "Marina",
                                role: "Estudiante",
                                area: "Banco de trabajo",
                                testimony: "Alguien dejó un papel con algoritmos y códigos.",
                                clue: "El papel menciona lógica y cifrado."
                            },
                            {
                                name: "Pablo",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con portátil salir apresurada con un robot en la mochila.",
                                clue: "La mochila tenía pegatinas de ferias tecnológicas."
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
                                clue: "No he visto a nadie con robots ni portátiles."
                            },
                            {
                                name: "Isabel",
                                role: "Estudiante",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en el laboratorio de robótica."
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
                        name: "Tienda de robótica",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se venden kits y piezas de robótica educativa.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos kits de robótica hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por robots programables."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de kits",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño.",
                                clue: "Solo kits y piezas."
                            },
                            {
                                name: "Patricia",
                                role: "Estudiante",
                                area: "Mostrador",
                                testimony: "He comprado un manual de programación. No he visto a nadie sospechoso.",
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
                        name: "Feria tecnológica, Silicon Valley",
                        target: true,
                        city: "San José",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "El mayor evento de tecnología e innovación del mundo.",
                        witnesses: [
                            {
                                name: "John",
                                role: "Organizador",
                                area: "Sala de conferencias",
                                testimony: "Vi a una persona con sudadera y portátil presentando un invento revolucionario.",
                                clue: "Buscaba inversores para su software educativo."
                            },
                            {
                                name: "Emily",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un catálogo con anotaciones sobre ciberseguridad.",
                                clue: "El catálogo menciona una agencia internacional."
                            },
                            {
                                name: "Michael",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con portátil salir con una mochila llena de gadgets.",
                                clue: "La mochila tenía pegatinas de agencias de ciberseguridad."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la feria",
                        target: false,
                        city: "San José",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Zona de descanso para visitantes y expositores.",
                        witnesses: [
                            {
                                name: "Anna",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido visitantes y expositores. Nadie sospechoso.",
                                clue: "No he visto a nadie con gadgets ni portátiles."
                            },
                            {
                                name: "David",
                                role: "Visitante",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de conferencias."
                            },
                            {
                                name: "Sarah",
                                role: "Expositora",
                                area: "Terraza",
                                testimony: "Solo he visto a mis compañeros y a otros expositores.",
                                clue: "Nada fuera de lo común en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Tienda de la feria",
                        target: false,
                        city: "San José",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Donde se venden recuerdos y gadgets tecnológicos.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos gadgets hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por software educativo."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de gadgets",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño.",
                                clue: "Solo gadgets y recuerdos."
                            },
                            {
                                name: "Patricia",
                                role: "Visitante",
                                area: "Mostrador",
                                testimony: "He comprado una guía de Silicon Valley. No he visto a nadie sospechoso.",
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
                        name: "Agencia de Ciberseguridad",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se protege la red nacional y se investigan ciberataques.",
                        witnesses: [
                            {
                                name: "Dr. García",
                                role: "Director de la agencia",
                                area: "Sala de crisis",
                                testimony: "Vi a una figura con sudadera preparando un ataque informático educativo.",
                                clue: "El Hacker Creativo iba a liberar un virus educativo."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante",
                                area: "Fila central",
                                testimony: "Escuché hablar de un virus que enseña lógica y programación.",
                                clue: "El Hacker planea huir tras el ataque."
                            },
                            {
                                name: "Luis",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Vi a la policía entrar justo a tiempo para detener al culpable.",
                                clue: "El virus fue neutralizado y el sistema restaurado."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la agencia",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Lugar de encuentro de informáticos y agentes.",
                        witnesses: [
                            {
                                name: "Clara",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido agentes a repasar informes. Nadie sospechoso.",
                                clue: "No he visto a nadie con portátiles sospechosos."
                            },
                            {
                                name: "Pedro",
                                role: "Analista",
                                area: "Mesa del fondo",
                                testimony: "He revisado informes toda la tarde. Nada fuera de lo común.",
                                clue: "Solo agentes y analistas."
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
                        name: "Parque tecnológico",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de empresas tecnológicas y startups.",
                        witnesses: [
                            {
                                name: "Javier",
                                role: "Guía",
                                area: "Centro del parque",
                                testimony: "He dado visitas guiadas todo el día. Nadie sospechoso.",
                                clue: "Solo empleados y estudiantes."
                            },
                            {
                                name: "María",
                                role: "Vendedora de snacks",
                                area: "Puesto de snacks",
                                testimony: "He vendido snacks a empleados y familias. Nada fuera de lo común.",
                                clue: "Todo normal en el parque."
                            },
                            {
                                name: "Andrés",
                                role: "Estudiante",
                                area: "Banco central",
                                testimony: "He estado charlando con amigos. No he visto nada raro.",
                                clue: "Solo estudiantes y empleados."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 