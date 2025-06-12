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
                    name: "Antonio Alcántara",
                    role: "Padre de familia",
                    area: "Despacho",
                    testimony: "Esta mañana, al revisar mis cuentas, noté que faltaban los papeles más importantes. Sin ellos, no puedo demostrar que Don Pablo está engañando a los vecinos.",
                    clue: "Encontré una hoja con sumas mal hechas y una dirección de la imprenta local."
                },
                {
                    name: "Mercedes Alcántara",
                    role: "Madre de familia",
                    area: "Cocina",
                    testimony: "Antonio está muy preocupado. Anoche escuché ruidos en el patio y vi una sombra con un maletín. Seguro que tiene que ver con los papeles desaparecidos.",
                    clue: "Vi una carta con acertijos matemáticos y el sello de la imprenta."
                },
                {
                    name: "Carlos Alcántara",
                    role: "Hijo",
                    area: "Entrada",
                    testimony: "Hoy, al ir al colegio, vi que la hucha estaba vacía y la puerta del despacho abierta. Papá nunca la deja así.",
                    clue: "En el felpudo encontré un trozo de papel con números y un logotipo de la imprenta."
                }
            ]
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
                        description: "La imprenta del barrio está llena de panfletos con acertijos y anuncios de inversiones. Hoy hay una demostración de impresión para los niños del colegio.",
                        witnesses: [
                            {
                                name: "Desi",
                                role: "Vecino y amigo de Antonio",
                                area: "Mostrador",
                                testimony: "Vi a un hombre trajeado discutiendo con el dueño. Revisaban papeles llenos de números y gráficos. Hablaban de inversiones y de cómo ganar dinero fácil.",
                                clue: "Uno de los papeles tenía un acertijo matemático y la dirección de un banco en Madrid."
                            },
                            {
                                name: "Mercedes Alcántara",
                                role: "Esposa de Antonio",
                                area: "Oficina",
                                testimony: "Antonio está convencido de que los papeles de la imprenta son la clave. Ayer vi a un hombre con traje caro merodeando por el portal.",
                                clue: "Encontré una factura con sumas incorrectas y un sello sospechoso."
                            },
                            {
                                name: "Tinín",
                                role: "Tabernero",
                                area: "Entrada",
                                testimony: "Un señor con traje viene mucho últimamente. Siempre trae papeles con números y habla de inversiones milagrosas.",
                                clue: "Vi un recibo de banco con operaciones que no cuadran."
                            }
                        ]
                    },
                    {
                        name: "Bar San Genaro",
                        target: false,
                        city: "San Genaro",
                        country: "España",
                        year: "1974",
                        description: "El bar más popular del barrio. Hoy hay partido de fútbol y charla sobre la quiniela.",
                        witnesses: [
                            {
                                name: "Tinín",
                                role: "Tabernero",
                                area: "Barra",
                                testimony: "Aquí solo se habla de fútbol y tapas. Si buscas a alguien misterioso, tendrás que probar en otro sitio.",
                                clue: "No he visto a nadie con papeles raros por aquí."
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
                        description: "La iglesia del barrio. Hoy hay misa y reunión de vecinos.",
                        witnesses: [
                            {
                                name: "Herminia",
                                role: "Abuela",
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
                        description: "Sucursal bancaria en el centro de Madrid. Hoy hay una charla sobre ahorro y cuentas para jóvenes.",
                        witnesses: [
                            {
                                name: "Toni Alcántara",
                                role: "Hijo mayor, periodista",
                                area: "Vestíbulo",
                                testimony: "He conseguido ver los movimientos de una cuenta sospechosa. Hay transferencias a nombre de un pueblo de La Mancha.",
                                clue: "Un recibo bancario tiene sumas que no cuadran y el nombre de Sagrillas."
                            },
                            {
                                name: "Paquita",
                                role: "Cuñada de Antonio",
                                area: "Cajero",
                                testimony: "Vi a un hombre con traje oscuro hablando con el director del banco. Parecían muy serios.",
                                clue: "Escuché que mencionaban inversiones y terrenos en Sagrillas."
                            },
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Sala de espera",
                                testimony: "No me gusta nada ese banco, siempre pasan cosas raras. Un señor salió de allí con una sonrisa sospechosa.",
                                clue: "Llevaba un sobre con números y gráficos extraños."
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
                                testimony: "Hoy solo he vendido patatas y tomates. Nadie ha preguntado por inversiones ni ha traído papeles raros.",
                                clue: "Aquí no hay pistas, solo verduras frescas."
                            },
                            {
                                name: "Desi",
                                role: "Vecino",
                                area: "Puesto de embutidos",
                                testimony: "He visto a Don Pablo pasar por aquí, pero no se ha parado a hablar con nadie.",
                                clue: "Quizá deberías buscar en el banco."
                            },
                            {
                                name: "Josete",
                                role: "Ayudante",
                                area: "Carrito de la compra",
                                testimony: "He ayudado a Mercedes a llevar la compra, pero no he visto nada raro.",
                                clue: "Todo tranquilo en el mercado."
                            }
                        ]
                    },
                    {
                        name: "Colegio San Genaro",
                        target: false,
                        city: "San Genaro",
                        country: "España",
                        year: "1974",
                        description: "El colegio del barrio. Hoy hay clase de matemáticas y juegos en el patio.",
                        witnesses: [
                            {
                                name: "Carlos Alcántara",
                                role: "Alumno",
                                area: "Aula de matemáticas",
                                testimony: "Hoy la profe ha dicho que faltan los libros de matemáticas. Sin ellos, no podemos hacer los ejercicios.",
                                clue: "Quizá los libros estén en otro sitio."
                            },
                            {
                                name: "Pili",
                                role: "Compañera de clase",
                                area: "Patio",
                                testimony: "Hoy hemos jugado a las canicas, pero nadie ha hablado de inversiones ni de bancos.",
                                clue: "Aquí solo hay juegos y risas."
                            },
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Puerta del colegio",
                                testimony: "He venido a recoger a Carlos, pero no he visto nada raro.",
                                clue: "Todo normal en el colegio."
                            }
                        ]
                    }
                ]
            },
            // Paso 3
            {
                locations: [
                    {
                        name: "Sagrillas - Plaza Mayor",
                        target: true,
                        city: "Sagrillas",
                        country: "España",
                        year: "1974",
                        description: "La plaza del pueblo de los Alcántara. Hoy hay mercado y reunión de agricultores.",
                        witnesses: [
                            {
                                name: "Antonio Alcántara",
                                role: "Padre de familia",
                                area: "Ayuntamiento",
                                testimony: "Don Pablo está intentando convencer a los agricultores con gráficos y tablas. Pero los números no cuadran.",
                                clue: "Encontré una tabla con errores y sumas imposibles."
                            },
                            {
                                name: "Mercedes Alcántara",
                                role: "Madre de familia",
                                area: "Puesto de flores",
                                testimony: "Los vecinos están confundidos con tantos papeles. Nadie entiende nada.",
                                clue: "Vi un gráfico con datos inventados."
                            },
                            {
                                name: "Desi",
                                role: "Vecino",
                                area: "Fuente",
                                testimony: "Don Pablo habla muy bien, pero sus cuentas no convencen a nadie.",
                                clue: "Un agricultor encontró un error en los cálculos de Don Pablo."
                            }
                        ]
                    },
                    {
                        name: "Casa de Herminia",
                        target: false,
                        city: "Sagrillas",
                        country: "España",
                        year: "1974",
                        description: "La casa de la abuela Herminia. Hoy hay merienda y charla familiar.",
                        witnesses: [
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Cocina",
                                testimony: "Aquí solo se habla de recetas y recuerdos. Nada de bancos ni de inversiones.",
                                clue: "Aquí no hay pistas, solo bizcocho."
                            },
                            {
                                name: "Carlos Alcántara",
                                role: "Nieto",
                                area: "Salón",
                                testimony: "He jugado con mis primos toda la tarde. Nadie ha hablado de Don Pablo.",
                                clue: "Todo tranquilo en casa de la abuela."
                            },
                            {
                                name: "Pili",
                                role: "Nieta",
                                area: "Patio",
                                testimony: "Hoy hemos jugado al escondite. Nadie ha traído papeles raros.",
                                clue: "Aquí solo hay juegos y risas."
                            }
                        ]
                    },
                    {
                        name: "Estación de tren",
                        target: false,
                        city: "Sagrillas",
                        country: "España",
                        year: "1974",
                        description: "La estación de tren del pueblo. Hoy llegan visitantes para la feria.",
                        witnesses: [
                            {
                                name: "Don Anselmo",
                                role: "Sacerdote",
                                area: "Andén",
                                testimony: "He visto llegar a mucha gente, pero nadie con maletines ni papeles sospechosos.",
                                clue: "Todo normal en la estación."
                            },
                            {
                                name: "Desi",
                                role: "Vecino",
                                area: "Taquilla",
                                testimony: "He comprado un billete para Madrid, pero no he visto nada raro.",
                                clue: "Nadie sospechoso en la taquilla."
                            },
                            {
                                name: "Paquita",
                                role: "Vecina",
                                area: "Sala de espera",
                                testimony: "Solo he visto a familias y viajeros. Nadie con gráficos ni papeles.",
                                clue: "Todo tranquilo en la estación."
                            }
                        ]
                    }
                ]
            },
            // Paso 4
            {
                locations: [
                    {
                        name: "Feria del Campo - Madrid",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "La gran feria agrícola y ganadera. Hoy hay una charla sobre inversiones y tecnología.",
                        witnesses: [
                            {
                                name: "Don Pablo",
                                role: "Sospechoso principal",
                                area: "Escenario principal",
                                testimony: "Presenta gráficos y fórmulas para impresionar a los asistentes. Habla de inversiones milagrosas y ganancias rápidas.",
                                clue: "Sus fórmulas tienen errores y los datos no coinciden con la realidad."
                            },
                            {
                                name: "Antonio Alcántara",
                                role: "Padre de familia",
                                area: "Zona de expositores",
                                testimony: "He revisado los papeles de Don Pablo y he encontrado muchas inconsistencias.",
                                clue: "Las sumas y los porcentajes no cuadran."
                            },
                            {
                                name: "Mercedes Alcántara",
                                role: "Madre de familia",
                                area: "Pabellón de alimentos",
                                testimony: "Los vecinos están confundidos con tantos números. Hay que explicarles la verdad.",
                                clue: "Un gráfico muestra ganancias imposibles."
                            }
                        ]
                    },
                    {
                        name: "Museo de Ciencias",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "El museo de ciencias de Madrid. Hoy hay una exposición sobre inventos y matemáticas divertidas.",
                        witnesses: [
                            {
                                name: "Carlos Alcántara",
                                role: "Hijo",
                                area: "Sala de inventos",
                                testimony: "He aprendido mucho sobre matemáticas y ciencia, pero no he visto a Don Pablo.",
                                clue: "Aquí solo hay experimentos y juegos."
                            },
                            {
                                name: "Pili",
                                role: "Compañera de clase",
                                area: "Taller de matemáticas",
                                testimony: "Hoy hemos hecho juegos de lógica y acertijos, pero nadie ha hablado de inversiones.",
                                clue: "Aquí solo hay diversión y aprendizaje."
                            },
                            {
                                name: "Herminia",
                                role: "Abuela",
                                area: "Cafetería",
                                testimony: "He tomado un chocolate caliente y he charlado con otras abuelas. Nada de bancos ni de papeles raros.",
                                clue: "Todo tranquilo en el museo."
                            }
                        ]
                    },
                    {
                        name: "Parque del Retiro",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "1974",
                        description: "El parque más famoso de Madrid. Hoy hay juegos y paseos en barca.",
                        witnesses: [
                            {
                                name: "Desi",
                                role: "Vecino",
                                area: "Lago",
                                testimony: "He dado un paseo en barca, pero no he visto nada raro.",
                                clue: "Aquí solo hay patos y barcas."
                            },
                            {
                                name: "Josete",
                                role: "Amigo de Carlos",
                                area: "Zona de juegos",
                                testimony: "Hoy hemos jugado al fútbol y a las canicas. Nada de bancos ni de inversiones.",
                                clue: "Solo juegos y diversión en el parque."
                            },
                            {
                                name: "Paquita",
                                role: "Vecina",
                                area: "Paseo de coches",
                                testimony: "He paseado con mi hijo, pero no he visto a Don Pablo ni a nadie sospechoso.",
                                clue: "Todo normal en el Retiro."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 