// =============================================
// DATOS DEL JUEGO
// =============================================

const suspects = [
    { name: "Max Powerlift",    emoji: "🏋️", profession: "Powerlifter profesional" },
    { name: "Sofi FitQueen",    emoji: "👑", profession: "Influencer fitness" },
    { name: "Elías CardioRush", emoji: "🏃", profession: "Maratonista amateur" },
    { name: "Bruno El Bulk",    emoji: "💪", profession: "Culturista en offseason" },
    { name: "Luna Pilates",     emoji: "🧘", profession: "Instructora de pilates" }
];

const locations = [
    { name: "Cocina",   emoji: "🍳" },
    { name: "Sala",     emoji: "🛋️" },
    { name: "Recámara", emoji: "🛏️" },
    { name: "Baño",     emoji: "🚿" },
    { name: "Patio",    emoji: "🌿" }
];

// MÉTODOS = qué hizo el culpable CON la proteína robada
const methods = [
    { name: "Hizo batidos",          emoji: "🥤", desc: "Usó la proteína para prepararse batidos" },
    { name: "Horneó galletas",       emoji: "🍪", desc: "Usó la proteína para hornear galletas fitness" },
    { name: "Fabricó barritas",      emoji: "🍫", desc: "Mezclò la proteína para hacer barritas caseras" },
    { name: "Preparó helados",       emoji: "🍦", desc: "Usó la proteína para hacer helados proteicos" },
    { name: "La tiró y la escondió", emoji: "🗑️", desc: "Desechó la proteína y ocultó el bote" }
];

// =============================================
// PISTAS NEGATIVAS GENÉRICAS
// Lugar incorrecto: lugar limpio, sin rastro
// Método incorrecto: sin aludir al método investigado
// =============================================

const locationMissClues = {
    "Cocina":   "La cocina está impecable. Mesones limpios, utensilios en su lugar. Sin rastro de nada sospechoso.",
    "Sala":     "La sala está en orden. El sillón limpio, el control remoto en su lugar. Nada que ver aquí.",
    "Recámara": "La recámara está tal como la dejaste. No hay nada fuera de lugar en este cuarto.",
    "Baño":     "El baño está intacto. Drenaje limpio, sin residuos. Nada que llame la atención.",
    "Patio":    "El patio está despejado. Pesas ordenadas, piso limpio. Nadie estuvo aquí recientemente."
};

const methodMissClues = {
    "Hizo batidos":          "No hay rastro de líquidos preparados. La licuadora está guardada, seca y fría.",
    "Horneó galletas":       "No aparecen migas, moldes ni señales de horneado reciente. El horno está frío.",
    "Fabricó barritas":      "No se encuentra ningún molde, envoltorio ni empaque casero. Todo recogido.",
    "Preparó helados":       "El congelador muestra su contenido habitual. Sin recipientes extras ni paletas.",
    "La tiró y la escondió": "No se observa nada tirado ni oculto. Todo está exactamente donde debería estar."
};

// =============================================
// 5 CASOS
// =============================================

