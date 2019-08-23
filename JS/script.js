
//На это можете не обращать внимание, задание со следующего коммента. Строка №40//
let [t1,t2,t3,t30,t4]=[`1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), 
callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции:`,
`2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то конкретную фигуру, 
а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать 
объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, input - входные 
параметры, по которым было произведено вычисление.`,
`3. Необходимо написать иерархию классов вида:`,
`Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.`,
`4*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, 
в итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.`] 

const taskTag = `<h3>${t1}</h3>
				<button class="btn1">Показать работу функции "loop"</button>
				<pre class="task"> 
				Это сама функция, и ее простейший пример решения:

				const loop  = (times = 0, callback = null) => {
					for (var i = 0; i < times; i++) {
						callback();			
					}
				};

				loop(5, callback = ()=> alert("функция сработает " + 5 + " раз!") )'</pre>
				
				<h3>${t2}</h3>
				<pre class="task"> 
				const calculateArea = (a,b,c,d) => {
					let {area,figure,input} = {
						area: a,
						figure: b,
						input:[c,d]
					}
						return {area,figure,input};
				};

				console.log (calculateArea(4,'квадрат', 2,2))

				P/s. Результат в консоли))</pre>

				<h3>${t3}</h3>
				<p>${t30}</p>
				<h3>${t4}</h3>`

const write = () => {
	document.querySelector (`.task`).innerHTML = taskTag;
}

write();

/*1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), 
callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции*/

let btn1 = document.querySelector(`.btn1`);
btn1.onclick = (tm)=>{
	var tm = +prompt(`Введите значение параметра "times": `);
	
	const loop  = (times = 0, callback = null) => {
		for (var i = 0; i < times; i++) {
			callback();			
		}
	};
	loop(tm, callback = ()=> alert("функция сработает " + tm + " раз!") )
	console.log(tm);
}
	
/*2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то конкретную фигуру, 
а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать 
объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, input - входные 
параметры, по которым было произведено вычисление.*/
	

const calculateArea = (a,b,c,d) => {
	let {area,figure,input} = {
		area: a,
		figure: b,
		input:[c,d]
	}
	return {area,figure,input};
};

console.log (calculateArea(4,'квадрат', 2,2))


/*3. Необходимо написать иерархию классов вида:`,
`Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод 
disaplyInfo класс Human и вернет строку с параметрами Human'a.*/

class Human {
	constructor(name, age, dateOfBirth){
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}
	displayInfo() {
		console.log(this)
	}

}

class Employee extends Human {
	constructor(name, age, dateOfBirth,salary,department){
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}
	displayInfo() {
		super.displayInfo();
	}
}

class Developer extends Employee{
	constructor(name, age, dateOfBirth,salary,department, manager = '') {
		super(name, age, dateOfBirth,salary,department);
		this.manager = manager;
	}
	reManager (manager) {
		this.manager = manager;
	}
	displayInfo(){
		super.displayInfo();
	}
}

class Manager extends Employee{
	constructor(name, age, dateOfBirth,salary,department, developers = []) {
		super(name, age, dateOfBirth,salary,department);
		this.dev = developers;
	} 
	addDev(developer){ 
		this.dev.push(developer);
	}
	delDev(developer) {
		this.dev.pop();
	}
}

let newManager = new Manager('Kot', 31, 1988, 3, 'IT');

console.log(newManager);
newManager.addDev();
console.log (newManager);
newManager.delDev();
console.log(newManager);

let newDeveloper = new Developer();
console.log (newDeveloper);
newDeveloper.reManager();
console.log (newDeveloper);