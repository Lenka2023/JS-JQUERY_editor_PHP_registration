var SelectionPosition = function(startPos, endPos) {
    this.startPosition = startPos;
    this.endPosition = endPos;
    //if (this.startPosition > this.endPosition) this.swap('startPosition','endPosition');
  }
  var BoldSelection = function(startPos, size) {
    this.startPosition = startPos;
    this.size = size;

  }
  var AggregateBoldSelection = function(sourceArray) {
    var indexesToRemove = new Set();
    for (var i = 0; i < sourceArray.length; i++) {
      for (var j = 0; j < sourceArray.length; j++) {
        if (i == j || Array.from(indexesToRemove).indexOf(i) > -1 || Array.from(indexesToRemove).indexOf(j) > -1) continue;
        var lastIndex1 = sourceArray[i].startPosition + sourceArray[i].size;
        var lastIndex2 = sourceArray[j].startPosition + sourceArray[j].size;
        if (sourceArray[i].startPosition >= sourceArray[j].startPosition && sourceArray[i].startPosition <= lastIndex2) {
          sourceArray[i].startPosition = sourceArray[j].startPosition;
          var maxLastIndex = (lastIndex1 > lastIndex2) ? lastIndex1 : lastIndex2;
          sourceArray[i].size = maxLastIndex - sourceArray[i].startPosition;
          indexesToRemove.add(j);
        }
      }
    }
    sourceArray.forEach(function(item, index) {
      if (Array.from(indexesToRemove).indexOf(index) > -1) {
        sourceArray.splice(index, 1);
      }
    });

  }
  var clickBold = [];
  var clicksBold=onclick="Bold()";
  for (i = 0; i < clicksBold.length; i++) {
   clickBold.push(clicksBold[i]);
  }
  
   var resultStr = "";
  var clickelements = [];
  var addelements = [];
  var boldIndexes = [];
  
  var uagent = navigator.userAgent.toLowerCase();
  var is_safari = ((uagent.indexOf('safari') != -1) || (navigator.vendor == "Apple Computer, Inc."));
  var is_ie = ((uagent.indexOf('msie') != -1) && (!is_opera) && (!is_safari) && (!is_webtv));
  var is_ie4 = ((is_ie) && (uagent.indexOf("msie 4.") != -1));
  var is_moz = (navigator.product == 'Gecko');
  var is_ns = ((uagent.indexOf('compatible') == -1) && (uagent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_safari));
  var is_ns4 = ((is_ns) && (parseInt(navigator.appVersion) == 4));
  var is_opera = (uagent.indexOf('opera') != -1);
  var is_kon = (uagent.indexOf('konqueror') != -1);
  var is_webtv = (uagent.indexOf('webtv') != -1);
  var is_win = ((uagent.indexOf("win") != -1) || (uagent.indexOf("16bit") != -1));
  var is_mac = ((uagent.indexOf("mac") != -1) || (navigator.vendor == "Apple Computer, Inc."));
  var ua_vers = parseInt(navigator.appVersion);
  
  var historyIndexMax = 0;
  var historyIndex = 0;
  
function SomeVar() {
  textarea = document.getElementById("text");
  document.getElementById("text").focus();
  expressionText = getSelectiontextarea(document.getElementById("text"));
  expressionHTML = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expressionText.replace(/\n/g, '<br>');
  document.getElementById("text").innerHTML = expressionHTML.replace(/\n/g, '<br>');
  expressionStart = (textarea.value).substring(0, textarea.selectionStart);
  expressionEnd = (textarea.value).substring(textarea.selectionEnd);
  expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
  expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');
}

function Make() {
  PurgeRedoSequence();
  //document.getElementById("RESULTTEXT").id = "text_res";
  //document.getElementById("RESULTHTML").id = "html_res";
  //document.getElementById("result").innerHTML += '<span id="RESULTTEXT"></span>';
  //document.getElementById("area").innerHTML += '<span id="RESULTHTML"></span>';
  //document.getElementById("text").value='';
  operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
  document.getElementById("RESULTTEXT").designMode = 'on';
  document.getElementById("RESULTHTML").designMode = 'on';
  document.getElementById("RESULTTEXT").contentEditable = true;
  void(0);
  document.getElementById("RESULTHTML").contentEditable = true;
  void(0);
}