const cases = [
    {
        id: 0,
        title: "El Bote Vacío",
        subtitle: "Caso 1",
        icon: "🥛",
        description: "Compraste un bote nuevo de proteína de 2kg. Esta mañana apareció completamente vacío. Nadie admite haberlo usado. La investigación comienza ahora.",
        intro: "El bote tenía tu nombre escrito con marcador permanente. Alguien lo ignoró deliberadamente.",
        clues: {
            suspects: {
                "Max Powerlift":    { hit: "Max hizo semana de carga de proteína. Su bote propio está sospechosamente lleno sin haber comprado nada esta semana.", miss: "Max trajo su propio suplemento esta semana y tiene el ticket de compra. No tenía motivo." },
                "Sofi FitQueen":    { hit: "Sofi publicó en redes una receta con proteína en polvo. En el fondo de la foto se reconoce tu cocina claramente.", miss: "Sofi compró su propia proteína ayer. Tiene el comprobante digital. No fue ella." },
                "Elías CardioRush": { hit: "Elías entrenó doble sesión esta semana y llegó sin suplementos. Tenía la necesidad y la oportunidad. Todo cuadra.", miss: "Elías usa proteína vegetal exclusivamente. El suero de leche no es parte de su protocolo." },
                "Bruno El Bulk":    { hit: "Bruno está en fase de volumen agresivo y el bote desapareció el día exacto en que estuvo solo en casa por horas.", miss: "Bruno estuvo fuera de la ciudad dos días completos. No pudo haberlo vaciado de ninguna forma." },
                "Luna Pilates":     { hit: "Luna lleva semanas insistiendo en que dejes el suero. Amenazó con 'resolver el problema ella misma' si no cambiabas.", miss: "Luna respeta la propiedad ajena aunque no comparta tus hábitos nutricionales. No fue ella." }
            },
            locations: {
                "Cocina":   "La báscula de cocina tiene residuos de polvo blanco en la superficie. Alguien midió porciones exactas aquí varias veces.",
                "Sala":     "La sala está en orden. El sillón limpio, el control remoto en su lugar. Nada que ver aquí.",
                "Recámara": "Encuentras la tapa del bote debajo de la cama. Lo usaron aquí secretamente, lejos de miradas.",
                "Baño":     "El bote vacío está en el cesto de basura del baño, mal escondido bajo papel higiénico.",
                "Patio":    "Hay restos de polvo de proteína en el piso del patio, mezclados con tierra de las macetas."
            },
            methodsHit: {
                "Hizo batidos":          "La licuadora tiene residuos de múltiples preparaciones. Alguien hizo batido tras batido hasta vaciar los 2kg completos.",
                "Horneó galletas":       "Se encontró una bandeja para hornear con restos de galletas proteicas. Usaron casi todo el bote solo en esto.",
                "Fabricó barritas":      "Hay moldes de silicón con forma de barra, sucios y apilados. Fabricaron barritas caseras con toda tu proteína.",
                "Preparó helados":       "El congelador tiene varios recipientes de helado proteico casero a medio comer. Usaron los 2kg completos en esto.",
                "La tiró y la escondió": "El bote fue rellenado con harina para que no se notara el peso al cargarlo. Crimen premeditado y planificado con tiempo."
            }
        },
        endings: {
            win:  (s, l, m) => `¡CASO CERRADO!\n\n${s.emoji} ${s.name} robó tu proteína, fue a ${l.emoji} ${l.name} y ${m.emoji} ${m.name.toLowerCase()} con ella hasta dejar el bote vacío. Al ser descubierto respondió: "Te iba a comprar más... el lunes."\n\nVEREDICTO: CULPABLE SIN REMORDIMIENTO.`,
            lose: (s, l, m) => `SIN MÁS INTENTOS\n\nEl culpable era ${s.emoji} ${s.name}. Fue a ${l.emoji} ${l.name} y ${m.emoji} ${m.name.toLowerCase()} con tu proteína. El bote jamás fue repuesto.\n\nLección aprendida: pon candado al refri.`
        }
    },
    {
        id: 1,
        title: "El Batido Desaparecido",
        subtitle: "Caso 2",
        icon: "🥤",
        description: "Tu batido post-entreno de 50g de proteína estaba en el refrigerador con tu nombre. Llegaste del gym y ya no estaba. Alguien lo tomó mientras entrenabas.",
        intro: "Testigos reportan que alguien fue visto cerca del refrigerador antes de que llegaras a casa.",
        clues: {
            suspects: {
                "Max Powerlift":    { hit: "Max llegó una hora antes que tú. Su shaker personal huele exactamente a vainilla, igual que tu batido.", miss: "Max estaba en el gym a esa hora exacta. Su coartada está verificada por las cámaras." },
                "Sofi FitQueen":    { hit: "Sofi subió un story bebiendo algo verde en una botella idéntica a la tuya. Lo borró después.", miss: "Sofi estaba grabando contenido en estudio externo todo el día. Imposible que haya sido ella." },
                "Elías CardioRush": { hit: "Elías admitió que 'probó un batido del refri sin etiqueta'. Lo describe con exactamente tus mismos ingredientes.", miss: "Elías llegó al lugar después de ti según el registro de entrada. Los horarios no cuadran." },
                "Bruno El Bulk":    { hit: "Bruno necesita 400g de proteína diarios y su bote estaba vacío esta mañana antes de que tú salieras.", miss: "Bruno trajo su propio meal prep completo hoy. No tenía ninguna razón para tocar el tuyo." },
                "Luna Pilates":     { hit: "Luna insiste en que el suero de leche desequilibra el chi y estuvo sola en casa justo antes de que llegaras.", miss: "Luna estuvo en clase de yoga todo el tiempo. Sus tres alumnas lo confirman sin dudas." }
            },
            locations: {
                "Cocina":   "En la cocina encuentras manchas de polvo blanco cerca de la licuadora y una cuchara medidora sucia en el fregadero.",
                "Sala":     "La sala está en orden. El sillón limpio, el control remoto en su lugar. Nada que ver aquí.",
                "Recámara": "La recámara está tal como la dejaste. No hay nada fuera de lugar en este cuarto.",
                "Baño":     "El drenaje del baño tiene residuos proteicos recientes. ¿Alguien vació el batido aquí?",
                "Patio":    "En el patio hay un shaker vacío tirado junto a las pesas. Todavía húmedo por dentro."
            },
            methodsHit: {
                "Hizo batidos":          "El batido fue mezclado con más proteína en polvo para hacer una tanda más grande. La licuadora huele exactamente igual que tu receta.",
                "Horneó galletas":       "Usaron tu batido ya preparado como líquido base para hornear galletas proteicas. Hay restos de masa en la charola.",
                "Fabricó barritas":      "Mezclaron tu batido con avena y lo comprimieron en moldes de barrita. Hay dos moldes sucios en el cajón.",
                "Preparó helados":       "Tu batido fue vaciado en moldes de paleta y congelado. Hay tres paletas a medio comer en el congelador.",
                "La tiró y la escondió": "El batido fue vaciado por el drenaje y la botella fue enjuagada y escondida debajo del fregadero."
            }
        },
        endings: {
            win:  (s, l, m) => `¡CASO RESUELTO!\n\n${s.emoji} ${s.name} tomó tu batido, fue a ${l.emoji} ${l.name} y con él ${m.emoji} ${m.name.toLowerCase()}. Cuando lo confrontaste respondió: "Era para la recuperación. ¿No somos familia del gym?"\n\nVEREDICTO: CULPABLE CONFESO.`,
            lose: (s, l, m) => `SIN MÁS INTENTOS\n\nEra ${s.emoji} ${s.name}. Fue a ${l.emoji} ${l.name} y con tu batido ${m.emoji} ${m.name.toLowerCase()}. Tu proteína post-entreno jamás fue recuperada.\n\nLección: candado al refrigerador.`
        }
    },
    {
        id: 2,
        title: "El Meal Prep Robado",
        subtitle: "Caso 3",
        icon: "🍱",
        description: "Tu tupperware con pollo y arroz integral —tu meal prep semanal— desapareció del refrigerador. Alguien tomó tu comida de toda la semana mientras entrenabas.",
        intro: "El tupperware tenía etiqueta con tu nombre y la hora de preparación. Lo tomaron sabiendo que era tuyo.",
        clues: {
            suspects: {
                "Max Powerlift":    { hit: "Max olvidó traer su meal prep hoy y llegó con la bolsa vacía. Muy conveniente que justo hoy desaparezca el tuyo.", miss: "Max llegó al gym con su propio tupperware. Varios compañeros lo vieron comer el suyo." },
                "Sofi FitQueen":    { hit: "Sofi hizo un reel de 'almuerzo fit sorpresa'. El fondo de la cocina en el video es inconfundiblemente el tuyo.", miss: "Sofi pidió comida a domicilio hoy. Tiene el comprobante con hora exacta en su teléfono." },
                "Elías CardioRush": { hit: "Elías llegó hambriento tras 20km de carrera, sin haber comido nada, y estuvo solo en casa media hora.", miss: "Elías comió en la cafetería del gym después de su carrera. Hay tres testigos que lo vieron." },
                "Bruno El Bulk":    { hit: "Bruno dijo dos veces esta semana que si dejabas pollo en el refri lo iba a tomar. Al parecer no era broma.", miss: "Bruno tiene chef personal que le prepara comida esta semana. No necesitaba robar la tuya." },
                "Luna Pilates":     { hit: "Luna argumenta que el pollo convencional tiene hormonas y amenazó con tirarlo 'por tu bien'. Estuvo sola en casa.", miss: "Luna es vegetariana estricta certificada. No habría tocado un tupperware con pollo jamás." }
            },
            locations: {
                "Cocina":   "El microondas tiene restos de arroz integral pegados en las paredes internas. Alguien calentó el tupperware aquí.",
                "Sala":     "La sala está en orden. El sillón limpio, el control remoto en su lugar. Nada que ver aquí.",
                "Recámara": "El tupperware vacío está debajo de la cama. Lo comieron aquí escondiéndose del resto de la casa.",
                "Baño":     "El tupperware está en el bote de basura del baño, enjuagado con jabón para eliminar el olor a pollo.",
                "Patio":    "Hay granos de arroz integral esparcidos en el piso del patio. Alguien comió aquí apresuradamente."
            },
            methodsHit: {
                "Hizo batidos":          "El pollo y el arroz fueron triturados en la licuadora con agua. Hay residuos de ambos ingredientes adentro. Perturbador.",
                "Horneó galletas":       "Deshidrataron el arroz y lo mezclaron con el pollo deshebrado para hacer galletas saladas proteicas. Hay restos en la charola.",
                "Fabricó barritas":      "Comprimieron el pollo y el arroz en moldes de barrita energética. Un crimen gastronómico sin precedentes registrados.",
                "Preparó helados":       "Lo congelaron en moldes y lo comieron como paleta salada proteica. Hay una a medio derretir en el congelador todavía.",
                "La tiró y la escondió": "El tupperware completo, con toda la comida adentro, fue tirado a la basura. Pérdida total deliberada."
            }
        },
        endings: {
            win:  (s, l, m) => `¡CASO RESUELTO!\n\n${s.emoji} ${s.name} robó tu meal prep, fue a ${l.emoji} ${l.name} y con él ${m.emoji} ${m.name.toLowerCase()}. Su defensa: "Tenía mucha hambre y se veía delicioso."\n\nVEREDICTO: CULPABLE. El jurado del gym lo condena a reponer una semana de meal prep.`,
            lose: (s, l, m) => `SIN MÁS INTENTOS\n\nEra ${s.emoji} ${s.name}. Fue a ${l.emoji} ${l.name} y con tu comida ${m.emoji} ${m.name.toLowerCase()}. Tu semana de meal prep... perdida para siempre.\n\nLa justicia del gym tardará.`
        }
    },
    {
        id: 3,
        title: "Las Barritas Importadas",
        subtitle: "Caso 4",
        icon: "🍫",
        description: "Tus barritas de proteína importadas —edición limitada, 180 pesos cada una— desaparecieron de tu bolsa del gym. Alguien hurgó en ella y se las llevó todas. Son 5 barritas: 900 pesos.",
        intro: "La bolsa estaba cerrada pero alguien conocía la combinación o forzó la cremallera sin dejar rastro obvio.",
        clues: {
            suspects: {
                "Max Powerlift":    { hit: "Max comentó ayer que esas barritas importadas son las mejores del mercado. Las conocía por sabor, textura y precio exacto.", miss: "Max trajo sus propios snacks hoy y tiene recibo de compra. No tenía motivo alguno." },
                "Sofi FitQueen":    { hit: "Sofi reseñó exactamente esas barritas en su canal esta mañana. ¿Cómo las consiguió tan rápido si son de importación?", miss: "Sofi tiene contrato con otra marca de suplementos. Tocar barritas ajenas dañaría su imagen." },
                "Elías CardioRush": { hit: "Elías terminó 21km sin llevar ningún snack y llegó con el azúcar por los suelos. Estaba en modo desesperación absoluta.", miss: "Elías come solo fruta después de correr por protocolo médico. Las barritas no son su estilo." },
                "Bruno El Bulk":    { hit: "Bruno dijo que necesitaba un boost calórico urgente post-entreno y tenía las manos completamente vacías de suplementos.", miss: "Bruno tiene una caja entera de suplementos en su casillero personal. No necesitaba los tuyos." },
                "Luna Pilates":     { hit: "Luna asegura que esas barritas tienen aditivos peligrosos y llevaba días amenazando con confiscarlas 'para protegerte'.", miss: "Luna no abre bolsas ajenas. Su código de ética del yoga se lo impediría... al menos en teoría." }
            },
            locations: {
                "Cocina":   "En el cajón de basura de la cocina hay envoltorios con la marca exacta de tus barritas, aplastados y amontonados.",
                "Sala":     "La sala está en orden. El sillón limpio, sin migas ni envoltorios. Nada relevante aquí.",
                "Recámara": "En el bote de basura de la recámara hay envoltorios aplastados y apilados. Son de tus barritas.",
                "Baño":     "Hay envoltorios tirados detrás del sanitario. Alguien los escondió aquí apresuradamente.",
                "Patio":    "Los envoltorios están enterrados bajo las macetas del patio. Un encubrimiento elaborado y calculado."
            },
            methodsHit: {
                "Hizo batidos":          "Las 5 barritas fueron trituradas y disueltas en agua en la licuadora para hacer batidos. Quedan restos del sabor chocolate característico.",
                "Horneó galletas":       "Las barritas fueron ralladas y usadas como base para hornear galletas. Hay una bandeja con restos del mismo sabor que las tuyas.",
                "Fabricó barritas":      "Las derritieron y las volvieron a moldear mezcladas con otros ingredientes. Hay moldes sucios con el mismo aroma de tus barritas.",
                "Preparó helados":       "Las barritas fueron derretidas y vertidas en moldes de paleta. Hay dos paletas de chocolate con la textura exacta de tus barritas en el congelador.",
                "La tiró y la escondió": "Las barritas fueron tiradas enteras a la basura argumentando que 'no eran orgánicas'. 900 pesos directamente desechados."
            }
        },
        endings: {
            win:  (s, l, m) => `¡CASO CERRADO!\n\n${s.emoji} ${s.name} tomó tus barritas, fue a ${l.emoji} ${l.name} y con ellas ${m.emoji} ${m.name.toLowerCase()}. Al pedirle los 900 pesos respondió: "Te hago la transferencia ahorita."\n\nSpoiler: la transferencia nunca llegó.`,
            lose: (s, l, m) => `SIN MÁS INTENTOS\n\nEra ${s.emoji} ${s.name}. Fue a ${l.emoji} ${l.name} y con tus barritas ${m.emoji} ${m.name.toLowerCase()}. 900 pesos esfumados.\n\nPróxima vez: mochila con candado biométrico.`
        }
    },
    {
        id: 4,
        title: "La Proteína Prohibida",
        subtitle: "Caso 5",
        icon: "🚫",
        description: "Tu bote de proteína nuevo —sin abrir, 1,200 pesos— fue tirado a la basura. Alguien argumentó que 'tenía demasiados químicos' y actuó sin pedirte permiso. El culpable se cree tu nutriólogo.",
        intro: "Una nota anónima en el refrigerador decía: 'Por tu salud, deshice el sacrilegio.' La letra era familiar.",
        clues: {
            suspects: {
                "Max Powerlift":    { hit: "Max odia el suero de leche y prefiere proteína de carne. Dijo ayer que esa marca específica 'es un fraude peligroso'.", miss: "Max tiene sus propios suplementos y respeta los ajenos. No interfiere con las rutinas de nadie." },
                "Sofi FitQueen":    { hit: "Sofi promovió una marca rival esta semana. Eliminar la competencia de tu refri tiene perfecta lógica de negocio para ella.", miss: "Sofi no toca los suplementos ajenos. Le destruiría la reputación si se supiera que lo hizo." },
                "Elías CardioRush": { hit: "Elías leyó esta semana un artículo sobre proteína artificial y daño renal. Lo creyó todo sin cuestionar absolutamente nada.", miss: "Elías no interviene en los hábitos de los demás aunque personalmente no esté de acuerdo." },
                "Bruno El Bulk":    { hit: "Bruno dice públicamente que esa marca es una estafa y un peligro. Su fanatismo por otras marcas es de todos conocido.", miss: "Bruno respeta los suplementos ajenos aunque no los apruebe. Tiene su propio código entre atletas." },
                "Luna Pilates":     { hit: "Luna lleva semanas insistiendo en que cambies a proteína vegetal y amenazó con 'resolver el problema ella misma' esta semana.", miss: "Luna expresa su opinión verbalmente pero no actuaría sobre tus cosas sin permiso explícito." }
            },
            locations: {
                "Cocina":   "La nota está pegada con cinta en el refrigerador de la cocina, escrita con letra de imprenta muy cuidadosa. Muy planificado.",
                "Sala":     "La sala está en orden. El sillón limpio, sin artículos ni papeles sobre la mesa. Nada que ver aquí.",
                "Recámara": "Hay una pantalla con videos de conspiraciones del fitness todavía abiertos en la computadora. Alguien se convenció aquí antes de actuar.",
                "Baño":     "El bote fue enjuagado en el baño antes de tirarlo. Borraron el número de lote y la fecha de caducidad con agua.",
                "Patio":    "El bote está en la basura del patio, cubierto deliberadamente con otras bolsas para ocultarlo bajo la basura."
            },
            methodsHit: {
                "Hizo batidos":          "Vaciaron todo el polvo del bote mezclándolo con agua para hacer batidos y tirarlos por el drenaje. 1,200 pesos literalmente por el caño.",
                "Horneó galletas":       "Usaron la proteína para hornear galletas con el pretexto de 'probar que sabía mal'. Hay una charola con restos quemados en el horno.",
                "Fabricó barritas":      "Mezclaron la proteína con otros ingredientes para hacer barritas caseras 'para demostrar que la fórmula era mala'. La lógica falla, el crimen no.",
                "Preparó helados":       "Congelaron la proteína mezclada con agua en moldes 'para ver si la textura era sospechosa'. Pseudociencia en acción documentada.",
                "La tiró y la escondió": "Tiraron el bote directamente sin abrirlo siquiera. Un crimen sin beneficio personal, puramente ideológico. 1,200 pesos a la basura."
            }
        },
        endings: {
            win:  (s, l, m) => `¡CASO RESUELTO!\n\n${s.emoji} ${s.name} confiscó tu proteína, fue a ${l.emoji} ${l.name} y con ella ${m.emoji} ${m.name.toLowerCase()}. Su argumento final: "Te salvé de un veneno lento."\n\nVEREDICTO: CULPABLE por fanatismo nutricional extremo. Debe reponer el bote y entregar disculpa por escrito.`,
            lose: (s, l, m) => `SIN MÁS INTENTOS\n\nEra ${s.emoji} ${s.name}. Fue a ${l.emoji} ${l.name} y con tu proteína ${m.emoji} ${m.name.toLowerCase()}. Tu bote murió por pseudociencia ajena.\n\nLa nota sigue sin firma. El misterio, a medias.`
        }
    }
];

