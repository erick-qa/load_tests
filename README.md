# Projeto K6 Load Testing

Este projeto utiliza o K6 para realizar testes de carga e avaliar o desempenho de APIs.

## Workflow de GitHub Actions

Este repositório inclui um workflow automatizado que executa os testes de carga com o K6 sempre que um **Pull Request** é feito na branch `main`. O workflow realiza os seguintes passos:

### Passos do Workflow:

1. **Faz checkout do código**: O repositório é clonado para o ambiente de execução.
2. **Instalação do K6**: O K6 é instalado no ambiente Ubuntu.
3. **Execução dos Testes**: Os testes de carga são executados utilizando o script `load_tests.js`, com resultados de resumo exportados para um arquivo JSON.
4. **Relatório HTML**: O relatório de execução dos testes é gerado e salvo como um arquivo HTML.
5. **Upload do Relatório HTML**: O arquivo HTML gerado é carregado como um artefato do workflow para ser acessado após a execução.



## Objetivo

O teste de carga foi implementado com os seguintes objetivos:

- Realizar requisições simultâneas para a API `https://reqres.in/api/users?page=1`.
- Validar se o status de resposta é `200 OK`.
- Verificar se a resposta da API contém usuários na resposta JSON.
- Gerar relatórios detalhados sobre o desempenho da API em formato HTML e texto.

## Tecnologias Usadas

- [K6](https://k6.io/) para simulação de carga.
- [k6-reporter](https://github.com/benc-uk/k6-reporter) para geração de relatórios HTML.
- [GitHub Actions](https://github.com/features/actions) para automação de testes de carga.

## Como Rodar o Teste Localmente

### Pré-requisitos

Antes de rodar os testes, você precisa ter o [K6](https://k6.io/docs/getting-started/) instalado em seu sistema.

## Como Funciona
**Disparo do Workflow:** O workflow é disparado quando um Pull Request é feito na branch main.

**Execução dos Testes:** O script load_tests.js é utilizado para realizar os testes de carga com o K6.

**Relatório de Resultados:** Após os testes, um relatório de resumo em formato JSON é gerado, e um relatório em HTML é produzido utilizando o k6-reporter.

**Artefato:** O relatório em HTML é carregado como artefato para visualização no GitHub Actions.

**Visualizando o Relatório:** Após a execução do workflow, você pode acessar o relatório HTML gerado como artefato na seção de Artefatos do seu workflow de pull request no GitHub. Isso fornece uma visualização detalhada dos resultados dos testes de carga realizados.

### Como Executar

Clone este repositório para seu ambiente local:

`git clone https://github.com/erick-qa/load-tests.git`

Para rodar os testes de carga, siga os passos abaixo:

Instale o K6:
```
sudo apt-get install -y wget
wget https://github.com/grafana/k6/releases/download/v0.42.0/k6-v0.42.0-linux-amd64.deb
sudo dpkg -i k6-v0.42.0-linux-amd64.deb
sudo apt-get install -f
```

Execute o script de testes:

`k6 run load_tests.js --summary-export=summary.json`

Este comando executará o teste de carga com 500 usuários virtuais (vus) por 5 minutos. Os resultados serão exportados em formato JSON (summary.json).

