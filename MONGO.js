// Create Database
use library

// Create Collection
db.createCollection("books")

// Insert Data
db.books.insertMany([
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
        genre: "Fiction",
        ISBN: "9780743273565"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        genre: "Fiction",
        ISBN: "9780061120084"
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        genre: "Dystopian",
        ISBN: "9780451524935"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedYear: 1937,
        genre: "Fantasy",
        ISBN: "9780547928227"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        publishedYear: 1997,
        genre: "Fantasy",
        ISBN: "9780747532699"
    }
])

// Retrieve Data
db.books.find().pretty()
db.books.find({ author: "George Orwell" }).pretty()
db.books.find({ publishedYear: { $gt: 2000 } }).pretty()

// Update Data
db.books.updateOne(
    { ISBN: "9780743273565" },
    { $set: { publishedYear: 1926 } }
)
db.books.updateMany(
    {},
    { $set: { rating: 5 } }
)

// Delete Data
db.books.deleteOne({ ISBN: "9780451524935" })
db.books.deleteMany({ genre: "Fantasy" })

// Data Modeling for E-commerce Platform
db.createCollection("users")
db.users.insertMany([
    {
        username: "john_doe",
        email: "john@example.com",
        password: "hashed_password",
        address: "123 Main St, Anytown, USA"
    },
    {
        username: "jane_doe",
        email: "jane@example.com",
        password: "hashed_password",
        address: "456 Elm St, Othertown, USA"
    }
])

db.createCollection("products")
db.products.insertMany([
    {
        name: "Laptop",
        description: "A high performance laptop",
        price: 999.99,
        stock: 50
    },
    {
        name: "Smartphone",
        description: "A latest model smartphone",
        price: 699.99,
        stock: 100
    }
])

db.createCollection("orders")
db.orders.insertMany([
    {
        userId: ObjectId("user_id_here"),
        products: [
            { productId: ObjectId("product_id_here"), quantity: 1 }
        ],
        total: 999.99,
        orderDate: new Date()
    }
])

// Aggregation Pipeline
db.books.aggregate([
    { $group: { _id: "$genre", total: { $sum: 1 } } }
])
db.books.aggregate([
    { $group: { _id: null, avgPublishedYear: { $avg: "$publishedYear" } } }
])
db.books.find().sort({ rating: -1 }).limit(1).pretty()

// Indexing
db.books.createIndex({ author: 1 })
