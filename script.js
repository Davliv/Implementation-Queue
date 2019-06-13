class Queue {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.isEmpty()) 
            return "Underflow"; 
            return this.items.shift();
    }
    
    front() {
       if (this.isEmpty())
            return "No elements in Queue" ; 
            return this.items[0];
    }

    isEmpty() {
            return this.items.length == 0 ; 
    } 
}
var queue  = new Queue;
 queue.push(55);
 queue.push(85);
 queue.push(35);
 queue.push(22);
 queue.pop();
 queue.push(33);
 queue.push(44);
console.log(queue);