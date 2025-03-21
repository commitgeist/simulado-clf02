const questions =[
    {
        "question": "Quais são os cinco pilares do AWS Well-Architected Framework?",
        "options": ["Excelência Operacional", "Segurança", "Confiabilidade", "Eficiência de Performance", "Otimização de Custos", "Sustentabilidade", "Escalabilidade"],
        "answers": [0, 1, 2, 3, 4],
        "explanation": "Os cinco pilares do AWS Well-Architected Framework são: Excelência Operacional, Segurança, Confiabilidade, Eficiência de Performance e Otimização de Custos. A Sustentabilidade foi adicionada como o sexto pilar recentemente. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Qual perspectiva do AWS Cloud Adoption Framework (CAF) foca em alinhar a estratégia de TI com os objetivos de negócio?",
        "options": ["Negócios", "Pessoas", "Governança", "Plataforma", "Segurança", "Operações"],
        "answers": [0],
        "explanation": "A perspectiva de Negócios do AWS CAF foca em alinhar a estratégia de TI com os objetivos de negócio. [Fonte: AWS Cloud Adoption Framework]"
    },
    {
        "question": "Quais componentes são necessários para estabelecer uma conexão VPN Site-to-Site na AWS?",
        "options": ["Gateway de Trânsito", "Gateway de Cliente", "Gateway de VPN", "Gateway NAT", "Gateway de Internet"],
        "answers": [1, 2],
        "explanation": "Para estabelecer uma conexão VPN Site-to-Site na AWS, são necessários um Gateway de Cliente (definindo o dispositivo ou software do lado do cliente) e um Gateway de VPN (do lado da AWS). [Fonte: AWS Site-to-Site VPN]"
    },
    {
        "question": "Qual serviço AWS permite a comunicação privada entre duas VPCs sem a necessidade de um gateway, VPN ou outra conexão?",
        "options": ["VPC Peering", "AWS Direct Connect", "AWS Transit Gateway", "AWS PrivateLink"],
        "answers": [0],
        "explanation": "O VPC Peering permite a comunicação privada entre duas VPCs sem a necessidade de um gateway, VPN ou outra conexão. [Fonte: AWS VPC Peering]"
    },
    {
        "question": "Quais classes de armazenamento do Amazon S3 são projetadas para dados acessados com pouca frequência?",
        "options": ["S3 Standard", "S3 Intelligent-Tiering", "S3 Standard-IA", "S3 One Zone-IA", "S3 Glacier", "S3 Glacier Deep Archive"],
        "answers": [2, 3, 4, 5],
        "explanation": "As classes S3 Standard-IA, S3 One Zone-IA, S3 Glacier e S3 Glacier Deep Archive são projetadas para dados acessados com pouca frequência. [Fonte: Amazon S3 Storage Classes]"
    },
    {
        "question": "Qual pilar do AWS Well-Architected Framework enfatiza a capacidade de um sistema se recuperar de falhas e atender às demandas dos clientes?",
        "options": ["Excelência Operacional", "Segurança", "Confiabilidade", "Eficiência de Performance", "Otimização de Custos"],
        "answers": [2],
        "explanation": "O pilar de Confiabilidade assegura que um sistema possa se recuperar de falhas e atender às demandas dos clientes. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Quais são os componentes principais de uma VPC na AWS?",
        "options": ["Sub-redes", "Grupos de Segurança", "Buckets S3", "Tabelas de Rotas", "NAT Gateway"],
        "answers": [0, 1, 3, 4],
        "explanation": "Os componentes principais de uma VPC incluem Sub-redes, Grupos de Segurança, Tabelas de Rotas e NAT Gateway. Buckets S3 não são componentes de uma VPC. [Fonte: Amazon VPC Components]"
    },
    {
        "question": "Qual serviço AWS permite gerenciar centralmente a conectividade de rede entre várias VPCs e redes on-premises?",
        "options": ["AWS Transit Gateway", "AWS Direct Connect", "VPC Peering", "AWS Site-to-Site VPN"],
        "answers": [0],
        "explanation": "O AWS Transit Gateway permite gerenciar centralmente a conectividade de rede entre várias VPCs e redes on-premises. [Fonte: AWS Transit Gateway]"
    },
    {
        "question": "Quais métodos podem ser usados para controlar o acesso a buckets do Amazon S3?",
        "options": ["Políticas de Bucket", "Listas de Controle de Acesso (ACLs)", "Grupos de Segurança", "Políticas de IAM"],
        "answers": [0, 1, 3],
        "explanation": "O acesso a buckets do Amazon S3 pode ser controlado usando Políticas de Bucket, ACLs e Políticas de IAM. Grupos de Segurança não são usados para esse propósito. [Fonte: Amazon S3 Access Control]"
    },
    {
        "question": "Qual classe do Amazon S3 oferece o menor custo de armazenamento para dados raramente acessados e exige um tempo de recuperação mais longo?",
        "options": ["S3 Glacier", "S3 Intelligent-Tiering", "S3 Standard-IA", "S3 One Zone-IA"],
        "answers": [0],
        "explanation": "O S3 Glacier é otimizado para arquivamento de longo prazo com custos reduzidos, mas com tempos de recuperação maiores. [Fonte: AWS S3]"
    },
    {
        "question": "Quais práticas recomendadas devem ser seguidas ao configurar grupos de segurança na AWS?",
        "options": ["Permitir todo o tráfego de entrada por padrão", "Aplicar o princípio de privilégio mínimo", "Usar regras de entrada e saída específicas", "Configurar regras de negação explícita"],
        "answers": [1, 2],
        "explanation": "Ao configurar grupos de segurança, deve-se aplicar o princípio de privilégio mínimo e usar regras específicas de entrada e saída. Grupos de segurança não suportam regras de negação explícita. [Fonte: AWS Security Groups]"
    },
];

