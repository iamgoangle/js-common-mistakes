// example 1
function print () {
	var me = this;
	this.name = "Teerapong Singthong";
	this.getName = function () {
		console.log(this.name)
	}

	return me;
}

var closureMe = print();
closureMe.getName();

// example 2
function print(lastName) {
  return function(firstName) {
    // ภายใต้ฟังก์ชันนี้ตัวแปร lastName ไม่หายไปไหน
    console.log(`${firstName} ${lastName}`)
  }
}

// ภายหลังเรียก print ตัวแปร lastName ควรถูกทำลาย
// แต่ด้วยความสามารถของ closure ทำให้ตัวแปรนี้ยังคงอยู่
// และเข้าถึงได้จากฟังก์ชันภายใน
const printSmithFamily = print('Smith')

printSmithFamily('John') // John Smith
printSmithFamily('Adam') // Adam Smith