// =============================================
// VARIABLES DE ESTADO
// =============================================

let selectedSuspect   = null;
let selectedLocation  = null;
let selectedMethod    = null;

let culprit, crimeLocation, crimeMethod, currentCase;

let attempts = 5;
let gameOver = false;
let investigationCount = 0;

// =============================================
// PANTALLA DE SELECCIÓN DE CASO
// =============================================

document.getElementById("start-btn").addEventListener("click", showCaseSelect);

function showCaseSelect() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("case-select-screen").style.display = "flex";

    const grid = document.getElementById("case-grid");
    grid.innerHTML = "";

    cases.forEach(c => {
        const card = document.createElement("div");
        card.className = "case-select-card";
        card.innerHTML = `
            <span class="case-select-icon">${c.icon}</span>
            <span class="case-select-sub">${c.subtitle}</span>
            <span class="case-select-title">${c.title}</span>
            <p class="case-select-desc">${c.description}</p>
            <button class="investigate-btn case-start-btn">Resolver este caso →</button>
        `;
        card.querySelector(".case-start-btn").addEventListener("click", () => startGame(c.id));
        grid.appendChild(card);
    });
}

// =============================================
// INICIO DEL JUEGO
// =============================================

function startGame(caseId) {
    document.getElementById("case-select-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    currentCase   = cases[caseId];
    culprit       = suspects[Math.floor(Math.random() * suspects.length)];
    crimeLocation = locations[Math.floor(Math.random() * locations.length)];
    crimeMethod   = methods[Math.floor(Math.random() * methods.length)];

    attempts = 5;
    gameOver = false;
    investigationCount = 0;
    selectedSuspect  = null;
    selectedLocation = null;
    selectedMethod   = null;

    document.getElementById("case-title").innerText = currentCase.title;
    document.getElementById("case-description").innerText = currentCase.description;
    document.getElementById("case-intro").innerText = "📋 " + currentCase.intro;
    updateAttempts();
    document.getElementById("story-box").innerText = "🧩 Selecciona un sospechoso, un lugar y un método, luego pulsa Investigar.";

    document.getElementById("investigate-btn").disabled = false;
    document.getElementById("investigate-btn").style.opacity = "1";

    const old = document.getElementById("restart-btn");
    if (old) old.remove();
    const oldBack = document.getElementById("back-btn");
    if (oldBack) oldBack.remove();

    clearContainers();
    createCards(suspects,  "suspects-container",  "suspect",  "name");
    createCards(locations, "locations-container", "location", "name");
    createCards(methods,   "methods-container",   "method",   "name");
}

function updateAttempts() {
    const el = document.getElementById("attempts");
    el.innerText = `🔍 Intentos: ${attempts}`;
    el.style.color = attempts <= 2 ? "#e74c3c" : "#2ecc71";
}

function clearContainers() {
    ["suspects-container", "locations-container", "methods-container"].forEach(id => {
        document.getElementById(id).innerHTML = "";
    });
}

// =============================================
// CREAR CARTAS
// =============================================

function createCards(data, containerId, type, key) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card", type);
        card.dataset.value = item[key];

        card.innerHTML = `
            <span class="card-emoji">${item.emoji}</span>
            <span class="card-name">${item[key]}</span>
            ${type === "suspect" ? `<span class="card-sub">${item.profession}</span>` : ""}
            ${type === "method"  ? `<span class="card-sub">${item.desc}</span>` : ""}
            <span class="card-flag" title="Marcar/Desmarcar">🚩</span>
        `;

        card.addEventListener("click", (e) => {
            if (gameOver) return;
            if (e.target.classList.contains("card-flag")) return;
            document.querySelectorAll(`.${type}`).forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            if (type === "suspect")  selectedSuspect  = item;
            if (type === "location") selectedLocation = item;
            if (type === "method")   selectedMethod   = item;
        });

        card.addEventListener("dblclick", (e) => {
            if (e.target.classList.contains("card-flag")) return;
            card.classList.toggle("flagged");
        });

        card.querySelector(".card-flag").addEventListener("click", (e) => {
            e.stopPropagation();
            card.classList.toggle("flagged");
        });

        container.appendChild(card);
    });
}