let currentQuestionIndex = 0;
let score = 0;
const passingScore = 0.7; // 70% para aprovação

// function loadQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     document.getElementById('question').innerText = currentQuestion.question;
//     document.getElementById('explanation').innerText = "";
//     const optionsList = document.getElementById('options');
//     optionsList.innerHTML = '';

//     currentQuestion.options.forEach((option, index) => {
//         const li = document.createElement('li');
//         li.className = 'list-group-item';

//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.value = index;
//         checkbox.className = 'option-checkbox';

//         li.appendChild(checkbox);
//         li.appendChild(document.createTextNode(" " + option));
//         optionsList.appendChild(li);
//     });

//     document.getElementById('submit-btn').disabled = false;
//     document.getElementById('next-btn').disabled = true;
// }

function checkAnswer() {
    const selectedOptions = Array.from(document.querySelectorAll('.option-checkbox:checked')).map(input => parseInt(input.value));
    const correctAnswers = questions[currentQuestionIndex].answers.sort();

    selectedOptions.sort();

    let isCorrect = JSON.stringify(selectedOptions) === JSON.stringify(correctAnswers);

    document.querySelectorAll('.option-checkbox').forEach((checkbox, index) => {
        if (correctAnswers.includes(index)) {
            checkbox.parentElement.classList.add('correct');
        } else if (selectedOptions.includes(index)) {
            checkbox.parentElement.classList.add('incorrect');
        }
    });

    if (isCorrect) score++;

    document.getElementById('explanation').innerText = questions[currentQuestionIndex].explanation;
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').disabled = false;
}


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctCount = currentQuestion.answers.length;

    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('explanation').innerText = "";
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = index;
        checkbox.className = 'option-checkbox form-check-input me-2';

        // Evento para limitar a quantidade de seleções
        checkbox.addEventListener('change', () => {
            const selected = document.querySelectorAll('.option-checkbox:checked').length;
            const allCheckboxes = document.querySelectorAll('.option-checkbox');

            if (selected > correctCount) {
                checkbox.checked = false;
            }

            // Habilita botão apenas se acertar a quantidade exata
            document.getElementById('submit-btn').disabled = (document.querySelectorAll('.option-checkbox:checked').length !== correctCount);
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(option));
        optionsList.appendChild(li);
    });

    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
}




function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    const percentage = (score / questions.length) * 100;
    document.getElementById('result').innerText = `Você acertou ${score} de ${questions.length} (${percentage.toFixed(2)}%).`;

    if (percentage >= passingScore * 100) {
        document.getElementById('final-status').innerText = "APROVADO ✅";
        document.getElementById('final-status').style.color = "green";
    } else {
        document.getElementById('final-status').innerText = "REPROVADO ❌";
        document.getElementById('final-status').style.color = "red";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'inline';
    document.getElementById('next-btn').style.display = 'inline';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
}

window.onload = loadQuestion;