// Importa o módulo 'fs' (File System) para trabalhar com arquivos no Node.js
const fs = require('fs')

// Define o nome do arquivo CSV que será lido
const bancoCsv = 'database.csv'

// Lê todo o conteúdo do arquivo 'database.csv' como texto (codificação utf-8)
const banco = fs.readFileSync(bancoCsv, "utf-8")

// Expressão regular para encontrar números de telefone fixo no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g

// Aplica a expressão regular ao conteúdo do banco de dados e armazena as correspondências
const matchTelefone = banco.match(regexTelefone)

// Exibe todos os telefones encontrados no console
console.log(matchTelefone);

// Expressão regular específica para números de celular no formato (XX) XXXXX-XXXX
const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g

// Aplica a expressão regular para encontrar apenas os celulares
const matchCelular = banco.match(patternCel)

// Corrige erro de digitação: 'console.console' → 'console.log'
console.log(matchCelular);
