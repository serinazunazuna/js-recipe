//オブジェクトを使えるようになる！

//key（キー）：value（バリュー）＝＞プロパティ

const serina = {
  name: "せりな",
  age: 21,
  sports: ["バスケ", "ダンス"],
  familly: {
    mama: "ルミ子",
    papa: "ヒデオ",
  },
  isStudent: true,
  aisatsu: function() {
    alert("こんにちは！")
  },
}

console.log(serina.familly.mama)

console.log(serina)
console.log(serina.name)
console.log(serina.age)
