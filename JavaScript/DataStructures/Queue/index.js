class Queue {
  constructor() {
    this.collection = new Map();
    this.firstIndex = 0;
    this.nextIndex = 0;
  }

  isEmpty() {
    return this.firstIndex === this.nextIndex;
  }

  size() {
    return this.nextIndex - this.firstIndex;
  }

  enqueue(element) {
    this.collection.set(this.nextIndex, element);
    this.nextIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    const firstValue = this.collection.get(this.firstIndex);
    this.collection.delete(this.firstIndex);
    this.firstIndex++;

    return firstValue;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.size());
// output: 5
console.log(queue.isEmpty());
// output: false

while (!queue.isEmpty()) {
  console.log(queue.dequeue());
  // output:
  // 1
  // 2
  // 3
  // 4
  // 5
}

console.log(queue.isEmpty());
// output: true
