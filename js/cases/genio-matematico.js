const genioMatematico = {
    culpable: "Don Pablo",
    adventure: {
        step1: {
            title: "Un nuevo lío en San Genaro",
            description: "San Genaro está revolucionado: Don Pablo, el empresario sin escrúpulos, ha puesto en marcha una nueva trama de inversiones inmobiliarias. Un documento importante ha desaparecido del despacho de Antonio Alcántara."
        },
        step2: {
            title: "Sospechas en la imprenta",
            description: "La imprenta de Don Pablo en el barrio ha recibido pedidos extraños de papeles y sellos. Los vecinos comentan que hay mucho movimiento de maletines y papeles oficiales."
        },
        step3: {
            title: "El rastro del dinero",
            description: "Las pistas llevan a una sucursal bancaria donde se han detectado movimientos sospechosos de cuentas y cheques relacionados con la trama."
        },
        step4: {
            title: "Viaje a Sagrillas",
            description: "La investigación apunta a Sagrillas, el pueblo de los Alcántara, donde Don Pablo busca terrenos para su estafa."
        },
        step5: {
            title: "Desenlace en la Feria del Campo",
            description: "Don Pablo intentará cerrar su gran estafa en la Feria del Campo de Madrid, donde reunirá a los inversores para el golpe final."
        }
    },
    case: {
        startingLocation: {
            name: "Casa de los Alcántara",
            city: "San Genaro",
            country: "España",
            year: "1974",
            description: "Vivienda familiar en un barrio obrero de Madrid, con un pequeño despacho en la parte trasera."
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Imprenta Universal",
                        target: true,
                        city: "San Genaro",
                        country: "España",
                        year: "1974",
                        description: "La imprenta donde se imprimen documentos oficiales y contratos. Últimamente ha recibido pedidos inusuales.",
                        witnesses: [
                            {
                                name: "Desi",
                                role: "Vecino y amigo de Antonio",
                                area: "Mostrador",
                                testimony: "Vi a un hombre trajeado discutiendo con el dueño. Hablaban de terrenos y de mucho dinero.",
                                clue: "Uno de los papeles tenía un plano de una sucursal bancaria del centro de Madrid."
                            },
                            {
                                name: "Mercedes Alcántara",
                                role: "Esposa de Antonio",
                                area: "Oficina",
                                testimony: "Antonio estaba muy nervioso con esos papeles. Ayer vi a un hombre con traje caro merodeando por el portal.",
                                clue: "Encontré una factura de imprenta con un sello oficial que no reconozco."
                            },
                            {
                                name: "Tinín",
                                role: "Tabernero",
                                area: "Entrada",
                                testimony: "Un señor con traje viene mucho por aquí últimamente. Siempre trae papeles y habla por teléfono en voz baja.",
                                clue: "Vi un recibo de un banco del centro de Madrid en la papelera."
                            }
                        ]
                    },
                    {
                        name: "Bar San Genaro",
                        target: false,
                        city: "San Genaro",
                        country: "España",
                        year: "1974",
                        description: "El bar de Tinín, centro de cotilleos del barrio.",
                        witnesses: [
                            {
                                name: "Tinín",
                                role: "Tabernero",
                                area: "Barra",
                                testimony: "Aquí solo se habla de fútbol y de la quiniela. Si buscas a alguien misterioso, tendrás que probar en otro sitio.",
                                clue: "No he visto a nadie con pinta de estafador por aquí."
                            },
                            {
                                name: "Mariano",
                                role: "Cliente habitual",
                                area: "Mesa del fondo",
                                testimony: "Hoy solo hemos tenido parroquianos de siempre. Nadie con maletín ni prisas.",
                                clue: "Quizá tu sospechoso prefiera otro ambiente."
                            },
                            {
                                name: "Josete",
                                role: "Amigo de Carlos",
                                area: "Máquina de tabaco",
                                testimony: "Si buscas aventuras, este no es el lugar. Todo tranquilo.",
                                clue: "Aquí solo se habla de fútbol y tapas."
                            }
                        ]
                    },
                    {
                        name: "Parroquia de San Genaro",
                        target: false,
                        city: "San Genaro",
                        country: "España",
                        year: "1974",
                        description: "La iglesia del barrio, donde Herminia va a rezar.",
                        witnesses: [
                            {
                                name: "Herminia",
                                role: "Feligresa",
                                area: "Banco central",
                                testimony: "Solo he visto a los vecinos rezando. Nadie extraño se ha acercado hoy.",
                                clue: "Quizá deberías buscar en un sitio más bullicioso."
                            },
                            {
                                name: "Don Anselmo",
                                role: "Sacerdote",
                                area: "Sacristía",
                                testimony: "No ha venido nadie nuevo a confesarse ni a pedir ayuda.",
                                clue: "Todo está en calma en la iglesia."
                            },
                            {
                                name: "Pili",
                                role: "Monaguilla",
                                area: "Altar",
                                testimony: "Hoy solo hemos preparado misas y flores. Ningún forastero.",
                                clue: "Aquí no hay misterios, solo rezos."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Banco Hispano Americano",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Sucursal bancaria en el centro de Madrid, con amplios ventanales y una gran cúpula de cristal. Se han detectado movimientos sospechosos de cuentas y cheques.",
                        witnesses: [
                            {
                                name: "Toni Alcántara",
                                role: "Hijo mayor, periodista",
                                area: "Vestíbulo",
                                testimony: "He conseguido ver los movimientos de una cuenta sospechosa. Hay transferencias a nombre de una finca en un pueblo de La Mancha.",
                                clue: "Un recibo bancario tiene el nombre de un pueblo escrito a mano."
                            },
                            {
                                name: "Paquita",
                                role: "Cuñada de Antonio",
                                area: "Cajero",
                                testimony: "Vi a un hombre con traje oscuro hablando con el director del banco. Parecían muy serios.",
                                clue: "Escuché que mencionaban un pueblo de La Mancha y terrenos."
                            },
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Sala de espera",
                                testimony: "No me gusta nada ese banco, siempre pasan cosas raras. Un señor salió de allí con una sonrisa sospechosa.",
                                clue: "Llevaba un sobre con el nombre de un pueblo escrito a mano."
                            }
                        ]
                    },
                    {
                        name: "Mercado de San Genaro",
                        target: false,
                        city: "San Genaro",
                        country: "España",
                        year: "1974",
                        description: "El mercado donde Mercedes hace la compra. Ambiente bullicioso, pero nada fuera de lo común últimamente.",
                        witnesses: [
                            {
                                name: "Mercedes Alcántara",
                                role: "Vendedora de verduras",
                                area: "Puesto 7",
                                testimony: "Por aquí solo han pasado las clientas de siempre. Nadie raro ni con prisas.",
                                clue: "Quizá tu sospechoso prefiera otro sitio para esconderse."
                            },
                            {
                                name: "Don Tomás",
                                role: "Carnicero",
                                area: "Carnicería",
                                testimony: "Hoy solo he vendido filetes y chuletas. Ningún desconocido.",
                                clue: "Todo está normal en el mercado."
                            },
                            {
                                name: "Sra. Carmen",
                                role: "Frutera",
                                area: "Frutería",
                                testimony: "Si buscas a alguien especial, aquí no lo vas a encontrar.",
                                clue: "Solo fruta fresca y vecinos charlando."
                            }
                        ]
                    },
                    {
                        name: "El Escorial",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Municipio histórico cerca de Madrid, famoso por su monasterio y palacio real. Todo está tranquilo últimamente.",
                        witnesses: [
                            {
                                name: "Guía turística",
                                role: "Guía",
                                area: "Entrada",
                                testimony: "Hoy solo he enseñado el monasterio a turistas. Nadie sospechoso en la visita.",
                                clue: "Quizá tu sospechoso prefiera perderse en la ciudad."
                            },
                            {
                                name: "Vigilante",
                                role: "Seguridad",
                                area: "Patio",
                                testimony: "He visto a muchos, pero ninguno con la descripción que das.",
                                clue: "Nada fuera de lo común por aquí."
                            },
                            {
                                name: "María",
                                role: "Turista",
                                area: "Jardines",
                                testimony: "Solo he hecho fotos y paseado. Nadie misterioso a la vista.",
                                clue: "Todo está tranquilo en El Escorial."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Sagrillas",
                        target: true,
                        city: "Sagrillas",
                        country: "España",
                        year: "1974",
                        description: "Pueblo típico de La Mancha, con su plaza mayor y la iglesia parroquial como centro de la vida social. Últimamente hay rumores de inversiones.",
                        witnesses: [
                            {
                                name: "Antonio Alcántara",
                                role: "Protagonista",
                                area: "Plaza del pueblo",
                                testimony: "Un señor con traje me ofreció participar en un negocio de terrenos. No me fío, pero parece que ha convencido a varios vecinos.",
                                clue: "Me enseñó un folleto de la Feria del Campo de Madrid."
                            },
                            {
                                name: "Don Pablo",
                                role: "Empresario",
                                area: "Ayuntamiento",
                                testimony: "Estoy organizando una inversión para modernizar el pueblo. Todo legal, por supuesto.",
                                clue: "Tengo todos los papeles en regla para la feria de Madrid."
                            },
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Iglesia",
                                testimony: "He oído a los vecinos hablar de un negocio grande, pero no me fío de ese hombre.",
                                clue: "Vi a Don Pablo con un maletín lleno de papeles."
                            }
                        ]
                    },
                    {
                        name: "Estadio Santiago Bernabéu",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "El estadio de fútbol más famoso de Madrid. Solo hay partidos y entrenamientos estos días.",
                        witnesses: [
                            {
                                name: "Vigilante nocturno",
                                role: "Vigilante",
                                area: "Puerta principal",
                                testimony: "Solo aficionados al fútbol y empleados. Nadie con pinta de estafador.",
                                clue: "Nada raro en el estadio."
                            },
                            {
                                name: "Pepe",
                                role: "Aficionado",
                                area: "Grada",
                                testimony: "He animado al equipo, pero no he visto a nadie sospechoso.",
                                clue: "Solo fútbol y cánticos hoy."
                            },
                            {
                                name: "Camarero del bar",
                                role: "Camarero",
                                area: "Bar del estadio",
                                testimony: "He servido bocadillos y refrescos. Ningún forastero.",
                                clue: "Todo está normal en el bar."
                            }
                        ]
                    },
                    {
                        name: "Toledo",
                        target: false,
                        city: "Toledo",
                        country: "España",
                        year: "1974",
                        description: "Ciudad monumental famosa por su catedral y su casco histórico amurallado. Mucho turismo, pero nada sospechoso.",
                        witnesses: [
                            {
                                name: "Pedro",
                                role: "Guía local",
                                area: "Puente de San Martín",
                                testimony: "Hoy solo turistas y vecinos paseando. Nadie con pinta de estafador.",
                                clue: "Quizá deberías buscar en otra ciudad."
                            },
                            {
                                name: "Lola",
                                role: "Vendedora de recuerdos",
                                area: "Zocodover",
                                testimony: "He vendido pulseras y postales, pero no he visto a nadie sospechoso.",
                                clue: "Nada raro en la plaza."
                            },
                            {
                                name: "Agente Ruiz",
                                role: "Policía",
                                area: "Catedral",
                                testimony: "Todo está en orden. Si buscas a alguien, aquí no ha pasado.",
                                clue: "Solo turistas y rezos hoy."
                            }
                        ]
                    }
                ]
            },
            // Paso 4
            {
                locations: [
                    {
                        name: "Feria del Campo de Madrid",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Gran recinto ferial con stands de empresas y zonas de exposición al aire libre. Aquí se va a cerrar la gran estafa.",
                        witnesses: [
                            {
                                name: "Mercedes Alcántara",
                                role: "Esposa de Antonio",
                                area: "Stand de la feria",
                                testimony: "He visto a un hombre con traje repartiendo contratos y prometiendo el oro y el moro. Hay que pararle los pies.",
                                clue: "Uno de los contratos tiene una firma falsificada."
                            },
                            {
                                name: "Toni Alcántara",
                                role: "Hijo mayor, periodista",
                                area: "Zona de prensa",
                                testimony: "Estoy cubriendo la feria para el periódico. He conseguido pruebas de la estafa.",
                                clue: "Tengo fotos de un hombre con traje entregando sobres a los inversores."
                            },
                            {
                                name: "Desi",
                                role: "Vecino y amigo",
                                area: "Entrada",
                                testimony: "He avisado a la policía. Espero que lleguen a tiempo para pillar al estafador con las manos en la masa.",
                                clue: "Vi a un hombre con maletín intentando salir por la puerta de atrás."
                            }
                        ]
                    },
                    {
                        name: "Hotel Palace",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Hotel de lujo donde podría estar escondido el estafador. Sin embargo, todo está en calma.",
                        witnesses: [
                            {
                                name: "Recepcionista",
                                role: "Recepción",
                                area: "Mostrador",
                                testimony: "Hoy solo han llegado huéspedes habituales. Nadie con prisas ni maletines.",
                                clue: "Todo está tranquilo en el hotel."
                            },
                            {
                                name: "Botones",
                                role: "Botones",
                                area: "Hall",
                                testimony: "He subido maletas, pero ninguna sospechosa.",
                                clue: "Nadie raro ha pasado por aquí."
                            },
                            {
                                name: "Camarera de pisos",
                                role: "Camarera",
                                area: "Cafetería",
                                testimony: "Solo he servido cafés y tostadas. Ningún forastero.",
                                clue: "Todo en orden en la cafetería."
                            }
                        ]
                    },
                    {
                        name: "Cafetería de la Estación",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Establecimiento de restauración con terraza y vistas a los andenes. Solo clientes habituales y algún viajero despistado.",
                        witnesses: [
                            {
                                name: "Camarero Julián",
                                role: "Camarero",
                                area: "Barra",
                                testimony: "Solo clientes habituales y algún viajero despistado. Nadie sospechoso.",
                                clue: "Nada fuera de lo común en la cafetería."
                            },
                            {
                                name: "Cliente habitual",
                                role: "Cliente",
                                area: "Mesa",
                                testimony: "He leído el periódico y tomado café. No he visto a nadie raro.",
                                clue: "Todo está tranquilo en la sala."
                            },
                            {
                                name: "Encargada",
                                role: "Encargada",
                                area: "Cocina",
                                testimony: "Solo he preparado menús del día. Ningún forastero.",
                                clue: "Todo está normal en la cocina."
                            }
                        ]
                    }
                ]
            },
            // Paso 5 (resolución)
            {
                locations: [
                    {
                        name: "Estación de Atocha",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "La policía ha rodeado la estación. El estafador está atrapado, pero aún no lo han encontrado.",
                        witnesses: [
                            {
                                name: "Desi",
                                role: "Vecino y amigo",
                                area: "Vestíbulo",
                                testimony: "¡Lo he visto! Se ha escondido en los baños con su maletín.",
                                clue: "Dejó caer un sobre con documentos importantes y una llave de los baños de la estación."
                            },
                            {
                                name: "Carlos Alcántara",
                                role: "Hijo",
                                area: "Taquillas",
                                testimony: "La policía está por todas partes. No puede escapar.",
                                clue: "Vi a un hombre con traje entrar en los baños muy rápido. Llevaba una llave especial de los baños de la estación."
                            },
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Sala de espera",
                                testimony: "¡Qué lío! La policía está por todas partes buscando a alguien.",
                                clue: "Oí que alguien entró corriendo en los baños y cerró la puerta con llave."
                            }
                        ]
                    },
                    {
                        name: "Puerto de Barcelona",
                        target: false,
                        city: "Barcelona",
                        country: "España",
                        year: "1974",
                        description: "Puerto comercial y turístico. Solo barcos y mercancías habituales. Nadie sospechoso últimamente.",
                        witnesses: [
                            {
                                name: "Estibador",
                                role: "Estibador",
                                area: "Muelle",
                                testimony: "Solo barcos y mercancías habituales. Nadie sospechoso.",
                                clue: "Quizá tu sospechoso prefiera otro puerto."
                            },
                            {
                                name: "Marinero",
                                role: "Marinero",
                                area: "Barco",
                                testimony: "He visto a la tripulación de siempre. Ningún forastero.",
                                clue: "Nada fuera de lo común en el puerto."
                            },
                            {
                                name: "Turista francesa",
                                role: "Turista",
                                area: "Terminal",
                                testimony: "Solo he hecho fotos y comprado recuerdos. Nadie raro.",
                                clue: "Todo está tranquilo en la terminal."
                            }
                        ]
                    },
                    {
                        name: "Andén 1",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "Andén principal de la estación, con salidas a destinos nacionales. Solo trenes y pasajeros habituales.",
                        witnesses: [
                            {
                                name: "Revisor",
                                role: "Revisor",
                                area: "Andén",
                                testimony: "Solo trenes y pasajeros habituales. Nadie con prisas ni maletines.",
                                clue: "Nada raro en el andén."
                            },
                            {
                                name: "Viajera",
                                role: "Viajera",
                                area: "Banco",
                                testimony: "He esperado mi tren y leído un libro. No he visto a nadie sospechoso.",
                                clue: "Todo está normal en el banco."
                            },
                            {
                                name: "Vendedor de prensa",
                                role: "Vendedor",
                                area: "Puesto de prensa",
                                testimony: "Solo he vendido periódicos y revistas. Ningún forastero.",
                                clue: "Todo está normal en el puesto."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 