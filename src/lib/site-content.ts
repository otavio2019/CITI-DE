// Conteúdo centralizado do portal. Alterações de textos e links devem ser feitas aqui.

export const navigationLinks = [
	{ label: "Sobre", href: "#sobre" },
	{ label: "Contato", href: "#contato" },
];

export const serviceLinks = [
	{ label: "Cursos CiTI-DE & SENAC", href: "#cursos" },
	{ label: "Sala do Empreendedor", href: "#servicos" },
	{ label: "Mapeamento dos Artesãos", href: "#servicos" },
	{ label: "Edital - Feira Mãos que Criam", href: "#servicos" },
	{ label: "Para Cidadãos", href: "#servicos" },
	{ label: "Para Empresas", href: "#servicos" },
	{ label: "Cartilha da Inovação", href: "#programas" },
];

export const programLinks = [
	{ label: "InovaPatos", href: "#inovapatos" },
	{ label: "AceleraPatos", href: "#acelerapatos" },
	{ label: "ProInova", href: "#proinova" },
	{ label: "Selo Patos Inovação", href: "#selo-inovacao" },
	{ label: "Patos + Empregos", href: "#empregos" },
	{ label: "PICTI", href: "#picti" },
];

export const heroCategories = [
	{ label: "Curso SENAC", href: "#servicos" },
	{ label: "Acelera Patos", href: "#acelerapatos" },
	{ label: "ProInova", href: "#proinova" },
	{ label: "Empregos", href: "#empregos" },
	{ label: "Selo Inovação", href: "#selo-inovacao" },
	{ label: "Cartilha Completa", href: "#programas" },
];

// Atalhos de intenção exibidos logo após o hero para acelerar a primeira decisão do visitante.
export const quickAccessLinks = [
	{ id: "curso", label: "Quero fazer um curso", href: "#cursos" },
	{ id: "emprego", label: "Quero encontrar emprego", href: "#empregos" },
	{ id: "ideia", label: "Tenho uma ideia", href: "#proinova-servico" },
	{ id: "empresa", label: "Tenho uma empresa", href: "#publicos" },
	{ id: "programas", label: "Quero conhecer os programas", href: "#programas" },
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
			{ label: "Cursos e capacitações", href: "#cursos" },
			{ label: "Patos + Empregos", href: "#empregos" },
			{ label: "ProInova", href: "#proinova-servico" },
			{ label: "Cartilha da Inovação", href: "#programas" },
			{ label: "Sala do Empreendedor", href: "#servicos" },
			{ label: "Editais e oportunidades", href: "#servicos" },
		],
	},
	empresa: {
		label: "Sou empresa ou instituição",
		intro: "Acesse incentivos, reconhecimento e conexões para desenvolver inovação em Patos.",
		items: [
			{ label: "AceleraPatos", href: "#acelerapatos" },
			{ label: "Selo Patos Inovação", href: "#selo-inovacao" },
			{ label: "PICTI", href: "#picti" },
			{ label: "Arranjos Promotores de Inovação", href: "#programas" },
			{ label: "CPSI", href: "#programas" },
			{ label: "Vitrine Tecnológica", href: "#programas" },
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
