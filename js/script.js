//----------------------------------------------------------------------------------------------------------
   var textarea=document.getElementById("text");
    
  var uagent    = navigator.userAgent.toLowerCase();
var is_safari = ( (uagent.indexOf('safari') != -1) || (navigator.vendor == "Apple Computer, Inc.") );
var is_ie     = ( (uagent.indexOf('msie') != -1) && (!is_opera) && (!is_safari) && (!is_webtv) );
var is_ie4    = ( (is_ie) && (uagent.indexOf("msie 4.") != -1) );
var is_moz    = (navigator.product == 'Gecko');
var is_ns     = ( (uagent.indexOf('compatible') == -1) && (uagent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_safari) );
var is_ns4    = ( (is_ns) && (parseInt(navigator.appVersion) == 4) );
var is_opera  = (uagent.indexOf('opera') != -1);  
var is_kon    = (uagent.indexOf('konqueror') != -1);
var is_webtv  = (uagent.indexOf('webtv') != -1);
var is_win    =  ( (uagent.indexOf("win") != -1) || (uagent.indexOf("16bit") !=- 1) );
var is_mac    = ( (uagent.indexOf("mac") != -1) || (navigator.vendor == "Apple Computer, Inc.") );
var ua_vers   = parseInt(navigator.appVersion);
    function getSelectiontextarea(textarea)
{
   var selection = null;
   if ((ua_vers >= 4) && is_ie && is_win) {
       if (textarea.isTextEdit) {
           textarea.focus();
            var sel = document.selection;
            var rng = sel.createRange();
            rng.collapse;
            if((sel.type == "Text" || sel.type == "None") && rng != null)
               selection = rng.text;
        }
    } else if (typeof(textarea.selectionEnd) != "undefined" ) {
        selection = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
    }
    return selection;
};


				var resultStr=[];
				var imageIndexes = [];
				var top_pageIndexes = [];
				var down_pageIndexes = [];
				var tableIndexes = [];
					var addelements = [];
					//var main_titleIndexes = [];
					var middle_titleIndexes = [];
					var linkIndexes = [];
					var cbtIndexes = [];
					var down_titleIndexes = [];
					var red_titleIndexes = [];
					var small_titleIndexes = [];
					var hot_tipIndexes = [];
					var boldIndexes = [];
					var footerIndexes = [];
					var downpage_titleIndexes = [];
					var listingIndexes = [];
					var txtIndexes = [];
					var codeIndexes = [];
					var captureIndexes = [];
					var smalliconIndexes = [];
					var square_listIndexes = [];
					var disc_listIndexes = [];
					var main_listIndexes = [];
					var none_listIndexes = [];
					var decimal_listIndexes = [];
					var UsedSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
                    var txt = function(startPos, size){
						this.startPosition = startPos;
						this.size = size;
        }
		var Main_titleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size =  size;
		}
		var Middle_TitleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size =  size;
		}
		var Down_titleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size =  size;
		}
		var UsedSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size =  size;
		}
		var TxtSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size =  size;
		}
		var CBTSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
		var Red_titleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
		var  LinkSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
		var DownPage_titleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
	   var Hot_TipSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
	   var FooterSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
		var BoldSelection = function(BoldstartPos, size){
			this.startPosition = BoldstartPos;
			this.size = size;
				  }
				 
        var Small_titleSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
				  }
		var CodeSelection = function(CodestartPos, size){
			this.startPosition = CodestartPos;
			this.size = size;
       }
	 
	    var  ListingSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
       }
	    var CaptureSelection = function(startPos, size){
			this.startPosition = startPos;
			this.size = size;
       }
	    var resultstrCollection = new Array();
  			
	 
	var AggregateSelection = function(sourceArray){
		var indexesToRemove = new Set();
		for (var i = 0; i < sourceArray.length; i++){
		for (var j = 0; j < sourceArray.length; j++){
		if (i==j || Array.from(indexesToRemove).indexOf(i)>-1 || Array.from(indexesToRemove).indexOf(j)>-1 ) continue;
		var lastIndex1 = sourceArray[i].startPosition+sourceArray[i].size;
		var lastIndex2 = sourceArray[j].startPosition+sourceArray[j].size;
		if (sourceArray[i].startPosition>=sourceArray[j].startPosition && sourceArray[i].startPosition<=lastIndex2){
				sourceArray[i].startPosition = sourceArray[j].startPosition;
				var maxLastIndex = (lastIndex1 > lastIndex2) ? lastIndex1 : lastIndex2;
				sourceArray[i].size = maxLastIndex - sourceArray[i].startPosition;
				indexesToRemove.add(j);
		}else
        if (sourceArray[i].startPosition>=sourceArray[j].startPosition && sourceArray[i].startPosition>=lastIndex2){
                sourceArray[i].size = lastIndex1 - sourceArray[i].startPosition;
                sourceArray[j].size = lastIndex2 - sourceArray[j].startPosition;
					
           
																								}
																																					
													}
													}
		for (var i = sourceArray.length; i-- ; i >0 )
			if (Array.from(indexesToRemove).indexOf(i)>-1) {
				sourceArray.splice(i, 1);
															}
	 
		
		
												}
		
	 
			
			 /*function makeDownStringHtml(sourceStr){
			var y=prompt("Enter a count of columns","");
		   textarea=document.getElementById("text");
		    var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
        alert(" makeDownStringHtml");
        var DownresultStr =" ";
           
           
					if(y==1){
var text=prompt("Enter text","");
              
            DownresultStr = '</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +text+'</div></div>';
							}
					 else{
                    var table='<div class="down_page float_right">';
                var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+text+'</div>';
          for(var i = 0; i < y-1;i++){
          var txt=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+txt+ '</div>';
  } 
   DownresultStr =table + '</div>'+
  '<div class="footer">'+
        '<span>'+ sourceStr[i]+
   '</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
							}
			return DownresultStr;
														}*/
			 var l=0;
			 var text=0;
			 var number=0;
			var arr=[];
			var usedLen=0;
			var usedLength=0;
			var beginIndex=0;
			var beginInd=0;
			function Send_to_DB()
            {
				var RESULSERVER =  document.getElementById("RESULSERVER");
				 RESULSERVER.value = resultStr;
			}
			 function Square_List(x,y,usl,bgind)
            {
				 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var expression = getSelectiontextarea( document.getElementById("text") );
				  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
				var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                square_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(square_listIndexes);
                for (var i = 0; i <square_listIndexes.length; i++){
                    var beginIndex =square_listIndexes[i].startPosition;
                    var endIndex =square_listIndexes[i].endPosition;
															}
					beginInd=beginIndex;
					
					if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
						boldIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
				console.log( 'square_listIndexes.length:' + square_listIndexes.length);								
                console.log('aggregated array:');
        for (var i =0; i < boldIndexes.length; i++){  
            console.log(square_listIndexes[i].startPosition + " " + square_listIndexes[i].size);
			usedLength=square_listIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;								
					var resultStr=makeString(expressionText,l,arr,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
				
            }
			
			console.log( 'arr:' +arr );
										
			number=l;
			
				
			
	 function Disc_List(x,y,usl,bgind)
            {
				 var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var expression = getSelectiontextarea( document.getElementById("text") );
                document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
                document.getElementById("text").focus();
               
                
					var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                disc_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(disc_listIndexes);
                for (var i = 0; i <disc_listIndexes.length; i++){
                    var beginIndex =disc_listIndexes[i].startPosition;
                    var endIndex =disc_listIndexes[i].endPosition;
															}
					beginInd=beginIndex;										
                 if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
					disc_listIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
				console.log( 'disc_listIndexes.length:' + disc_listIndexes.length);								
                console.log('aggregated array:');
        for (var i =0; i < disc_listIndexes.length; i++){  
            console.log(disc_listIndexes[i].startPosition + " " + disc_listIndexes[i].size);
			usedLength=disc_listIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;									
					var resultStr=makeString(expressionText,l,arr,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
            }	


		
														
		
											

					function getSymbolTypes(symbolIndex){
						for (var k = 0; k < boldIndexes.length; k++){
								if((symbolIndex>=boldIndexes[k].startPosition)&&(symbolIndex<boldIndexes[k].startPosition+boldIndexes[k].size)){
									symbolIndex='Bold';
																			}
						}
								for (var c = 0; c < codeIndexes.length; c++){										
								if((symbolIndex>=codeIndexes[c].startPosition)&&(symbolIndex<codeIndexes[c].startPosition+codeIndexes[c].size)){
									symbolIndex='Code';
										}
				
						}
						for (var k = 0; k < txtIndexes.length; k++){
								if((symbolIndex>=txtIndexes[k].startPosition)&&(symbolIndex<txtIndexes[k].startPosition+txtIndexes[k].size)){
									symbolIndex='Text';
																			}
						}
						for (var k = 0; k < listingIndexes.length; k++){
								if((symbolIndex>=listingIndexes[k].startPosition)&&(symbolIndex<listingIndexes[k].startPosition+listingIndexes[k].size)){
									symbolIndex='Listing';
																			}
						}
						for (var k = 0; k < cbtIndexes.length; k++){
								if((symbolIndex>=cbtIndexes[k].startPosition)&&(symbolIndex<cbtIndexes[k].startPosition+cbtIndexes[k].size)){
									symbolIndex='CBT';
																			}
						}
						for (var k = 0; k < linkIndexes.length; k++){
								if((symbolIndex>=linkIndexes[k].startPosition)&&(symbolIndex<linkIndexes[k].startPosition+linkIndexes[k].size)){
									symbolIndex='Link';
																			}
						}
						/*for (var k = 0; k < main_titleIndexes.length; k++){
								if((symbolIndex>=main_titleIndexes[k].startPosition)&&(symbolIndex<main_titleIndexes[k].startPosition+main_titleIndexes[k].size)){
									symbolIndex='Main_title';
																			}
						}*/
						for (var k = 0; k < middle_titleIndexes.length; k++){
								if((symbolIndex>=middle_titleIndexes[k].startPosition)&&(symbolIndex<middle_titleIndexes[k].startPosition+middle_titleIndexes[k].size)){
									symbolIndex='Middle_title';
																			}
						}
						for (var k = 0; k < down_titleIndexes.length; k++){
								if((symbolIndex>=down_titleIndexes[k].startPosition)&&(symbolIndex<down_titleIndexes[k].startPosition+down_titleIndexes[k].size)){
									symbolIndex='Down_title';
																			}
						}
						for (var k = 0; k < downpage_titleIndexes.length; k++){
								if((symbolIndex>=downpage_titleIndexes[k].startPosition)&&(symbolIndex<downpage_titleIndexes[k].startPosition+downpage_titleIndexes[k].size)){
									symbolIndex='Downpage_title';
																			}
						}
						for (var k = 0; k < hot_tipIndexes.length; k++){
								if((symbolIndex>=hot_tipIndexes[k].startPosition)&&(symbolIndex<hot_tipIndexes[k].startPosition+hot_tipIndexes[k].size)){
									symbolIndex='Hot_tip';
																			}
						}
						for (var k = 0; k < red_titleIndexes.length; k++){
								if((symbolIndex>=red_titleIndexes[k].startPosition)&&(symbolIndex<red_titleIndexes[k].startPosition+red_titleIndexes[k].size)){
									symbolIndex='Red_title';
																			}
						}
						for (var k = 0; k < small_titleIndexes.length; k++){
								if((symbolIndex>=small_titleIndexes[k].startPosition)&&(symbolIndex<small_titleIndexes[k].startPosition+small_titleIndexes[k].size)){
									symbolIndex='Small_title';
																			}
						}
						for (var k = 0; k < captureIndexes.length; k++){
								if((symbolIndex>=captureIndexes[k].startPosition)&&(symbolIndex<captureIndexes[k].startPosition+captureIndexes[k].size)){
									symbolIndex='Capture';
																			}
						}
						for (var k = 0; k < smalliconIndexes.length; k++){
								if((symbolIndex>=smalliconIndexes[k].startPosition)&&(symbolIndex<smalliconIndexes[k].startPosition+smalliconIndexes[k].size)){
									symbolIndex='Smallicon';
																			}
						}
						for (var k = 0; k < square_listIndexes.length; k++){
								if((symbolIndex>=square_listIndexes[k].startPosition)&&(symbolIndex<square_listIndexes[k].startPosition+square_listIndexes[k].size)){
									symbolIndex='Square_List';
																			}
						}
						for (var k = 0; k < disc_listIndexes.length; k++){
								if((symbolIndex>=disc_listIndexes[k].startPosition)&&(symbolIndex<disc_listIndexes[k].startPosition+disc_listIndexes[k].size)){
									symbolIndex='Disc_List';
																			}
						}
						for (var k = 0; k <  main_listIndexes.length; k++){
								if((symbolIndex>= main_listIndexes[k].startPosition)&&(symbolIndex< main_listIndexes[k].startPosition+ main_listIndexes[k].size)){
									symbolIndex='Main_List';
																			}
						}
						for (var k = 0; k <  none_listIndexes.length; k++){
								if((symbolIndex>= none_listIndexes[k].startPosition)&&(symbolIndex< none_listIndexes[k].startPosition+ none_listIndexes[k].size)){
									symbolIndex='None_List';
																			}
						}
						for (var k = 0; k < decimal_listIndexes.length; k++){
								if((symbolIndex>=decimal_listIndexes[k].startPosition)&&(symbolIndex<decimal_listIndexes[k].startPosition+decimal_listIndexes[k].size)){
									symbolIndex='Decimal_List';
																			}
						}
						for (var k = 0; k <tableIndexes.length; k++){
								if((symbolIndex>=tableIndexes[k].startPosition)&&(symbolIndex<tableIndexes[k].startPosition+tableIndexes[k].size)){
									symbolIndex='Table';
																			}
						}
						/*for (var k = 0; k <footerIndexes.length; k++){
								if((symbolIndex>=footerIndexes[k].startPosition)&&(symbolIndex<footerIndexes[k].startPosition+footerIndexes[k].size)){
									symbolIndex='Footer';
																			}
						}*/
						for (var k = 0; k < down_pageIndexes.length; k++){
								if((symbolIndex>=down_pageIndexes[k].startPosition)&&(symbolIndex<down_pageIndexes[k].startPosition+down_pageIndexes[k].size)){
									symbolIndex='DownPage';
																			}
						}
						for (var k = 0; k < top_pageIndexes.length; k++){
								if((symbolIndex>=top_pageIndexes[k].startPosition)&&(symbolIndex<top_pageIndexes[k].startPosition+top_pageIndexes[k].size)){
									symbolIndex='TopPage';
																			}
						}
						for (var k = 0; k < imageIndexes.length; k++){
								if((symbolIndex>=imageIndexes[k].startPosition)&&(symbolIndex<imageIndexes[k].startPosition+imageIndexes[k].size)){
									symbolIndex='Image';
																			}
						}
						
						
						 /*if((symbolIndex!='Bold')&&(symbolIndex!='Code')){
											symbolIndex='Str';
																											}*/
	 console.log( 'symbolIndex:' +symbolIndex );					
return symbolIndex;
					}
//-----------------------------------------------------------------------------------------------------------------
var u=0;	
var i = 0;
var resultstr=[];
	var stack=[];
	function makeString(sourceStr,usl,bgind,darrms,answ,x,dt,mt,tpl,t,w,y,j,dtxtms,dnms){
		alert("makeString");
		mt=mt;
		dt=dt;
		answ=answ;
		bgind=bgind;
		x=x;
		y=y;
		j=j;
		t=t;
		
		console.log( 'sourceStr:' +sourceStr );
		console.log( 'dnms:' +dnms );
		console.log( 'dtxtms:' +dtxtms );
		console.log( 'darrms:' +darrms );
		console.log( 'tpl:' +tpl );
		console.log( 'mt:' +mt);
		console.log( 'dt:' +dt );
		console.log( 'answ:' +answ );
		console.log( 'w:' + w );
		console.log( 'usl:' +usl );
		 console.log( 'bgind:' +bgind );
		 console.log( 'x:' + x );
		console.log( 'y:' + y );
		console.log( 'j:' + j );
		console.log( 't:' + t );
		textarea=document.getElementById("text");
		expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
			resultstr.pop();
			 console.log( 'i:' + i );
		for ( i = 0; i < sourceStr.length; i++){														
				 console.log( 'i:' + i );
				 
				switch(getSymbolTypes(i)){
					case 'DownPage':
					//var y=prompt("Enter a count of columns","");
						if ((stack.length == 0) || ((stack.length !== 0)&&(top!== 'DownPage'))){
							if(i==0){
								if(dnms==undefined){
									if(dn==1){
//var text=prompt("Enter text","");
							resultStr ='</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +dtxt+'</div></div>';
							}
					 else{
                    var table='<div class="down_page float_right">';
               // var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+dtxt+'</div>';
          for(var v = 0; v < dn-1;v++){
          //var txt=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+darr[v]+ '</div>';
										}
													}
														}else{
								if(dnms==1){
//var text=prompt("Enter text","");
							resultStr ='</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +dtxtms+'</div></div>';
							}
					 else{
                    var table='<div class="down_page float_right">';
               // var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+dtxtms+'</div>';
          for(var v = 0; v < dnms;v++){
          //var txt=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+darrms[v]+ '</div>';
										}
							}
																}
  resultStr =table + '</div>'+
  '<div class="footer">'+
        '<span>'+ sourceStr[i];
																
										} else{
											if(dnms==undefined){
												if(dn==1){
//var text=prompt("Enter text","");
							resultStr +='</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +dtxt+'</div></div>';
							}
					 else{
                    var table='<div class="down_page float_right">';
                //var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+dtxt+'</div>';
          for(var v = 0; v < dn-1;v++){
          //var dtext=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+darr[v]+'</div>';
										}
							}
											} else{
								if(dnms==1){
//var text=prompt("Enter text","");
							resultStr +='</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' +dtxtms+'</div></div>';
							}
					 else{
                    var table='<div class="down_page float_right">';
                //var text=prompt("Enter text","");  
                table +=' <div class="align_left medium_padding align_top float_left">'+dtxtms+'</div>';
          for(var v = 0; v < dnms;v++){
          //var dtext=prompt("Enter txt","");
 table += '<div class="align_left medium_padding align_top float_right">'+darrms[v]+'</div>';
										}
							}
									}
  resultStr +=table + '</div>'+
  '<div class="footer">'+
        '<span>'+ sourceStr[i];
												}
											
							 stack.push('DownPage');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																													}
						else if(stack[stack.length-1]=='DownPage'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																	
					  break;
					  case 'TopPage':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'TopPage'))){
							if(i==0){
								if(tpl==undefined){
								resultStr ='<!DOCTYPE html>'+
		'<html>'+
		  '<head>'+
			'<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
			'<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
			'</head>'+
		  '<body>'+
			'<div class="page_cont one">'+
			  '<br class="cbt">'+
			  '<div class="content">'+
		'<div class="float_left">'+top_page_list+'</div>'+
		'<div class="main_title float_right">'+
		'<span class="title_font">'+ sourceStr[i];	
													}
									else{
										
																			
							resultStr ='<!DOCTYPE html>'+
		'<html>'+
		  '<head>'+
			'<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
			'<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
			'</head>'+
		  '<body>'+
			'<div class="page_cont one">'+
			  '<br class="cbt">'+
			  '<div class="content">'+
		'<div class="float_left">'+tpl+'</div>'+
		'<div class="main_title float_right">'+
		'<span class="title_font">'+ sourceStr[i];
											}
									
									
									} else{
								if(tpl==undefined){
								resultStr +='<!DOCTYPE html>'+
		'<html>'+
		  '<head>'+
			'<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
			'<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
			'</head>'+
		  '<body>'+
			'<div class="page_cont one">'+
			  '<br class="cbt">'+
			  '<div class="content">'+
		'<div class="float_left">'+top_page_list+'</div>'+
		'<div class="main_title float_right">'+
		'<span class="title_font">'+ sourceStr[i];	
													}
									else{
										
																			
							resultStr +='<!DOCTYPE html>'+
		'<html>'+
		  '<head>'+
			'<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">'+
			'<link rel="stylesheet" href="css/style.css"type="text/css"/ '+
			'</head>'+
		  '<body>'+
			'<div class="page_cont one">'+
			  '<br class="cbt">'+
			  '<div class="content">'+
		'<div class="float_left">'+tpl+'</div>'+
		'<div class="main_title float_right">'+
		'<span class="title_font">'+ sourceStr[i];
											}
											}
							 stack.push('TopPage');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,mt,dt,answ,usl,bgind);
																															}
						else if(stack[stack.length-1]=='TopPage'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,mt,dt,answ,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );														
					  break;
					  case 'Image':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'Image'))){
							if(i==0){
							resultStr ='<br><img src="img/'+ sourceStr[i];
									} else{
								resultStr +='<br><img src="img/'+ sourceStr[i];
											}
							 stack.push('Image');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}
						else if(stack[stack.length-1]=='Image'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );														
					  break;
					/*case 'Footer':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'Footer'))){
							if(i==0){
							resultStr ='<div class="footer">'+
        '<span>'+ sourceStr[i];
									} else{
								resultStr +='<div class="footer">'+
        '<span>'+ sourceStr[i];
											}
							 stack.push('Footer');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}
						else if(stack[stack.length-1]=='Footer'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																		
					  break;*/
					 case 'Bold':
					
			console.log( 'stack.length:' +stack.length );
			console.log( 'stack[stack.length-1]:' +stack[stack.length-1] );														
						if ((stack.length == 0) || ((stack.length != 0)&&(stack[stack.length-1]!= 'Bold'))){
							if(i==0){
							resultStr ='<span class="strong">'+ sourceStr[i];
									} else{
								resultStr +='<span class="strong">'+ sourceStr[i];
											}
							 stack.push( 'Bold');
							  console.log( 'resultStr:' + resultStr );	
							  resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}
						else if(stack[stack.length-1]== 'Bold'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );								
					  break;
					  case 'Code':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1] !== 'Code'))){
							if(i==0){
							resultStr='<div class="commands"><pre>'+sourceStr[i];
									} else{
								resultStr+='<div class="commands"><pre>'+sourceStr[i];
											}
						  
						  stack.push('Code');
						 console.log( 'resultStr:' + resultStr );	
																							
					  	 
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}						
						else if(stack[stack.length-1]=='Code'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );			
					 break;
					  case 'Text':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'Text'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left">'+ sourceStr[i];
											}
							
							 stack.push( 'Text');
							  console.log( 'resultStr:' + resultStr );	
																							
								
				resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}				
				else if(stack[stack.length-1]=='Text'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'Listing':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'Listing'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left "><span class="strong ">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left "><span class="strong ">'+ sourceStr[i];
											}
							
							 stack.push( 'Listing');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}						
						else if(stack[stack.length-1]=='Listing'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  /*case 'CBT':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='CBT'))){
							if(i==0){
							resultStr ='<span class="strong">'+ sourceStr[i]
									} else{
								resultStr +='<span class="strong">'+ sourceStr[i]
											}
							;
							 stack.push('CBT');
							  console.log( 'resultStr:' + resultStr );	
																							
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																											}						
						else if(stack[stack.length-1]=='CBT'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );														
					  break;*/
					  case 'Link':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Link'))){
							var x=prompt("Enter a link","");
							if(i==0){
							resultStr ='</span><a  href="'+x+'">'+ sourceStr[i];
									} else{
								resultStr +='</span><a  href="'+x+'">'+ sourceStr[i];
											}
							
							
							 stack.push('Link');
							  console.log( 'resultStr:' + resultStr );	
																							
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																												}						
						else if(stack[stack.length-1]=='Link'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					 /* case 'Main_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'Main_title'))){
							if(i==0){
							resultStr ='</span><div class="main_title">'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="main_title">'+ sourceStr[i];
											}
							
							 stack.push('Main_title');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																														}
						else if(stack[stack.length-1]=='Main_title'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;*/
					  case 'Middle_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Middle_title'))){
							if(i==0){
							resultStr ='</span><span class="middle_title">'+ sourceStr[i];
									} else{
								resultStr +='</span><span class="middle_title">'+ sourceStr[i];
											}
							
							 stack.push('Middle_title');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																														}						
						else if(stack[stack.length-1]=='Middle_title'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);;	
																}
							
								
							
						console.log( 'i:' +i);
						
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'Down_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Down_title'))){
							if(i==0){
							resultStr ='</span><div class="down_title">'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="down_title">'+ sourceStr[i];
											}
							
							 stack.push('Down_title');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																													}						
						else if(stack[stack.length-1]=='Down_title'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'Downpage_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Downpage_title'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left strong">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left strong">'+ sourceStr[i];
											}
							
							 stack.push('Downpage_title');
							  console.log( 'resultStr:' + resultStr );	
																										
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																														}						
						else if(stack[stack.length-1]=='Downpage_title'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'Hot_tip':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Hot_tip'))){
							if(i==0){
							resultStr ='</span><div class="border">'+
					  '<table class="elliptic">'+
						'<tbody>'+
						  '<tr>'+
							'<td class="hotTipLeft">'+
							  '<h1>Hot<br>Tip</h1>'+
							'</td>'+
							'<td class="hotTipRight">'+
							  '<span>'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="border">'+
					  '<table class="elliptic">'+
						'<tbody>'+
						  '<tr>'+
							'<td class="hotTipLeft">'+
							  '<h1>Hot<br>Tip</h1>'+
							'</td>'+
							'<td class="hotTipRight">'+
							  '<span>'+ sourceStr[i];
											}
								 stack.push('Hot_tip');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																												}						
						else if(stack[stack.length-1]=='Hot_tip'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					 
					 case 'Red_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Red_title'))){
							if(i==0){
							resultStr ='</span><div class="title strong"><span>'+ sourceStr[i];
									} else{
								resultStr +='</span><div class="title strong"><span>'+ sourceStr[i];
											}
							 stack.push('Red_title');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																													}						
						else if(stack[stack.length-1]=='Red_title'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );															
					  break;
					  
					 case 'Small_title':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Small_title'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left strong font_size">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left strong font_size">'+ sourceStr[i];
											}
							 stack.push('Small_title');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																													}						
						else if(stack[stack.length-1]=='Small_title'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  
					 case 'Capture':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Capture'))){
							if(i==0){
							resultStr ='</span><br><span class="move_left "><span class="strong underline">'+ sourceStr[i];
									} else{
								resultStr +='</span><br><span class="move_left "><span class="strong underline">'+ sourceStr[i];
											}
							 stack.push('Capture');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																													}						
						else if(stack[stack.length-1]=='Capture'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  
					 case 'Smallicon':
					 
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!== 'Smallicon'))){
							
           
							if(i==0){
							resultStr ='<br><span class="move_left strong">'+sourceStr[i];
									} else{
								resultStr +='<br><span class="move_left strong">'+sourceStr[i];
											}
							
							 stack.push( 'Smallicon');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																													}						
						else if(stack[stack.length-1]=='Smallicon'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );		
						console.log( 'i:' + i);
					  break;
					  
					 case 'Square_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Square_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Square_List');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																													}						
						else if(stack[stack.length-1]=='Square_List'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  
					 case 'Disc_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Disc_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Disc_List');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																													}						
						else if(stack[stack.length-1]=='Disc_List'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'Main_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Main_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Main_List');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																													}
						else if(stack[stack.length-1]=='Main_List'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'None_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='None_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('None_List');
							  console.log( 'resultStr:' + resultStr );	
																								
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																													}						
						else if(stack[stack.length-1]=='None_List'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					  case 'Decimal_List':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Decimal_List'))){
							
                 
				 if(i==0){
							resultStr='<span class=" strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<span class=" strong font_size">'+ sourceStr[i];
											}
							stack.push('Decimal_List');
							  console.log( 'resultStr:' + resultStr );	
																									
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																													}						
						else if(stack[stack.length-1]=='Decimal_List'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
					   case 'Table':
						if ((stack.length == 0) || ((stack.length !== 0)&&(stack[stack.length-1]!=='Table'))){
							
                 
				 if(i==0){
							resultStr='<br><span class="move_left strong font_size">'+ sourceStr[i];
									} else{
								resultStr+='<br><span class="move_left strong font_size">'+ sourceStr[i];
											}
							stack.push('Table');
							  console.log( 'resultStr:' + resultStr );	
																							
								
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																												}						
						else if(stack[stack.length-1]=='Table'){
							i--;
						resultStr = closeTag(sourceStr,resultStr,stack[stack.length-1],x,y,w,t,i,usl,bgind);	
																}
							
								
							
						console.log( 'i:' +i);
						
					if(usl==undefined){
					for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usedLen>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
																	}
				 for (var r=0; r<1; r++){
					 console.log( 'i:' + i );
					if(usl>1){					 
									i++;
									console.log( 'i:' + i );
									}				
													}
					console.log( 'i:' + i );																
					  break;
						
					 default:
					  resultStr +=sourceStr[i];
					  console.log( 'resultStr:' + resultStr );
					 
											}
													}
					//u=i;	
					resultstr.push(resultStr);
					resultStr=resultstr[resultstr.length-1];
					console.log( 'resultStr:' + resultStr );
				return resultStr; 
																
								}
				u=i;			
			function closeTag(sourceStr,resultStr,top,m,g,f,c,q,useLen,begind,answcl,mtcl,dtcl,usl,bgind){
				textarea=document.getElementById("text");
				k=q+1;
				var expressionText =  document.getElementById("text");
				alert("closeTag");
				
				console.log( 'sourceStr:' +sourceStr);
				console.log( 'resultStr:' +resultStr);
				console.log( 'mtcl:' +mtcl);
				console.log( 'dtcl:' +dtcl);
				console.log( 'answcl:' +answcl );
				console.log( 'useLen:' +useLen);
				console.log( 'beginInd:' +begind);
				console.log( 'q:' + q);
				 console.log( 'm:' + m );
				console.log( 'g:' + g );
				console.log( 'f:' + f );
				console.log( 'c:' + c );
				textarea=document.getElementById("text");
		  expressionText =  document.getElementById("text").value ;		
						console.log( 'top:' +top );
		//index=makeString(q);
		if(q==undefined){
			k=u+1;
		}
		console.log( 'k:' + k);
		n=getSymbolTypes(k);
		console.log( 'n:' + n );
console.log( 'expressionText.length:' +expressionText.length );
console.log( 'sourceStr.length:' +sourceStr.length );
				if(k>sourceStr.length){
					n='noSymbolTypes';
										}
					 console.log( 'n:' + n );
					 num=begind+useLen;
					if(begind==undefined){
						num=beginInd+useLen;
										}
					 					 //----------------------------------------------------------------------------------------------------------DownPage--------------------------------------------------------------------------------------------																				
if((top=='DownPage')&&(k>num-1)){
					resultStr +='</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
					} else if((top=='DownPage')&&(n!='DownPage')){
					resultStr +='</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='DownPage')&&(n=='DownPage')&&(k<num-1)){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

			console.log( 'resultStr:' + resultStr );	
			}
			else 	if((top=='DownPage')&&((n=='DownPage')&&(k=num-1))){																	
									resultStr +=sourceStr[k]+'</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
stack.pop();
									console.log( 'resultStr:' + resultStr );
																					}
											 //----------------------------------------------------------------------------------------------------------Image--------------------------------------------------------------------------------------------																				
if((top=='Image')&&(k>num-1)){
					resultStr +='"alt="622">';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
					} else if((top=='Image')&&(n!='Image')){
					resultStr +='"alt="622">';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Image')&&(n=='Image')&&(k<num-1)){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

			console.log( 'resultStr:' + resultStr );	
			}
			else 	if((top=='Image')&&((n=='Image')&&(k=num-1))){																	
									resultStr +=sourceStr[k]+'"alt="622">';
									stack.pop();
									console.log( 'resultStr:' + resultStr );
																					}
					//----------------------------------------------------------------------------------------------------------TopPage--------------------------------------------------------------------------------------------																				
if((top=='TopPage')&&(k>num-1)){
					//var down_title=prompt("Enter down_title","");
   //var x=prompt("is middle_title exist?(yes or no)","");
   if(answcl==undefined){
	 if(answer=="yes"){
		//var middle_title=prompt("Enter middle_title","");																
					resultStr +='</span>'+
		'<span class="middle_title">'+middle_title+'</span>'+
		'</div>'+
					'<div>'+
					  '<div class="down_title ">'+down_title+'</span>'+
					  '</div>'+
					'</div>';
						}
else{
	resultStr +='</span>'+
	'</div>'+
				'<div>'+
				  '<div class="down_title ">'+
					'<span class="strong">'+down_title+'</span>'+
				  '</div>'+
				'</div>';
	}  
   
							}else{
if(answcl=="yes"){
		//var middle_title=prompt("Enter middle_title","");																
					resultStr +='</span>'+
		'<span class="middle_title">'+mtcl+'</span>'+
		'</div>'+
					'<div>'+
					  '<div class="down_title ">'+
						'<span class="strong">'+dtcl+'</span>'+
					  '</div>'+
					'</div>';
			}
else{
	resultStr +='</span>'+
	'</div>'+
				'<div>'+
				  '<div class="down_title ">'+
					'<span class="strong">'+dtcl+'</span>'+
				  '</div>'+
				'</div>';
	}
									}
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
					} else if((top=='TopPage')&&(n!='TopPage')){
					//var down_title=prompt("Enter down_title","");
   //var x=prompt("is middle_title exist?(yes or no)","");
   if(answcl==undefined){
	 if(answer=="yes"){
		//var middle_title=prompt("Enter middle_title","");																
					resultStr +='</span>'+
		'<span class="middle_title">'+middle_title+'</span>'+
		'</div>'+
					'<div>'+
					  '<div class="down_title ">'+down_title+'</span>'+
					  '</div>'+
					'</div>';
						}
else{
	resultStr +='</span>'+
	'</div>'+
				'<div>'+
				  '<div class="down_title ">'+
					'<span class="strong">'+down_title+'</span>'+
				  '</div>'+
				'</div>';
	}  
   
							}else{
if(answcl=="yes"){
		//var middle_title=prompt("Enter middle_title","");																
					resultStr +='</span>'+
		'<span class="middle_title">'+mtcl+'</span>'+
		'</div>'+
					'<div>'+
					  '<div class="down_title ">'+
						'<span class="strong">'+dtcl+'</span>'+
					  '</div>'+
					'</div>';
			}
else{
	resultStr +='</span>'+
	'</div>'+
				'<div>'+
				  '<div class="down_title ">'+
					'<span class="strong">'+dtcl+'</span>'+
				  '</div>'+
				'</div>';
	}
									}
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='TopPage')&&(n=='TopPage')&&(k<num-1)){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

			console.log( 'resultStr:' + resultStr );	
																						}
			else 	if((top=='TopPage')&&((n=='TopPage')&&(k=num-1))){																	
									if(answcl==undefined){
	 if(answer=="yes"){
		//var middle_title=prompt("Enter middle_title","");																
					resultStr +=sourceStr[k]+'</span>'+
		'<span class="middle_title">'+middle_title+'</span>'+
		'</div>'+
					'<div>'+
					  '<div class="down_title ">'+down_title+'</span>'+
					  '</div>'+
					'</div>';
			}
else{
	resultStr +=sourceStr[k]+'</span>'+
	'</div>'+
				'<div>'+
				  '<div class="down_title ">'+
					'<span class="strong">'+down_title+'</span>'+
				  '</div>'+
				'</div>';
	}  
   
							}else{
if(answcl=="yes"){
		//var middle_title=prompt("Enter middle_title","");																
					resultStr +=sourceStr[k]+'</span>'+
		'<span class="middle_title">'+mtcl+'</span>'+
		'</div>'+
					'<div>'+
					  '<div class="down_title ">'+
						'<span class="strong">'+dtcl+'</span>'+
					  '</div>'+
					'</div>';
			}
else{
	resultStr +=sourceStr[k]+'</span>'+
	'</div>'+
				'<div>'+
				  '<div class="down_title ">'+
					'<span class="strong">'+dtcl+'</span>'+
				  '</div>'+
				'</div>';
	}
									}
									stack.pop();
									console.log( 'resultStr:' + resultStr );
																							}		
					 //----------------------------------------------------------------------------------------------------------Footer--------------------------------------------------------------------------------------------																				

					/*if((top=='Footer')&&(k>num-1)){
					resultStr +='</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top ); 
				} else if((top=='Footer')&&(n!='Footer')){
					resultStr +='</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Footer')&&(n=='Footer')&&(k<num-1)){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

			console.log( 'resultStr:' + resultStr );	
			}
			else 	if((top=='Footer')&&((n=='Footer')&&(k=num-1))){																	
									resultStr +=sourceStr[k]+'</span>'+
      '</div>'+
    '</div>'+  
  '</body>'+
'</html>';
stack.pop();
									console.log( 'resultStr:' + resultStr );
																					}*/
