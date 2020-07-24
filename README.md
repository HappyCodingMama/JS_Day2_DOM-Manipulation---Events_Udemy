# JS_Day2_DOM Manipulation & Events_Udemy
 Summarizing what I learned 

001. What is the DOM?<br>
     Document Object Model
002. DOM Selectors for Single Elements<br>
    change styling(background color etc) using getElementByI
    textContent & innerText, innerHTML / querySelector
003. DOM Selectors for Multiple Elements<br>
    getElementsByClassName / getElementsByTagName
    convert HTML collection into array, reverse /querySelectorAll
004. Traversing the DOM<br>
    childNodes :get child  text nodes, children : get children element (html) nodes , nodeName, 
    nodeType, firstChild, firstElementChild, lastChild,lastElementChild, 
    childElementCount: count child element, parentNode, 
    parentElement : get parent node  nextSibling, 
    nextElementSibling: get next sibling
    previousSibling, previousElementSibling: get prev sibling<br>
005. Creating Elements<br>
     createElement -> add class, id, attribute  -> appendChild : create text node and append -> append li as child to ul
     create new link element -> add classes -> add icon -> append link into li<br>
006. Removing & Replacing Elements<br>
     replace: creat Element -> add id -> new text node -> get the old element -> get the parent -> replaceChild
     remove list item / remove child element / getAttribute, setAttribute, hasAttribute<br>
007. Event Listners & The event Object<br>
     addEventListener / function(e) e.preventDefault / e.target /  coordinates - clientY clientX offsetY offsetX<br>
008. Mouse Events<br>
     event Handler: runEvent / click dblclick mousedown mouseup mouseenter mouseleave mouseover mouseout  
     mousemove->display coordinates & change background color using mouseover<br>
009. keyboard & Input Events<br>
     addEventListener('submit', runEvent) / clear input / keydown keyup keypress focus blur cut paste input  change<br>
010. Event bubbling & delegation<br>
     event delegation / contains<br>
011. Local & Session Storage<br>
     localStorage.setItem / sessionStorage / removeItem / getItem / clear / JSON.parse JSON.stringify
