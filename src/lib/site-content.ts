// Conteúdo centralizado do portal. Alterações de textos e links devem ser feitas aqui.

export const navigationLinks = [
	{ label: "Sobre", href: "#sobre" },
];

export const serviceLinks = [
	{ label: "Cursos CiTI-DE & SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ label: "Sala do Empreendedor", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor" },
	{ label: "Mapeamento dos Artesãos", href: "https://citide.patos.pb.gov.br/mapeamento-artesoes" },
	{ label: "Edital - Feira Mãos que Criam", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
	{ label: "Para Cidadãos", href: "https://citide.patos.pb.gov.br/#servicos-cidadao" },
	{ label: "Para Empresas", href: "https://citide.patos.pb.gov.br/#servicos-empresa" },
	{ label: "Cartilha da Inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
];

export const programLinks = [
	{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
	{ label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos" },
	{ label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
	{ label: "Selo Patos Inovação", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ label: "Patos + Empregos", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ label: "PICTI", href: "https://citide.patos.pb.gov.br/cartilha#picti" },
];

export const heroCategories = [
	{ label: "Curso SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos" },
	{ label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
	{ label: "Patos + Empregos", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ label: "Selo Patos Inovação", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ label: "Cartilha Completa", href: "https://citide.patos.pb.gov.br/cartilha" },
];

// Atalhos de intenção exibidos logo após o hero para acelerar a primeira decisão do visitante.
export const quickAccessLinks = [
	{ id: "curso", label: "Cursos CiTI-DE & SENAC", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "emprego", label: "Patos + Empregos", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ id: "inovapatos", label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos" },
	{ id: "ideia", label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
	{ id: "programas", label: "Cartilha da Inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
	{ id: "selo", label: "Selo Patos Inovação", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
];

export const services = [
	{ id: "cursos", title: "Cursos e capacitações", text: "Qualificação profissional para fortalecer carreiras e negócios em Patos.", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "empregos", title: "Patos + Empregos", text: "Oportunidades, vagas e caminhos para quem busca entrar ou crescer no mercado.", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ id: "sala-empreendedor", title: "Sala do Empreendedor", text: "Orientação e apoio para abrir, organizar e desenvolver seu negócio.", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor" },
	{ id: "artesaos", title: "Mapeamento dos artesãos", text: "Acesso a informações e oportunidades para fortalecer o artesanato local.", href: "https://citide.patos.pb.gov.br/mapeamento-artesoes" },
	{ id: "inscricoes", title: "Inscrições e editais", text: "Consulte chamadas, inscrições e oportunidades abertas pela secretaria.", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
	{ id: "atendimento", title: "Atendimento CiTI-DE", text: "Entre em contato para encontrar orientação e o caminho certo para sua demanda.", href: "#contato" },
];

export const programs = [
	{ id: "inovapatos", title: "InovaPatos", text: "Conexões e iniciativas para aproximar conhecimento, tecnologia e desenvolvimento local." },
	{ id: "acelerapatos", title: "AceleraPatos", text: "Benefícios e incentivos para empresas de ciência, tecnologia e inovação." },
	{ id: "proinova", title: "ProInova", text: "Apoio para inventores e projetos com potencial de inovação." },
	{ id: "selo-inovacao", title: "Selo Patos Inovação", text: "Reconhecimento para empresas que se destacam por práticas inovadoras." },
	{ id: "empregos-programa", title: "Patos + Empregos", text: "Oportunidades, qualificação e conexão com o mercado de trabalho." },
	{ id: "picti", title: "PICTI", text: "Incentivo a projetos de pesquisa, tecnologia e inovação aprovados." },
];

export const programDetails = {
	inovapatos: {
		title: "InovaPatos",
		summary: "Conexões e iniciativas para aproximar conhecimento, tecnologia e desenvolvimento local.",
		audience: "Empreendedores, instituições, pesquisadores e pessoas com iniciativas de inovação.",
		offers: ["Conexões com o ecossistema local", "Apoio a iniciativas inovadoras", "Integração entre conhecimento e desenvolvimento"],
		participation: "Consulte a cartilha da inovação e acompanhe as oportunidades publicadas pela CiTI-DE.",
		documents: "Os documentos variam conforme a chamada ou iniciativa. Confira os requisitos da oportunidade vigente.",
		period: "Conforme chamadas, agendas e oportunidades divulgadas.",
		faq: [{ question: "Quem pode participar?", answer: "Pessoas, empresas e instituições envolvidas com ciência, tecnologia e inovação." }],
	},
	acelerapatos: {
		title: "AceleraPatos",
		summary: "Programa de incentivos e benefícios para empresas de ciência, tecnologia e inovação.",
		audience: "Empresas que desenvolvem atividades ou projetos relacionados à inovação em Patos.",
		offers: ["Benefícios e incentivos fiscais", "Orientação para empresas inovadoras", "Conexão com políticas públicas de desenvolvimento"],
		participation: "Verifique os critérios na cartilha e procure a Sala do Empreendedor para iniciar a solicitação.",
		documents: "Documentação empresarial e comprovações previstas na legislação e no regulamento do programa.",
		period: "Solicitações conforme regras e prazos do programa.",
		faq: [{ question: "Onde solicitar apoio?", answer: "A Sala do Empreendedor é o canal inicial para orientação e encaminhamento." }],
	},
	proinova: {
		title: "ProInova",
		summary: "Apoio para inventores e projetos com potencial de inovação.",
		audience: "Inventores independentes, pesquisadores, empreendedores e equipes de projeto.",
		offers: ["Orientação para transformar ideias em soluções", "Apoio a projetos inovadores", "Conexão com parceiros e oportunidades"],
		participation: "Apresente sua ideia ou projeto pelos canais de atendimento da CiTI-DE e acompanhe as chamadas disponíveis.",
		documents: "Descrição do projeto, identificação dos responsáveis e documentos solicitados na chamada.",
		period: "Conforme edital ou oportunidade publicada.",
		faq: [{ question: "Preciso ter uma empresa?", answer: "Não necessariamente. O programa também contempla inventores e projetos em desenvolvimento." }],
	},
	"selo-inovacao": {
		title: "Selo Patos Inovação",
		summary: "Reconhecimento para empresas que se destacam por práticas inovadoras.",
		audience: "Empresas e organizações com iniciativas, produtos ou processos inovadores.",
		offers: ["Reconhecimento institucional", "Visibilidade para práticas inovadoras", "Integração com o ecossistema de inovação"],
		participation: "Confira os critérios de reconhecimento e acompanhe as orientações de inscrição.",
		documents: "Informações da empresa e evidências das práticas ou resultados de inovação apresentados.",
		period: "Conforme período de inscrições e agenda de reconhecimento.",
		faq: [{ question: "O selo tem custo?", answer: "Consulte o regulamento vigente para conhecer as condições de participação." }],
	},
	"empregos-programa": {
		title: "Patos + Empregos",
		summary: "Oportunidades, qualificação e conexão com o mercado de trabalho.",
		audience: "Pessoas que buscam emprego, qualificação ou novas oportunidades profissionais.",
		offers: ["Acesso a oportunidades de trabalho", "Informações de qualificação", "Conexão com empresas e mercado"],
		participation: "Consulte as oportunidades disponíveis e acompanhe as orientações de cada vaga ou ação.",
		documents: "Os documentos dependem da vaga, curso ou oportunidade escolhida.",
		period: "Conforme disponibilidade de vagas e inscrições.",
		faq: [{ question: "Onde encontro as vagas?", answer: "Acompanhe a cartilha e os canais oficiais da CiTI-DE." }],
	},
	picti: {
		title: "PICTI",
		summary: "Incentivo a projetos de pesquisa, tecnologia e inovação aprovados.",
		audience: "Pesquisadores, instituições de ensino, empresas e equipes com projetos de CT&I.",
		offers: ["Incentivo a pesquisa e desenvolvimento", "Apoio a projetos tecnológicos", "Articulação entre instituições e parceiros"],
		participation: "Acompanhe os editais e chamadas para verificar elegibilidade e apresentar seu projeto.",
		documents: "Projeto, plano de trabalho, documentos institucionais e demais itens definidos no edital.",
		period: "Conforme edital ou chamada pública.",
		faq: [{ question: "Como saber quando há uma chamada?", answer: "Consulte regularmente os canais oficiais e a cartilha da inovação." }],
	},
};

// Organiza a entrada do portal pela intenção do visitante, sem exigir conhecimento da secretaria.
export const audiencePaths = {
	cidadao: {
		label: "Sou cidadão",
		intro: "Encontre cursos, empregos, programas e capacitações para transformar sua ideia em caminho profissional.",
		items: [
			{ label: "Cursos e capacitações", href: "https://cursos.citide.patos.pb.gov.br/" },
			{ label: "Patos + Empregos", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
			{ label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
			{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
			{ label: "Cartilha da Inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
		],
	},
	empresa: {
		label: "Represento uma empresa",
		intro: "Conheça incentivos, apoio e programas para desenvolver inovação e negócios em Patos.",
		items: [
			{ label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos" },
			{ label: "Selo Patos Inovação", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
			{ label: "Solicitar apoio", href: "https://citide.patos.pb.gov.br/sala-do-empreendedor" },
			{ label: "Programas de inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
		],
	},
	instituicao: {
		label: "Sou uma instituição",
		intro: "Acesse editais, leis, documentos e redes para construir parcerias pelo desenvolvimento local.",
		items: [
			{ label: "Editais e oportunidades", href: "https://citide.patos.pb.gov.br/edital-feira-maos-que-criam" },
			{ label: "Leis e documentos", href: "https://citide.patos.pb.gov.br/cartilha" },
			{ label: "Redes e conselhos", href: "#sobre" },
			{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
			{ label: "Parcerias e inovação", href: "https://citide.patos.pb.gov.br/cartilha#picti" },
		],
	},
};

// Estruturas institucionais que explicam como a CiTI-DE organiza a política pública de inovação.
export const institutionalBodies = [
	{ title: "Conselho Municipal de CT&I", text: "Participação social, acompanhamento e fiscalização das políticas de ciência, tecnologia e inovação." },
	{ title: "Fundo Municipal de CT&I", text: "Fomento a projetos, empresas e iniciativas estratégicas para o desenvolvimento local." },
	{ title: "Rede de Promoção da Inovação", text: "Conexão entre instituições públicas, privadas, ensino, pesquisa e empreendedores." },
	{ title: "Arranjos Promotores de Inovação", text: "Cooperação entre instituições de ciência, empresas e organizações para gerar soluções." },
];

// Indicadores públicos que resumem a estrutura e o alcance institucional da CiTI-DE.
export const institutionalStats = [
	{ value: "6", label: "leis municipais" },
	{ value: "1", label: "sistema integrado" },
	{ value: "4", label: "programas de fomento" },
	{ value: "2%", label: "ISSQN no AceleraPatos" },
];
