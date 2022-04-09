import { LanguageLevel, EducationalSituation } from "../Enums";
import { Certificate, Curriculum, Education, Experience, KeyValue, Personal } from "../Models";

export class CurriculumRafael {

    static get() {
        let curriculum = new Curriculum();
        let personal = new Personal();
        personal.birthday = new Date("1993-03-17");
        personal.name = "Rafael Oliveira de Souza";
        personal.office = "Consultor de Sistemas";
        personal.profile = `Sou um profissional apaixonado por lógica e novos desafios,
        preocupado com a eficácia de código e a experiência do usuário. 
        Acredito na inovação aliada da simplicidade e tenho como princípio 
        o comprometimento e dedicação aos meus projetos.`;

        curriculum.personal = personal;

        let skills: KeyValue<string, number>[] = [];
        let contacts: KeyValue<string, string>[] = [];
        let knowledges: KeyValue<string, string[]>[] = [];
        let languages: KeyValue<string, LanguageLevel>[] = [];


        contacts.push(new KeyValue("Endereço", "Quadra 38 Conjunto B Lote 31 Setor 2, Águas Lindas/GO, Cep: 72910-127"));-
        contacts.push(new KeyValue("Telefone", "+55(61)99232-2329"));
        contacts.push(new KeyValue("E-mail", "rafaelsoec@gmail.com"));
        contacts.push(new KeyValue("LinkedIn", "https://www.linkedin.com/in/rafael-souza-9a315116a/"));

        skills.push(new KeyValue("Trabalho em equipe", 5));
        skills.push(new KeyValue("Gestão de equipe", 4));
        skills.push(new KeyValue("Liderança", 4));
        skills.push(new KeyValue("Comunicação", 4));

        languages.push(new KeyValue("Inglês", LanguageLevel.INTERMEDIARIO));
        languages.push(new KeyValue("Espanhol", LanguageLevel.INTERMEDIARIO));

        knowledges.push(new KeyValue("Arquiteturas", ["Microsserviços", " Em Camadas", " Orientada a serviços.", "Incerteza e Ambiguidade"]));
        knowledges.push(new KeyValue("Banco de Dados", [
            "Relacionais: Oracle, PostgreSQL e MySQL.",
             "Não Relacionais:   MongoDB e Firebase as DB."
        ]));
        knowledges.push(new KeyValue("Containers", ["Docker"]));
        knowledges.push(new KeyValue("Controle de Versão", ["Git", "Svn"]));
        knowledges.push(new KeyValue("Frameworks", [
            "Angular", " Bootstrap", " Flutter", "Hibernate", "Ionic", "JSF", "Jquery",
            "Material Design", "Play Framework", "PrimeNG", "React", "React Native","Spring framework"
        ]));  
        knowledges.push(new KeyValue("Integração Contínua", ["Azure", "GitLab", "Jenkins"]));
        knowledges.push(new KeyValue("Linguagens", [
            "C", "C++","CSS","Haskel","HTML","Java",
            "JavaScript","Python","Prolog",
            "Ruby","Scala","TypeScript"
        ]));
        knowledges.push(new KeyValue("Metodologia Ágil", ["Scrum", "Kanban"]));
        knowledges.push(new KeyValue("Serviços em Nuvem", ["Azure", "AWS"]));
        knowledges.push(new KeyValue("Servidores", ["Red Hat JBoss Enterprise Application Platform", "Apache TomCat"]));
        knowledges.push(new KeyValue("Testes", [
            "Integração com Selenium.",
            "Comportament usando cucumber.",
            "Unitários usando JUnit,  Mockito e Wiremock."
        ])); 
  
        
       
        let educations: Education[] = [];
        educations.push({
            name: "Engenharia da Computação",
            institution: "Universidade de Brasilia - UNB",
            address: "Brasilia, Distrito Federal",
            startDate: new Date("01/03/2015"),
            endDate: null,
            situation: EducationalSituation.ANDAMENTO
        });
        educations.push({
            name: "Engenharia Mecatrônica",
            institution: "Centro Universitário Planalto - UNIPLAN",
            address: "Brasilia, Distrito Federal",
            startDate: new Date("01/03/2012"),
            endDate: new Date("06/06/2014"),
            situation: EducationalSituation.TRANCAMENTO
        });

        let experiences: Experience[] = [];
        experiences.push({
            institution: "Analista de Sistemas Sênior",
            address: "Brasilia, Distrito Federal - Brasil",
            office: ` GlobalWeb Corp`,
            startDate: new Date("01/01/2022"),
            endDate: null,
            description: ` Desenvolvimento de sistemas voltados ao 
            financiamento rural da Caixa Econômica. O back-end do 
            sistema foi escrito em java, front-end escrito em angular 
            8 e o banco de dados foi feito utilizando SQL Server. Tecnologias e 
            metodologias utilizadas: Spring, Struts, JUnit, Jenkins, it, 
            SOAP-API.`
        });
        experiences.push({
            institution: "Analista de Sistemas Sênior",
            address: "São Paulo - Brasil",
            office: ` SIS Consultoria`,
            startDate: new Date("09/09/2021"),
            endDate: new Date("01/01/2022"),
            description: ` Desenvolvimento de sistemas voltados aos produtos 
            bancários do Bradesco utilizando Java. Tecnologias e 
            metodologias utilizadas: Spring, JUnit, Jenkins, SVN, 
            SOAP-API.`
        });
        experiences.push({
            institution: "Analista de Sistemas Sênior",
            address: "São Paulo - Brasil",
            office: ` PagSeguro PagBank`,
            startDate: new Date("03/03/2021"),
            endDate: new Date("09/09/2021"),
            description: ` Desenvolvimento de sistemas voltados aos produtos 
            bancários do PagBank utilizando Java e DB2. 
            Tecnologias e metodologias utilizadas: Spring, primeNG, Spark, 
             Kafka, AWS, Mockito, JUnit, Jenkins, git, gitflow e REST-API.`
        });
        experiences.push({
            institution: "Analista de Sistemas Sênior",
            address: "São Paulo - Brasil",
            office: ` Spread Tecnologia`,
            startDate: new Date("01/01/2021"),
            endDate: new Date("09/09/2021"),
            description: ` Desenvolvimento de sistemas utilizando Java(backend), 
            Angular 8(Frontend) e DB2(banco de dados). 
            Tecnologias e metodologias utilizadas: HTML, css, node, typescript, Spring, primeNG, 
             Jenkins, git, git-flow e REST-API.`
        });
        experiences.push({
            institution: "Analista de Sistemas Pleno",
            address: "São Paulo - Brasil",
            office: ` Spread Tecnologia`,
            startDate: new Date("03/01/2019"),
            endDate: new Date("01/01/2021"),
            description: ` Desenvolvimento de sistemas utilizando Java(backend), 
            Angular 8(Frontend) e DB2(banco de dados). 
            Tecnologias e metodologias utilizadas: HTML, css, 
            javascript, node, Spring, Jenkins, git, git-flow e REST-API.`
        });
        experiences.push({
            institution: "Programador Júnior",
            address: "Brasilia, Distrito Federal - Brasil",
            office: ` Tivit`,
            startDate: new Date("09/09/2018"),
            endDate: new Date("03/03/2019"),
            description: ` Desenvolvimento de sistemas voltados a criação de 
            ChatBost para a Caixa Econômica utilizando Java. 
            Tecnologias e metodologias utilizadas: SpringBoot,
            JUnit, Jenkins, git, Oracle Database e REST-API.`
        });
        experiences.push({
            institution: "Programador Júnior - Estágio",
            address: "Brasilia, Distrito Federal - Brasil",
            office: ` Caixa Econômica Federal`,
            startDate: new Date("10/10/2017"),
            endDate: new Date("08/08/2018"),
            description: ` Desenvolvimento de sistemas utilizando Java
            (backend) e MySQL (banco de dados). Tecnologias e 
            metodologias utilizadas: HTML, css, javascript, node, 
            Spring, Jenkins, git, git-flow e REST-API.`
        });
        experiences.push({
            institution: "Programador Júnior - Estágio",
            address: "Brasilia, Distrito Federal - Brasil",
            office: `Fundação de Empreendimentos Científicos e 
            Tecnológicos (Finatec)`,
            startDate: new Date("10/10/2015"),
            endDate: new Date("10/10/2017"),
            description: ` Desenvolvimento de sistemas utilizando Java
            (backend) e MySQL (banco de dados). Tecnologias e 
            metodologias utilizadas: HTML, Angular 5, node, 
            Hibernate, Jpa, primeNG, Jenkins, git, git-flow e 
            REST-API.`
        });
        experiences.push({
            institution: "Tutor de Matemática e Física - Estágio",
            address: "Águas Lindas, Goiás - Brasil",
            office: `Programa - Mais Educação`,
            startDate: new Date("03/03/2014"),
            endDate: new Date("12/12/2014"),
            description: `
            Ministração de aulas de matemática e física para 
            alunos da rede pública do nível fundamental.`
        });
        experiences.push({
            institution: "Montador de Sistemas de Refrigeração",
            address: "Brasilia, Distrito Federal - Brasil",
            office: `Master Engenharia`,
            startDate: new Date("03/03/2013"),
            endDate: new Date("01/01/2014"),
            description: `Montagem de equipamentos e manutenção de 
            sistemas de refrigeração. Programação de sistemas 
            de ar refrigerado.`
        });
        experiences.push({
            institution: "Técnico de Laboratório de Informática - Estágio",
            address: "Brasilia, Distrito Federal - Brasil",
            office: `Microlins`,
            startDate: new Date("03/03/2012"),
            endDate: new Date("12/12/2012"),
            description: `Manutenção de computadores das turmas de 
            Informática básica. Professor de informática básica 
            para turmas iniciais.`
        });
        experiences.push({
            institution: "Auxiliar Administrativo - Estágio",
            address: "Brasilia, Distrito Federal - Brasil",
            office: `Supremo Tribunal Federal`,
            startDate: new Date("01/01/2011"),
            endDate: new Date("12/12/2011"),
            description: `Auxílio nas atividades administrativas; análise, 
            verificação e arquivologia de documentos jurídicos; 
            suporte na gestão documental de formulários, 
            impressos e relatórios diversos; controle de listagens, 
            relatórios e materiais de escritório, recebimento e 
            encaminhamento de arquivos.`
        });
        experiences.push({
            institution: "Menor Aprendiz",
            address: "Brasilia, Distrito Federal - Brasil",
            office: `Programa - Meu Primeiro Emprego`,
            startDate: new Date("01/01/2006"),
            endDate: new Date("12/12/2006"),
            description: `Reciclagem e manutenção de cadeiras e mesas das 
            escolas municipais.`
        });
        

        let certificates: Certificate[] = [];
        certificates.push({
            name: "Operador de Micro",
            address: "Águas Lindas/GO - Brasil",
            startDate: new Date("01/01/2007"),
            endDate: new Date("12/12/2007"),
            description: `New World Informática`
        });

        certificates.push({
            name: "Montagem e Manutenção de Micro",
            address: "Águas Lindas/GO - Brasil",
            startDate: new Date("01/01/2009"),
            endDate: new Date("06/06/2009"),
            description: `Globo Informática`
        });

        certificates.push({
            name: "Administração de Empresas",
            address: "Águas Lindas/GO - Brasil",
            startDate: new Date("01/01/2010"),
            endDate: new Date("06/06/2010"),
            description: `Microlins`
        });

        certificates.push({
            name: "Oracle Certified Foundations Associate",
            address: "Brasilia/DF - Brasil",
            startDate: new Date("02/02/2021"),
            endDate: null,
            description: `Microlins`
        });

        

        curriculum.certificates = certificates;
        curriculum.experiences = experiences;
        curriculum.educations = educations;

        curriculum.personal.skills = skills;
        curriculum.personal.knowledges = knowledges;
        curriculum.personal.languages = languages;
        curriculum.personal.contacts = contacts;

        return curriculum;
    }

}