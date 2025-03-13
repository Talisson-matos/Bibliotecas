const Simples = () => {
    alert('testando');
}

const complexo = document.getElementById('btn_complexo');
const simples = document.getElementById('btn_simples');
const filtro = document.getElementById('btn_filtro');
const outline = document.getElementById('btn_outline');
const scale = document.getElementById('btn_scale');
const brilhante = document.getElementById('btn_brilhante');
const click = document.getElementById('btn_click');
const flutuante = document.getElementById('btn_flutuante');
const pad = document.getElementById('btn_pad');

complexo.textContent = `
<button
    type="button"
    id="meuBotao"
    class="classeBotao"
    name="nomeBotao"
    value="valorBotao"
    title="Meu Botão"
    onclick="minhaFuncao()"
    disabled
    autofocus
    formaction="/enviar-formulario"
    formenctype="multipart/form-data"
    formmethod="post"
    formnovalidate
    formtarget="_self"
    aria-label="Descrição para acessibilidade">
    Clique aqui
</button>

EXPLICAÇÃO: 

1)autofocus: Define o botão como o elemento focado automaticamente ao carregar a página.

2)formaction: Especifica para onde enviar os dados do formulário ao usar um botão de envio.

3)formenctype: Define o tipo de codificação ao enviar os dados (application/x-www-form-urlencoded, multipart/form-data, ou text/plain).

4)formmethod: Especifica o método HTTP utilizado no envio (GET, POST, etc.).

5)formnovalidate: Desativa a validação do formulário ao clicar no botão.

6)formtarget: Define o alvo para onde os dados do formulário serão enviados (ex.: _blank, _self, _parent, _top).

7)aria-label: Adiciona uma descrição para fins de acessibilidade (importante para leitores de tela).
`

simples.textContent = `
HTML:
<button type="" id="" class="simples" name="" value="" title="" onclick="Simples()">
        Simples
    </button>

   CSS:
.simples {
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    background: #333;
    color: #eee;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: .2s linear;
}

.simples:hover {
    background: #eee;
    color: #333;
    border: 2px solid #333;
    
}`

// btn_filtro

filtro.textContent = `
HTML: <button type="" id="" class="filtro" name="" value="" title="" onclick="Simples()">
        Filtro
      </button>
CSS:
.filtro {
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    background: #333;
    color: #eee;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: .2s linear;
}

.filtro:hover {
   filter: opacity(.8);    
}
`;

// btn_outline

outline.textContent = `
HTML: <button type="" id="" class="btn-outline" name="" value="" title="" onclick="Simples()">
        outline
     </button>
CSS:
.btn-outline{
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    background: #eee;
    color: #333;
    border: 2px solid #333;
    border-radius: 6px;
    transition: .2s linear;
}

.btn-outline:hover{
    background: #333;
    color: #eee;
    border: 2px solid #333;
}

`;

// btn_scale

scale.textContent = `
HTML: <button type="" id="" class="scale" name="" value="" title="" onclick="Simples()">
        scale
      </button>
CSS:
.scale{
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    background: #eee;
    color: #333;
    border: 2px solid #333;
    border-radius: 6px;
    transition: .2s linear;
}

.scale:hover{
    transform: scale(.97);
}
`;

// btn_brilhante
brilhante.textContent = `
HTML: <button type="" id="" class="brilhante" name="" value="" title="" onclick="Simples()">
        brilhante
     </button>
CSS:
.brilhante {
    width: 5rem;
    height: 2rem;
    border: none;
    outline: none;
    color: #eee;
    background: #333;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.brilhante:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.brilhante:active {
    color: #000
}

.brilhante:active:after {
    background: transparent;
}

.brilhante:hover:before {
    opacity: 1;
}

.brilhante:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`;

// btn_click

click.textContent = `
HTML: <button type="" id="" class="click" name="" value="" title="" onclick="click()">
        click
      </button>
CSS:
.click {
    width: 5rem;
    height: 2rem;        
    cursor: pointer;   
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 6px;
    box-shadow: 0 6px #666;
  }
  
  .click:hover {background-color: #444}
  
  .click:active {
    background-color: #333;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
 
`;

flutuante.textContent = `
HTML:<div class="text-box">
        <a href="#" class="btn btn-white btn-animate">Flutuante</a>
    </div>
CSS:
.btn:link,
.btn:visited {
    text-decoration: none;
    width: 5rem;
    height: 2rem;
    border-radius: 100px;
    transition: all .2s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
    background-color: #fff;
    color: #777;
}

.btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn-white::after {
    background-color: #fff;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

.btn-animated {
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
`

pad.textContent = `
HTML: <div class="wrapper">
        <a class="pad" href="#"><span class="pad-span">Pad</span></a>
      </div>
CSS:
 .pad{
    padding: .5rem 1.5rem;    
    height: 2rem;    
    text-decoration: none;
    color: #333;
    border: 2px solid #333;    
    position: relative;
    transition: all .35s;
  }
  
  .pad .pad-span{
    position: relative;
    z-index: 2;
  }
  
  .pad:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #333;
    transition: all .35s;
  }
  
  .pad:hover{
    color: #fff;
  }
  
  .pad:hover:after{
    width: 100%;
  }
`
