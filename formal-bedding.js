// Extensão v1.4 — cobertas/edredons e ternos/casacos sociais

const tipoLavagem=document.querySelector('#tipo');
if(tipoLavagem){
  if(!tipoLavagem.querySelector('option[value="cobertas"]')){
    const opt=document.createElement('option');
    opt.value='cobertas';
    opt.textContent='Cobertas / edredons';
    const cama=tipoLavagem.querySelector('option[value="cama"]');
    cama ? cama.insertAdjacentElement('afterend',opt) : tipoLavagem.appendChild(opt);
  }
  if(!tipoLavagem.querySelector('option[value="terno"]')){
    const opt=document.createElement('option');
    opt.value='terno';
    opt.textContent='Ternos / casacos sociais';
    const social=tipoLavagem.querySelector('option[value="socialbranca"]');
    social ? social.insertAdjacentElement('afterend',opt) : tipoLavagem.appendChild(opt);
  }
}

rotinas.cobertas={
  titulo:'Cobertas / edredons',
  ciclo:'Algodão, somente se a etiqueta permitir lavagem em máquina',
  temp:'Fria–40 °C, conforme etiqueta e enchimento',
  spin:'800 rpm como referência; reduza se houver desequilíbrio',
  seca:'Secagem somente se a etiqueta permitir e a peça tiver espaço para girar livremente',
  limite:'Lave uma peça volumosa por vez e somente se ela ficar solta no tambor',
  prod:['Lava-roupas líquido suave no II','Enxágue+ recomendado','Amaciante somente se a etiqueta permitir'],
  passos:[
    'Leia a etiqueta antes de colocar a peça na máquina. Alguns edredons de lã, seda, plumas especiais, peças estruturadas ou “somente lavagem a seco” precisam de lavanderia profissional.',
    'Verifique costuras, rasgos e enchimento solto. Faça pequenos reparos antes da lavagem.',
    'Coloque somente uma peça volumosa por vez e sem enrolá-la em bola. Ela precisa ter espaço para tombar e circular dentro do tambor.',
    'Use pouco lava-roupas líquido suave no compartimento II. Evite excesso de produto, porque peças grossas são mais difíceis de enxaguar.',
    'Na WD10M, que não possui um ciclo dedicado “Roupa de Cama”, use Algodão apenas quando a etiqueta do item permitir lavagem em máquina.',
    'Use água fria ou morna, normalmente até 40 °C, e centrifugação moderada. Se a máquina acusar desequilíbrio ou a peça ficar muito compactada, interrompa e use uma máquina comercial maior.',
    'Ative Enxágue+ para ajudar a retirar resíduos de sabão de peças espessas.'
  ],
  aviso:'Capacidade em quilos não resolve sozinha o problema de edredons: volume importa. Se a peça ocupar quase todo o tambor seca, não haverá espaço suficiente para uma boa lavagem. Cobertores elétricos, cobertores com pelos e cobertores muito volumosos também não devem ser colocados no Air Wash.'
};

rotinas.terno={
  titulo:'Ternos / casacos sociais',
  ciclo:'Air Wash somente para renovar uma peça compatível; sujeira/mancha exige avaliação profissional',
  temp:'Automática no Air Wash',
  spin:'Não se aplica no Air Wash',
  seca:'Air Wash não é ciclo para secar roupa molhada',
  limite:'Poucas peças; prefira uma peça por vez',
  prod:['Nenhum produto no Air Wash'],
  passos:[
    'Leia a etiqueta da peça. “Dry clean only / somente lavagem a seco” significa que a limpeza principal deve ser feita em lavanderia profissional.',
    'Se o terno ou casaco estiver limpo e apenas com odor de uso, comida ou ambiente, e o material for compatível com calor, o Air Wash pode ser usado para refrescar.',
    'Retire objetos dos bolsos, feche ou proteja acessórios soltos e confira botões, apliques e ornamentos.',
    'Coloque poucas peças no tambor, sem sabão, sem amaciante e sem água.',
    'Selecione Lavagem a Seco / Air Wash e inicie.',
    'Depois do ciclo, pendure a peça em cabide estruturado e deixe-a arejar antes de guardar.'
  ],
  aviso:'O nome “Lavagem a Seco” da Samsung não significa limpeza química de lavanderia. Air Wash usa ar quente para desodorizar e higienizar; ele não remove manchas nem sujeira visível. Não use em couro, peles, seda, peças muito engomadas, com espuma ou com ornamentos que possam se soltar.'
};

