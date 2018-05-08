/* 
//	- TILDE, TILD3, tild3, ~ and tilde are all js-library catch-words (so to speak) by Frank Elavsky at Northwestern University
//	- Thanks to Kellogg Insight for coordinating the article and collaboration
//	- Also a special thanks to Benjamin Jones (Kellogg - Northwestern) who provided the data and analysis
*/

var tilde = {}
tilde.data = {
   "20": {
      "success": 0.0098,
      "top": 0.0216,
      "proportion": 0.007
   },
   "21": {
      "success": 0.0473,
      "top": 0.0001,
      "proportion": 0.009
   },
   "22": {
      "success": 0.0256,
      "top": 0.0476,
      "proportion": 0.01
   },
   "23": {
      "success": 0.0178,
      "top": 0.0474,
      "proportion": 0.013
   },
   "24": {
      "success": 0.0558,
      "top": 0.0873,
      "proportion": 0.015
   },
   "25": {
      "success": 0.0677,
      "top": 0.1346,
      "proportion": 0.017
   },
   "26": {
      "success": 0.0791,
      "top": 0.1165,
      "proportion": 0.018
   },
   "27": {
      "success": 0.0717,
      "top": 0.0956,
      "proportion": 0.02
   },
   "28": {
      "success": 0.0679,
      "top": 0.1105,
      "proportion": 0.022
   },
   "29": {
      "success": 0.0865,
      "top": 0.1206,
      "proportion": 0.023
   },
   "30": {
      "success": 0.0877,
      "top": 0.1179,
      "proportion": 0.025
   },
   "31": {
      "success": 0.094,
      "top": 0.127,
      "proportion": 0.026
   },
   "32": {
      "success": 0.0747,
      "top": 0.1105,
      "proportion": 0.027
   },
   "33": {
      "success": 0.0927,
      "top": 0.0975,
      "proportion": 0.028
   },
   "34": {
      "success": 0.0823,
      "top": 0.1033,
      "proportion": 0.028
   },
   "35": {
      "success": 0.0758,
      "top": 0.0963,
      "proportion": 0.029
   },
   "36": {
      "success": 0.1122,
      "top": 0.1673,
      "proportion": 0.029
   },
   "37": {
      "success": 0.1226,
      "top": 0.1218,
      "proportion": 0.03
   },
   "38": {
      "success": 0.1668,
      "top": 0.1778,
      "proportion": 0.03
   },
   "39": {
      "success": 0.133,
      "top": 0.1739,
      "proportion": 0.03
   },
   "40": {
      "success": 0.1422,
      "top": 0.1771,
      "proportion": 0.03
   },
   "41": {
      "success": 0.1336,
      "top": 0.1652,
      "proportion": 0.03
   },
   "42": {
      "success": 0.1561,
      "top": 0.1089,
      "proportion": 0.03
   },
   "43": {
      "success": 0.1734,
      "top": 0.1463,
      "proportion": 0.03
   },
   "44": {
      "success": 0.1838,
      "top": 0.1243,
      "proportion": 0.03
   },
   "45": {
      "success": 0.1812,
      "top": 0.1489,
      "proportion": 0.029
   },
   "46": {
      "success": 0.2071,
      "top": 0.209,
      "proportion": 0.028
   },
   "47": {
      "success": 0.1818,
      "top": 0.2283,
      "proportion": 0.028
   },
   "48": {
      "success": 0.2029,
      "top": 0.2159,
      "proportion": 0.027
   },
   "49": {
      "success": 0.2135,
      "top": 0.251,
      "proportion": 0.026
   },
   "50": {
      "success": 0.1907,
      "top": 0.209,
      "proportion": 0.025
   },
   "51": {
      "success": 0.2491,
      "top": 0.1958,
      "proportion": 0.024
   },
   "52": {
      "success": 0.2319,
      "top": 0.2576,
      "proportion": 0.023
   },
   "53": {
      "success": 0.2275,
      "top": 0.2214,
      "proportion": 0.022
   },
   "54": {
      "success": 0.2532,
      "top": 0.2297,
      "proportion": 0.02
   },
   "55": {
      "success": 0.228,
      "top": 0.2374,
      "proportion": 0.019
   },
   "56": {
      "success": 0.2454,
      "top": 0.2844,
      "proportion": 0.018
   },
   "57": {
      "success": 0.231,
      "top": 0.1885,
      "proportion": 0.016
   },
   "58": {
      "success": 0.241,
      "top": 0.2378,
      "proportion": 0.015
   },
   "59": {
      "success": 0.3054,
      "top": 0.2648,
      "proportion": 0.014
   },
   "60": {
      "success": 0.2601,
      "top": 0.1971,
      "proportion": 0.013
   },
   "61": {
      "success": 0.2247,
      "top": 0.2206,
      "proportion": 0.011
   },
   "62": {
      "success": 0.2212,
      "top": 0.235,
      "proportion": 0.01
   },
   "63": {
      "success": 0.1952,
      "top": 0.1885,
      "proportion": 0.008
   },
   "64": {
      "success": 0.2171,
      "top": 0.2347,
      "proportion": 0.007
   },
   "65": {
      "success": 0.1967,
      "top": 0.1115,
      "proportion": 0.006
   }
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

tilde.showInput = function(d,i) {
	console.log(d3.event)
	var me = this
	if (this.className.baseVal === 'tilde-rect'){
		var this_id = me.id.substring(5)
		me = document.getElementById(this_id)
	}
	tilde[me.id]
		.style("display", "inline-block")

	tilde[me.id].node().focus()

	d3.select(me)
		.style('display','none')

	tilde[me.id + '-shadow']
		.transition()
		.duration(100)
		.style('opacity',0.5)
}

tilde.focus = function(e) {
	var stored = this.value
	this.value = ''
	this.value = stored
}

tilde.blur = function(e) {
	var me = this
	d3.select(me)
		.style('display','none')

	var dd = d3.select(me).data()[0]

	d3.select('#'+dd.id)
		.style('display','inline-block')

	tilde[dd.id + '-shadow']
		.transition()
		.duration(100)
		.style('opacity',0)

	tilde.change(null,me)
}

tilde.hideInput = function(d) {
	tilde[this.id].node().blur()
}

tilde.change = function(e,element) {
	var me = this
	if (element) {
		me = element
	}
	if (+me.value < 20) {
		me.value = '20'
	}
	if (+me.value > 65) {
		me.value = '65'
	}
	var topval = tilde['top'].node().value
	var botval = tilde['bottom'].node().value
	var result = round(tilde.data[topval].success/tilde.data[botval].success,1)
	result = result.toString()
	if (result.length === 1) {
		result += '.0'
	}
	if (result.length > 3 || result.length === 2) {
		result = "<tspan style='opacity:0'>.</tspan>"+ Math.round(tilde.data[topval].success/tilde.data[botval].success)
	}
	d3.select('#top')
		.html(topval)
	d3.select('#bottom')
		.html(botval)
	d3.select('#value')
		.html(result)

}

tilde['top'] = d3.select('#input-top')
	.datum({'id':'top'})
tilde['bottom'] = d3.select('#input-bottom')
	.datum({'id':'bottom'})
tilde['top-shadow'] = d3.select('#top-shadow')
tilde['bottom-shadow'] = d3.select('#bottom-shadow')

tilde['top'].node().onfocus = tilde.focus
tilde['bottom'].node().onfocus = tilde.focus
tilde['top'].node().onblur = tilde.blur
tilde['bottom'].node().onblur = tilde.blur
tilde['top'].node().onmouseout = tilde.blur
tilde['bottom'].node().onmouseout = tilde.blur
tilde['top'].node().onchange = tilde.change
tilde['bottom'].node().onchange = tilde.change

d3.selectAll('.tilde-rect, .tilde-input')
	.on('click',tilde.showInput)
	.on('mouseover',tilde.showInput)