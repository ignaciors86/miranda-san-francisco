const genioMatematico = {
    culpable: "Don Pablo",
    adventure: {
        step1: {
            title: "El misterio de los números perdidos",
            description: "San Genaro, 1974. Un extraño caso sacude el barrio: han desaparecido los libros de matemáticas del colegio y los ahorros de la hucha de Carlos. Los Alcántara sospechan que alguien está usando trucos matemáticos para engañar a los vecinos. ¿Podrás ayudarles a descubrir la verdad y devolver la tranquilidad al barrio? ¡Comienza la aventura!"
        },
        step2: {
            title: "Pistas en la imprenta",
            description: "La imprenta del barrio está imprimiendo panfletos con acertijos y anuncios de inversiones milagrosas. Los vecinos reciben cartas con sumas imposibles y promesas de dinero fácil. Tu misión: analizar los papeles, resolver los acertijos y descubrir quién está detrás de la confusión matemática."
        },
        step3: {
            title: "El enigma del banco",
            description: "En la sucursal bancaria, los movimientos de cuentas no cuadran. Don Pablo, el supuesto genio matemático, utiliza palabras difíciles y gráficos para despistar a todos. Deberás revisar los extractos, identificar errores y explicar a los vecinos cómo funcionan realmente los intereses y los ahorros."
        },
        step4: {
            title: "Viaje a Sagrillas: la verdad sale a la luz",
            description: "Las pistas llevan a Sagrillas, donde Don Pablo intenta convencer a los agricultores de invertir en un proyecto dudoso. Utiliza gráficos y tablas para impresionar, pero algo no encaja. Tu reto: comparar los datos reales con los que presenta Don Pablo y ayudar a los vecinos a tomar decisiones informadas."
        },
        step5: {
            title: "Desenlace en la Feria del Campo",
            description: "En la Feria del Campo, Don Pablo prepara su último truco: una charla sobre inversiones con fórmulas y estadísticas falsas. Solo tú puedes desenmascararlo resolviendo el gran acertijo final y mostrando a todos la importancia de pensar con lógica y no dejarse engañar por promesas vacías."
        }
    },
    case: {
        startingLocation: {
            name: "Casa de los Alcántara",
            city: "San Genaro",
            country: "España",
            year: "1974",
            description: "La familia Alcántara se reúne preocupada: han desaparecido los libros de matemáticas y la hucha de Carlos. Antonio sospecha que alguien quiere confundir a los vecinos con números y promesas falsas. ¿Te atreves a investigar desde el corazón del barrio?",
            witnesses: [
                {
                    name: "Antonio",
                    role: "Padre de familia",
                    area: "Salón",
                    testimony: "Alguien está engañando a los vecinos con promesas de dinero fácil. Necesitamos entender cómo funcionan realmente los números.",
                    clue: "Vi a un hombre con una carpeta llena de gráficos y números. Decía que podía multiplicar el dinero."
                },
                {
                    name: "Mercedes",
                    role: "Madre de familia",
                    area: "Cocina",
                    testimony: "Los vecinos están recibiendo cartas con ofertas extrañas. Algo no cuadra en los números.",
                    clue: "Las cartas prometen ganancias imposibles. Los números no tienen sentido."
                },
                {
                    name: "Carlos",
                    role: "Estudiante",
                    area: "Habitación",
                    testimony: "Mi hucha ha desaparecido. Alguien dijo que podía hacer crecer mis ahorros.",
                    clue: "Un hombre con calculadora me mostró números que no entendí."
                }
            ]
        },
        travels: [
            {
                locations: [
                    {
                        name: "Analizo los números de una inversión",
                        target: true,
                        description: "Don Pablo ha dejado pistas sobre cómo analizar una inversión. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Don Ramón",
                                role: "Banquero",
                                area: "Sucursal bancaria",
                                testimony: "Siempre verifica los números. Las ganancias prometidas deben ser realistas.",
                                clue: "Los intereses altos suelen indicar mayor riesgo."
                            },
                            {
                                name: "Doña Carmen",
                                role: "Contadora",
                                area: "Oficina",
                                testimony: "Lee la letra pequeña. Los costes ocultos pueden cambiar todo.",
                                clue: "Las comisiones y gastos reducen las ganancias reales."
                            },
                            {
                                name: "Don José",
                                role: "Inversor",
                                area: "Sala de reuniones",
                                testimony: "Compara con otras opciones. No te dejes llevar por promesas.",
                                clue: "Si suena demasiado bueno para ser verdad, probablemente lo sea."
                            }
                        ]
                    },
                    {
                        name: "Confío en las promesas de ganancias",
                        target: false,
                        description: "Don Pablo ha dejado pistas sobre los peligros de confiar en promesas. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Doña María",
                                role: "Experta en finanzas",
                                area: "Consultoría",
                                testimony: "Las promesas de ganancias seguras suelen ser engañosas.",
                                clue: "No hay inversiones sin riesgo."
                            },
                            {
                                name: "Don Manuel",
                                role: "Asesor financiero",
                                area: "Oficina",
                                testimony: "Investiga antes de invertir. No te dejes llevar por la emoción.",
                                clue: "Las decisiones emocionales suelen ser malas decisiones."
                            },
                            {
                                name: "Doña Ana",
                                role: "Economista",
                                area: "Despacho",
                                testimony: "Pide explicaciones claras. Si no las entiendes, no inviertas.",
                                clue: "La confusión suele ser una señal de alerta."
                            }
                        ]
                    },
                    {
                        name: "Ignoro los costes ocultos",
                        target: false,
                        description: "Don Pablo ha dejado pistas sobre la importancia de los costes. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Don Luis",
                                role: "Experto en finanzas",
                                area: "Consultoría",
                                testimony: "Los costes ocultos pueden arruinar una inversión.",
                                clue: "Lee todos los documentos antes de firmar."
                            },
                            {
                                name: "Doña Isabel",
                                role: "Asesora financiera",
                                area: "Oficina",
                                testimony: "Pregunta por todos los gastos. No te quedes con dudas.",
                                clue: "Las comisiones reducen las ganancias reales."
                            },
                            {
                                name: "Don Pedro",
                                role: "Analista financiero",
                                area: "Despacho",
                                testimony: "Calcula el rendimiento neto. Incluye todos los costes.",
                                clue: "Las ganancias prometidas suelen ser brutas, no netas."
                            }
                        ]
                    }
                ]
            },
            {
                locations: [
                    {
                        name: "Comparo diferentes opciones de inversión",
                        target: true,
                        description: "Don Pablo ha dejado pistas sobre cómo comparar inversiones. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Doña Rosa",
                                role: "Experta en inversiones",
                                area: "Consultoría",
                                testimony: "Compara el riesgo y la rentabilidad. No todo es ganancia.",
                                clue: "Mayor rentabilidad suele significar mayor riesgo."
                            },
                            {
                                name: "Don Francisco",
                                role: "Asesor financiero",
                                area: "Oficina",
                                testimony: "Diversifica tus inversiones. No pongas todos los huevos en una cesta.",
                                clue: "La diversificación reduce el riesgo."
                            },
                            {
                                name: "Doña Pilar",
                                role: "Analista financiera",
                                area: "Despacho",
                                testimony: "Considera el plazo de la inversión. No todo es a corto plazo.",
                                clue: "Las inversiones a largo plazo suelen ser más estables."
                            }
                        ]
                    },
                    {
                        name: "Invierto todo en una sola opción",
                        target: false,
                        description: "Don Pablo ha dejado pistas sobre los peligros de concentrar inversiones. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Don Juan",
                                role: "Experto en finanzas",
                                area: "Consultoría",
                                testimony: "No concentres todo tu dinero. Es muy arriesgado.",
                                clue: "La diversificación protege tu inversión."
                            },
                            {
                                name: "Doña Luisa",
                                role: "Asesora financiera",
                                area: "Oficina",
                                testimony: "Considera diferentes opciones. No te limites a una.",
                                clue: "Cada tipo de inversión tiene sus ventajas y desventajas."
                            },
                            {
                                name: "Don Miguel",
                                role: "Analista financiero",
                                area: "Despacho",
                                testimony: "Evalúa el riesgo total. No te dejes llevar por una sola opción.",
                                clue: "La concentración aumenta el riesgo de pérdida."
                            }
                        ]
                    },
                    {
                        name: "Ignoro el plazo de la inversión",
                        target: false,
                        description: "Don Pablo ha dejado pistas sobre la importancia del plazo. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Doña Carmen",
                                role: "Experta en finanzas",
                                area: "Consultoría",
                                testimony: "Considera cuándo necesitarás el dinero. No lo bloquees sin plan.",
                                clue: "El plazo afecta a la liquidez de tu inversión."
                            },
                            {
                                name: "Don Antonio",
                                role: "Asesor financiero",
                                area: "Oficina",
                                testimony: "Piensa a largo plazo. No todo es ganancia inmediata.",
                                clue: "Las inversiones a largo plazo suelen ser más rentables."
                            },
                            {
                                name: "Doña María",
                                role: "Analista financiera",
                                area: "Despacho",
                                testimony: "Evalúa tu horizonte temporal. No inviertas sin plan.",
                                clue: "El plazo determina el tipo de inversión adecuada."
                            }
                        ]
                    }
                ]
            },
            {
                locations: [
                    {
                        name: "Verifico la información financiera",
                        target: true,
                        description: "Don Pablo ha dejado pistas sobre cómo verificar información financiera. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Don José",
                                role: "Experto en finanzas",
                                area: "Consultoría",
                                testimony: "Verifica las fuentes. No confíes en información no contrastada.",
                                clue: "La información verificada es más confiable."
                            },
                            {
                                name: "Doña Ana",
                                role: "Asesora financiera",
                                area: "Oficina",
                                testimony: "Consulta con expertos. No tomes decisiones solo.",
                                clue: "Los expertos pueden identificar riesgos ocultos."
                            },
                            {
                                name: "Don Manuel",
                                role: "Analista financiero",
                                area: "Despacho",
                                testimony: "Investiga a fondo. No te dejes llevar por la primera impresión.",
                                clue: "La investigación detallada evita sorpresas."
                            }
                        ]
                    },
                    {
                        name: "Confío en la primera oferta",
                        target: false,
                        description: "Don Pablo ha dejado pistas sobre los peligros de confiar en la primera oferta. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Doña Isabel",
                                role: "Experta en finanzas",
                                area: "Consultoría",
                                testimony: "Compara varias ofertas. No te conformes con la primera.",
                                clue: "La comparación ayuda a encontrar mejores opciones."
                            },
                            {
                                name: "Don Luis",
                                role: "Asesor financiero",
                                area: "Oficina",
                                testimony: "Tómate tu tiempo. No te presiones a decidir rápido.",
                                clue: "Las decisiones apresuradas suelen ser malas."
                            },
                            {
                                name: "Doña Rosa",
                                role: "Analista financiera",
                                area: "Despacho",
                                testimony: "Investiga otras opciones. No te limites a una oferta.",
                                clue: "Siempre hay alternativas mejores."
                            }
                        ]
                    },
                    {
                        name: "Ignoro los riesgos de la inversión",
                        target: false,
                        description: "Don Pablo ha dejado pistas sobre la importancia de evaluar riesgos. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Don Pedro",
                                role: "Experto en finanzas",
                                area: "Consultoría",
                                testimony: "Evalúa los riesgos. No ignores las advertencias.",
                                clue: "Cada inversión tiene sus riesgos."
                            },
                            {
                                name: "Doña Carmen",
                                role: "Asesora financiera",
                                area: "Oficina",
                                testimony: "Considera el peor escenario. No solo pienses en ganancias.",
                                clue: "La preparación para lo peor es importante."
                            },
                            {
                                name: "Don Juan",
                                role: "Analista financiero",
                                area: "Despacho",
                                testimony: "Analiza todos los escenarios. No te centres solo en lo positivo.",
                                clue: "La evaluación de riesgos es crucial."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 