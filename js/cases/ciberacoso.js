const ciberacoso = {
    culpable: "La Influencer",
    adventure: {
        step1: {
            title: "El Grupo Secreto",
            description: "¡Alerta en el colegio! Un grupo de mensajería se ha convertido en el centro de una tormenta digital. Los estudiantes están siendo testigos de cómo algunos compañeros comparten memes ofensivos y excluyen a otros. ¿Podrás investigar quién está detrás de esta situación y aprender sobre la importancia de la empatía digital?"
        },
        step2: {
            title: "Pistas en las Redes",
            description: "Las redes sociales están llenas de pistas sobre quién está manipulando la situación. Los investigadores buscan patrones de comportamiento y mensajes que puedan revelar la identidad del culpable. Las pruebas sugieren que alguien está usando su influencia para crear división entre los estudiantes."
        },
        step3: {
            title: "El Enigma de la Imagen",
            description: "Una foto comprometedora ha comenzado a circular por el colegio. Los registros muestran cómo se ha difundido y quién podría estar detrás. Tu misión: analizar el patrón de difusión, identificar el origen y entender el impacto de compartir contenido sin consentimiento."
        },
        step4: {
            title: "Viaje al Centro de Medios",
            description: "Las pistas te llevan al centro de medios del colegio, donde se enseña el uso responsable de la tecnología. Planeas organizar un taller sobre ética digital, pero necesitas encontrar pruebas contundentes. Tu reto: demostrar cómo la tecnología puede unir en lugar de dividir."
        },
        step5: {
            title: "Desenlace en la Asamblea Digital",
            description: "Planeas presentar tu investigación en una asamblea escolar. Tu objetivo final: utilizar todas las pruebas recopiladas para exponer al culpable y enseñar a todos la importancia de la responsabilidad digital."
        }
    },
    case: {
        startingLocation: {
            name: "Colegio Las Encinas",
            city: "Madrid",
            country: "España",
            year: "2024",
            description: "Eres un estudiante del colegio Las Encinas, donde recientemente se ha desatado una ola de ciberacoso a través de grupos de mensajería y redes sociales. Un grupo de estudiantes está siendo excluido y ridiculizado, y las pruebas apuntan a que hay alguien detrás de todo esto, manipulando la situación para ganar popularidad. ¿Podrás investigar quién está causando este daño y aprender sobre la importancia de la empatía digital?",
            witnesses: [
                {
                    name: "Dani",
                    role: "Estudiante",
                    area: "Biblioteca",
                    testimony: "He notado que desde que empezó a circular ese grupo de mensajería, algunos compañeros me evitan. Me siento excluido y no sé qué hacer. Por cierto, ¿has visto a esa influencer que siempre anda con su teléfono grabando? Parece que le encanta crear drama...",
                    clue: "La tecnología puede unir o dividir, depende de cómo la usemos"
                },
                {
                    name: "Vera",
                    role: "Estudiante",
                    area: "Aula de Informática",
                    testimony: "Alguien está usando mis fotos editadas para burlarse de mí. Me siento terrible. ¿Sabes? He visto a esa influencer que siempre anda con su equipo de grabación, parece que le encanta crear contenido viral sin importar a quién afecte...",
                    clue: "Las redes sociales pueden ser un arma de doble filo"
                },
                {
                    name: "Álvaro",
                    role: "Estudiante",
                    area: "Patio",
                    testimony: "Una foto mía se está compartiendo por todos los grupos. Me siento violado. Por cierto, ¿has visto a esa influencer que siempre anda con su cámara? Parece que le encanta crear contenido sin importar las consecuencias...",
                    clue: "El consentimiento digital es fundamental"
                }
            ]
        },
        travels: [
            {
                name: "Paso 1: Investiga el Grupo",
                description: "Estás en el aula de informática, revisando los mensajes del grupo. ¿Qué haces?",
                locations: [
                    {
                        name: "Analizar mensajes",
                        target: true,
                        description: "Te sientas a revisar cuidadosamente los mensajes del grupo. Notas un patrón: alguien está manipulando las conversaciones para crear conflictos. Los estudiantes que pasan por el aula te miran con aprobación...",
                        witnesses: [
                            {
                                name: "Profesor de Informática",
                                role: "Docente",
                                area: "Aula",
                                testimony: "He notado un aumento en el tráfico de la red. Alguien está usando mucho ancho de banda para subir videos. Por cierto, ¿has visto a esa influencer que siempre anda con su equipo de grabación? Parece que le encanta crear contenido viral...",
                                clue: "La tecnología debe usarse con responsabilidad"
                            },
                            {
                                name: "Monitor de Biblioteca",
                                role: "Personal",
                                area: "Biblioteca",
                                testimony: "He visto a alguien grabando constantemente en el colegio. Siempre anda con su teléfono y su equipo de iluminación. Parece que le encanta crear drama para sus redes sociales...",
                                clue: "El contenido viral no justifica el daño a otros"
                            }
                        ]
                    },
                    {
                        name: "Ignorar la situación",
                        target: false,
                        description: "Decides no involucrarte en el asunto. Los estudiantes te miran con desaprobación. Uno se acerca y te susurra: '¿Sabes? Hay una influencer que empezó así, ignorando el daño que causaba... y ahora nadie confía en ella. Está sola, sin amigos, sin seguidores reales...'",
                        witnesses: [
                            {
                                name: "Estudiante",
                                role: "Compañero",
                                area: "Pasillo",
                                testimony: "Ignorar el ciberacoso es como ser cómplice. ¿Sabes? He visto a esa influencer que siempre anda grabando, parece que le encanta crear drama sin importar a quién afecte...",
                                clue: "La indiferencia también es una forma de violencia"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Paso 2: Sigue las Pistas Digitales",
                description: "Estás en la sala de medios, analizando el tráfico de red. ¿Qué haces?",
                locations: [
                    {
                        name: "Revisar logs",
                        target: true,
                        description: "Te pones a revisar los registros de red. Descubres que hay un dispositivo que está subiendo constantemente videos y fotos. Los técnicos te miran con aprobación...",
                        witnesses: [
                            {
                                name: "Técnico de Red",
                                role: "Personal",
                                area: "Sala de Servidores",
                                testimony: "Hay un dispositivo que está consumiendo mucho ancho de banda. Siempre anda subiendo contenido a las redes sociales. Por cierto, ¿has visto a esa influencer que siempre anda con su equipo de grabación? Parece que le encanta crear drama...",
                                clue: "Las huellas digitales no mienten"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Paso 3: Enfrenta la Verdad",
                description: "Has encontrado pruebas contundentes. ¿Qué haces?",
                locations: [
                    {
                        name: "Organizar asamblea",
                        target: true,
                        description: "Decides organizar una asamblea escolar para presentar tus hallazgos. Los estudiantes se reúnen expectantes. Mientras preparas la presentación, alguien menciona que hay una influencer que está intentando crear más drama, pero nadie quiere participar en sus videos. 'Era una persona brillante', dicen, 'pero se obsesionó con los likes y los seguidores. Ahora está sola, sin amigos, sin seguidores reales...'",
                        witnesses: [
                            {
                                name: "Directora",
                                role: "Autoridad",
                                area: "Salón de Actos",
                                testimony: "La tecnología debe usarse para unir, no para dividir. Por cierto, ¿has visto a esa influencer que siempre anda con su equipo de grabación? Parece que le encanta crear drama sin importar las consecuencias...",
                                clue: "La verdad siempre sale a la luz"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 