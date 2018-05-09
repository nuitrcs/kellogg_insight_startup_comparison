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
	var me = this
	if (this.className.baseVal === 'tilde-rect'){
		var this_id = me.id.substring(5)
		me = document.getElementById(this_id)
	}
	tilde[me.id].node().focus()

	tilde[me.id + '-shadow']
		.transition()
		.duration(100)
		.style('opacity',0.7)
}

tilde.focus = function(e) {
   var this_id = this.id.substring(6)
   tilde[this_id + '-shadow']
      .transition()
      .duration(100)
      .style('opacity',0.7)
}

tilde.blur = function(e,element) {
	var me = this
   if (element) {
      me = element
   }

	var dd = d3.select(me).data()[0]

	tilde[dd.id + '-shadow']
		.transition()
		.duration(100)
		.style('opacity',0)

	tilde.change(null,me)
}

tilde.change = function(e,element) {
	var me = this
	if (element) {
		me = element
	}
   var value_test = +me.value
	if (value_test < 20) {
		me.value = '20'
	}
	if (value_test > 65) {
		me.value = '65'
	}
   function parseNumbers(input,target,spacing_bool) {
      var output = input.toString()
      if (output.length === 1) {
         output += '.0'
      }
      if (output.length > 3 || output.length === 2) {
         var spacing = ''
         if (spacing_bool) {
            spacing = "<tspan style='opacity:0; visibility:hidden'>.</tspan>"
         }
         if (target) {
            output = spacing + Math.round(tilde.data[topval][target]/tilde.data[botval][target])
         } else {
            output = spacing + Math.round(tilde.data[topval]['proportion'])
         }
      }
      return output
   }
   me.setAttribute('value',me.value)
	var topval = tilde['top'].node().value
	var botval = tilde['bottom'].node().value
	var result = round(tilde.data[topval].success/tilde.data[botval].success,1)
   result = parseNumbers(result,'success',true)
   var top_result = round(tilde.data[topval].top/tilde.data[botval].top,1)
   top_result = parseNumbers(top_result,'top')
   var top_prop = round(tilde.data[topval].proportion*100,1)
   top_prop = parseNumbers(top_prop)
   var bot_prop = round(tilde.data[botval].proportion*100,1)
   top_prop = parseNumbers(top_prop)
   
	d3.selectAll('#top, .top-age')
		.html(topval)
	d3.selectAll('#bottom, .bottom-age')
		.html(botval)
	d3.select('#value')
		.html(result)
   d3.select('#top-value')
      .html(top_result)
   d3.select('#top-prop')
      .html(top_prop)
   d3.select('#bottom-prop')
      .html(bot_prop)
}

tilde.parseEnter = function(e) {
   var me = this
   var key = e.which || e.keyCode;
   if (key === 13){
      me.blur()
   }
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

tilde['top'].node().onmouseup = tilde.change
tilde['bottom'].node().onmouseup = tilde.change
tilde['top'].node().onchange = tilde.change
tilde['bottom'].node().onchange = tilde.change

tilde['top'].node().onkeyup = tilde.parseEnter
tilde['bottom'].node().onkeyup = tilde.parseEnter

d3.select('#button-frame')
   .on('mouseover',function(){
      d3.select(this).style('opacity','0.2')
   })
   .on('mouseout',function(){
      d3.select(this).style('opacity','0')
   })

var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
   console.log('Chrome detected! Image output allowed.')
   d3.select('#button').style('display','inline-block')
} else if(
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false
) {
   console.log('Chrome detected! Image output allowed.')
   d3.select('#button').style('display','inline-block')
} else { 
   console.error('Interactive output disabled outside of Chrome.')
}

