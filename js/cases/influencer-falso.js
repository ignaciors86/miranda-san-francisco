const influencerFalso = {
    culpable: "La Influencer Falsa",
    adventure: {
        step1: {
            title: "El bulo viral en redes sociales",
            description: "¡Las redes sociales arden! Un rumor falso sobre un famoso ha causado un auténtico terremoto digital. La policía sospecha de una influencer con millones de seguidores y un talento especial para el engaño. El bulo se ha propagado usando técnicas avanzadas de marketing digital y bots automatizados. ¿Serás capaz de desenmascarar la verdad y restaurar la confianza en la información? ¡El mundo virtual necesita tu astucia!"
        },
        step2: {
            title: "Pistas en la redacción del periódico",
            description: "Se han recibido correos anónimos con noticias falsas. Los periodistas buscan el origen del bulo. Las pistas sugieren que la influencer está usando técnicas de deepfake y manipulación de imágenes para crear contenido viral. Los correos contienen enlaces a perfiles falsos y cuentas bot que difunden la desinformación."
        },
        step3: {
            title: "El misterio en la televisión",
            description: "Un programa de televisión ha difundido información manipulada. El culpable deja mensajes en clave en los subtítulos. Las imágenes del programa han sido alteradas usando inteligencia artificial, y los hashtags en pantalla llevan a perfiles falsos que amplifican el bulo. El objetivo parece ser crear una campaña de desinformación coordinada."
        },
        step4: {
            title: "Viaje a Silicon Valley",
            description: "El rastro lleva hasta una empresa de redes sociales. La Influencer Falsa planea lanzar una campaña viral internacional usando algoritmos de tendencias y bots automatizados. Su objetivo es demostrar cómo se puede manipular la opinión pública a través de las redes sociales, creando una red de desinformación que se propaga como un virus digital."
        },
        step5: {
            title: "Desenlace en la Feria del Libro",
            description: "La Influencer Falsa planea presentar un libro lleno de bulos. El libro contiene técnicas avanzadas de manipulación digital y ejemplos de cómo crear campañas virales falsas. Hay que desenmascararla antes de que engañe a miles de lectores, pero también hay que entender su mensaje sobre la importancia de la alfabetización digital y el pensamiento crítico en la era de las redes sociales."
        }
    },
    case: {
        startingLocation: {
            name: "Redacción de El Diario",
            city: "Madrid",
            country: "España",
            year: "2023",
            description: "La redacción de El Diario bulle de actividad, noticias y primicias. Pero hoy, el ambiente es diferente: un bulo viral ha puesto en jaque a periodistas y lectores. El rumor se ha propagado usando técnicas avanzadas de marketing digital, bots automatizados y manipulación de imágenes. Solo un investigador audaz podrá desenredar la maraña de mentiras y devolver la verdad a la portada. ¿Te atreves a aceptar el reto?",
            witnesses: [
                {
                    name: "Laura",
                    role: "Jefa de redacción",
                    area: "Oficina central",
                    testimony: "Esta mañana, las redes sociales explotaron con un rumor falso. Nadie sabe quién lo inició, pero la noticia se propagó como la pólvora. Lo más extraño es que se usaron técnicas de deepfake y bots automatizados para difundir el bulo.",
                    clue: "En la impresora encontré un correo anónimo con enlaces sospechosos y hashtags virales. El correo contiene código para bots automatizados y técnicas de manipulación de tendencias."
                },
                {
                    name: "Carlos",
                    role: "Periodista",
                    area: "Sala de prensa",
                    testimony: "Recibí un mensaje directo de una influencer famosa. Decía que tenía información exclusiva, pero algo no cuadraba. La imagen del perfil parece haber sido generada por inteligencia artificial, y los mensajes usan patrones de bot.",
                    clue: "El mensaje incluía una imagen manipulada con deepfake y un número de teléfono extranjero que lleva a una red de cuentas falsas."
                },
                {
                    name: "Raúl",
                    role: "Técnico de redes",
                    area: "Cabina de servidores",
                    testimony: "Detecté un pico de actividad inusual en las cuentas del periódico. Alguien programó bots para difundir el bulo usando técnicas avanzadas de marketing digital y manipulación de algoritmos.",
                    clue: "En el registro de acceso aparece el nombre de usuario 'FakeStar' y código para bots automatizados que manipulan tendencias."
                }
            ]
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Oficina de redes sociales",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Oficina donde se gestionan cuentas y tendencias en redes sociales. Las pantallas muestran gráficos de actividad viral y patrones de difusión de información. Los técnicos analizan cómo se propagan los bulos usando técnicas de marketing digital y bots automatizados.",
                        witnesses: [
                            {
                                name: "Laura",
                                role: "Community manager",
                                area: "Puesto de control",
                                testimony: "Vi a alguien programando mensajes automáticos con hashtags sospechosos. Estaba usando técnicas avanzadas de marketing digital y bots automatizados para manipular tendencias.",
                                clue: "Faltan cuentas y hay un móvil con apps de bots y herramientas de manipulación de algoritmos."
                            },
                            {
                                name: "Carlos",
                                role: "Técnico de redes",
                                area: "Sala de servidores",
                                testimony: "Escuché ruidos extraños y vi una influencer salir con prisas. Los servidores mostraban patrones de actividad bot y manipulación de tendencias.",
                                clue: "Alguien dejó un papel con nombres de cuentas falsas y código para bots automatizados."
                            },
                            {
                                name: "Marta",
                                role: "Periodista",
                                area: "Redacción",
                                testimony: "Vi a una persona con móvil revisando los trending topics. Estaba usando técnicas de marketing digital para manipular las tendencias.",
                                clue: "Faltan capturas de pantalla y hay mensajes borrados que contenían código para bots automatizados."
                            }
                        ]
                    },
                    {
                        name: "Cafetería del periódico",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para periodistas y técnicos. Las pantallas muestran noticias y tendencias en redes sociales, incluyendo patrones de difusión de información y actividad de bots.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido los habituales. Nadie con móvil ni prisas, aunque las pantallas muestran patrones extraños de actividad en redes sociales.",
                                clue: "No he visto a nadie con cuentas falsas, pero las pantallas muestran actividad bot y manipulación de tendencias."
                            },
                            {
                                name: "Elena",
                                role: "Redactora",
                                area: "Mesa del fondo",
                                testimony: "Estaba revisando noticias. No he visto nada raro, aunque las pantallas muestran patrones de difusión viral y actividad de bots.",
                                clue: "Quizá deberías buscar en la oficina de redes, donde se están analizando estos patrones de actividad."
                            },
                            {
                                name: "Sergio",
                                role: "Técnico",
                                area: "Terraza",
                                testimony: "Solo he visto a gente tomando café y leyendo periódicos. Las pantallas muestran gráficos de actividad en redes sociales y patrones de difusión de información.",
                                clue: "Aquí no ha pasado nada fuera de lo común, pero las pantallas muestran patrones extraños de actividad bot."
                            }
                        ]
                    },
                    {
                        name: "Parque cercano",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona verde junto a la redacción, con bancos y árboles. Las pantallas digitales exteriores muestran noticias y tendencias en redes sociales, incluyendo patrones de difusión de información y actividad de bots.",
                        witnesses: [
                            {
                                name: "Don Manuel",
                                role: "Jardinero",
                                area: "Rosaleda",
                                testimony: "He visto a niños jugando, pero ningún adulto sospechoso. Las pantallas digitales exteriores muestran patrones extraños de actividad en redes sociales.",
                                clue: "Quizá deberías buscar dentro de la redacción, donde se están analizando estos patrones de actividad."
                            },
                            {
                                name: "Ana",
                                role: "Paseante",
                                area: "Banco central",
                                testimony: "Solo he visto a gente paseando perros y leyendo al sol. Las pantallas digitales exteriores muestran gráficos de actividad en redes sociales y patrones de difusión de información.",
                                clue: "No he visto a nadie con móviles ni cuentas falsas, pero las pantallas muestran patrones extraños de actividad bot."
                            },
                            {
                                name: "Pedro",
                                role: "Ciclista",
                                area: "Carril bici",
                                testimony: "He pasado rápido, pero no he notado nada raro. Las pantallas digitales exteriores muestran patrones de difusión viral y actividad de bots.",
                                clue: "Todo tranquilo en el parque, pero las pantallas muestran patrones extraños de manipulación de tendencias."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Redacción del periódico",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Redacción donde se escriben y verifican las noticias. Las pantallas muestran noticias y tendencias en redes sociales, incluyendo patrones de difusión de información y actividad de bots. Los periodistas analizan cómo se propagan los bulos usando técnicas de marketing digital y manipulación de imágenes.",
                        witnesses: [
                            {
                                name: "Dra. Ramos",
                                role: "Editora",
                                area: "Mesa de edición",
                                testimony: "Vi a alguien enviando correos anónimos con noticias falsas. Estaba usando técnicas de deepfake y manipulación de imágenes para crear contenido viral.",
                                clue: "Faltan borradores y hay un USB sospechoso con herramientas de manipulación de imágenes y código para bots automatizados."
                            },
                            {
                                name: "Jorge",
                                role: "Periodista",
                                area: "Banco de trabajo",
                                testimony: "Alguien dejó un sobre con recortes de prensa manipulados. Los recortes contienen imágenes alteradas con deepfake y código para bots automatizados.",
                                clue: "El sobre tenía una etiqueta con símbolos de fake news y código para manipulación de tendencias."
                            },
                            {
                                name: "Lucía",
                                role: "Visitante",
                                area: "Pasillo central",
                                testimony: "Vi a una persona con móvil y portátil salir apresurada. Estaba usando técnicas de marketing digital para manipular las tendencias.",
                                clue: "Llevaba una carpeta con bulos y memes, y código para bots automatizados."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la redacción",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para periodistas y técnicos. Las pantallas muestran noticias y tendencias en redes sociales, incluyendo patrones de difusión de información y actividad de bots.",
                        witnesses: [
                            {
                                name: "Raquel",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido periodistas y técnicos. Nadie sospechoso, aunque las pantallas muestran patrones extraños de actividad en redes sociales.",
                                clue: "No he visto a nadie con bulos ni memes, pero las pantallas muestran actividad bot y manipulación de tendencias."
                            },
                            {
                                name: "Isabel",
                                role: "Periodista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro, aunque las pantallas muestran patrones de difusión viral y actividad de bots.",
                                clue: "Quizá deberías buscar en la redacción, donde se están analizando estos patrones de actividad."
                            },
                            {
                                name: "Tomás",
                                role: "Técnico",
                                area: "Terraza",
                                testimony: "Solo he visto a mis compañeros y a otros técnicos. Las pantallas muestran gráficos de actividad en redes sociales y patrones de difusión de información.",
                                clue: "Nada fuera de lo común en la cafetería, pero las pantallas muestran patrones extraños de actividad bot."
                            }
                        ]
                    },
                    {
                        name: "Tienda de prensa",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Tienda de prensa con periódicos y revistas. Las pantallas digitales muestran noticias y tendencias en redes sociales, incluyendo patrones de difusión de información y actividad de bots.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos periódicos hoy, pero nada raro. Las pantallas digitales muestran patrones extraños de actividad en redes sociales.",
                                clue: "Nadie ha preguntado por bulos ni noticias falsas, pero las pantallas muestran actividad bot y manipulación de tendencias."
                            },
                            {
                                name: "Luis",
                                role: "Cliente",
                                area: "Estantería de revistas",
                                testimony: "Buscaba un regalo para mi hijo. No he visto nada extraño, aunque las pantallas digitales muestran patrones de difusión viral y actividad de bots.",
                                clue: "Solo revistas y periódicos, pero las pantallas muestran patrones extraños de manipulación de tendencias."
                            },
                            {
                                name: "Patricia",
                                role: "Estudiante",
                                area: "Mostrador",
                                testimony: "He comprado una guía de comunicación. No he visto a nadie sospechoso, aunque las pantallas digitales muestran gráficos de actividad en redes sociales y patrones de difusión de información.",
                                clue: "Todo normal en la tienda, pero las pantallas muestran patrones extraños de actividad bot."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Plató de televisión",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se graban los programas más vistos del país.",
                        witnesses: [
                            {
                                name: "Dr. Torres",
                                role: "Director de programas",
                                area: "Oficina",
                                testimony: "Vi a una persona con móvil manipulando los subtítulos en directo.",
                                clue: "Los subtítulos tenían mensajes en clave."
                            },
                            {
                                name: "Marina",
                                role: "Periodista",
                                area: "Banco de trabajo",
                                testimony: "Alguien dejó un papel con memes y bulos.",
                                clue: "El papel menciona campañas virales."
                            },
                            {
                                name: "Pablo",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con móvil salir apresurada con una carpeta de guiones.",
                                clue: "La carpeta tenía pegatinas de redes sociales."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la televisión",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Zona de descanso para periodistas y técnicos.",
                        witnesses: [
                            {
                                name: "Raúl",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Hoy solo han venido periodistas y técnicos. Nadie sospechoso.",
                                clue: "No he visto a nadie con móviles ni carpetas."
                            },
                            {
                                name: "Isabel",
                                role: "Periodista",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en el plató."
                            },
                            {
                                name: "Tomás",
                                role: "Técnico",
                                area: "Terraza",
                                testimony: "Solo he visto a mis compañeros y a otros técnicos.",
                                clue: "Nada fuera de lo común en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Tienda de recuerdos",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de comunicación.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de comunicación hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por campañas virales."
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
                                role: "Estudiante",
                                area: "Mostrador",
                                testimony: "He comprado una guía de fake news. No he visto a nadie sospechoso.",
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
                        name: "Empresa de redes sociales, Silicon Valley",
                        target: true,
                        city: "San Francisco",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Donde se gestionan las mayores plataformas de comunicación del mundo.",
                        witnesses: [
                            {
                                name: "John",
                                role: "Director de producto",
                                area: "Sala de reuniones",
                                testimony: "Vi a una persona con móvil y portátil presentando una campaña viral.",
                                clue: "Buscaba inversores para su libro de bulos."
                            },
                            {
                                name: "Emily",
                                role: "Visitante",
                                area: "Banco central",
                                testimony: "Alguien dejó un catálogo con anotaciones sobre fake news.",
                                clue: "El catálogo menciona una feria internacional."
                            },
                            {
                                name: "Michael",
                                role: "Vigilante",
                                area: "Entrada",
                                testimony: "Vi a una figura con móvil salir con una mochila llena de libros."
                                ,clue: "La mochila tenía pegatinas de ferias del libro."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la empresa",
                        target: false,
                        city: "San Francisco",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Zona de descanso para empleados y visitantes.",
                        witnesses: [
                            {
                                name: "Anna",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido empleados y visitantes. Nadie sospechoso.",
                                clue: "No he visto a nadie con libros ni móviles sospechosos."
                            },
                            {
                                name: "David",
                                role: "Visitante",
                                area: "Mesa central",
                                testimony: "He estado todo el rato con mi grupo. No he visto nada raro.",
                                clue: "Quizá deberías buscar en la sala de reuniones."
                            },
                            {
                                name: "Sarah",
                                role: "Empleada",
                                area: "Terraza",
                                testimony: "Solo he visto a mis compañeros y a otros empleados.",
                                clue: "Nada fuera de lo común en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Tienda de la empresa",
                        target: false,
                        city: "San Francisco",
                        country: "Estados Unidos",
                        year: "2023",
                        description: "Donde se venden recuerdos y libros de comunicación.",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Dependienta",
                                area: "Caja",
                                testimony: "He vendido muchos libros de comunicación hoy, pero nada raro.",
                                clue: "Nadie ha preguntado por fake news."
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
                        name: "Feria del Libro",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "El mayor evento literario del país, con autores y lectores de todo el mundo.",
                        witnesses: [
                            {
                                name: "Don Gregorio",
                                role: "Catedrático de Lengua",
                                area: "Atril",
                                testimony: "Vi a una influencer preparando la presentación de un libro lleno de bulos.",
                                clue: "La Influencer Falsa iba a engañar a miles de lectores."
                            },
                            {
                                name: "Marta",
                                role: "Estudiante",
                                area: "Fila central",
                                testimony: "Escuché hablar de un libro con noticias falsas y memes virales.",
                                clue: "La Influencer planea huir tras la presentación."
                            },
                            {
                                name: "Luis",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Vi a la policía entrar justo a tiempo para detener a la culpable.",
                                clue: "El libro fue requisado y destruido."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la feria",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2023",
                        description: "Lugar de encuentro de escritores y lectores.",
                        witnesses: [
                            {
                                name: "Clara",
                                role: "Camarera",
                                area: "Barra",
                                testimony: "Hoy solo han venido lectores a repasar libros. Nadie sospechoso.",
                                clue: "No he visto a nadie con libros sospechosos."
                            },
                            {
                                name: "Pedro",
                                role: "Escritor",
                                area: "Mesa del fondo",
                                testimony: "He firmado libros toda la tarde. Nada fuera de lo común.",
                                clue: "Solo lectores y escritores."
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
                        description: "El parque más famoso de Madrid, lleno de vida y lectores."
                        ,witnesses: [
                            {
                                name: "Javier",
                                role: "Guía turístico",
                                area: "Centro del parque",
                                testimony: "He dado visitas guiadas todo el día. Nadie sospechoso.",
                                clue: "Solo lectores y estudiantes."
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
                                clue: "Solo estudiantes y lectores."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 