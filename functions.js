function calcular(){  
  var numP = parseInt(numPreguntas.value);
  var numA = parseInt(numAciertos.value);
  var numE = parseInt(numErrores.value);
  var descuento = parseFloat(descuentos.value);
  
  var noContestadas = numP-(numA+numE);
  var notaSinDes = (10/numP)*numA;
  var nota = notaSinDes - (((10/numP)*descuento)*numE);


  //Mostrar resultados

  if(numA>numP || numE>numP || numP==0 || (numA+numE>numP)){
    n_aciertos.innerHTML = '-';
    n_errores.innerHTML = '-';
    no_contestadas.innerHTML = '-';
    sin_descontar.innerHTML = '-';
    n_final.innerHTML = '-';
    resultado.innerHTML = 'Revisa los datos';
    resultado.style.color = 'red';  

  }else{
    
    n_aciertos.innerHTML = numA;
    n_errores.innerHTML = numE;
    no_contestadas.innerHTML = noContestadas;
    sin_descontar.innerHTML = notaSinDes.toFixed(2);
    n_final.innerHTML = nota.toFixed(2);

    if(nota<5){
      resultado.innerHTML = 'SUSPENSO';
      resultado.style.color = 'red';
    }else{
      if(nota<9){
        resultado.innerHTML = 'APROBADO';
        resultado.style.color = 'green';
      }else{
        resultado.innerHTML = 'EXCELENTE';
        resultado.style.color = 'green';
      }
    }
  }
  
}

