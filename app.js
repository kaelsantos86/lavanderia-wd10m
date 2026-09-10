const rotinas={
 dia:{titulo:'Dia a dia / algodão',ciclo:'Algodão',temp:'30–40 °C',spin:'1.000–1.200 rpm',seca:'Secar Algodão se a etiqueta permitir e carga de secagem ≤ 6 kg',limite:'Até 10,1 kg para lavar; deixe espaço no tambor',prod:['Lava-roupas líquido no II','Amaciante opcional no ✿'],passos:['Separe claras e escuras e esvazie bolsos.','Coloque as peças sem compactar o tambor.','Dose o lava-roupas no compartimento II conforme o rótulo.','Selecione o ciclo indicado.','Ajuste temperatura e centrifugação conforme a etiqueta.'],aviso:''},
 pretas:{titulo:'Pretas e escuras',ciclo:'Algodão ou Sintéticos, conforme o tecido',temp:'Fria–30 °C',spin:'800–1.000 rpm',seca:'Preferir secagem ao ar; máquina somente se autorizada pela etiqueta',limite:'Carga folgada; separe das claras',prod:['Woolite Escuros ou lava-roupas líquido no II','Amaciante opcional e moderado'],passos:['Vire peças do avesso quando houver estampa ou atrito.','Lave com cores semelhantes.','Prefira água fria ou 30 °C.','Escolha Algodão ou Sintéticos conforme o tecido.','Seque à sombra para preservar cor.'],aviso:'Não use produto para branqueamento em peças escuras.'},
 brancas:{titulo:'Roupas brancas',ciclo:'Algodão',temp:'40 °C; 60 °C apenas quando permitido',spin:'1.000–1.400 rpm',seca:'Secar Algodão se permitido e carga de secagem ≤ 6 kg',limite:'Separe totalmente das coloridas; não compacte',prod:['Lava-roupas líquido no II','Oxigênio ativo para brancos, se necessário','Amaciante opcional'],passos:['Separe totalmente das coloridas.','Pré-trate manchas antes da máquina.','Use Algodão.','Se necessário, adicione tira-manchas para brancos conforme rótulo.','Confirme a remoção das manchas antes de secar.'],aviso:'Não use tira-manchas incompatível com lã, seda ou tecidos sensíveis.'},
 toalhas:{titulo:'Toalhas',ciclo:'Algodão',temp:'40 °C; 60 °C quando necessário e permitido',spin:'1.200–1.400 rpm',seca:'Secar Algodão com carga moderada, se a etiqueta permitir',limite:'Carga pequena ou média é mais eficiente; não compacte',prod:['Lava-roupas líquido no II','Oxigênio ativo conforme a cor, se necessário','Evite amaciante como rotina'],passos:['Lave toalhas separadas de roupas leves.','Não exagere no sabão.','Evite amaciante para preservar absorção.','Use centrifugação alta se a etiqueta permitir.','Retire logo após o fim da secagem.'],aviso:'Amaciante em excesso pode reduzir a absorção.'},
 cama:{titulo:'Lençóis / roupa de cama',ciclo:'Algodão',temp:'40 °C; 60 °C se necessário e permitido',spin:'800–1.200 rpm',seca:'Secar Algodão se permitido e carga de secagem ≤ 6 kg',limite:'Carga folgada; peças volumosas precisam de espaço',prod:['Lava-roupas líquido no II','Tira-manchas compatível com a cor, se necessário','Amaciante opcional'],passos:['Lave cores semelhantes.','Coloque lençóis soltos, sem enrolar em bola.','Use Algodão e centrifugação moderada.','Não compacte o tambor.','Divida a carga antes de secar se necessário.'],aviso:'Edredons muito volumosos podem exceder o limite prático mesmo quando cabem no tambor.'},
 esporte:{titulo:'Academia / dry fit',ciclo:'Sintéticos',temp:'Fria–30 °C',spin:'800–1.000 rpm',seca:'Preferir secagem ao ar; Secar Sintéticos apenas se autorizado',limite:'Preferir carga pequena ou média; ciclo Sintéticos até cerca de 4 kg',prod:['Lava-roupas líquido no II','Sem amaciante como padrão'],passos:['Vire as peças do avesso.','Lave logo após o uso quando possível.','Use Sintéticos em baixa temperatura.','Não use amaciante em tecidos técnicos.','Se a etiqueta permitir, use Secar Sintéticos.'],aviso:'Calor alto e amaciante podem prejudicar tecidos técnicos.'},
 intimas:{titulo:'Roupas íntimas',ciclo:'Algodão ou Vapor Higiênico, conforme tecido',temp:'40 °C; 60 °C somente quando permitido',spin:'800–1.200 rpm',seca:'Conforme a etiqueta',limite:'Pequena ou média; delicadas em saco de lavagem',prod:['Lava-roupas líquido no II','Amaciante opcional e mínimo'],passos:['Use saco de lavagem para renda e peças delicadas.','Confira elásticos e tecidos na etiqueta.','Use Algodão para peças resistentes.','Use Vapor Higiênico apenas quando o tecido tolerar.','Considere Enxaguar+ para reduzir resíduos.'],aviso:'Renda e elásticos podem não tolerar calor elevado.'},
 jeans:{titulo:'Jeans',ciclo:'Algodão',temp:'Fria–30 °C',spin:'800–1.000 rpm',seca:'Preferir secagem ao ar',limite:'Poucas peças ou carga média; jeans fica pesado molhado',prod:['Lava-roupas líquido ou produto para escuros no II','Amaciante opcional e mínimo'],passos:['Feche zíperes e vire do avesso.','Lave com cores escuras semelhantes.','Use baixa temperatura.','Evite centrifugação máxima sem necessidade.','Seque à sombra.'],aviso:'Jeans novo pode soltar tinta; lave separado nas primeiras vezes.'},
 la:{titulo:'Lã / delicadas laváveis',ciclo:'Lã',temp:'Fria–30 °C',spin:'400–800 rpm',seca:'Não secar na máquina como padrão',limite:'Carga pequena; até cerca de 2 kg no ciclo Lã',prod:['Detergente para lã/delicados no II','Sem tira-manchas incompatível','Sem amaciante como padrão'],passos:['Confirme que a etiqueta permite lavagem em máquina.','Use carga pequena.','Coloque peças sensíveis em saco protetor.','Selecione Lã e centrifugação baixa.','Seque como indicado na etiqueta, muitas vezes na horizontal.'],aviso:'Seda, couro e outras peças delicadas não devem entrar no ciclo Lã automaticamente.'},
 odor:{titulo:'Só odor',ciclo:'Lavagem a Seco / Air Wash',temp:'Automática',spin:'Não se aplica',seca:'Sai seca',limite:'Poucas peças; aproximadamente até 1 kg',prod:['Nenhum produto'],passos:['Confirme que o tecido tolera calor.','Não coloque água, sabão ou amaciante.','Selecione Lavagem a Seco / Air Wash.','Inicie o ciclo.','Se houver sujeira ou mancha, faça lavagem convencional.'],aviso:'Air Wash refresca e reduz odores; não remove sujeira nem manchas.'}
};

