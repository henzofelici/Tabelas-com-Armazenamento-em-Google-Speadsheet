# Sistema

O sistema de Tabelas com Armazenamento Alternativo, não utilizando um banco de dados em linguagem SQL, faz uso de planilhas, sim, Spreadsheets do Google. Ferramenta na qual qualquer usuário com uma conta Google consegue ter acesso por meio de suas ferramentas google.

## Idéia
>
> Tudo começou com a vontade de fazer algo prático,
> funcional e principalmente, adáptavel. No github temos apenas como
> hospedar sites dinamicos com JavaScript e site estáticos, porém, sem PHP.

```sh
Para fazer uso de um Banco de Dados em SQL, o mínimo necessário é rodar um código fonte em PHP. Pensando nisso, é fato que a maioria de nós não queremos ter que pagar uma Hospedagem apenas para testar nossos projetos, tanto para mostrar aos outros. Por isso, muitos optam por fazer uso dos repositórios do GitHub com um Host particular.
```

Utilizando apenas JavaScript como linguagem para fazer a conexão entre, Site e Banco, consegui chegar no resultado esperado, um site com banco de dados externo, totalmente adaptado para o [github](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet).

Apenas uma chave [API G-CLOUD](https://console.cloud.google.com/) de relação separa Tabela e Banco de Dados
```bash
const API_KEY = "AIzaSyBHmDvBAPF-q-XlMaA6J73ZLKs4kbTVDGw";
```