const montarV14=document.querySelector('#montar');
if(montarV14){
  montarV14.addEventListener('click',()=>{
    const tipo=document.querySelector('#tipo').value;
    if(!['cobertas','terno'].includes(tipo)) return;

    const quantidade=document.querySelector('#quantidade').value;
    const sujeira=document.querySelector('#sujeira').value;
    const prioridade=document.querySelector('#prioridade').value;
    const secar=document.querySelector('#secar').value;

    if(tipo==='cobertas'){
      let ciclo='Algodão — somente se a etiqueta permitir lavagem em máquina';
      let temp='Fria–40 °C, conforme etiqueta';
      let spin='800 rpm como referência';
      let carga='Uma peça volumosa por vez, apenas se ficar solta no tambor';
      let secagem=secar==='sim'?'Só secar na WD10M se a etiqueta permitir e a peça tiver bastante espaço para girar; edredom volumoso deve ir para secadora comercial ou secar conforme a etiqueta':'Sem secagem automática; seque conforme a etiqueta';
      let produtos=['Lava-roupas líquido suave no II','Enxágue+ recomendado','Pouco produto — peças grossas enxáguam com mais dificuldade'];
      let passos=[
        'Confira a etiqueta: se indicar somente lavagem a seco, lã/seda delicada ou restrição à máquina, leve a uma lavanderia profissional.',
        'Inspecione costuras, rasgos e enchimento; repare antes de lavar.',
        'Coloque uma peça por vez e sem compactar. O edredom precisa conseguir tombar livremente dentro do tambor.',
        'Use uma dose moderada de lava-roupas líquido suave no compartimento II.',
        'Selecione Algodão, porque esta WD10M não possui um ciclo dedicado “Roupa de Cama”. Use água fria ou morna conforme a etiqueta.',
        'Comece com cerca de 800 rpm. Se houver desequilíbrio, reduza a centrifugação ou interrompa.',
        'Ative Enxágue+ para ajudar a remover resíduos de sabão.'
      ];
      let aviso='Não use o limite de 10,1 kg como único critério: edredons podem ser leves e ainda assim grandes demais para o tambor. Se a peça seca ocupar quase todo o espaço, use lavanderia/máquina comercial de maior capacidade.';

      if(sujeira==='pesada'){
        ciclo='Algodão + Intensivo/Manchas Difíceis, somente se a etiqueta permitir';
        produtos.push('Pré-tratamento localizado compatível com o tecido');
        passos.unshift('Pré-trate manchas pontuais antes da lavagem, sem saturar todo o enchimento com tira-manchas.');
        aviso+=' Não aplique calor de secagem sobre manchas que ainda não saíram.';
      }
      if(prioridade==='rapido') aviso+=' Não recomendo Rápido 15’ nem 59’ para cobertas ou edredons: a peça precisa de tempo, água e enxágue adequados.';
      if(quantidade!=='poucas') aviso+=' Para esta categoria, “carga média/grande” deve ser interpretada como peça mais volumosa; não coloque vários cobertores/edredons juntos.';
      if(secar==='sim') passos.push('Antes de secar, confirme novamente o símbolo de secadora na etiqueta. Se o item for volumoso ou ficar comprimido no tambor, não use a secagem da WD10M.');
      else passos.push('Ao terminar, retire imediatamente, redistribua o enchimento e seque completamente conforme a etiqueta para evitar odor e embolamento.');

      document.querySelector('#rTitulo').textContent='Cobertas / edredons';
      document.querySelector('#rStatus').textContent=(sujeira==='pesada'?'Sujeira pesada':sujeira==='leve'?'Sujeira leve':'Sujeira normal')+(prioridade==='rapido'?' • Com pressa':'');
      document.querySelector('#rCiclo').textContent=ciclo;
      document.querySelector('#rTemp').textContent=temp;
      document.querySelector('#rSpin').textContent=spin;
      document.querySelector('#rCarga').textContent=carga;
      document.querySelector('#rSecagem').textContent=secagem;
      document.querySelector('#rProdutos').innerHTML=produtos.map(x=>`<span>${x}</span>`).join('');
      document.querySelector('#rPassos').innerHTML=passos.map(x=>`<li>${x}</li>`).join('');
      document.querySelector('#rAviso').innerHTML=`<div class="alert warning"><b>Atenção:</b> ${aviso}</div>`;
      return;
    }

    if(tipo==='terno'){
      const apenasRenovar=sujeira==='leve';
      let ciclo=apenasRenovar?'Lavagem a Seco / Air Wash — somente se a etiqueta/material permitir':'Lavanderia profissional recomendada';
      let temp=apenasRenovar?'Automática do Air Wash':'Não se aplica';
      let spin='Não se aplica';
      let carga=apenasRenovar?'Prefira 1 peça por vez; não compacte':'Não colocar na WD10M por padrão';
      let secagem=apenasRenovar?'Sem secagem separada: a peça entra seca e o Air Wash apenas a renova':'Não usar secagem da máquina';
      let produtos=apenasRenovar?['Nenhum produto no Air Wash']:['Nenhum produto doméstico recomendado antes da avaliação profissional'];
      let passos;
      let aviso;

      if(apenasRenovar){
        passos=[
          'Leia a etiqueta e confirme que a peça não contém material sensível ao calor, couro, seda, espuma, colagens ou ornamentos frágeis.',
          'Use Air Wash apenas se não houver mancha ou sujeira visível — o objetivo aqui é remover odor de uso e renovar a peça.',
          'Esvazie os bolsos e confira botões e acessórios.',
          'Coloque preferencialmente uma peça por vez, sem qualquer sabão ou amaciante.',
          'Selecione Lavagem a Seco / Air Wash e inicie.',
          'Ao terminar, retire e pendure em cabide estruturado para arejar.'
        ];
        aviso='Air Wash é uma renovação por ar quente; não substitui a lavagem a seco química/profissional indicada pela etiqueta. A própria Samsung cita ternos e roupas sociais como aplicações possíveis para Air Wash, mas também orienta evitar materiais sensíveis ao calor e peças com ornamentos que possam se soltar.';
      }else{
        passos=[
          'Não coloque o terno/casaco em Algodão, Sintéticos, Vapor Higiênico, Rápido 15’ ou 59’ por padrão.',
          'Confira a etiqueta. Se constar “somente lavagem a seco / dry clean only”, encaminhe a uma lavanderia profissional.',
          'Se houver mancha localizada, informe à lavanderia o tipo de mancha e há quanto tempo ocorreu. Evite experimentar vários químicos em casa antes disso.',
          'Depois da limpeza profissional, Air Wash pode ser usado futuramente entre limpezas apenas para renovar odores, se o material e a etiqueta forem compatíveis.'
        ];
        aviso='Um terno estruturado pode conter entretelas, colagens, forros e materiais diferentes no mesmo conjunto. Água, agitação, vapor ou secagem podem deformar a construção mesmo quando o tecido externo parece resistente.';
      }

      if(prioridade==='rapido') aviso+=' Se você precisa da peça rapidamente e ela está suja/manchada, a opção segura é uma lavanderia profissional com serviço expresso; o Air Wash não resolve sujeira.';
      if(quantidade!=='poucas'&&apenasRenovar) aviso+=' Reduza a quantidade: roupas sociais precisam circular livremente no Air Wash.';
      if(secar==='sim') aviso+=' Não use “Secar Algodão/Sintéticos” em terno ou casaco social sem autorização explícita da etiqueta.';

      document.querySelector('#rTitulo').textContent='Ternos / casacos sociais';
      document.querySelector('#rStatus').textContent=apenasRenovar?'Só renovar / odor':'Sujeira ou mancha • profissional';
      document.querySelector('#rCiclo').textContent=ciclo;
      document.querySelector('#rTemp').textContent=temp;
      document.querySelector('#rSpin').textContent=spin;
      document.querySelector('#rCarga').textContent=carga;
      document.querySelector('#rSecagem').textContent=secagem;
      document.querySelector('#rProdutos').innerHTML=produtos.map(x=>`<span>${x}</span>`).join('');
      document.querySelector('#rPassos').innerHTML=passos.map(x=>`<li>${x}</li>`).join('');
      document.querySelector('#rAviso').innerHTML=`<div class="alert warning"><b>Atenção:</b> ${aviso}</div>`;
    }
  });
}

