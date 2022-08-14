<h1 align="center"> FortiBot </h1>
<h4 align="left"> 
    :construction:  Projeto em construção  :construction:
</h4>

Bot de Discord para o Server FortiCrack: Versão JavaScript usando [discord.js](https://discord.js.org/#/)

## :hammer: Funcionalidades do projeto
- `Personalidade`: agressivo e sem paciência com a humanidade


# Instruções

1. Instale [`Node.js`](https://nodejs.org/en/) e o gerenciador de pacotes `npm` (acredito que vem junto com node). Procure na usa distribuição ou baixe o executável do Windows.

2. Instale todas as dependencias:

```
npm install
```

3. Execute o bot:
```
npm run start
```

Para atualizar a lista de comandos, execute

```
npm run register_commands
```

# Adicionando novas respostas ao bot

1. Navegue para a pasta `src/bot_responses`.
2. Duplique um dos arquivos ali presentes e renomeie para algo condizente com a sua reação.
3. Edite a variável `event_name` e dê a ela um nome único. Recomendo utilizar o mesmo nome do script pois isso evita bugs e nomes de evntos duplicados (já que o sistema operacional nao permite dois arquivos de mesmo nome).
4. Edite a variável `event_trigger` para definir qual o gatilho que fará o bot reagir. Gatilhos podem ser objetos do tipo `RegExp` ou `String`. Caso uma string seja utilizada, um match é dado quando a string gatilho é "igual" à mensagem toda. Essa comparação de strings ignora acentos e caixa alta/baixa. Caso uma `RegExp`, seja usada o match também é feito ignorando caixa alta/baixa. Para montar e testar `RegExp` visite [esse site](https://regex101.com/) e selecione o `flavor`como `ECMAScript`.
5. Adicione à variavel `response_pool` as respostas do bot ao gatilho. Durante a execução, uma dessas respostas será sorteada ao acaso então tente dar mais de uma resposta possível para dar mais "personalidade" ao bot.
6. Para reagir à uma mensagem com um emoji, basta utilizar (ou não) `message.react("EMOJI");` antes da função `on` retornar. Para adicionar um Emoji, basta copiar e colar o caractere diretamente no editor de texto (em editores modernos isso funciona, editores de terminal da década de 70 tipo Vim provavelmente tem problemas com iso). Vc pode obter caracteres copiáveis de emojis [aqui](https://emojipedia.org/).