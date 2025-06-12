const hombreMagico = {
    culpable: "Jorge Ponce",
    adventure: {
        step1: {
            title: "El misterio del Hombre Mágico desaparecido",
            description: "El Hombre Mágico ha desaparecido justo antes de la hora de irse a la cama. Los niños están empezando a volverse salvajes como los parvulitos de la Banda del Patio. ¡Tienes que encontrarlo antes de las 22:00 o será un caos total!"
        },
        step2: {
            title: "Pistas en el plató",
            description: "El plató de La Revuelta está patas arriba. Hay pistas por todas partes: un sombrero de mago, una varita mágica rota y... ¿son esas huellas de zapatillas de deporte? ¡Jorge Ponce siempre lleva zapatillas!"
        },
        step3: {
            title: "El enigma del camerino",
            description: "En el camerino del Hombre Mágico hay un mapa extraño. Parece que Jorge Ponce ha planeado algo grande. ¡Y solo quedan 30 minutos antes de las 22:00!"
        },
        step4: {
            title: "La búsqueda en el almacén",
            description: "Las pistas llevan al almacén de RTVE. Jorge Ponce ha escondido al Hombre Mágico entre los decorados. ¡Hay que encontrarlo antes de que los niños se vuelvan completamente salvajes!"
        },
        step5: {
            title: "¡Rescate a tiempo!",
            description: "¡Solo quedan 5 minutos! Jorge Ponce está a punto de conseguir su objetivo: que los niños nunca se vayan a la cama. ¿Podrás rescatar al Hombre Mágico y devolver la calma a La Revuelta?"
        }
    },
    case: {
        startingLocation: {
            name: "Plató de La Revuelta",
            city: "Madrid",
            country: "España",
            year: "2024",
            description: "El plató está en caos. Los niños corren por todas partes, los presentadores están desesperados y el Hombre Mágico ha desaparecido. ¡Solo quedan 45 minutos antes de las 22:00!",
            witnesses: [
                {
                    name: "Cristina Pardo",
                    role: "Presentadora",
                    area: "Escenario principal",
                    testimony: "¡Esto es un desastre! El Hombre Mágico tenía que aparecer hace 10 minutos. Los niños están empezando a volverse salvajes.",
                    clue: "Vi a Jorge Ponce merodeando por el camerino del Hombre Mágico."
                },
                {
                    name: "Jordi Cruz",
                    role: "Presentador",
                    area: "Cocina",
                    testimony: "Estaba preparando un postre mágico con el Hombre Mágico, pero desapareció. Y ahora los niños están comiendo azúcar a puñados.",
                    clue: "Encontré una nota con la letra de Jorge Ponce."
                },
                {
                    name: "Berta Collado",
                    role: "Presentadora",
                    area: "Zona de juegos",
                    testimony: "Los niños están completamente fuera de control. Necesitamos al Hombre Mágico para calmarlos.",
                    clue: "Vi huellas de zapatillas de deporte cerca del camerino."
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
                                testimony: "Yo no he visto nada. Estaba... eh... revisando mi peinado.",
                                clue: "Sus zapatillas tienen manchas de polvo mágico."
                            },
                            {
                                name: "Cristina Pardo",
                                role: "Presentadora",
                                area: "Armario",
                                testimony: "Aquí guardaba el Hombre Mágico sus trucos. Algo no cuadra...",
                                clue: "Falta el mapa de los decorados."
                            },
                            {
                                name: "Jordi Cruz",
                                role: "Presentador",
                                area: "Silla de maquillaje",
                                testimony: "El Hombre Mágico nunca deja sus cosas así de desordenadas.",
                                clue: "Hay una nota con números y símbolos mágicos."
                            }
                        ]
                    },
                    {
                        name: "Cocina de La Revuelta",
                        target: false,
                        city: "Madrid",
                        country: "España",
                        year: "2024",
                        description: "La cocina está llena de niños comiendo azúcar. Sin el Hombre Mágico, nadie puede controlarlos.",
                        witnesses: [
                            {
                                name: "Berta Collado",
                                role: "Presentadora",
                                area: "Nevera",
                                testimony: "Estaba buscando algo saludable para los niños, pero...",
                                clue: "Todo está lleno de dulces."
                            },
                            {
                                name: "Jordi Cruz",
                                role: "Presentador",
                                area: "Fogones",
                                testimony: "No puedo cocinar con tanto alboroto.",
                                clue: "Los niños están comiendo azúcar a puñados."
                            },
                            {
                                name: "Cristina Pardo",
                                role: "Presentadora",
                                area: "Alacena",
                                testimony: "Necesitamos al Hombre Mágico para calmarlos.",
                                clue: "Hay una receta de magia en la alacena."
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
                                testimony: "Yo solo vine a... eh... revisar los decorados.",
                                clue: "Tiene un mapa con marcas rojas."
                            },
                            {
                                name: "Cristina Pardo",
                                role: "Presentadora",
                                area: "Cajas de trucos",
                                testimony: "Aquí guardamos todos los trucos del Hombre Mágico.",
                                clue: "Falta la caja de trucos principal."
                            },
                            {
                                name: "Berta Collado",
                                role: "Presentadora",
                                area: "Sección de disfraces",
                                testimony: "Los niños están cada vez más salvajes. ¡Necesitamos al Hombre Mágico!",
                                clue: "Hay un disfraz de mago escondido."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 