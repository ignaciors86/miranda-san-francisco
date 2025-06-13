const cientificoLoco = {
    culpable: "El Científico Loco",
    adventure: {
        step1: {
            title: "El misterio de las vacunas",
            description: "¡Alerta en el laboratorio! Un científico está difundiendo información falsa sobre las vacunas. Los investigadores sospechan que está manipulando datos y creando miedo infundado. ¿Podrás seguir el rastro de sus afirmaciones y evitar que la desinformación se propague? ¡La salud pública necesita tu ayuda!"
        },
        step2: {
            title: "Pistas en el laboratorio",
            description: "El laboratorio está lleno de notas y estudios sobre vacunas. Los investigadores buscan pistas sobre los métodos utilizados. Las pruebas sugieren que el científico está seleccionando datos de manera sesgada y realizando estudios sin los controles adecuados."
        },
        step3: {
            title: "El enigma de los datos",
            description: "Los registros contienen datos inconsistentes sobre efectos secundarios. El científico ha estado manipulando estadísticas sin documentar los cambios. Tu misión: analizar los datos, identificar los errores metodológicos y entender cómo deberían haberse realizado los estudios correctamente."
        },
        step4: {
            title: "Viaje al centro de investigación",
            description: "Las pistas llevan a un centro de investigación médica. El científico planea presentar sus resultados en una conferencia internacional, pero sus métodos no siguen los estándares científicos. Tu reto: demostrar la importancia de la evidencia científica en la investigación de vacunas."
        },
        step5: {
            title: "Desenlace en la conferencia médica",
            description: "El científico planea presentar sus estudios en una conferencia internacional. Tu objetivo final: utilizar todos los conocimientos científicos recopilados para exponer los riesgos de la desinformación y prevenir un brote de enfermedades prevenibles."
        }
    },
    case: {
        startingLocation: {
            name: "Centro de Investigación en Vacunas",
            city: "Madrid",
            country: "España",
            year: "2024",
            description: "El Centro de Investigación en Vacunas es un lugar donde se desarrollan y prueban nuevas vacunas. Pero hoy, la ciencia se mezcla con el misterio: un estudio crucial ha sido manipulado y la salud pública está en juego. ¿Te atreves a entrar y descubrir qué mente brillante —o peligrosa— está detrás de todo?",
            witnesses: [
                {
                    name: "Dr. Martínez",
                    role: "Director del centro",
                    area: "Despacho",
                    testimony: "Un estudio sobre vacunas ha sido manipulado. Necesitamos entender qué pasó y por qué se difundió información falsa.",
                    clue: "Vi notas con resultados sesgados y estudios sin controles."
                },
                {
                    name: "Dra. García",
                    role: "Epidemióloga",
                    area: "Laboratorio",
                    testimony: "Los datos no cuadran. Alguien ha estado seleccionando solo los casos negativos.",
                    clue: "Encontré registros con estadísticas manipuladas."
                },
                {
                    name: "Carlos",
                    role: "Técnico de laboratorio",
                    area: "Almacén",
                    testimony: "Faltan muestras de control. Alguien ha estado realizando estudios sin los grupos necesarios.",
                    clue: "Los inventarios no coinciden con los registros."
                }
            ]
        },
        travels: [
            {
                locations: [
                    {
                        name: "Verifico la evidencia científica",
                        target: true,
                        description: "El científico ha dejado pistas sobre la importancia de la evidencia científica. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dra. López",
                                role: "Experta en ensayos clínicos",
                                area: "Laboratorio",
                                testimony: "Siempre verifica los estudios publicados. Busca revisiones por pares.",
                                clue: "La evidencia científica debe ser verificable."
                            },
                            {
                                name: "Dr. Sánchez",
                                role: "Investigador",
                                area: "Laboratorio",
                                testimony: "Analiza los datos completos. No te quedes solo con casos aislados.",
                                clue: "Los estudios deben ser completos y representativos."
                            },
                            {
                                name: "Dra. Ruiz",
                                role: "Científica",
                                area: "Laboratorio",
                                testimony: "Consulta fuentes confiables. No te dejes llevar por rumores.",
                                clue: "La información debe venir de fuentes verificadas."
                            }
                        ]
                    },
                    {
                        name: "Me dejo llevar por testimonios aislados",
                        target: false,
                        description: "El científico ha dejado pistas sobre los peligros de confiar en casos aislados. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dr. Torres",
                                role: "Experto en estadística",
                                area: "Laboratorio",
                                testimony: "Los casos aislados no son evidencia. Necesitas estudios completos.",
                                clue: "Las anécdotas no reemplazan la evidencia científica."
                            },
                            {
                                name: "Dra. Morales",
                                role: "Investigadora",
                                area: "Laboratorio",
                                testimony: "Analiza los datos en contexto. No te centres en excepciones.",
                                clue: "Los casos raros no invalidan la evidencia general."
                            },
                            {
                                name: "Dr. Jiménez",
                                role: "Científico",
                                area: "Laboratorio",
                                testimony: "Busca patrones, no excepciones. La ciencia se basa en datos.",
                                clue: "La evidencia debe ser sistemática."
                            }
                        ]
                    },
                    {
                        name: "Ignoro los estudios científicos",
                        target: false,
                        description: "El científico ha dejado pistas sobre la importancia de la investigación científica. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dra. Castro",
                                role: "Experta en salud pública",
                                area: "Laboratorio",
                                testimony: "Los estudios científicos son la base. No los ignores.",
                                clue: "La ciencia es la mejor herramienta para la salud."
                            },
                            {
                                name: "Dr. Ortega",
                                role: "Investigador",
                                area: "Laboratorio",
                                testimony: "La evidencia científica salva vidas. Confía en ella.",
                                clue: "Las vacunas han erradicado enfermedades."
                            },
                            {
                                name: "Dra. Vega",
                                role: "Científica",
                                area: "Laboratorio",
                                testimony: "La ciencia es clara sobre las vacunas. Sigue la evidencia.",
                                clue: "La evidencia científica es contundente."
                            }
                        ]
                    }
                ]
            },
            {
                locations: [
                    {
                        name: "Analizo los beneficios y riesgos",
                        target: true,
                        description: "El científico ha dejado pistas sobre la importancia del análisis de riesgos. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dr. Navarro",
                                role: "Experto en seguridad de vacunas",
                                area: "Laboratorio",
                                testimony: "Evalúa beneficios y riesgos. Las vacunas son seguras.",
                                clue: "Los beneficios superan ampliamente los riesgos."
                            },
                            {
                                name: "Dra. Méndez",
                                role: "Investigadora",
                                area: "Laboratorio",
                                testimony: "Compara con enfermedades prevenibles. Las vacunas salvan vidas.",
                                clue: "Las enfermedades son más peligrosas que las vacunas."
                            },
                            {
                                name: "Dr. Silva",
                                role: "Científico",
                                area: "Laboratorio",
                                testimony: "Estudia los datos completos. No te centres solo en riesgos.",
                                clue: "El balance riesgo-beneficio es favorable."
                            }
                        ]
                    },
                    {
                        name: "Me centro solo en los riesgos",
                        target: false,
                        description: "El científico ha dejado pistas sobre los peligros de enfocarse solo en riesgos. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dra. Ríos",
                                role: "Experta en salud pública",
                                area: "Laboratorio",
                                testimony: "No te centres solo en riesgos. Mira el panorama completo.",
                                clue: "Los riesgos deben verse en contexto."
                            },
                            {
                                name: "Dr. Pardo",
                                role: "Investigador",
                                area: "Laboratorio",
                                testimony: "Compara con enfermedades. Las vacunas son seguras.",
                                clue: "Las enfermedades son más peligrosas."
                            },
                            {
                                name: "Dra. Soto",
                                role: "Científica",
                                area: "Laboratorio",
                                testimony: "Analiza el balance completo. No te dejes llevar por el miedo.",
                                clue: "La evidencia muestra que son seguras."
                            }
                        ]
                    },
                    {
                        name: "Ignoro los efectos secundarios",
                        target: false,
                        description: "El científico ha dejado pistas sobre la importancia de monitorear efectos secundarios. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dr. Valdez",
                                role: "Experto en farmacovigilancia",
                                area: "Laboratorio",
                                testimony: "Monitorea los efectos secundarios. Es parte del proceso.",
                                clue: "La vigilancia es continua y rigurosa."
                            },
                            {
                                name: "Dra. Luna",
                                role: "Investigadora",
                                area: "Laboratorio",
                                testimony: "Reporta cualquier efecto. Es importante para la seguridad.",
                                clue: "El monitoreo es parte de la seguridad."
                            },
                            {
                                name: "Dr. Reyes",
                                role: "Científico",
                                area: "Laboratorio",
                                testimony: "Sigue los protocolos de seguridad. Son esenciales.",
                                clue: "La seguridad es prioritaria."
                            }
                        ]
                    }
                ]
            },
            {
                waitForAllClues: true,
                locations: [
                    {
                        name: "Consulto a expertos en salud",
                        target: true,
                        description: "El científico ha dejado pistas sobre la importancia de consultar expertos. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dra. Mendoza",
                                role: "Experta en inmunología",
                                area: "Laboratorio",
                                testimony: "Consulta a profesionales de la salud. Son los expertos.",
                                clue: "Los expertos tienen la mejor información."
                            },
                            {
                                name: "Dr. Herrera",
                                role: "Investigador",
                                area: "Laboratorio",
                                testimony: "Confía en los especialistas. Tienen la formación adecuada.",
                                clue: "Los expertos conocen la evidencia."
                            },
                            {
                                name: "Dra. Guzmán",
                                role: "Científica",
                                area: "Laboratorio",
                                testimony: "Busca fuentes confiables. No te dejes llevar por mitos.",
                                clue: "Los expertos son la mejor fuente."
                            }
                        ]
                    },
                    {
                        name: "Confío en redes sociales",
                        target: false,
                        description: "El científico ha dejado pistas sobre los peligros de la desinformación. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dr. Fuentes",
                                role: "Experto en comunicación científica",
                                area: "Laboratorio",
                                testimony: "No confíes en redes sociales. Busca fuentes verificadas.",
                                clue: "Las redes pueden difundir desinformación."
                            },
                            {
                                name: "Dra. Cortés",
                                role: "Investigadora",
                                area: "Laboratorio",
                                testimony: "Verifica la información. No te dejes llevar por rumores.",
                                clue: "La desinformación puede ser peligrosa."
                            },
                            {
                                name: "Dr. Núñez",
                                role: "Científico",
                                area: "Laboratorio",
                                testimony: "Busca fuentes confiables. No te dejes engañar.",
                                clue: "La evidencia científica es la mejor guía."
                            }
                        ]
                    },
                    {
                        name: "Ignoro las recomendaciones médicas",
                        target: false,
                        description: "El científico ha dejado pistas sobre la importancia de seguir recomendaciones. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dra. Flores",
                                role: "Experta en salud pública",
                                area: "Laboratorio",
                                testimony: "Sigue las recomendaciones médicas. Son basadas en evidencia.",
                                clue: "Las recomendaciones salvan vidas."
                            },
                            {
                                name: "Dr. Ramírez",
                                role: "Investigador",
                                area: "Laboratorio",
                                testimony: "Confía en los profesionales. Tienen la mejor información.",
                                clue: "Los médicos conocen la evidencia."
                            },
                            {
                                name: "Dra. Vargas",
                                role: "Científica",
                                area: "Laboratorio",
                                testimony: "Sigue los protocolos de salud. Son importantes.",
                                clue: "Las recomendaciones son cruciales."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 