// Conteúdo permanente na seção Máquina
const listaProgramas=document.querySelector('#maquina .program-list');
if(listaProgramas && !document.querySelector('#guia-cobertas-v14')){
  listaProgramas.insertAdjacentHTML('beforeend',`
    <details id="guia-cobertas-v14"><summary>Cobertas e edredons</summary><p>Esta WD10M não tem um ciclo dedicado “Roupa de Cama”. Para uma peça que a etiqueta permita lavar em máquina e que caiba com espaço para movimentação, use Algodão com água fria/morna e pouco lava-roupas líquido. Lave uma peça volumosa por vez e use Enxágue+. Se o item ocupar quase todo o tambor, use uma máquina comercial maior.</p></details>
    <details><summary>Ternos e casacos sociais</summary><p>Para uma peça limpa que só precisa perder odor, o Air Wash pode ser útil quando a etiqueta e o material permitem. Se houver mancha/sujeira ou a etiqueta disser “somente lavagem a seco”, encaminhe para lavanderia profissional. Air Wash não equivale à limpeza química profissional.</p></details>`);
}

// Nota de segurança permanente
const segurancaCard=document.querySelector('#seguranca .card');
if(segurancaCard && !document.querySelector('#alerta-formal-v14')){
  segurancaCard.insertAdjacentHTML('beforeend',`<div id="alerta-formal-v14" class="alert warning"><b>Air Wash ≠ lavagem a seco profissional.</b> O ciclo da Samsung usa ar quente e é ótimo para renovar algumas roupas sociais, mas não remove manchas e pode ser inadequado para couro, seda, espuma, peças muito engomadas ou com ornamentos frágeis.</div>`);
}
