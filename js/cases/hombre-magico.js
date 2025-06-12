const hombreMagico = {
    culpable: "Jorge Ponce",
    adventure: {
        step1: {
            title: "El misterio del Hombre Mágico desaparecido",
            description: "En el Teatro Real de Madrid, durante una gala benéfica de magia, el famoso ilusionista ha desaparecido. El evento, que recauda fondos para la restauración del teatro histórico, está en peligro. Jorge Ponce, un coleccionista de artefactos mágicos históricos, fue visto merodeando por los camerinos con un libro antiguo sobre magia española del siglo XIX. El libro contiene secretos de ilusionismo que se creían perdidos, incluyendo técnicas de prestidigitación y mentalismo que forman parte del patrimonio cultural español."
        },
        step2: {
            title: "Pistas en el teatro",
            description: "El Teatro Real, construido en 1850, guarda secretos en cada rincón. Encontramos un sombrero de copa del siglo XIX con compartimentos secretos, una varita mágica con inscripciones en latín que revelan antiguos trucos de magia, y... ¿son esas huellas de botas de montar? ¡Jorge Ponce es conocido por su colección de antigüedades mágicas! Los organizadores están cada vez más nerviosos, ya que el mago debía realizar un truco histórico que no se ha visto desde el siglo XIX, basado en técnicas de ilusionismo que forman parte del patrimonio cultural español."
        },
        step3: {
            title: "El enigma del camerino",
            description: "En el camerino histórico, decorado con espejos venecianos del siglo XIX, hay un mapa extraño. Parece ser un plano del teatro con marcas que coinciden con los puntos donde se realizaban los trucos de magia más famosos de la época. El mapa revela secretos de ilusionismo como la desaparición de objetos, la levitación y la teleportación, técnicas que forman parte del patrimonio cultural español. ¡Y solo quedan 30 minutos antes de que comience la gala! Los organizadores ya están empezando a improvisar..."
        },
        step4: {
            title: "La búsqueda en los archivos",
            description: "Las pistas llevan a los archivos históricos del teatro. Jorge Ponce ha estado investigando sobre los trucos de magia que se realizaban en el siglo XIX, cuando el teatro era el centro de la magia en España. Los documentos revelan técnicas de ilusionismo como la desaparición de objetos, la levitación y la teleportación, que forman parte del patrimonio cultural español. ¡Hay que encontrar al mago antes de que la gala sea un desastre! Y los organizadores están desesperados..."
        },
        step5: {
            title: "¡Rescate a tiempo!",
            description: "¡Solo quedan 5 minutos! Jorge Ponce está a punto de conseguir su objetivo: robar los secretos de la magia histórica española, incluyendo técnicas de prestidigitación y mentalismo que forman parte del patrimonio cultural. ¿Podrás rescatar al mago y salvar la gala benéfica antes de que sea demasiado tarde? El futuro de la magia histórica española está en tus manos."
        }
    },
    case: {
        startingLocation: {
            name: "Teatro Real de Madrid",
            city: "Madrid",
            country: "España",
            year: "2024",
            description: "El majestuoso Teatro Real, construido en 1850, está en caos. Los organizadores de la gala benéfica están desesperados y el mago ha desaparecido. El evento debía mostrar trucos históricos de magia española que no se han visto desde el siglo XIX, incluyendo técnicas de prestidigitación y mentalismo que forman parte del patrimonio cultural. ¡Solo quedan 45 minutos antes de que comience el espectáculo!",
            witnesses: [
                {
                    name: "David Broncano",
                    role: "Organizador de la gala",
                    area: "Escenario principal",
                    testimony: "¡Esto es un desastre! El mago tenía que realizar un truco histórico que no se ha visto desde el siglo XIX, basado en técnicas de ilusionismo que forman parte del patrimonio cultural español. La gala benéfica para restaurar el teatro se está yendo al traste. ¡Necesitamos encontrarlo antes de que comience el espectáculo!",
                    clue: "Vi a Jorge Ponce merodeando por los archivos históricos con un libro antiguo sobre magia española que contiene secretos de prestidigitación y mentalismo."
                },
                {
                    name: "Grison",
                    role: "Director del teatro",
                    area: "Camerino histórico",
                    testimony: "Estaba revisando los documentos históricos con el mago, pero desapareció. Los documentos contienen técnicas de ilusionismo como la desaparición de objetos, la levitación y la teleportación, que forman parte del patrimonio cultural español. Y ahora la gala se está yendo al traste. ¡Necesitamos encontrarlo antes de que sea demasiado tarde!",
                    clue: "Encontré una nota con la letra de Jorge Ponce y manchas de tinta antigua que revelan secretos de magia histórica."
                },
                {
                    name: "Ricardo Castella",
                    role: "Conservador del teatro",
                    area: "Archivos históricos",
                    testimony: "Los organizadores están completamente fuera de control. Ya están empezando a improvisar. El mago debía mostrar trucos históricos que no se han visto desde el siglo XIX, incluyendo técnicas de prestidigitación y mentalismo. ¡Necesitamos al mago para salvar la gala!",
                    clue: "Vi huellas de botas de montar cerca de los archivos. ¡Son las de Jorge Ponce! Y hay documentos sobre magia histórica española esparcidos por el suelo."
                }
            ]
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Camerino histórico",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "El camerino histórico, decorado con espejos venecianos del siglo XIX, está revuelto. Hay pistas por todas partes: un sombrero de copa antiguo con compartimentos secretos, una varita con inscripciones en latín que revelan antiguos trucos de magia, y... ¿son esas las botas de montar de Jorge Ponce? Los espejos venecianos fueron usados en trucos de ilusionismo históricos que forman parte del patrimonio cultural español.",
                        witnesses: [
                            {
                                name: "Jorge Ponce",
                                role: "Coleccionista de antigüedades",
                                area: "Espejo veneciano",
                                testimony: "Yo solo vine a... eh... estudiar la historia de la magia en este teatro. ¿Qué? ¿No puedo ser un apasionado de la historia? Los espejos venecianos son piezas clave en trucos de ilusionismo históricos.",
                                clue: "Sus botas tienen manchas de tinta antigua y una sonrisa sospechosa. Lleva un libro sobre magia histórica española."
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Archivista",
                                area: "Armario histórico",
                                testimony: "Aquí guardábamos los trucos históricos. Algo no cuadra... ¡Falta el libro de magia del siglo XIX que contiene secretos de prestidigitación y mentalismo!",
                                clue: "Hay una nota con números romanos y símbolos alquímicos que revelan técnicas de ilusionismo históricas."
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Restaurador",
                                area: "Silla de época",
                                testimony: "El mago nunca deja sus cosas así de desordenadas. ¡Y mira, hay tinta antigua por todas partes! Los documentos contienen secretos de magia histórica española.",
                                clue: "Las huellas de botas llevan hacia los archivos donde se guardan los documentos sobre magia histórica."
                            }
                        ]
                    },
                    {
                        name: "Sala de ensayo",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "La sala de ensayo, con su piano de cola histórico, está llena de organizadores desesperados. Sin el mago, nadie puede salvar la gala. El piano fue usado en trucos de ilusionismo históricos que forman parte del patrimonio cultural español.",
                        witnesses: [
                            {
                                name: "Grison",
                                role: "Director del teatro",
                                area: "Piano histórico",
                                testimony: "Estaba revisando los documentos históricos, pero... ¡Todo está lleno de tinta antigua! Los documentos contienen secretos de magia histórica española.",
                                clue: "Hay una partitura antigua en el atril que revela técnicas de ilusionismo históricas."
                            },
                            {
                                name: "David Broncano",
                                role: "Organizador",
                                area: "Escenario",
                                testimony: "No puedo presentar con tanto alboroto. ¡La gala se está yendo al traste! El mago debía mostrar trucos históricos que no se han visto desde el siglo XIX.",
                                clue: "Hay una nota con la letra de Jorge Ponce que contiene secretos de magia histórica."
                            },
                            {
                                name: "Ernesto Sevilla",
                                role: "Conservador",
                                area: "Archivos",
                                testimony: "Necesitamos al mago para salvar la gala. ¡Ya estamos improvisando! Los trucos históricos son parte del patrimonio cultural español.",
                                clue: "Hay tinta antigua en los documentos que revela técnicas de ilusionismo históricas."
                            }
                        ]
                    },
                    {
                        name: "Biblioteca histórica",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "La biblioteca histórica, con sus estanterías de madera tallada del siglo XIX, está en caos. Los libros contienen secretos de magia histórica española que forman parte del patrimonio cultural.",
                        witnesses: [
                            {
                                name: "Ricardo Castella",
                                role: "Conservador",
                                area: "Estanterías",
                                testimony: "¡Esto es un desastre! Los organizadores están cada vez más nerviosos. ¡Necesitamos al mago para mostrar los trucos históricos!",
                                clue: "Hay huellas de botas en el polvo de los libros sobre magia histórica española."
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Archivista",
                                area: "Mesa de lectura",
                                testimony: "No puedo controlar la situación. ¡La gala se está yendo al traste! Los documentos contienen secretos de prestidigitación y mentalismo.",
                                clue: "Hay tinta antigua en los documentos que revela técnicas de ilusionismo históricas."
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Restaurador",
                                area: "Archivos",
                                testimony: "Los organizadores están dibujando símbolos alquímicos en los documentos. ¡Necesitamos al mago para mostrar los trucos históricos!",
                                clue: "Hay una nota con la letra de Jorge Ponce que contiene secretos de magia histórica."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Archivos históricos",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "Los archivos históricos están llenos de documentos antiguos y objetos mágicos. Los documentos contienen secretos de magia histórica española que forman parte del patrimonio cultural, incluyendo técnicas de prestidigitación y mentalismo. ¡Solo quedan 20 minutos!",
                        witnesses: [
                            {
                                name: "Jorge Ponce",
                                role: "Coleccionista",
                                area: "Sección de magia",
                                testimony: "Yo solo vine a... eh... estudiar la historia de la magia. ¿Qué? ¿No puedo ser un erudito? Los documentos contienen secretos de ilusionismo históricos.",
                                clue: "Tiene un mapa antiguo con marcas rojas y una sonrisa sospechosa. El mapa revela puntos donde se realizaban trucos históricos."
                            },
                            {
                                name: "David Broncano",
                                role: "Organizador",
                                area: "Cajas de documentos",
                                testimony: "Aquí guardamos todos los documentos históricos. ¡Falta el libro principal de magia que contiene secretos de prestidigitación y mentalismo!",
                                clue: "Hay tinta antigua por todas partes que revela técnicas de ilusionismo históricas."
                            },
                            {
                                name: "Ernesto Sevilla",
                                role: "Conservador",
                                area: "Sección de mapas",
                                testimony: "Los organizadores están cada vez más nerviosos. ¡Necesitamos al mago para mostrar los trucos históricos!",
                                clue: "Hay un mapa antiguo escondido que revela puntos donde se realizaban trucos de magia históricos."
                            }
                        ]
                    },
                    {
                        name: "Sala de control",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "La sala de control, con sus antiguos sistemas de iluminación, está llena de cámaras. ¡Podemos ver todo el teatro! Los sistemas fueron usados en trucos de ilusionismo históricos que forman parte del patrimonio cultural español.",
                        witnesses: [
                            {
                                name: "Grison",
                                role: "Director",
                                area: "Pantallas",
                                testimony: "¡Mira! ¡Jorge Ponce está en los archivos revisando documentos sobre magia histórica!",
                                clue: "Hay una nota con la letra de Jorge Ponce que contiene secretos de ilusionismo históricos."
                            },
                            {
                                name: "Ricardo Castella",
                                role: "Conservador",
                                area: "Controles",
                                testimony: "Los organizadores están cada vez más nerviosos. ¡Necesitamos al mago para mostrar los trucos históricos!",
                                clue: "Hay tinta antigua en los controles que revela técnicas de ilusionismo históricas."
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Archivista",
                                area: "Micrófonos",
                                testimony: "¡Escucha! ¡Los organizadores están improvisando! Los trucos históricos son parte del patrimonio cultural español.",
                                clue: "Hay huellas de botas en el suelo que llevan a documentos sobre magia histórica."
                            }
                        ]
                    },
                    {
                        name: "Vestuario histórico",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "El vestuario histórico está lleno de trajes de época y objetos mágicos. Los trajes contienen secretos de ilusionismo históricos que forman parte del patrimonio cultural español.",
                        witnesses: [
                            {
                                name: "David Broncano",
                                role: "Organizador",
                                area: "Armarios",
                                testimony: "¡Mira! ¡Falta el traje histórico del mago que contiene secretos de prestidigitación!",
                                clue: "Hay una nota con la letra de Jorge Ponce que revela técnicas de ilusionismo históricas."
                            },
                            {
                                name: "Grison",
                                role: "Director",
                                area: "Espejos",
                                testimony: "Los organizadores están cada vez más nerviosos. ¡Necesitamos al mago para mostrar los trucos históricos!",
                                clue: "Hay tinta antigua en los espejos que revela secretos de magia histórica."
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Restaurador",
                                area: "Sillas",
                                testimony: "¡Mira! ¡Hay huellas de botas! Los trajes contienen secretos de ilusionismo históricos.",
                                clue: "Las huellas llevan hacia los archivos donde se guardan los documentos sobre magia histórica."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 