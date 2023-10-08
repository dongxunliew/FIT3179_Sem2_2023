var vg_1 = "https://raw.githubusercontent.com/dongxunliew/FIT3179_Sem2_2023/main/Week9_Homework/happy.vg.json";
vegaEmbed("#map", vg_1, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "scatterplot.vg.json";
vegaEmbed("#scatter_plot", vg_2, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
