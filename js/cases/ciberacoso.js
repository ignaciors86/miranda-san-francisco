const ciberacoso = {
    culpable: "El Hombre de Valor",
    adventure: {
        step1: {
            title: "El Grupo Secreto",
            description: "¡Alerta en el colegio! Un grupo de mensajería se ha convertido en el centro de una tormenta digital. Los estudiantes están siendo testigos de cómo algunos compañeros comparten contenido tóxico y excluyen a otros. ¿Podrás investigar quién está detrás de esta situación y aprender sobre la importancia de la empatía digital?"
        },
        step2: {
            title: "Pistas en las Redes",
            description: "Las redes sociales están llenas de pistas sobre quién está manipulando la situación. Los investigadores buscan patrones de comportamiento y mensajes que puedan revelar la identidad del culpable. Las pruebas sugieren que alguien está usando su influencia para promover una visión tóxica de la masculinidad."
        },
        step3: {
            title: "El Enigma de la Imagen",
            description: "Un video viral ha comenzado a circular por el colegio. Los registros muestran cómo se ha difundido y quién podría estar detrás. Tu misión: analizar el patrón de difusión, identificar el origen y entender el impacto de compartir contenido que promueve la toxicidad."
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
            description: "Eres un estudiante del colegio Las Encinas, donde recientemente se ha desatado una ola de ciberacoso a través de grupos de mensajería y redes sociales. Un grupo de estudiantes está siendo excluido y ridiculizado por no seguir ciertos estereotipos, y las pruebas apuntan a que hay alguien detrás de todo esto, manipulando la situación para ganar popularidad. ¿Podrás investigar quién está causando este daño y aprender sobre la importancia de la empatía digital?",
            witnesses: [
                {
                    name: "Dani",
                    role: "Estudiante",
                    area: "Biblioteca",
                    testimony: "He notado que desde que empezó a circular ese grupo de mensajería, algunos compañeros me evitan por no seguir sus 'reglas de masculinidad'. Me siento excluido y no sé qué hacer. Por cierto, ¿has visto a ese influencer que siempre anda con su equipo de grabación? Parece que le encanta crear drama con sus videos...",
                    clue: "La tecnología puede unir o dividir, depende de cómo la usemos"
                },
                {
                    name: "Vera",
                    role: "Estudiante",
                    area: "Aula de Informática",
                    testimony: "Alguien está usando mis fotos editadas para burlarse de mí por no seguir sus estándares. Me siento terrible. ¿Sabes? He visto a ese influencer que siempre anda con su micrófono, parece que le encanta crear contenido viral sin importar a quién afecte...",
                    clue: "Las redes sociales pueden ser un arma de doble filo"
                },
                {
                    name: "Álvaro",
                    role: "Estudiante",
                    area: "Patio",
                    testimony: "Un video mío se está compartiendo por todos los grupos con comentarios tóxicos. Me siento violado. Por cierto, ¿has visto a ese influencer que siempre anda con su cámara? Parece que le encanta crear contenido sin importar las consecuencias...",
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
                        description: "Te sientas a revisar cuidadosamente los mensajes del grupo. Notas un patrón: alguien está manipulando las conversaciones para crear conflictos basados en estereotipos tóxicos. Los estudiantes que pasan por el aula te miran con aprobación...",
                        witnesses: [
                            {
                                name: "Profesor de Informática",
                                role: "Docente",
                                area: "Aula",
                                testimony: "He notado un aumento en el tráfico de la red. Alguien está usando mucho ancho de banda para subir videos. Por cierto, ¿has visto a ese influencer que siempre anda con su equipo de grabación? Parece que le encanta crear contenido viral...",
                                clue: "La tecnología debe usarse con responsabilidad"
                            },
                            {
                                name: "Monitor de Biblioteca",
                                role: "Personal",
                                area: "Biblioteca",
                                testimony: "He visto a alguien grabando constantemente en el colegio. Siempre anda con su micrófono y su equipo de iluminación. Parece que le encanta crear drama para sus redes sociales...",
                                clue: "El contenido viral no justifica el daño a otros"
                            },
                            {
                                name: "Estudiante de Programación",
                                role: "Compañero",
                                area: "Aula de Informática",
                                testimony: "He notado que los videos que se comparten siempre tienen el mismo estilo de edición. Alguien está usando técnicas profesionales para hacerlos más impactantes...",
                                clue: "Los patrones de edición pueden revelar al creador"
                            }
                        ]
                    },
                    {
                        name: "Revisar historial de navegación",
                        target: false,
                        description: "Decides revisar el historial de navegación, pero no encuentras nada relevante. Los técnicos te miran con decepción y murmuran que necesitas enfocar mejor tu investigación. Un estudiante pasa y comenta: 'Para encontrar al culpable, mejor analiza directamente los mensajes del grupo...'",
                        witnesses: [
                            {
                                name: "Técnico de Red",
                                role: "Personal",
                                area: "Sala de Servidores",
                                testimony: "El historial está limpio, pero eso no significa nada. Los verdaderos culpables son más listos...",
                                clue: "Esta no es la pista correcta"
                            },
                            {
                                name: "Profesor de Ética",
                                role: "Docente",
                                area: "Aula",
                                testimony: "Estás perdiendo el tiempo. Deberías centrarte en lo que realmente importa...",
                                clue: "Enfócate en los mensajes directos"
                            },
                            {
                                name: "Estudiante de Psicología",
                                role: "Compañero",
                                area: "Biblioteca",
                                testimony: "Necesitas ir a la fuente del problema. Los patrones están en los mensajes...",
                                clue: "Los mensajes son la clave"
                            }
                        ]
                    },
                    {
                        name: "Buscar en redes sociales",
                        target: false,
                        description: "Decides investigar perfiles de redes sociales al azar, pero te pierdes en la inmensidad de contenido. Los estudiantes te miran confundidos y uno comenta: '¿No deberías empezar por revisar los mensajes del grupo donde empezó todo?' Te das cuenta de que necesitas un enfoque más directo.",
                        witnesses: [
                            {
                                name: "Bibliotecario",
                                role: "Personal",
                                area: "Biblioteca",
                                testimony: "Veo que estás perdido en las redes. Para una investigación efectiva, necesitas empezar por los hechos concretos...",
                                clue: "Las redes son demasiado extensas para empezar"
                            },
                            {
                                name: "Estudiante Observador",
                                role: "Compañero",
                                area: "Aula de Informática",
                                testimony: "Mi consejo: empieza por los mensajes del grupo. Ahí está la evidencia real...",
                                clue: "Los mensajes del grupo son el punto de partida"
                            },
                            {
                                name: "Consejero Estudiantil",
                                role: "Personal",
                                area: "Despacho",
                                testimony: "Para resolver un caso de ciberacoso, debes ir directamente a donde ocurrió: el grupo de mensajes...",
                                clue: "La investigación debe ser específica y directa"
                            }
                        ]
                    },
                    {
                        name: "Ignorar la situación",
                        target: false,
                        description: "Decides no involucrarte en el asunto. Los estudiantes te miran con desaprobación. Uno se acerca y te susurra: '¿Sabes? Hay un influencer que empezó así, ignorando el daño que causaba... y ahora nadie confía en él. Está solo, sin amigos, sin seguidores reales...'",
                        witnesses: [
                            {
                                name: "Estudiante Afectado",
                                role: "Compañero",
                                area: "Pasillo",
                                testimony: "Ignorar el ciberacoso es como ser cómplice. ¿Sabes? He visto a ese influencer que siempre anda grabando, parece que le encanta crear drama sin importar a quién afecte...",
                                clue: "La indiferencia también es una forma de violencia"
                            },
                            {
                                name: "Orientador",
                                role: "Personal",
                                area: "Despacho",
                                testimony: "Cada vez que alguien ignora estas situaciones, el problema crece. Necesitamos personas valientes que se enfrenten a esto...",
                                clue: "La pasividad permite que el problema crezca"
                            },
                            {
                                name: "Padre de Estudiante",
                                role: "Familiar",
                                area: "Recepción",
                                testimony: "Mi hijo ha cambiado desde que empezó a ver esos videos. Alguien tiene que hacer algo...",
                                clue: "El impacto va más allá del colegio"
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
                                testimony: "Hay un dispositivo que está consumiendo mucho ancho de banda. Siempre anda subiendo contenido a las redes sociales. Por cierto, ¿has visto a ese influencer que siempre anda con su equipo de grabación? Parece que le encanta crear drama...",
                                clue: "Las huellas digitales no mienten"
                            },
                            {
                                name: "Analista de Datos",
                                role: "Consultor",
                                area: "Oficina",
                                testimony: "Los patrones de subida coinciden con los horarios de grabación de un canal de YouTube. Es muy sospechoso...",
                                clue: "Los patrones temporales pueden ser reveladores"
                            },
                            {
                                name: "Experto en Redes",
                                role: "Asesor",
                                area: "Sala de Servidores",
                                testimony: "El ancho de banda que está usando sugiere que está subiendo videos de alta calidad. Alguien con equipo profesional...",
                                clue: "La calidad del contenido puede indicar recursos"
                            }
                        ]
                    },
                    {
                        name: "Analizar contenido viral",
                        target: false,
                        description: "Te enfocas en analizar videos virales en general, pero te pierdes en contenido irrelevante. Los técnicos te sugieren que te centres en datos más concretos. Un compañero comenta: 'Para encontrar al culpable, deberías revisar los logs de red, ahí están las huellas digitales reales...'",
                        witnesses: [
                            {
                                name: "Editor de Video",
                                role: "Profesional",
                                area: "Sala de Medios",
                                testimony: "Estás analizando demasiado contenido general. Necesitas ser más específico en tu búsqueda...",
                                clue: "Enfócate en datos más específicos"
                            },
                            {
                                name: "Psicólogo Digital",
                                role: "Consultor",
                                area: "Biblioteca",
                                testimony: "El análisis de contenido es útil, pero primero necesitas identificar la fuente. Los logs te darán esa información...",
                                clue: "Los logs son la base de la investigación"
                            },
                            {
                                name: "Experto en Redes Sociales",
                                role: "Asesor",
                                area: "Aula de Informática",
                                testimony: "Sin datos técnicos sólidos, tu análisis será superficial. Empieza por los registros de red...",
                                clue: "Los datos técnicos son fundamentales"
                            }
                        ]
                    },
                    {
                        name: "Investigar comentarios",
                        target: false,
                        description: "Te sumerges en los comentarios de redes sociales, pero hay demasiados y no encuentras un patrón claro. Los analistas te advierten que sin datos técnicos base, esto es como buscar una aguja en un pajar. 'Deberías empezar por los logs de red', te sugiere un técnico, 'ahí están las pistas reales.'",
                        witnesses: [
                            {
                                name: "Moderador de Redes",
                                role: "Profesional",
                                area: "Sala de Medios",
                                testimony: "Los comentarios pueden ser engañosos. Necesitas datos más sólidos para empezar tu investigación...",
                                clue: "Los comentarios son secundarios a los datos técnicos"
                            },
                            {
                                name: "Analista de Sentimientos",
                                role: "Consultor",
                                area: "Biblioteca",
                                testimony: "Sin conocer la fuente original, analizar comentarios es inútil. Primero identifica quién está subiendo el contenido...",
                                clue: "Identifica la fuente antes que los efectos"
                            },
                            {
                                name: "Experto en Comunicación",
                                role: "Asesor",
                                area: "Aula de Informática",
                                testimony: "Estás empezando por el final. Los logs de red te dirán quién está detrás de todo esto...",
                                clue: "Empieza por la investigación técnica"
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
                        description: "Decides organizar una asamblea escolar para presentar tus hallazgos. Los estudiantes se reúnen expectantes. Mientras preparas la presentación, alguien menciona que hay un influencer que está intentando crear más drama, pero nadie quiere participar en sus videos. 'Era una persona brillante', dicen, 'pero se obsesionó con los likes y los seguidores. Ahora está solo, sin amigos, sin seguidores reales...'",
                        witnesses: [
                            {
                                name: "Directora",
                                role: "Autoridad",
                                area: "Salón de Actos",
                                testimony: "La tecnología debe usarse para unir, no para dividir. Por cierto, ¿has visto a ese influencer que siempre anda con su equipo de grabación? Parece que le encanta crear drama sin importar las consecuencias...",
                                clue: "La verdad siempre sale a la luz"
                            },
                            {
                                name: "Psicólogo Escolar",
                                role: "Profesional",
                                area: "Despacho",
                                testimony: "El impacto de este tipo de contenido en los jóvenes es devastador. Necesitamos actuar...",
                                clue: "Las consecuencias psicológicas son graves"
                            },
                            {
                                name: "Experto en Educación",
                                role: "Consultor",
                                area: "Biblioteca",
                                testimony: "Este tipo de situaciones requieren un enfoque educativo. Los estudiantes necesitan herramientas para enfrentarse a esto...",
                                clue: "La educación es la mejor arma"
                            }
                        ]
                    },
                    {
                        name: "Confrontar al influencer",
                        target: false,
                        description: "Decides enfrentarte directamente sin preparación. La confrontación se vuelve caótica y el influencer logra manipular la situación a su favor, creando más drama. Los estudiantes murmuran que necesitabas un plan más estructurado. 'Deberías haber organizado una asamblea con todas las pruebas', comenta un profesor.",
                        witnesses: [
                            {
                                name: "Estudiante Afectado",
                                role: "Víctima",
                                area: "Pasillo",
                                testimony: "La confrontación directa solo empeoró las cosas. Ahora tengo más miedo...",
                                clue: "Las confrontaciones improvisadas pueden backfire"
                            },
                            {
                                name: "Testigo",
                                role: "Compañero",
                                area: "Patio",
                                testimony: "Sin un plan estructurado, él te manipuló. Una asamblea habría sido mejor...",
                                clue: "La planificación es clave para el éxito"
                            },
                            {
                                name: "Ex Colaborador",
                                role: "Antiguo Asistente",
                                area: "Biblioteca",
                                testimony: "Conozco sus tácticas. Necesitabas apoyo institucional para enfrentarlo correctamente...",
                                clue: "El apoyo institucional es necesario"
                            }
                        ]
                    },
                    {
                        name: "Documentar pruebas",
                        target: false,
                        description: "Te obsesionas con documentar cada detalle pero no tomas acción. Mientras recopilas pruebas infinitamente, la situación empeora y más estudiantes resultan afectados. Los profesores te advierten que las víctimas necesitan acción inmediata. 'Las pruebas sirven de poco si no las presentas públicamente en una asamblea', te dice la directora.",
                        witnesses: [
                            {
                                name: "Experto en Derecho Digital",
                                role: "Asesor",
                                area: "Biblioteca",
                                testimony: "Documentar es importante, pero la inacción permite que continúe el daño. Necesitas presentar las pruebas ya...",
                                clue: "La acción es tan importante como la evidencia"
                            },
                            {
                                name: "Analista de Redes",
                                role: "Profesional",
                                area: "Sala de Servidores",
                                testimony: "Tienes suficientes pruebas desde hace tiempo. El análisis paralelo no ayuda a las víctimas...",
                                clue: "No caigas en parálisis por análisis"
                            },
                            {
                                name: "Experto en Ética Digital",
                                role: "Consultor",
                                area: "Aula de Informática",
                                testimony: "La ética no solo es sobre tener razón, sino sobre actuar cuando se necesita. Organiza la asamblea ya...",
                                clue: "La acción ética requiere valor para actuar"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 