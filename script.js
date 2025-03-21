const questions = [
{
    "question": "Quais são os benefícios mais comuns da computação em nuvem?",
    "options": ["Custos variáveis em vez de fixos", "Escalabilidade sob demanda", "Maior responsabilidade do cliente pela infraestrutura", "Implantação global em minutos"],
    "answers": [0, 1, 3],
    "explanation": "Os principais benefícios da computação em nuvem incluem custo variável, escalabilidade sob demanda e a capacidade de implantar globalmente em minutos. [Fonte: AWS Cloud Computing Benefits]"
},
{
    "question": "O que significa o modelo de responsabilidade compartilhada da AWS?",
    "options": ["O cliente é responsável pela segurança física da nuvem", "A AWS gerencia a segurança da nuvem e o cliente gerencia a segurança dentro da nuvem", "A AWS gerencia todas as responsabilidades de segurança para o cliente", "O cliente é responsável pelo hardware e a AWS pelos dados"],
    "answers": [1],
    "explanation": "No modelo de responsabilidade compartilhada, a AWS protege a infraestrutura da nuvem, enquanto o cliente gerencia a segurança dos dados e configurações de acesso. [Fonte: AWS Shared Responsibility Model]"
},
{
    "question": "Qual é a principal característica de um modelo de precificação baseado em pay-as-you-go?",
    "options": ["Pagar apenas pelo que for utilizado", "Pagamento antecipado obrigatório", "Contrato fixo de longo prazo", "Custo fixo independente do uso"],
    "answers": [0],
    "explanation": "O modelo de pay-as-you-go permite pagar apenas pelos serviços consumidos, sem custos fixos antecipados. [Fonte: AWS Pricing]"
},
{
    "question": "Quais serviços AWS podem ajudar a proteger uma infraestrutura em nuvem?",
    "options": ["AWS Shield", "AWS WAF", "Amazon RDS", "AWS IAM"],
    "answers": [0, 1, 3],
    "explanation": "AWS Shield protege contra ataques DDoS, AWS WAF protege contra tráfego malicioso e IAM gerencia acessos e permissões. [Fonte: AWS Security Services]"
},
{
    "question": "Qual das seguintes práticas de segurança deve ser aplicada ao criar políticas do AWS IAM?",
    "options": ["Aplicar o princípio de privilégio mínimo", "Criar permissões amplas para facilitar o acesso", "Evitar rotação de credenciais", "Desativar autenticação multifator (MFA)"],
    "answers": [0],
    "explanation": "A prática recomendada é aplicar o princípio de privilégio mínimo, garantindo que os usuários tenham apenas as permissões necessárias. [Fonte: AWS IAM Best Practices]"
},
{
    "question": "O que é AWS Artifact e como ele ajuda na conformidade?",
    "options": ["Uma ferramenta para gerenciar infraestrutura como código", "Um serviço para visualizar e baixar relatórios de conformidade da AWS", "Uma API para criptografar dados armazenados no S3", "Um serviço para armazenar logs de auditoria"],
    "answers": [1],
    "explanation": "AWS Artifact fornece relatórios de conformidade e certificações da AWS para auditorias e regulamentações. [Fonte: AWS Artifact]"
},
{
    "question": "Qual serviço AWS permite executar código sem gerenciar servidores?",
    "options": ["Amazon EC2", "AWS Lambda", "AWS Fargate", "Amazon RDS"],
    "answers": [1],
    "explanation": "O AWS Lambda permite executar código sem necessidade de gerenciar servidores, cobrando apenas pelo tempo de execução. [Fonte: AWS Lambda]"
},
{
    "question": "Quais serviços da AWS podem ser usados para armazenar dados estruturados?",
    "options": ["Amazon S3", "Amazon DynamoDB", "Amazon RDS", "AWS Lambda"],
    "answers": [1, 2],
    "explanation": "Amazon RDS armazena dados relacionais estruturados, enquanto Amazon DynamoDB armazena dados NoSQL estruturados. [Fonte: AWS Databases]"
},
{
    "question": "O que caracteriza um Amazon S3 Bucket configurado como 'Público'?",
    "options": ["Pode ser acessado apenas via IAM", "Tem políticas de acesso abertas que permitem acesso a qualquer usuário da internet", "Exige autenticação multifator (MFA) para acesso", "Apenas usuários root podem acessar"],
    "answers": [1],
    "explanation": "Um bucket S3 público tem políticas de acesso que permitem que qualquer usuário da internet visualize ou modifique os arquivos armazenados. [Fonte: AWS S3 Security]"
},
{
        "question": "Qual ferramenta AWS pode ser usada para estimar custos antes de utilizar serviços?",
        "options": ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Budgets", "AWS CloudWatch"],
        "answers": [0],
        "explanation": "O AWS Pricing Calculator permite estimar custos com base nos serviços desejados antes da utilização. [Fonte: AWS Pricing Calculator]"
    },
    {
        "question": "Qual plano de suporte AWS inclui acesso 24/7 a engenheiros de suporte e tempo de resposta de 15 minutos para incidentes críticos?",
        "options": ["AWS Developer", "AWS Business", "AWS Enterprise", "AWS Basic"],
        "answers": [2],
        "explanation": "O AWS Enterprise Support inclui suporte 24/7 com tempo de resposta de 15 minutos para incidentes críticos. [Fonte: AWS Support Plans]"
    },
    {
        "question": "Quais opções de pagamento a AWS oferece para reduzir custos em serviços como EC2 e RDS?",
        "options": ["Instâncias Reservadas", "Spot Instances", "Savings Plans", "Instâncias de Demanda"],
        "answers": [0, 1, 2],
        "explanation": "Instâncias Reservadas, Spot Instances e Savings Plans ajudam a reduzir custos ao comprometer-se com uso antecipado ou utilizar capacidade ociosa da AWS. [Fonte: AWS Pricing Options]"
    },
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
        "options": ["Transit Gateway", "Customer Gateway", "VPN Gateway", "NAT Gateway", "Internet Gateway"],
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
            {
            "question": "Qual serviço AWS é recomendado para monitoramento e observabilidade de aplicações?",
            "options": ["AWS CloudTrail", "Amazon CloudWatch", "AWS X-Ray", "AWS Config"],
            "answers": [1, 2],
            "explanation": "Amazon CloudWatch permite monitoramento de métricas e logs, enquanto o AWS X-Ray ajuda na observabilidade de aplicações distribuídas. [Fonte: AWS Monitoring Services]"
        },
        {
            "question": "Qual serviço AWS permite hospedar aplicações web sem gerenciar infraestrutura?",
            "options": ["Amazon EC2", "AWS Lambda", "AWS Elastic Beanstalk", "Amazon S3"],
            "answers": [2],
            "explanation": "AWS Elastic Beanstalk permite hospedar aplicações web automaticamente gerenciando infraestrutura. [Fonte: AWS Elastic Beanstalk]"
        },
        {
            "question": "Quais serviços AWS oferecem proteção contra ataques DDoS?",
            "options": ["AWS Shield", "AWS WAF", "AWS Config", "Amazon GuardDuty"],
            "answers": [0, 1],
            "explanation": "AWS Shield e AWS WAF ajudam a proteger contra ataques DDoS e tráfego malicioso. [Fonte: AWS Security Services]"
        },
        {
            "question": "Qual serviço AWS permite controlar e auditar permissões e acessos de usuários?",
            "options": ["AWS IAM", "AWS Organizations", "AWS Secrets Manager", "AWS KMS"],
            "answers": [0],
            "explanation": "AWS IAM permite criar, gerenciar usuários e definir permissões de acesso. [Fonte: AWS Identity and Access Management]"
        },
        {
            "question": "Qual serviço AWS é recomendado para processamento de Big Data?",
            "options": ["AWS Glue", "Amazon Redshift", "Amazon EMR", "AWS Data Pipeline"],
            "answers": [2],
            "explanation": "Amazon EMR é um serviço gerenciado para processamento de Big Data usando frameworks como Apache Hadoop e Spark. [Fonte: AWS EMR]"
        },
        {
            "question": "Qual serviço AWS permite criar APIs gerenciadas e seguras?",
            "options": ["AWS App Runner", "Amazon API Gateway", "AWS Lambda", "Amazon CloudFront"],
            "answers": [1],
            "explanation": "Amazon API Gateway permite criar, gerenciar e proteger APIs RESTful e WebSocket. [Fonte: Amazon API Gateway]"
        },
        {
            "question": "Qual serviço AWS pode ser usado para entrega global de conteúdo com baixa latência?",
            "options": ["Amazon CloudFront", "AWS Global Accelerator", "AWS Direct Connect", "AWS Lambda@Edge"],
            "answers": [0],
            "explanation": "Amazon CloudFront é uma rede de distribuição de conteúdo (CDN) que reduz a latência de entrega. [Fonte: AWS CloudFront]"
        },
        {
            "question": "Quais são as formas de autenticação suportadas pelo AWS IAM?",
            "options": ["Autenticação baseada em senha", "Autenticação multifator (MFA)", "Autenticação baseada em certificados", "Autenticação de chave SSH"],
            "answers": [0, 1],
            "explanation": "AWS IAM suporta autenticação baseada em senha e MFA, aumentando a segurança dos acessos. [Fonte: AWS IAM Best Practices]"
        },
        {
            "question": "Qual serviço AWS permite gerenciar chaves de criptografia para proteger dados?",
            "options": ["AWS Secrets Manager", "AWS Key Management Service (KMS)", "AWS Identity and Access Management (IAM)", "AWS Certificate Manager"],
            "answers": [1],
            "explanation": "AWS KMS permite gerenciar e usar chaves de criptografia para proteger dados em serviços da AWS. [Fonte: AWS KMS]"
        },
        {
            "question": "Qual serviço AWS é recomendado para criar backups automáticos e recuperação de desastres?",
            "options": ["AWS Backup", "AWS Elastic Disaster Recovery", "Amazon S3 Versioning", "Amazon Glacier"],
            "answers": [0, 1],
            "explanation": "AWS Backup gerencia backups automatizados e AWS Elastic Disaster Recovery ajuda na recuperação de desastres. [Fonte: AWS Backup Services]"
        }
];

