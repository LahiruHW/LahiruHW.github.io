
var vg_1 = "data_viz1.vg.json";
var vg_2 = "data_viz2.vg.json";
var vg_3 = "data_viz3.vg.json";


vegaEmbed("#viz1", vg_1).then(function (result) {
//     // Access the Vega view instance 
//     // (https://vega.github.io/vega/docs/api/view/) as result.view
//         result.view.addEventListener('click', function(event, item) {
//             var param = result.spec.hconcat[1].params[0];
//             if (item && item.datum && item.datum.Happiness_Class !== undefined) {
//                 const clickedHappinessClass = item.datum.Happiness_Class;
//                 param.value = clickedHappinessClass;        // set the value of the parameter to the clicked value
//                 console.log('Clicked Happiness Class:', clickedHappinessClass);
//                 console.log(param);    
//                 // // set the value of result.spec.hconcat[0].data[0].transform[0].filter.equal to the clicked value
//                 // result.spec.hconcat[0].layer[0].transform[1].filter.equal = clickedHappinessClass.toString();
//                 // window.location.reload();
//         }
//     });

console.log( result.view.data('source_1') );

});


vegaEmbed("#viz2", vg_2).then(function (result) {
    // Access the Vega view instance 
    // (https://vega.github.io/vega/docs/api/view/) as result.view
    document.getElementById("viz2-text").innerHTML += '<div id="viz2-text"> This shows that there is no particular relationship between the known (i.e. average) Generosity of a country and its Happiness level (i.e. indicated by the Happiness Class that the country belongs to)  </div>'
})
.catch(console.error);


vegaEmbed("#viz3", vg_3).then(function (result) {
    // Access the Vega view instance 
    // (https://vega.github.io/vega/docs/api/view/) as result.view






});

