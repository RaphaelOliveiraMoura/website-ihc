const grade = [
    [
        { 'name': 'Interface Humano Computador', 'workload': 80 },
        { 'name': 'Laboratório de Práticas Integradas', 'workload': 40 },
        { 'name': 'Requisitos, Análise e POO', 'workload': 80 },
        { 'name': 'Institucional I', 'workload': 80 },
        { 'name': 'LAI', 'workload': 40 }
    ],
    [
        { 'name': 'Banco de Dados', 'workload': 40 },
        { 'name': 'Laboratório de Práticas Integradas', 'workload': 40 },
        { 'name': 'Programação Orientada a Obejtos', 'workload': 120 },
        { 'name': 'Institucional II', 'workload': 80 },
        { 'name': 'LAI', 'workload': 40 }
    ],
    [
        { 'name': 'Algoritmos e Estrutura de Dados', 'workload': 80 },
        { 'name': 'Controle Social, Legislação e Ética em TI', 'workload': 80 },
        { 'name': 'Desenvolvimento Ágil de Software', 'workload': 40 },
        { 'name': 'Desenvolvimento Web', 'workload': 80 },
        { 'name': 'Projeto Interdisciplinar 2A', 'workload': 40 }
    ],
    [
        { 'name': 'Engenharia de Software', 'workload': 80 },
        { 'name': 'Infraestrutura de TI', 'workload': 80 },
        { 'name': 'Modelagem e Inteligência do Processo de Negócio', 'workload': 40 },
        { 'name': 'SI e Estratégias de TI', 'workload': 80 },
        { 'name': 'Projeto Interdisciplinar 2B', 'workload': 40 }
    ],
    [
        { 'name': 'Paradigmas de Linguagens de Programação', 'workload': 80 },
        { 'name': 'Redes de Computadores e Internet', 'workload': 80 },
        { 'name': 'Sistemas Operacionais', 'workload': 80 },
        { 'name': 'Projeto Interdisciplinar 3A', 'workload': 40 }
    ],
    [
        { 'name': 'Ambientes e Modelos Organizacionais na Era Digital', 'workload': 40 },
        { 'name': 'Arquitetura de Sistemas e Soluções de TI', 'workload': 80 },
        { 'name': 'Desenvolvimento Mobile e IOT', 'workload': 80 },
        { 'name': 'Segurança e Auditoria', 'workload': 80 },
        { 'name': 'Projeto Interdisciplinar 3B', 'workload': 40 }
    ],
    [
        { 'name': 'Big Data E Analytics', 'workload': 80 },
        { 'name': 'Inteligência Artificial nas Organizações', 'workload': 80 },
        { 'name': 'Métodos de Otimização', 'workload': 40 },
        { 'name': 'Institucional III', 'workload': 80 },
        { 'name': 'Projeto Interdisciplinar 3C', 'workload': 40 }
    ],
    [
        { 'name': 'Arquitetura Empresarial e Frameworks', 'workload': 80 },
        { 'name': 'Governança de Tecnologia da Informação', 'workload': 80 },
        { 'name': 'Gestão de Projetos', 'workload': 80 },
        { 'name': 'Projeto Interdisciplinar 3D', 'workload': 40 }
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
        html += `<tr onClick="buildModal(${moduleIndex},${index})">`;
        html += `<td>${moduleInformation.name}</td>`;
        html += `<td>${moduleInformation.workload}</td>`;
        html += '</tr>';
    });
    return html;
}

function closeModal(){
    modal.style.display = 'none';
}

function openModal(){
    modal.style.display = 'flex';
}

function buildModal(gradeIndex, disciplineIndex){
    const modalContent = document.querySelector('#modal > div > div.modal-content');
    const discipline = grade[gradeIndex][disciplineIndex];
    modalContent.innerHTML = `<b>Disciplina: ${discipline.name}<b>`;

    openModal();
}