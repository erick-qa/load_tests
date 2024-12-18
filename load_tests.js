import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

// Opções do teste de carga
export let options = {
  vus: 500, // número de usuários virtuais
  duration: '5m', // duração do teste (5 minutos)
};

// Função principal que será executada por cada usuário virtual
export default function () {
  // Teste 1: Listar usuários (consulta)
  let listUsersResponse = http.get('https://reqres.in/api/users?page=1');
  
  // Verifique se a resposta foi bem-sucedida (status 200)
  check(listUsersResponse, {
    'status is 200': (r) => r.status === 200,
  });

  // Teste 2: Validar que o corpo da resposta contém dados de usuários
  check(listUsersResponse, {
    'response body contains users': (r) => r.json('data').length > 0,
  });

  // Espera de 1 segundo entre as ações (simula o tempo de uso real)
  sleep(1);
}
