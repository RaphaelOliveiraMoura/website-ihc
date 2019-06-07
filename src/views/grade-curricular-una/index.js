const grade = [
    [
        { 'name': 'Interface Humano Computador', 'workload': 80, 'description': 'Princípios de interface humano computador. Experiência do usuário (UX). Usabilidade. Usabilidade para desktop. Usabilidade para web. Usabilidade para dispositivos móveis (mobile).' },
        { 'name': 'Laboratório de Práticas Integradas', 'workload': 40, 'description': 'Observação de fenômenos físicos do movimento. Obtenção de medidas experimentais. Tratamento de dados através de cálculos e construção de gráficos. Análise de resultados' },
        { 'name': 'Requisitos, Análise e POO', 'workload': 80, 'description': 'Fundamentos de requisitos. Tipos de requisitos: funcionais e não funcionais. Análise e projeto de software orientado a objetos. Modelos da UML (Unified Modeling Language): Modelo de caso de uso diagrama de classes diagrama de sequência diagrama de atividades diagrama de estados diagrama de pacotes diagrama de componentes e diagrama de implantação.' },
        { 'name': 'Institucional I', 'workload': 80, 'description': 'Estilos de pensamento e modos de estruturação da aprendizagem. Pensamento crítico e exploração do conhecimento. Lógica cotidiano e racionalidade. Lógica e tomada de decisões. Estruturação de argumentos e princípios de correlação. Lógica aplicada à resolução de problemas.Pensamento criação e processo criativo. Metodologias de colaboração aplicadas à resolução de problemas.' },
        { 'name': 'LAI', 'workload': 40, 'description': 'Identidade e autoconhecimento. Equilíbrio e dimensões da vida. Valores e talentos. Projeto de Vida e plano de ação. Conceito de problema complexo. Identificação e categorização de atores envolvidos em problemas complexos. Técnica de corte. Proposição de soluções para problemas complexos. Conceito de criatividade. Potencial criativo. Processo criativo. Bloqueios criativos.' }
    ],
    [
        { 'name': 'Banco de Dados', 'workload': 40, 'description': '' },
        { 'name': 'Laboratório de Práticas Integradas', 'workload': 40, 'description': '' },
        { 'name': 'Programação Orientada a Obejtos', 'workload': 120, 'description': '' },
        { 'name': 'Institucional II', 'workload': 80, 'description': '' },
        { 'name': 'LAI', 'workload': 40, 'description': '' }
    ],
    [
        { 'name': 'Algoritmos e Estrutura de Dados', 'workload': 80, 'description': '' },
        { 'name': 'Controle Social, Legislação e Ética em TI', 'workload': 80, 'description': '' },
        { 'name': 'Desenvolvimento Ágil de Software', 'workload': 40, 'description': '' },
        { 'name': 'Desenvolvimento Web', 'workload': 80, 'description': '' },
        { 'name': 'Projeto Interdisciplinar 2A', 'workload': 40, 'description': '' }
    ],
    [
        { 'name': 'Engenharia de Software', 'workload': 80, 'description': 'Conceito e aplicação de engenharia de software. Modelos de processos de desenvolvimento de software. Engenharia de Requisitos. Métricas de software (Pontos de Função). Testes de Software. Qualidade de produto de software Qualidade de processo de software.' },
        { 'name': 'Infraestrutura de TI', 'workload': 80, 'description': 'Fundamentos de arquitetura: placas dispositivos de memória barramentos dispositivos de entrada e saída processadores. Noções de sistemas numéricos: binário decimal e hexadecimal. Tipos de arquiteturas: RISC CISC e arquiteturas avançadas. Conceitos básicos e infraestrutura de computação em nuvem. Aplicações de computação em nuvem.' },
        { 'name': 'Modelagem e Inteligência do Processo de Negócio', 'workload': 40, 'description': '' },
        { 'name': 'SI e Estratégias de TI', 'workload': 80, 'description': 'A importância da informação. Conceitos de informação. Conceito de teoria geral de sistemas. Conceitos de sistemas de informações. Visão organizacional. Dimensões de decisão nas organizações. Metodologias de implantação e integração de sistemas de informação.' },
        { 'name': 'Projeto Interdisciplinar 2B', 'workload': 40, 'description': 'Identificação investigação e proposição de soluções para situações-problema que assegurem um movimento de reflexão sobre os conceitos assimilados. Cooperação entre as partes para que se construa o todo ou seja o conhecimento. Pensamento crítico e analítico. Desenvolvimento de competências para elaboração de projetos transdisciplinares que permitam ao aluno reconhecer o seu papel no mundo.' }
    ],
    [
        { 'name': 'Paradigmas de Linguagens de Programação', 'workload': 80, 'description': '' },
        { 'name': 'Redes de Computadores e Internet', 'workload': 80, 'description': '' },
        { 'name': 'Sistemas Operacionais', 'workload': 80, 'description': '' },
        { 'name': 'Projeto Interdisciplinar 3A', 'workload': 40, 'description': '' }
    ],
    [
        { 'name': 'Ambientes e Modelos Organizacionais na Era Digital', 'workload': 40 },
        { 'name': 'Arquitetura de Sistemas e Soluções de TI', 'workload': 80, 'description': '' },
        { 'name': 'Desenvolvimento Mobile e IOT', 'workload': 80, 'description': '' },
        { 'name': 'Segurança e Auditoria', 'workload': 80, 'description': '' },
        { 'name': 'Projeto Interdisciplinar 3B', 'workload': 40, 'description': '' }
    ],
    [
        { 'name': 'Big Data E Analytics', 'workload': 80, 'description': '' },
        { 'name': 'Inteligência Artificial nas Organizações', 'workload': 80, 'description': '' },
        { 'name': 'Métodos de Otimização', 'workload': 40, 'description': '' },
        { 'name': 'Institucional III', 'workload': 80, 'description': '' },
        { 'name': 'Projeto Interdisciplinar 3C', 'workload': 40, 'description': '' }
    ],
    [
        { 'name': 'Arquitetura Empresarial e Frameworks', 'workload': 80, 'description': '' },
        { 'name': 'Governança de Tecnologia da Informação', 'workload': 80, 'description': '' },
        { 'name': 'Gestão de Projetos', 'workload': 80, 'description': '' },
        { 'name': 'Projeto Interdisciplinar 3D', 'workload': 40, 'description': '' }
    ],
];