//----------------------------------------------------------------------------------------------------------Bold--------------------------------------------------------------------------------------------																				
										
										console.log( 'num:' +num);	
if((top=='Bold')&&(k>num-1)){
											console.log( 'boldIndexes.length:' + boldIndexes.length);
					resultStr +='</span>';
										stack.pop();
				console.log( 'top:' +top );										
										} else if((top=='Bold')&&(n!='Bold')){
											console.log( 'boldIndexes.length:' + boldIndexes.length);
					resultStr +='</span>';
										stack.pop();
				console.log( 'top:' +top );
																	}
				 else 	if((top=='Bold')&&((n=='Bold')&&(k<num-1))){
					 console.log( 'boldIndexes.length:' + boldIndexes.length);
		resultStr +=sourceStr[k];
		//q++;
		console.log( 'q:' + q);
		console.log( 'resultStr:' + resultStr );

																				}
						else 	if((top=='Bold')&&((n=='Bold')&&(k=num-1))){	
						console.log( 'boldIndexes.length:' + boldIndexes.length);
									resultStr +=sourceStr[k]+'</span>';
									//q++;
									console.log( 'q:' + q);
									stack.pop();
									console.log( 'resultStr:' + resultStr );
																						}
 //----------------------------------------------------------------------------------------------------------Code--------------------------------------------------------------------------------------------																				
																					
					console.log( 'q:' + q);	
