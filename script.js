
const questions = [
    {
        "question": "Considerando os principais diferenciais da computação em nuvem em relação a data centers tradicionais, quais vantagens estratégicas são comumente associadas à adoção da nuvem em ambientes corporativos?",
        "options": [
            "Custos variáveis em vez de fixos",
            "Escalabilidade sob demanda",
            "Maior responsabilidade do cliente pela infraestrutura",
            "Implantação global em minutos"
        ],
        "answers": [0, 1, 3],
        "explanation": "Os principais benefícios da computação em nuvem incluem custo variável, escalabilidade sob demanda e a capacidade de implantar globalmente em minutos. [Fonte: AWS Cloud Computing Benefits]"
    },
    {
        "question": "No contexto do modelo de responsabilidade compartilhada adotado pela AWS, como se dá a divisão das obrigações de segurança entre o provedor de nuvem e o cliente, e qual o impacto dessa divisão sobre a configuração e proteção de workloads?",
        "options": [
            "O cliente é responsável pela segurança física da nuvem",
            "A AWS gerencia a segurança da nuvem e o cliente gerencia a segurança dentro da nuvem",
            "A AWS gerencia todas as responsabilidades de segurança para o cliente",
            "O cliente é responsável pelo hardware e a AWS pelos dados"
        ],
        "answers": [1],
        "explanation": "No modelo de responsabilidade compartilhada, a AWS protege a infraestrutura da nuvem, enquanto o cliente gerencia a segurança dos dados e configurações de acesso. [Fonte: AWS Shared Responsibility Model]"
    },
    {
        "question": "Como o modelo de precificação pay-as-you-go adotado pela AWS influencia diretamente a elasticidade de custos operacionais e a viabilidade de experimentação em ambientes de nuvem pública?",
        "options": [
            "Pagar apenas pelo que for utilizado",
            "Pagamento antecipado obrigatório",
            "Contrato fixo de longo prazo",
            "Custo fixo independente do uso"
        ],
        "answers": [0],
        "explanation": "O modelo de pay-as-you-go permite pagar apenas pelos serviços consumidos, sem custos fixos antecipados. [Fonte: AWS Pricing]"
    },
    {
        "question": "Em um ambiente de computação em nuvem, quais serviços nativos da AWS desempenham papéis essenciais na proteção contra ameaças como ataques DDoS, acessos indevidos e exposição de recursos sensíveis?",
        "options": [
            "AWS Shield",
            "AWS WAF",
            "Amazon RDS",
            "AWS IAM"
        ],
        "answers": [0, 1, 3],
        "explanation": "AWS Shield protege contra ataques DDoS, AWS WAF protege contra tráfego malicioso e IAM gerencia acessos e permissões. [Fonte: AWS Security Services]"
    },
    {
        "question": "Ao configurar políticas no AWS Identity and Access Management (IAM), qual prática de segurança é fundamental para reduzir riscos operacionais e limitar exposições indevidas de recursos?",
        "options": [
            "Aplicar o princípio de privilégio mínimo",
            "Criar permissões amplas para facilitar o acesso",
            "Evitar rotação de credenciais",
            "Desativar autenticação multifator (MFA)"
        ],
        "answers": [0],
        "explanation": "A prática recomendada é aplicar o princípio de privilégio mínimo, garantindo que os usuários tenham apenas as permissões necessárias. [Fonte: AWS IAM Best Practices]"
    },
    {
        "question": "Como o AWS Artifact contribui para o atendimento a requisitos de conformidade e auditoria, especialmente em ambientes regulados como os setores financeiro e de saúde?",
        "options": [
            "Uma ferramenta para gerenciar infraestrutura como código",
            "Um serviço para visualizar e baixar relatórios de conformidade da AWS",
            "Uma API para criptografar dados armazenados no S3",
            "Um serviço para armazenar logs de auditoria"
        ],
        "answers": [1],
        "explanation": "AWS Artifact fornece relatórios de conformidade e certificações da AWS para auditorias e regulamentações. [Fonte: AWS Artifact]"
    },
    {
        "question": "Em arquiteturas orientadas a microsserviços ou aplicações event-driven, qual serviço da AWS permite executar trechos de código de forma escalável e sob demanda, eliminando a necessidade de provisionamento de servidores?",
        "options": [
            "Amazon EC2",
            "AWS Lambda",
            "AWS Fargate",
            "Amazon RDS"
        ],
        "answers": [1],
        "explanation": "O AWS Lambda permite executar código sem necessidade de gerenciar servidores, cobrando apenas pelo tempo de execução. [Fonte: AWS Lambda]"
    },
    {
        "question": "Ao planejar o armazenamento de dados estruturados na AWS, quais serviços são recomendados para cenários que envolvem modelos relacionais e não relacionais com alta disponibilidade e escalabilidade?",
        "options": [
            "Amazon S3",
            "Amazon DynamoDB",
            "Amazon RDS",
            "AWS Lambda"
        ],
        "answers": [1, 2],
        "explanation": "Amazon RDS armazena dados relacionais estruturados, enquanto Amazon DynamoDB armazena dados NoSQL estruturados. [Fonte: AWS Databases]"
    },
    {
        "question": "Quais configurações ou permissões caracterizam um bucket do Amazon S3 como público, aumentando os riscos de exposição de dados sensíveis a acessos não autorizados?",
        "options": [
            "Pode ser acessado apenas via IAM",
            "Tem políticas de acesso abertas que permitem acesso a qualquer usuário da internet",
            "Exige autenticação multifator (MFA) para acesso",
            "Apenas usuários root podem acessar"
        ],
        "answers": [1],
        "explanation": "Um bucket S3 público tem políticas de acesso que permitem que qualquer usuário da internet visualize ou modifique os arquivos armazenados. [Fonte: AWS S3 Security]"
    },
    {
        "question": "Durante o planejamento financeiro de uma solução em nuvem, qual ferramenta da AWS pode ser utilizada para estimar os custos de serviços antes do provisionamento, facilitando simulações e decisões estratégicas?",
        "options": [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Budgets",
            "AWS CloudWatch"
        ],
        "answers": [0],
        "explanation": "O AWS Pricing Calculator permite estimar custos com base nos serviços desejados antes da utilização. [Fonte: AWS Pricing Calculator]"
    },
    {
        "question": "Qual plano de suporte da AWS é ideal para organizações com ambientes críticos, oferecendo acesso direto a engenheiros de suporte 24/7 e resposta prioritária para incidentes graves?",
        "options": [
            "AWS Developer",
            "AWS Business",
            "AWS Enterprise",
            "AWS Basic"
        ],
        "answers": [2],
        "explanation": "O AWS Enterprise Support inclui suporte 24/7 com tempo de resposta de 15 minutos para incidentes críticos. [Fonte: AWS Support Plans]"
    },
    {
        "question": "Quais estratégias de otimização de custos a AWS oferece para workloads que exigem instâncias EC2 ou RDS de maneira flexível ou previsível?",
        "options": [
            "Instâncias Reservadas",
            "Spot Instances",
            "Savings Plans",
            "Instâncias de Demanda"
        ],
        "answers": [0, 1, 2],
        "explanation": "Instâncias Reservadas, Spot Instances e Savings Plans ajudam a reduzir custos ao comprometer-se com uso antecipado ou utilizar capacidade ociosa da AWS. [Fonte: AWS Pricing Options]"
    },
    {
        "question": "Quais são os pilares fundamentais do AWS Well-Architected Framework que fornecem diretrizes para construir infraestruturas resilientes, seguras e eficientes na nuvem?",
        "options": [
            "Excelência Operacional",
            "Segurança",
            "Confiabilidade",
            "Eficiência de Performance",
            "Otimização de Custos",
            "Sustentabilidade",
            "Escalabilidade"
        ],
        "answers": [0, 1, 2, 3, 4],
        "explanation": "Os cinco pilares do AWS Well-Architected Framework são: Excelência Operacional, Segurança, Confiabilidade, Eficiência de Performance e Otimização de Custos. A Sustentabilidade foi adicionada como o sexto pilar recentemente. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Dentro do AWS Cloud Adoption Framework (CAF), qual perspectiva é responsável por garantir que a estratégia de adoção em nuvem esteja diretamente alinhada aos objetivos e metas de negócio da organização?",
        "options": [
            "Negócios",
            "Pessoas",
            "Governança",
            "Plataforma",
            "Segurança",
            "Operações"
        ],
        "answers": [0],
        "explanation": "A perspectiva de Negócios do AWS CAF foca em alinhar a estratégia de TI com os objetivos de negócio. [Fonte: AWS Cloud Adoption Framework]"
    },
    {
        "question": "Ao estabelecer uma conexão VPN Site-to-Site entre a AWS e um ambiente on-premises, quais componentes de rede são obrigatórios para configurar e manter essa comunicação segura?",
        "options": [
            "Transit Gateway",
            "Customer Gateway",
            "VPN Gateway",
            "NAT Gateway",
            "Internet Gateway"
        ],
        "answers": [1, 2],
        "explanation": "Para estabelecer uma conexão VPN Site-to-Site na AWS, são necessários um Gateway de Cliente (definindo o dispositivo ou software do lado do cliente) e um Gateway de VPN (do lado da AWS). [Fonte: AWS Site-to-Site VPN]"
    },
    {
        "question": "Qual recurso da AWS permite estabelecer comunicação privada entre duas VPCs, eliminando a necessidade de gateways, VPNs ou links dedicados?",
        "options": [
            "VPC Peering",
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "AWS PrivateLink"
        ],
        "answers": [0],
        "explanation": "O VPC Peering permite a comunicação privada entre duas VPCs sem a necessidade de um gateway, VPN ou outra conexão. [Fonte: AWS VPC Peering]"
    },
    {
        "question": "Ao lidar com dados acessados com baixa frequência, quais classes de armazenamento do Amazon S3 são mais indicadas para reduzir custos mantendo acessibilidade quando necessário?",
        "options": [
            "S3 Standard",
            "S3 Intelligent-Tiering",
            "S3 Standard-IA",
            "S3 One Zone-IA",
            "S3 Glacier",
            "S3 Glacier Deep Archive"
        ],
        "answers": [2, 3, 4, 5],
        "explanation": "As classes S3 Standard-IA, S3 One Zone-IA, S3 Glacier e S3 Glacier Deep Archive são projetadas para dados acessados com pouca frequência. [Fonte: Amazon S3 Storage Classes]"
    },
    {
        "question": "No AWS Well-Architected Framework, qual pilar é responsável por garantir que uma aplicação seja tolerante a falhas, resiliente e capaz de se recuperar rapidamente diante de interrupções?",
        "options": [
            "Excelência Operacional",
            "Segurança",
            "Confiabilidade",
            "Eficiência de Performance",
            "Otimização de Custos"
        ],
        "answers": [2],
        "explanation": "O pilar de Confiabilidade assegura que um sistema possa se recuperar de falhas e atender às demandas dos clientes. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Ao construir uma VPC na AWS, quais componentes principais são necessários para definir sub-redes, controle de tráfego e proteção de recursos em instâncias e serviços?",
        "options": [
            "Sub-redes",
            "Grupos de Segurança",
            "Buckets S3",
            "Tabelas de Rotas",
            "NAT Gateway"
        ],
        "answers": [0, 1, 3, 4],
        "explanation": "Os componentes principais de uma VPC incluem Sub-redes, Grupos de Segurança, Tabelas de Rotas e NAT Gateway. Buckets S3 não são componentes de uma VPC. [Fonte: Amazon VPC Components]"
    },
    {
        "question": "Qual serviço da AWS é ideal para centralizar e simplificar a conectividade entre múltiplas VPCs e ambientes on-premises, oferecendo alta escalabilidade e gerenciamento centralizado de rede?",
        "options": [
            "AWS Transit Gateway",
            "AWS Direct Connect",
            "VPC Peering",
            "AWS Site-to-Site VPN"
        ],
        "answers": [0],
        "explanation": "O AWS Transit Gateway permite gerenciar centralmente a conectividade de rede entre várias VPCs e redes on-premises. [Fonte: AWS Transit Gateway]"
    },
    {
        "question": "Ao implementar políticas de controle de acesso em buckets do Amazon S3, quais mecanismos nativos da AWS podem ser utilizados para garantir segurança granular no armazenamento de objetos?",
        "options": [
            "Políticas de Bucket",
            "Listas de Controle de Acesso (ACLs)",
            "Grupos de Segurança",
            "Políticas de IAM"
        ],
        "answers": [0, 1, 3],
        "explanation": "O acesso a buckets do Amazon S3 pode ser controlado usando Políticas de Bucket, ACLs e Políticas de IAM. Grupos de Segurança não são usados para esse propósito. [Fonte: Amazon S3 Access Control]"
    },
    {
        "question": "Qual classe de armazenamento do Amazon S3 é mais adequada para arquivamento de longo prazo, oferecendo o menor custo por GB, porém com maior tempo de recuperação dos dados?",
        "options": [
            "S3 Glacier",
            "S3 Intelligent-Tiering",
            "S3 Standard-IA",
            "S3 One Zone-IA"
        ],
        "answers": [0],
        "explanation": "O S3 Glacier é otimizado para arquivamento de longo prazo com custos reduzidos, mas com tempos de recuperação maiores. [Fonte: AWS S3]"
    },
    {
        "question": "Durante a configuração de grupos de segurança na AWS, quais práticas devem ser aplicadas para garantir um modelo de segurança eficaz baseado no princípio de menor privilégio?",
        "options": [
            "Permitir todo o tráfego de entrada por padrão",
            "Aplicar o princípio de privilégio mínimo",
            "Usar regras de entrada e saída específicas",
            "Configurar regras de negação explícita"
        ],
        "answers": [1, 2],
        "explanation": "Ao configurar grupos de segurança, deve-se aplicar o princípio de privilégio mínimo e usar regras específicas de entrada e saída. Grupos de segurança não suportam regras de negação explícita. [Fonte: AWS Security Groups]"
    },
    {
        "question": "Quais serviços da AWS são recomendados para monitorar métricas, rastrear logs e mapear a performance de aplicações distribuídas, proporcionando visibilidade e rastreabilidade de ponta a ponta?",
        "options": [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS X-Ray",
            "AWS Config"
        ],
        "answers": [1, 2],
        "explanation": "Amazon CloudWatch permite monitoramento de métricas e logs, enquanto o AWS X-Ray ajuda na observabilidade de aplicações distribuídas. [Fonte: AWS Monitoring Services]"
    },
    {
        "question": "Qual serviço da AWS fornece uma plataforma gerenciada para implantação de aplicações web, cuidando automaticamente de provisionamento, balanceamento de carga e escalabilidade?",
        "options": [
            "Amazon EC2",
            "AWS Lambda",
            "AWS Elastic Beanstalk",
            "Amazon S3"
        ],
        "answers": [2],
        "explanation": "AWS Elastic Beanstalk permite hospedar aplicações web automaticamente gerenciando infraestrutura. [Fonte: AWS Elastic Beanstalk]"
    },
    {
        "question": "Quais serviços da AWS atuam como camadas de proteção contra ataques de negação de serviço (DDoS) e requisições maliciosas em aplicações web?",
        "options": [
            "AWS Shield",
            "AWS WAF",
            "AWS Config",
            "Amazon GuardDuty"
        ],
        "answers": [0, 1],
        "explanation": "AWS Shield e AWS WAF ajudam a proteger contra ataques DDoS e tráfego malicioso. [Fonte: AWS Security Services]"
    },
    {
        "question": "Qual serviço gerenciado da AWS é utilizado para criar usuários, grupos e políticas de acesso com rastreabilidade e controle de permissões sobre recursos da nuvem?",
        "options": [
            "AWS IAM",
            "AWS Organizations",
            "AWS Secrets Manager",
            "AWS KMS"
        ],
        "answers": [0],
        "explanation": "AWS IAM permite criar, gerenciar usuários e definir permissões de acesso. [Fonte: AWS Identity and Access Management]"
    },
    {
        "question": "Para ambientes que exigem processamento em larga escala de dados distribuídos com frameworks como Hadoop e Spark, qual serviço gerenciado da AWS é mais indicado?",
        "options": [
            "AWS Glue",
            "Amazon Redshift",
            "Amazon EMR",
            "AWS Data Pipeline"
        ],
        "answers": [2],
        "explanation": "Amazon EMR é um serviço gerenciado para processamento de Big Data usando frameworks como Apache Hadoop e Spark. [Fonte: AWS EMR]"
    },

    {
        "question": "Qual serviço da AWS permite criar, publicar, proteger e monitorar APIs REST e WebSocket com escalabilidade automática e integração com outros serviços da nuvem?",
        "options": [
            "AWS App Runner",
            "Amazon API Gateway",
            "AWS Lambda",
            "Amazon CloudFront"
        ],
        "answers": [1],
        "explanation": "Amazon API Gateway permite criar, gerenciar e proteger APIs RESTful e WebSocket. [Fonte: Amazon API Gateway]"
    },
    {
        "question": "Qual serviço da AWS é ideal para distribuição global de conteúdo com baixa latência, ao utilizar pontos de presença geograficamente distribuídos e cache inteligente?",
        "options": [
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "AWS Direct Connect",
            "AWS Lambda@Edge"
        ],
        "answers": [0],
        "explanation": "Amazon CloudFront é uma rede de distribuição de conteúdo (CDN) que reduz a latência de entrega. [Fonte: AWS CloudFront]"
    },
    {
        "question": "Quais métodos de autenticação são suportados pelo AWS Identity and Access Management (IAM) para garantir o controle de acesso seguro aos recursos da nuvem?",
        "options": [
            "Autenticação baseada em senha",
            "Autenticação multifator (MFA)",
            "Autenticação baseada em certificados",
            "Autenticação de chave SSH"
        ],
        "answers": [0, 1],
        "explanation": "AWS IAM suporta autenticação baseada em senha e MFA, aumentando a segurança dos acessos. [Fonte: AWS IAM Best Practices]"
    },
    {
        "question": "Qual serviço gerenciado da AWS permite o controle centralizado de chaves criptográficas utilizadas para proteger dados em repouso e em trânsito nos serviços da nuvem?",
        "options": [
            "AWS Secrets Manager",
            "AWS Key Management Service (KMS)",
            "AWS Identity and Access Management (IAM)",
            "AWS Certificate Manager"
        ],
        "answers": [1],
        "explanation": "AWS KMS permite gerenciar e usar chaves de criptografia para proteger dados em serviços da AWS. [Fonte: AWS KMS]"
    },
    {
        "question": "Quais serviços da AWS são recomendados para estratégias de backup automatizado e recuperação de desastres em ambientes críticos, garantindo continuidade dos negócios?",
        "options": [
            "AWS Backup",
            "AWS Elastic Disaster Recovery",
            "Amazon S3 Versioning",
            "Amazon Glacier"
        ],
        "answers": [0, 1],
        "explanation": "AWS Backup gerencia backups automatizados e AWS Elastic Disaster Recovery ajuda na recuperação de desastres. [Fonte: AWS Backup Services]"
    },
    {
        "question": "No AWS Cloud Adoption Framework (CAF), qual perspectiva ajuda a definir processos e controles para garantir conformidade, gerenciamento de riscos e alinhamento com políticas internas?",
        "options": [
            "Governança",
            "Plataforma",
            "Operações",
            "Segurança"
        ],
        "answers": [0],
        "explanation": "A perspectiva de Governança no AWS CAF trata da gestão de riscos, conformidade e alinhamento estratégico com políticas organizacionais. [Fonte: AWS Cloud Adoption Framework]"
    },
    {
        "question": "Dentro do AWS Well-Architected Framework, o que o pilar de Sustentabilidade orienta ao se projetar workloads na nuvem?",
        "options": [
            "Reduzir custos de operação",
            "Melhorar a observabilidade de aplicações",
            "Minimizar o impacto ambiental e melhorar a eficiência energética",
            "Aumentar o desempenho de rede"
        ],
        "answers": [2],
        "explanation": "O pilar de Sustentabilidade foca em reduzir o impacto ambiental dos workloads e maximizar a eficiência dos recursos utilizados. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Qual classe de armazenamento do Amazon S3 é ideal para dados com acesso esporádico, armazenados em uma única zona de disponibilidade para reduzir custos?",
        "options": [
            "S3 Standard",
            "S3 Standard-IA",
            "S3 One Zone-IA",
            "S3 Glacier Deep Archive"
        ],
        "answers": [2],
        "explanation": "S3 One Zone-IA é ideal para dados acessados com pouca frequência e que podem ser armazenados em uma única zona, reduzindo os custos. [Fonte: Amazon S3 Storage Classes]"
    },
    {
        "question": "Qual serviço da AWS permite criar um sistema de arquivos totalmente gerenciado baseado no Windows File Server?",
        "options": [
            "Amazon EBS",
            "Amazon FSx for Windows File Server",
            "Amazon S3",
            "Amazon EFS"
        ],
        "answers": [1],
        "explanation": "O Amazon FSx for Windows File Server fornece um sistema de arquivos nativo do Windows totalmente gerenciado e escalável. [Fonte: Amazon FSx]"
    },
    {
        "question": "Qual recurso do Elastic Load Balancer (ELB) distribui tráfego com base no conteúdo das requisições, como URLs ou cabeçalhos?",
        "options": [
            "Application Load Balancer",
            "Network Load Balancer",
            "Classic Load Balancer",
            "Gateway Load Balancer"
        ],
        "answers": [0],
        "explanation": "O Application Load Balancer (ALB) opera na camada 7 e permite roteamento baseado em conteúdo. [Fonte: Elastic Load Balancing]"
    },
    {
        "question": "Qual modelo de implantação em nuvem oferece maior controle e responsabilidade sobre a infraestrutura, mas com menor agilidade em comparação à nuvem pública?",
        "options": [
            "Nuvem Pública",
            "Nuvem Privada",
            "Nuvem Híbrida",
            "Edge Computing"
        ],
        "answers": [1],
        "explanation": "A nuvem privada oferece controle total sobre os recursos, mas reduz a agilidade e a escalabilidade instantânea da nuvem pública. [Fonte: AWS Deployment Models]"
    },
    {
        "question": "Ao projetar um sistema resiliente com base no AWS Well-Architected Framework, qual prática ajuda a garantir a recuperação rápida em caso de falhas?",
        "options": [
            "Execução de cargas críticas em uma única AZ",
            "Uso de armazenamento local em instâncias EC2",
            "Implementação de redundância multi-AZ",
            "Desabilitar balanceamento de carga para reduzir latência"
        ],
        "answers": [2],
        "explanation": "Projetar com redundância entre zonas de disponibilidade (multi-AZ) aumenta a resiliência e disponibilidade dos sistemas. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Qual serviço AWS pode ser integrado ao ELB para inspecionar e filtrar tráfego HTTP com base em regras personalizadas?",
        "options": [
            "AWS WAF",
            "Amazon GuardDuty",
            "Amazon Macie",
            "AWS Inspector"
        ],
        "answers": [0],
        "explanation": "O AWS WAF protege aplicações contra tráfego malicioso através de regras personalizadas e pode ser integrado ao ELB. [Fonte: AWS WAF]"
    },
    {
        "question": "Em ambientes que exigem compartilhamento de arquivos com performance para cargas de trabalho de HPC ou machine learning, qual serviço é indicado?",
        "options": [
            "Amazon FSx for Lustre",
            "Amazon S3",
            "Amazon EBS",
            "AWS Storage Gateway"
        ],
        "answers": [0],
        "explanation": "Amazon FSx for Lustre é ideal para workloads de alta performance, como machine learning e HPC, oferecendo baixa latência e alta taxa de transferência. [Fonte: Amazon FSx]"
    },
    {
        "question": "Ao utilizar o Amazon S3 com versionamento habilitado, qual vantagem é obtida em termos de integridade e recuperação de dados?",
        "options": [
            "Redução automática de custos",
            "Restauração de versões anteriores de objetos excluídos ou modificados",
            "Aumento da velocidade de upload",
            "Desabilita replicação entre regiões"
        ],
        "answers": [1],
        "explanation": "O versionamento do S3 permite restaurar versões anteriores de objetos, auxiliando em recuperação de dados. [Fonte: Amazon S3 Versioning]"
    },
    {
        "question": "Qual perspectiva do AWS Cloud Adoption Framework (CAF) trata da transformação organizacional ao preparar, treinar e engajar colaboradores na adoção da nuvem?",
        "options": [
            "Pessoas",
            "Governança",
            "Plataforma",
            "Negócios"
        ],
        "answers": [0],
        "explanation": "A perspectiva 'Pessoas' do AWS CAF ajuda na preparação e no desenvolvimento de competências da equipe para operar em um ambiente em nuvem. [Fonte: AWS Cloud Adoption Framework]"
    },
    {
        "question": "Dentro do AWS Well-Architected Framework, qual pilar orienta o uso eficiente dos recursos para evitar desperdícios e maximizar o desempenho ao menor custo?",
        "options": [
            "Eficiência de Performance",
            "Segurança",
            "Otimização de Custos",
            "Sustentabilidade"
        ],
        "answers": [2],
        "explanation": "O pilar de Otimização de Custos busca evitar gastos desnecessários por meio de uso inteligente dos recursos de nuvem. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Qual das opções abaixo descreve corretamente um cenário de uso para o Amazon S3 Glacier Deep Archive?",
        "options": [
            "Dados que requerem baixa latência de acesso",
            "Dados de acesso frequente com alta disponibilidade",
            "Arquivamento de dados que raramente precisam ser acessados, com alta tolerância a tempo de recuperação",
            "Backup ativo de bases relacionais"
        ],
        "answers": [2],
        "explanation": "O S3 Glacier Deep Archive é destinado a dados raramente acessados, oferecendo o menor custo e tempos de recuperação que podem variar de horas. [Fonte: Amazon S3 Storage Classes]"
    },
    {
        "question": "Qual recurso do Elastic Load Balancer (ELB) pode ser utilizado para distribuir tráfego TCP de forma extremamente performática e com baixa latência, ideal para jogos e VoIP?",
        "options": [
            "Application Load Balancer",
            "Classic Load Balancer",
            "Gateway Load Balancer",
            "Network Load Balancer"
        ],
        "answers": [3],
        "explanation": "O Network Load Balancer (NLB) é otimizado para tráfego TCP e oferece baixa latência com alta escalabilidade, ideal para aplicações em tempo real. [Fonte: AWS ELB Types]"
    },
    {
        "question": "Qual das opções abaixo representa corretamente a relação entre as zonas de disponibilidade (AZs) e regiões na AWS?",
        "options": [
            "Cada AZ pertence a múltiplas regiões",
            "Regiões são agrupamentos lógicos de várias contas AWS",
            "Cada região contém múltiplas zonas de disponibilidade fisicamente separadas",
            "Zonas de disponibilidade são equivalentes a VPCs"
        ],
        "answers": [2],
        "explanation": "Cada região da AWS possui múltiplas zonas de disponibilidade (AZs) separadas fisicamente, o que permite alta disponibilidade e resiliência. [Fonte: AWS Global Infrastructure]"
    },
    {
        "question": "Qual benefício está diretamente associado ao uso de Auto Scaling Groups (ASG) em conjunto com o Elastic Load Balancer (ELB)?",
        "options": [
            "Redução do tempo de provisionamento de buckets S3",
            "Balanceamento de carga entre regiões",
            "Escalabilidade automática de instâncias com distribuição equilibrada do tráfego",
            "Execução de funções serverless com persistência de estado"
        ],
        "answers": [2],
        "explanation": "Auto Scaling Groups ajustam automaticamente a quantidade de instâncias EC2 com base na demanda, enquanto o ELB distribui o tráfego entre elas. [Fonte: AWS Auto Scaling]"
    },
    {
        "question": "Qual tipo de serviço é o Amazon FSx for NetApp ONTAP mais adequado para atender?",
        "options": [
            "Execução de funções Lambda",
            "Armazenamento de objetos não estruturados",
            "Workloads empresariais que exigem recursos avançados de gerenciamento de arquivos",
            "Serviços de DNS e roteamento interno"
        ],
        "answers": [2],
        "explanation": "Amazon FSx for NetApp ONTAP é um sistema de arquivos avançado, adequado para cargas empresariais que demandam snapshots, clones, e replicação eficiente. [Fonte: Amazon FSx]"
    },
    {
        "question": "Qual serviço da AWS pode ser usado para montar um sistema de arquivos em diversas instâncias Linux simultaneamente, com performance escalável e sem necessidade de provisionamento de capacidade?",
        "options": [
            "Amazon FSx",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3"
        ],
        "answers": [2],
        "explanation": "Amazon EFS é um sistema de arquivos escalável, compartilhável e ideal para workloads baseados em Linux. [Fonte: Amazon Elastic File System]"
    },
    {
        "question": "Qual prática contribui diretamente para a excelência operacional segundo o AWS Well-Architected Framework?",
        "options": [
            "Ignorar logs de auditoria para aumentar performance",
            "Automatizar mudanças para reduzir erros operacionais",
            "Provisionar manualmente os recursos para maior controle",
            "Concentrar recursos em uma única AZ para otimização de custo"
        ],
        "answers": [1],
        "explanation": "Automatizar mudanças reduz erros e aumenta a confiabilidade operacional, conforme definido no pilar de Excelência Operacional. [Fonte: AWS Well-Architected Framework]"
    },
    {
        "question": "Qual das alternativas representa um benefício direto da replicação entre regiões no Amazon S3?",
        "options": [
            "Aumento de performance de banco de dados",
            "Alta disponibilidade global e recuperação de desastres",
            "Criação automática de snapshots de instâncias EC2",
            "Bloqueio de acesso por usuários externos"
        ],
        "answers": [1],
        "explanation": "A replicação entre regiões do S3 melhora a disponibilidade global e fornece suporte à recuperação de desastres. [Fonte: Amazon S3 Replication]"
    },
    {
        "question": "Qual modelo de implantação em nuvem combina recursos de nuvem pública e privada, permitindo que dados e aplicações sejam compartilhados entre ambientes distintos?",
        "options": [
            "Nuvem Privada",
            "Nuvem Híbrida",
            "Nuvem Comunitária",
            "Edge Computing"
        ],
        "answers": [1],
        "explanation": "A nuvem híbrida combina ambientes on-premises e em nuvem pública, proporcionando flexibilidade, escalabilidade e continuidade dos negócios. [Fonte: AWS Deployment Models]"
    },
    {
        "question": "Qual ferramenta da AWS permite configurar alertas com base em métricas personalizadas, ajudando a manter aplicações sob controle proativo?",
        "options": [
            "AWS Config",
            "Amazon CloudWatch Alarms",
            "AWS Budgets",
            "AWS X-Ray"
        ],
        "answers": [1],
        "explanation": "O Amazon CloudWatch Alarms permite definir ações automatizadas com base em limites de métricas, sendo essencial para monitoramento proativo. [Fonte: Amazon CloudWatch]"
    },
    {
        "question": "Qual recurso do Amazon S3 ajuda a proteger objetos contra exclusões acidentais e alterações não autorizadas, mesmo por administradores?",
        "options": [
            "S3 Versioning",
            "S3 MFA Delete",
            "S3 Lifecycle Rules",
            "S3 Transfer Acceleration"
        ],
        "answers": [1],
        "explanation": "O S3 MFA Delete exige autenticação multifator para excluir versões de objetos, adicionando uma camada de proteção contra exclusões acidentais. [Fonte: Amazon S3 Security]"
    },
    {
        "question": "Qual serviço da AWS permite configurar zonas DNS privadas para gerenciamento interno de nomes dentro de uma VPC?",
        "options": [
            "Amazon Route 53",
            "AWS Global Accelerator",
            "Amazon CloudFront",
            "AWS Direct Connect"
        ],
        "answers": [0],
        "explanation": "Amazon Route 53 permite criar zonas hospedadas privadas para resolução de nomes dentro de uma VPC. [Fonte: Amazon Route 53]"
    },
    {
        "question": "Qual benefício do uso de serviços gerenciados como Amazon RDS e Amazon DynamoDB se destaca na perspectiva de redução de esforço operacional?",
        "options": [
            "Exige configuração manual de servidores e patches",
            "Oferece controle total sobre o sistema operacional",
            "Reduz a necessidade de tarefas administrativas como backups e atualizações",
            "Permite customização profunda do kernel do banco de dados"
        ],
        "answers": [2],
        "explanation": "Serviços gerenciados como RDS e DynamoDB eliminam grande parte das tarefas operacionais, como backups, atualizações e escalabilidade automática. [Fonte: AWS Managed Services]"
    }


];

console.log("Total de perguntas:", questions.length);


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

    // Atualiza o contador de progresso
    document.getElementById('progress-counter').innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;

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

window.onload = function () {
    shuffleQuestions(); // Embaralha perguntas ao carregar a página
    loadQuestion();
};