let currentQuestionIndex = 0;
let score = 0;
const passingScore = 0.7; // 70% para aprovação

// Embaralha as perguntas no início
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Carrega uma pergunta e exibe quantas respostas devem ser selecionadas
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctCount = currentQuestion.answers.length;

    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('explanation').innerText = "";
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    // Exibir mensagem "Selecione X respostas" quando for múltipla escolha
    const selectionInfo = document.createElement('p');
    selectionInfo.className = 'fw-bold text-info text-center';
    selectionInfo.innerText = `Selecione exatamente ${correctCount} opção(ões).`;
    optionsList.appendChild(selectionInfo);

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

            if (selected > correctCount) {
                checkbox.checked = false;
            }

            // Habilita botão apenas se a quantidade correta for marcada
            document.getElementById('submit-btn').disabled = (selected !== correctCount);
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(option));
        optionsList.appendChild(li);
    });

    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
}

// Verifica se a resposta está correta e exibe feedback
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
        checkbox.disabled = true; // Bloqueia alteração após confirmação
    });

    if (isCorrect) score++;

    document.getElementById('explanation').innerText = questions[currentQuestionIndex].explanation;
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').disabled = false;
}

// Passa para a próxima pergunta ou exibe o resultado final
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Exibe o resultado final do quiz e aprovação/reprovação
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

// Reinicia o quiz com perguntas embaralhadas
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(); // Embaralha as perguntas ao reiniciar
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'inline';
    document.getElementById('next-btn').style.display = 'inline';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
}

window.onload = function() {
    shuffleQuestions(); // Embaralha perguntas ao carregar a página
    loadQuestion();
};
