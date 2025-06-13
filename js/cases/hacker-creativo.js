const hackerCreativo = {
    culpable: "El Hacker",
    adventure: {
        step1: {
            title: "El misterio del código perdido",
            description: "¡Alerta en la Red Global de Escuelas! Un virus educativo ha sido liberado en la red escolar internacional. El hacker ha dejado pistas que sugieren que es un experto en ciberseguridad. El virus está diseñado para enseñar a los niños sobre privacidad en línea y seguridad digital. La policía cibernética sospecha que el hacker planea usar el virus para demostrar la importancia de la ciberseguridad a nivel global."
        },
        step2: {
            title: "Pistas en el aula de programación",
            description: "El aula de programación guarda secretos. Encontramos herramientas de análisis de código, manuales de seguridad digital y... ¿son esas huellas de teclado? El hacker parece conocer técnicas de programación segura y protección de datos. Los expertos están analizando las pistas para entender cómo se propagó el virus sin dañar los sistemas."
        },
        step3: {
            title: "El enigma del servidor",
            description: "En el servidor de la escuela hay documentos sobre el virus. Los archivos revelan técnicas de programación segura y secretos de ciberseguridad que podrían ayudar a los niños a proteger su información. ¡Y solo quedan 30 minutos antes de que el virus se propague a otras escuelas! Los expertos están desesperados por entender el código antes de que sea demasiado tarde."
        },
        step4: {
            title: "La búsqueda en la biblioteca digital",
            description: "Las pistas llevan a la biblioteca digital de la escuela. El hacker ha estado investigando sobre técnicas de programación segura y ciberseguridad. Los archivos contienen secretos sobre protección de datos y métodos de seguridad que podrían ayudar a los niños. ¡Hay que encontrar al hacker antes de que el virus se propague! Y los expertos están cada vez más preocupados."
        },
        step5: {
            title: "Desenlace en la Agencia de Ciberseguridad",
            description: "El hacker planea usar el virus para enseñar a los niños sobre seguridad digital. Aunque su intención es educativa, el virus podría causar problemas en los sistemas escolares. Hay que detenerlo antes de que cause problemas, pero preservando su visión de la importancia de la ciberseguridad."
        }
    },
    case: {
        startingLocation: {
            name: "Centro Global de Educación Digital",
            city: "Silicon Valley",
            country: "Estados Unidos",
            year: "2024",
            description: "El Centro Global de Educación Digital, pionero en tecnología educativa con su programa de ciberseguridad internacional, se convierte hoy en el escenario de un misterio digital. Los pasillos zumban con rumores: alguien ha liberado un virus educativo y ha dejado un reto para los más ingeniosos. El atacante parece estar combinando técnicas de programación con conocimiento de seguridad digital. ¿Serás tú quien descifre el enigma y devuelva la calma a la red global de escuelas?",
            witnesses: [
                {
                    name: "Prof. Chen",
                    role: "Profesor de Ciberseguridad",
                    area: "Aula de programación",
                    testimony: "¡Esto es un desastre! Un virus educativo ha sido liberado en la red global. Necesitamos entender cómo se propagó antes de que sea demasiado tarde.",
                    clue: "Vi a alguien con un portátil de seguridad merodeando por el servidor con documentos sobre ciberseguridad."
                },
                {
                    name: "Ana",
                    role: "Estudiante",
                    area: "Biblioteca digital",
                    testimony: "Estaba revisando los archivos sobre seguridad digital, pero algo extraño está pasando. Los archivos contienen secretos sobre protección de datos que podrían ayudar a los niños.",
                    clue: "Encontré una nota con símbolos de programación y referencias a técnicas de seguridad."
                },
                {
                    name: "Dr. Smith",
                    role: "Técnico de sistemas",
                    area: "Sala de servidores",
                    testimony: "Los expertos están completamente fuera de control. Ya están analizando las pistas. El virus podría ser parte de un plan más grande.",
                    clue: "Vi huellas de teclado cerca de los archivos. ¡Son de alguien que conoce técnicas de programación segura!"
                }
            ]
        },
        travels: [
            {
                locations: [
                    {
                        name: "Verifico la seguridad de la página web",
                        target: true,
                        description: "El hacker ha dejado pistas sobre cómo navegar de forma segura en internet. ¿Qué método de navegación deberías usar?",
                        witnesses: [
                            {
                                name: "Carlos",
                                role: "Experto en Seguridad",
                                area: "Navegación Web",
                                testimony: "Siempre usa HTTPS para navegar. Es como un túnel seguro que protege tus datos.",
                                clue: "El candado verde en la barra de direcciones indica que la conexión es segura."
                            },
                            {
                                name: "Laura",
                                role: "Profesora de Tecnología",
                                area: "Seguridad Web",
                                testimony: "Confiar en que la página se protege sola es un error común. Siempre verifica la seguridad.",
                                clue: "Las páginas sin HTTPS pueden ser interceptadas por hackers."
                            },
                            {
                                name: "Miguel",
                                role: "Analista de Redes",
                                area: "Protocolos Web",
                                testimony: "HTTP es inseguro. Tus datos viajan sin protección por la red.",
                                clue: "Cualquiera puede ver la información que envías por HTTP."
                            }
                        ]
                    },
                    {
                        name: "Creo una contraseña nueva",
                        target: false,
                        description: "El hacker ha dejado pistas sobre cómo crear contraseñas seguras. ¿Qué método deberías usar?",
                        witnesses: [
                            {
                                name: "David",
                                role: "Especialista en Contraseñas",
                                area: "Seguridad de Acceso",
                                testimony: "Usa una combinación de letras, números y símbolos. Cuanto más larga, mejor.",
                                clue: "Las contraseñas cortas son fáciles de adivinar para los hackers."
                            },
                            {
                                name: "Sofía",
                                role: "Analista de Seguridad",
                                area: "Gestión de Accesos",
                                testimony: "No uses información personal como fechas o nombres. Son fáciles de adivinar.",
                                clue: "Los hackers prueban primero información personal común."
                            },
                            {
                                name: "Roberto",
                                role: "Técnico de Sistemas",
                                area: "Autenticación",
                                testimony: "Usar la misma contraseña en todas partes es muy peligroso.",
                                clue: "Si una cuenta es hackeada, todas las demás también estarán en riesgo."
                            }
                        ]
                    },
                    {
                        name: "Comparto información en redes sociales",
                        target: false,
                        description: "El hacker ha dejado pistas sobre cómo proteger tus datos personales. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "María",
                                role: "Experta en Privacidad",
                                area: "Protección de Datos",
                                testimony: "No compartas información personal en redes sociales. Los hackers la pueden usar.",
                                clue: "La información personal es valiosa para los ciberdelincuentes."
                            },
                            {
                                name: "Javier",
                                role: "Asesor de Seguridad",
                                area: "Privacidad Digital",
                                testimony: "Configura la privacidad de tus redes sociales. No todo el mundo necesita ver tu información.",
                                clue: "La configuración de privacidad ayuda a controlar quién ve tu información."
                            },
                            {
                                name: "Elena",
                                role: "Especialista en Redes",
                                area: "Seguridad en Redes",
                                testimony: "No aceptes solicitudes de amistad de desconocidos. Podrían ser hackers.",
                                clue: "Los hackers usan perfiles falsos para acceder a información personal."
                            }
                        ]
                    }
                ]
            },
            {
                locations: [
                    {
                        name: "Reviso mi correo electrónico",
                        target: true,
                        description: "El hacker ha dejado pistas sobre cómo usar el correo electrónico de forma segura. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Dr. García",
                                role: "Experto en Comunicación Digital",
                                area: "Seguridad en Email",
                                testimony: "No abras archivos adjuntos de remitentes desconocidos. Podrían contener virus.",
                                clue: "Los virus suelen propagarse a través de archivos adjuntos en emails."
                            },
                            {
                                name: "Isabel",
                                role: "Analista de Seguridad",
                                area: "Protección de Email",
                                testimony: "Verifica siempre la dirección del remitente. Los hackers suplantan identidades.",
                                clue: "Los emails falsos suelen tener errores en la dirección del remitente."
                            },
                            {
                                name: "Antonio",
                                role: "Especialista en Comunicación",
                                area: "Seguridad Digital",
                                testimony: "No hagas clic en enlaces de emails sospechosos. Podrían llevarte a páginas maliciosas.",
                                clue: "Los enlaces en emails pueden llevar a páginas que roban información."
                            }
                        ]
                    },
                    {
                        name: "Me conecto a una red WiFi",
                        target: false,
                        description: "El hacker ha dejado pistas sobre cómo conectarte a redes WiFi de forma segura. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Carmen",
                                role: "Experta en Redes",
                                area: "Seguridad WiFi",
                                testimony: "No te conectes a redes WiFi públicas sin protección. Tus datos podrían ser interceptados.",
                                clue: "Las redes WiFi públicas son fáciles de hackear."
                            },
                            {
                                name: "Luis",
                                role: "Técnico de Redes",
                                area: "Configuración WiFi",
                                testimony: "Usa una VPN cuando te conectes a redes públicas. Cifra tu conexión.",
                                clue: "Las VPNs crean un túnel seguro para tus datos."
                            },
                            {
                                name: "Patricia",
                                role: "Analista de Seguridad",
                                area: "Protección de Redes",
                                testimony: "Verifica que la red WiFi sea la correcta. Los hackers crean redes falsas.",
                                clue: "Las redes WiFi falsas suelen tener nombres similares a las legítimas."
                            }
                        ]
                    },
                    {
                        name: "Actualizo mi dispositivo",
                        target: false,
                        description: "El hacker ha dejado pistas sobre la importancia de las actualizaciones de seguridad. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Ricardo",
                                role: "Experto en Sistemas",
                                area: "Mantenimiento de Seguridad",
                                testimony: "Mantén tu sistema operativo actualizado. Las actualizaciones arreglan fallos de seguridad.",
                                clue: "Los hackers explotan fallos de seguridad en versiones antiguas."
                            },
                            {
                                name: "Marta",
                                role: "Técnica de Sistemas",
                                area: "Actualizaciones",
                                testimony: "Actualiza tus aplicaciones regularmente. Las versiones antiguas son vulnerables.",
                                clue: "Las actualizaciones incluyen parches de seguridad importantes."
                            },
                            {
                                name: "Fernando",
                                role: "Analista de Seguridad",
                                area: "Protección de Sistemas",
                                testimony: "No ignores las actualizaciones de seguridad. Son cruciales para tu protección.",
                                clue: "Las actualizaciones retrasadas dejan tu sistema vulnerable a ataques."
                            }
                        ]
                    }
                ]
            },
            {
                waitForAllClues: true,
                locations: [
                    {
                        name: "Protejo mi dispositivo contra virus",
                        target: true,
                        description: "El hacker ha dejado pistas sobre cómo proteger tu dispositivo contra malware. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Alex",
                                role: "Experto en Malware",
                                area: "Protección de Dispositivos",
                                testimony: "Instala un antivirus confiable y mantenlo actualizado. Es tu primera línea de defensa.",
                                clue: "Los antivirus detectan y eliminan software malicioso antes de que cause daño."
                            },
                            {
                                name: "Sarah",
                                role: "Analista de Seguridad",
                                area: "Detección de Malware",
                                testimony: "No descargues software de sitios no oficiales. Podría contener malware.",
                                clue: "Los sitios oficiales son más seguros para descargar software."
                            },
                            {
                                name: "Mike",
                                role: "Técnico de Seguridad",
                                area: "Prevención de Malware",
                                testimony: "No hagas clic en anuncios sospechosos. Podrían instalar malware en tu dispositivo.",
                                clue: "Los anuncios maliciosos suelen prometer cosas demasiado buenas para ser verdad."
                            }
                        ]
                    },
                    {
                        name: "Configuro mi privacidad en redes sociales",
                        target: false,
                        description: "El hacker ha dejado pistas sobre cómo mantener seguras tus redes sociales. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "Emma",
                                role: "Experta en Redes Sociales",
                                area: "Privacidad en Redes",
                                testimony: "Revisa regularmente la configuración de privacidad de tus cuentas.",
                                clue: "Las configuraciones de privacidad cambian con las actualizaciones."
                            },
                            {
                                name: "Tom",
                                role: "Asesor de Seguridad",
                                area: "Protección de Cuentas",
                                testimony: "Activa la autenticación de dos factores. Añade una capa extra de seguridad.",
                                clue: "La autenticación de dos factores hace más difícil que alguien acceda a tu cuenta."
                            },
                            {
                                name: "Lisa",
                                role: "Analista de Redes",
                                area: "Seguridad en Redes",
                                testimony: "No compartas tu ubicación en tiempo real. Podría ser peligroso.",
                                clue: "Compartir tu ubicación puede revelar información personal sensible."
                            }
                        ]
                    },
                    {
                        name: "Bloqueo mi dispositivo",
                        target: false,
                        description: "El hacker ha dejado pistas sobre cómo proteger tus dispositivos. ¿Qué deberías hacer?",
                        witnesses: [
                            {
                                name: "John",
                                role: "Experto en Dispositivos",
                                area: "Seguridad Móvil",
                                testimony: "Bloquea tu dispositivo con un PIN o patrón. Es la primera barrera de seguridad.",
                                clue: "Un dispositivo desbloqueado es vulnerable a accesos no autorizados."
                            },
                            {
                                name: "Maria",
                                role: "Técnica de Seguridad",
                                area: "Protección de Datos",
                                testimony: "Haz copias de seguridad regulares. Protege tu información importante.",
                                clue: "Las copias de seguridad te ayudan a recuperar datos si algo sale mal."
                            },
                            {
                                name: "Peter",
                                role: "Analista de Sistemas",
                                area: "Seguridad de Dispositivos",
                                testimony: "No dejes tu dispositivo desatendido. Podría ser accedido por otros.",
                                clue: "Un dispositivo desatendido es una oportunidad para accesos no autorizados."
                            }
                        ]
                    }
                ]
            }
        ]
    }
}; 