// Extensão v1.3 — camisas sociais brancas e colarinhos/punhos amarelados

// 1) Nova categoria no assistente
const tipoSelect=document.querySelector('#tipo');
if(tipoSelect && !tipoSelect.querySelector('option[value="socialbranca"]')){
  const opt=document.createElement('option');
  opt.value='socialbranca';
  opt.textContent='Camisa social branca / colarinho';
  const brancas=tipoSelect.querySelector('option[value="brancas"]');
  brancas ? brancas.insertAdjacentElement('afterend',opt) : tipoSelect.appendChild(opt);
}

rotinas.socialbranca={
  titulo:'Camisa social branca',
  ciclo:'Algodão',
  temp:'40 °C; 60 °C apenas se a etiqueta permitir',
  spin:'800–1.000 rpm',
  seca:'Preferir secagem em cabide; Secar Algodão somente se a etiqueta permitir',
  limite:'Poucas ou médias; deixe as camisas circularem livres',
  prod:[
    'Lava-roupas líquido enzimático no II',
    'Pré-tratamento localizado em gola e punhos',
    'Oxigênio ativo para brancos apenas como complemento quando necessário',
    'Sem alvejante à base de cloro'
  ],
  passos:[
    'Separe camisas brancas de peças coloridas.',
    'Antes de lavar, examine colarinho e punhos.',
    'Se houver início de amarelado ou oleosidade, aplique lava-roupas líquido enzimático diretamente na área e espalhe suavemente com os dedos ou escova muito macia, seguindo o tempo do rótulo.',
    'Coloque o restante do lava-roupas no compartimento II e selecione Algodão.',
    'Use 40 °C como referência quando a etiqueta permitir; aumente para 60 °C somente quando a própria peça autorizar.',
    'Use 800–1.000 rpm para reduzir vincos sem deixar a camisa excessivamente molhada.',
    'Retire a camisa assim que o ciclo terminar e seque em cabide.'
  ],
  aviso:'Colarinho amarelado costuma acumular suor, oleosidade da pele e resíduos corporais. O pré-tratamento com detergente/lava-roupas líquido é mais importante do que simplesmente acrescentar branqueador ao ciclo.'
};

