// faut copier/coller ça dans la console de google chrome ( CTRL + SHIFT + J )

function hexEncode(x){

    var hex, i;

    var result = "";
    for (i=0; i<x.length; i++) {
        hex = x.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

function hexDecode(x){
    var j;
    var hexes = x.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}

app = document.querySelector("#app-mount > div.app-19_DXt.platform-web > div > div.layers-3iHuyZ.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.spacer-1fA9zc > div > div > div.flex-1xMQg5.flex-1O1GKY.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.base-3dtUhz > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.spacer-29U_x8.firefoxFixScrollFlex-cnI2ix > div.chat-3bRxxu.firefoxFixScrollFlex-cnI2ix > div.content-yTz4x3.firefoxFixScrollFlex-cnI2ix > div.spacer-1fA9zc.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr > div > div > div").querySelectorAll(".containerCozyBounded-1rKFAn")

tab = []

for ( x of app ){

	y = hexEncode(x.innerText)

	tab.push(y)

}

// on remplit le tableau des tout premiers résultats ( dans le bon ordre )

document.querySelector("#app-mount > div.app-19_DXt.platform-web > div > div.layers-3iHuyZ.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.spacer-1fA9zc > div > div > div.flex-1xMQg5.flex-1O1GKY.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.base-3dtUhz > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.spacer-29U_x8.firefoxFixScrollFlex-cnI2ix > div.chat-3bRxxu.firefoxFixScrollFlex-cnI2ix > div.content-yTz4x3.firefoxFixScrollFlex-cnI2ix > div.spacer-1fA9zc.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr > div > div > div").onscroll = function(){
	
	// a chaque scroll dans le channel, la fonction s'execute :
	
	console.log("test")

	app = document.querySelector("#app-mount > div.app-19_DXt.platform-web > div > div.layers-3iHuyZ.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.spacer-1fA9zc > div > div > div.flex-1xMQg5.flex-1O1GKY.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.base-3dtUhz > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.spacer-29U_x8.firefoxFixScrollFlex-cnI2ix > div.chat-3bRxxu.firefoxFixScrollFlex-cnI2ix > div.content-yTz4x3.firefoxFixScrollFlex-cnI2ix > div.spacer-1fA9zc.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr > div > div > div").querySelectorAll(".containerCozyBounded-1rKFAn")
	
	// la fonction récupére le message présent dans le channel ( uniquemment ceux charger par discord )
	
	tab2 = []

	for ( x of app ){

		y = hexEncode(x.innerText)

		tab2.push(y)
		
	}

	tab2.reverse()
	
	// on récupèrer le contenu des messages, convertit en hexadecimal
	
	// puis on inverse le tableau ( pour éviter d'avoir à faire une boucle "for" qui commence par la fin dans le code qui suit )

	for ( x of tab2 ){

		if ( !tab.includes(x) ){

			console.log("test2")
		
			tab.unshift(x)
			
			// on vérifie si le message à déjà été enregistré, si oui on le rajoute au début du tableau pour conserver la chronologie

		}
		
	}

}
