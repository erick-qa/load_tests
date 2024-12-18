# K6 Load Testing Project

Este projeto utiliza o [K6](https://k6.io/) para realizar testes de carga em uma API pública. O objetivo do teste é simular um número elevado de usuários simultâneos acessando a API e verificar como a aplicação se comporta sob carga.

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

### Passos

1. Clone este repositório para seu ambiente local:

   ```bash
   git clone https://github.com/erick-qa/k6-load-tests.git
   cd k6-load-tests
   
Execute o teste com o seguinte comando:


```k6 run load_tests.js --summary-export=summary.json
Este comando executará o teste de carga com 500 usuários virtuais (vus) por 5 minutos. Os resultados serão exportados em formato JSON (summary.json).

Gere o relatório HTML com os resultados:
```bash
npx k6-reporter --input summary.json --output result.html
```
Isso criará o arquivo result.html com o relatório em formato HTML.

Como Rodar os Testes no GitHub Actions
Este repositório contém um fluxo de trabalho do GitHub Actions que executa os testes de carga automaticamente sempre que um Pull Request é aberto na branch main.
