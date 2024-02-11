let setinp1 = document.querySelector('.setinp-1')
let setinp2 = document.querySelector('.setinp-2')
let setbtn = document.querySelector('.set-btn')
let set = document.querySelector('#set')
// =======
let log = document.querySelector('#login')
let loginp = document.querySelector('.loginp')
let logbtn = document.querySelector('.logbtn')
let img = document.querySelector('.prf')

setbtn.addEventListener('click', function(){
    let setinvalue1 = setinp1.value
    let setinvalue2 = setinp2.value
    if(setinvalue1 == '' && setinvalue2 == '' ){
        alert('please enter your new password')

    }else{
        if(setinvalue1 == setinvalue2){
            set.style.display= 'none'
            log.style.display= 'block'
        }else{
            alert('please type the same password')
        }
    }
})


logbtn.addEventListener('click',function(){
    let setinvalue1 = setinp1.value
    let setinvalue2 = setinp2.value
    let loginpvalue = loginp.value
    if(loginpvalue == ''){
        alert('please enter your password')
    }else{
        if(setinvalue1 && setinvalue2 == loginpvalue){
            log.style.display= 'none'
            img.style.display= 'block'
        }else{
            alert('invalid password')
        }
    }
})
