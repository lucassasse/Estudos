import urllib.request
import re
from functools import reduce
from collections import Counter
import sys
from multiprocessing import Pool

def lista_palavras_com_freq(lista_palavras):
    freq_palavras = [lista_palavras.count(p) for p in lista_palavras]
    return dict(list(zip(lista_palavras,freq_palavras)))

def ordena_dicionario(freq_dicionario):
    return sorted(freq_dicionario.items(), key=lambda x: x[1], reverse=True)

def remove_stopwords(lista_palavras, stopwords):
    return [w for w in lista_palavras if w not in stopwords]

def strip_tags(page_contents):
    return re.sub(r'<[^>]+>', '', page_contents)

def print_dictionary_sum(dict_list):
    sum_dict = reduce(lambda x, y: x + Counter(y), dict_list, Counter())
    for word, freq in sum_dict.items():
        print(f"{word}: {freq}")

urls = [
    'https://pt.wikipedia.org/wiki/COBOL',
    'https://pt.wikipedia.org/wiki/Linguagem_assembly',
    'https://pt.wikipedia.org/wiki/C'
]

stopwords = {'a','agora','ainda','alguém','algum','alguma','algumas','alguns','ampla','amplas','amplo',
             'amplos','ante','antes','ao','aos','após','aquela','aquelas','aquele','aqueles','aquilo',
             'as','até','através','cada','coisa','coisas','com','como','contra','contudo','da','daquele',
             'daqueles','das','de','dela','delas','dele','deles','depois','dessa','dessas','desse',
             'desses','desta','destas','deste','deste','destes','deve','devem','devendo','dever',
             'deverá','deverão','deveria','deveriam','devia','deviam','disse','disso','disto','dito',
             'diz','dizem','do','dos','e','é','ela','elas','ele','eles','em','enquanto','entre','era',
             'essa','essas','esse','esses','esta','está','estamos','estão','estas','estava','estavam',
             'estávamos','este','estes','estou','eu','fazendo','fazer','feita','feitas','feito','feitos',
             'foi','for','foram','fosse','fossem','grande','grandes','há','isso','isto','já','la','lá',
             'lhe','lhes','lo','mas','me','mesma','mesmas','mesmo','mesmos','meu','meus','minha',
             'minhas','muita','muitas','muito','muitos','na','não','nas','nem','nenhum','nessa',
             'nessas','nesta','nestas','ninguém','no','nos','nós','nossa','nossas','nosso','nossos',
             'num','numa','nunca','o','os','ou','outra','outras','outro','outros','para','pela','pelas',
             'pelo','pelos','pequena','pequenas','pequeno','pequenos','per','perante','pode','pude',
             'podendo','poder','poderia','poderiam','podia','podiam','pois','por','porém','porque',
             'posso','pouca','poucas','pouco','poucos','primeiro','primeiros','própria','próprias',
             'próprio','próprios','quais','qual','quando','quanto','quantos','que','quem','são','se',
             'seja','sejam','sem','sempre','sendo','será','serão','seu','seus','si','sido','só','sob',
             'sobre','sua','suas','talvez','também','tampouco','te','tem','tendo','tenha','ter','teu',
             'teus','ti','tido','tinha','tinham','toda','todas','todavia','todo','todos','tu','tua',
             'tuas','tudo','última','últimas','último','últimos','um','uma','umas','uns','vendo','ver',
             'vez','vindo','vir','vos','vós', '/', '|', '1', '&#x27e8;ch&#x27e9;', '/k/.', '/ʃ/', ';',
             'isbn&#160;0-471-80461-4&#160;', '&#x27e8;c&#x27e9;','2021&#160;', '7', '&#x27e8;c&#x27e9;',
             '*', 'p.', '#b60000;background-color:#ffebeb}body.skin-vector', '#ffb56b}body.skin-vector',
             'b', '2px', '#b60000}body.skin-vector', '#ffe411}body.skin-vector', '#840084}body.skin-vector',
             '#c7c7c7}body.skin-vector', 'à', '8', 'dd', 'go', '10%;border-collapse:collapse;border:1px',
             ',', 'e.', '-', '↑', 'al', '/k/', 'c', 'e', '/s/', 'k', 'i', 'y', '/dʒ/', 's', 'x', 'à', 'u',
             '.mbox-inside', '.mw-parser-output', '.compact-ambox', '.ambox', '.mbox-inside', 'the', 'of',
             'd', 'a', 'ch', "'c'", 'i,', '/tʃ/', '/ts/', 'e,', 'al,', 'mov', 'olá,', 'os/360', '.mbox-text'}

dict_list = []
for url in urls:
    response = urllib.request.urlopen(url)
    html = response.read().decode('UTF-8')
    texto = strip_tags(html).lower()
    lista_palavras = texto.split()
    lista_palavras = remove_stopwords(lista_palavras, stopwords)
    dicionario = lista_palavras_com_freq(lista_palavras)
    dicionario_filtrado = {key: val for key, val in dicionario.items() if val > 2}
    ordenacao_dicionario = ordena_dicionario(dicionario_filtrado)
    dict_list.append(ordenacao_dicionario)

sys.stdout.reconfigure(encoding='utf-8')
print("\n\nDicionário mapeado e reduzido:\n")
print_dictionary_sum(dict_list)