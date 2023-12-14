// document.getElementById('').addEventListener('focus', function(){
//     const inputDepartamento = document.getElementById('');
//     inputDepartamento.style.backgroundColor="lightgreen"
// })

// document.getElementById('').addEventListener('blur', function(){
//     const inputDepartamento = document.getElementById('');
//     inputDepartamento.style.backgroundColor="lightgreen"
// })

function addColorOnFocus(){
    const listInput = document.querySelectorAll('input[type="text"]')
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
        document.getElementById('Estoque').value=produtoFiltrado[0].Estoque;

    }else{
        document.getElementById('DescricaoProtudo').value="";
        document.getElementById('Estoque').value="";
    }

});

document.getElementById('idDepartamento').addEventListener("keyup",function(){
    const codigoDep = document.getElementById('idDepartamento').value;
    const depFiltrado = departamentos.filter((e) => e.idDep==codigoDep);

    if (depFiltrado.length>0){
        document.getElementById('departamento').value=depFiltrado[0].Descricao;

    }else{
        document.getElementById('departamento').value="";
    }

});

document.getElementById('idFuncionario').addEventListener("keyup",function(){
    const codigoFunc = document.getElementById('idFuncionario').value;
    const funcFiltrado = funcionarios.filter((e) => e.idFunc==codigoFunc);

    if (funcFiltrado.length>0){
        document.getElementById('NomeFuncionario').value=funcFiltrado[0].Descricao;
        document.getElementById('cargo').value=funcFiltrado[0].cargo;

    }else{
        document.getElementById('NomeFuncionario').value="";
        document.getElementById('cargo').value="";
    }

});

function clicarGravar(){
    const listObrigatorio = document.querySelectorAll('[data-obg="true"]')

    listObrigatorio.forEach(function(item){
        if(item.value==""||item.value==-1){
            item.style.borderColor="red";
            item.style.borderWidth='2px';
        }
    });
    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");        
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
    }
    
}




function eventoClickPrioridadeHabilitarCor(){
const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    
console.log(checkboxesPrioridade);
checkboxesPrioridade.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {    
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.add('radioPrioridade');
        divPrioridade.classList.remove('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.add('chkPrioridade');
        document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.add('chkPrioridade');
        document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.add('chkPrioridade');
        document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
    });
});
}

function apenasNumeros(){
    const camposNum = document.querySelectorAll('[only-number="true"]')
}

document.getElementById('dataRequisicao').addEventListener('change', function(){
    const dataNew = document.getElementById('dataRequisicao').value;
    const dataAtual = new Date()
})

document.getElementById('btnInserir').addEventListener('click', function(){
    const tabelaItens = document.getElementById('tabelaItens')
    const campoCodigo = document.getElementById('CodigoProtudo')
    const campoProtudo = document.getElementById('DescricaoProtudo')
    const campoQtd = document.getElementById('Estoque')
    //const totalRequisicao = document.getElementById('total')

    const line = document.createElement('tr')

    const tdCodigo = document.createElement('tabelaItens')
    const tdProtudo = document.createElement('CodigoProtudo')
    const tdQtd = document.createElement('DescricaoProtudo')
    const tdUnid = document.createElement('Estoque')


})



addColorOnFocus()
loadCategorias()
eventoClickPrioridadeHabilitarCor()
apenasNumeros()
