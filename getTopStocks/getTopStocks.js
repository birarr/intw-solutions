function getTopStocks(stocks, prices) {
  var moy = new Array(6)
  var result = new Array(3)
  var moy = new Array(6)

  for (var i = 0; i < 6; i++) {
    moy[i] = parseFloat((prices[0][i] + prices[1][i] + prices[2][i]) / 3)
  }

  var indmax = 0
  for (var j = 0; j < 3; j++) {
    var max = 0
    for (var k = 0; k < 6; k++) {
      if (moy[k] > max) {
        max = moy[k]
        indmax = k
      }
    }
    moy[indmax] = 0
    result[j] = stocks[indmax]
  }
  return result
}

// console.log(getTopStocks);

var stocks = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTRA']
var prices = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.67, 10.42, 11.88, 11.77, 10.21],
]

// let resultat = getTopStocks(stocks, prices);

// console.log(resultat);

let result = getTopStocks(stocks, prices)
for (let i = 0; i < 3; i++) {
  console.log(result[i])
}
