const { stat } = require('fs');
const puppeteer = require('puppeteer');
//const { text } = require('stream/consumers');
const { exec } = require('child_process');

async function webScraping() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/reel/C246djaOkRs/?igsh=NjV5dHl3aGZwNW5i');
  await page.goto('https://www.instagram.com/p/C25BM56uxxc/');
  await page.waitForTimeout(3000); 
  const htmlContent = await page.content();
 // console.log(htmlContent);

  let textContent = "";
  const nome = await page.$$('.x9f619');
  for await (const element of nome) {
      textContent = await element.evaluate(node => node.textContent);
      console.log(textContent);
      break;
  }
  let todosComentarios = textContent.split(" ");
  let comentarioDesejado = "";
  let comentarioCompleto = [];
  for(let i2 = 0 ; i2 <= 59; i2++){
    comentarioCompleto[i2] = "hprocopiouriel." + i2;
    comentarioCompleto[i2] = "publicaçãoSalvarprocopiourielKkk" + i2;
    //console.log(comentarioCompleto);
  }
  let status = false;
  for (let i = 0; i < todosComentarios.length; i++){
   // console.log(todosComentarios[i]);
    for (let i3 = 0; i3 < comentarioCompleto.length; i3++){
      //console.log(todosComentarios[i] + " é igual a " + comentarioCompleto[i3]);
    if (todosComentarios[i] == (comentarioCompleto[i3]).toString()){
      comentarioDesejado = todosComentarios[i];
      
      i++;
      i++;
      comentarioDesejado += todosComentarios[i]
      status = true;
      break;
    }
  }
  if (status == true){
    break;
  }
}

console.log("Meu comentario: " + comentarioDesejado);

if (comentarioDesejado[33] == "c" && comentarioDesejado[34] == "u"){
  console.log("Alguem curtiu seu comentario!");

  // Nome do som padrão (consulte a lista abaixo)
const nomeDoSom = 'Basso';

// Comando para reproduzir um som padrão usando osascript no macOS Catalina
const comandoOsascript = `osascript -e 'display notification "" with title "" sound name "${nomeDoSom}"'`;

// Executa o comando
for (let i = 0; i<=10;i++){
  exec(comandoOsascript, (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao reproduzir o som: ${stderr}`);
      return;
    }
    console.log(`Som reproduzido com sucesso`);
  });
}
}
else{
  console.log("Ninguem curtiu seu comentario!");
}
await page.waitForTimeout(10000); 

await browser.close();
}

webScraping();

// Define um intervalo de 5 minutos (em milissegundos)
const intervalo = 30000; // 5 minutos em milissegundos

// Executa a função a cada 5 minutos
const intervalId = setInterval(webScraping, intervalo);

// Se desejar parar o intervalo após um certo período (por exemplo, 30 minutos), você pode usar setTimeout:
const duracaoTotal = 1440 * 60 * 1000; // 30 minutos em milissegundos
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Intervalo parado após 30 minutos");
}, duracaoTotal);



//VERSAO MACBOOK
