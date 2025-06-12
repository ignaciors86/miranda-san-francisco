const hombreMagico = {
    culpable: "Jorge Ponce",
    adventure: {
        step1: {
            title: "El misterio del Hombre Mágico desaparecido",
            description: "El Hombre Mágico ha desaparecido justo antes de la hora de irse a la cama. Los presentadores están desesperados porque el programa se está yendo al traste. ¡Tienes que encontrarlo antes de las 22:00 o el programa será un desastre total! Y lo peor: Jorge Ponce anda suelto por el plató con una sonrisa sospechosa..."
        },
        step2: {
            title: "Pistas en el plató",
            description: "El plató de La Revuelta está patas arriba. Hay pistas por todas partes: un sombrero de mago, una varita mágica rota y... ¿son esas huellas de zapatillas de deporte? ¡Jorge Ponce siempre lleva zapatillas! Y los presentadores están cada vez más nerviosos..."
        },
        step3: {
            title: "El enigma del camerino",
            description: "En el camerino del Hombre Mágico hay un mapa extraño. Parece que Jorge Ponce ha planeado algo grande. ¡Y solo quedan 30 minutos antes de las 22:00! Los presentadores ya están empezando a improvisar..."
        },
        step4: {
            title: "La búsqueda en el almacén",
            description: "Las pistas llevan al almacén de RTVE. Jorge Ponce ha escondido al Hombre Mágico entre los decorados. ¡Hay que encontrarlo antes de que el programa se vaya al traste! Y los presentadores están desesperados..."
        },
        step5: {
            title: "¡Rescate a tiempo!",
            description: "¡Solo quedan 5 minutos! Jorge Ponce está a punto de conseguir su objetivo: que el programa sea un desastre. ¿Podrás rescatar al Hombre Mágico y salvar La Revuelta antes de que sea demasiado tarde?"
        }
    },
    case: {
        startingLocation: {
            name: "Plató de La Revuelta",
            city: "Madrid",
            country: "España",
            year: "2024",
            description: "El plató está en caos. Los presentadores están desesperados y el Hombre Mágico ha desaparecido. ¡Solo quedan 45 minutos antes de las 22:00!",
            witnesses: [
                {
                    name: "David Broncano",
                    role: "Presentador",
                    area: "Escenario principal",
                    testimony: "¡Esto es un desastre! El Hombre Mágico tenía que aparecer hace 10 minutos. El programa se está yendo al traste y los espectadores se van a quedar sin su momento mágico antes de irse a la cama. ¡Necesitamos encontrarlo antes de las 22:00!",
                    clue: "Vi a Jorge Ponce merodeando por el camerino del Hombre Mágico con una sonrisa sospechosa."
                },
                {
                    name: "Grison",
                    role: "Presentador",
                    area: "Cocina",
                    testimony: "Estaba preparando un truco mágico con el Hombre Mágico, pero desapareció. Y ahora el programa se está yendo al traste. ¡Necesitamos encontrarlo antes de que sea demasiado tarde!",
                    clue: "Encontré una nota con la letra de Jorge Ponce y manchas de polvo mágico."
                },
                {
                    name: "Ricardo Castella",
                    role: "Presentador",
                    area: "Zona de juegos",
                    testimony: "Los presentadores están completamente fuera de control. Ya están empezando a improvisar. ¡Necesitamos al Hombre Mágico para salvar el programa!",
                    clue: "Vi huellas de zapatillas de deporte cerca del camerino. ¡Son las de Jorge Ponce!"
                }
            ]
        },
        travels: [
            // Paso 1
            {
                locations: [
                    {
                        name: "Camerino del Hombre Mágico",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "El camerino está revuelto. Hay pistas por todas partes: un sombrero de mago, una varita rota y... ¿son esas las zapatillas de Jorge Ponce?",
                        witnesses: [
                            {
                                name: "Jorge Ponce",
                                role: "Sospechoso principal",
                                area: "Espejo",
                                testimony: "Yo solo vine a... eh... revisar mi peinado. ¿Qué? ¿No puedo preocuparme por mi imagen?",
                                clue: "Sus zapatillas tienen manchas de polvo mágico y una sonrisa sospechosa."
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Presentador",
                                area: "Armario",
                                testimony: "Aquí guardaba el Hombre Mágico sus trucos. Algo no cuadra... ¡Falta el mapa de los decorados!",
                                clue: "Hay una nota con números y símbolos mágicos."
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Colaborador",
                                area: "Silla de maquillaje",
                                testimony: "El Hombre Mágico nunca deja sus cosas así de desordenadas. ¡Y mira, hay polvo mágico por todas partes!",
                                clue: "Las huellas de zapatillas llevan hacia el almacén."
                            }
                        ]
                    },
                    {
                        name: "Cocina de La Revuelta",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "La cocina está llena de presentadores desesperados. Sin el Hombre Mágico, nadie puede salvar el programa.",
                        witnesses: [
                            {
                                name: "Grison",
                                role: "Presentador",
                                area: "Nevera",
                                testimony: "Estaba buscando algo para el truco mágico, pero... ¡Todo está lleno de polvo mágico!",
                                clue: "Hay una receta de magia en la alacena."
                            },
                            {
                                name: "David Broncano",
                                role: "Presentador",
                                area: "Fogones",
                                testimony: "No puedo presentar con tanto alboroto. ¡El programa se está yendo al traste!",
                                clue: "Hay una nota con la letra de Jorge Ponce."
                            },
                            {
                                name: "Ernesto Sevilla",
                                role: "Colaborador",
                                area: "Alacena",
                                testimony: "Necesitamos al Hombre Mágico para salvar el programa. ¡Ya estamos improvisando!",
                                clue: "Hay polvo mágico en los estantes."
                            }
                        ]
                    },
                    {
                        name: "Zona de juegos",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "Los presentadores están completamente fuera de control. Ya están empezando a improvisar.",
                        witnesses: [
                            {
                                name: "Ricardo Castella",
                                role: "Presentador",
                                area: "Colchonetas",
                                testimony: "¡Esto es un desastre! Los presentadores están cada vez más nerviosos. ¡Necesitamos al Hombre Mágico!",
                                clue: "Hay huellas de zapatillas en las colchonetas."
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Presentador",
                                area: "Juegos",
                                testimony: "No puedo controlar la situación. ¡El programa se está yendo al traste!",
                                clue: "Hay polvo mágico en los juguetes."
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Colaborador",
                                area: "Pizarra",
                                testimony: "Los presentadores están dibujando símbolos mágicos en la pizarra. ¡Necesitamos al Hombre Mágico!",
                                clue: "Hay una nota con la letra de Jorge Ponce."
                            }
                        ]
                    }
                ]
            },
            // Paso 2
            {
                locations: [
                    {
                        name: "Almacén de RTVE",
                        target: true,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "El almacén está lleno de decorados y objetos mágicos. ¡Solo quedan 20 minutos!",
                        witnesses: [
                            {
                                name: "Jorge Ponce",
                                role: "Sospechoso principal",
                                area: "Sección de magia",
                                testimony: "Yo solo vine a... eh... revisar los decorados. ¿Qué? ¿No puedo ser meticuloso?",
                                clue: "Tiene un mapa con marcas rojas y una sonrisa sospechosa."
                            },
                            {
                                name: "David Broncano",
                                role: "Presentador",
                                area: "Cajas de trucos",
                                testimony: "Aquí guardamos todos los trucos del Hombre Mágico. ¡Falta la caja principal!",
                                clue: "Hay polvo mágico por todas partes."
                            },
                            {
                                name: "Ernesto Sevilla",
                                role: "Colaborador",
                                area: "Sección de disfraces",
                                testimony: "Los presentadores están cada vez más nerviosos. ¡Necesitamos al Hombre Mágico!",
                                clue: "Hay un disfraz de mago escondido."
                            }
                        ]
                    },
                    {
                        name: "Sala de control",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "La sala de control está llena de cámaras. ¡Podemos ver todo el plató!",
                        witnesses: [
                            {
                                name: "Grison",
                                role: "Presentador",
                                area: "Pantallas",
                                testimony: "¡Mira! ¡Jorge Ponce está en el almacén!",
                                clue: "Hay una nota con la letra de Jorge Ponce."
                            },
                            {
                                name: "Ricardo Castella",
                                role: "Presentador",
                                area: "Controles",
                                testimony: "Los presentadores están cada vez más nerviosos. ¡Necesitamos al Hombre Mágico!",
                                clue: "Hay polvo mágico en los controles."
                            },
                            {
                                name: "Sergio Bezos",
                                role: "Presentador",
                                area: "Micrófonos",
                                testimony: "¡Escucha! ¡Los presentadores están improvisando!",
                                clue: "Hay huellas de zapatillas en el suelo."
                            }
                        ]
                    },
                    {
                        name: "Vestuario",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "El vestuario está lleno de disfraces y objetos mágicos.",
                        witnesses: [
                            {
                                name: "David Broncano",
                                role: "Presentador",
                                area: "Armarios",
                                testimony: "¡Mira! ¡Falta el disfraz del Hombre Mágico!",
                                clue: "Hay una nota con la letra de Jorge Ponce."
                            },
                            {
                                name: "Grison",
                                role: "Presentador",
                                area: "Espejos",
                                testimony: "Los presentadores están cada vez más nerviosos. ¡Necesitamos al Hombre Mágico!",
                                clue: "Hay polvo mágico en los espejos."
                            },
                            {
                                name: "Pablo Ibarburu",
                                role: "Colaborador",
                                area: "Sillas",
                                testimony: "¡Mira! ¡Hay huellas de zapatillas!",
                                clue: "Las huellas llevan hacia el almacén."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 