function getSelectiontextarea(textarea) {
  textarea = document.getElementById("text");
  var selection = null;
  if ((ua_vers >= 4) && is_ie && is_win) {
    if (textarea.isTextEdit) {
      textarea.focus();
      var sel = document.selection;
      var rng = sel.createRange();
      rng.collapse;
      if ((sel.type == "Text" || sel.type == "None") && rng != null)
        selection = rng.text;
    }
  } else if (typeof(textarea.selectionEnd) != "undefined") {
    selection = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
  }
  return selection;
}

function getElementsById(elementID) {
  var elementCollection = new Array();
  var allElements = document.getElementsByTagName("*");
  for (i = 0; i < allElements.length; i++) {
    if (allElements[i].id == elementID)
      elementCollection.push(allElements[i]);
  }
  return elementCollection;
};



function Top() {
  var top_page_list = prompt("Enter top_page_list", "");
  PurgeRedoSequence();
  textarea = document.getElementById("text");
  document.getElementById("text").focus();
  var main_title = prompt("Enter main_title", "");
  var down_title = prompt("Enter down_title", "");
  var result = document.getElementById("result");
  var x = prompt("is middle_title exist?(yes or no)", "");
  if (x == "yes") {
    var middle_title = prompt("Enter middle_title", "");

    document.getElementById("RESULTTEXT").innerText = '<!DOCTYPE html>' +
      '<html>' +
      '<head>' +
      '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<link rel="stylesheet" href="css/style.css"type="text/css"/ ' +
      '</head>' +
      '<body>' +
      '<div class="page_cont one">' +
      '<br class="cbt">' +
      '<div class="content">' +
      '<div class="float_left">' + top_page_list + '</div>' +
      '<div class="main_title float_right">' +
      '<span class="title_font">' + main_title + '</span>' +
      '<span class="middle_title">' + middle_title + '</span>' +
      '</div>' +
      '<div>' +
      '<div class="down_title ">' +
      '<span class="strong">' + down_title + '</span>' +
      '</div>' +
      '</div>';
    document.getElementById("RESULTHTML").innerHTML = '<!DOCTYPE html>' +
      '<html>' +
      '<head>' +
      '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<link rel="stylesheet" href="css/style.css"type="text/css"/ ' +
      '</head>' +
      '<body>' +
      '<div class="page_cont one">' +
      '<br class="cbt">' +
      '<div class="content">' +
      '<div class="float_left">' + top_page_list + '</div>' +
      '<div class="main_title float_right">' +
      '<span class="title_font">' + main_title + '</span>' +
      '<span class="middle_title">' + middle_title + '</span>' +
      '</div>' +
      '<div>' +
      '<div class="down_title ">' +
      '<span class="strong">' + down_title + '</span>' +
      '</div>' +
      '</div>';

  } else {
    document.getElementById("RESULTTEXT").innerText = '<!DOCTYPE html>' +
      '<html>' +
      '<head>' +
      '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<link rel="stylesheet" href="css/style.css"type="text/css"/ ' +
      '</head>' +
      '<body>' +
      '<div class="page_cont one">' +
      '<br class="cbt">' +
      '<div class="content">' +
      '<div class="float_left">' + top_page_list + '</div>' +
      '<div class="main_title float_right">' +
      '<span class="title_font">' + main_title + '</span>' +
      '</div>' +
      '<div>' +
      '<div class="down_title ">' +
      '<span class="strong">' + down_title + '</span>' +
      '</div>' +
      '</div>';
    document.getElementById("RESULTHTML").innerHTML = '<!DOCTYPE html>' +
      '<html>' +
      '<head>' +
      '<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<link rel="stylesheet" href="css/style.css"type="text/css"/> ' +
      '</head>' +
      '<body>' +
      '<div class="page_cont one">' +
      '<br class="cbt">' +
      '<div class="content">' +
      '<div>' +
      '<div class="float_left">' + top_page_list + '</div>' +
      '<div class="main_title float_right">' +
      '<span class="title_font">' + main_title + '</span>' +
      '</div>' +
      '<div>' +
      '<div class="down_title ">' +
      '<span class="strong">' + down_title + '</span>' +
      '</div>' +
      '</div></div> <br class="cbt">';
  }
  Make();

}

