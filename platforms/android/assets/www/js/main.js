 function main(){
                 var w1 = window.innerWidth;
                var h1 = window.innerHeight;
                var w = window.innerWidth + 'px';
                var h = window.innerHeight + 'px';
                document.getElementById('main').style.height=h;
                document.getElementById('main').style.width=w;
                document.getElementById('dash').style.height=h;
                document.getElementById('dash').style.width=w;
                
            }

function logintoggle(a){
    if(a==1){
        document.getElementById('form2').style.display="none";
        document.getElementById('form').style.display="block";
        document.getElementById('greeting').style.display="none";
        document.getElementById('login').style.fontSize="8vw";
        document.getElementById('signup').style.fontSize="5.5vw";
        document.getElementById('submitlogin').style.display="block";
        document.getElementById('submitsignup').style.display="none";
    }
    else{
        document.getElementById('form2').style.display="block";
        document.getElementById('form').style.display="none";
        document.getElementById('greeting').style.display="block";
        document.getElementById('login').style.fontSize="5.5vw";
        document.getElementById('signup').style.fontSize="8vw";
        document.getElementById('submitlogin').style.display="none";
        document.getElementById('submitsignup').style.display="block";
        
    }
}

function submit(b){
    
    if (b==1)
        {
            var userNameFilled=document.getElementById('userNameLog').value;
            var userNameStored=localStorage.getItem("userName");
            
            var passWordFilled=document.getElementById('passWordLog').value;
            var passWordStored=localStorage.getItem("passWord");
            
            if(userNameFilled=='' || passWordFilled=='')
                {
                    document.getElementById('sucssesmsg').style.display="none";
                    document.getElementById('errormsg').style.display="none";
                     document.getElementById('emptymsg').style.display="block";
                    document.getElementById('circle1').className="animated wobble"; 
                    navigator.vibrate([1000]);
                }
            
           else if ( userNameFilled == userNameStored && passWordFilled == passWordStored )
                {
                    document.getElementById('circle1').className="animated rubberBand";
                    document.getElementById('sucssesmsg').style.display="block";
                    document.getElementById('errormsg').style.display="none";
                    document.getElementById('emptymsg').style.display="none";
                    navigator.notification.beep(1);
                    setTimeout(function(){
                        document.getElementById('dash').style.display="block";
    document.getElementById('main').className="animated fadeOut";
                    },3300);
                }
            else{
                    document.getElementById('sucssesmsg').style.display="none";
                    document.getElementById('errormsg').style.display="block";
                    document.getElementById('emptymsg').style.display="none";
                    document.getElementById('circle1').className="animated wobble";
                     navigator.vibrate([1000]);
            }
            
            setTimeout(function(){

	               document.getElementById('sucssesmsg').style.display="none";
                   document.getElementById('errormsg').style.display="none";
                   document.getElementById('emptymsg').style.display="none";
                   document.getElementById('circle1').className=" ";
                
            },3300);
        }
    else{
            var userName=document.getElementById('userName').value;
            localStorage.setItem("userName",userName );
		      var passWord=document.getElementById('passWord').value;
		      localStorage.setItem("passWord",passWord );
                var email=document.getElementById('email').value;
		        localStorage.setItem("email",email );
            
            if(userName=='' || passWord=='' || email=='' )
                {
                    document.getElementById('sucssesmsg').style.display="none";
                    document.getElementById('errormsg').style.display="none";
                    document.getElementById('emptymsg').style.display="block";
                    document.getElementById('circle2').className="animated wobble"; 
                    navigator.vibrate([1000]);
                }
            else{
                    document.getElementById('circle2').className="animated rubberBand";
                    document.getElementById('sucssesmsg').style.display="block";
                    document.getElementById('errormsg').style.display="none";
                    document.getElementById('emptymsg').style.display="none";
                    navigator.notification.beep(1);
                    setTimeout(function(){
                        document.getElementById('dash').style.display="block";
    document.getElementById('main').className="animated fadeOut";
                    },3300);
                        
                    
                
                }
        
        setTimeout(function(){

	               document.getElementById('sucssesmsg').style.display="none";
                   document.getElementById('errormsg').style.display="none";
                   document.getElementById('emptymsg').style.display="none";
                   document.getElementById('circle2').className=" ";
                
            },3300);
            
    }
}


var element = document.getElementById('tizi'),
    x = 0, y = 0;

interact(element)
  .draggable({
    inertia: true,
    restrict: {
      restriction: element.parentNode,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: true
    },
    onstart: function(event){
      document.getElementById('optionTizi').className="animated bounceOutDown"; 
    }
    
  })
  .on('dragmove', function (event) {
    x += event.dx;
    y += event.dy;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';
  })
  .on('tap', function (event) {
    event.target.style.transform = 'translate(42.3vw, -60vh)';
    document.getElementById('optionTizi').style.display="block";
    document.getElementById('optionTizi').className="animated bounceInUp";
    document.getElementById('optionTizi').classList.remove('bounceOutDown');
    event.preventDefault();
  });

/*
interact('.tizi')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('tiziDisappered');
    event.document.getElementById('tiziAlive').style.display="block";
    event.preventDefault();
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large');
    event.currentTarget.classList.remove('rotate');
    event.preventDefault();
  })
  .on('hold', function (event) {
    event.currentTarget.classList.toggle('rotate');
    event.currentTarget.classList.remove('large');
  });


function callTizi(){
    alert('a');
    document.getElementsByClassName('tizi').style.display="none";
    document.getElementById('tiziAlive').style.display="block";
}*/


function sideBar(a){
    if (a==1){
     
        document.getElementById('sideBar').style.display="block";
        document.getElementById('sideBar').className="animated slideInLeft";
        document.getElementById('closebar').style.display="inline";
    }
    
    else{
        document.getElementById('sideBar').className="animated slideOutLeft";
        document.getElementById('closebar').style.display="none";
    }
}

function yo(){
    document.getElementById('dash').style.display="block";
    document.getElementById('main').className="animated fadeOut";
}

function offdash()
{
    document.getElementById('offdash').style.display="block";
    document.getElementById('peopledash').style.display="none";
}
function peopledash()
{
    document.getElementById('offdash').style.display="none";
    document.getElementById('peopledash').style.display="block";
}
function pollnow(l){
    if(l==1)
        {
            document.getElementById('text').innerHTML="Inform";
            document.getElementById('chnge').className="fa fa-pencil fa-4x";
            document.getElementById('pollnow').style.display="block";
        }
    else if(l==2)
        {
             document.getElementById('text').innerHTML="Poll";
            document.getElementById('chnge').className="fa fa-pie-chart fa-4x";
            document.getElementById('pollnow').style.display="block";
        }
    else if(l==3)
        {
             document.getElementById('text').innerHTML="Ask";
            document.getElementById('chnge').className="fa fa-question-circle fa-4x";
            document.getElementById('pollnow').style.display="block";
        }
     else if(l==4)
        {
             document.getElementById('text').innerHTML="Report";
            document.getElementById('chnge').className="fa fa-bullhorn fa-4x";
            document.getElementById('pollnow').style.display="block";
        }
     else
        {
             document.getElementById('text').innerHTML="Suggestion";
            document.getElementById('chnge').className="fa fa-commenting fa-4x";
            document.getElementById('pollnow').style.display="block";
        }
}

function closee(){
   document.getElementById('pollnow').style.display="none";
    
}

function home(){
    document.getElementById('offdash').style.display="none";
    document.getElementById('peopledash').style.display="none";
}

function vroom(){
    var rt=document.getElementById('datata').value;
    console.log(rt);
    document.getElementById('dataU').innerHTML=rt;
}