// =============================================
// INVESTIGAR
// =============================================

document.getElementById("investigate-btn").addEventListener("click", investigate);

function investigate() {
    if (gameOver) return;
    if (!selectedSuspect || !selectedLocation || !selectedMethod) {
        showStory("⚠️ Debes seleccionar un sospechoso, un lugar Y un método antes de investigar.");
        return;
    }

    investigationCount++;
    attempts--;
    updateAttempts();

    const suspectMatch  = selectedSuspect.name  === culprit.name;
    const locationMatch = selectedLocation.name === crimeLocation.name;
    const methodMatch   = selectedMethod.name   === crimeMethod.name;

    const suspectData  = currentCase.clues.suspects[selectedSuspect.name];
    const suspectClue  = suspectMatch ? suspectData.hit : suspectData.miss;
    const locationClue = locationMatch
        ? currentCase.clues.locations[selectedLocation.name]
        : locationMissClues[selectedLocation.name];
    const methodClue   = methodMatch
        ? currentCase.clues.methodsHit[selectedMethod.name]
        : methodMissClues[selectedMethod.name];

    let story = `━━━━━━━━━━━━━━━━━━━━━━\n`;
    story += `🔎 INVESTIGACIÓN #${investigationCount}\n`;
    story += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    story += `📍 LUGAR — ${selectedLocation.emoji} ${selectedLocation.name}\n`;
    story += (locationMatch ? `✅ ` : `❌ `) + locationClue + `\n`;

    story += `\n🔬 MÉTODO — ${selectedMethod.emoji} ${selectedMethod.name}\n`;
    story += (methodMatch ? `✅ ` : `❌ `) + methodClue + `\n`;

    story += `\n🕵️ SOSPECHOSO — ${selectedSuspect.emoji} ${selectedSuspect.name}\n`;
    story += (suspectMatch ? `✅ ` : `❌ `) + suspectClue + `\n`;

    if (suspectMatch && locationMatch && methodMatch) {
        story += `\n🏆 ¡CASO RESUELTO!\n\n`;
        story += currentCase.endings.win(culprit, crimeLocation, crimeMethod);
        endGame(true, story);
        return;
    }

    if (attempts <= 0) {
        story += `\n💀 SIN INTENTOS\n\n`;
        story += currentCase.endings.lose(culprit, crimeLocation, crimeMethod);
        endGame(false, story);
        return;
    }

    if (attempts === 1) {
        story += `\n⚠️ ÚLTIMO INTENTO — Pista de emergencia:\n`;
        if (!suspectMatch)  story += `• El culpable no es ${selectedSuspect.name}.\n`;
        if (!locationMatch) story += `• El crimen no ocurrió en ${selectedLocation.name}.\n`;
        if (!methodMatch)   story += `• El método no fue "${selectedMethod.name}".\n`;
    }

    showStory(story);

    if (investigationCount >= 2) {
        if (!suspectMatch)  eliminateCard("suspect",  selectedSuspect.name);
        if (!locationMatch) eliminateCard("location", selectedLocation.name);
        if (!methodMatch)   eliminateCard("method",   selectedMethod.name);
    }
}

