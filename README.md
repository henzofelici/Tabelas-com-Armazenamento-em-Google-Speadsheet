<h1 align="center" id="title">Tabela com Armazenamento em Google Spreadsheet ⚙</h1>
<p id="description">O sistema de Tabelas funciona de acordo com um Armazenamento Alternativo, não utilizando um banco de dados em linguagem SQL, faz uso de planilhas, sim, Spreadsheets do Google. Ferramenta na qual qualquer usuário com uma conta Google consegue ter acesso por meio de suas ferramentas google.</p>

 <center><img align="center" src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/tabela.png?raw=true" height="auto" width="920px"></center>
 ⠀          
 ⠀        
 ⠀        
 ⠀          
<h2>🌟 Idéia</h2>

> Tudo começou com a vontade de fazer algo prático,
> funcional e principalmente, adáptavel. No github temos apenas como
> hospedar sites dinamicos com JavaScript e site estáticos, porém, sem PHP.

Para fazer uso de um Banco de Dados em SQL, o mínimo necessário é rodar um código fonte em PHP. O sistema é idealizado
para ajudar nós, que não vamos pagar uma Hospedagem apenas para testar projetos, e fazeremos uso dos repositórios do GitHub.

Utilizando apenas JavaScript como linguagem para fazer a conexão entre, Site e Banco, consegui chegar no resultado esperado, um site com banco de dados externo, totalmente adaptado para o [github](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet).

Apenas uma chave [API](https://console.cloud.google.com/) de relação separa Tabela e Banco de Dados.
          
<h2>🔎 Métodos</h2>

Tudo o que foi utilizado para a criação desse projeto:

*    JavaScript (Conexão entre Site e Banco) / (LocalStorage -> Tema Escuro e Claro)
*    GSheets API (Google-Sheets/SpreadSheets)
*    HTML5 / CSS3
⠀      
⠀        
        
<h2>🔑 Como utilizar essa Tabela com seu Banco Próprio</h2>

<p>1. Abra o site Console.Cloud da sua conta Google, e abra o Menu superior esquerdo</p>

![alt text](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte1.png?raw=true)

<p>2. Localize a opção API's e Serviços > API's e Serviços Ativados</p>

![alt text](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte2.png?raw=true)

<p>3. Já em API's e Serviços, agora localize a opção Biblioteca</p>

![alt text](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte3.png?raw=true)

<p>4. Já na barra de pesquisa, procure por Google Sheets API, assim como na ilustração a seguir</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte4.png?raw=true" height="auto" width="820px" style="border-radius:50%">

<p>5. Encontrada a seguinte API, clique sobre ela e faça a instalação</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte5.png?raw=true" height="auto" width="820px" style="border-radius:50%">

<p>6. Com a API instalada, no mesmo menu esquerdo, procure por Credenciais</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte6.png?raw=true" height="auto" width="auto" style="border-radius:50%">

<p>7. Localize sua chave API, por padrão o nome vem da seguinte forma: Chave de API 1</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte7.png?raw=true" height="auto" width="820px" style="border-radius:50%">

<p>8. Logo após localizar sua chave, basta copia-lá</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte8.png?raw=true" height="auto" width="820px" style="border-radius:50%">

<p>9. Agora localize no código da Tabela [1 ou 2]</p>

Substitua a linha de código a seguir com a sua Chave API, encontrada no passo 8.                
Para te ajudar, utilize `CTRL + F`, para conseguir buscar por esta linha de código

```bash
// API KEY
const API_KEY = "39CARACTERES-XXXXXXXXXXXXXXXXXXXXXXXXXX";
```

<p>10. Para criar uma planilha e armazenar Dados, entre no aplicativo Spreadsheet da Google, dentro do seu perfil no Navegador ou Celular</p>

<img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/readme/criar_planilha/1.png?raw=true" height="auto" width="auto" style="border-radius:50%">


⠀        
⠀        
Ao final de todas etapas, sua tabela deverá estar totalmente pronta para receber novos Dados e Informações de suas planilhas.
Dessa forma você consegue desfrutar de todos os benefícios da forma que escolher.

![alt text](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/tabeladados.png?raw=true)
