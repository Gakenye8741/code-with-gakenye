let header = document.querySelector('header');
        let menutoggle  =  document.querySelector('.menutoggle');

        menutoggle.onclick = function(){
            header.classList.toggle('act');
        }