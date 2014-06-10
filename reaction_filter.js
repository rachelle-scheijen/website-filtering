 function FilterReactions(){
    this.names	= new Array('Outsider');
 }
 FilterReactions.prototype.init	= function(){
    for(i in this.names){
	this.filterName(this.names[i]);
    }
 }
 FilterReactions.prototype.filterName	= function(name){
    $('img[alt="'+name+'"]').each(function(){
      item = $(this).parent().parent().next().find('div');
      item.html('');
    });
 }
 
 filterReactions = new FilterReactions();
 
 currentHostname = window.location.toString();
 if( currentHostname.indexOf("webwereld") != -1 ){
  $('document').ready(function(){
    filterReactions.init();
  });
 }