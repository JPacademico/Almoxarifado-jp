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
    if(valorCategoria != "-1"){
        const motivoFiltrado = motivos.filter((item) => item.idCategoria==valorCategoria);
        selectMotivo.disabled = false;
        selectMotivo.style.backgroundColor = "white";

        motivoFiltrado.forEach(function(motivo){
            var opt = document.createElement('option');
            opt.value = motivo.idMotivo;
            opt.text = motivo.Descricao;
           
            selectMotivo.add(opt);
        })

    } else {
        selectMotivo.disabled = true;
        selectMotivo.style.backgroundColor = "rgba(239, 239, 239, 0.3)";
    }
   
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
        document.getElementById("saida").disabled = false;
        if(document.getElementById('Estoque').value >= produtoFiltrado[0].EstoqueMinimo + (produtoFiltrado[0].EstoqueMinimo * 0.1)){
            document.getElementById('verde').src = 'assets/img/green.svg'
        }
        if(document.getElementById('Estoque').value < produtoFiltrado[0].EstoqueMinimo + (produtoFiltrado[0].EstoqueMinimo * 0.1) && document.getElementById('Estoque').value >= produtoFiltrado[0].EstoqueMinimo){
            document.getElementById('verde').src = 'assets/img/yellow.svg'
        }
        if(document.getElementById('Estoque').value < produtoFiltrado[0].EstoqueMinimo){
            document.getElementById('verde').src = 'assets/img/red.svg'
        }

    }else{
        document.getElementById('DescricaoProtudo').value="";
        document.getElementById('Estoque').value="";
        document.getElementById("saida").disabled = true;
        document.getElementById("saida").style.backgroundColor = "#EFEFEF4D";
        document.getElementById("saida").value = "";
    }

});

let saidaElement = document.getElementById("saida");

saidaElement.addEventListener("blur", function(){
    
    if(parseInt(saidaElement.value) != 0 && 
    parseInt(document.getElementById('Estoque').value) >= parseInt(saidaElement.value)
){
        console.log("dia bom")
        document.querySelector(".grupoBtnInserirItens").style.display = "flex"

    }
    else{
        document.querySelector(".grupoBtnInserirItens").style.display = "none"
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

// function apenasNumeros(){
//     const camposNum = document.querySelectorAll('[only-number="true"]')
// }

// document.getElementById('dataRequisicao').addEventListener('change', function(){
//     const dataNew = document.getElementById('dataRequisicao').value;
//     const dataAtual = new Date()
// })
const somatorio = document.getElementById('montante')
let coisa = 0
somatorio.value = coisa.toFixed(2);

document.getElementById('btnInserir').addEventListener('click', function(){
    let tabela = document.getElementById('tableBody')
    let campoCodigo = document.getElementById('CodigoProtudo')
    let descricao = document.getElementById('DescricaoProtudo')
    let estoque = document.getElementById("Estoque")
    let saida = document.getElementById('saida')
    
  
    let line = document.createElement('tr')

    let tdCodigo = document.createElement('td')
    let tdProtudo = document.createElement('td')
    let tdQtd = document.createElement('td')
    let tdUnid = document.createElement('td')
    let tdPreco = document.createElement('td')
    let tdTotal = document.createElement('td')
    let tdButton = document.createElement('button')



    tdButton.setAttribute('class', "btnRemove")


    const produtoPesquisado = produtos.filter((e)=>e.idProduto==campoCodigo.value)

    let precoProduto = produtoPesquisado[0].Preco;
    let soma = produtoPesquisado[0].Preco*saida.value;
    produtoPesquisado[0].Estoque -= saida.value;


    tdCodigo.textContent = campoCodigo.value;
    tdProtudo.textContent = descricao.value;
    tdQtd.textContent = saida.value;
    tdUnid.textContent = produtoPesquisado[0].Medida;
    tdPreco.textContent = precoProduto;
    tdTotal.textContent = precoProduto * saida.value;
    tdButton.textContent= "X"


    line.appendChild(tdCodigo)
    line.appendChild(tdProtudo)
    line.appendChild(tdQtd)
    line.appendChild(tdUnid)
    line.appendChild(tdPreco)
    line.appendChild(tdTotal)
    line.appendChild(tdButton)

    const colunas = line.getElementsByTagName('td')
    let lineTotal = colunas[5].innerText
 

    let coisa = parseFloat(somatorio.value) + parseFloat(produtoPesquisado[0].Preco*saida.value);
    somatorio.value = coisa.toFixed(2)
    

    tdButton.addEventListener('click', function(){
        tabela.removeChild(line)
        let coisa = parseFloat(somatorio.value) - parseFloat(lineTotal);
        produtoPesquisado[0].Estoque += parseInt(line.childNodes[2].textContent);
        somatorio.value = coisa.toFixed(2)

    });


    tabela.appendChild(line)

    saida.value = "";
    saida.disabled = true;
    saida.style.backgroundColor = "#EFEFEF4D";
    descricao.value = "";
    campoCodigo.value = "";
    estoque.value = "";

    document.querySelector('.grupoBtnInserirItens').style.display = "none"

});


document.getElementById("verde").addEventListener('mouseover', function(){
    document.getElementById("caixa-info").classList.toggle('mostrar')

});

document.getElementById("verde").addEventListener('mouseout', function(){
    document.getElementById("caixa-info").classList.toggle('mostrar')

});




addColorOnFocus()
loadCategorias()
eventoClickPrioridadeHabilitarCor()

