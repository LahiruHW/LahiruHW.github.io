
var vg_1 = "data_viz1.vg.json";
var vg_2 = "data_viz2.vg.json";



vegaEmbed("#viz1", vg_1)

vegaEmbed("#viz2", vg_2)



.then(function (result) {
    
    // Access the Vega view instance 
    // (https://vega.github.io/vega/docs/api/view/) as result.view
    
    document.getElementById("viz2-text").innerHTML += '<div id="viz2-text"> This shows that there is a proportional relationship between the GDP per capita and the Happiness level of a country (i.e. indicated by the Happiness Class that the country belongs to)  </div>'
    
})
.catch(console.error);