// 2) Ajuste fino do resultado quando a categoria social branca é selecionada
const montarBtn=document.querySelector('#montar');
if(montarBtn){
  montarBtn.addEventListener('click',()=>{
    if(document.querySelector('#tipo').value!=='socialbranca') return;

    const sujeira=document.querySelector('#sujeira').value;
    const quantidade=document.querySelector('#quantidade').value;
    const prioridade=document.querySelector('#prioridade').value;
    const secar=document.querySelector('#secar').value;

    let ciclo='Algodão';
    let temp='40 °C; 60 °C somente se a etiqueta permitir';
    let spin='800–1.000 rpm';
    let carga=quantidade==='poucas'?'Poucas peças; ideal para 1–3 camisas':quantidade==='media'?'Carga média, sem compactar as camisas':'Carga grande: divida se as camisas ficarem compactadas; elas precisam circular livremente';
    let secagem=secar==='sim'?'Secar Algodão somente se a etiqueta permitir; para camisa social, prefira cabide':'Sem secagem automática; retirar e secar em cabide';
    let status=sujeira==='pesada'?'Colarinho/punhos amarelados':sujeira==='normal'?'Uso social normal':'Uso leve / manutenção preventiva';
    let produtos=[];
    let passos=[];
    let aviso='';

    if(sujeira==='pesada'){
      ciclo='Algodão + Manchas Difíceis, se a opção estiver disponível para a configuração escolhida';
      produtos=[
        '1º: OMO Lavagem Perfeita Líquido ou outro lava-roupas enzimático, aplicado no colarinho/punhos',
        '2º: Vanish Crystal White/oxigênio ativo somente se o amarelado antigo persistir',
        'Na máquina: lava-roupas no compartimento II',
        'Sem cloro'
      ];
      passos=[
        'Confira a etiqueta. Este protocolo é pensado para camisa branca lavável de algodão ou mistura resistente; não aplique automaticamente em seda, lã, linho delicado, viscose/elastano ou peças com acabamento especial.',
        'No colarinho seco ou levemente umedecido, aplique uma pequena quantidade de lava-roupas líquido enzimático diretamente no amarelo. Espalhe com os dedos ou escova macia, sem esfregar com força, e respeite o tempo indicado no rótulo.',
        'Enxágue o pré-tratamento. Se o amarelado já estiver antigo, faça uma etapa separada de oxigênio ativo: com Vanish Crystal White em pó, a orientação atual do fabricante para brancos é 60 g em 4 L de água, com molho de até 6 horas. Não deixe o produto secar no tecido.',
        'Enxágue novamente e leve à WD10M. Coloque o lava-roupas no compartimento II.',
        'Selecione Algodão a 40 °C. Se a etiqueta permitir 60 °C e a mancha for persistente, essa temperatura pode ser usada. Ative Manchas Difíceis quando compatível.',
        'Use 800–1.000 rpm para limitar vincos.',
        'Retire imediatamente ao terminar e seque ao ar em cabide. Não use secadora nem passe ferro sobre a área até confirmar que o amarelo saiu.',
        'Se ainda houver marca, repita o tratamento em vez de aumentar agressivamente a química ou usar cloro.'
      ];
      aviso='O Vanish sozinho pode falhar porque o “amarelo de colarinho” não é apenas uma alteração de cor: existe uma camada de oleosidade corporal que precisa ser removida primeiro por surfactantes/enzimas. O oxigênio ativo funciona melhor como segunda etapa, depois do desengorduramento.';
      secagem='Não recomendo secagem automática nesta lavagem. Seque ao ar e avalie o colarinho antes de aplicar calor.';
    }else if(sujeira==='normal'){
      produtos=[
        'Lava-roupas líquido enzimático no II (ex.: OMO Lavagem Perfeita Líquido)',
        'Pequena quantidade do mesmo produto no colarinho antes da lavagem, se houver início de marca',
        'Vanish Crystal White apenas quando realmente houver amarelado/encardido'
      ];
      passos=[
        'Lave a camisa após o uso; evitar deixar suor e oleosidade envelhecerem no tecido é a melhor prevenção.',
        'Examine colarinho e punhos. Se começarem a ficar acinzentados ou amarelados, aplique um pouco do lava-roupas líquido enzimático diretamente e espalhe suavemente.',
        'Coloque a dose restante no compartimento II.',
        'Selecione Algodão, 40 °C quando a etiqueta permitir, e 800–1.000 rpm.',
        'Não use Vanish em toda lavagem por obrigação: reserve o oxigênio ativo para quando houver alteração de branco ou mancha persistente.',
        'Retire logo ao final e seque em cabide.'
      ];
      aviso='A manutenção frequente do colarinho é mais eficaz do que esperar a faixa amarela se consolidar.';
    }else{
      produtos=['Lava-roupas líquido enzimático no II','Pré-tratamento do colarinho somente se houver marca visível'];
      passos=[
        'Lave a camisa após o uso ou antes de guardar por longo período.',
        'Se o colarinho estiver limpo, não é necessário usar tira-manchas.',
        'Use Algodão a 30–40 °C conforme a etiqueta, com 800–1.000 rpm.',
        'Retire imediatamente e seque em cabide.'
      ];
      temp='30–40 °C, conforme a etiqueta';
      aviso='Para prevenção, evite deixar perfume, hidratante ou produtos oleosos secarem na região do pescoço antes de vestir a camisa.';
    }

    if(prioridade==='rapido'){
      aviso+=(aviso?' ':'')+"Para camisa social com colarinho amarelado, não recomendo Rápido 15' nem 59': o tratamento localizado precisa de tempo de contato e uma lavagem completa.";
    }
    if(quantidade==='grande'){
      aviso+=(aviso?' ':'')+'Se as camisas ficarem comprimidas no tambor, divida a carga para melhorar ação mecânica, enxágue e reduzir vincos.';
    }

    document.querySelector('#rTitulo').textContent='Camisa social branca';
    document.querySelector('#rStatus').textContent=status+(prioridade==='rapido'?' • Com pressa':'');
    document.querySelector('#rCiclo').textContent=ciclo;
    document.querySelector('#rTemp').textContent=temp;
    document.querySelector('#rSpin').textContent=spin;
    document.querySelector('#rCarga').textContent=carga;
    document.querySelector('#rSecagem').textContent=secagem;
    document.querySelector('#rProdutos').innerHTML=produtos.map(x=>`<span>${x}</span>`).join('');
    document.querySelector('#rPassos').innerHTML=passos.map(x=>`<li>${x}</li>`).join('');
    document.querySelector('#rAviso').innerHTML=`<div class="alert warning"><b>Atenção:</b> ${aviso}</div>`;
  });
}

// 3) Nova opção dedicada no módulo de manchas
const manchaSelect=document.querySelector('#tipoMancha');
if(manchaSelect && !manchaSelect.querySelector('option[value="colarinho"]')){
  const opt=document.createElement('option');
  opt.value='colarinho';
  opt.textContent='Colarinho/punhos amarelados de camisa branca';
  const suor=manchaSelect.querySelector('option[value="suor"]');
  suor ? suor.insertAdjacentElement('afterend',opt) : manchaSelect.appendChild(opt);
}

manchas.colarinho=['Colarinho/punhos amarelados','Tratamento específico para oleosidade corporal e suor em camisas sociais brancas.'];

