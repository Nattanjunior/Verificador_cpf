const url = 'https://cnpjcheck.com.br/api/tools/validate/cpf/';

export async function validateCPF(cpf) {
  const response = await fetch(`${url}${cpf}`);
  const data = await response.json();
  return {
    valid: data.isValid,
    formatted: data.formatted,
  };
}