const table = document.getElementById('grade-table');
const contentOfTable = table.getElementsByTagName('tbody')[0];
const modal = document.querySelector('#modal');

contentOfTable.innerHTML = makeGradeHTMLTable(0);

function updateTable() {
    const select = document.getElementById('select-modules');
    const moduleIndex = select.value;
    const html = makeGradeHTMLTable(moduleIndex);
    contentOfTable.innerHTML = html;
}

function makeGradeHTMLTable(moduleIndex) {
    let html = '';
    grade[moduleIndex].forEach((moduleInformation, index) => {
        const description = moduleInformation.description.trim();
        const hasDescription = description != null && description.length > 0;
        const descriptionStatus = hasDescription ? 'has-description' : 'no-description';

        if (hasDescription)
            html += `<tr onClick="buildModal(${moduleIndex},${index})" class="${descriptionStatus}" >`;
        else
            html += `<tr class="${descriptionStatus}">`;

        html += `<td>${moduleInformation.name}</td>`;
        html += `<td>${moduleInformation.workload}</td>`;
        html += '</tr>';
    });
    return html;
}

function closeModal() {
    modal.style.display = 'none';
}

function openModal() {
    modal.style.display = 'flex';
}

function buildModal(gradeIndex, disciplineIndex) {
    const modalContent = document.querySelector('#modal > div > div.modal-content');
    const discipline = grade[gradeIndex][disciplineIndex];
    modalContent.innerHTML = `<b>Disciplina: ${discipline.name}</b><br>`;
    modalContent.innerHTML += `${discipline.description}`;
    openModal();
}