import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
            inicio: 'INICIO',
            nosotros: 'NOSOTROS',
            pilares: 'PILARES',
            productos: 'PRODUCTOS',
            contacto: 'CONTACTO',
            languageButton: 'PG',
            headerTitle: 'Desarrollo y Fabricación de Módulos para Iluminación y Electrónica',
            aboutText: `Nos especializamos en el desarrollo y la fabricación de Módulos de Electrónica, Módulos Led y Componentes para Iluminación, Línea Blanca e Industria Automotriz.                   
                        Ofrecemos una amplia gama de productos orientados a los Fabricantes de Alumbrado Público, Antiexplosivo, Industrial, Automotriz, Comercial, Señalización y Línea Blanca.                    
                        Contamos con Líneas de montaje electrónico automáticas, un sistema de montaje para trabajos especiales, I+D y un sistema de gestión de calidad a lo largo de todo el proceso productivo.                    
                        Trabajamos con diferentes Marcas de Led y componentes, con el fin de brindar a los fabricantes y ensambladores, distintas soluciones adecuadas para cada segmento de mercado.
                        Nuestro modelo de trabajo OEM nos lleva a ser un eslabón clave en la Cadena Industrial, proporcionando soluciones tecnológicas competitivas y de vanguardia que permitan promover el desarrollo de la Industria Nacional, a través de nuestros clientes. Gracias al formato de nuestro proceso productivo, somos competitivos tanto en producciones de gran escala como en las pequeñas.`,
            pilar1: 'RELACIÓN CON EL CLIENTE Y SU SATISFACCIÓN',
            pilar2: 'INNOVACIÓN PERMANENTE ANTE EL CAMBIO CONSTANTE',
            pilar3: 'CONSCIENCIA EN LA SUSTENTABILIDAD',
            pilar4: 'ENFOQUE EN LOS FABRICANTES Y ENSAMBLADORES NACIONALES',
            pilar5: 'MANEJO PROFESIONAL DE LA INFORMACIÓN DEL CLIENTE',
            MPTitle: 'Módulos Potencia:',
            MPText: `Para Alumbrado Público, Industrial, Antiexplosivo, Deportivo.
                      PCB: FR4, Metalcore u otro.
                      Con o sin bornera rápida, con salida de cables.
                      Con o sin sensor NTC para comandar el Driver por excesos de Temperatura.
                      Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                      Led: de media, baja y alta potencia.
                      Rango de 2500k a 6500k en blanco y en colores.
                    `,
            MLTitle: 'Módulos Lineales:',
            MLText: `Para Alumbrado Comercial, Antiexplosivo, Señalética.
                      PCB: FR4, Metalcore u otro.
                      Con o sin bornera rápida, con salida de cables.
                      Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                      Led: de media, baja y alta potencia.
                      Rango de 2500k a 6500k en blanco y en colores.
                    `,
            MATitle: 'Módulos Automotriz:',
            MAText: `Para faros delanteros, traseros, laterales, niebla, direccionamiento.
                      PCB: FR4, Metalcore u otro.
                      Con o sin bornera rápida, con salida de cables.
                      12/24vcc, Bi-voltaje.
                      Posición, Freno, Baliza, Giro, Luz Cortesía, Patente.
                      Led: de media, baja y alta potencia.
                      Rango de 2500k a 6500k en blanco y en colores.        
                      `,
            MHTitle: 'Módulos Horticultura:',
            MHText: `Para vegetación, floración y cultivos indoor específicos.
                      PCB: FR4, Metalcore u otro.
                      Con o sin bornera rápida, con salida de cables.
                      Para Driver de Corriente o Tensión Constante, 12/24vcc o Driver-on-board.
                      Led: de media, baja y alta potencia Horticultura.
                      Rango de 2500k a 6500k en blanco, Rojo, rojo lejano, Azul y UV.
                    `,
            DLTitle: 'Drivers Led:',
            DLText: `Drivers de Corriente Constante para Alumbrado Público e Industrial, on-off, corriente de salida parametrizable, dimerizable.
                      Drivers de Tensión Constante para tiras de Led.
                     `,
            Partners: "SÓCIOS",      
            formName: 'Nombre',
            formLastName: 'Apellido',
            formTel: 'Teléfono',
            formSubject: 'Asunto',
            formMessage: 'Mensaje',
            formSend: 'Enviar',
            ventas1: 'Ventas 1',
            ventas2: 'Ventas 2',
            copyright: '© www.gmtdobrasil.com.br Todos los Derechos Reservados.',
        },
      },
      pg: {
        translation: {
            inicio: 'INÍCIO',
            nosotros: 'QUEM SOMOS',
            pilares: 'PILARES',
            productos: 'PRODUTOS',
            contacto: 'FALE CONOSCO',
            languageButton: 'ES',
            headerTitle: 'Desenvolvimento e Fabricação de Módulos de Iluminação e Eletrônica',
            aboutTitle: 'FALE CONOSCO',
            aboutText: `Somos especialistas no desenvolvimento e fabricação de Módulos de Eletrônica, Módulos de LED e Componentes para Iluminação, Linha Branca e Indústria Automotiva. Oferecemos uma ampla variedade de produtos projetados para Fabricantes de Iluminação Pública, à Prova de Explosão, Industrial, Automotiva, Comercial, Sinalização e Linha Branca. Operamos com Linha de montagem automatizada, sistema de montagem para trabalhos especiais, I&D e sistema de gestão de qualidade ao longo de todo o processo produtivo. Trabalhamos com diversas Marcas de Led e componentes, com o intuito de proporcionar aos fabricantes e montadoras soluções diferenciadas e adequadas a cada segmento de mercado. O modelo de trabalho OEM nos posiciona como elo fundamental na Cadeia Industrial, fornecendo soluções tecnológicas competitivas e de vanguarda que auxiliam, mediante nossos clientes, no desenvolvimento da Indústria Nacional. Graças à maneira como está formatado nosso processo produtivo, somos competitivos tanto na produção em pequena quanto em grande escala.
                      `,
            pilar1: 'RELACIONAMENTO COM O CLIENTE PRIORIZANDO SUA SATISFAÇÃO',
            pilar2: 'INOVAÇÃO PERMANENTE FACE À MUDANÇA CONSTANTE',
            pilar3: 'CONSCIÊNCIA SOBRE A SUSTENTABILIDADE',
            pilar4: 'FOCO NOS FABRICANTES E MONTADORAS NACIONAIS',
            pilar5: 'TRATAMENTO SIGILOSO DE DADOS DOS CLIENTES',
            MPTitle: 'Módulos de Potência:',
            MPText: `Para Iluminação Pública, Industrial, Esportiva e à Prova de Explosão. PCB: FR4, Metalcore ou outra. Com ou sem bloco de engate rápido, com interface de cabos. Com ou sem sensor NTC para controlar o Driver em caso de excesso de temperatura. Para Driver de Corrente ou Tensão Constante, 12/24vcc ou Driver-on-board. Led: de meia, baixa e alta potência. Temperatura de cor de 2500k a 6500k em branco ou outras cores.
                    `,
            MLTitle: 'Módulos Lineares:',
            MLText: `Para Iluminação Comercial, à Prova de Explosão, Sinalização. PCB: FR4, Metalcore ou outra. Com ou sem bloco de engate rápido, com saída de cabos. Para Driver de Corrente ou Tensão Constante, 12/24vcc ou Driver-on-board. Led: de media, baixa e alta potência. Escala de 2500k a 6500k em branco ou outras cores.
                    `,
            MATitle: 'Módulos Automotivos:',
            MAText: `Para faróis dianteiros, traseiros, laterais, de neblina e direcional. PCB: FR4, Metalcore ou outra. Com ou sem bloco de engate rápido, com interface de cabos. 12/24vcc, Bivolt. Posição, Freio, Pisca-alerta, Direção, Luz de Cortesia, Placa. Led: de meia, baixa e alta potência. Escala de 2500k a 6500k em branco ou outras cores.

                    `,        
            MHTitle: 'Módulos de Horticultura:',
            MHText: `Para vegetação, floração e cultivos indoor específicos. PCB: FR4, Metalcore ou outra. Com ou sem bloco de engate rápido, com interface de cabos. Para Driver de Corrente ou Tensão Constante, 12/24vcc ou Driver-on-board. Led: de meia, baixa e alta potência Horticultura. Escala de 2500k a 6500k em branco, vermelho, vermelho distante, Azul e UV.
                      `,            
            DLTitle: 'Drivers de Led:',
            DLText: `Drivers de Corrente Constante para Iluminação Pública e Industrial, on-off, corrente de saída parametrizável, dimerizável. Drivers de Tensão Constante para fitas de Led.

                    `,
            Partners: "SÓCIOS",

            formName: 'Nome',
            formLastName: 'Sobrenome',
            formTel: 'Telefone',
            formSubject: 'Assunto',
            formMessage: 'Mensagem',
            formSend: 'Enviar',
            ventas1: 'Vendas 1',
            ventas2: 'Vendas 2',
            copyright: '© www.gmtdobrasil.com.br Todos os Direitos Reservados.',
        },
      },
    },
    lng: 'pg',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
