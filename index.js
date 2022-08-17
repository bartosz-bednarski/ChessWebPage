console.log('hemlo');

const modalBtn = document.getElementById('btnModal');
const modelOverlay = document.querySelector('.modalOverlay');
const modalBtnClose = document.getElementById('btnModalOverlayClose');
modalBtn.addEventListener('click',function(){
modelOverlay.style.visibility = 'visible';
});

modalBtnClose.addEventListener('click',function(){
    modelOverlay.style.visibility = 'hidden';
});