function Queue() {
      this.dataStore = [];
      this.enqueue = enqueue;         // 데이터 넣기
      this.dequeue = dequeue;         // 맨 앞의 데이터 뽑기
      this.toString = toString;       
      this.front = front;             // 앞에 있는 데이터 가져옴
      this.back = back;               // 뒤에 있는 데이터 가져옴
      this.empty = empty;             // Queue 비어있는 지 체크
  }

  function enqueue(element) {
      this.dataStore.push(element);
  }

  function dequeue() {
      this.dataStore.shift();         // shift() 메서드는 배열에서 첫 번쨰 요소를 제거하고, 제거된 요소를 반환한다.
      /*
          const arr = [1,2,3];
          const firstElement = arr.shift();
          console.log(arr);
          console.log(firstElement);
      */
  }

  function front() {
      return this.dataStore[0];
  }

  function back() {
      return this.dataStore[this.dataStore.length-1];
  }

  function toString() {
      var str = '';
      for(var i=0; i<this.dataStore.length; i++) {
          str += this.dataStore[i] + ' ';
      }
      return str;
  }

  function empty() {
      if(this.dataStore.length == 0) {
          return true;
      } else {
          return false;
      }
  }

  /* 실행 */
  var queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue.toString());  // 1 2 3 4
  queue.dequeue();                // 1 뽑기
  console.log(queue.front());     // 1 뽑고 난 후 front 2 
  console.log(queue.back());      // 4 
  console.log(queue.toString());  // 2 3 4
