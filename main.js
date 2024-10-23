const aliceTumbling = [  
  { transform: "rotate(0) scale(1)" },  
  { transform: "rotate(360deg) scale(0)" },  
];  
  
const aliceTiming = {  
  duration: 2000,  
  iterations: 1,  
  fill: "forwards",  
};  
  
const alice1 = document.querySelector("#alice1");  
const alice2 = document.querySelector("#alice2");  
const alice3 = document.querySelector("#alice3");  
  
// 使用async和await实现动画依次播放  
const animateAlice = async (aliceElement) => {  
  await aliceElement.animate(aliceTumbling, aliceTiming).finished;  
};  
  
(async () => {  
  await animateAlice(alice1);  
  await animateAlice(alice2);  
  await animateAlice(alice3);  
})();