const textoQuantidade={poucas:'Poucas peças / carga pequena',media:'Carga média',grande:'Carga grande'};

function addAviso(atual,novo){return atual+(atual?' ':'')+novo;}

function montar(){
 const tipo=document.querySelector('#tipo').value;
 const quantidade=document.querySelector('#quantidade').value;
 const sujeira=document.querySelector('#sujeira').value;
 const prioridade=document.querySelector('#prioridade').value;
 const secar=document.querySelector('#secar').value;
 const d=rotinas[tipo];

 let ciclo=d.ciclo;
 let temp=d.temp;
 let spin=d.spin;
 let secagem=secar==='sim'?d.seca:'Sem secagem automática';
 let carga=`${textoQuantidade[quantidade]}. ${d.limite}`;
 let prod=[...d.prod];
 let passos=[...d.passos];
 let aviso=d.aviso;
 let status=[];

 status.push(sujeira==='pesada'?'Sujeira pesada':sujeira==='leve'?'Sujeira leve':'Sujeira normal');
 if(quantidade==='poucas') status.push('Poucas peças');
 if(prioridade==='rapido') status.push('Com pressa');

 if(tipo==='dia' && quantidade==='poucas' && prioridade==='resultado') ciclo='Lavagem Diária';

 if(quantidade==='poucas' && tipo!=='odor'){
   passos.splice(2,0,'Use uma dose proporcional à carga pequena; não dose como se o tambor estivesse cheio.');
 }

 if(quantidade==='grande'){
   if(['la','odor'].includes(tipo)){
     aviso=addAviso(aviso,'A carga selecionada é grande demais para este programa. Divida em cargas pequenas.');
     carga=d.limite;
   }
   if(tipo==='esporte') aviso=addAviso(aviso,'Para Sintéticos, divida uma carga grande para respeitar a capacidade do programa e melhorar o enxágue.');
   if(secar==='sim') aviso=addAviso(aviso,'A máquina lava até 10,1 kg, mas seca até 6 kg. Uma carga grande deve ser dividida antes da secagem.');
 }

 if(sujeira==='pesada' && !['la','odor'].includes(tipo)){
   ciclo+=' + considerar Intensivo/Manchas Difíceis';
   if(!prod.some(x=>x.toLowerCase().includes('oxigênio'))) prod.push('Tira-manchas compatível, se necessário');
   passos.unshift('Pré-trate manchas localizadas antes de iniciar o ciclo.');
   aviso=addAviso(aviso,'Não seque a peça até confirmar que a mancha foi removida.');
 }

 const rapido15Elegivel=quantidade==='poucas' && sujeira==='leve' && secar==='nao' && ['dia','pretas','brancas'].includes(tipo);
 const rapido59Elegivel=quantidade==='poucas' && sujeira==='leve' && secar==='sim' && ['dia','pretas','brancas'].includes(tipo);

 if(prioridade==='rapido'){
   if(rapido59Elegivel){
     ciclo="59' Lavar + Secar";
     temp='Conforme o ciclo e a etiqueta';
     spin='Automática/conforme o ciclo';
     secagem="Incluída no ciclo de 59'";
     carga='Muito pequena: aproximadamente até 1 kg de peças leves';
     passos=[
       'Confirme que são poucas peças leves e apenas levemente sujas.',
       'Confira se todas as peças permitem secagem em máquina.',
       'Use uma dose pequena de lava-roupas, proporcional à carga.',
       "Selecione 59' Lavar + Secar.",
       'Retire as peças quando o ciclo terminar.'
     ];
     aviso=addAviso(aviso,"O ciclo de 59' não é indicado para toalhas, jeans, roupa de cama, lã, carga volumosa ou peças muito sujas.");
   } else if(rapido15Elegivel){
     ciclo="Rápido 15'";
     temp='Baixa, conforme etiqueta e opções do ciclo';
     spin='Conforme o ciclo';
     carga='Poucas peças / carga pequena, até cerca de 2 kg';
     passos=[
       'Confirme que as peças estão apenas levemente sujas.',
       'Use uma dose pequena de lava-roupas, proporcional à carga.',
       "Selecione Rápido 15'.",
       'Não acrescente produtos em excesso em um ciclo tão curto.',
       'Retire as peças ao terminar; este ciclo não seca.'
     ];
   } else if(tipo==='toalhas'){
     aviso=addAviso(aviso,"Mesmo com poucas toalhas, mantenha Algodão: toalhas são espessas e absorventes e não são uma boa aplicação do Rápido 15' ou do 59'. Para ganhar tempo, use carga pequena e a maior centrifugação permitida pela etiqueta.");
   } else if(tipo==='cama'){
     aviso=addAviso(aviso,'Roupa de cama precisa de espaço e enxágue adequado. Não encurte para Rápido 15’ apenas pela pressa.');
   } else if(tipo==='esporte'){
     aviso=addAviso(aviso,'Para roupa esportiva, o ciclo Sintéticos em baixa temperatura continua sendo a escolha mais segura; o ciclo rápido não deve substituir o cuidado do tecido quando há suor/odor.');
   } else if(tipo==='intimas'){
     aviso=addAviso(aviso,'Para roupas íntimas, priorize o ciclo adequado ao tecido e higiene em vez de encurtar automaticamente para 15 minutos.');
   } else if(tipo==='jeans'){
     aviso=addAviso(aviso,'Jeans é pesado e retém água; mantenha Algodão em baixa temperatura, mesmo quando houver pressa.');
   } else if(tipo==='la'){
     aviso=addAviso(aviso,'Não troque o ciclo Lã por um ciclo rápido; o movimento controlado é parte da proteção da peça.');
   } else if(tipo==='odor'){
     aviso=addAviso(aviso,'Air Wash já é o processo indicado quando não há sujeira visível e o objetivo é apenas renovar a peça.');
   } else if(sujeira!=='leve'){
     aviso=addAviso(aviso,'Como a sujeira não é leve, não recomendo Rápido 15’/59’. Um ciclo curto pode entregar limpeza insuficiente.');
   } else if(quantidade!=='poucas'){
     aviso=addAviso(aviso,'Ciclos rápidos são para cargas pequenas. Para usar a opção rápida, reduza a carga.');
   }
 }

 if(secar==='sim' && ['esporte','la','jeans','pretas'].includes(tipo) && !rapido59Elegivel){
   aviso=addAviso(aviso,'A etiqueta da peça decide se a secadora pode ser usada.');
 }
 if(tipo==='la' && secar==='sim') secagem='Não recomendado como padrão; siga estritamente a etiqueta';
 if(tipo==='odor'){
   secagem='O Air Wash termina com a peça seca';
   if(sujeira!=='leve') aviso=addAviso(aviso,'Você informou sujeira normal/pesada. Air Wash não lava; se houver sujeira real, escolha outro tipo de roupa e faça lavagem com água e detergente.');
 }

 document.querySelector('#rTitulo').textContent=d.titulo;
 document.querySelector('#rStatus').textContent=status.join(' • ');
 document.querySelector('#rCiclo').textContent=ciclo;
 document.querySelector('#rTemp').textContent=temp;
 document.querySelector('#rSpin').textContent=spin;
 document.querySelector('#rCarga').textContent=carga;
 document.querySelector('#rSecagem').textContent=secagem;
 document.querySelector('#rProdutos').innerHTML=prod.map(x=>`<span>${x}</span>`).join('');
 document.querySelector('#rPassos').innerHTML=passos.map(x=>`<li>${x}</li>`).join('');
 document.querySelector('#rAviso').innerHTML=aviso?`<div class="alert warning"><b>Atenção:</b> ${aviso}</div>`:'';
 document.querySelector('#resultado').classList.remove('hidden');
 document.querySelector('#resultado').scrollIntoView({behavior:'smooth',block:'start'});
}
document.querySelector('#montar').addEventListener('click',montar);

