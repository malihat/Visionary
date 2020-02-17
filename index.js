// console.log(navs);

// for (var i=0; i<navs.length; i++) {
//   navs[i].addEventListener('click', function() {
//     // this.classList.add('active');
//     console.log(this.style.color);
//   })
// }

// $(document).ready(function() { 
//   $('li').click(function() { 
//       $('li.list-group-item.active').removeClass("active"); 
//       $(this).addClass("active"); 
//   }); 
// });

// document.getElementsByTagName('ul li').addEventListener('click', function() {
//   document.getElementsByTagName('li.nav-item.active').classList.remove("active"); 
//   this.classList.add('active');
// }); 

// console.log(document.getElementsByTagName('li.nav-item.active'));

// $(".list-group-item").click(function() { 
              
//   // Select all list items 
//   var listItems = $(".list-group-item"); 
    
//   // Remove 'active' tag for all list items 
//   for (let i = 0; i < listItems.length; i++) { 
//       listItems[i].classList.remove("active"); 
//   } 
    
//   // Add 'active' tag for currently selected item 
//   this.classList.add("active"); 
// }); 


// $(document).ready(function() { 
//   $('li').click(function() { 
//       $('li.nav-item.active').removeClass("active"); 
//       $(this).addClass("active"); 
//   }); 
// }); 

// let navs = document.getElementsByClassName('nav-item');
// let navsLink = document.getElementsByTagName('li a');

// for (var i=0; i<navs.length; i++) {
//   if (navsLink.href == )
// }

// $(function(){
//   $('li').each(function() {
//     console.log($(this).prop('href'))
//     if ($(this).prop('href') == window.location.href) {
//       $('li.nav-item').addClass('current');
//     }
//   });
// });


// console.log(window.location.href);
// console.log($('li a').prop('href'));

var abc = document.querySelectorAll('.blog-text');
for (var i=0; i<abc.length; i++) {
  console.log(abc[i].textContent.substring(0, 100) + '...');
}

// console.log(abc);
