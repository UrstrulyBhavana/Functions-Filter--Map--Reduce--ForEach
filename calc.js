
const students = [
    {
        name: "John",
        grades: [82, 90, 88]
    },
    {
        name: "Alice",
        grades: [80, 75, 90]
    },
    {
        name: "Bob",
        grades: [85, 90, 88]
    },
    {
        name: "Jacky",
        grades: [85, 94, 68]
    },
    {
        name: "Jamy",
        grades: [65, 74, 88]
    }
]

//arrayname.foreach()

    students.forEach(student=>{

    let sum = student.grades.reduce((Accumulator,CurrentValue)=>
    {
      return  Accumulator+CurrentValue       //reduce 2 parameters, if we return in reduce output will be kept in accumulator and next value is kept in currentvalue
    })
    let averageGrade = sum/student.grades.length
    student.averageGrade = averageGrade

})
console.log(students)



//map()
const books=[
    {title:"The Great Gatsby",author:"F.Scott Fitzgerald",Price:12.99},
    {title:"To Kill a Mockingbird",author:"Harper Lee",Price:9.99},
    {title:"Lord of the Files",author:"William Golding",Price:19.20}
]
 function formatBooks(booksArray){
  return booksArray.map(book => `${book.title}:${book.Price}`)
 }

const formattedBooks = formatBooks(books)
 console.log(formattedBooks)



//reduce()

 const purchases = [
    { item: "Shoes", price: 89.99 },
    { item: "Headphones", price: 49.99 },
    { item: "Watches", price: 169.69 },
    { item: "Books", price: 209.03 }
    
]

function calculateTotalAmount(purchasesArray) {
    return purchasesArray.reduce((total, purchase) => total + purchase.price, 0)
}

const totalAmountSpent = calculateTotalAmount(purchases)
console.log(totalAmountSpent)

//Filter()

const employees = [
    { name: "Alice", department: "Engineering", salary: 60000 },
    { name: "Bob", department: "Marketing", salary: 55000 },
    { name: "Bhavana", department: "Engineering", salary: 99000 },
    { name: "Durga", department: "DigitalMarketing", salary: 85000 },
    { name: "Bhavani", department: "Engineering", salary: 75000 }
    
]

function filterEmployees(employeesArray) {
    return employeesArray.filter(employee => employee.department === "Engineering" && employee.salary > 50000)
}

const filteredEmployees = filterEmployees(employees)
console.log(filteredEmployees)


