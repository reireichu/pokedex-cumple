// ===============================
// POKÉDEX SYSTEM
// ===============================


// NOMBRE DEL ENTRENADOR

const trainerName = "GUILLEM";

document.getElementById("trainer-name").textContent = trainerName;


// ===============================
// CAMBIO DE PANTALLAS
// ===============================

function showScreen(screenId) {

    // Ocultar todas las pantallas

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });


    // Mostrar la pantalla indicada

    document.getElementById(screenId).classList.add("active");
}


// ===============================
// INICIO DEL SISTEMA
// ===============================

const diagnostics = [
    {
        element: "diag-memory",
        delay: 500
    },
    {
        element: "diag-database",
        delay: 1200
    },
    {
        element: "diag-region",
        delay: 1900
    },
    {
        element: "diag-trainer",
        delay: 2600
    }
];

diagnostics.forEach((diagnostic) => {
    setTimeout(() => {
        document.getElementById(diagnostic.element).classList.add("completed");
        document.getElementById(diagnostic.element).textContent += " OK";
    }, diagnostic.delay);
});


let progress = 0;

const loadingInterval = setInterval(() => {
    progress += 5;

    document.getElementById("loading-progress").style.width = progress + "%";
    document.getElementById("loading-percent").textContent = progress + "%";

    if (progress >= 100) {
        clearInterval(loadingInterval);

        setTimeout(() => {
            document.getElementById("boot-message").textContent = "SYSTEM ONLINE";
        
            setTimeout(() => {
                showScreen("connection-screen");
        
                startTrainerScan();
        
            }, 1200);
        
        }, 300);
    }
}, 150);
250;
function startTrainerScan() {

    const scanMessage = document.getElementById("scan-message");
    const trainerData = document.getElementById("trainer-data");

    setTimeout(() => {
        scanMessage.textContent = "ANALYZING TRAINER DATA...";
    }, 1200);

    setTimeout(() => {
        scanMessage.textContent = "IDENTITY FOUND";
    }, 2400);

    setTimeout(() => {
        scanMessage.textContent = "IDENTITY CONFIRMED";
    }, 3400);

    setTimeout(() => {
        trainerData.classList.add("visible");
    }, 4200);

    setTimeout(() => {
        trainerData.classList.add("visible");
    }, 4200);
}

// ===============================
// ABRIR MISIÓN
// ===============================

document.getElementById("mission-button").addEventListener("click", () => {

    showScreen("final-search-screen");

});
document.getElementById("final-search-button").addEventListener("click", () => {

    showScreen("final-location-screen");

});
document.getElementById("final-found-button").addEventListener("click", () => {

    showScreen("birthday-screen");

    playBirthdaySong();

});
document.getElementById("birthday-home-button").addEventListener("click", () => {

    showScreen("home-screen");

});

// ===============================
// INICIAR CONEXIÓN
// ===============================

document.getElementById("start-button").addEventListener("click", () => {
    prepareAudio();

    showScreen("home-screen");

    setTimeout(() => {
        unlockMission();
    }, 10000);
});


// ===============================
// SEÑAL ENCONTRADA
// ===============================

// ===============================
// SEÑAL ENCONTRADA
// ===============================

document.getElementById("signal-button").addEventListener("click", () => {

    const button = document.getElementById("analyze-button");
    const status = document.querySelector(".pokemon-status");
    const dataProgress = document.getElementById("pokemon-data-progress");

    // Reiniciar la pantalla de análisis
    button.disabled = false;
    button.textContent = "ANALIZAR SEÑAL";

    status.textContent = "ANALYZING SPECIES...";
    dataProgress.textContent = "░░░░░░░░░░";

    showScreen("pokemon-screen");
});


