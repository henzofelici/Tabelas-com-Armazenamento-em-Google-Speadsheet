<h1 align="center" id="title">Tabela com Armazenamento em Google Spreadsheet ⚙</h1>

<p id="description">O sistema de Tabelas funciona de acordo com um Armazenamento Alternativo, não utilizando um banco de dados em linguagem SQL, faz uso de planilhas, sim, Spreadsheets do Google. Ferramenta na qual qualquer usuário com uma conta Google consegue ter acesso por meio de suas ferramentas google.</p>

 <center><img align="center" src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/tabela_geral.png?raw=true" height="auto" width="920px"></center>
<br />

<h2>🎨 Preview</h2>

 - <a href="https://henzofelici.github.io/Tabelas-com-Armazenamento-em-Google-Speadsheet/TAB.elas%20-%20Armazenamento%20em%20Planilhas/tabela1.html">Teste as tabelas aqui [Tabela 1].</a>
 - <a href="https://henzofelici.github.io/Tabelas-com-Armazenamento-em-Google-Speadsheet/TAB.elas%20-%20Armazenamento%20em%20Planilhas/tabela2.html">Teste as tabelas aqui [Tabela 2].</a>

<br />
<h2>🌟 Idéia</h2>

> Tudo começou com a vontade de fazer algo prático,
> funcional e principalmente, adáptavel. No github temos apenas como
> hospedar sites dinamicos com JavaScript e site estáticos, porém, sem PHP.

Para fazer uso de um Banco de Dados em SQL, o mínimo necessário é rodar um código fonte em PHP. O sistema é idealizado
para ajudar nós, que não vamos pagar uma Hospedagem apenas para testar projetos, e faremos uso dos repositórios do GitHub.

Utilizando apenas JavaScript como linguagem para fazer a conexão entre, Site e Banco, consegui chegar no resultado esperado, um site com banco de dados externo, totalmente adaptado para o [github](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet).