if((top=='Code')&&(k>num-1)){
			resultStr+='</pre></div>';
			console.log( 'resultStr:' + resultStr );
					  stack.pop();					
		} else if((top=='Code')&&(n!='Code')){
			resultStr+='</pre></div>';
			console.log( 'resultStr:' + resultStr );
					  stack.pop();
																	 
		}else if((top=='Code')&&(n=='Code')&&(k<num-1)){
		resultStr +=sourceStr[k];
		
		console.log( 'resultStr:' + resultStr );
				}
				else 	if((top=='Code')&&((n=='Code')&&(k=num-1))){																	
									resultStr +=sourceStr[k]+'</pre></div>';
									console.log( 'resultStr:' + resultStr );
									stack.pop();
																						}
//----------------------------------------------------------------------------------------------------------Text--------------------------------------------------------------------------------------------																				
		if((top=='Text')&&(k>num-1)){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );														
				} else if((top=='Text')&&(n!='Text')){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Text')&&((n=='Text')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
								else 	if((top=='Text')&&((n=='Text')&&(k=num-1))){																	
											resultStr +=sourceStr[k]+'</span>';
											stack.pop();
											console.log( 'resultStr:' + resultStr );
																								}
//----------------------------------------------------------------------------------------------------------Listing--------------------------------------------------------------------------------------------																				
 if((top=='Listing')&&(k>num-1)){
					resultStr +='</span></span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Listing')&&(n!='Listing')){
					resultStr +='</span></span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Listing')&&((n=='Listing')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Listing')&&((n=='Listing')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span></span>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																										}
//----------------------------------------------------------------------------------------------------------Link--------------------------------------------------------------------------------------------																				
if((top=='Link')&&(k>num-1)){
					resultStr +='</a><span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Link')&&(n!='Link')){
					resultStr +='</a><span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Link')&&((n=='Link')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Link')&&((n=='Link')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</a><span>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																							}
//----------------------------------------------------------------------------------------------------------Main_title--------------------------------------------------------------------------------------------																				
/*if((top=='Main_title')&&(k>num-1)){
					resultStr +='</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Main_title')&&(n!='Main_title')){
					resultStr +='</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Main_title')&&((n=='Main_title')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Main_title')&&((n=='Main_title')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</div>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																												}*/
//----------------------------------------------------------------------------------------------------------Middle_title--------------------------------------------------------------------------------------------																				
if((top=='Middle_title')&&(k>num-1)){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Middle_title')&&(n!='Middle_title')){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Middle_title')&&((n=='Middle_title')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Middle_title')&&((n=='Middle_title')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																													}
//---------------------------------------------------------------------------------------------------------Down_title--------------------------------------------------------------------------------------------																				
if((top=='Down_title')&&(k>num-1)){
					resultStr +='</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Down_title')&&(n!='Down_title')){
					resultStr +='</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Down_title')&&((n=='Down_title')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Down_title')&&((n=='Down_title')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</div>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																												}
//---------------------------------------------------------------------------------------------------------Downpage_title--------------------------------------------------------------------------------------------																				
if((top=='Downpage_title')&&(k>num-1)){
					resultStr +='</span><br>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Downpage_title')&&(n!='Downpage_title')){
					resultStr +='</span><br>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Downpage_title')&&((n=='Downpage_title')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Downpage_title')&&((n=='Downpage_title')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span><br>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																															}
//---------------------------------------------------------------------------------------------------------Hot_tip--------------------------------------------------------------------------------------------																				
		if((top=='Hot_tip')&&(k>num-1)){
					resultStr +='</span>'+
							'</td>'+
						  '</tr>'+
						'</tbody>'+
					  '</table>'+
					  '<br class="cbt">'+
					'</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );																													
				} else if((top=='Hot_tip')&&(n!='Hot_tip')){
					resultStr +='</span>'+
							'</td>'+
						  '</tr>'+
						'</tbody>'+
					  '</table>'+
					  '<br class="cbt">'+
					'</div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Hot_tip')&&((n=='Hot_tip')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Hot_tip')&&((n=='Hot_tip')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span>'+
							'</td>'+
						  '</tr>'+
						'</tbody>'+
					  '</table>'+
					  '<br class="cbt">'+
					'</div>';
					stack.pop();
										console.log( 'resultStr:' + resultStr );
																										}
//---------------------------------------------------------------------------------------------------------Red_title--------------------------------------------------------------------------------------------																				
if((top=='Red_title')&&(k>num-1)){
					resultStr +='</span></div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Red_title')&&(n!='Red_title')){
					resultStr +='</span></div>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Red_title')&&((n=='Red_title')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Red_title')&&((n=='Red_title')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span></div>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																											}
//---------------------------------------------------------------------------------------------------------Small_title--------------------------------------------------------------------------------------------																				
if((top=='Small_title')&&(k>num-1)){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Small_title')&&(n!='Small_title')){
					resultStr +='</span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Small_title')&&((n=='Small_title')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Small_title')&&((n=='Small_title')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																													}
//---------------------------------------------------------------------------------------------------------Capture--------------------------------------------------------------------------------------------																				
	if((top=='Capture')&&(k>num-1)){
					resultStr +='</span></span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );																					
				} else if((top=='Capture')&&(n!='Capture')){
					resultStr +='</span></span>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Capture')&&((n=='Capture')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Capture')&&((n=='Capture')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span></span>';
										stack.pop();
										console.log( 'resultStr:' + resultStr );
																										}
//---------------------------------------------------------------------------------------------------------Smallicon--------------------------------------------------------------------------------------------																				
if((top=='Smallicon')&&(k>num-1)){
					resultStr +='</span><br><br><img src="img/'+c+'"alt="622" class="textwrap smallicon">';
					if(c==undefined){
						resultStr +='</span><br><br><img src="img/'+image_name+'"alt="622" class="textwrap smallicon">';
									
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
									}
				} else if((top=='Smallicon')&&(n!='Smallicon')){
					resultStr +='</span><br><br><img src="img/'+c+'"alt="622" class="textwrap smallicon">';
					if(c==undefined){
						resultStr +='</span><br><br><img src="img/'+image_name+'"alt="622" class="textwrap smallicon">';
									
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
									}
				} else 	if((top=='Smallicon')&&((n=='Smallicon')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Smallicon')&&((n=='Smallicon')&&(k=num-1))){	
							console.log( 'q:' + q);	
										resultStr +=sourceStr[k]+'</span><br><br><img src="img/'+c+'"alt="622" class="textwrap smallicon">';
										if(c==undefined){
						resultStr +=sourceStr[k]+'</span><br><br><img src="img/'+image_name+'"alt="622" class="textwrap smallicon">';
														}
														stack.pop();
										console.log( 'resultStr:' + resultStr );
																											}
//---------------------------------------------------------------------------------------------------------Square_List--------------------------------------------------------------------------------------------																				
if((top=='Square_List')&&(k>num-1)){
					resultStr +='</span><ul class="square">';
					
for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ul>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Square_List')&&(n!='Square_List')){
					resultStr +='</span><ul class="square">';
					
for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ul>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Square_List')&&((n=='Square_List')&&(k<num-1))){
		resultStr +=resultStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Square_List')&&((n=='Square_List')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span><ul class="square">';
										for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ul>';
			stack.pop();
										console.log( 'resultStr:' + resultStr );
																													}
//---------------------------------------------------------------------------------------------------------Disc_List--------------------------------------------------------------------------------------------																				
if((top=='Disc_List')&&(k>num-1)){
					resultStr +='</span><ol class="disc">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
               resultStr += '</ol>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Disc_List')&&(n!='Disc_List')){
					resultStr +='</span><ol class="disc">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
               resultStr += '</ol>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Disc_List')&&((n=='Disc_List')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Disc_List')&&((n=='Disc_List')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span><ol class="disc">';
										for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
               resultStr += '</ol>';
			   stack.pop();
										console.log( 'resultStr:' + resultStr );
																											}
//---------------------------------------------------------------------------------------------------------Main_List--------------------------------------------------------------------------------------------																				
if((top=='Main_List')&&(k>num-1)){
					resultStr +='</span><ul class="top_page_list">';
                    for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
            resultStr+='</ul>';
             	
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Main_List')&&(n!='Main_List')){
					resultStr +='</span><ul class="top_page_list">';
                    for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
            resultStr+='</ul>';
             	
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Main_List')&&((n=='Main_List')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Main_List')&&((n=='Main_List')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span><ul class="top_page_list">';
										 for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
            resultStr+='</ul>';
			stack.pop();
										console.log( 'resultStr:' + resultStr );
																											}
//---------------------------------------------------------------------------------------------------------None_List--------------------------------------------------------------------------------------------																				
if((top=='None_List')&&(k>num-1)){
					resultStr +='</span><ul class="none_list">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+= '</ul>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='None_List')&&(n!='None_List')){
					resultStr +='</span><ul class="none_list">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+= '</ul>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='None_List')&&((n=='None_List')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='None_List')&&((n=='None_List')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span><ul class="none_list">';
										for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+= '</ul>';
			stack.pop();
										console.log( 'resultStr:' + resultStr );
																											}
//--------------------------------------------------------------------------------------------------------Decimal_List--------------------------------------------------------------------------------------------																				
if((top=='Decimal_List')&&(k>num-1)){
					resultStr +='</span><ol class="decimal">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ol>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				} else if((top=='Decimal_List')&&(n!='Decimal_List')){
					resultStr +='</span><ol class="decimal">';
					for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ol>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Decimal_List')&&((n=='Decimal_List')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

														}
							else 	if((top=='Decimal_List')&&((n=='Decimal_List')&&(k=num-1))){																	
										resultStr +=sourceStr[k]+'</span><ol class="decimal">';
										for(var i=0;i<m;i++){
	 console.log( 'm:' + m );
resultStr+='<li>'+g[i]+'</li>';
console.log( 'g[i]:' + g[i] );
 					}
					if(m==undefined){
					for(var i=0;i<number;i++){
	resultStr+='<li>'+arr[i]+'</li>';
console.log( 'arr[i]:' +arr[i] );
 					}
									}
			resultStr+='</ol>';
			stack.pop();
										console.log( 'resultStr:' + resultStr );
																														}
//--------------------------------------------------------------------------------------------------------Table--------------------------------------------------------------------------------------------																				
				if((top=='Table')&&(k>num-1)){
					resultStr +='</span><table class="syntax_description"><tbody>';
					for(var j = 0; j <m;j++){
						
						resultStr+='<tr>';
						if(j == 0){
					for(var i=0;i<f;i++){
	 console.log( 'f:' + f );
resultStr+='<th>'+g[i]+'</th>';
console.log( 'g[i]:' + g[i] );
 					 }
					 console.log( 'i:' + i );
  }
  else if(j>0){
	 
	   console.log( 'i:' + i );
	 for(var t=0;t<f;t++){
		 
	 console.log( 'f:' + f );
resultStr+='<td>'+g[i]+'</td>';
 i++;
							}
		}
		resultStr+='</tr>';
														}
					if(m==undefined){
					for(var j = 0; j <number;j++){
						resultStr+='<tr>';
						if(j == 0){
					for(var i=0;i<numbercol;i++){
	 console.log( 'numbercol:' +numbercol );
resultStr+='<th>'+arr[i]+'</th>';
console.log( 'g[i]:' +arr[i] );
 					 }
  }
  else if(j>0){
	  for(var t=0;t<numbercol;t++){
	 console.log( 'numbercol:' +number );
resultStr+='<td>'+arr[i]+'</td>';
 i++;
							}
									}
			resultStr+='</tr>';
															}
										}
			resultStr+='</tbody></table>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );																										
				} else if((top=='Table')&&(n!='Table')){
					resultStr +='</span><table class="syntax_description"><tbody>';
					for(var j = 0; j <m;j++){
						
						resultStr+='<tr>';
						if(j == 0){
					for(var i=0;i<f;i++){
	 console.log( 'f:' + f );
resultStr+='<th>'+g[i]+'</th>';
console.log( 'g[i]:' + g[i] );
 					 }
					 console.log( 'i:' + i );
  }
  else if(j>0){
	 
	   console.log( 'i:' + i );
	 for(var t=0;t<f;t++){
		 
	 console.log( 'f:' + f );
resultStr+='<td>'+g[i]+'</td>';
 i++;
							}
		}
		resultStr+='</tr>';
														}
					if(m==undefined){
					for(var j = 0; j <number;j++){
						resultStr+='<tr>';
						if(j == 0){
					for(var i=0;i<numbercol;i++){
	 console.log( 'numbercol:' +numbercol );
resultStr+='<th>'+arr[i]+'</th>';
console.log( 'g[i]:' +arr[i] );
 					 }
  }
  else if(j>0){
	  for(var t=0;t<numbercol;t++){
	 console.log( 'numbercol:' +number );
resultStr+='<td>'+arr[i]+'</td>';
 i++;
							}
									}
			resultStr+='</tr>';
															}
										}
			resultStr+='</tbody></table>';
					 console.log( 'resultStr:' + resultStr );
					stack.pop();
				console.log( 'top:' +top );
				
				} else 	if((top=='Table')&&((n=='Table')&&(k<num-1))){
		resultStr +=sourceStr[k];
		console.log( 'resultStr:' + resultStr );

																					}
						else 	if((top=='Table')&&((n=='Table')&&(k=num-1))){																	
									resultStr +=sourceStr[k]+'</span><table class="syntax_description"><tbody>';
									for(var j = 0; j <m;j++){

										resultStr+='<tr>';
										if(j == 0){
									for(var i=0;i<f;i++){
					 console.log( 'f:' + f );
				resultStr+='<th>'+g[i]+'</th>';
				console.log( 'g[i]:' + g[i] );
									 }
									 console.log( 'i:' + i );
				  }
				  else if(j>0){
					 
					   console.log( 'i:' + i );
					 for(var t=0;t<f;t++){
						 
					 console.log( 'f:' + f );
				resultStr+='<td>'+g[i]+'</td>';
				 i++;
											}
						}
						resultStr+='</tr>';
																		}
									if(m==undefined){
									for(var j = 0; j <number;j++){
										resultStr+='<tr>';
										if(j == 0){
									for(var i=0;i<numbercol;i++){
					 console.log( 'numbercol:' +numbercol );
				resultStr+='<th>'+arr[i]+'</th>';
				console.log( 'g[i]:' +arr[i] );
									 }
				  }
				  else if(j>0){
					  for(var t=0;t<numbercol;t++){
					 console.log( 'numbercol:' +number );
				resultStr+='<td>'+arr[i]+'</td>';
				 i++;
											}
													}
							resultStr+='</tr>';
																			}
														}
							resultStr+='</tbody></table>';
stack.pop();
															console.log( 'resultStr:' + resultStr );
																							}														
		console.log( 'q:' + q);	
		console.log( 'stack.length:' +stack.length );		
	return 	resultStr;								
		}
				 
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------
				 

			
			
			function makeCBTStringHtml(sourceStr){
				//resultstr.pop();
				alert(" makeCBTStringHtml");
		   textarea=document.getElementById("text");
		    var expressionText=  document.getElementById("text").value; 
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            var currentSymbolIndex = 0;
			var CBTresultStr =" ";
            var usedSymbols = 0;
            resultStr += '</span><br class="cbt">';
//resultstr.push(resultStr);
//resultStr=resultstr[resultstr.length-1];
            return resultStr;
													}

			
			
			
			
            function getElementsById(elementID){
    var elementCollection = new Array();
    var allElements = document.getElementsByTagName("*");
    for(i = 0; i < allElements.length; i++){
       if(allElements[i].id == elementID)
           elementCollection.push(allElements[i]);
											}
   return elementCollection;
												};
function hide(obj) {
    obj.style.display = 'none';
					}
function show(obj) {
    obj.style.display = 'initial';
					}
function isHidden(obj) {
    return (obj.style.display == 'none')
						}
     
            var html_res_array = getElementsById('RESULTHTML');
            var text_res_array = getElementsById('RESULTTEXT');
            function PurgeRedoSequence()
{
     html_res_array = getElementsById('RESULTHTML');
     text_res_array = getElementsById('RESULTTEXT');
   
    for (var i = 0; i < html_res_array.length; i++)
    {
        if (isHidden(html_res_array[i])) {
            html_res_array[i].parentNode.removeChild(html_res_array[i]);
            text_res_array[i].parentNode.removeChild(text_res_array[i]);
										}
    }
}
var historyIndexMax = 0;
var historyIndex = 0;
function operation(RESULTTEXT, RESULTTEXT) {
    //alert(" index == " + historyIndex + "; length == " + historyIndexMax);
    historyIndexMax = historyIndex + 1;
    historyIndex++;
    if (historyIndex > 0) {(document.getElementById('undo')).disabled ='';} else {(document.getElementById('undo')).disabled ='disabled';}
    if (historyIndex == historyIndexMax) {(document.getElementById('redo')).disabled ='disabled';} else {(document.getElementById('redo')).disabled ='';}
    if ((historyIndex ==0)&&(historyIndexMax==0)) {(document.getElementById('redo')).disabled ='disabled';(document.getElementById('undo')).disabled ='disabled';}
    //alert('Op done!');
};
            function Make(){
    PurgeRedoSequence();
operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
document.getElementById("RESULTTEXT").designMode='on';
document.getElementById("RESULTHTML").designMode='on';
document.getElementById("RESULTTEXT").contentEditable = true; void(0);
document.getElementById("RESULTHTML").contentEditable = true; void(0);
							}

			function Code(usl,bgind)
            {
             
             textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                codeIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(codeIndexes);
                for (var i = 0; i < codeIndexes.length; i++){
                    var beginIndex = codeIndexes[i].startPosition;
                    var endIndex = codeIndexes[i].endPosition;
															}
					beginInd=beginIndex;										
                codeIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i < codeIndexes.length; i++){  
            console.log(codeIndexes[i].startPosition + " " + codeIndexes[i].size);
													}
             codeIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
				console.log( 'codeIndexes.length:' + codeIndexes.length);								
                console.log('aggregated array:');
        for (var i =0; i < codeIndexes.length; i++){  
            console.log(codeIndexes[i].startPosition + " " + codeIndexes[i].size);
			usedLength=codeIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;  
			var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			
			 function Listing(usl,bgind)
            {
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
              document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                listingIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(listingIndexes);
                for (var i = 0; i < listingIndexes.length; i++){
                    var beginIndex = listingIndexes[i].startPosition;
                    var endIndex = listingIndexes[i].endPosition;
																}
					beginInd=beginIndex;											
                listingIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
													});
                console.log('aggregated array:');
        for (var i =0; i < listingIndexes.length; i++){  
            console.log(listingIndexes[i].startPosition + " " + listingIndexes[i].size);
														}
             listingIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
				console.log( 'listingIndexes.length:' + listingIndexes.length);								
                console.log('aggregated array:');
        for (var i =0; i < listingIndexes.length; i++){  
            console.log(listingIndexes[i].startPosition + " " + listingIndexes[i].size);
			usedLength=listingIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;   
			var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Capture(usl,bgind)
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
			expressionText =( document.getElementById("text").value ); 
            //expressionText =  document.getElementById("text").value;
           document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                captureIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(captureIndexes);
                for (var i = 0; i < captureIndexes.length; i++){
                    var beginIndex = captureIndexes[i].startPosition;
                    var endIndex = captureIndexes[i].endPosition;
																}
					beginInd=beginIndex;											
                captureIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
													});
                console.log('aggregated array:');
        for (var i =0; i < captureIndexes.length; i++){  
            console.log(captureIndexes[i].startPosition + " " + captureIndexes[i].size);
														}
            captureIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
				console.log( 'captureIndexes.length:' + captureIndexes.length);								
                console.log('aggregated array:');
        for (var i =0; i < captureIndexes.length; i++){  
            console.log(captureIndexes[i].startPosition + " " + captureIndexes[i].size);
			usedLength=captureIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;   
			var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}

			function CBT(usl,bgind)
            {
             alert("CBT");  
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                /*cbtIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(cbtIndexes);
                for (var i = 0; i < cbtIndexes.length; i++){
                    var beginIndex = cbtIndexes[i].startPosition;
                    var endIndex = cbtIndexes[i].endPosition;
															}
                cbtIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i < cbtIndexes.length; i++){  
            console.log(cbtIndexes[i].startPosition + " " + cbtIndexes[i].size);
													}*/
               var resultStr=makeCBTStringHtml(expressionText);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
			function Link(usl,bgind)
            {
             var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                linkIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(linkIndexes);
                for (var i = 0; i < linkIndexes.length; i++){
                    var beginIndex = linkIndexes[i].startPosition;
                    var endIndex = linkIndexes[i].endPosition;
															}
					beginInd=beginIndex;										
                linkIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i < linkIndexes.length; i++){  
            console.log(linkIndexes[i].startPosition + " " + linkIndexes[i].size);
													usedLength=linkIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
             var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}					
			
			function Middle_Title(usl,bgind)
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                middle_titleIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(middle_titleIndexes );
                for (var i = 0; i < middle_titleIndexes.length; i++){
                    var beginIndex = middle_titleIndexes[i].startPosition;
                    var endIndex = middle_titleIndexes[i].endPosition;
																	}
					beginInd=beginIndex;												
                middle_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
														});
                console.log('aggregated array:');
        for (var i =0; i < middle_titleIndexes.length; i++){  
            console.log(middle_titleIndexes[i].startPosition + " " + middle_titleIndexes[i].size);
										usedLength=middle_titleIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
                  var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Down_title(usl,bgind)
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                down_titleIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(down_titleIndexes);
                for (var i = 0; i < down_titleIndexes.length; i++){
                    var beginIndex = down_titleIndexes[i].startPosition;
                    var endIndex = down_titleIndexes[i].endPosition;
																	}
					beginInd=beginIndex;												
                down_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
													});
                console.log('aggregated array:');
        for (var i =0; i < down_titleIndexes.length; i++){  
            console.log(down_titleIndexes[i].startPosition + " " + down_titleIndexes[i].size);
								usedLength=down_titleIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
                  var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Red_title(usl,bgind)
			{
             alert("Red_title");
var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
	var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
	var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
	red_titleIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
	AggregateSelection(red_titleIndexes);
	for (var i = 0; i < red_titleIndexes.length; i++){
		var beginIndex = red_titleIndexes[i].startPosition;
		var endIndex = red_titleIndexes[i].endPosition;
													}
		beginInd=beginIndex;											
	red_titleIndexes.sort(function(a,b) {
	return a.startPosition - b.startPosition;
										});
	console.log('aggregated array:');
for (var i =0; i < red_titleIndexes.length; i++){  
console.log(red_titleIndexes[i].startPosition + " " + red_titleIndexes[i].size);
							usedLength=red_titleIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
	  var TopresultStr=makeString(expressionText,usedLength,beginIndex);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();
}
			function Small_title(usl,bgind)
			{
 
var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
	var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
	var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
	small_titleIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
	AggregateSelection(small_titleIndexes);
	for (var i = 0; i < small_titleIndexes.length; i++){
		var beginIndex = small_titleIndexes[i].startPosition;
		var endIndex = small_titleIndexes[i].endPosition;
														}
		beginInd=beginIndex;												
	small_titleIndexes.sort(function(a,b) {
	return a.startPosition - b.startPosition;
											});
	console.log('aggregated array:');
for (var i =0; i < small_titleIndexes.length; i++){  
console.log(small_titleIndexes[i].startPosition + " " + small_titleIndexes[i].size);
								usedLength=small_titleIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
	  var resultStr=makeString(expressionText,usedLength,beginIndex);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();
}
			function Hot_Tip(usl,bgind)
			{
 
var textarea=document.getElementById("text");
document.getElementById("text").focus();
expressionText =  document.getElementById("text").value;
 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
	var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
	var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
	hot_tipIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
	AggregateSelection(hot_tipIndexes);
	for (var i = 0; i < hot_tipIndexes.length; i++){
		var beginIndex = hot_tipIndexes[i].startPosition;
		var endIndex = hot_tipIndexes[i].endPosition;
													}
		beginInd=beginIndex;											
	hot_tipIndexes.sort(function(a,b) {
	return a.startPosition - b.startPosition;
										});
	console.log('aggregated array:');
for (var i =0; i < hot_tipIndexes.length; i++){  
console.log(hot_tipIndexes[i].startPosition + " " + hot_tipIndexes[i].size);
							usedLength=hot_tipIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
	 var resultStr=makeString(expressionText,usedLength,beginIndex);

	document.getElementById("RESULTTEXT").innerText=resultStr;
	document.getElementById("RESULTHTML").innerHTML=resultStr;
	Make();
}
			
			var txt=0;
			var dtxt=0;
			var n=0;
			var dn=0;
			function Down(dtxt, dn,darr,usl,bgind)
			{
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
				down_pageIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
	AggregateSelection(down_pageIndexes);
	for (var i = 0; i < down_pageIndexes.length; i++){
		var beginIndex = down_pageIndexes[i].startPosition;
		var endIndex = down_pageIndexes[i].endPosition;
													}
		beginInd=beginIndex;											
	down_pageIndexes.sort(function(a,b) {
	return a.startPosition - b.startPosition;
									});
	console.log('aggregated array:');
for (var i =0; i < down_pageIndexes.length; i++){  
console.log(down_pageIndexes[i].startPosition + " " + down_pageIndexes[i].size);
										usedLength=down_pageIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
		
 if(n!=null){
						n=prompt("Enter a count of columns","");	
						dn=n;
						console.log( 'n:' +n );
								}
					
         
					for(var i=0;i<dn;i++){
						console.log( 'dn:' +dn);
						dtext=prompt("Enter txt","");
						arr.push(dtext);
						console.log( 'arr:' +arr );
											}
												
if(txt!=null){
						txt=prompt("Enter text","");	
						dtxt=txt;
						console.log( 'txt:' +txt);
								}
               var resultStr=makeString(expressionText,txt,n, arr,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			
			dtxt=txt;
			 dn=n;
			var top_page_list=0;
			var topl=0;
			var down_title=0;
			var dtl=0;
			var middle_title=0;
			var mtl=0;
			var answer=0;
			var answr=0;
			function Top(tpl,mt,dt,answ,usl,bgind)
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
               top_pageIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(top_pageIndexes);
                for (var i = 0; i < top_pageIndexes.length; i++){
                    var beginIndex = top_pageIndexes[i].startPosition;
                    var endIndex = top_pageIndexes[i].endPosition;
															}
					beginInd=beginIndex;										
                top_pageIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i < top_pageIndexes.length; i++){  
            console.log(top_pageIndexes[i].startPosition + " " + top_pageIndexes[i].size);
									usedLength=top_pageIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
						if(topl!=null){
						topl=prompt("Enter top_page_list","");
						top_page_list=topl;
						console.log( 'topl:'+topl);
								}
								
		if(answr!=null){
						answr=prompt("is middle_title exist?(yes or no)","");	
						answer=answr;
						console.log( 'answr:' +answr);
								}
		if(mtl!=null){
						mtl=prompt("Enter middle_title","");	
						middle_title=mtl;
						console.log( 'mtl:' +mtl);
								}
								if(dtl!=null){
						dtl=prompt("Enter down_title","");	
						down_title=dtl;
						console.log( 'dtl:' +dtl);
								}
								
			 var resultStr=makeString(expressionText,topl,mtl,dtl,answr,usedLength,beginIndex);
            document.getElementById("RESULTTEXT").innerText=resultStr;
            document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			top_page_list=topl;
			middle_title=mtl;
			down_title=dtl;
			answer=answr;			
			function Main_List(x,y,usl,bgind)
            {
             
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
               var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 main_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection( main_listIndexes);
                for (var i = 0; i < main_listIndexes.length; i++){
                    var beginIndex = main_listIndexes[i].startPosition;
                    var endIndex = main_listIndexes[i].endPosition;
															}
					beginInd=beginIndex;										
                main_listIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i <main_listIndexes.length; i++){  
            console.log(main_listIndexes[i].startPosition + " " +main_listIndexes[i].size);
									usedLength=main_listIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
                if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
		
			function None_List(x,y,usl,bgind)
            {
              var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            var expression = getSelectiontextarea( document.getElementById("text") );
			document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
            var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 none_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection( none_listIndexes);
                for (var i = 0; i < none_listIndexes.length; i++){
                    var beginIndex = none_listIndexes[i].startPosition;
                    var endIndex = none_listIndexes[i].endPosition;
															}
					beginInd=beginIndex;
					 none_listIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i <none_listIndexes.length; i++){  
            console.log(none_listIndexes[i].startPosition + " " +none_listIndexes[i].size);
									usedLength=none_listIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
                if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();;
			}
			function Decimal_List(x,y,usl,bgind)
            {
              var expressionText =  document.getElementById("text").value;
			document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            var expression = getSelectiontextarea( document.getElementById("text") );
            document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
               var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 decimal_listIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection( decimal_listIndexes);
                for (var i = 0; i < decimal_listIndexes.length; i++){
                    var beginIndex = decimal_listIndexes[i].startPosition;
                    var endIndex = decimal_listIndexes[i].endPosition;
															}
					beginInd=beginIndex;
					 decimal_listIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i <decimal_listIndexes.length; i++){  
            console.log(decimal_listIndexes[i].startPosition + " " +decimal_listIndexes[i].size);
									usedLength=decimal_listIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
               if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
					
					for(var i=0;i<number;i++){
						console.log( 'number:' +number );
						text=prompt("Enter a text for  <li>","");
						arr.push(text);
						console.log( 'arr:' +arr );
											}					
														
					var resultStr=makeString(expressionText,l,arr,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}	
	var col=0;
	
			 var number=0;
			var arr=[];
			function Table(x,y,z,usl,bgind)
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
             expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
				tableIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(tableIndexes);
                for (var i = 0; i <tableIndexes.length; i++){
                    var beginIndex =tableIndexes[i].startPosition;
                    var endIndex =tableIndexes[i].endPosition;
															}
					beginInd=beginIndex;
					 tableIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i <tableIndexes.length; i++){  
            console.log(tableIndexes[i].startPosition + " " +tableIndexes[i].size);
									usedLength=tableIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
                if(l!=null){
						l=prompt("Enter a count of row","");	
						number=l;
						console.log( 'l:' + l );
								}
								if(col!=null){
									col=prompt("Enter a count of columns","");	
									numbercol=col;
									console.log( 'col:' +col );
											}
					
					for(var i=0;i<number*numbercol;i++){
						console.log( 'number:' +number );
						text = prompt("Enter text", "");
						arr.push(text);
						console.log( 'arr:' +arr );
											}	
											
														
					var resultStr=makeString(expressionText,l,col,arr);
				
                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			number=l;
			var s=0;
			var image_name=0;
			numbercol=col;
			function Smallicon(t,usl,bgind)
            {
            
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
           expressionText =  document.getElementById("text").value;
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
				var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
				smalliconIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(smalliconIndexes);
                for (var i = 0; i <smalliconIndexes.length; i++){
                    var beginIndex =smalliconIndexes[i].startPosition;
                    var endIndex =smalliconIndexes[i].endPosition;
															}
					beginInd=beginIndex;
					 smalliconIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i <smalliconIndexes.length; i++){  
            console.log(smalliconIndexes[i].startPosition + " " +smalliconIndexes[i].size);
									usedLength=smalliconIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength; 
															 if(s!=null){
						s=prompt("Enter a name of image","");	
						image_name=s;
						console.log( 's:' + s );
								}
                 var resultStr=makeString(expressionText,s,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}  
			image_name=s;
			function Reundo() {
    var html_res_array = getElementsById('RESULTHTML');
    var text_res_array = getElementsById('RESULTTEXT');
   
    for (var i = 0; i < html_res_array.length; i++)
    {
        if (i < historyIndex) {
            show(html_res_array[i]);
            show(text_res_array[i]);
								}
        else
        {
            hide(html_res_array[i]);
            hide(text_res_array[i]);
        }
    }
   
    //document.getElementById('html_res').innerHTML = history_Area[historyIndex];
    //document.getElementById('text_res').innerHTML = history_Result[historyIndex];
						};
 
     
//undo.addEventListener('click', Undo () );
//redo.addEventListener('click', Redo() );
function Delete(){
PurgeRedoSequence();
document.getElementById("RESULTTEXT").innerHTML = '';
document.getElementById("RESULTHTML").innerHTML = '';
document.getElementById("RESULTTEXT").id = "RESULTTEXT";
document.getElementById("RESULTHTML").id = "RESULTHTML";
operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
					}
 
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');
 
function Redo() {
undo = document.getElementById('undo');
redo = document.getElementById('redo');
   if (historyIndex < historyIndexMax)
    {
        historyIndex++; Reundo(); redo.disabled ='';
    }
    if (historyIndex == historyIndexMax)
    {
        redo.disabled ='disabled';
    }
    if (historyIndex > 0) { undo.disabled = ''; }
					};
function Undo(){
undo = document.getElementById('undo');
redo = document.getElementById('redo');
    if (historyIndex > 0)
    {
        historyIndex--; Reundo(); undo.disabled ='';
    }
    if (historyIndex == 0)
    {
        undo.disabled ='disabled';
    }
    if (historyIndex < historyIndexMax) { redo.disabled=''; }
					};
					var usedLen=0;
					var usedLength=0;
					var beginIndex=0;
					var beginInd=0;
			function Bold(usl,bgind)
            {
             
             textarea=document.getElementById("text");
            document.getElementById("text").focus();
			expressionText =( document.getElementById("text").value ); 
             //expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                boldIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(boldIndexes);
                for (var i = 0; i < boldIndexes.length; i++){
					console.log( 'boldIndexes.length:' + boldIndexes.length);
                    var beginIndex = boldIndexes[i].startPosition;
                    var endIndex = boldIndexes[i].endPosition;
					console.log( 'beginIndex:' +beginIndex);
															}
					beginInd=beginIndex;
                boldIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
				console.log( 'boldIndexes.length:' + boldIndexes.length);								
                console.log('aggregated array:');
        for (var i =0; i < boldIndexes.length; i++){  
            console.log(boldIndexes[i].startPosition + " " + boldIndexes[i].size);
			usedLength=boldIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;
			 var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			usedLen=usedLength;
			beginInd=beginIndex;
			function Image(usl,bgind)
            {
             alert("Image");
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
           expressionText =( document.getElementById("text").value ); 
			 document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
            
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                 imageIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(imageIndexes);
                for (var i = 0; i < imageIndexes.length; i++){
                    var beginIndex = imageIndexes[i].startPosition;
                    var endIndex = imageIndexes[i].endPosition;
															}
                imageIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i < imageIndexes.length; i++){  
            console.log(imageIndexes[i].startPosition + " " + imageIndexes[i].size);
			usedLength=imageIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;
			 var resultStr=makeString(expressionText,usedLength,beginIndex);

               document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}  
			function DownPage_title(usl,bgind)
            {
             
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
            document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                downpage_titleIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(downpage_titleIndexes);
                for (var i = 0; i < downpage_titleIndexes.length; i++){
                    var beginIndex = downpage_titleIndexes[i].startPosition;
                    var endIndex = downpage_titleIndexes[i].endPosition;
																		}
                downpage_titleIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
														});
                console.log('aggregated array:');
        for (var i =0; i < downpage_titleIndexes.length; i++){  
            console.log(downpage_titleIndexes[i].startPosition + " " + downpage_titleIndexes[i].size);
													usedLength=downpage_titleIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;
                   var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
			}
			function Txt(usl,bgind)
			{
			alert("Txt");
			
            var textarea=document.getElementById("text");
            document.getElementById("text").focus();
            expressionText =  document.getElementById("text").value;
             document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
                var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
                var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
                txtIndexes.push(new UsedSelection(selectionBegin,selectionEnd-selectionBegin));
                AggregateSelection(txtIndexes);
                for (var i = 0; i < txtIndexes.length; i++){
                    var beginIndex = txtIndexes[i].startPosition;
                    var endIndex = txtIndexes[i].endPosition;
															}
                txtIndexes.sort(function(a,b) {
                return a.startPosition - b.startPosition;
												});
                console.log('aggregated array:');
        for (var i =0; i < txtIndexes.length; i++){  
            console.log(txtIndexes[i].startPosition + " " + txtIndexes[i].size);
										usedLength=txtIndexes[i].size;
			console.log( 'usedLength:' +usedLength );
													}
													usedLen=usedLength;
                 var resultStr=makeString(expressionText,usedLength,beginIndex);

                document.getElementById("RESULTTEXT").innerText=resultStr;
                document.getElementById("RESULTHTML").innerHTML=resultStr;
                Make();
 }

    function myFunction() {
   var x = document.getElementById("RESULTTEXT");
    var y=document.getElementById("RESULTHTML");
   x.innerHTML=y.innerHTML;
                        }  
						var AggregateSelection = function(sourceArray){
							 alert("AggregateSelection");
		var indexesToRemove = new Set();
		for (var i = 0; i < sourceArray.length; i++){
		for (var j = 0; j < sourceArray.length; j++){
		if (i==j || Array.from(indexesToRemove).indexOf(i)>-1 || Array.from(indexesToRemove).indexOf(j)>-1 ) continue;
		var lastIndex1 = sourceArray[i].startPosition+sourceArray[i].size;
		var lastIndex2 = sourceArray[j].startPosition+sourceArray[j].size;
		if (sourceArray[i].startPosition>=sourceArray[j].startPosition && sourceArray[i].startPosition<=lastIndex2){
				sourceArray[i].startPosition = sourceArray[j].startPosition;
				var maxLastIndex = (lastIndex1 > lastIndex2) ? lastIndex1 : lastIndex2;
				sourceArray[i].size = maxLastIndex - sourceArray[i].startPosition;
				indexesToRemove.add(j);
		}
        if (sourceArray[i].startPosition>=sourceArray[j].startPosition && sourceArray[i].startPosition>=lastIndex2){
                sourceArray[i].size = lastIndex1 - sourceArray[i].startPosition;
                sourceArray[j].size = lastIndex2 - sourceArray[j].startPosition;
																													}		
													}
													}
		for (var i = sourceArray.length; i-- ; i >0 )
			if (Array.from(indexesToRemove).indexOf(i)>-1) {
				sourceArray.splice(i, 1);
															}
	 
		   
												}
    $( document ).ready(function() {
    					
 //  11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 
 
        function ChangeSelection(sourceStr){
                            alert("ChangeSelection");
 
                 selectiontxt = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
               expressionText =( document.getElementById("text").value );
			    document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
for(var i = 0;i < addelements.length; i++){
            document.onkeypress = function(e) {
    if((e.keyCode == 65)||(e.keyCode == 66)||(e.keyCode == 67)||(e.keyCode == 68)||(e.keyCode == 69)||(e.keyCode == 70)||(e.keyCode == 71)||(e.keyCode == 72)||(e.keyCode == 73)||(e.keyCode == 74)||(e.keyCode == 75)||(e.keyCode == 76)||(e.keyCode == 77)||(e.keyCode == 78)||(e.keyCode == 79)||(e.keyCode == 80)||(e.keyCode == 81)||(e.keyCode == 82)||(e.keyCode == 83)||(e.keyCode == 84)||(e.keyCode == 85)||(e.keyCode == 86)||(e.keyCode == 87)||(e.keyCode == 88)||(e.keyCode == 89)||(e.keyCode == 90)||(e.keyCode == 48)||(e.keyCode == 49)||(e.keyCode == 50)||(e.keyCode == 51)||(e.keyCode == 52)||(e.keyCode == 53)||(e.keyCode == 54)||(e.keyCode == 55)||(e.keyCode == 56)||(e.keyCode == 57)){  
i++;
   
    sourceStr.length=sourceStr.length-selectiontxt.length+addelements.length;
 // event.type ?????? ???? keypress
 
    }
    if((e.keyCode == 8)||(e.keyCode == 46)){
        i++;
    sourceStr.length=sourceStr.length-selectiontxt.length-addelements.length;
											}
           
											}
										}
 resultStr=makeString(expressionText);
 console.log('resultStr:'+makeString(expressionText)); 
resultStr = makeString(expressionText);
 console.log('resultStr:'+makeString(expressionText));   
													}  
	
				
    function caretPos(textarea)
{
      textarea=document.getElementById("text");
        var pos = 0;
    // IE Support
    if (document.selection)
    {
       textarea.focus ();
        var Sel = document.selection.createRange();
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart ('character', -textarea.value.length);
        pos = Sel.text.length - SelLength-1;
    }
    // Firefox support
    else if (textarea.selectionStart || textarea.selectionStart == '0')
        pos = textarea.selectionStart-1;
 
    return pos;
 
}
   
  
   $('#text').keyup(function onkeypressFunction()
   {
         //alert("onkeypressFunction");
		 expressionText =( document.getElementById("text").value );
		  document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
         var pos=caretPos(expressionText);
              for (var i = 0;i < tableIndexes.length; i++){
                 if(typeof tableIndexe[i] != "undefined"){
                    var startPos = tableIndexes[i].startPosition;
                    var size = tableIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       tableIndexe[i].startPosition = startPos;
       tableIndexe[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('Txt indexes:'+JSON.stringify(tableIndexes));               
            for (var i = 0;i < txtIndexes.length; i++){
                 if(typeof txtIndexes[i] != "undefined"){
                    var startPos = txtIndexes[i].startPosition;
                    var size = txtIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       txtIndexes[i].startPosition = startPos;
       txtIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('Txt indexes:'+JSON.stringify(txtIndexes));   
 for (var i = 0;i < smalliconIndexes.length; i++){
                 if(typeof smalliconIndexes[i] != "undefined"){
                    var startPos = smalliconIndexes[i].startPosition;
                    var size = smalliconIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       smalliconIndexes[i].startPosition = startPos;
       smalliconIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('Txt indexes:'+JSON.stringify(smalliconIndexes)); 
    for (var n = 0;n < listingIndexes.length; n++){
                 if(typeof listingIndexes[n] != "undefined"){
                    var startPos = listingIndexes[n].startPosition;
                    var size = listingIndexes[n].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
													}
       listingIndexes[n].startPosition = startPos;
       listingIndexes[n].size = size;
															}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
														}
             console.log('Listing indexes:'+JSON.stringify(listingIndexes));   
 for (var m = 0;m < cbtIndexes.length; m++){
                 if(typeof cbtIndexes[m] != "undefined"){
                    var startPos = cbtIndexes[m].startPosition;
                    var size = cbtIndexes[m].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       cbtIndexes[m].startPosition = startPos;
       cbtIndexes[m].size = size;
														}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
													}
             console.log('CBT indexes:'+JSON.stringify(cbtIndexes));
			  for (var s = 0;s < linkIndexes.length; s++){
                 if(typeof linkIndexes[s] != "undefined"){
                    var startPos = linkIndexes[s].startPosition;
                    var size = linkIndexes[s].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       linkIndexes[s].startPosition = startPos;
       linkIndexes[s].size = size;
															}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
															}
             console.log('Link indexes:'+JSON.stringify(linkIndexes));
   /*for (var p = 0;p < main_titleIndexes.length; p++){
                 if(typeof main_titleIndexes[p] != "undefined"){
                    var startPos = main_titleIndexes[p].startPosition;
                    var size = main_titleIndexes[p].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       main_titleIndexes[p].startPosition = startPos;
       main_titleIndexes[p].size = size;
															}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
														}
             console.log(' Main_title indexes:'+JSON.stringify(main_titleIndexes));*/
			  for (var d = 0;d < middle_titleIndexes.length; d++){
                 if(typeof middle_titleIndexes[d] != "undefined"){
                    var startPos = middle_titleIndexes[d].startPosition;
                    var size = middle_titleIndexes[d].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       middle_titleIndexes[d].startPosition = startPos;
       middle_titleIndexes[d].size = size;
																		}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																		}
             console.log('Middle_Title indexes:'+JSON.stringify(middle_titleIndexes ));
for (var h = 0;h < down_titleIndexes.length; h++){
                 if(typeof down_titleIndexes[h] != "undefined"){
                    var startPos = down_titleIndexes[h].startPosition;
                    var size = down_titleIndexes[h].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       down_titleIndexes[h].startPosition = startPos;
       down_titleIndexes[h].size = size;
														}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
													}
             console.log('Down_title indexes:'+JSON.stringify(down_titleIndexes));  
 for (var g = 0;g < downpage_titleIndexes.length; g++){
                 if(typeof downpage_titleIndexes[g] != "undefined"){
                    var startPos = downpage_titleIndexes[g].startPosition;
                    var size = downpage_titleIndexes[g].size;
                  
                     if(pos<=startPos){
							startPos=startPos+1;
		       }
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
                 }
       downpage_titleIndexes[g].startPosition = startPos;
       downpage_titleIndexes[g].size = size;
	               }
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
			            }
             console.log('DownPage_title indexes:'+JSON.stringify(downpage_titleIndexes));
			 for (var t = 0;t < down_pageIndexes.length; t++){
                 if(typeof down_pageIndexes[t] != "undefined"){
                    var startPos = down_pageIndexes[t].startPosition;
                    var size = down_pageIndexes[t].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       down_pageIndexes[t].startPosition = startPos;
       down_pageIndexes[t].size = size;
															}
			resultStr =makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																	}
             console.log('Footer indexes:'+JSON.stringify(down_pageIndexes));
			 for (var t = 0;t < top_pageIndexes.length; t++){
                 if(typeof top_pageIndexes[t] != "undefined"){
                    var startPos = top_pageIndexes[t].startPosition;
                    var size = top_pageIndexes[t].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       top_pageIndexes[t].startPosition = startPos;
       top_pageIndexes[t].size = size;
															}
			resultStr =makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																	}
             console.log('Footer indexes:'+JSON.stringify(top_pageIndexes));
			 for (var t = 0;t < imageIndexes.length; t++){
                 if(typeof imageIndexes[t] != "undefined"){
                    var startPos = imageIndexes[t].startPosition;
                    var size = imageIndexes[t].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       imageIndexes[t].startPosition = startPos;
       imageIndexes[t].size = size;
															}
			resultStr =makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																	}
             console.log('Footer indexes:'+JSON.stringify(imageIndexes));
			/*for (var t = 0;t < footerIndexes.length; t++){
                 if(typeof footerIndexes[t] != "undefined"){
                    var startPos = footerIndexes[t].startPosition;
                    var size = footerIndexes[t].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       footerIndexes[t].startPosition = startPos;
       footerIndexes[t].size = size;
															}
			resultStr =makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																	}
             console.log('Footer indexes:'+JSON.stringify(footerIndexes));*/
			 for (var x = 0;x < hot_tipIndexes.length; x++){
                 if(typeof hot_tipIndexes[x] != "undefined"){
                    var startPos = hot_tipIndexes[x].startPosition;
                    var size = hot_tipIndexes[x].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       hot_tipIndexes[x].startPosition = startPos;
       hot_tipIndexes[x].size = size;
																}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																}
             console.log('Hot_Tip indexes:'+JSON.stringify(hot_tipIndexes));
 for (var r = 0;r < red_titleIndexes.length; r++){
                 if(typeof red_titleIndexes[r] != "undefined"){
                    var startPos = red_titleIndexes[r].startPosition;
                    var size = red_titleIndexes[r].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       red_titleIndexes[r].startPosition = startPos;
       red_titleIndexes[r].size = size;
															}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
														}
             console.log('Red_title indexes:'+JSON.stringify(red_titleIndexes));
 for (var f = 0;f < small_titleIndexes.length; f++){
                 if(typeof small_titleIndexes[f] != "undefined"){
                    var startPos = small_titleIndexes[f].startPosition;
                    var size = small_titleIndexes[f].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       small_titleIndexes[f].startPosition = startPos;
       small_titleIndexes[f].size = size;
																}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
															}
             console.log('Small_title indexes:'+JSON.stringify(small_titleIndexes));
			 
 for (var j = 0;j < boldIndexes.length; j++){
                 if(typeof boldIndexes[j] != "undefined"){
                    var startPos = boldIndexes[j].startPosition;
                    var size = boldIndexes[j].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       boldIndexes[j].startPosition =startPos;
       boldIndexes[j].size = size;
															}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
											}
             console.log('Bold indexes:'+JSON.stringify(boldIndexes));
 for (var k = 0;k < codeIndexes.length; k++){
                 if(typeof codeIndexes[k] != "undefined"){
                    var startPos = codeIndexes[k].startPosition;
                    var size = codeIndexes[k].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       codeIndexes[k].startPosition = startPos;
       codeIndexes[k].size = size;
														}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
			}
													
             console.log('Code indexes:'+JSON.stringify(codeIndexes));
			 for (var l = 0;l < captureIndexes.length; l++){
                 if(typeof captureIndexes[l] != "undefined"){
                    var startPos = captureIndexes[l].startPosition;
                    var size = captureIndexes[l].size;
                  
                     if(pos<=startPos){
							startPos=startPos+1;
										}
					else
						if((pos>startPos)&&(pos<startPos+size)){
							size += 1;
																}
       captureIndexes[l].startPosition = startPos;
       captureIndexes[l].size = size;
																	}
			resultStr = makeString(expressionText);
	   document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;
	    console.log('resultStr:'+makeString(expressionText));
																}
             console.log('Capture indexes:'+JSON.stringify(captureIndexes));
			for (var i = 0;i < square_listIndexes.length; i++){
                 if(typeof square_listIndexes[i] != "undefined"){
                    var startPos = square_listIndexes[i].startPosition;
                    var size = square_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       square_listIndexes[i].startPosition = startPos;
       square_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('square_indexes:'+JSON.stringify(square_listIndexes));  
			for(var i = 0;i < disc_listIndexes.length; i++){
                 if(typeof disc_listIndexes[i] != "undefined"){
                    var startPos = disc_listIndexes[i].startPosition;
                    var size = disc_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       disc_listIndexes[i].startPosition = startPos;
       disc_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('disc_listindexes:'+JSON.stringify(disc_listIndexes));  
			for(var i = 0;i <  main_listIndexes.length; i++){
                 if(typeof  main_listIndexes[i] != "undefined"){
                    var startPos =  main_listIndexes[i].startPosition;
                    var size =  main_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
        main_listIndexes[i].startPosition = startPos;
        main_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('main_listindexes:'+JSON.stringify( main_listIndexes));  
			for(var i = 0;i <  none_listIndexes.length; i++){
                 if(typeof  none_listIndexes[i] != "undefined"){
                    var startPos =  none_listIndexes[i].startPosition;
                    var size =  none_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
        none_listIndexes[i].startPosition = startPos;
        none_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('none_listindexes:'+JSON.stringify( none_listIndexes));  
			for(var i = 0;i < decimal_listIndexes.length; i++){
                 if(typeof decimal_listIndexes[i] != "undefined"){
                    var startPos = decimal_listIndexes[i].startPosition;
                    var size = decimal_listIndexes[i].size;
                  
                     if(pos<=startPos){
						startPos=startPos+1;
										}
       else
			if((pos>startPos)&&(pos<startPos+size)){
				size += 1;
														}
       decimal_listIndexes[i].startPosition = startPos;
       decimal_listIndexes[i].size = size;
																}
				   resultStr=makeString(expressionText)
				   console.log('resultStr:'+makeString(expressionText)); 
			document.getElementById("RESULTTEXT").innerText=resultStr;
document.getElementById("RESULTHTML").innerHTML=resultStr;	   
															}
			console.log('decimal_listindexes:'+JSON.stringify(decimal_listIndexes));  
  
  });  
       
    Object.prototype.swap = function(a,b) { var tmp = this[a]; this[a] = this[b]; this[b] = tmp; }
   

      var SelectionPosition = function(startPos,endPos){
        this.startPosition = startPos;
        this.endPosition = endPos;
														}   
     
     
 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 


 
            addelements=function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // ????. ??????
    return String.fromCharCode(event.keyCode)
							}
 
  if (event.which != 0 && event.charCode != 0) { // ??? ????? IE
    if (event.which < 32) return null; // ????. ??????
    return String.fromCharCode(event.which); // ?????????
												}
 
  return null; // ????. ??????
													}
               
  textarea=document.getElementById("text");
 var expressionText = getSelectiontextarea( document.getElementById("text") );
 
   
   
             textarea.oninput=function(){
   textarea=document.getElementById("text");
   
      document.getElementById("text").innerHTML = (textarea.value).replace(/\n/g, '<br>');
       document.getElementById('RESULTHTML').innerHTML =textarea.value;
											};
                             
       
    });