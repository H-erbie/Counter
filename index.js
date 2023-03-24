window.addEventListener('load', () => {
    counter.count();
})
 
const counter = {
    addButton : document.querySelector('.add'),
    subtractButton : document.querySelector('.subtract'),
    screen: document.querySelector('.displayer'),
    count : function(){
        let result = 0;
        this.screen.textContent = result;

        this.addButton.addEventListener('click', () => {
            result ++;
            this.screen.textContent = result;
            if(result > 0){
                document.body.style.backgroundColor = 'coral'
            }
            
            
        })

        this.subtractButton.addEventListener('click', () => {
            result --;
            this.screen.textContent = result;
            if(result < 0){
                document.body.style.backgroundColor = 'pink'
            }
        
        })      
}
    
}