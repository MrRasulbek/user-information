function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}
function color() {
               r = random(0, 255)
               g = random(0, 255)
               b = random(0, 255)
               return "rgb(" + r + "," + g + "," + b + ")"
}
let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "0.5s"
}, 1000);

for (let i = 1; i <= 10; i++) {
               let firstName = prompt("Iltimos, "+i+"-foydalanuvchining ismini kiriting: ", "Name")
               while(!isNaN(firstName)){
                              firstName = prompt("Iltimos, "+i+"-foydalanuvchini ismini yozayotganingizda faqat harflardan foydalaning !","Name")
               }
               let age = +prompt("Iltimos, "+i+"-foydalanuvchining yoshini kiriting: ", 35)
               while(isNaN(age)){
                              age = +prompt("Iltimos, "+i+"-foydalanuvchining yoshini yozayotganingizda faqat sonlardan foydalaning !",35)
               }
               const users = {
               }
               users.personInfo = "Foydalanuvchi => "+i
               users.personName = i+"-foydalanuvchining ismi: "+firstName
               users.personAge = i+"-foydalanuvchining yoshi: "+age
               for (const key in users) {
                              console.log(users[key]);
               }
}
alert("Bu dasturdan foydalanganingiz uchun rahmat, sizga omad tilaymiz !")
console.log("Bu dasturdan foydalanganingiz uchun rahmat, sizga omad tilaymiz !")