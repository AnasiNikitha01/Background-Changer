const button = document.querySelector('button');
const drop = document.querySelector('.drop');
const names = document.querySelector('.name');

let color_array = ['linear-gradient(45deg,purple,rgb(149, 4, 202),rgb(119, 0, 255))',
'linear-gradient(45deg,rgb(187, 6, 130),rgb(3, 59, 89),rgb(3, 112, 170))',  
'linear-gradient(45deg,rgb(208, 235, 6),rgb(183, 4, 25),rgb(10, 151, 227))', 
// 'linear-gradient(125deg,rgb(150, 1, 236),rgb(1, 138, 72),rgb(231, 240, 58));',
'linear-gradient(45deg,rgb(114, 82, 217),rgb(66, 235, 153),rgb(53, 123, 161))', 
'linear-gradient(45deg,rgb(187, 87, 6),rgb(3, 59, 89),rgb(10, 151, 227))', 
'linear-gradient(45deg,rgb(6, 235, 124),rgb(4, 58, 183),rgb(10, 151, 227))',
'linear-gradient(45deg,rgb(23, 6, 33),rgb(184, 9, 94),rgb(231, 240, 58))', 
'linear-gradient(45deg,rgb(56, 115, 4),rgb(25, 199, 9),rgb(2, 210, 221))'];

let len = 0;

button.addEventListener('click',(event) => {
    event.preventDefault();
    

    if (len === color_array.length) {
        len = 0;
    }

        drop.style.background  = color_array[len];
        
        
        drop.classList.add('drop-anime');

        
        drop.addEventListener('animationend', () => {
            drop.classList.remove('drop-anime');
            if(len===0){
            names.style.background = color_array[0];
            }
            else{
                names.style.background = color_array[len-1];
            }
            
        });
        len++;
})