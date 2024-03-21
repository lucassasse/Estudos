import urllib.request
import re
from functools import reduce
from collections import Counter
import sys
from multiprocessing import Pool

# Recebe uma lista de palavras e retorna um dicionário onde as chaves são as palavras e os valores são suas frequências
def lista_palavras_com_freq(lista_palavras):
    freq_palavras = [lista_palavras.count(p) for p in lista_palavras]
    return dict(list(zip(lista_palavras,freq_palavras)))

# Ordena o dicionário de acordo com os valores (frequências) em ordem decrescente
def ordena_dicionario(freq_dicionario):
    return sorted(freq_dicionario.items(), key=lambda x: x[1], reverse=True)

#  Remove as stopwords contidas em uma lista
def remove_stopwords(lista_palavras, stopwords):
    return [w for w in lista_palavras if w not in stopwords]

# Remove as tags HTML de uma string
def strip_tags(page_contents):
    return re.sub(r'<[^>]+>', '', page_contents)

# Imprime a soma de todos os dicionários presentes em dict_list, que é a lista de dicionários - Função chamada ao fim do código
def print_dictionary_sum(dict_list):
    sum_dict = reduce(lambda x, y: x + Counter(y), dict_list, Counter())
    
    for word, freq in sum_dict.items():
        print(f"{word}: {freq}")

# Busca o conteúdo de uma ulr, realiza o processamento/tratamento e retorna em formado de dicionário
def fetch_and_process_url(url):
    response = urllib.request.urlopen(url)
    html = response.read().decode('UTF-8')
    texto = strip_tags(html).lower()
    lista_palavras = texto.split()
    lista_palavras = remove_stopwords(lista_palavras, stopwords)
    dicionario = lista_palavras_com_freq(lista_palavras)
    dicionario_filtrado = {key: val for key, val in dicionario.items() if val > 2}
    ordenacao_dicionario = ordena_dicionario(dicionario_filtrado)
    return ordenacao_dicionario

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

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8') # Configura a codificação da saída padrão para UTF-8 - Padrão brasileiro
    print("\n\nDicionário mapeado e reduzido, utilizando multiprocessamento:\n")
    
    with Pool(processes=len(urls)) as pool: # Verifica a quantidade urls da lista e utiliza este valor para definir a quantidade de processamentos paralelos - No caso, 3
        dict_list = pool.map(fetch_and_process_url, urls) # Chama função de busca e tratamento do texto das url, ao mesmo tempo

    print_dictionary_sum(dict_list)