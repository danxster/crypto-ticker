$(document).ready(function() {
getData();
});

function getData(){
//GET NEO
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=BTC,USD"
    }).then(function(data) {
       $('.btc').empty().append(data.BTC);
       $('.usd').empty().append(data.USD);
    });
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/neo/",
        success: function(result){
        $('.24h').empty().append(result[0].percent_change_24h);
        },
    });
//GET BTC
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD"
    }).then(function(data) {
       $('.btcusd').empty().append(data.USD);
    });
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/bitcoin/",
        success: function(result){
        $('.btc24h').empty().append(result[0].percent_change_24h);
    },
    });
//GET OMG
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=OMG&tsyms=BTC,USD"
    }).then(function(data) {
       $('.omgusd').empty().append(data.USD);
       $('.omgbtc').empty().append(data.BTC);
    });
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/omisego/",
        success: function(result){
        $('.omg24h').empty().append(result[0].percent_change_24h);
        },
    });
//GET IOTA
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=IOT&tsyms=BTC,USD"
    }).then(function(data) {
       $('.iotusd').empty().append(data.USD);
       $('.iotbtc').empty().append(data.BTC);
    });
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/iota/",
        success: function(result){
        $('.iot24h').empty().append(result[0].percent_change_24h);
        },
    });
//GET GNT
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=GNT&tsyms=BTC,USD"
    }).then(function(data) {
       $('.gntusd').empty().append(data.USD);
       $('.gntbtc').empty().append(data.BTC);
    });
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/golem/",
        success: function(result){
        $('.gnt24h').empty().append(result[0].percent_change_24h);
        },
    });
//GET VTC
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=VTC&tsyms=BTC,USD"
    }).then(function(data) {
       $('.vtcusd').empty().append(data.USD);
       $('.vtcbtc').empty().append(data.BTC);
    });
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/vertcoin/",
        success: function(result){
        $('.vtc24h').empty().append(result[0].percent_change_24h);
        },
    });
    setTimeout("getData()",15000);
}

        