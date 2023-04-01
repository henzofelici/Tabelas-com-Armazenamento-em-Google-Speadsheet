https://socialify.git.ci/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/image?font=Source%20Code%20Pro&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F16909803%3Fs%3D400%26u%3D1b481b45f3c69d5d349fff0cc91f6882764de213%26v%3D4&name=1&owner=1&pattern=Solid&stargazers=1&theme=Dark


# Sistema

O sistema de Tabelas com Armazenamento Alternativo, não utilizando um banco de dados em linguagem SQL, faz uso de planilhas, sim, Spreadsheets do Google. Ferramenta na qual qualquer usuário com uma conta Google consegue ter acesso por meio de suas ferramentas google.


## Idéia
>
> Tudo começou com a vontade de fazer algo prático,
> funcional e principalmente, adáptavel. No github temos apenas como
> hospedar sites dinamicos com JavaScript e site estáticos, porém, sem PHP.

Para fazer uso de um Banco de Dados em SQL, o mínimo necessário é rodar um código fonte em PHP. O sistema é idealizado
para ajudar nós, que não vamos pagar uma Hospedagem apenas para testar projetos, e fazeremos uso dos repositórios do GitHub.

Utilizando apenas JavaScript como linguagem para fazer a conexão entre, Site e Banco, consegui chegar no resultado esperado, um site com banco de dados externo, totalmente adaptado para o [github](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet).

Apenas uma chave [API](https://console.cloud.google.com/) de relação separa Tabela e Banco de Dados
```bash
const API_KEY = "AIzaSyBHmDvBAPF-q-XlMaA6J73ZLKs4kbTVDGw";
```