document.getElementById("analyze-button").addEventListener("click", () => {

    const button = document.getElementById("analyze-button");
    const status = document.querySelector(".pokemon-status");
    const dataProgress = document.getElementById("pokemon-data-progress");

    button.disabled = true;
    button.textContent = "ANALYZING...";

    const progressStages = [
        "░░░░░░░░░░",
        "██░░░░░░░░",
        "████░░░░░░",
        "██████░░░░",
        "████████░░",
        "██████████"
    ];

    progressStages.forEach((stage, index) => {
        setTimeout(() => {
            dataProgress.textContent = stage;
        }, index * 500);
    });

    setTimeout(() => {
        status.textContent = "ANALYSIS COMPLETE";
    }, 3000);

    setTimeout(() => {
        showScreen("data-screen");
    }, 4000);

    setTimeout(() => {

        const clue = document.getElementById("location-clue-text");
    
        if (currentMission === 1) {
    
            clue.textContent =
                "Territorio donde los entrenadores pierden toda motivación para levantarse. Hay un respaldo, varios cojines y una sospechosa tendencia a quedarse allí mucho más tiempo del previsto. Busca en la zona de descanso favorita de la base";
    
        }
    
        else if (currentMission === 2) {
    
            clue.textContent =
                "Un territorio donde los entrenadores acuden para comprobar que todo sigue en su sitio. Tiene la extraña capacidad de mostrarte lo que tienes delante, pero esconde todo lo que queda a su espalda. Si quieres descubrir sus secretos, tendrás que dejar de mirar al frente y buscar justo donde nunca miras.";
    
        }
    
        else if (currentMission === 3) {
    
            clue.textContent =
                "Un territorio donde se acumulan objetos que dejaron de tener sitio en la base, pero que nadie se ha atrevido a despedir definitivamente. Entre cajas y trastos olvidados, el tiempo parece haberse detenido y cada rincón guarda las consecuencias de un «esto mejor lo guardamos por si acaso». Busca el lugar donde van a parar las cosas cuando la base ya no sabe qué hacer con ellas.";
    
        }
    
    }, 4100);
});
document.getElementById("location-button").addEventListener("click", () => {

    const clue = document.getElementById("location-clue-text");
    const activeLocation = document.getElementById("active-location-text");

    activeLocation.textContent = clue.textContent;

    showScreen("active-mission-screen");

});
document.getElementById("found-item-button").addEventListener("click", () => {

    if (currentMission === 1) {

        document.getElementById("pokemon-number").textContent =
            "NO. 001";

        document.getElementById("pokemon-name").textContent =
            "ABACOON";

        document.getElementById("pokemon-category").textContent =
            "POKÉMON CUENTAALADO";

        document.getElementById("pokemon-type").innerHTML = `
            <span>VOLADOR</span>
            <span>ACERO</span>
        `;

        document.getElementById("pokemon-height").textContent =
            "0.4 m";

        document.getElementById("pokemon-weight").textContent =
            "5.8 kg";

        document.getElementById("pokemon-ability").textContent =
            "CUENTA PRECISA";

        document.getElementById("pokemon-description").textContent =
            "Sus cuentas recorren los hilos que unen sus extremidades mientras planea. Puede liberar uno de los extremos y lanzar las cuentas a gran velocidad.";

        document.getElementById("pokemon-attack").textContent =
            "ATAQUE CARACTERÍSTICO: CUENTA BALA";

    }

    else if (currentMission === 2) {

        document.getElementById("pokemon-number").textContent =
            "NO. 002";

        document.getElementById("pokemon-name").textContent =
            "BASSKAR";

        document.getElementById("pokemon-category").textContent =
            "POKÉMON BASS";

        document.getElementById("pokemon-type").innerHTML = `
            <span>SINIESTRO</span>
            <span>ELÉCTRICO</span>
        `;

        document.getElementById("pokemon-height").textContent =
            "1.1 m";

        document.getElementById("pokemon-weight").textContent =
            "42.0 kg";

        document.getElementById("pokemon-ability").textContent =
            "GRAVE IMPACTO";

        document.getElementById("pokemon-description").textContent =
            "Su bolsa abdominal puede estirarse y actuar como una cámara de resonancia. Amplifica las frecuencias graves que emiten los altavoces de sus hombros, creando ondas sonoras capaces de golpear y desorientar al oponente.";

        document.getElementById("pokemon-attack").textContent =
            "ATAQUE CARACTERÍSTICO: BASS DROP";

    }
    else if (currentMission === 3) {

        document.getElementById("pokemon-number").textContent =
            "NO. 003";
    
        document.getElementById("pokemon-name").textContent =
            "PENGRIND";
    
        document.getElementById("pokemon-category").textContent =
            "POKÉMON DESLIZANTE";
    
        document.getElementById("pokemon-type").innerHTML = `
            <span>HIELO</span>
            <span>ROCA</span>
        `;
    
        document.getElementById("pokemon-height").textContent =
            "0.8 m";
    
        document.getElementById("pokemon-weight").textContent =
            "18.5 kg";
    
        document.getElementById("pokemon-ability").textContent =
            "TERRENO MOLDEABLE";
    
        document.getElementById("pokemon-description").textContent =
            "Pengrind utiliza su habilidad para convertir cualquier superficie en una pista de skate. Puede deslizarse sobre tierra, roca, arena, hielo o asfalto creando una tabla adaptada a cada terreno. Nunca se desplaza dos veces exactamente de la misma manera.";
    
        document.getElementById("pokemon-attack").textContent =
            "ATAQUE CARACTERÍSTICO: CIRCUITO ELEMENTAL";
    
    }

    showScreen("item-screen");

});
document.getElementById("register-item-button").addEventListener("click", () => {

    document.getElementById("pokedex-empty").style.display = "none";
    document.getElementById("pokedex-viewer").style.display = "flex";

    if (!registeredPokemon.includes(currentMission)) {
        registeredPokemon.push(currentMission);
    }

    if (currentMission === 1) {

        document.getElementById("registered-number").textContent =
            "#001";

        document.getElementById("registered-species").textContent =
            "ABACOON";

        document.getElementById("registered-completion").textContent =
            "████░░░░░░ 40%";
    }

    else if (currentMission === 2) {

        document.getElementById("registered-number").textContent =
            "#002";

        document.getElementById("registered-species").textContent =
            "BASSKAR";

        document.getElementById("registered-completion").textContent =
            "████████░░ 80%";
    }

    else if (currentMission === 3) {

        document.getElementById("registered-number").textContent =
            "#003";

        document.getElementById("registered-species").textContent =
            "PENGRIND";

        document.getElementById("registered-completion").textContent =
            "██████████ 100%";
    }

    showScreen("registered-screen");

});
document.getElementById("next-mission-button").addEventListener("click", () => {

    document.getElementById("complete-mission-number").textContent =
        "MISSION " + String(currentMission).padStart(3, "0");

    showScreen("complete-screen");

});
function showFinalAlert() {

    showScreen("alert-screen");

    document.querySelector(".connection-loading").style.display = "none";
    document.getElementById("trainer-mode").style.display = "block";

    playAnomalySound();
}

