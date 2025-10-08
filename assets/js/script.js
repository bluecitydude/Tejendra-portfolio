fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

function small(str){
 
  if(str=='nav1'){
        const cont=document.getElementById('nav1');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }  else if(str=='nav2'){
        const cont=document.getElementById('nav2');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
  else if(str=='nav3'){
        const cont=document.getElementById('nav3');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
  else if(str=='nav4'){
        const cont=document.getElementById('nav4');
    cont.setAttribute('style',"transform:scale(0.9);transition:0.3s;");
  }
}

function normal(str){
   if (str=='coverimg'){
    const cont=document.getElementById('cont');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
  else if(str=='nav1'){
        const cont=document.getElementById('nav1');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }  else if(str=='nav2'){
        const cont=document.getElementById('nav2');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
  else if(str=='nav3'){
        const cont=document.getElementById('nav3');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
  else if(str=='nav4'){
        const cont=document.getElementById('nav4');
    cont.setAttribute('style',"transform:scale(1.0);transition:0.3s;");
  }
}

function expand(str){
  if (str=='coverimg'){
    const cont=document.getElementById('cont');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav1'){
        const cont=document.getElementById('nav1');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }  else if(str=='nav2'){
        const cont=document.getElementById('nav2');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav3'){
        const cont=document.getElementById('nav3');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
  else if(str=='nav4'){
    const cont=document.getElementById('nav4');
    cont.setAttribute('style',"transform:scale(1.1);transition:0.3s;");
  }
}