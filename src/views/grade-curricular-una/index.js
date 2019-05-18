const table = document.getElementById('grade-table');
const contentOfTable = table.getElementsByTagName('tbody')[0];

contentOfTable.innerHTML = makeGradeHTMLTable(0);

function updateTable(){
    const select = document.getElementById('select-modules');
    const moduleIndex = select.value;
    const html = makeGradeHTMLTable(moduleIndex);
    contentOfTable.innerHTML = html;
}

function makeGradeHTMLTable(moduleIndex) {
    const grade = makeGrade();
    let html = '';
    grade[moduleIndex].forEach((moduleInformation) => {
        html += '<tr>';
        html += `<td>${moduleInformation.discipline}</td>`;
        html += `<td>${moduleInformation.workload}</td>`;
        html += '</tr>';
    });
    return html;
}

function makeGrade() {
    return [
        [
            { 'discipline': 'Interface Humano Computador','workload': 80 },
            { 'discipline': 'Laboratório de Práticas Integradas','workload': 40 },
            { 'discipline': 'Requisitos, Análise e POO','workload': 80 },
            { 'discipline': 'Institucional I','workload': 80 },
            { 'discipline': 'LAI','workload': 40 }
        ],
        [
            { 'discipline': 'Banco de Dados','workload': 40 },
            { 'discipline': 'Laboratório de Práticas Integradas','workload': 40 },
            { 'discipline': 'Programação Orientada a Obejtos','workload': 120 },
            { 'discipline': 'Institucional II','workload': 80 },
            { 'discipline': 'LAI','workload': 40 }
        ],
        [
            { 'discipline': 'Algoritmos e Estrutura de Dados','workload': 80 },
            { 'discipline': 'Controle Social, Legislação e Ética em TI','workload': 80 },
            { 'discipline': 'Desenvolvimento Ágil de Software','workload': 40 },
            { 'discipline': 'Desenvolvimento Web','workload': 80 },
            { 'discipline': 'Projeto Interdisciplinar 2A','workload': 40 }
        ],
        [
            { 'discipline': 'Engenharia de Software','workload': 80 },
            { 'discipline': 'Infraestrutura de TI','workload': 80 },
            { 'discipline': 'Modelagem e Inteligência do Processo de Negócio','workload': 40 },
            { 'discipline': 'SI e Estratégias de TI','workload': 80 },
            { 'discipline': 'Projeto Interdisciplinar 2B','workload': 40 }
        ],
        [
            { 'discipline': 'Paradigmas de Linguagens de Programação','workload': 80 },
            { 'discipline': 'Redes de Computadores e Internet','workload': 80 },
            { 'discipline': 'Sistemas Operacionais','workload': 80 },
            { 'discipline': 'Projeto Interdisciplinar 3A','workload': 40 }
        ],
        [
            { 'discipline': 'Ambientes e Modelos Organizacionais na Era Digital','workload': 40 },
            { 'discipline': 'Arquitetura de Sistemas e Soluções de TI','workload': 80 },
            { 'discipline': 'Desenvolvimento Mobile e IOT','workload': 80 },
            { 'discipline': 'Segurança e Auditoria','workload': 80 },
            { 'discipline': 'Projeto Interdisciplinar 3B','workload': 40 }
        ],
        [
            { 'discipline': 'Big Data E Analytics','workload': 80 },
            { 'discipline': 'Inteligência Artificial nas Organizações','workload': 80 },
            { 'discipline': 'Métodos de Otimização','workload': 40 },
            { 'discipline': 'Institucional III','workload': 80 },
            { 'discipline': 'Projeto Interdisciplinar 3C','workload': 40 }
        ],
        [
            { 'discipline': 'Arquitetura Empresarial e Frameworks','workload': 80 },
            { 'discipline': 'Governança de Tecnologia da Informação','workload': 80 },
            { 'discipline': 'Gestão de Projetos','workload': 80 },
            { 'discipline': 'Projeto Interdisciplinar 3D','workload': 40 }
        ],
    ]
}