// =============================================
// HELPERS
// =============================================

function showStory(text) {
    const box = document.getElementById("story-box");
    box.innerText = text;
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function eliminateCard(type, value) {
    document.querySelectorAll(`.${type}`).forEach(card => {
        if (card.dataset.value === value) {
            card.classList.add("eliminated");
            card.classList.remove("selected");
        }
    });
}

function endGame(win, story) {
    gameOver = true;
    document.getElementById("investigate-btn").disabled = true;
    document.getElementById("investigate-btn").style.opacity = "0.4";
    showStory(story);
    revealSolution();

    setTimeout(() => {
        // Botón volver a casos
        let backBtn = document.createElement("button");
        backBtn.id = "back-btn";
        backBtn.className = "investigate-btn";
        backBtn.style.cssText = "margin-top:15px; background:#1a3a3a; color:#4ecdc4; margin-right:10px;";
        backBtn.innerText = "← Elegir otro caso";
        backBtn.addEventListener("click", () => {
            document.getElementById("game-screen").style.display = "none";
            showCaseSelect();
        });

        // Botón reintentar
        let btn = document.createElement("button");
        btn.id = "restart-btn";
        btn.className = "investigate-btn";
        btn.style.cssText = `margin-top:15px; background:${win ? "#2980b9" : "#c0392b"};`;
        btn.innerText = win ? "🎉 Nuevo caso" : "🔄 Reintentar";
        btn.addEventListener("click", () => {
            backBtn.remove();
            btn.remove();
            startGame(currentCase.id);
        });

        const box = document.getElementById("story-box");
        box.after(btn);
        box.after(backBtn);
    }, 300);
}

function revealSolution() {
    document.querySelectorAll(".suspect").forEach(card => {
        if (card.dataset.value === culprit.name) card.classList.add("culprit-reveal");
    });
    document.querySelectorAll(".location").forEach(card => {
        if (card.dataset.value === crimeLocation.name) card.classList.add("culprit-reveal");
    });
    document.querySelectorAll(".method").forEach(card => {
        if (card.dataset.value === crimeMethod.name) card.classList.add("culprit-reveal");
    });
}