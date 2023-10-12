
var vg_1 = "data_viz1.vg.json";
var vg_2 = "data_viz2.vg.json";



vegaEmbed("#viz1", vg_1)
vegaEmbed("#viz2", vg_2)


.then(function (result) {

    // Access the Vega view instance 
    // (https://vega.github.io/vega/docs/api/view/) as result.view

})
.catch(console.error);