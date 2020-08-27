function Employee(id,name,salary){
    this.Id=id
    this.ename=name
    this.salary=salary
    this.incSalary=function(amount){
        this.salary+=amount
    }
}
let obj=new Employee("E101","Anna",30000)
let obj1=new Employee("E102","Anu",30000)
let obj2=new Employee("E103","Arun",32000)
let obj3=new Employee("E104","Amal",30000)
obj2.incSalary(8000)
console.log(obj2.salary)
function Person(name,age,address){
    this.Name=name
    this.age=age
    this.address=address
    this.display=function(){
        console.log("Name ",this.Name)
        console.log("Age ",this.age)
        console.log("Address ",this.address)
    }
}
let person1=new Person("Joe",22,"DSsdfbh")
person1.display()
let person2=new Person("Rose",22,"H101")
person2.display()
var numarry=[10,20,30,40,50,60,70,11,12]
//Array destruction
var [a,b,c,d,e,f,g]=numarry
console.log(a)
console.log(b)
console.log(numarry.every((x)=>x%2==0))
console.log(numarry.some((x)=>x%2==0))