const manchas={
 gordura:['Gordura / óleo','Retire o excesso sem esfregar. Aplique uma gota de detergente de louça neutro na mancha, massageie suavemente e enxágue. Depois pré-trate com lava-roupas líquido e lave normalmente. Não coloque detergente de louça dentro da máquina.'],
 sangue:['Sangue','Use água fria. Enxágue pelo avesso e pré-trate com detergente enzimático compatível. Evite água quente no início. Lave e confira antes de secar.'],
 suor:['Suor / desodorante','Pré-trate com lava-roupas líquido. Em algodão compatível, oxigênio ativo pode ajudar. Em roupa esportiva, não use amaciante.'],
 bebida:['Café / chá / vinho','Absorva o excesso sem espalhar, enxágue e pré-trate. Use oxigênio ativo compatível com a cor e o tecido. Faça teste de firmeza da cor.'],
 maquiagem:['Maquiagem','Retire o excesso sem esfregar. Pré-trate com lava-roupas líquido; se houver componente oleoso, uma gota de detergente de louça seguida de enxágue pode ajudar.'],
 lama:['Lama / terra / grama','Deixe a lama secar, escove o excesso e pré-trate com detergente enzimático. Oxigênio ativo pode ajudar quando o tecido permitir.'],
 desconhecida:['Mancha desconhecida','Não use calor. Faça teste em área escondida. Comece por água fria e lava-roupas líquido; avance para tira-manchas de oxigênio ativo apenas se o tecido permitir.']
};
document.querySelector('#tratar').addEventListener('click',()=>{
 const [t,b]=manchas[document.querySelector('#tipoMancha').value];
 const box=document.querySelector('#resultadoMancha');
 box.innerHTML=`<h2>${t}</h2><p>${b}</p><div class="alert warning"><b>Antes de secar:</b> confirme que a mancha saiu; o calor pode fixar resíduos restantes.</div>`;
 box.classList.remove('hidden');
});

