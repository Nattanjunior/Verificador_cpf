const url = 'https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cpf-light/v2/consulta/cpf/';

export async function validateCPF(cpf) {
  const response = await fetch(`${url}${cpf}`);
  const data = await response.json();
  return data;
}