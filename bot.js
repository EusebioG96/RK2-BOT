const Discord = require('discord.js');

const client = new Discord.Client();



//Constantes para funcionalidad de wars
const puntos6 = [15,12,10,9,8,7,6,5,4,3,2,1];
const puntos5 = [12,10,8,7,6,5,4,3,2,1];
const puntos4 = [10,8,6,5,4,3,2,1];

const total6 = 82;
const total5 = 58;
const total4 = 39;
//war 1
var sum = 0;
var race = 0;
var war = 0;
//war 2
var sum2 = 0;
var race2 = 0;
var war2 = 0;


client.on('ready', () => {
  console.log('I am ready!');
});


//Funcionalidad de wars
client.on('message', message => {
	msg = message.content;

	if(message.content === '!startwar'){
		if(war === 1){
			message.reply('Ya hay un war empezada');
		}else{
			message.reply('War empezada, para introducir p debes hacerlo de la siguiente forma: !p 1,2,3,4,5,6');
			war = 1;
		}
	}

	if(message.content === '!stopwar'){
		if(message.author.username === ""){
			message.reply('Your princess is in another castle');
			return;
		}
		if(war === 0){
			message.reply('No hay ninguna war empezada');
		}else{
			message.reply('La puntuación final es: ' + sum.toString());
			sum = 0;
			race = 0;
			war = 0;
		}
	}

	if(message.content.startsWith('!p')){
		if(message.author.username === ""){
			message.reply('TE LA CREISTE WE');
			return;
	}
		// !p 1,2,3,4,5,6
		var temp = 0;
		var typewar = 0;
		var typetable = [];
		var p = msg.substring(3);
		var split = p.split(',');
		var tamaño = split.length;


		var duplicates = split.reduce(function(acc, el, i, arr) {
		  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
		}, []);

		if(duplicates.length > 0){
			message.reply('No introduzcas elementos repetidos');
			return;
		}

		
		if(war === 0) {
			message.reply('No hay niguna war empezada');
			return;
		}
		if(tamaño === 4){
			typewar = total4;
			typetable = puntos4;	
			
			}else if(tamaño === 5){
				typewar = total5;
				typetable = puntos5;
				
			}else if(tamaño === 6){
				typewar = total6;
				typetable = puntos6;
				
			}
			
		if(tamaño < 4){
			message.reply('Tienes que introducir al menos 4 p');
		}else if(tamaño > 6){
			message.reply('El máximo de p a introducir es de 6');
		}else{

			for(i = 0; i < tamaño ; i++){
				if(split[i] < 0){
					message.reply('No introduzcas p negativas');
					return;
				}
				temp += typetable[split[i] - 1];
			
			}

			sum+= temp - (typewar - temp);
			aux = temp - (typewar - temp);
			race++;
			
			message.reply('Carrera número ' + race.toString());
			message.reply('Resultado de la carrera: ' + aux.toString());
			message.reply('Resultado total: ' + sum.toString());

		}

	}
});

client.login(jncxT9EFTMW7tzIaOGK77mRzNEsAITV0);