const lista=[
 ['ariel','Ariel Concentrado Expert','Sabão principal','Uso geral em lavadora frontal; siga a dose do rótulo.'],
 ['woolite','Woolite Roupas Pretas e Escuras','Especializado','Para pretas, escuras e tecidos compatíveis.'],
 ['vanishCor','Vanish Oxi Action / Oxi Advance','Tira-manchas','Para coloridas compatíveis, conforme rótulo.'],
 ['vanishBranco','Vanish Crystal White','Brancos','Para brancos compatíveis, conforme rótulo.'],
 ['amaciante','Amaciante concentrado','Opcional','Use moderadamente; evite em toalhas e dry fit.'],
 ['perfume','Comfort Boom Cristais','Opcional','Perfume extra; não melhora a limpeza.'],
 ['vinagre','Vinagre de álcool branco','Auxiliar externo','Pré-tratamento/molho externo neste guia.'],
 ['bicarbonato','Bicarbonato','Auxiliar','Uso pontual; não misture com vinagre esperando potencialização.'],
 ['detergente','Detergente de louça neutro','Gordura','Somente pré-tratamento externo e enxágue.'],
 ['sacos','Saquinhos de lavagem','Acessório','Para lingerie e peças pequenas/delicadas.']
];
const salvo=JSON.parse(localStorage.getItem('wd10m-compras')||'{}');
document.querySelector('#compras').innerHTML=lista.map(([id,n,t,d])=>`<label class="product-row"><input type="checkbox" data-id="${id}" ${salvo[id]?'checked':''}><span><b>${n}</b><span class="tag">${t}</span><p class="muted">${d}</p></span></label>`).join('');
document.querySelectorAll('#compras input').forEach(el=>el.addEventListener('change',()=>{salvo[el.dataset.id]=el.checked;localStorage.setItem('wd10m-compras',JSON.stringify(salvo));}));

const quick={
 '59':"<div class='alert'><b>59' Lavar + Secar</b><br>Carga muito pequena, cerca de 1 kg de peças leves e pouco sujas. Use pouco sabão e somente roupas que permitem secadora. Não é um atalho adequado para toalhas, jeans, cama ou peças volumosas.</div>",
 '15':"<div class='alert'><b>Rápido 15'</b><br>Para poucas peças, aproximadamente até 2 kg, e sujeira leve. Não é indicado para manchas, carga grande, toalhas espessas ou roupa muito suada.</div>",
 air:"<div class='alert'><b>Air Wash</b><br>Sem água, sem sabão e sem amaciante. Serve para refrescar e reduzir odores; não remove sujeira.</div>",
 tambor:"<div class='alert'><b>Lavagem do Tambor Eco</b><br>Máquina totalmente vazia e sem produtos. Execute periodicamente conforme o manual e o aviso da lavadora.</div>"
};
document.querySelectorAll('[data-quick]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#quickBox').innerHTML=quick[b.dataset.quick]));

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
 btn.classList.add('active');
 document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active-panel'));
 document.querySelector('#'+btn.dataset.tab).classList.add('active-panel');
 window.scrollTo({top:0,behavior:'smooth'});
}));

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}