Apenas uma chave [API](https://console.cloud.google.com/) de relação separa Tabela e Banco de Dados.
<br />
<br />
<br />

<h2>🔎 Métodos</h2>

Tudo o que foi utilizado para a criação desse projeto:

*    JavaScript (Conexão / LocalStorage)
*    G.Sheets API (Google-Sheets / SpreadSheets)
*    HTML5 / CSS3

<br />
<h2>🔑 Utilize essa tabela como seu próprio Banco de Dados</h2>

<p>1. Abra o site Console.Cloud da sua conta Google, e abra o Menu superior esquerdo</p>

![](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte1.png?raw=true)
<br />
<br />
<p>2. Localize a opção API's e Serviços > API's e Serviços Ativados</p>

![](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte2.png?raw=true)
<br />
<br />
<p>3. Já em API's e Serviços, agora localize a opção Biblioteca</p>

![](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte3.png?raw=true)
<br />
<br />
<p>4. Já na barra de pesquisa, procure por Google Sheets API, assim como na ilustração a seguir</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte4.png?raw=true" height="auto" width="820px">
<br />
<br />
<p>5. Encontrada a seguinte API, clique sobre ela e faça a instalação</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte5.png?raw=true" height="auto" width="820px">
<br />
<br />
<p>6. Com a API instalada, no mesmo menu esquerdo, procure por Credenciais</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte6.png?raw=true" height="auto" width="auto">
<br />
<br />
<p>7. Localize sua chave API, por padrão o nome vem da seguinte forma: Chave de API 1</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte7.png?raw=true" height="auto" width="820px">
<br />
<br />
<p>8. Logo após localizar sua chave, basta copia-lá</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/configurar_cloud/parte8.png?raw=true" height="auto" width="820px">
<br />
<br />
<p>9. Agora localize no código da Tabela [1 ou 2]</p>

Substitua a linha de código a seguir com a sua Chave API, encontrada no passo 8.                
Para te ajudar, utilize `CTRL+F`, para conseguir buscar por esta linha de código

```bash
// API KEY
const API_KEY = "39-CARACTERES-XXXXXXXXXXXXXXXXXXXXXXXXX";
```
Você irá precisar selecionar tudo o que está entre "aspas" e substituir pela sua `Chave API` encontrada na etapa anterior. Utilize `CTRL+V` ou `botão direito` e `colar`

<br />
<br />
<p>10. Para criar uma planilha e armazenar Dados, entre no aplicativo Spreadsheet da Google, dentro do seu perfil no Navegador ou Celular</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/1.png?raw=true" height="auto" width="auto">
<br />
<br />
<p>11. Selecione a função Planilhas, que são os Google Spreadsheets</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/2.png?raw=true" height="auto" width="auto">
<br />
<br />
<p>12. Dentro de Planilhas, encontre o seguinte ícone</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/3.png?raw=true" height="auto" width="auto">
<br />
<br />
<p>13. Agora crie uma nova planilha</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/4.png?raw=true" height="auto" width="auto">
<br />
<br />
<p>14. Preencha sua planilha. Existe a baixo um exemplo, de como você pode customizar o seu Banco de Dados</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/10.png?raw=true" height="auto" width="auto">
<br />
<br />

> Após concluída a etapa 14, sua tabela estará pronta, porém, será necessário mais algumas etapas.⠀        ⠀  
> Como por exemplo, pegar a ID desse seu Banco em Spreadsheet e integra-lo ao código.⠀        ⠀        
> Aprenda a seguir como fazer isso da maneira correta!

<br />
<br />
<p>15. Com a Planilha preenchida, busque pela opção, Compartilhar</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/5.png?raw=true" height="auto" width="auto" style="border-radius:50%">
<br />
<br />
<p>16. Mude o acesso geral para: Qualquer pessoa com o link</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/6.png?raw=true" height="auto" width="auto" style="border-radius:50%">
<br />
<br />
<p>17. Selecione a opção de Leitor, para sua própria segurança</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/7.png?raw=true" height="auto" width="auto" style="border-radius:50%">
<br />
<br />
<p>18. Agora copie o link de sua Planilha</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/8.png?raw=true" height="auto" width="auto" style="border-radius:50%">
<br />
<br />
<p>19. Cole o link de sua Planilha na URL, selecione apenas a parte com números, letras e caracteres especiais, que ficam entre os demarcadores de endereço "/", são apenas esses 44 caracteres que iremos utilizar</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/9.png?raw=true" height="auto" width="auto" style="border-radius:50%">

Copie apenas esta parte da URL, de 44 caracteres, com `CTRL+C` ou `botão direito` e `copiar`
<br />
<br />
<br />

20. Com a URL da sua Spreadsheet em mãos, agora com auxílio do comando `CTRL+F`, encontre a linha de código abaixo nos arquivos das Tabelas [1 ou 2]

```bash
// Spreadsheet ID
const spreadsheetId = "1dwkU5kETN3lCGGvDDPG_EmLqJjNgdEserCRreQMSOXw";
```
Agora basta substituir `1dwkU5kETN3lCGGvDDPG_EmLqJjNgdEserCRreQMSOXw` pela sua URL copiada na etapa 19, cole-a com `CTRL+V` ou selecione todo o código acima que está entre "aspas"
e substitua com `botão direito` e `colar`, com isso você consegue efetuar ativação do seu Banco de Dados personalizado.
<br />
<br />
<br />
<br />
<br />
Ao final de todas etapas, sua tabela deverá estar totalmente pronta para receber novos Dados e Informações de suas planilhas.
Dessa forma você consegue desfrutar de todos os benefícios da forma que escolher.

![](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/tabela_dados.png?raw=true)

<br />

## Licença

[MIT](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/ebcbeeeaea861afd7834528bb684fd224d7d78dc/LICENSE)
