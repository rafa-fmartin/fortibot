import discord

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('eai bot'):
        await message.channel.send('Mais respeito, por favor. Olá, humano!')

client.run('inserir token do bot aqui')