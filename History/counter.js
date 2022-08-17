let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        if(count > 1){
            value.style.color = 'red';
        }
        else if(count < -1){
            value.style.color = 'green';
        }
        else{
            value.style.color = "white";
        }
        value.textContent = count;
    });
});