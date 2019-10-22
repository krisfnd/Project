        //log
        console.log('yo');

        let name = 'yoyo';
        console.log(name);

        let object ={
            name:'han',
            age: '22'
        };
        console.log(object);

        let points= '110';
        let type = points > 100 ? 'gold': 'silver';
        console.log(type);

        for(let i =1;i<=5 ;i++){
            if(i%2!==0)console.log(i);
            else{
                console.log('-.-');
            }
        }

        let number = max (3,3);
        console.log(number);
        function max(a,b){
            if (a>b) return a;
            else return b ;
        }


        console.log(sum(10));

        function sum(limit){
            let sum = 0 ;
            for(let i =0 ; i<=limit;i++)
            if(i%3===0||i%5===0)
            sum += i ;
            return sum;
        }

        Star(10);
        function Star(rows){
            for(let row =1 ; row<=rows;row++){
            let  pattern = '';
            for(let i =0;i<row;i++)
            pattern += '*';
            console.log(pattern)
        }}  


       
     
        // circle.draw(); // Method
     

        //Factory function
        function createCircle(radius,location){
           return{
             radius,
                    draw: function(){
                    console.log('draw');
                }
            };
        }
        const circle1=createCircle(1);
        console.log(circle1);
        const circle2=createCircle(2);
        console.log(circle2);
        //Constructor function 
        function Circle(radius){
            this.radius=radius;
            this.draw=function(){
            console.log('draw');
            }
          }
          //Dynamic Nature of Objects
          const circle = {
              radius:1
          };
          circle.color = 'yellow';
          console.log(circle);
        //   new String();
        //   new Boolean();
        //   new Number();
          let objj = {value:10};
          function increase(obj){
              objj.value++;
          }
          increase(objj);
          console.log(objj);

          const message = 'this is hi';
          
          const another = new String('zzx');

          const anoter = "this is my first message";

          const now = new Date();
          const data1 = new Date('MAY 11 2018 09:00');
          const data2 = new Date(2018,4,11,9);

          now.setFullYear(2017);
        
          let address = {
            street:  'a',
            city: 'b',
            zipCode:'c'
          };

          function showAddress(addres){
            for(let key in address)
            console.log(key,address[key]);
          }

        showAddress(address);

        alert('load Success!!');