const tratarBtn=document.querySelector('#tratar');
if(tratarBtn){
  tratarBtn.addEventListener('click',()=>{
    if(document.querySelector('#tipoMancha').value!=='colarinho') return;
    const box=document.querySelector('#resultadoMancha');
    box.innerHTML=`
      <div class="eyebrow dark">PROTOCOLO ESPECÍFICO</div>
      <h2>Colarinho e punhos amarelados</h2>
      <p>Essa mancha costuma ser uma combinação de suor, oleosidade da pele, células, cosméticos e oxidação. Por isso, um branqueador de oxigênio usado sozinho pode clarear, mas não necessariamente remover a camada oleosa que prende a sujeira na fibra.</p>
      <h3>Ordem que costuma funcionar melhor</h3>
      <ol class="steps">
        <li><b>Desengordurar primeiro:</b> aplique lava-roupas líquido com enzimas diretamente no colarinho e punhos. Espalhe suavemente com os dedos ou escova macia e siga o tempo do rótulo.</li>
        <li><b>Enxaguar.</b> Não empilhe diferentes produtos concentrados diretamente sobre a mesma área.</li>
        <li><b>Se a faixa amarela for antiga:</b> use oxigênio ativo para brancos em uma etapa separada. Para Vanish Crystal White em pó, a orientação atual é 60 g em 4 L de água e molho de até 6 horas para roupas brancas compatíveis.</li>
        <li><b>Lavar na Samsung:</b> ciclo Algodão, 40 °C; 60 °C apenas se a etiqueta da camisa permitir. Use 800–1.000 rpm e Manchas Difíceis quando disponível.</li>
        <li><b>Secar ao ar e conferir:</b> só aplique calor de secadora/ferro depois de confirmar que a mancha saiu.</li>
      </ol>
      <div class="alert warning"><b>Evite cloro:</b> para esse tipo de amarelo, alvejante clorado pode piorar descolorações e ainda desgastar o tecido. Se a peça tiver elastano, viscose, seda, lã, linho delicado, bordado ou acabamento especial, não use este protocolo sem conferir a etiqueta e o rótulo do produto.</div>`;
    box.classList.remove('hidden');
  });
}

// 4) Complementos na lista de compras
const extras=[
  ['omoEnzimatico','OMO Lavagem Perfeita Líquido','Colarinho / enzimas','Opção direcionada para pré-tratar suor, oleosidade corporal e marcas no colarinho antes da lavagem.'],
  ['resolvWhite','Vanish Resolv White','Pré-lavagem','Spray específico para roupas brancas, indicado pelo fabricante para áreas como punhos e colarinhos; usar no tecido seco por no máximo 5 minutos e não deixar secar.'],
  ['escovaMacia','Escova macia para lavanderia','Acessório','Para trabalhar o pré-tratamento em gola e punhos sem agressão excessiva ao tecido.']
];

const comprasBox=document.querySelector('#compras');
if(comprasBox){
  const estado=JSON.parse(localStorage.getItem('wd10m-compras')||'{}');
  extras.forEach(([id,n,t,d])=>{
    if(comprasBox.querySelector(`input[data-id="${id}"]`)) return;
    const label=document.createElement('label');
    label.className='product-row';
    label.innerHTML=`<input type="checkbox" data-id="${id}" ${estado[id]?'checked':''}><span><b>${n}</b><span class="tag">${t}</span><p class="muted">${d}</p></span>`;
    comprasBox.appendChild(label);
    label.querySelector('input').addEventListener('change',e=>{
      const atual=JSON.parse(localStorage.getItem('wd10m-compras')||'{}');
      atual[e.target.dataset.id]=e.target.checked;
      localStorage.setItem('wd10m-compras',JSON.stringify(atual));
    });
  });
}

// 5) Explicação permanente na área Produtos
const cardsProdutos=document.querySelectorAll('#produtos .card');
if(cardsProdutos.length>1 && !document.querySelector('#guia-colarinho-produtos')){
  cardsProdutos[1].insertAdjacentHTML('beforeend',`
    <details id="guia-colarinho-produtos">
      <summary>Camisa social branca / colarinho amarelado</summary>
      <p><b>Por que Vanish pode não resolver sozinho?</b> O colarinho acumula uma fração oleosa importante. Primeiro use um lava-roupas líquido com enzimas/surfactantes para desprender a oleosidade. Se o amarelo antigo continuar, use oxigênio ativo para brancos como segunda etapa.</p>
      <p><b>Minha combinação preferida para esse caso:</b> OMO Lavagem Perfeita Líquido no pré-tratamento e na lavagem; Vanish Crystal White apenas para recuperação quando necessário. Vanish Resolv White é uma alternativa prática de pré-lavagem para gola e punhos.</p>
      <p><b>Prevenção:</b> lave a camisa logo após o uso, não guarde com suor, examine a gola antes de cada lavagem e faça pré-tratamento leve assim que aparecer o primeiro tom acinzentado/amarelo.</p>
    </details>`);
}

// A versão exibida é controlada pelo index.html. Este módulo não deve sobrescrevê-la.