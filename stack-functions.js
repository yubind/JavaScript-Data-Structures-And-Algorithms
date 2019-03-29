//creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {}

    //add a value onto the end of the stack - push
    this.push = function(value) {
        this.storage[this.count] = value;
        //count increments by one since there's a new value added to the end of the stack(storage)
        this.count++;
    }
    //remove and return the value at the end of the stack - pop
    this.pop = function() {
        //return undefined if there's no value to delete
        if(this.count === 0) {
            return undefined;
        }
        
        //get this.count -1 & define a var result
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
         
    }

    this.size = function() {
        return this.count;
    }

    //return the last value of the stack
    this.peek = function() {
        return this.storage[this.count-1]
    }
 }

 var myStack = new Stack();
 
 myStack.push(1);
 myStack.push(2);
 myStack.push(3);
 myStack.push(4);
 myStack.pop();
 myStack.peek();
