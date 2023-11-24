class Stack {
  constructor() {
    this.collection = new Map();
    this.nextIndex = 0;
  }

  isEmpty() {
    return this.nextIndex === 0;
  }

  size() {
    return this.nextIndex;
  }

  lastPosition() {
    return this.nextIndex - 1;
  }

  peek() {
    return this.collection.get(this.lastPosition());
  }

  push(element) {
    this.collection.set(this.nextIndex, element);
    this.nextIndex++;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    const lastValue = this.collection.get(this.lastPosition());
    this.collection.delete(this.lastPosition());
    this.nextIndex--;

    return lastValue;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.size());
// output: 5
console.log(stack.isEmpty());
// output: false

while (!stack.isEmpty()) {
  console.log(stack.pop());
  // output:
  // 5
  // 4
  // 3
  // 2
  // 1
}

console.log(stack.isEmpty());
// output: true
