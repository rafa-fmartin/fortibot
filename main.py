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

    if message.content.startswith('deixa o bot em paz'):
        await message.channel.send(f'Claramente {message.author.name} é o menos pior desse grupo de losers.')
        
    ola =["eai bot", "@FortiBot", "cade o bot"]
    for oi in ola:
        if message.content.startswith(oi):
            await message.channel.send('Mais respeito, por favor. Olá, humano!')

    good_bot = ["good bot", "Good bot"]
    for elogio in good_bot:
        if message.content.startswith(elogio):
            await message.channel.send('Enfia sua aprovação no seu cu')

    tchau = ["boa noite", "vou dormir", "tchau", "deu por hj"]
    for despedida in tchau:
        if message.content.startswith(despedida):
            await message.channel.send(f'Boa noite, {message.author.name}')
            await message.channel.send('Tomara que você tenha insônia')

    quer_jogar = ["bora jogar", "vamo joga", "querem jogar", "vamos jogar"]
    for ocio_do_caralho in quer_jogar:
        if message.content.startswith(ocio_do_caralho):
            await message.channel.send(f'@everyone a porra ociosa do(a) {message.author.name} quer matar criança e 40tão', allowed_mentions=allowed_mentions)

client.run('MTAwNTU2MzczNTk3ODU1NzU3MQ.GVwopY.Ncwc9olodvPv9kF0H10rxk9M5Z9dtjIdy9rFPs')
