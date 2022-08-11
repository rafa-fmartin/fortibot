import discord

intents = discord.Intents().all()
client = discord.Client(intents=intents)
allowed_mentions = discord.AllowedMentions(everyone=True, users=True)

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if 'deixa o bot em paz' in str(message.content).lower():
        await message.channel.send(f'Claramente {message.author.name} é a menor porcaria desse grupo de losers.')
        
    ois =["eai bot", "@FortiBot", "cade o bot"]
    if any([str(message.content).lower().startswith(oi) for oi in ois]):
        await message.channel.send('Mais respeito, por favor. Olá, humano!')

    if str(message.content).lower().startswith('good bot'):
        await message.channel.send('Enfia sua aprovação no seu cu')

    tchaus = ["boa noite", "vou dormir", "tchau", "deu por hj"]
    if any([str(message.content).lower().startswith(tchau) for tchau in tchaus]):
        await message.channel.send(f'Boa noite, {message.author.name}')
        await message.channel.send('Tomara que você tenha insônia')

    quer_jogar = ["bora jogar", "vamo joga", "querem jogar", "vamos jogar"]
    if any([ocio_do_caralho in str(message.content).lower() for ocio_do_caralho in quer_jogar]):
        await message.channel.send(f'@everyone a porra ociosa que responde por {message.author.name} quer matar criança e 40tão', allowed_mentions=allowed_mentions)

    falta_de_compostura = ["bot inutil", "que droga de bot", "bot best"]
    if any([xingo in str(message.content).lower() for xingo in falta_de_compostura]):
        await message.channel.send(str(message.content).replace('bot', message.author.name))

client.run('MTAwNTU2MzczNTk3ODU1NzU3MQ.GVwopY.Ncwc9olodvPv9kF0H10rxk9M5Z9dtjIdy9rFPs')
