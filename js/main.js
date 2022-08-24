
// Տնային աշխատանք 32

// 1․ ստեղծում եք 2 հատ դիվ, տարբեր գույների, ու tocuhEvent-ով էնպես եք անում, որ նախ դիվերը հնարավոր լինի տեղաշարժել, ու բացի տեղաշարժելուց, 
// երբ որ դիվերը կպնեն իրար թեկուզ 1պիքսելով պետք ա գույները փոխվեն, այսինքն առաջին դիվի գույնը գնա երկրորդ դիվին, երկրորդ դիվի գույնը առաջին դիվին:

// 2․ ստեղծում եք առանձին դիվ, որը պետք ա կլոր լինի, ու բրաուզերի իվենթների միջոցով (drag) որոնք չենք անցել, պետք է անեք այնպես որ կլորը կարողանաք տեղափոխել ու ձեր դրած տեղը դնել 

const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")

function touchEvent(el1, el2) {
  el1.addEventListener("touchmove", (e) => {
    e.target.style.cssText += `
      transform: translateX(${e.touches[0].pageX}px) translateY(${e.touches[0].pageY}px);
    `;
    el2.addEventListener("touchmove", (e) => {
      e.target.style.cssText += `
		transform: translateX(${e.touches[0].pageX}px) translateY(${e.touches[0].pageY}px);
	`;
    })
    let elem1 = el1.getBoundingClientRect()
    let elem2 = el2.getBoundingClientRect()
    if (elem1.x < elem2.right && elem1.y < elem2.bottom && elem1.x < elem2.right && elem2.y <= elem1.bottom) {
      div1.style.backgroundColor = "green";
      div2.style.backgroundColor = "red";
    } else {
      div1.style.backgroundColor = "red"
      div2.style.backgroundColor = "green";
    }
  })
}
touchEvent(div1, div2)

const circle = document.querySelector("#circle");
circle.onmousedown = function(event) {

  let shiftX = event.clientX - circle.getBoundingClientRect().left;
  let shiftY = event.clientY - circle.getBoundingClientRect().top;

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    circle.style.left = pageX - shiftX + 'px';
    circle.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  circle.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    circle.onmouseup = null;
  };
};

circle.ondragstart = function() {
  return false;
};