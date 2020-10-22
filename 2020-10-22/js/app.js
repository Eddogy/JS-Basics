'use strict';

let knygos =
[
 {
 	Grozine: 
 	[

     {
     	ISBN: 'trsdr24',
     	leidimoMetai: '2019',
     	pavadinimas: 'Zeme',
     	puslapiuSkaicius: '50'
     },

     {
     	ISBN: '4234324gdag',
     	leidimoMetai: '2018',
     	pavadinimas: 'Gyvunai',
     	puslapiuSkaicius: '220'
     },

     {
     	ISBN: '13123fgs',
     	leidimoMetai: '2017',
     	pavadinimas: 'Spalvos',
     	puslapiuSkaicius: '130'
     },

     {
     	ISBN: '8574574',
     	leidimoMetai: '2019',
     	pavadinimas: 'Nezinomasis',
     	puslapiuSkaicius: '220'
     }
 	]
 },

 {
 	Fantastika:
 	[
 		{
 			ISBN: 'LOTR39999',
     		leidimoMetai: '1992',
     		pavadinimas: 'Ziedu Valdovas',
     		puslapiuSkaicius: '5000'
 		},

 		{
 			ISBN: 'FAN1377',
     		leidimoMetai: '2000',
     		pavadinimas: 'Haris Poteris',
     		puslapiuSkaicius: '3000'
        },

        {
			ISBN: 'FAN3333',
     		leidimoMetai: '2015',
     		pavadinimas: 'Raganius',
     		puslapiuSkaicius: '4000'
        },

        {
        	ISBN: 'FAN0000',
     		leidimoMetai: '1500',
     		pavadinimas: 'Artifaktas',
     		puslapiuSkaicius: '550'
        }
 	]
 },

  {
  	Siaubo:
  	[
  		{
  			ISBN: 'HORR1337',
     		leidimoMetai: '2020',
     		pavadinimas: 'Isvarymas',
     		puslapiuSkaicius: '900'
  		},

  		{
  			ISBN: 'HORR1483',
     		leidimoMetai: '2019',
     		pavadinimas: 'Vaiduoklis',
     		puslapiuSkaicius: '200'
  		},

  		{
  			ISBN: 'HORR1500',
     		leidimoMetai: '2003',
     		pavadinimas: 'Pjuklas',
     		puslapiuSkaicius: '330'
  		},

  		{
  			ISBN: 'HORR1600',
     		leidimoMetai: '2005',
     		pavadinimas: 'Konstantinas',
     		puslapiuSkaicius: '500'
  		}
  	]
  }
]



for (let kategorija in knygos)
{
	console.log(knygos[kategorija]);
	for (let kategorijuPav in knygos[kategorija])
	{
		console.log(knygos[kategorija][kategorijuPav]);
	}
}

