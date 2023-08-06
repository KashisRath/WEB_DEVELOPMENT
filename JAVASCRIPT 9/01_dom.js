// document.getElementById(mainImg);
// null

// document.getElementById("mainImg");
// <img src=​"mypic.jpg" alt=​"KR" height=​"400px" width=​"400px" id=​"mainImg">​

// let imgObj=document.getElementById("mainImg");
// undefined

// imgObj
// <img src=​"mypic.jpg" alt=​"KR" height=​"400px" width=​"400px" id=​"mainImg">​

// console.log(imgObj);
// VM425:1 <img src=​"mypic.jpg" alt=​"KR" height=​"400px" width=​"400px" id=​"mainImg">​
// undefined

// console.dir(imgObj);

// imgObj.src
// 'http://127.0.0.1:5500/JAVASCRIPT%209/mypic.jpg'

// imgObj.tagName
// 'IMG'

// imgObj.src="photo.jpg"
// 'photo.jpg'

//document.getElementsByClassName("oldImg");



//selecting element by class name
console.log("selecting element by class name--")
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
}


// for(let i=0; i<smallImages.length;i++)
// {
//     smallImages[i].src="photo.jpg";
//     console.log(`value of image no. ${i} is changed.`);
// }


//selecting element by tag name
console.log("")
console.log("selecting element by tag name--")
// document.getElementsByTagName("p");
// document.getElementsByTagName("p")[1].innerText="abc";
// 'abc'



//query selectors
console.log("")
console.log("query selectors--")
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll("ul li"))


//seting content in object
console.log("")
console.log("setting content object--")
// let para=document.querySelector('p');
// undefined

// para.innerHTML;
// '<b>I love to draw :) </b>\n   <img src="mypic.jpg" alt="KR" height="400px" width="400px" id="mainImg" class="oldImg" style="display:none">'

// para.textContent
// 'I love to draw :) \n   '

// para.innerText;
// 'I love to draw :)'

//para.innerText="hi i am <b>kashis</b>"
// it will not change in the html file ,because it acts a text .

//para.innerHtml="hi i am <b>kashis</b>!";
//it will be bold in the html file.


// let heading=document.querySelector('h1');
// undefined

// heading
// <h1>​KASHIS RATH​</h1>​

// heading.innerHTML=`<u>${heading.innerText}</u>`;
// '<u>KASHIS RATH</u>'



//manupulating attribute
console.log("")
console.log("manupulating attribute--");
let img = document.querySelector('img');
console.log(img.setAttribute('id', 'spidermanImg'));
console.dir(img);
console.log(img.getAttribute('class'));
console.log(img.setAttribute('class', 'images'));
console.log(img.getAttribute('class'));


//manupulating style(with attribute)
console.log("")
console.log("manupulating style--");

// let heading=document.querySelector('h1');
// undefined

//heading.style;

// heading.style.color='purple';
// 'purple'

// heading.style.color='green';
// 'green'

// heading.style.backgroundColor='yellow';
// 'yellow'

let links = document.querySelectorAll("ul li");

for (link of links) {
    link.style.color="purple";
}

let links2 = document.querySelectorAll("ol li");

for(let i=0;i<links2.length;i++)
{
    links2[i].style.color="red";
}


//a)class list property
console.log("")
console.log("a)class list property----");

// let img=document.querySelector('img');

// img.classList;
// DOMTokenList ['images', value: 'images']
// 0: "images"length: 1
// value: "images"[[Prototype]]: 
// DOMTokenList

let heading =document.querySelector('h1');
console.log(heading.classList.add("green"));
console.log(heading.classList.add("underline"));
console.log(heading.classList.add("kk"));
console.log(heading.classList.remove("underline"));
console.log(heading.classList.contains("underline"));
console.log(heading.classList.contains("kk"));
console.log(heading.classList);
console.log(heading.classList.toggle("kk"));
console.log(heading.classList.toggle("underline"));
console.log(heading.classList)


//navigation on page
console.log("")
console.log("a)navigation on page----");

let box=document.querySelector('ul');

console.log(box.children);
//HTMLCollection(3) [li, li, li]

console.log(box.childElementCount);
console.log(box.parentElement);

// let img=document.querySelector('img');
console.log("")
console.log(img.previousElementSibling);
console.log(img.previousElementSibling.style.color="green");



//adding elements on the page
// document.createElement('p');
// <p>​</p>​

// let newP=document.createElement('p');
// undefined

// console.dir(newP);
// VM1039:1 p
// undefined

// newP.innerText="hi , i am a new p";
// 'hi , i am a new p'

// console.dir(newP);
// VM1188:1 p
// undefined

// let body=document.querySelector('body');
// undefined

// body.appendChild(newP);
// <p>​hi , i am a new p​</p>​


// let btn=document.createElement('button');
// undefined

// console.dir('btn');
// VM212:1 btn
// undefined

// console.dir(btn);
// VM265:1 button
// undefined

// btn.innerText="click me!";
// 'click me!'

// box.appendChild(btn);
// <button>​click me!​</button>​

// box.prepend(btn);
// undefined

// let btn=document.createElement('button');
// undefined

// btn
// <button>​</button>​

// btn.innerHTML="NEW BUTTOM!!!";
// 'NEW BUTTOM!!!'

// let p=document.querySelector('p');
// undefined

// p
// <p id=​"description">​…​</p>​

// btn
// <button>​NEW BUTTOM!!!​</button>​

// p
// <p id=​"description">​…​</p>​

// p.insertAdjacentElement('beforebegin',btn);
// <button>​NEW BUTTOM!!!​</button>​

// p.insertAdjacentElement('afterbegin',btn);
// <button>​NEW BUTTOM!!!​</button>​

console.log("")
console.log("remove elements from page")

// p.removeChild(btn);
// <button>​NEW BUTTOM!!!​</button>​

// p.remove();
// undefined