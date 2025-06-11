// Animación de los pasos al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.flow-step').forEach(step => {
    observer.observe(step);
});

const adventureData = {
    "genio-matematico": {
        step1: {
            title: "El Caso del Código Matemático",
            description: "Un banco ha sido robado usando un sistema de seguridad basado en ecuaciones diferenciales. Miranda y el Jefe te asignan la misión de descifrar el código y encontrar al Genio de las Matemáticas."
        },
        step2: {
            title: "Pistas Numéricas",
            description: "Visita la biblioteca matemática y el observatorio astronómico. Los personajes locales te ayudarán a entender los patrones numéricos ocultos en los cálculos del ladrón."
        },
        step3: {
            title: "Análisis de Patrones",
            description: "El Genio de las Matemáticas siempre deja pistas basadas en la secuencia de Fibonacci. Analiza los patrones con la ayuda de los expertos locales."
        },
        step4: {
            title: "La Ecuación Final",
            description: "Resuelve una serie de ecuaciones diferenciales para predecir el próximo movimiento del ladrón. El Jefe revisará tus cálculos antes de autorizar la captura."
        },
        step5: {
            title: "Captura Matemática",
            description: "Usa tus habilidades matemáticas para anticipar la ruta de escape del Genio de las Matemáticas. Miranda te guiará en la operación final."
        }
    },
    "maestro-historia": {
        step1: {
            title: "El Misterio del Manuscrito",
            description: "Un valioso manuscrito histórico ha desaparecido del Museo Británico. El Jefe sospecha que el Maestro de la Historia está detrás del robo."
        },
        step2: {
            title: "Rastros del Pasado",
            description: "Investiga en museos y bibliotecas históricas. Los historiadores locales te ayudarán a entender el valor y significado del manuscrito robado."
        },
        step3: {
            title: "Pistas Históricas",
            description: "El Maestro de la Historia siempre deja pistas relacionadas con eventos históricos importantes. Analiza los patrones con la ayuda de los expertos."
        },
        step4: {
            title: "La Conexión Histórica",
            description: "Descubre la conexión entre los diferentes robos y su relación con eventos históricos clave. El Jefe necesita esta información para la captura."
        },
        step5: {
            title: "Captura Histórica",
            description: "Usa tus conocimientos históricos para predecir el próximo objetivo del Maestro de la Historia. Miranda coordinará la operación final."
        }
    },
    "cientifico-loco": {
        step1: {
            title: "El Experimento Saboteado",
            description: "Un experimento revolucionario ha sido saboteado en el Laboratorio Central. El Jefe sospecha que el Científico Loco está detrás del incidente."
        },
        step2: {
            title: "Pistas Científicas",
            description: "Investiga en laboratorios y centros de investigación. Los científicos locales te ayudarán a entender el alcance del experimento saboteado."
        },
        step3: {
            title: "Análisis Técnico",
            description: "El Científico Loco siempre deja pistas relacionadas con avances científicos. Analiza los patrones con la ayuda de los expertos."
        },
        step4: {
            title: "La Fórmula Final",
            description: "Descubre la fórmula que el Científico Loco está intentando recrear. El Jefe necesita esta información para la captura."
        },
        step5: {
            title: "Captura Científica",
            description: "Usa tus conocimientos científicos para predecir el próximo experimento del Científico Loco. Miranda coordinará la operación final."
        }
    },
    "falsificador-arte": {
        step1: {
            title: "El Arte Falsificado",
            description: "Una obra maestra ha sido sustituida por una falsificación en el Museo de Arte Moderno. El Jefe sospecha que el Falsificador de Arte está detrás del engaño."
        },
        step2: {
            title: "Pistas Artísticas",
            description: "Investiga en museos y galerías de arte. Los expertos en arte te ayudarán a identificar las técnicas de falsificación."
        },
        step3: {
            title: "Análisis Artístico",
            description: "El Falsificador de Arte siempre deja pistas en sus obras. Analiza los patrones con la ayuda de los expertos en arte."
        },
        step4: {
            title: "La Técnica Revelada",
            description: "Descubre la técnica única que usa el Falsificador de Arte. El Jefe necesita esta información para la captura."
        },
        step5: {
            title: "Captura Artística",
            description: "Usa tus conocimientos artísticos para predecir la próxima obra que falsificará. Miranda coordinará la operación final."
        }
    },
    "hacker-creativo": {
        step1: {
            title: "El Ataque Digital",
            description: "Un ataque informático ha comprometido datos de millones de usuarios. El Jefe sospecha que el Hacker Creativo está detrás del ataque."
        },
        step2: {
            title: "Pistas Digitales",
            description: "Investiga en centros de datos y empresas tecnológicas. Los expertos en ciberseguridad te ayudarán a rastrear el ataque."
        },
        step3: {
            title: "Análisis Digital",
            description: "El Hacker Creativo siempre deja pistas en el código. Analiza los patrones con la ayuda de los expertos en informática."
        },
        step4: {
            title: "El Código Revelado",
            description: "Descubre el patrón en los ataques del Hacker Creativo. El Jefe necesita esta información para la captura."
        },
        step5: {
            title: "Captura Digital",
            description: "Usa tus conocimientos informáticos para predecir el próximo objetivo del Hacker Creativo. Miranda coordinará la operación final."
        }
    },
    "influencer-falso": {
        step1: {
            title: "La Campaña Viral",
            description: "Una campaña viral ha sido saboteada por un perfil falso. El Jefe sospecha que la Influencer Falsa está detrás del engaño."
        },
        step2: {
            title: "Pistas Digitales",
            description: "Investiga en redes sociales y agencias de marketing. Los expertos en medios te ayudarán a identificar los patrones de engaño."
        },
        step3: {
            title: "Análisis de Redes",
            description: "La Influencer Falsa siempre deja pistas en sus publicaciones. Analiza los patrones con la ayuda de los expertos en redes sociales."
        },
        step4: {
            title: "El Patrón Revelado",
            description: "Descubre el patrón en las campañas falsas. El Jefe necesita esta información para la captura."
        },
        step5: {
            title: "Captura Digital",
            description: "Usa tus conocimientos en redes sociales para predecir la próxima campaña falsa. Miranda coordinará la operación final."
        }
    },
    "miranda": {
        step1: {
            title: "La Desaparición de Miranda",
            description: "Miranda ha desaparecido y se sospecha que planea su mayor golpe. El Jefe necesita tu ayuda para encontrarla."
        },
        step2: {
            title: "Pistas Globales",
            description: "Investiga en sus lugares favoritos y contactos conocidos. Los aliados internacionales te ayudarán a rastrear sus movimientos."
        },
        step3: {
            title: "Análisis de Patrones",
            description: "Miranda siempre deja pistas elaboradas. Analiza los patrones con la ayuda de los expertos internacionales."
        },
        step4: {
            title: "El Plan Revelado",
            description: "Descubre el plan maestro de Miranda. El Jefe necesita esta información para la captura final."
        },
        step5: {
            title: "Captura Final",
            description: "Usa toda tu experiencia para predecir el movimiento final de Miranda. El Jefe coordinará la operación final."
        }
    }
};

