const categorias = [
    {
        "idCategoria": 1,
        "Descricao": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descricao": "Cliente",
    },
    {
        "idCategoria": 3,
        "Descricao": "RP",
    },
]

const motivos = [
    {
        "idMotivo": 1,
        "Descricao": "Planejamento",
        "idCategoria": 1
    },
    {
        "idMotivo": 2,
        "Descricao": "Financeiro",
        "idCategoria": 2
    },
    {
        "idMotivo": 3,
        "Descricao": "Material de Consumo",
        "idCategoria": 3
    },
]

const produtos = [
    {
        "idProduto": 1,
        "Descricao": "Tijolo",
        "Estoque": 12,
        "EstoqueMinimo": 10,
        "Preco" : 10.00,
        "Medida": "Unid"
    },
    {
        "idProduto": 2,
        "Descricao": "Madeira",
        "Estoque": 10,
        "EstoqueMinimo": 10,
        "Preco" : 12.00,
        "Medida": "Unid"
    },
    {
        "idProduto": 3,
        "Descricao": "Vidro",
        "Estoque": 8,
        "EstoqueMinimo": 10,
        "Preco" : 16.00,
        "Medida": "Unid"
    }
]

const departamentos = [
    {
        "idDep": 1,
        "Descricao": "Sec. Educação",
        "responsavel": "José"
    },
    {
        "idDep": 2,
        "Descricao": "Sec. do Trabalhoro",
        "responsavel": "Menino feio"
    },
    {
        "idDep": 3,
        "Descricao": "NAI",
        "responsavel": "Joana Like"
    },
]

const funcionarios = [
    {
        "idFunc": 1,
        "Descricao": "Rafael",
        "cargo": "CEO"
    },
    {
        "idFunc": 2,
        "Descricao": "João",
        "cargo": "Zelador"
    },
    {
        "idFunc": 3,
        "Descricao": "Lúcifer",
        "cargo": "Secretário"
    },
]