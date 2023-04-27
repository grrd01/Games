/**
 * grrd's Games
 * Copyright (c) 2023 Gerard Tyedmers, grrd@gmx.net
 * @license MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/*
 * Todo:
 *  - Bug iOS: nach Rotate haben Icon-imgs im Layout noch die alte Grösse
 **/

(function () {
    "use strict";

    let nLang = 0;
    const lLang = [{
        cCode: "en",
        cLang: "English",
        cDesc: "Free games? Without flickering ads? Which do not spy on you? You found the right place! <br>" +
            "grrd’s Games is a collection of browser games developed by Gérard Tyedmers. The following applies to all games:",
        lFeat: [
            "Free of charge",
            "No advertising",
            "Will run on your mobile phone, computer and smart TV",
            "Are installable",
            "Work offline as well",
            "Open Source",
            "Data protection compliant: None of your data is being stored.",
            "Made in Switzerland"
        ],
        lGames: [{
            cID: "puzzle",
            cName: "grrd's Puzzle",
            cDesc: "Create a jigsaw puzzle from any of your images. Or play with a great choice of included photos.",
            lFeat: [
                "Various sizes between 6 and 40 pieces",
                "Optionally rotate pieces by clicking",
                "Different images in portrait and landscape format"
            ],
            lLocImgs: [3]
        },{
            cID: "4inarow",
            cName: "grrd's 4 in a Row",
            cDesc: "Who is the first to put 4 stones horizontally, vertically or diagonally in a line?",
            lFeat: [
                "Play against the Computer in three levels of difficulty",
                "Play locally or online against a fellow player",
                "Detailed statistics of your games"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "dice",
            cName: "grrd's Dice",
            cDesc: "Your virtual dice for whatever game you're about to play. Includes a yatzhee game.",
            lFeat: [
                "Throw 1 to 5 dice at a time",
                "Play Yahtzee with 1 to 5 players",
                "Three-dimensional dice of selectable color",
                "Shake your phone to roll the dice"
            ],
            lLocImgs: [1]
        },{
            cID: "tictactoe",
            cName: "grrd's Tic Tac Toe",
            cDesc: "Who is the first player to get three fields in a line? You can play against another player or the computer.",
            lFeat: [
                "Play against the Computer in three levels of difficulty",
                "Local game against a fellow player"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "memo",
            cName: "grrd's Memo",
            cDesc: "Flip the cards and find the pairs. Is your memory good enough to remember? You can create a personal set of cards with your own images.",
            lFeat: [
                "Choose from different image themes",
                "Create a set of cards with your own photos",
                "Variable difficulty between 6 and 48 cards",
                "For 1 to 5 players"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "reversi",
            cName: "grrd's Reversi",
            cDesc: "Capture your opponent's stones by pinching them with yours.",
            lFeat: [
                "Play against the Computer in three levels of difficulty",
                "Play locally or online against a fellow player"
            ],
            lLocImgs: [1,2,3]
        }]
    }, {
        cCode: "de",
        cLang: "Deutsch",
        cDesc: "Kostenlose Spiele? Ohne flackernde Werbung? Welche dich nicht auspionieren? Genau das gibt es hier! <br>" +
            "grrd's Games ist eine Sammlung von Browserspielen, die von Gérard Tyedmers entwickelt werden. Für alle Spiele gilt:",
        lFeat: [
            "Gratis",
            "Werbefrei",
            "Funktionieren auf Handy, Computer und Smart-TV",
            "Lassen sich installieren",
            "Funktionieren auch offline",
            "Open Source",
            "Datenschutzkonform: Es werden keine Daten von dir gespeichert.",
            "Hergestellt in der Schweiz"
        ],
        lGames: [{
            cID: "puzzle",
            cName: "grrd's Puzzle",
            cDesc: "Erzeuge ein Puzzle aus deinem Lieblingsfoto. Oder wähle ein Motiv aus einer grossen Auswahl vorgegebener Bilder.",
            lFeat: [
                "Verschiedene Grössen zwischen 6 und 40 Teilen",
                "Teile können optional durch klicken gedreht werden",
                "Verschiedene Motive im Hoch- und Querformat"
            ],
            lLocImgs: [3]
        },{
            cID: "4inarow",
            cName: "grrd's 4 in a Row",
            cDesc: "4 Gewinnt: Wer schafft es zuerst, 4 Steine horizontal, vertikal oder diagonal nebeneinander zu setzen?",
            lFeat: [
                "Computer-Gegner in drei Schwierigkeitsstufen",
                "Spiele lokal oder online gegen einen Mitspieler",
                "Detaillierte Statistiken deiner Spiele"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "dice",
            cName: "grrd's Dice",
            cDesc: "Ein virtueller Würfel für jedes Spiel, das du gerade spielen willst. Enthält ein ausgewachsenes Yatzy-Spiel. ",
            lFeat: [
                "Würfle mit 1 bis 5 Würfeln gleichzeitig",
                "Spiele Yatzy mit 1 bis 5 Mitspielern",
                "Dreidimensionale Würfel mit wählbarer Farbe",
                "Schüttle dein Handy zum Würfeln"
            ],
            lLocImgs: [1]
        },{
            cID: "tictactoe",
            cName: "grrd's Tic Tac Toe",
            cDesc: "Der Spiele-Klassiker aus 4 Linien, Kreuzen und Kreisen: Wer besetzt zuerst drei Felder in einer Reihe?",
            lFeat: [
                "Computer-Gegner in drei Schwierigkeitsstufen",
                "lokales Spiel gegen einen Mitspieler"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "memo",
            cName: "grrd's Memo",
            cDesc: "Drehe die Kärtchen um und finde die Paare. Ist dein Gedächtnis gut genug?",
            lFeat: [
                "Wähle aus verschiedenen Motiven",
                "Erzeuge ein Kartenset mit deinen eigenen Fotos",
                "Variable Schwierigkeit zwischen 6 und 48 Kärtchen",
                "Für 1 bis 5 Spieler"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "reversi",
            cName: "grrd's Reversi",
            cDesc: "Klemme die Steine deines Gegners ein und erobere so dein Gebiet auf dem Spielfeld.",
            lFeat: [
                "Computer-Gegner in drei Schwierigkeitsstufen",
                "Spiele lokal oder online gegen einen Mitspieler"
            ],
            lLocImgs: [1,2,3]
        }]
    }, {
        cCode : "fr",
        cLang: "Français",
        cDesc: "Des jeux gratuits? Sans publicité clignotante? Qui ne t'espionnent pas? Tu es au bon endroit! <br>" +
            "grrd's Games est une collection de jeux par navigateur développés par Gérard Tyedmers. Tous les jeux sont",
        lFeat: [
            "Gratuit",
            "Sans publicité",
            "Fonctionne sur téléphone portable, ordinateur et Smart TV",
            "Peuvent être installés",
            "Fonctionnent aussi hors ligne",
            "Open Source",
            "Conforme à la protection des données : aucune donnée te concernant n'est enregistrée",
            "Fabriqué en Suisse"
        ],
        lGames: [{
            cID: "puzzle",
            cName: "grrd’s Puzzle",
            cDesc: "Crée un puzzle à partir de ta photo préférée. Ou choisis un motif parmi une grande sélection d'images prédéfinies.",
            lFeat: [
                "Différentes difficultés entre 6 et 40 pièces",
                "En option, les pièces peuvent être tournées en cliquant dessus",
                "Différents motifs en format portrait ou paysage"
            ],
            lLocImgs: [3]
        },{
            cID: "4inarow",
            cName: "grrd's 4 in a Row",
            cDesc: "4 gagne: Qui parvient le premier à placer 4 pions côte à côte horizontalement, verticalement ou en diagonale ?",
            lFeat: [
                "Trois niveaux de difficulté différents",
                "Joue en local ou en ligne contre un autre joueur",
                "Statistiques détaillées de tes parties"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "dice",
            cName: "grrd's Dice",
            cDesc: "Un dé virtuel pour chaque jeu auquel tu veux jouer. Contient un jeu Yatzy complet. ",
            lFeat: [
                "Lance 1 à 5 dés à la fois",
                "Joue à Yatzy avec 1 à 5 autres joueurs",
                "Dés tridimensionnels avec couleur au choix",
                "Secoue ton téléphone portable pour lancer les dés"
            ],
            lLocImgs: [1]
        },{
            cID: "tictactoe",
            cName: "grrd's Tic Tac Toe",
            cDesc: "Le jeu classique composé de 4 lignes, de croix et de cercles : Qui occupera le premier trois champs dans une ligne ?",
            lFeat: [
                "Trois niveaux de difficulté différents",
                "Joue en local contre un autre joueur"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "memo",
            cName: "grrd's Memo",
            cDesc: "Tourne les cartes et trouve les paires. Ta mémoire est-elle assez bonne?",
            lFeat: [
                "Choisis parmi différents motifs",
                "Crée des cartes avec tes propres photos",
                "Difficulté variable entre 6 et 48 cartes",
                "Pour 1 à 5 joueurs"
            ],
            lLocImgs: [1,2,3]
        },{
            cID: "reversi",
            cName: "grrd's Reversi",
            cDesc: "Coince les pions de ton adversaire pour conquérir ton territoire sur le tableau.",
            lFeat: [
                "Trois niveaux de difficulté différents",
                "Joue en local ou en ligne contre un autre joueur"
            ],
            lLocImgs: [1,2,3]
        }]
    }];

    let oCard;
    let oListItem;
    let lOrientation = ["portrait", "landscape"];
    let nOrientationIndex;
    let nIndex;
    let cImgLang;
    let bTouchMove = false;
    let nTouchStartX;
    let nTouchStartY;
    let nTouchEndX;
    let nTouchEndY;

    /**
     * URL-Parameter zurückgeben
     * @param {string} cKey - Schlüssel des URL-Parameters
     * @return {string} Gibt den Wert des angefragten URL-Parameters zurück
     */
    function fUrlParam(cKey) {
        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has(cKey)) {
            return searchParams.get(cKey);
        } else {
            return false;
        }
    }

    /**
     * Popup einblenden
     * @param {element} ePopup - Popup, welches angezeigt werden soll
     * @param {event} event - event, welcher das Popup öffnete. Enthält informationen über das gewünschte Bild
     */
    function fShowPopup(ePopup, event) {
        const oSelectedImg = event.target.parentElement.parentElement.getElementsByClassName("screenshotImg")[0];
        const nImgIndex = parseInt(oSelectedImg.getAttribute("data-index"));
        const lAllImgs = event.target.parentElement.parentElement.parentElement.querySelectorAll(".screenshotImg");
        document.querySelector(".popupImg[data-index='1']").src = lAllImgs[nImgIndex - 2 < 0 ? 2 : nImgIndex - 2].src;
        document.querySelector(".popupImg[data-index='2']").src = lAllImgs[nImgIndex - 1].src;
        document.querySelector(".popupImg[data-index='3']").src = lAllImgs[nImgIndex > 2 ? 0 : nImgIndex].src;
        //$("iTitleFieldset").disabled = true;
        // Fix for Firefox OnKeydown
        //document.activeElement.blur();
        ePopup.classList.remove("popup-init");
        ePopup.classList.remove("popup-hide");
        ePopup.classList.add("popup-show");
    }

    /**
     * Popup ausblenden
     * @param {element} ePopup - Popup, welches ausgeblendet werden soll
     */
    function fHidePopup(ePopup) {
        //$("iTitleFieldset").disabled = false;
        ePopup.classList.remove("popup-show");
        ePopup.classList.add("popup-hide");
    }

    /**
     * nächstes/voriges Bild im Screenshot-Popup anzeigen
     */
    function fChangePopupImg (nIncrement) {
        document.querySelectorAll(".popupImg").forEach(function (oImg) {
            let nNewIndex = parseInt(oImg.getAttribute("data-index")) + nIncrement;
            nNewIndex = nNewIndex > 3 ? 1 : nNewIndex;
            nNewIndex = nNewIndex < 1 ? 3 : nNewIndex;
            oImg.setAttribute("data-index", nNewIndex);
        })
    }
    /**
     * Swipe auf Popup-Imgs erkennen
     */
    function fHandleGesture() {
        if (nTouchStartX - nTouchEndX > 50) {
            // Swipe left
            fChangePopupImg(-1);
        }
        if (nTouchStartX - nTouchEndX < -50) {
            // Swipe right
            fChangePopupImg(1);
        }
        // if (nTouchEndY < nTouchStartY) {
        //     console.log('Swiped Up');
        // }
        // if (nTouchEndY > nTouchStartY) {
        //     console.log('Swiped Down');
        // }
        // if (nTouchEndY === nTouchStartY) {
        //     console.log('Tap');
        // }
    }

    /**
     * Texte und Bilder in der ausgewählten Sprache anzeigen
     */
    function fSetLang() {
        document.getElementById("selLang").innerHTML = lLang[nLang].cLang;
        document.getElementById("content").getElementsByTagName("p")[0].innerHTML = lLang[nLang].cDesc;
        document.getElementById("content").getElementsByTagName("ul")[0].replaceChildren();
        lLang[nLang].lFeat.forEach(function (oFeat) {
            oListItem = document.createElement("li");
            oListItem.innerHTML = oFeat;
            document.getElementById("content").getElementsByTagName("ul")[0].appendChild(oListItem);
        })
        lLang[nLang].lGames.forEach(function (oGame, nCardIndex) {
            oCard = document.getElementsByClassName("card")[nCardIndex];
            oCard.getElementsByTagName("img")[0].src = "images/" + oGame.cID + "/icon.svg";
            oCard.getElementsByTagName("img")[0].alt = oGame.cName;
            oCard.getElementsByTagName("h2")[0].innerHTML = oGame.cName;
            oCard.getElementsByTagName("p")[0].innerHTML = oGame.cDesc;
            oCard.getElementsByTagName("a")[0].href = "https://" + oGame.cID + ".grrd.ch";
            oCard.getElementsByTagName("button")[0].setAttribute("onclick", "window.open('https://" + oGame.cID + ".grrd.ch', '_blank')");

            //oCard.getElementsByTagName("a")[1].href = "https://" + oGame.cID + ".grrd.ch";
            oCard.getElementsByTagName("ul")[0].replaceChildren();
            oGame.lFeat.forEach(function (oFeat) {
                oListItem = document.createElement("li");
                oListItem.innerHTML = oFeat;
                oCard.getElementsByTagName("ul")[0].appendChild(oListItem);
            })
            for (nIndex=1;nIndex < 4; nIndex += 1) {
                if (oGame.lLocImgs.includes(nIndex) && lLang[nLang].cCode !== "en") {
                    cImgLang = lLang[nLang].cCode;
                } else {
                    cImgLang = "";
                }
                oCard.getElementsByClassName("screenshotImg")[nIndex - 1].src = "images/" + oGame.cID + "/" + lOrientation[nOrientationIndex] + nIndex + cImgLang + ".png";
                oCard.getElementsByClassName("screenshotImg")[nIndex - 1].alt = oGame.cName;
                oCard.getElementsByClassName("screenshotImg")[nIndex - 1].setAttribute("data-index", nIndex);
                oCard.getElementsByClassName("screenshotHover")[nIndex - 1].addEventListener("click", function (event) {
                    fShowPopup(document.getElementById("popup"), event);
                });
                oCard.getElementsByClassName("screenshotHover")[nIndex - 1].addEventListener("touchstart", function () {
                    bTouchMove = false;
                });
                oCard.getElementsByClassName("screenshotHover")[nIndex - 1].addEventListener("touchmove", function () {
                    bTouchMove = true;
                });
                oCard.getElementsByClassName("screenshotHover")[nIndex - 1].addEventListener("touchend", function (event) {
                    if (!bTouchMove) {
                        event.stopPropagation();
                        event.preventDefault();
                        fShowPopup(document.getElementById("popup"), event);
                    }
                });
            }
        })
    }

    /**
     * Elemente nach Screen-Grösse positionieren
     */
    function fSetLayout() {
        const widthOutput = window.innerWidth;
        // Screenshots
        if (window.matchMedia("(orientation: portrait)").matches) {
            // Portrait
            nOrientationIndex = 0;
        } else {
            // Landscape
            nOrientationIndex = 1;
        }
        // Content
        if (widthOutput < 600) {
            document.querySelectorAll(".card").forEach(function (oCard) {
                oCard.querySelector(".content.portrait").append(...oCard.querySelector(".content.landscape").childNodes);
            })
        } else {
            document.querySelectorAll(".card").forEach(function (oCard) {
                oCard.querySelector(".content.landscape").append(...oCard.querySelector(".content.portrait").childNodes);
            })
        }

        // Screenshots
        if (widthOutput < 1000) {
            document.querySelectorAll(".card").forEach(function (oCard) {
                oCard.querySelector(".cardScreenshots.portrait").append(...oCard.querySelector(".cardScreenshots.landscape").childNodes);
            })
        } else {
            document.querySelectorAll(".card").forEach(function (oCard) {
                oCard.querySelector(".cardScreenshots.landscape").append(...oCard.querySelector(".cardScreenshots.portrait").childNodes);
            })
        }
        document.querySelectorAll(".screenshotImg").forEach(function(img) {
            img.src = img.src.replace(lOrientation[1 - nOrientationIndex], lOrientation[nOrientationIndex])
        });
    }

    /**
     * Animation für Elemente, welche in den sichbaren Bereich gescrollt werden
     */
    function fReveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 80;
        document.querySelectorAll(".reveal").forEach(function(reveal) {
            let elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            } else {
                reveal.classList.remove("active");
            }
        });
    }

    /**
     * Seite initialisieren
     */
    function finit () {
        const cLang = (fUrlParam("lang") || navigator.language || navigator.browserLanguage || (navigator.languages || ["en"])[0]).substring(0, 2).toLowerCase();
        if (cLang === "de") {
            nLang = 1;
        } else if (cLang === "fr") {
            nLang = 2;
        }

        window.onresize = fSetLayout;
        fSetLayout();

        lLang.forEach(function (oLang,nIndex) {
            const oOpt = document.getElementsByClassName("option")[0].cloneNode(true);
            oOpt.getElementsByClassName("optLong")[0].innerHTML = oLang.cLang;
            oOpt.getElementsByClassName("optShort")[0].innerHTML = oLang.cCode.toUpperCase();
            oOpt.addEventListener("click", function () {
                document.querySelectorAll(".mini-selectlist").forEach(function(option) {
                    option.classList.add("closed");
                });
                nLang = nIndex;
                fSetLang();
            });
            oOpt.addEventListener("focusout", (event) => {
                if (!event.relatedTarget || !event.relatedTarget.classList.contains("option")) {
                    document.querySelectorAll(".mini-selectlist").forEach(function(option) {
                        option.classList.add("closed");
                    });
                }
            });
            document.getElementsByClassName("mini-selectlist")[0].appendChild(oOpt);
        })

        lLang[nLang].lGames.forEach(function () {
            oCard = document.getElementsByClassName("card")[0].cloneNode(true);
            document.getElementById("content").appendChild(oCard);
        })
        document.querySelectorAll(".screenshotStack.reveal").forEach(function(reveal, nIndex) {
            reveal.style.transitionDelay = ((nIndex % 4) / 10).toString() + "s";
        });
        window.addEventListener("scroll", fReveal);
        fReveal();


        fSetLang();
        document.getElementById("bLang").addEventListener("click", function () {
            document.querySelectorAll(".mini-selectlist").forEach(function(option) {
                option.classList.toggle("closed");
            });
        });
        document.getElementById("bLang").addEventListener("focusout", (event) => {
            if (!event.relatedTarget || !event.relatedTarget.classList.contains("option")) {
                document.querySelectorAll(".mini-selectlist").forEach(function(option) {
                    option.classList.add("closed");
                });
            }
        });

        document.getElementById("popupClose").addEventListener("click", function () {
            fHidePopup(document.getElementById("popup"));
        });
        document.querySelectorAll(".popupImg").forEach(function(popupImg) {
            popupImg.addEventListener("click", function () {
                fHidePopup(document.getElementById("popup"));
            });
            popupImg.addEventListener('touchstart', function (event) {
                nTouchStartX = event.changedTouches[0].screenX;
                nTouchStartY = event.changedTouches[0].screenY;
            }, false);

            popupImg.addEventListener('touchend', function (event) {
                nTouchEndX = event.changedTouches[0].screenX;
                nTouchEndY = event.changedTouches[0].screenY;
                fHandleGesture();
            }, false);
        });

        document.getElementById("popupPrev").addEventListener("click", function (){
            fChangePopupImg(1);
        });
        document.getElementById("popupNext").addEventListener("click", function () {
            fChangePopupImg(-1);
        });
        document.getElementById("popup").addEventListener("touchmove", function (event) {
            event.stopPropagation();
            event.preventDefault();
        });
    }

    finit();

}());