document.getElementById("complete-mission-button").addEventListener("click", () => {

    missionAvailable = false;

    document.getElementById("mission-count").textContent = "0";

    if (currentMission === 1) {

        currentMission = 2;

        showScreen("home-screen");

        setTimeout(() => {
            unlockMission();
        }, 10000);

    }

    else if (currentMission === 2) {

        currentMission = 3;

        showScreen("home-screen");

        setTimeout(() => {
            unlockMission();
        }, 10000);

    }

    else if (currentMission === 3) {

        showScreen("home-screen");

        setTimeout(() => {
            showFinalAlert();
        }, 10000);

    }

});
let missionAvailable = false;
let currentMission = 1;
let registeredPokemon = [];

function playMissionSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const notes = [
        { frequency: 523.25, time: 0 },
        { frequency: 659.25, time: 0.08 },
        { frequency: 783.99, time: 0.16 }
    ];

    notes.forEach(note => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "square";
        oscillator.frequency.value = note.frequency;

        gain.gain.setValueAtTime(0.0001, audioContext.currentTime + note.time);
        gain.gain.exponentialRampToValueAtTime(
            0.12,
            audioContext.currentTime + note.time + 0.01
        );
        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + note.time + 0.12
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(audioContext.currentTime + note.time);
        oscillator.stop(audioContext.currentTime + note.time + 0.13);
    });
}

let audioContext;

function prepareAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}

function playMissionSound() {
    if (!audioContext) {
        prepareAudio();
    }

    const notes = [
        { frequency: 523.25, time: 0 },
        { frequency: 659.25, time: 0.08 },
        { frequency: 783.99, time: 0.16 }
    ];

    notes.forEach(note => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "square";
        oscillator.frequency.value = note.frequency;

        gain.gain.setValueAtTime(0.0001, audioContext.currentTime + note.time);
        gain.gain.exponentialRampToValueAtTime(
            0.12,
            audioContext.currentTime + note.time + 0.01
        );
        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + note.time + 0.12
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(audioContext.currentTime + note.time);
        oscillator.stop(audioContext.currentTime + note.time + 0.13);
    });
}

