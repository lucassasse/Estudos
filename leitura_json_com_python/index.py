import pandas as pd
import json

# Carregar dados do arquivo JSON
with open('livros.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Criar tabelas
livros_data = []
autores_data = []
revistas_data = []

for livro in data["Livros"]:
    livro_info = {"ISBN": livro["ISBN"], "Título": livro["Título"]}
    
    # Verificar se a chave "Edição" existe antes de acessá-la
    if "Edição" in livro:
        livro_info["Edição"] = livro["Edição"]

    livros_data.append(livro_info)
    
    for autor in livro["Autores"]:
        autores_data.append({"Nome": autor["Nome"], "Sobrenome": autor["Sobrenome"], "ISBN": livro["ISBN"]})

for revista in data["Revistas"]:
    revistas_data.append({"Título": revista["Título"], "Mês": revista["Mês"], "Ano": revista["Ano"]})

# Criar DataFrames
livros_df = pd.DataFrame(livros_data)
autores_df = pd.DataFrame(autores_data)
revistas_df = pd.DataFrame(revistas_data)

# Adicionar chave primária na tabela Livros
livros_df.set_index("ISBN", inplace=True)

# Adicionar chave primária e estrangeira na tabela Autores
autores_df.set_index("ISBN", inplace=True)
autores_df.rename(columns={"ISBN": "ISBN_Livro"}, inplace=True)

# Exibir no terminal
print("Tabela Livros:")
print(livros_df)
print("\nTabela Autores:")
print(autores_df)
print("\nTabela Revistas:")
print(revistas_df)

# Salvar em Excel
with pd.ExcelWriter('dados_livros_autores_revistas.xlsx') as writer:
    livros_df.to_excel(writer, sheet_name='Livros')
    autores_df.to_excel(writer, sheet_name='Autores')
    revistas_df.to_excel(writer, sheet_name='Revistas')