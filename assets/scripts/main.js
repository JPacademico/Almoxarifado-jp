// document.getElementById('').addEventListener('focus', function(){
//     const inputDepartamento = document.getElementById('');
//     inputDepartamento.style.backgroundColor="lightgreen"
// })

// document.getElementById('').addEventListener('blur', function(){
//     const inputDepartamento = document.getElementById('');
//     inputDepartamento.style.backgroundColor="lightgreen"
// })

function addColorOnFocus(){
    const listInput = document.querySelectorAll("input")
    const listSelect = document.querySelectorAll("select")

    // listInput[1].style.backgroundColor="#98FB98"
    // for (let i = 0; i < listInput.length; i++){
    //     listInput[i].style.backgroundColor="lightgreen"
    // }

    listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor="lightgreen"
        });
        item.addEventListener('blur', function(){
            item.style.backgroundColor="white"
        });
    })

    listSelect.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor="lightgreen"
        });
        item.addEventListener('blur', function(){
            item.style.backgroundColor="white"
        });
    })
}

function loadCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";
  
    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectCategoria.add(optFirst);


    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value = categoria.idCategoria;
        opt.text = categoria.Descricao;
       
        selectCategoria.add(opt);
    })

}

function loadMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";
    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectMotivo.add(optFirst);
    const valorCategoria = document.getElementById('categoriaMotivo').value;
    const motivoFiltrado = motivos.filter((item) => item.idCategoria==valorCategoria);

    motivoFiltrado.forEach(function(motivo){
        var opt = document.createElement('option');
        opt.value = motivo.idMotivo;
        opt.text = motivo.Descricao;
       
        selectMotivo.add(opt);
    })
}

document.getElementById('categoriaMotivo').addEventListener('change', function(){
    loadMotivos()

})

document.getElementById('CodigoProtudo').addEventListener("keyup",function(){
    const codigoProduto = document.getElementById('CodigoProtudo').value;
    const produtoFiltrado = produtos.filter((m) => m.idProduto==codigoProduto);

    if (produtoFiltrado.length>0){
        document.getElementById('DescricaoProtudo').value=produtoFiltrado[0].Descricao;

    }else{
        document.getElementById('DescricaoProtudo').value="";
    }

});


addColorOnFocus()
loadCategorias()

console.log(categorias)