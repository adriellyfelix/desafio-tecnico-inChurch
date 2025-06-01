# Projeto de Automação de Testes - inChurch

Este projeto contém testes automatizados com a aplicação Saucedemo, focando nos fluxos de adição de produtos ao carrinho e finalização de compra.

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação

## 📋 Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
# URLs
CYPRESS_BASE_URL=https://www.saucedemo.com

# Credenciais de Teste
TEST_USER_NAME=standard_user
TEST_USER_PASSWORD=secret_sauce
```

## �� Executando os Testes

### Modo Interativo
Para executar os testes com interface gráfica:
```bash
npm run cypress:open
```

### Modo Headless
Para executar os testes em modo headless (sem interface gráfica):
```bash
npm run cypress:run
```

## 📁 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/              # Testes automatizados
│   ├── fixtures/         # Dados de teste
│   ├── support/          # Comandos personalizados
│   └── videos/           # Gravações dos testes
├── doc/                  # Documentação
│   ├── adicionaProduto.md
│   └── finalizaCompra.md
├── .env                  # Variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
├── cypress.config.js    # Configuração do Cypress
└── package.json         # Dependências e scripts
```

## 📝 Fluxos de Teste

### Adição de Produtos
- Adição de produto individual
- Adição de múltiplos produtos
- Validação do carrinho
- Verificação de contadores

### Finalização de Compra
- Verificação do carrinho
- Preenchimento de informações
- Revisão do pedido
- Confirmação da compra

## 📚 Documentação

A documentação detalhada dos fluxos de teste está disponível na pasta `doc/`:
- [Adição de Produtos](doc/adicionaProduto.md)
- [Finalização de Compra](doc/finalizaCompra.md)

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✒️ Autor

* **Adrielly Costa** - *QA* - (https://github.com/adriellyfelix)

## Observações

1. Prezo por usar as fixtures e manter os dados de teste mais encapsulados, para melhor manutenção e legibilidade, no entanto, a URL que usei não dispõe de recursos suficientes para implementar testes mais robustos.

## Uso de IA 

1. Com o advento do uso de inteligência artificial, acredito fortemente que como profissionais precisamos usar a tecnologia ao nosso favor para assim, fortalecer pilares como o de performance, segurança, qualidade e produtividade. Na área de qualidade de software, a IA pode ser uma aliada poderosa para:

   - **Automação Inteligente**: A IA pode ajudar a identificar padrões em testes, sugerir melhores práticas e otimizar a cobertura de testes.
   
   - **Análise Preditiva**: Identificar potenciais problemas antes que eles ocorram, através da análise de padrões em logs e métricas.
   
   - **Geração de Testes**: Criar casos de teste mais abrangentes e eficientes, considerando diferentes cenários e edge cases.
   
   - **Manutenção de Testes**: Automatizar a atualização de testes quando a aplicação muda, reduzindo o trabalho manual.
   
   - **Análise de Qualidade**: Avaliar a qualidade do código e sugerir melhorias, complementando as ferramentas tradicionais de análise estática.
   
   - **Documentação Inteligente**: Gerar e manter documentação atualizada automaticamente, baseada nas mudanças do código.
   
   - **Debugging Avançado**: Identificar a causa raiz de problemas complexos mais rapidamente através de análise inteligente de logs e comportamentos.

2. A IA não substitui o profissional de QA, mas sim potencializa suas capacidades, permitindo focar em aspectos mais estratégicos e criativos do processo de qualidade, enquanto tarefas repetitivas e de análise são otimizadas pela tecnologia.

## Agradecimentos

🙏 [À Deus] - Pela oportunidade de aprender e compartilhar conhecimento.
💼 [À inChurch] - Pela oportunidade de participar do processo seletivo até aqui.
🛠️ [À Saucedemo] - Por disponibilizar a aplicação pra fins de estudo.