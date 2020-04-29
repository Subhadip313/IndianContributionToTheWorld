//java script to choose random text


var numberStrings = ['<span style="color:blue; font-size:16px;">"A floating post office"</span> <br><br> India has the largest postal network in the world with over 1, 55,015 post offices, India has a floating post office in Dal Lake, Srinagar which was inaugurated in August 2011.', 
					'<span style="color:blue; font-size:16px;">"Kumbh Mela gathering visible from space"</span> <br><br> The 2011 Kumbh Mela was the largest gathering of people with over 75 million pilgrims. The gathering was so huge that the crowd was visible from space.', 
					'<span style="color:blue; font-size:16px;">"The wettest inhabited place in the world"</span> <br><br> Mawsynram, a village on the Khasi Hills, Meghalaya, receives the highest recorded average rainfall in the world', 
					'<span style="color:blue; font-size:16px;">"Bandra Worli Sealink has steel wires equal to the earth\'s circumference"</span> <br><br> It took a total of 2,57,00,000 man hours for completion and also weighs as much as 50,000 African elephants. A true engineering and architectural marvel.', 
					'<span style="color:blue; font-size:16px;">"Science day in Switzerland is dedicated to Ex-Indian President, APJ Abdul Kalam"</span> <br><br> The father of India\'s missile programme had visited Switzerland back in 2006. Upon his arrival, Switzerland declared May 26th as Science Day.', 
					'<span style="color:blue; font-size:16px;">"India has a spa just for elephants"</span> <br><br> Elephants receive baths, massages and even food at the Punnathoor Cotta Elephant Yard Rejuvenation Centre in Kerala. Now that\'s a BIG step for the country.',
					'<span style="color:blue; font-size:16px;">"India is the world\'s second-largest English speaking country"</span> <br><br> India is second only to the USA when it comes to speaking English with around 125 million people speaking the language, which is only 10% of our population.',
					'<span style="color:blue; font-size:16px;">"The world\'s largest producer of milk"</span> <br><br> India is the world\'s largest milk producer, with 22 percent of global production, followed by the United States of America, China, Pakistan and Brazil. ',
					'<span style="color:blue; font-size:16px;">"The human calculator"</span> <br><br> In 1982 Shakuntla Devi was given this title after she demonstrated the calculation of two 13 digit numbers: 7,686,369,774,870 × 2,465,099,745,779 which were picked at random. She answered correctly within 28 seconds.',
					'<span style="color:blue; font-size:16px;">"Hitler wanted to give German citizenship to Dhyan Chand"</span> <br><br> After defeating Germany 8-1 in the 1936 Berlin Olympics, Major Dhyan Chand,  was summoned by Hitler. He was promised German citizenship and more. Dhyan Chand however declined the offer.',
					'<span style="color:blue; font-size:16px;">"India has been the largest troop contributor to the UN Peacekeeping Missions"</span> <br><br> So far India has taken part in 49 Peacekeeping missions with a total contribution exceeding 1,95,000 troops',
					'<span style="color:blue; font-size:16px;">"India\'s space program is one of the top 5 space programs in the world"</span> <br><br> NASA\'s MAVEN Mars orbiter cost around $672 million, while India\s Mars Orbiter Mission 1 (MOM) cost just $74 million',
					'<span style="color:blue; font-size:16px;">"Dolphins are treated as \' non human persons \' in India"</span> <br><br> Dolphins are extremely intelligent animals who also display culture. The Government Of India declared that they must be treated like we treat humans. Captive Dolphins are also banned in India.',
					'<span style="color:blue; font-size:16px;">"Varanasi is One of The Oldest Inhabited Places in the World"</span> <br><br> Situated on the banks of river Ganges, the holy city of Banaras or Varanasi is at least 3000 years old. According to Hindu Mythology, Lord Shiva found this city 5000 years ago. ',
					'<span style="color:blue; font-size:16px;">"Shani Shingnapur is Village Where the Houses Don\'t Have Doors!"</span> <br><br> Attracting over 40,000 devotees each day due to a 300-yr old legend, this village in Maharashtra features establishments without any doors and locks. '
					];
function displayRandomElem() {

document.getElementById("disp").style.visibility = "hidden";
}

function displayRandomElem() {

  if (numberStrings.length == 0) return;

  document
      .getElementById('numberList')
      .innerHTML = numberStrings.splice(Math.floor(Math.random() * numberStrings.length), 1);
}


