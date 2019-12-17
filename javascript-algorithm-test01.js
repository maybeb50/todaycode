// 코딩 테스트 연습

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant, 
// 완주한 선수들이 담긴 배열 completion 이 주어질 때 
// 완주하지 못한 선수 이름을 return 하도록 solution 함수를 작성


function solution(participant, completion) {
  var answer = [];

  participant.sort();
  completion.sort();

  for (var i in participant) {
    if (participant[i] !== completion[i]) {
      return (answer += participant[i]);
    }
  }
}

var list1 = ["leo", "kiki", "eden"];
var list2 = ["eden", "kiki"];

solution(list1, list2);