function unlockMission() {

    missionAvailable = true;

    const missionCount = document.getElementById("mission-count");
    const notification = document.getElementById("mission-notification");

    missionCount.textContent = "1";

    if (currentMission === 1) {

        document.getElementById("mission-entry-number").textContent =
            "MISSION 001";

        document.getElementById("mission-entry-name").textContent =
            "UNKNOWN SIGNAL";

        document.getElementById("mission-entry-status").textContent =
            "NEW";

    }

    else if (currentMission === 2) {

        document.getElementById("mission-entry-number").textContent =
            "MISSION 002";

        document.getElementById("mission-entry-name").textContent =
            "LOST TRANSMISSION";

        document.getElementById("mission-entry-status").textContent =
            "NEW";

    }

    else if (currentMission === 3) {

        document.getElementById("mission-entry-number").textContent =
            "MISSION 003";

        document.getElementById("mission-entry-name").textContent =
            "SURFACE SHIFT";

        document.getElementById("mission-entry-status").textContent =
            "NEW";
    }

    playMissionSound();

    notification.classList.add("visible");

    setTimeout(() => {
        notification.classList.remove("visible");
    }, 5000);
}
document.getElementById("missions-button").addEventListener("click", () => {

    if (!missionAvailable) {
        return;
    }

    showScreen("mission-list-screen");

});
document.getElementById("mission-back-button").addEventListener("click", () => {
    showScreen("home-screen");
});
document.getElementById("mission-001-button").addEventListener("click", () => {

    if (currentMission === 1) {

        document.getElementById("mission-number").textContent =
            "MISSION 001";

        document.getElementById("mission-title").textContent =
            "THE UNKNOWN POKÉMON";

        document.getElementById("mission-description").textContent =
            "El Profesor ha detectado una especie que no figura en los registros de la Pokédex. La criatura ha desaparecido antes de poder ser identificada.";

        document.getElementById("mission-location").textContent =
            "OBJETIVO: ENCUENTRA LA ZONA Y LOCALIZA AL POKÉMON.";


    } else if (currentMission === 2) {

        document.getElementById("mission-number").textContent =
            "MISSION 002";

        document.getElementById("mission-title").textContent =
            "LOST TRANSMISSION";

        document.getElementById("mission-description").textContent =
            "Una transmisión Pokémon ha sido interceptada por el sistema. El mensaje está fragmentado y no ha podido determinarse quién lo envió.";

        document.getElementById("mission-location").textContent =
            "OBJETIVO: ENCUENTRA LA ZONA Y LOCALIZA AL POKÉMON.";

    }
    else if (currentMission === 3) {

        document.getElementById("mission-number").textContent =
            "MISSION 003";
    
        document.getElementById("mission-title").textContent =
            "THE UNKNOWN RUN";
    
        document.getElementById("mission-description").textContent =
            "El sistema ha registrado un recorrido imposible sobre el terreno. Las marcas cambian de forma y material a cada tramo, como si alguien hubiera construido una pista mientras avanzaba.";
    
        document.getElementById("mission-location").textContent =
            "OBJETIVO: SIGUE EL RECORRIDO Y DESCUBRE QUIÉN LO HA CREADO.";
        
    }

    showScreen("mission-screen");
});
document.getElementById("pokedex-button").addEventListener("click", () => {

    currentPokedexIndex = 0;

    updatePokedex();

    showScreen("pokedex-menu-screen");

});

document.getElementById("trainer-button").addEventListener("click", () => {
    showScreen("trainer-data-screen");
});

document.getElementById("pokedex-back-button").addEventListener("click", () => {
    showScreen("home-screen");
});
// ===============================
// POKÉDEX VIEWER
// ===============================

let currentPokedexIndex = 0;

const pokedexData = {

    1: {
        number: "#001",
        name: "ABACOON",
        category: "POKÉMON CUENTAALADO",
        types: ["VOLADOR", "ACERO"],
        height: "0.4 m",
        weight: "5.8 kg",
        ability: "CUENTA PRECISA",
        description:
            "Sus cuentas recorren los hilos de sus extremidades mientras planea. Puede liberar uno de los extremos y utilizarlos como proyectiles.",
        attack:
            "ATAQUE: CUENTA BALA"
    },

    2: {
        number: "#002",
        name: "BASSKAR",
        category: "POKÉMON BASS",
        types: ["SINIESTRO", "ELÉCTRICO"],
        height: "1.1 m",
        weight: "42.0 kg",
        ability: "GRAVE IMPACTO",
        description:
            "Su bolsa abdominal puede estirarse y actuar como una cámara de resonancia. Amplifica las frecuencias graves de sus altavoces para producir ondas sonoras de gran potencia.",
        attack:
            "ATAQUE: BASS DROP"
    },

    3: {
        number: "#003",
        name: "PENGRIND",
        category: "POKÉMON DESLIZANTE",
        types: ["HIELO", "ROCA"],
        height: "0.8 m",
        weight: "18.5 kg",
        ability: "TERRENO MOLDEABLE",
        description:
            "Puede alterar y compactar la superficie bajo sus pies para crear una tabla de skate adaptada al terreno. Nunca se desplaza dos veces exactamente de la misma manera.",
        attack:
            "ATAQUE: CIRCUITO ELEMENTAL"
    }

};