function Down() {
  PurgeRedoSequence();
  document.getElementById("text").focus();
  //var x=prompt("Enter a count of row","");
  var y = prompt("Enter a count of columns", "");
  var result = document.getElementById("result");

  if (y == 1) {
    var text = prompt("Enter text", "");
    document.getElementById("RESULTTEXT").innerText = '</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' + text + '</div></div>';
    document.getElementById("RESULTHTML").innerHTML = '</div><div class="down_page float_right"><div class="align_left medium_padding align_top float_left>' + text + '</div></div>';
    Make();
  } else {
    var table = '<div class="down_page float_right">';
    var text = prompt("Enter text", "");
    table += ' <div class="align_left medium_padding align_top float_left">' + text + '</div>';
    for (var i = 0; i < y - 1; i++) {
      var txt = prompt("Enter txt", "");
      table += '<div class="align_left medium_padding align_top float_right">' + txt + '</div>';
    }
    document.getElementById("RESULTTEXT").innerText = table + '</div>';
    document.getElementById("RESULTHTML").innerHTML = table + '</div>';

    Make();
  }
}


function operation(RESULTHTML, RESULTTEXT) {
  //alert(" index == " + historyIndex + "; length == " + historyIndexMax);
  historyIndexMax = historyIndex + 1;
  historyIndex++;
  if (historyIndex > 0) {
    undo.disabled = '';
  } else {
    undo.disabled = 'disabled';
  }
  if (historyIndex == historyIndexMax) {
    redo.disabled = 'disabled';
  } else {
    redo.disabled = '';
  }
  if ((historyIndex == 0) && (historyIndexMax == 0)) {
    redo.disabled = 'disabled';
    undo.disabled = 'disabled';
  }
  //alert('Op done!');
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

function Reundo() {
  var html_res_array = getElementsById('RESULTHTML');
  var text_res_array = getElementsById('RESULTTEXT');

  for (var i = 0; i < html_res_array.length; i++) {
    if (i < historyIndex) {
      show(html_res_array[i]);
      show(text_res_array[i]);
    } else {
      hide(html_res_array[i]);
      hide(text_res_array[i]);
    }
  }

  //document.getElementById('html_res').innerHTML = history_Area[historyIndex];
  //document.getElementById('text_res').innerHTML = history_Result[historyIndex];
};

function PurgeRedoSequence() {
  var html_res_array = getElementsById('RESULTHTML');
  var text_res_array = getElementsById('RESULTTEXT');

  for (var i = 0; i < html_res_array.length; i++) {
    if (isHidden(html_res_array[i])) {
      html_res_array[i].parentNode.removeChild(html_res_array[i]);
      text_res_array[i].parentNode.removeChild(text_res_array[i]);
    }
  }
}

//undo.addEventListener('click', Undo () );
//redo.addEventListener('click', Redo() );
function Redo() {
  if (historyIndex < historyIndexMax) {
    historyIndex++;
    Reundo();
    redo.disabled = '';
  }
  if (historyIndex == historyIndexMax) {
    redo.disabled = 'disabled';
  }
  if (historyIndex > 0) {
    undo.disabled = '';
  }
};

function Undo() {
  if (historyIndex > 0) {
    historyIndex--;
    Reundo();
    undo.disabled = '';
  }
  if (historyIndex == 0) {
    undo.disabled = 'disabled';
  }
  if (historyIndex < historyIndexMax) {
    redo.disabled = '';
  }
};
//--------------------------------------------------------------------------------------------------------------------------------
function Delete() {
  PurgeRedoSequence();
  document.getElementById("RESULTTEXT").innerHTML = '';
  document.getElementById("RESULTHTML").innerHTML = '';
  document.getElementById("RESULTTEXT").id = "RESULTTEXT";
  document.getElementById("RESULTHTML").id = "RESULTHTML";
  operation(document.getElementById("RESULTHTML").innerHTML, document.getElementById("RESULTTEXT").innerHTML);
}

function myFunction() {
  var x = document.getElementById("RESULTTEXT");
  var y = document.getElementById("RESULTHTML");
  x.innerHTML = y.innerHTML;
}

function Txt() {

  SomeVar();

  var result = document.getElementById("result");

  document.getElementById("RESULTTEXT").innerText = expressionStart + '<br><span class="move_left">' + expressionText + '</span>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<br><span class="move_left">' + expressionHTML + '</span>' + expressionEnd;
  Make();
}

function Link() {
  textarea = document.getElementById("text");
  var Link_Title = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").focus();
  expressionStart = (textarea.value).substring(0, textarea.selectionStart);
  expressionEnd = (textarea.value).substring(textarea.selectionEnd);
  expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
  expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');

  document.getElementById("text").innerHTML = Link_Title.replace(/\n/g, '<br>');
  var x = prompt("Enter a link", "");
  PurgeRedoSequence();
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<a  href="' + x + '">' + Link_Title + '</a>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<a  href="' + x + '">' + Link_Title + '</a>' + expressionEnd;
  Make();
}

function Image() {
  textarea = document.getElementById("text");
  var Image_Title = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").focus();
  expressionStart = (textarea.value).substring(0, textarea.selectionStart);
  expressionEnd = (textarea.value).substring(textarea.selectionEnd);
  expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
  expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');

  document.getElementById("text").innerHTML = Image_Title.replace(/\n/g, '<br>');
  var x = prompt("Enter a name of image", "");
  PurgeRedoSequence();
  document.getElementById("RESULTTEXT").innerText = '<img src="img/' + x + '"alt="622">';
  document.getElementById("RESULTHTML").innerHTML = '<img src="img/' + x + '"alt="622">';
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<img src="img/' + Image_Title + '"alt="622">' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<img src="img/' + Image_Title + '"alt="622">' + expressionEnd;
  Make();
}
//-----------------------------------ChangeSelection----------------------------------------------------------------------
function getCaretPosition(textarea) {
  var cursorPos = null;
  if (document.selection) {
    var range = document.selection.createRange();
    range.moveStart('textedit', -1);
    cursorPos = range.text.length;
  } else {
    cursorPos = textarea.selectionStart;
  }
}

function makeBoldStringHtml(sourceStr, boldIndexes) {
  var currentSymbolIndex = 0;
  //var resultStr = "";
  var currentEndSymbolIndex = boldIndexes[0].startPosition;
  var usedSymbols = 0;
  for (var i = 0; i < boldIndexes.length; i++) {
    if (currentSymbolIndex < boldIndexes[i].startPosition)
      resultStr += sourceStr.substring(currentSymbolIndex, boldIndexes[i].startPosition);
    resultStr += '<span class="strong">' + sourceStr.substring(boldIndexes[i].startPosition, boldIndexes[i].startPosition + boldIndexes[i].size) + '</span>';
    currentSymbolIndex = boldIndexes[i].startPosition + boldIndexes[i].size;
  }
  if (currentSymbolIndex < sourceStr.length)
    resultStr += sourceStr.substring(currentSymbolIndex, sourceStr.length);
  return resultStr;
}




function Code() {

  SomeVar();

  document.getElementById("RESULTTEXT").innerText = expressionStart + '<div class="commands"><pre>' + expressionText + '</pre></div>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<div class="commands"><pre>' + expressionHTML + '</pre></div>' + expressionEnd;
  Make();
}

function Main_List() {
  var expression = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
  document.getElementById("text").focus();
  var n = prompt("Enter a count of row", "");
  var main_list = '<span class=" strong font_size">' + expression + '</span><ul class="top_page_list">';
  document.getElementById("text").value = '';
  for (var i = 0; i < n; i++) {
    var text = prompt("Enter a text for  <li>", "");
    main_list += '<li>' + text + '</li>';

  }
  document.getElementById("RESULTTEXT").innerText = main_list + '</ul>';
  document.getElementById("RESULTHTML").innerHTML = main_list + '</ul>';
  Make();
}

function Square_List() {
  var expression = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
  document.getElementById("text").focus();
  var n = prompt("Enter a count of row", "");
  var square_list = '<span class=" strong font_size">' + expression + '</span><ul class="square">';
  for (var i = 0; i < n; i++) {
    var text = prompt("Enter a text for  <li>", "");
    square_list += '<li>' + text + '</li>';

  }
  document.getElementById("RESULTTEXT").innerText = square_list + '</ul>';
  document.getElementById("RESULTHTML").innerHTML = square_list + '</ul>';
  Make();
}

function None_List() {
  var expression = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
  document.getElementById("text").focus();
  var n = prompt("Enter a count of row", "");
  var none_list = '<span class=" strong font_size">' + expression + '</span><ul class="none_list">';
  for (var i = 0; i < n; i++) {
    var text = prompt("Enter a text for  <li>", "");
    none_list += '<li>' + text + '</li>';

  }
  document.getElementById("RESULTTEXT").innerText = none_list + '</ul>';
  document.getElementById("RESULTHTML").innerHTML = none_list + '</ul>';
  Make();
}

function Decimal_List() {
  var expression = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
  document.getElementById("text").focus
  var n = prompt("Enter a count of row", "");
  var decimal_list = '<span class=" strong font_size">' + expression + '</span><ol class="decimal">';
  for (var i = 0; i < n; i++) {
    var text = prompt("Enter a text for  <li>", "");
    decimal_list += '<li>' + text + '</li>';

  }
  document.getElementById("RESULTTEXT").innerText = decimal_list + '</ol>';
  document.getElementById("RESULTHTML").innerHTML = decimal_list + '</ol>';
  Make();
}

function Disc_List() {
  var expression = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
  document.getElementById("text").focus();
  var n = prompt("Enter a count of row", "");
  var disc_list = '<span class=" strong font_size">' + expression + '</span><ol class="disc">';
  for (var i = 0; i < n; i++) {
    var worlds = getSelectiontextarea(document.getElementById("text"));
    document.getElementById("text").innerHTML = worlds.replace(/\n/g, '<br>');
    var text = prompt("Enter a text for  <li>", "");
    document.getElementById("text").focus();
    disc_list += '<li>' + text + '</li>';
  }
  document.getElementById("RESULTTEXT").innerText = disc_list + '</ol>';
  document.getElementById("RESULTHTML").innerHTML = disc_list + '</ol>';
  Make();
}

function Main_title() {

  SomeVar();

  document.getElementById("RESULTTEXT").innerText = expressionStart + '<div class="main_title">' + expressionText + '</div>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<div class="main_title">' + expressionHTML + '</div>' + expressionEnd;
  Make();
}

function Middle_Title() {

  SomeVar();

  document.getElementById("RESULTTEXT").innerText = expressionStart + '<span class="middle_title">' + expressionText + '</span>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<span class="middle_title">' + expressionHTML + '</span>' + expressionEnd;
  Make();
}

function Down_title() {

  SomeVar();
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<div class="down_title">' + expressionText + '</div>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<div class="down_title">' + expressionHTML + '</div>' + expressionEnd;
  Make();
}

function DownPage_title() {

  SomeVar();
  var result = document.getElementById("result");

  document.getElementById("RESULTTEXT").innerText = expressionStart + '<br><span class="move_left strong">' + expressionText + '</span><br>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<br><span class="move_left strong">' + expressionHTML + '</span><br>' + expressionEnd;
  Make();
}

function Red_title() {

  SomeVar();
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<div class="title strong"><span>' + expressionText + '</span></div>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<div class="title strong"><span>' + expressionHTML + '</span></div>' + expressionEnd;
  Make();
}

function Small_title() {

  SomeVar();
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<br><span class="move_left strong font_size">' + expressionText + '</span>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<br><span class="move_left strong font_size">' + expressionHTML + '</span>' + expressionEnd;
  Make();
}

function Capture() {

  SomeVar();
  var x = prompt("Enter title of capture", "");
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<br><span class="move_left "><span class="strong underline">' + x + '</span>' + expressionText + '</span>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<br><span class="move_left "><span class="strong underline">' + x + '</span>' + expressionHTML + '</span>' + expressionEnd;
  Make();
}

function Listing() {

  textarea = document.getElementById("text");
  document.getElementById("text").focus();
  expressionStart = (textarea.value).substring(0, textarea.selectionStart);
  expressionEnd = (textarea.value).substring(textarea.selectionEnd);
  expressionStart.innerHTML = expressionStart.replace(/\n/g, '<br>');
  expressionEnd.innerHTML = expressionEnd.replace(/\n/g, '<br>');
  var x = prompt("Enter title of capture", "");
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<br><span class="move_left "><span class="strong ">' + x + '</span>' + expressionText + '</span>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<br><span class="move_left "><span class="strong ">' + x + '</span>' + expressionHTML + '</span>' + expressionEnd;
  Make();
}

function Smallicon() {

  textarea = document.getElementById("text");
  document.getElementById("text").focus();
  SomeVar();
  var x = prompt("Enter a name of image", "");
  document.getElementById("RESULTTEXT").innerText = '<img src="img/' + x + '"alt="622">';
  document.getElementById("RESULTTEXT").innerText = '<br><img src="img/' + x + '"alt="622" class="textwrap smallicon">';
  document.getElementById("RESULTHTML").innerHTML = '<br><img src="img/' + x + '"alt="622" class="textwrap smallicon">';
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<br><img src="img/' + expressionText + '"alt="622" class="textwrap smallicon">' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<br><img src="img/' + expressionHTML + '"alt="622" class="textwrap smallicon">' + expressionEnd;
  Make();
}

function Hot_Tip() {

  SomeVar();
  document.getElementById("RESULTTEXT").innerText = expressionStart + '<div class="border">' +
    '<table class="elliptic">' +
    '<tbody>' +
    '<tr>' +
    '<td class="hotTipLeft">' +
    '<h1>Hot<br>Tip</h1>' +
    '</td>' +
    '<td class="hotTipRight">' +
    '<span>' + expressionText + '</span>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<br class="cbt">' +
    '</div>' + expressionEnd;
  document.getElementById("RESULTHTML").innerHTML = expressionStart + '<div class="border">' +
    '<table class="elliptic">' +
    '<tbody>' +
    '<tr>' +
    '<td class="hotTipLeft">' +
    '<h1>Hot<br>Tip</h1>' +
    '</td>' +
    '<td class="hotTipRight">' +
    '<span>' + expressionHTML + '</span>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<br class="cbt">' +
    '</div>' + expressionEnd;
  Make();
}

function Table() {

  var expression = getSelectiontextarea(document.getElementById("text"));
  document.getElementById("text").innerHTML = expression.replace(/\n/g, '<br>');
  document.getElementById("text").focus();
  var x = prompt("Enter a count of row", "");
  var y = prompt("Enter a count of columns", "");
  var table = '<table class="syntax_description"><tbody>';
  for (var i = 0, text; i <= x; i++) {
    table += '<tr>';
    if (i == 0) {
      for (var j = 0; j < y; j++) {
        text = prompt("Enter text", "");
        table += '<th>' + text + '</th>';
      }
    } else {
      for (var j = 0; j < y; j++) {
        text = prompt("Enter text", "");
        table += '<td>' + text + '</td>';
      }
    }
    table += '</tr>';
  }
  document.getElementById("RESULTTEXT").innerText = table + '</tbody></table>';
  document.getElementById("RESULTHTML").innerHTML = table + '</tbody></table>';
  Make();
}

function CBT() {

  document.getElementById("RESULTTEXT").innerText = '<br class="cbt">';
  document.getElementById("RESULTHTML").innerHTML = '<br class="cbt">';
  Make();
}

function Footer() {

  document.getElementById("RESULTTEXT").innerText = '</div>' +
    '<div class="footer">' +
    '<span> DZone, Inc. | www.dzone.</span>' +
    '</div>' +
    '</div>' +
    '</body>' +
    '</html>';
  document.getElementById("RESULTHTML").innerHTML = '</div>' +
    '<div class="footer">' +
    '<span> DZone, Inc. | www.dzone.</span>' +
    '</div>' +
    '</div>' +
    '</body>' +
    '</html>';
  Make();
}


$(document).ready(function() {
  var textarea = document.getElementById("text");

  /* function getCursorPosition( ctrl ) {
        var CaretPos = 0;
        if ( document.selection ) {
            ctrl.focus ();
            var Sel = document.selection.createRange();
            Sel.moveStart ('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        } else if ( ctrl.selectionStart || ctrl.selectionStart == '0' ) {
            CaretPos = ctrl.selectionStart;
        }
        return CaretPos;
    }*/
  // history[historyIndex]
  //function ifChange(){
  //historyIndex++;
  //}
  // text.onkeyup = text.oninput =ifChange();
  Object.prototype.swap = function(a, b) {
    var tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
  }


  $('# textarea').oninput(function() {
    textarea = document.getElementById("text");
    document.getElementById("text").innerHTML = (textarea.value).replace(/\n/g, '<br>');
    document.getElementById('RESULTHTML').innerHTML = textarea.value;

  })

  

  var expressionText = getSelectiontextarea(document.getElementById("text"));
  var expressionHTML = getSelectiontextarea(document.getElementById("text"));
  var expressionStart = (textarea.value).substring(0, textarea.selectionStart).value;
  var expressionEnd = (textarea.value).substring(textarea.selectionEnd).value;
  var expressionText = getSelectiontextarea(document.getElementById("text"));
  var expressionHTML = getSelectiontextarea(document.getElementById("text"));





  //----------------------------------------------------------------------------------------------------



  textarea.oninput = function() {
    textarea = document.getElementById("text");
    document.getElementById("text").innerHTML = (textarea.value).replace(/\n/g, '<br>');

    document.getElementById('RESULTHTML').innerHTML = textarea.value;

  };

  function onkeypressFunction(selectiontxt, boldIndexes) {
    var txt = function(startPos, size) {
      this.startPosition = startPos;
      this.size = size;
    }

    selectiontxt = (textarea.value).substring(textarea.selectionStart, textarea.selectionEnd);
    for (var i = 0; i < boldIndexes.lenght; i++) {
      if (selectiontxt.startPosition + selectiontxt.size < boldIndexes[i].startPosition) {
        boldIndexes[i].startPosition = boldIndexes[i].startPosition + addelements.lenght; //а всі інші і-шки?????????????????????????
      }
      if ((selectiontxt.startPosition + selectiontxt.size > boldIndexes[i].startPosition) && (selectiontxt.startPosition + selectiontxt.size < boldIndexes[i].startPosition + boldIndexes[i].size)) {
        boldIndexes[i].size = boldIndexes[i].size + addelements.lenght;
      }
      /*if((selectiontxt.startPosition<boldIndexes[i].startPosition)&&(selectiontxt.startPosition+selectiontxt.size<boldIndexes[i].startPosition+boldIndexes[i].size)){
      boldIndexes[i].size=boldIndexes[i].size+addelements.lenght;//
      }*/
    }

    document.onkeypress = function(e) {
      if ((e.keyCode == 65) || (e.keyCode == 66) || (e.keyCode == 67) || (e.keyCode == 68) || (e.keyCode == 69) || (e.keyCode == 70) || (e.keyCode == 71) || (e.keyCode == 72) || (e.keyCode == 73) || (e.keyCode == 74) || (e.keyCode == 75) || (e.keyCode == 76) || (e.keyCode == 77) || (e.keyCode == 78) || (e.keyCode == 79) || (e.keyCode == 80) || (e.keyCode == 81) || (e.keyCode == 82) || (e.keyCode == 83) || (e.keyCode == 84) || (e.keyCode == 85) || (e.keyCode == 86) || (e.keyCode == 87) || (e.keyCode == 88) || (e.keyCode == 89) || (e.keyCode == 90) || (e.keyCode == 48) || (e.keyCode == 49) || (e.keyCode == 50) || (e.keyCode == 51) || (e.keyCode == 52) || (e.keyCode == 53) || (e.keyCode == 54) || (e.keyCode == 55) || (e.keyCode == 56) || (e.keyCode == 57)) {
        sourceStr.lenght = sourceStr.lenght - selectiontxt.lenght + addelements.lenght;
        // event.type должен быть keypress
        addelements = function getChar(event) {
          if (event.which == null) { // IE
            if (event.keyCode < 32) return null; // спец. символ
            return String.fromCharCode(event.keyCode)
          }

          if (event.which != 0 && event.charCode != 0) { // все кроме IE
            if (event.which < 32) return null; // спец. символ
            return String.fromCharCode(event.which); // остальные
          }

          return null; // спец. символ
        }
      }
      if ((e.keyCode == 8) || (e.keyCode == 46)) {
        sourceStr.lenght = sourceStr.lenght - selectiontxt.lenght;
      }

      for (var j = 0; j < boldIndexes.lenght; j++) {
        if (cursorPos < boldIndexes[j].startPosition) {
          boldIndexes[j].startPosition = boldIndexes[j].startPosition + addelements.lenght;
        }
        if ((cursorPos > boldIndexes[j].startPosition) && (cursorPos < boldIndexes[j].startPosition + boldIndexes[j].size)) {
          boldIndexes[j].size = boldIndexes[j].size + addelements.lenght;
        }
      } //це для чого???
    }
  }

  var undo = document.getElementById('undo');
  var redo = document.getElementById('redo');

});
function Bold() {

  SomeVar();
  var textarea = document.getElementById("text");
  document.getElementById("text").focus();
  expressionText = document.getElementById("text").value;
  expressionHTML = document.getElementById("text").value;

  expressionStart = (textarea.value).substring(0, textarea.selectionStart);
  expressionEnd = (textarea.value).substring(textarea.selectionEnd);
  var selectionBegin = (textarea.selectionStart < textarea.selectionEnd) ? textarea.selectionStart : textarea.selectionEnd;
  var selectionEnd = (textarea.selectionEnd > textarea.selectionStart) ? textarea.selectionEnd : textarea.selectionStart;
  boldIndexes.push(new BoldSelection(selectionBegin, selectionEnd - selectionBegin));
  AggregateBoldSelection(boldIndexes);
  for (var i = 0; i < boldIndexes.length; i++) {
    var beginIndex = boldIndexes[i].startPosition;
    var endIndex = boldIndexes[i].endPosition;
  }
  boldIndexes.sort(function(a, b) {
    return a.startPosition - b.startPosition;
  });
  console.log('aggregated array:');
  for (var i = 0; i < boldIndexes.length; i++) {
    console.log(boldIndexes[i].startPosition + " " + boldIndexes[i].size);
  }
  
  resultStr = makeBoldStringHtml(expressionText, boldIndexes);
  console.log('result str:' + resultStr);

	  document.getElementById("RESULTTEXT").innerText = resultStr;
  //document.getElementById("RESULTTEXT").id = "text_res";
  document.getElementById("RESULTHTML").innerHTML = resultStr;
 //document.getElementById("RESULTHTML").id = "html_res";
	 	
  Make();
	
};