import os
from rembg import remove
from PIL import Image

def remover_fundo_diretorio(diretorio_entrada, diretorio_saida):
    """
    Remove o fundo de todas as imagens em um diretório de entrada
    e salva as imagens resultantes em um diretório de saída.

    Args:
        diretorio_entrada (str): O caminho completo para o diretório com as imagens originais.
        diretorio_saida (str): O caminho completo para o diretório onde as imagens sem fundo serão salvas.
    """
    if not os.path.exists(diretorio_entrada):
        print(f"Erro: O diretório de entrada '{diretorio_entrada}' não foi encontrado.")
        return

    # Cria o diretório de saída se ele não existir
    if not os.path.exists(diretorio_saida):
        os.makedirs(diretorio_saida)
        print(f"Diretório de saída '{diretorio_saida}' criado.")

    processadas = 0
    erros = 0

    # Itera sobre todos os arquivos no diretório de entrada
    for filename in os.listdir(diretorio_entrada):
        # Ignora subdiretórios e arquivos que não são imagens (pode adicionar mais extensões)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.bmp', '.tiff')):
            caminho_entrada = os.path.join(diretorio_entrada, filename)
            
            # Define o nome do arquivo de saída (mantém o nome original, mas sempre salva como PNG para transparência)
            nome_base, _ = os.path.splitext(filename)
            caminho_saida = os.path.join(diretorio_saida, f"{nome_base}_sem_fundo.png")

            print(f"Processando imagem: {filename}...")
            try:
                with Image.open(caminho_entrada) as img_entrada:
                    img_saida = remove(img_entrada)
                    img_saida.save(caminho_saida)
                    print(f"  -> Concluído! Salvo em: {caminho_saida}")
                    processadas += 1
            except Exception as e:
                print(f"  -> Erro ao processar '{filename}': {e}")
                erros += 1
        else:
            print(f"Pulando arquivo não imagem ou subdiretório: {filename}")

    print("\n--- Resumo do Processamento ---")
    print(f"Imagens processadas com sucesso: {processadas}")
    print(f"Imagens com erro: {erros}")
    if processadas > 0:
        print(f"Todas as imagens sem fundo foram salvas em: {diretorio_saida}")

# --- Configuração dos diretórios ---
if __name__ == "__main__":
    # Defina o diretório onde suas imagens estão
    diretorio_das_fotos = r"C:\Users\evera\Desktop\cardapio-fotos"
    
    # Defina o diretório onde você quer salvar as imagens sem fundo
    # Crie uma nova pasta para organizar, por exemplo, 'cardapio-fotos-sem-fundo'
    diretorio_de_saida = r"C:\Users\evera\Desktop\cardapio-fotos-sem-fundo"

    print(f"Preparando para remover fundos das imagens em: {diretorio_das_fotos}")
    remover_fundo_diretorio(diretorio_das_fotos, diretorio_de_saida)