function updatePokedex() {

    if (registeredPokemon.length === 0) {
        document.getElementById("pokedex-empty").style.display = "block";
        document.getElementById("pokedex-viewer").style.display = "none";
        document.getElementById("pokedex-position").style.display = "none";
        return;
    }

    document.getElementById("pokedex-empty").style.display = "none";
    document.getElementById("pokedex-viewer").style.display = "flex";
    document.getElementById("pokedex-position").style.display = "flex";

    const pokemonId = registeredPokemon[currentPokedexIndex];
    const pokemon = pokedexData[pokemonId];

    document.getElementById("pokedex-number").textContent =
        pokemon.number;

    document.getElementById("pokedex-name").textContent =
        pokemon.name;

    document.getElementById("pokedex-category").textContent =
        pokemon.category;

    document.getElementById("pokedex-types").innerHTML = "";

    pokemon.types.forEach(type => {

        const typeElement = document.createElement("span");

        typeElement.textContent = type;

        document.getElementById("pokedex-types")
            .appendChild(typeElement);

    });

    document.getElementById("pokedex-height").textContent =
        pokemon.height;

    document.getElementById("pokedex-weight").textContent =
        pokemon.weight;

    document.getElementById("pokedex-ability").textContent =
        pokemon.ability;

    document.getElementById("pokedex-description").textContent =
        pokemon.description;

    document.getElementById("pokedex-attack").textContent =
        pokemon.attack;

    document.getElementById("pokedex-current").textContent =
        currentPokedexIndex + 1;

    document.getElementById("pokedex-total").textContent =
        registeredPokemon.length;

    document.getElementById("pokedex-prev").disabled =
        currentPokedexIndex === 0;

    document.getElementById("pokedex-next").disabled =
        currentPokedexIndex === registeredPokemon.length - 1;
}
document.getElementById("pokedex-prev").addEventListener("click", () => {

    if (currentPokedexIndex <= 0) {
        return;
    }

    currentPokedexIndex--;

    const entry = document.getElementById("pokedex-entry-view");

    entry.classList.remove("pokedex-slide-right");
    void entry.offsetWidth;
    entry.classList.add("pokedex-slide-right");

    updatePokedex();
});


document.getElementById("pokedex-next").addEventListener("click", () => {

    if (currentPokedexIndex >= registeredPokemon.length - 1) {
        return;
    }

    currentPokedexIndex++;

    const entry = document.getElementById("pokedex-entry-view");

    entry.classList.remove("pokedex-slide-left");
    void entry.offsetWidth;
    entry.classList.add("pokedex-slide-left");

    updatePokedex();
});
document.getElementById("trainer-data-back-button").addEventListener("click", () => {
    showScreen("home-screen");
});
function playAnomalySound() {

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const now = audioContext.currentTime;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "square";

    oscillator.frequency.setValueAtTime(440, now);
    oscillator.frequency.setValueAtTime(660, now + 0.15);
    oscillator.frequency.setValueAtTime(440, now + 0.30);
    oscillator.frequency.setValueAtTime(880, now + 0.45);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.8);
}
function playBirthdaySong() {

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const notes = [
        ["G4", 0.00],
        ["G4", 0.25],
        ["A4", 0.50],
        ["G4", 0.75],
        ["C5", 1.00],
        ["B4", 1.25],

        ["G4", 1.65],
        ["G4", 1.90],
        ["A4", 2.15],
        ["G4", 2.40],
        ["D5", 2.65],
        ["C5", 2.90],

        ["G4", 3.30],
        ["G4", 3.55],
        ["G5", 3.80],
        ["E5", 4.05],
        ["C5", 4.30],
        ["B4", 4.55],
        ["A4", 4.80],

        ["F5", 5.20],
        ["F5", 5.45],
        ["E5", 5.70],
        ["C5", 5.95],
        ["D5", 6.20],
        ["C5", 6.45]
    ];

    const frequencies = {
        "G4": 392.00,
        "A4": 440.00,
        "B4": 493.88,
        "C5": 523.25,
        "D5": 587.33,
        "E5": 659.25,
        "F5": 698.46,
        "G5": 783.99
    };

    notes.forEach(([note, time]) => {

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "square";
        oscillator.frequency.value = frequencies[note];

        const start = audioContext.currentTime + time;

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.08, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.20);

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(start);
        oscillator.stop(start + 0.22);

    });
}