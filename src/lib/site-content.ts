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
	{ id: "curso", label: "Quero fazer um curso", href: "https://cursos.citide.patos.pb.gov.br/" },
	{ id: "emprego", label: "Quero encontrar emprego", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
	{ id: "ideia", label: "Tenho uma ideia", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
	{ id: "inovapatos", label: "Quero conhecer o InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
	{ id: "programas", label: "Quero conhecer os programas", href: "https://citide.patos.pb.gov.br/cartilha" },
];

export const services = [
	{ id: "cursos", title: "Cursos e capacitações", text: "Qualificação profissional para fortalecer carreiras e negócios em Patos." },
	{ id: "empregos", title: "Patos + Empregos", text: "Oportunidades, vagas e caminhos para quem busca entrar ou crescer no mercado." },
	{ id: "proinova-servico", title: "ProInova", text: "Apoio para inventores independentes e projetos que podem transformar ideias em soluções." },
];

export const programs = [
	{ id: "inovapatos", title: "InovaPatos", text: "Conexões e iniciativas para aproximar conhecimento, tecnologia e desenvolvimento local." },
	{ id: "acelerapatos", title: "AceleraPatos", text: "Benefícios e incentivos para empresas de ciência, tecnologia e inovação." },
	{ id: "proinova", title: "ProInova", text: "Apoio para inventores e projetos com potencial de inovação." },
	{ id: "selo-inovacao", title: "Selo Patos Inovação", text: "Reconhecimento para empresas que se destacam por práticas inovadoras." },
	{ id: "empregos-programa", title: "Patos + Empregos", text: "Oportunidades, qualificação e conexão com o mercado de trabalho." },
	{ id: "picti", title: "PICTI", text: "Incentivo a projetos de pesquisa, tecnologia e inovação aprovados." },
];

// Organiza a entrada do portal pela intenção do visitante, sem exigir conhecimento da secretaria.
export const audiencePaths = {
	cidadao: {
		label: "Sou cidadão",
		intro: "Encontre cursos, oportunidades e apoio para transformar sua ideia em caminho profissional.",
		items: [
			{ label: "Cursos e capacitações", href: "https://cursos.citide.patos.pb.gov.br/" },
			{ label: "Patos + Empregos", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
			{ label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
			{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
			{ label: "Cartilha da Inovação", href: "https://citide.patos.pb.gov.br/cartilha" },
		],
	},
	empresa: {
		label: "Sou empresa ou instituição",
		intro: "Acesse incentivos, reconhecimento e conexões para desenvolver inovação em Patos.",
		items: [
			{ label: "AceleraPatos", href: "https://citide.patos.pb.gov.br/cartilha#acelerapatos" },
			{ label: "Selo Patos Inovação", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
			{ label: "PICTI", href: "https://citide.patos.pb.gov.br/cartilha#picti" },
			{ label: "InovaPatos", href: "https://citide.patos.pb.gov.br/cartilha#inovapatos" },
			{ label: "ProInova", href: "https://citide.patos.pb.gov.br/cartilha#proinova" },
			{ label: "Patos + Empregos", href: "https://citide.patos.pb.gov.br/cartilha#reconhecimento" },
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
