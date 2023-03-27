window.addEventListener('load', () => {
    if(counter.screen.textContent == 0){
        counter.defaultColor();
    }
     counter.count();
})
 
const counter = {
    result : 0,
    buttons : document.querySelectorAll('button'),
    screen: document.querySelector('.displayer'),
    defaultColor : function(){
        document.body.style.background = 'linear-gradient(45deg, darkslategray, goldenrod)';
    },
    count : function(){
        this.screen.textContent = 0
        
       
    this.buttons.forEach( button => {
        button.addEventListener('click', () =>{
                if(button.textContent == '+'){
                    this.result ++;
                    this.screen.textContent = this.result;
                }
                else{
                    this.result --;
                    this.screen.textContent = this.result;
                }
                if (this.screen.textContent > 0){
            document.body.style.background = 'linear-gradient(45deg, coral, dodgerblue)'
        }
        else if(this.screen.textContent < 0){
            document.body.style.background = 'linear-gradient(45deg, brown, indigo)'

        } 
        else{
            this.defaultColor();
        }
        })
       
        
    })

    
}}
