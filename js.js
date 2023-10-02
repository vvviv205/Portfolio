////////////////////// THEME CHANGER //////////////////////
var theme = document.getElementById('themeicon');
         theme.onclick = () => {
           document.body.classList.toggle('darkmode');
           if ( document.body.classList.contains('darkmode')) {
             theme.src = 'ico/dark theme icon/moon.png';
           }else{
             theme.src = 'ico/dark theme icon/sun.png';
           }

         }
////////////////////// LANGUAGE //////////////////////
    // Nav Bar
    var homenav = document.getElementById('homenav');
    var whonav = document.getElementById('whonav');
    var projectnav = document.getElementById('projectnav');
    var talknav = document.getElementById('talknav');
    var contactnav = document.getElementById('contactnav');
    // Part 1
    var iam = document.getElementById('iam');
    var frontendp = document.getElementById('frontend-p');
    var webdevp = document.getElementById('webdev-p');
    var frontendskills = document.getElementById('frontendskills-p');
    var learnmorebut = document.getElementById('learnmore-but');
    // Part 2
    var Ipart2 = document.getElementById('I-part2');
    var ppart2 = document.getElementById('p-part2');
    var p2part2 = document.getElementById('p2part2');
    var card1title = document.getElementById('card1-title');
    var card1p = document.getElementById('card1-p');
    var card2title = document.getElementById('card2-title');
    var card2p = document.getElementById('card2-p');
    var card3title = document.getElementById('card3-title');
    var card3p = document.getElementById('card3-p');
    // Part 3
    var titlepart3 = document.getElementById('title-part3');
    var pro1title = document.getElementById('pro1-title');
    var pro1p = document.getElementById('pro1-p');
    var pro1but= document.getElementById('pro1-but');
    var pro2title = document.getElementById('pro2-title');
    var pro2p = document.getElementById('pro2-p');
    var pro2but= document.getElementById('pro2-but');
    var pro3title = document.getElementById('pro3-title');
    var pro3p = document.getElementById('pro3-p');
    var pro3but= document.getElementById('pro3-but');
    // Part 4
    var part4title= document.getElementById('part4-title');
    // Part 5
    var part5title = document.getElementById('part5-title');
    var part5but = document.getElementById('part5-but');
    var notworking = document.getElementById('notworking');

    





    if ( localStorage.getItem("lan", "ar")) {

      iam.innerText= "انا";
      // Nav Bar
      homenav.innerText= "الرئيسية";
      whonav.innerText= "من انا؟";
      projectnav.innerText= "المشاريع";
      talknav.innerText= "تواصل";
      contactnav.innerText= "الدعم";
      homenav.style.fontSize= "1rem";
      whonav.style.fontSize= "1rem";
      projectnav.style.fontSize= "1rem";
      talknav.style.fontSize= "1rem";
      contactnav.style.fontSize= "1rem";
      // Part 1
      frontendp.innerText= "فرونت اند";
      webdevp.innerText= "مهندس برمجيات فرونت اند";
      frontendskills.innerText= "مبرمج فرونت اند صاحب خبرة في تصميم المواقع";
      learnmorebut.innerText= "اعرف المزيد";
      // Part 2
      Ipart2.innerText= "من انا؟";
      Ipart2.style.color = 'aqua';
      ppart2.innerText= "كل ما تريد معرفته عني في هذا الجزء";
      p2part2.innerText = "اضغط على الصورة لاظهار التفاصيل";
      card1title.innerText= "من انا؟";
      card1p.innerText= "محمد هيثم, من العراق,عمري 17, في الصف الاخير من الدراسة الاكاديمية في العراق";
      card1p.style.fontSize = '1rem';
      card2title.innerText= "المشوار البرمجي";
      card2p.style.fontSize = '1rem';
      card2p.innerText= "انا مبرمج منذ ايار/2021 , بدأت فرونت اند في نوفمبر/2021 وعملت العديد من المشاريع والمواقع";
      card3title.innerText= "الحلم";
      card3p.style.fontSize = '1rem';
      card3p.innerText= "حلمي هو التطور الى اعلى مستوى من التعلم والتطوير في مجالات البرمجة";
      // Part 3
      titlepart3.innerText= "مشاريعي";
      titlepart3.style.color = 'aqua';
      pro1title.innerText= "تسجيل دخول";
      pro1p.innerText= "هذا كان اول مشروع بسيط لي, لن انساه في نوفمبر/2021";
      pro2title.innerText= "العراق";
      pro2p.innerText= "وضعت معلومات بلدي العراق في هذا المشروع, لقد انهيته في شتاء 2021";
      pro3title.innerText= "المشروع الشخصي";
      pro3p.innerText= "انا اعمل عليه عليه الان لاضافة بعض الخصائص والمهارات";
      // Part 4 
      part4title.innerText= "تواصل معي";
      part4title.style.color = 'aqua';
      // Part 5
      part5title.innerText = "ارسل لنا !";
      part5but.innerText = "ارسال";
      notworking.innerText = "هذا الجزء معطل الان" ;
    }
////////////////////// TO TOP BUTTUN //////////////////////
var totop = document.getElementById('totop');
var hombut = document.getElementById('hombut');

     totop.style.transition= '0.5s'; 
     window.onscroll = function () {
       if (scrollY >=550) {
         totop.style.display = 'block';
         totop.style.transform = 'translateY(30px)';
       }else{
         totop.style.display = 'none';
       }
       
     }
     totop.onclick = ()=>{
       scroll({
         left:0,
         top:0,
         behavior: "smooth"
       });
     }
     hombut.onclick = ()=>{
       scroll({
         left:0,
         top:0,
         behavior: "smooth"
       });
     }
     
////////////////////// H1 CHANGER //////////////////////
var words = document.getElementsByClassName('word');

var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
