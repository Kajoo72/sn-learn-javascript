//
// L01S02 - example server side script
//
var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}

edit 14.4.2023
/*
var gr = new GlideRecord('incident');
gr.addActiveQuery();
gr.addQuery("priority", "5")
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
    
}
gs.info("There is " +  gr.getRowCount() + " active Incidents with lowest Priority");
*/