// Variables globales
let currentTravel = 0;
let currentLocation = 0;
let visitedLocations = new Set();
let currentStep = 1;

// Estructura de datos para los casos
const caseDetails = {
    "genio-matematico": {
        startingLocation: {
            name: "Cuartel General de ACME",
            city: "San Francisco",
            country: "Estados Unidos",
            year: "2024",
            description: "El Jefe te ha convocado para resolver un caso urgente. Un genio matemático está robando artefactos históricos relacionados con las matemáticas antiguas."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Biblioteca Nacional de El Cairo",
                        city: "El Cairo",
                        country: "Egipto",
                        year: "2024",
                        description: "Un antiguo papiro con ecuaciones matemáticas ha sido robado.",
                        witnesses: [
                            {
                                name: "Dr. Ahmed Hassan",
                                role: "Bibliotecario Jefe",
                                testimony: "Vi a un hombre revisando los manuscritos de álgebra árabe. Parecía muy concentrado en las ecuaciones.",
                                clue: "La ecuación que dejó escrita tenía la proporción áurea. Quizá busque lugares relacionados con patrones matemáticos.",
                                options: [
                                    {
                                        name: "Observatorio de Greenwich",
                                        city: "Londres",
                                        country: "Reino Unido",
                                        year: "2024",
                                        description: "Famoso por sus estudios astronómicos y patrones matemáticos.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Museo del Louvre",
                                        city: "París",
                                        country: "Francia",
                                        year: "2024",
                                        description: "Alberga importantes obras de arte con proporciones matemáticas.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Academia de Ciencias de Beijing",
                                        city: "Beijing",
                                        country: "China",
                                        year: "2024",
                                        description: "Centro de investigación matemática avanzada.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Sra. Fatima El-Sayed",
                                role: "Investigadora",
                                testimony: "El ladrón preguntó por libros de geometría sagrada y proporciones.",
                                clue: "Parecía fascinado por los patrones numéricos en la arquitectura antigua."
                            },
                            {
                                name: "Sr. Omar Khaled",
                                role: "Guardia de seguridad",
                                testimony: "Escuché que el ladrón mencionó algo sobre patrones en la naturaleza antes de irse.",
                                clue: "Dijo que su próximo destino sería un lugar donde se estudian los patrones matemáticos de la naturaleza."
                            }
                        ]
                    },
                    {
                        name: "Observatorio de Greenwich",
                        city: "Londres",
                        country: "Reino Unido",
                        year: "2024",
                        description: "Un antiguo telescopio con cálculos astronómicos ha sido robado.",
                        witnesses: [
                            {
                                name: "Prof. James Wilson",
                                role: "Astrónomo Jefe",
                                testimony: "El ladrón estaba fascinado con los cálculos de las órbitas planetarias y los patrones en el cielo.",
                                clue: "Preguntó por datos sobre patrones matemáticos en la naturaleza. Quizá busque fractales o secuencias en plantas.",
                                options: [
                                    {
                                        name: "Jardín Botánico de Singapur",
                                        city: "Singapur",
                                        country: "Singapur",
                                        year: "2024",
                                        description: "Famoso por sus estudios de patrones matemáticos en plantas.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Museo de Historia Natural",
                                        city: "Nueva York",
                                        country: "Estados Unidos",
                                        year: "2024",
                                        description: "Alberga importantes colecciones de fósiles y patrones naturales.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Acuario de Okinawa",
                                        city: "Okinawa",
                                        country: "Japón",
                                        year: "2024",
                                        description: "Centro de investigación de patrones marinos.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Dra. Emily Carter",
                                role: "Astrofísica",
                                testimony: "El sospechoso se interesó por los fractales en la naturaleza y la secuencia de Fibonacci.",
                                clue: "Preguntó por lugares donde se estudian patrones de crecimiento en plantas."
                            },
                            {
                                name: "Sr. Peter Brown",
                                role: "Técnico de instrumentos",
                                testimony: "Vi al ladrón tomar notas sobre la relación entre astronomía y botánica.",
                                clue: "Mencionó que su próximo objetivo estaría relacionado con la biología y las matemáticas."
                            }
                        ]
                    },
                    {
                        name: "Jardín Botánico de Singapur",
                        city: "Singapur",
                        country: "Singapur",
                        year: "2024",
                        description: "Un modelo matemático de patrones de crecimiento vegetal ha sido robado.",
                        witnesses: [
                            {
                                name: "Dra. Mei Lin",
                                role: "Botánica Jefa",
                                testimony: "El ladrón estaba obsesionado con la secuencia de Fibonacci en las plantas y los patrones de crecimiento.",
                                clue: "Dijo que necesitaba más datos sobre patrones matemáticos en la naturaleza. Quizá busque un instituto de matemáticas avanzado.",
                                options: [
                                    {
                                        name: "Instituto de Matemáticas de Princeton",
                                        city: "Princeton",
                                        country: "Estados Unidos",
                                        year: "2024",
                                        description: "Centro de investigación matemática avanzada.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Museo de Ciencias de Tokio",
                                        city: "Tokio",
                                        country: "Japón",
                                        year: "2024",
                                        description: "Alberga importantes modelos matemáticos.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Centro de Investigación de Berlín",
                                        city: "Berlín",
                                        country: "Alemania",
                                        year: "2024",
                                        description: "Instituto de estudios matemáticos avanzados.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Prof. Rajiv Patel",
                                role: "Matemático invitado",
                                testimony: "El sospechoso preguntó por la relación entre la biología y las matemáticas.",
                                clue: "Buscaba información sobre institutos de matemáticas reconocidos mundialmente."
                            },
                            {
                                name: "Sra. Nurul Aini",
                                role: "Guía del jardín",
                                testimony: "Vi al ladrón observando patrones en las hojas y tomando notas.",
                                clue: "Comentó que su próximo destino sería un centro de investigación matemática."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "maestro-historia": {
        startingLocation: {
            name: "Museo Británico",
            city: "Londres",
            country: "Reino Unido",
            year: "2024",
            description: "Un valioso manuscrito histórico ha desaparecido misteriosamente."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Museo Británico",
                        city: "Londres",
                        country: "Reino Unido",
                        year: "2024",
                        description: "El manuscrito robado contiene secretos de la antigua Roma.",
                        witnesses: [
                            {
                                name: "Dr. John Smith",
                                role: "Historiador principal",
                                testimony: "El ladrón preguntó por documentos sobre el Imperio Romano.",
                                clue: "Buscaba información sobre rutas comerciales antiguas.",
                                options: [
                                    {
                                        name: "Museo del Prado",
                                        city: "Madrid",
                                        country: "España",
                                        year: "2024",
                                        description: "Famoso por su colección de arte y documentos históricos.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Museo del Louvre",
                                        city: "París",
                                        country: "Francia",
                                        year: "2024",
                                        description: "Alberga manuscritos históricos de Europa.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Museo Egipcio",
                                        city: "El Cairo",
                                        country: "Egipto",
                                        year: "2024",
                                        description: "Especializado en historia del Antiguo Egipto.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Sra. Emily Turner",
                                role: "Guía del museo",
                                testimony: "El sospechoso se interesó por mapas antiguos y rutas comerciales.",
                                clue: "Preguntó por manuscritos de la época romana."
                            },
                            {
                                name: "Sr. David Clark",
                                role: "Vigilante",
                                testimony: "Vi al ladrón tomando notas frente a la vitrina de Roma.",
                                clue: "Parecía fascinado por los objetos de la antigua Roma."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "cientifico-loco": {
        startingLocation: {
            name: "Laboratorio Central",
            city: "Berlín",
            country: "Alemania",
            year: "2024",
            description: "Un experimento revolucionario ha sido saboteado."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Laboratorio Central",
                        city: "Berlín",
                        country: "Alemania",
                        year: "2024",
                        description: "El experimento saboteado era sobre energía renovable.",
                        witnesses: [
                            {
                                name: "Dr. Hans Weber",
                                role: "Director del laboratorio",
                                testimony: "El ladrón preguntó por los planos del reactor experimental.",
                                clue: "Buscaba información sobre energía limpia.",
                                options: [
                                    {
                                        name: "Instituto Tecnológico de Tokio",
                                        city: "Tokio",
                                        country: "Japón",
                                        year: "2024",
                                        description: "Líder en investigación tecnológica avanzada.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Universidad de Harvard",
                                        city: "Cambridge",
                                        country: "Estados Unidos",
                                        year: "2024",
                                        description: "Famosa por sus investigaciones científicas.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Centro de Investigación de París",
                                        city: "París",
                                        country: "Francia",
                                        year: "2024",
                                        description: "Especializado en física experimental.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Sra. Ingrid Müller",
                                role: "Ingeniera química",
                                testimony: "El sospechoso se interesó por los experimentos de energía solar.",
                                clue: "Preguntó por paneles solares y reactores."
                            },
                            {
                                name: "Sr. Peter Schmidt",
                                role: "Técnico de laboratorio",
                                testimony: "Vi al ladrón revisando los planos del reactor.",
                                clue: "Parecía interesado en la tecnología de energía limpia."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "falsificador-arte": {
        startingLocation: {
            name: "Museo de Arte Moderno",
            city: "Nueva York",
            country: "Estados Unidos",
            year: "2024",
            description: "Una obra maestra ha sido sustituida por una falsificación."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Museo de Arte Moderno",
                        city: "Nueva York",
                        country: "Estados Unidos",
                        year: "2024",
                        description: "La obra falsificada es de un famoso pintor español.",
                        witnesses: [
                            {
                                name: "Sra. Laura González",
                                role: "Curadora de arte",
                                testimony: "El ladrón preguntó por la técnica de pintura original.",
                                clue: "Buscaba información sobre pigmentos y firmas de artistas.",
                                options: [
                                    {
                                        name: "Museo del Prado",
                                        city: "Madrid",
                                        country: "España",
                                        year: "2024",
                                        description: "Famoso por su colección de arte español.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Galería Uffizi",
                                        city: "Florencia",
                                        country: "Italia",
                                        year: "2024",
                                        description: "Especializada en arte renacentista.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Museo de Arte de São Paulo",
                                        city: "São Paulo",
                                        country: "Brasil",
                                        year: "2024",
                                        description: "Importante colección de arte latinoamericano.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Sr. Michael Brown",
                                role: "Restaurador",
                                testimony: "El sospechoso se interesó por los materiales originales de la obra.",
                                clue: "Preguntó por pigmentos y barnices antiguos."
                            },
                            {
                                name: "Sra. Ana Torres",
                                role: "Guía del museo",
                                testimony: "Vi al ladrón observando las firmas de los cuadros.",
                                clue: "Parecía comparar las firmas con una lupa."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "hacker-creativo": {
        startingLocation: {
            name: "Centro de Datos Global",
            city: "Silicon Valley",
            country: "Estados Unidos",
            year: "2024",
            description: "Un ataque informático ha comprometido datos de millones de usuarios."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Centro de Datos Global",
                        city: "Silicon Valley",
                        country: "Estados Unidos",
                        year: "2024",
                        description: "El hacker dejó un mensaje en código binario.",
                        witnesses: [
                            {
                                name: "Alex Kim",
                                role: "Administrador de sistemas",
                                testimony: "El hacker preguntó por los servidores más antiguos.",
                                clue: "Buscaba vulnerabilidades en sistemas obsoletos.",
                                options: [
                                    {
                                        name: "Universidad de Cambridge",
                                        city: "Cambridge",
                                        country: "Reino Unido",
                                        year: "2024",
                                        description: "Famosa por su historia en informática.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Instituto Politécnico de Milán",
                                        city: "Milán",
                                        country: "Italia",
                                        year: "2024",
                                        description: "Reconocido por su ingeniería informática.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Universidad de Buenos Aires",
                                        city: "Buenos Aires",
                                        country: "Argentina",
                                        year: "2024",
                                        description: "Importante centro de desarrollo tecnológico.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Morgan Lee",
                                role: "Analista de seguridad",
                                testimony: "El sospechoso se interesó por los firewalls antiguos.",
                                clue: "Preguntó por sistemas sin actualizar."
                            },
                            {
                                name: "Jamie Chen",
                                role: "Técnico de redes",
                                testimony: "Vi al hacker revisando cables y conexiones físicas.",
                                clue: "Parecía buscar puntos de acceso olvidados."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "influencer-falso": {
        startingLocation: {
            name: "Agencia de Publicidad",
            city: "Los Ángeles",
            country: "Estados Unidos",
            year: "2024",
            description: "Una campaña viral ha sido saboteada por un perfil falso."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Agencia de Publicidad",
                        city: "Los Ángeles",
                        country: "Estados Unidos",
                        year: "2024",
                        description: "El perfil falso difundió información errónea sobre una marca famosa.",
                        witnesses: [
                            {
                                name: "Jessica White",
                                role: "Directora de cuentas",
                                testimony: "El sospechoso preguntó por los influencers más populares.",
                                clue: "Buscaba cuentas con muchos seguidores y poca verificación.",
                                options: [
                                    {
                                        name: "Oficinas de Instagram",
                                        city: "San Francisco",
                                        country: "Estados Unidos",
                                        year: "2024",
                                        description: "Centro de operaciones de la red social.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Agencia de Medios de París",
                                        city: "París",
                                        country: "Francia",
                                        year: "2024",
                                        description: "Especializada en campañas digitales europeas.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Estudios de TV Globo",
                                        city: "Río de Janeiro",
                                        country: "Brasil",
                                        year: "2024",
                                        description: "Importante centro de medios latinoamericano.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Carlos Méndez",
                                role: "Community manager",
                                testimony: "El sospechoso se interesó por cuentas con seguidores falsos.",
                                clue: "Preguntó por perfiles con actividad sospechosa."
                            },
                            {
                                name: "Samantha Lee",
                                role: "Analista de datos",
                                testimony: "Vi al sospechoso revisando estadísticas de engagement.",
                                clue: "Parecía buscar cuentas con picos de actividad inusual."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "miranda": {
        startingLocation: {
            name: "Residencia de Miranda",
            city: "Venecia",
            country: "Italia",
            year: "2024",
            description: "Miranda ha desaparecido y se sospecha que planea su mayor golpe."
        },
        travels: [
            {
                name: "Primer Viaje",
                locations: [
                    {
                        name: "Residencia de Miranda",
                        city: "Venecia",
                        country: "Italia",
                        year: "2024",
                        description: "La casa está llena de pistas falsas y trampas.",
                        witnesses: [
                            {
                                name: "Inspector Rossi",
                                role: "Policía local",
                                testimony: "Miranda dejó mensajes en clave por toda la casa.",
                                clue: "Algunos mensajes parecen indicar un próximo golpe en una ciudad de canales.",
                                options: [
                                    {
                                        name: "Museo del Prado",
                                        city: "Madrid",
                                        country: "España",
                                        year: "2024",
                                        description: "Famoso por su colección de arte.",
                                        isCorrect: false
                                    },
                                    {
                                        name: "Galería de la Academia",
                                        city: "Venecia",
                                        country: "Italia",
                                        year: "2024",
                                        description: "Importante galería de arte veneciano.",
                                        isCorrect: true
                                    },
                                    {
                                        name: "Museo de Orsay",
                                        city: "París",
                                        country: "Francia",
                                        year: "2024",
                                        description: "Museo de arte impresionista.",
                                        isCorrect: false
                                    }
                                ]
                            },
                            {
                                name: "Sra. Lucia Bianchi",
                                role: "Vecina",
                                testimony: "Vi a Miranda salir con una maleta y un mapa de Europa.",
                                clue: "El mapa tenía marcada la ciudad de Venecia."
                            },
                            {
                                name: "Sr. Marco Verdi",
                                role: "Conserje",
                                testimony: "Miranda preguntó por horarios de trenes a París y Madrid.",
                                clue: "Parecía interesada en museos de arte europeo."
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

const wrongLocationResponses = {
    "genio-matematico": {
        "Museo del Louvre": {
            witnesses: [
                {
                    name: "Claire Dubois",
                    role: "Guía de arte",
                    testimony: "No he visto a nadie interesado en matemáticas, solo en las obras de arte.",
                    clue: "Aquí la gente viene a admirar pinturas, no a resolver ecuaciones."
                },
                {
                    name: "Jean Morel",
                    role: "Vigilante nocturno",
                    testimony: "Nadie ha pedido acceso a la sala de proporciones matemáticas.",
                    clue: "No se han consultado libros ni documentos sobre matemáticas en este museo."
                },
                {
                    name: "Sophie Martin",
                    role: "Estudiante de arte",
                    testimony: "He estado toda la tarde dibujando y no he visto nada raro.",
                    clue: "Las obras aquí no muestran signos de haber sido analizadas matemáticamente."
                }
            ]
        },
        "Academia de Ciencias de Beijing": {
            witnesses: [
                {
                    name: "Li Wei",
                    role: "Investigador junior",
                    testimony: "No hemos recibido visitantes extranjeros últimamente.",
                    clue: "Nadie ha preguntado por manuscritos matemáticos antiguos."
                },
                {
                    name: "Chen Yu",
                    role: "Recepcionista",
                    testimony: "Hoy solo han venido estudiantes locales a la academia.",
                    clue: "No se han solicitado permisos para acceder a la biblioteca de matemáticas."
                },
                {
                    name: "Wang Fang",
                    role: "Profesor de matemáticas",
                    testimony: "No he visto a nadie sospechoso en los pasillos.",
                    clue: "Los laboratorios han permanecido cerrados y sin incidentes."
                }
            ]
        },
        "Museo de Historia Natural": {
            witnesses: [
                {
                    name: "Emily Clark",
                    role: "Guía de exposiciones",
                    testimony: "Hoy solo hemos tenido visitas escolares.",
                    clue: "Nadie se ha interesado por la sección de patrones matemáticos en la naturaleza."
                },
                {
                    name: "Robert Evans",
                    role: "Encargado de seguridad",
                    testimony: "No se han reportado robos ni comportamientos extraños.",
                    clue: "Las cámaras no han detectado movimientos inusuales en las salas de matemáticas."
                },
                {
                    name: "Linda Foster",
                    role: "Investigadora científica",
                    testimony: "He estado trabajando en fósiles todo el día.",
                    clue: "No he visto a nadie consultando libros de matemáticas o patrones."
                }
            ]
        },
        "Acuario de Okinawa": {
            witnesses: [
                {
                    name: "Haruto Tanaka",
                    role: "Biólogo marino",
                    testimony: "Solo hemos recibido turistas y familias.",
                    clue: "Nadie ha preguntado por patrones matemáticos en los peces o corales."
                },
                {
                    name: "Yui Nakamura",
                    role: "Guía del acuario",
                    testimony: "No he visto a nadie tomando notas extrañas.",
                    clue: "Las visitas han sido normales, sin interés en matemáticas."
                },
                {
                    name: "Satoshi Ito",
                    role: "Encargado de mantenimiento",
                    testimony: "Todo ha estado en orden en los tanques y laboratorios.",
                    clue: "No se han detectado actividades sospechosas en las áreas de investigación."
                }
            ]
        },
        "Museo de Ciencias de Tokio": {
            witnesses: [
                {
                    name: "Mika Suzuki",
                    role: "Guía científica",
                    testimony: "Hoy solo hemos hecho talleres para niños.",
                    clue: "Nadie ha mostrado interés en los modelos matemáticos."
                },
                {
                    name: "Takashi Yamamoto",
                    role: "Vigilante",
                    testimony: "No se han producido incidentes ni robos.",
                    clue: "Las vitrinas de matemáticas están intactas."
                },
                {
                    name: "Ayumi Kobayashi",
                    role: "Estudiante visitante",
                    testimony: "He estado en la sala de física toda la mañana.",
                    clue: "No he visto a nadie investigando ecuaciones o patrones."
                }
            ]
        },
        "Centro de Investigación de Berlín": {
            witnesses: [
                {
                    name: "Anna Müller",
                    role: "Recepcionista",
                    testimony: "No hemos tenido visitantes internacionales hoy.",
                    clue: "Nadie ha solicitado acceso a los archivos matemáticos."
                },
                {
                    name: "Lukas Schmidt",
                    role: "Investigador",
                    testimony: "He estado en el laboratorio todo el día.",
                    clue: "No se han detectado movimientos extraños en la zona de matemáticas."
                },
                {
                    name: "Sophie Bauer",
                    role: "Bibliotecaria",
                    testimony: "La sala de lectura ha estado tranquila.",
                    clue: "No se han consultado libros de patrones matemáticos."
                }
            ]
        }
    }
    // ... resto de los casos
};

// Función para mezclar un array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function updateCaseDetails() {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const locationsGrid = document.querySelector('.locations-grid');
    const data = caseDetails[selectedCriminal];
    
    // Limpiar el grid de ubicaciones
    locationsGrid.innerHTML = '';
    
    // Mostrar la ubicación inicial
    const startingLocation = document.createElement('div');
    startingLocation.className = 'location-card';
    startingLocation.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🏢</div>
            <h5>${data.startingLocation.name}</h5>
        </div>
        <p class="location-description">${data.startingLocation.description}</p>
        <div class="location-info">
            <p><strong>Ciudad:</strong> ${data.startingLocation.city}</p>
            <p><strong>País:</strong> ${data.startingLocation.country}</p>
            <p><strong>Año:</strong> ${data.startingLocation.year}</p>
        </div>
        <button class="travel-button" onclick="startTravel()">Iniciar Viaje</button>
    `;
    
    locationsGrid.appendChild(startingLocation);
}

function startTravel() {
    // Ocultar el botón 'Iniciar Viaje' si existe
    const travelBtn = document.querySelector('.travel-button');
    if (travelBtn) {
        travelBtn.style.display = 'none';
    }

    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = caseDetails[selectedCriminal];
    
    if (!data || !data.travels || !data.travels[currentTravel]) {
        console.error('No hay datos de viaje disponibles');
        return;
    }

    const travel = data.travels[currentTravel];
    const location = travel.locations[currentLocation];
    
    if (location) {
        showLocation(location);
    } else {
        console.error('No hay ubicación disponible');
    }
}

function showLocation(location) {
    const locationsGrid = document.querySelector('.locations-grid');
    const locationElement = document.createElement('div');
    locationElement.className = 'location-card correct';
    
    let witnessesHTML = '';
    if (location.witnesses && Array.isArray(location.witnesses)) {
        witnessesHTML = `
            <div class="witnesses-container">
                <div class="witnesses">
                    ${location.witnesses.map(witness => `
                        <div class="witness">
                            <h5>${witness.area}</h5>
                            <div class="clues-section">
                                <button class="clue-button" onclick="this.nextElementSibling.style.display = 'block'; this.style.display = 'none'">
                                    Ver Pista
                                </button>
                                <div class="clue-content" style="display: none;">
                                    <div class="witness-id"><strong>${witness.name}</strong> - ${witness.role}</div>
                                    <div class="clue-text">${witness.clue}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let optionsHTML = '';
    if (location.witnesses && location.witnesses[0] && location.witnesses[0].options) {
        const availableOptions = location.witnesses[0].options.filter(option => 
            !visitedLocations.has(`${option.name}-${option.city}-${option.country}`)
        );
        
        if (availableOptions.length > 0) {
            optionsHTML = `
                <div class="location-options">
                    <h6>¿A dónde irás ahora?</h6>
                    <div class="options-container">
                        <div class="options-grid">
                            ${shuffleArray([...availableOptions]).map(option => `
                                <div class="location-option ${option.isCorrect ? 'correct' : 'incorrect'}" onclick="selectLocation(this)">
                                    <h6>${option.name}</h6>
                                    <p>${option.description}</p>
                                    <div class="location-info">
                                        <p><strong>Ciudad:</strong> ${option.city}</p>
                                        <p><strong>País:</strong> ${option.country}</p>
                                        <p><strong>Año:</strong> ${option.year}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            optionsHTML = `
                <div class="location-options">
                    <h6>No hay más lugares disponibles para visitar</h6>
                </div>
            `;
        }
    }

    locationElement.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🏛️</div>
            <h4>${location.name}</h4>
        </div>
        <p class="location-description">${location.description}</p>
        <div class="location-info">
            <p><strong>Ciudad:</strong> ${location.city}</p>
            <p><strong>País:</strong> ${location.country}</p>
            <p><strong>Año:</strong> ${location.year}</p>
        </div>
        ${witnessesHTML}
        ${optionsHTML}
    `;
    
    locationsGrid.appendChild(locationElement);
    visitedLocations.add(`${location.name}-${location.city}-${location.country}`);
    locationElement.scrollIntoView({ behavior: 'smooth' });
}

function showWrongLocation(optionElement) {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = caseDetails[selectedCriminal];
    let travel = data.travels[currentTravel];
    let wrongLocation = null;
    let witnesses = [];
    
    // Obtener datos del destino seleccionado
    const destName = optionElement.querySelector('h6').textContent.replace(' (actual)', '').trim();
    const destCity = optionElement.querySelector('.location-info p:nth-child(1)').textContent.replace('Ciudad:', '').trim();
    const destCountry = optionElement.querySelector('.location-info p:nth-child(2)').textContent.replace('País:', '').trim();
    
    if (travel && travel.locations[currentLocation]) {
        const options = travel.locations[currentLocation].witnesses[0].options;
        wrongLocation = options.find(opt => opt.name === destName);
        if (wrongLocation && wrongLocationResponses[selectedCriminal] && wrongLocationResponses[selectedCriminal][wrongLocation.name]) {
            witnesses = wrongLocationResponses[selectedCriminal][wrongLocation.name].witnesses || [];
        }
    }
    
    const wrongLocationCard = document.createElement('div');
    wrongLocationCard.className = 'location-card wrong';
    
    let witnessesHTML = '';
    if (witnesses.length > 0) {
        witnessesHTML = `
            <div class="witnesses-container">
                <div class="witnesses">
                    ${witnesses.map(witness => `
                        <div class="witness">
                            <h5>${witness.area}</h5>
                            <div class="clues-section">
                                <button class="clue-button" onclick="this.nextElementSibling.style.display = 'block'; this.style.display = 'none'">
                                    Ver Pista
                                </button>
                                <div class="clue-content" style="display: none;">
                                    <div class="witness-id"><strong>${witness.name}</strong> - ${witness.role}</div>
                                    <div class="clue-text">${witness.clue}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    wrongLocationCard.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🏛️</div>
            <h4>${wrongLocation ? wrongLocation.name : 'Ubicación Incorrecta'}</h4>
        </div>
        <p class="location-description">${wrongLocation ? wrongLocation.description : 'Esta no es la ubicación correcta. Revisa las pistas nuevamente y elige otra opción.'}</p>
        <div class="location-info">
            <p><strong>Ciudad:</strong> ${wrongLocation ? wrongLocation.city : destCity}</p>
            <p><strong>País:</strong> ${wrongLocation ? wrongLocation.country : destCountry}</p>
            <p><strong>Año:</strong> ${wrongLocation ? wrongLocation.year : '2024'}</p>
        </div>
        ${witnessesHTML}
    `;
    
    const locationsGrid = document.querySelector('.locations-grid');
    locationsGrid.appendChild(wrongLocationCard);
    visitedLocations.add(`${destName}-${destCity}-${destCountry}`);
    wrongLocationCard.scrollIntoView({ behavior: 'smooth' });

    // Mostrar las opciones restantes
    if (travel && travel.locations[currentLocation] && travel.locations[currentLocation].witnesses[0].options) {
        const optionsSection = document.createElement('div');
        optionsSection.className = 'location-options';
        const availableOptions = travel.locations[currentLocation].witnesses[0].options.filter(option => 
            !visitedLocations.has(`${option.name}-${option.city}-${option.country}`)
        );
        
        if (availableOptions.length > 0) {
            optionsSection.innerHTML = `
                <h6>¿A dónde irás ahora?</h6>
                <div class="options-container">
                    <div class="options-grid">
                        ${shuffleArray([...availableOptions]).map(option => `
                            <div class="location-option ${option.isCorrect ? 'correct' : 'incorrect'}" onclick="selectLocation(this)">
                                <h6>${option.name}</h6>
                                <p>${option.description}</p>
                                <div class="location-info">
                                    <p><strong>Ciudad:</strong> ${option.city}</p>
                                    <p><strong>País:</strong> ${option.country}</p>
                                    <p><strong>Año:</strong> ${option.year}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            optionsSection.innerHTML = `
                <h6>No hay más lugares disponibles para visitar</h6>
            `;
        }
        locationsGrid.appendChild(optionsSection);
    }
}

function selectLocation(optionElement) {
    const isCorrect = optionElement.classList.contains('correct');
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = caseDetails[selectedCriminal];
    const travel = data.travels[currentTravel];
    const currentLoc = travel.locations[currentLocation];
    
    // Obtener datos del destino
    const destName = optionElement.querySelector('h6').textContent.replace(' (actual)', '').trim();
    const destCity = optionElement.querySelector('.location-info p:nth-child(1)').textContent.replace('Ciudad:', '').trim();
    const destCountry = optionElement.querySelector('.location-info p:nth-child(2)').textContent.replace('País:', '').trim();
    
    // Si el destino es el lugar actual, no hacer nada
    if (
        destName === currentLoc.name &&
        destCity === currentLoc.city &&
        destCountry === currentLoc.country
    ) {
        return;
    }
    
    if (isCorrect) {
        currentLocation++;
        if (currentLocation >= data.travels[currentTravel].locations.length) {
            currentTravel++;
            currentLocation = 0;
            if (currentTravel >= data.travels.length) {
                // Caso completado
                showCaseComplete();
                return;
            }
        }
        startTravel();
    } else {
        showWrongLocation(optionElement);
    }
}

function showCaseComplete() {
    const completeCard = document.createElement('div');
    completeCard.className = 'location-card complete';
    completeCard.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🎉</div>
            <h5>¡Caso Resuelto!</h5>
        </div>
        <p class="location-description">¡Felicidades! Has resuelto el caso y capturado al ladrón.</p>
        <button class="restart-button" onclick="restartCase()">Iniciar Nuevo Caso</button>
    `;
    
    const locationsGrid = document.querySelector('.locations-grid');
    locationsGrid.appendChild(completeCard);
    completeCard.scrollIntoView({ behavior: 'smooth' });
}

function restartCase() {
    currentTravel = 0;
    currentLocation = 0;
    visitedLocations.clear(); // Limpiar las ubicaciones visitadas al reiniciar
    updateCaseDetails();
}

function fadeOutCurrentPage(callback) {
    const currentPage = document.querySelector('.page.active');
    if (currentPage) {
        currentPage.classList.add('fade-out');
        setTimeout(() => {
            currentPage.classList.remove('fade-out');
            if (callback) callback();
        }, 400); // Debe coincidir con la duración de la animación CSS
    } else {
        if (callback) callback();
    }
}

function goToStep(stepNumber) {
    // Activar la pestaña visualmente de inmediato
    document.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.classList.remove('active');
        if (parseInt(bookmark.dataset.step) === stepNumber) {
            bookmark.classList.add('active');
        }
    });
    // Luego fade-out y cambio de contenido
    fadeOutCurrentPage(() => {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            if (parseInt(page.dataset.step) === stepNumber) {
                page.classList.add('active');
            }
        });
    });
}

function updateAdventureSteps() {
    fadeOutCurrentPage(() => {
        const selectedCriminal = document.getElementById('criminalSelect').value;
        const data = adventureData[selectedCriminal];
        if (data) {
            // Actualizar el contenido de las páginas
            for (let i = 1; i <= 5; i++) {
                const stepData = data[`step${i}`];
                if (stepData) {
                    document.getElementById(`step${i}Title`).textContent = stepData.title;
                    document.getElementById(`step${i}Description`).textContent = stepData.description;
                }
            }
            // Reiniciar al primer paso con animación
            goToStep(1);
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el libro
    updateAdventureSteps();
    updateCaseDetails();
    
    // Manejar clic en marcapáginas
    document.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.addEventListener('click', () => {
            const stepNumber = parseInt(bookmark.dataset.step);
            goToStep(stepNumber);
        });
    });
    
    // Manejar cambio en el select
    const book = document.querySelector('.book');
    const criminalSelect = document.getElementById('criminalSelect');

    criminalSelect.addEventListener('change', () => {
        currentTravel = 0;
        currentLocation = 0;
        visitedLocations.clear();

        // Clonar el dossier actual
        const bookClone = book.cloneNode(true);
        bookClone.classList.add('dossier-slide-out');
        bookClone.style.position = 'absolute';
        bookClone.style.top = book.offsetTop + 'px';
        bookClone.style.left = book.offsetLeft + 'px';
        bookClone.style.width = book.offsetWidth + 'px';
        bookClone.style.height = book.offsetHeight + 'px';
        bookClone.style.zIndex = 100;
        bookClone.style.margin = 0;
        bookClone.style.padding = 0;
        book.parentNode.appendChild(bookClone);

        // Preparar el dossier real para la entrada
        const selectedCriminal = criminalSelect.value;
        book.setAttribute('data-criminal', selectedCriminal);
        updateAdventureSteps();
        updateCaseDetails();
        book.classList.add('dossier-pre-enter');

        // Lanzar ambas animaciones a la vez
        setTimeout(() => {
            book.classList.remove('dossier-pre-enter');
            book.classList.add('dossier-slide-in');
        }, 10);

        setTimeout(() => {
            book.classList.remove('dossier-slide-in');
            if (bookClone.parentNode) bookClone.parentNode.removeChild(bookClone);
        }, 810);
    });

    // Mostrar detalles del caso al pulsar el botón
    const showCaseDetailsBtn = document.getElementById('showCaseDetailsBtn');
    if (showCaseDetailsBtn) {
        showCaseDetailsBtn.addEventListener('click', () => {
            startTravel();
            showCaseDetailsBtn.style.display = 'none';
        });
    }
});

// ASIGNACIÓN DE ZONAS PERSONALIZADAS Y REVISIÓN DE TEXTOS DE TESTIGOS
(function() {
    // Diccionario de zonas personalizadas por lugar
    const zonasPorLugar = {
        // Genio matemático
        'Biblioteca Nacional de El Cairo': ['Recepción', 'Sala de Manuscritos', 'Archivo Antiguo'],
        'Observatorio de Greenwich': ['Cúpula Principal', 'Sala de Telescopios', 'Archivo Astronómico'],
        'Jardín Botánico de Singapur': ['Entrada', 'Invernadero Tropical', 'Zona de Investigación'],
        // Maestro historia
        'Museo Británico': ['Vestíbulo', 'Galería Romana', 'Archivo Histórico'],
        // Científico loco
        'Laboratorio Central': ['Recepción', 'Laboratorio de Energía', 'Sala de Planos'],
        // Falsificador arte
        'Museo de Arte Moderno': ['Sala de Exposiciones', 'Taller de Restauración', 'Archivo de Obras'],
        // Hacker creativo
        'Centro de Datos Global': ['Recepción', 'Sala de Servidores', 'Oficina de Seguridad'],
        // Influencer falso
        'Agencia de Publicidad': ['Recepción', 'Sala de Creatividad', 'Oficina de Cuentas'],
        // Miranda
        'Residencia de Miranda': ['Vestíbulo', 'Despacho', 'Jardín Interior'],
        // Otros posibles lugares erróneos
        'Museo del Louvre': ['Galería Principal', 'Sala de Esculturas', 'Archivo de Arte'],
        'Academia de Ciencias de Beijing': ['Entrada Principal', 'Sala de Conferencias', 'Laboratorio de Investigación'],
        'Museo de Historia Natural': ['Vestíbulo', 'Sala de Fósiles', 'Archivo Científico'],
        'Acuario de Okinawa': ['Entrada', 'Tanque Principal', 'Laboratorio Marino'],
        'Museo de Ciencias de Tokio': ['Vestíbulo', 'Sala de Matemáticas', 'Archivo de Modelos'],
        'Centro de Investigación de Berlín': ['Recepción', 'Laboratorio de Matemáticas', 'Biblioteca'],
        'Museo del Prado': ['Vestíbulo', 'Galería de Pintura', 'Archivo de Obras'],
        'Galería Uffizi': ['Entrada', 'Sala Renacentista', 'Archivo de Arte'],
        'Museo de Arte de São Paulo': ['Vestíbulo', 'Galería Latinoamericana', 'Archivo de Arte'],
        'Universidad de Cambridge': ['Entrada', 'Sala de Informática', 'Archivo Académico'],
        'Instituto Politécnico de Milán': ['Vestíbulo', 'Laboratorio de Ingeniería', 'Archivo Técnico'],
        'Universidad de Buenos Aires': ['Recepción', 'Sala de Tecnología', 'Archivo de Proyectos'],
        'Agencia de Medios de París': ['Recepción', 'Sala de Campañas', 'Oficina Creativa'],
        'Estudios de TV Globo': ['Vestíbulo', 'Plató Principal', 'Archivo de Medios'],
        'Galería de la Academia': ['Entrada', 'Sala Veneciana', 'Archivo de Arte'],
        'Museo de Orsay': ['Vestíbulo', 'Galería Impresionista', 'Archivo de Obras'],
        'Centro de Investigación de París': ['Recepción', 'Laboratorio de Física', 'Archivo Experimental'],
        'Instituto Tecnológico de Tokio': ['Vestíbulo', 'Laboratorio de Tecnología', 'Archivo de Innovación'],
        'Universidad de Harvard': ['Entrada', 'Sala de Ciencias', 'Archivo Académico'],
        'Museo Egipcio': ['Vestíbulo', 'Sala Egipcia', 'Archivo de Antigüedades'],
        'Museo de Arte Moderno de Nueva York': ['Vestíbulo', 'Galería Moderna', 'Archivo de Arte'],
        'Oficinas de Instagram': ['Recepción', 'Sala de Redes', 'Oficina de Estrategia']
    };
    // Asignar zonas a caseDetails
    Object.values(caseDetails).forEach(caso => {
        if (caso.travels) {
            caso.travels.forEach(travel => {
                travel.locations.forEach(location => {
                    let zonas = zonasPorLugar[location.name] || ['Zona 1', 'Zona 2', 'Zona 3'];
                    if (Array.isArray(location.witnesses)) {
                        location.witnesses.forEach((w, i) => {
                            w.area = zonas[i % zonas.length];
                        });
                    }
                });
            });
        }
    });
    // Asignar zonas a wrongLocationResponses
    Object.values(wrongLocationResponses).forEach(casos => {
        Object.entries(casos).forEach(([lugar, datos]) => {
            let zonas = zonasPorLugar[lugar] || ['Zona 1', 'Zona 2', 'Zona 3'];
            if (Array.isArray(datos.witnesses)) {
                datos.witnesses.forEach((w, i) => {
                    w.area = zonas[i % zonas.length];
                });
            }
        });
    });
    // Revisión de textos: aquí podrías añadir más lógica para ajustar testimonios y pistas si detectas repeticiones o incoherencias.
})();

(function() {
    // Diccionario de descripciones culturales por lugar
    const descripcionesViaje = {
        'Biblioteca Nacional de El Cairo': 'La Biblioteca Nacional de El Cairo resguarda manuscritos milenarios y es un tesoro de la historia árabe.',
        'Observatorio de Greenwich': 'Desde el Observatorio de Greenwich se define el meridiano cero y se estudian los cielos desde hace siglos.',
        'Jardín Botánico de Singapur': 'El Jardín Botánico de Singapur es famoso por su colección de orquídeas y su biodiversidad tropical.',
        'Museo Británico': 'El Museo Británico alberga más de ocho millones de objetos de todo el mundo.',
        'Laboratorio Central': 'El Laboratorio Central es pionero en investigaciones sobre energías renovables y tecnología avanzada.',
        'Museo de Arte Moderno': 'El Museo de Arte Moderno de Nueva York exhibe obras de los artistas más influyentes del siglo XX.',
        'Centro de Datos Global': 'El Centro de Datos Global en Silicon Valley almacena información crítica para empresas de todo el planeta.',
        'Agencia de Publicidad': 'La Agencia de Publicidad de Los Ángeles diseña campañas para las marcas más reconocidas.',
        'Residencia de Miranda': 'La residencia de Miranda en Venecia está llena de secretos y pasadizos ocultos.',
        'Museo del Louvre': 'El Museo del Louvre en París es el hogar de la Mona Lisa y miles de obras maestras.',
        'Academia de Ciencias de Beijing': 'La Academia de Ciencias de Beijing lidera la investigación científica en China.',
        'Museo de Historia Natural': 'El Museo de Historia Natural de Nueva York es famoso por sus esqueletos de dinosaurios y exposiciones interactivas.',
        'Acuario de Okinawa': 'El Acuario de Okinawa alberga el tanque de agua más grande de Japón y especies marinas únicas.',
        'Museo de Ciencias de Tokio': 'El Museo de Ciencias de Tokio inspira a jóvenes científicos con sus exhibiciones interactivas.',
        'Centro de Investigación de Berlín': 'El Centro de Investigación de Berlín es referente en matemáticas y física en Europa.',
        'Museo del Prado': 'El Museo del Prado en Madrid es conocido por su colección de pinturas de Goya y Velázquez.',
        'Galería Uffizi': 'La Galería Uffizi de Florencia es una de las pinacotecas más antiguas y famosas del mundo.',
        'Museo de Arte de São Paulo': 'El MASP destaca por su arquitectura moderna y su colección de arte latinoamericano.',
        'Universidad de Cambridge': 'La Universidad de Cambridge ha formado a algunos de los científicos más importantes de la historia.',
        'Instituto Politécnico de Milán': 'El Politécnico de Milán es líder en ingeniería y diseño en Europa.',
        'Universidad de Buenos Aires': 'La UBA es una de las universidades más prestigiosas de América Latina.',
        'Agencia de Medios de París': 'La Agencia de Medios de París crea campañas digitales para toda Europa.',
        'Estudios de TV Globo': 'TV Globo es el mayor productor de televisión de Brasil.',
        'Galería de la Academia': 'La Galería de la Academia en Venecia alberga obras maestras del arte veneciano.',
        'Museo de Orsay': 'El Museo de Orsay en París es famoso por su colección de arte impresionista.',
        'Centro de Investigación de París': 'El Centro de Investigación de París impulsa la innovación científica en Francia.',
        'Instituto Tecnológico de Tokio': 'El Instituto Tecnológico de Tokio es referente en robótica y tecnología.',
        'Universidad de Harvard': 'Harvard es la universidad más antigua de Estados Unidos y un centro de excelencia académica.',
        'Museo Egipcio': 'El Museo Egipcio de El Cairo alberga la mayor colección de antigüedades faraónicas.',
        'Museo de Arte Moderno de Nueva York': 'El MoMA es un icono del arte contemporáneo mundial.',
        'Oficinas de Instagram': 'Las oficinas de Instagram en San Francisco son el corazón de la red social visual más popular.'
    };
    // Añadir travelDescription a caseDetails
    Object.values(caseDetails).forEach(caso => {
        if (caso.travels) {
            caso.travels.forEach(travel => {
                travel.locations.forEach(location => {
                    location.travelDescription = descripcionesViaje[location.name] || '';
                });
            });
        }
    });
    // Añadir travelDescription a wrongLocationResponses
    Object.values(wrongLocationResponses).forEach(casos => {
        Object.entries(casos).forEach(([lugar, datos]) => {
            datos.travelDescription = descripcionesViaje[lugar] || '';
        });
    });
})(); 