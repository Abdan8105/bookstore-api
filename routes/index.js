const router = require('express').Router();
const {  
    findAllBooks, 
    detailBook, 
    hapusBuku, 
    tambahBuku,
    ubahBuku,
 } = require("../controllers/BookController");
 const { findAllUsers, detailUser, tambahUser, deleteUser, updateUser } = require("../controllers/UserController");




router.get("/book", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", hapusBuku);

router.get("/user", findAllUsers);
router.get("/user:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);



module.exports = router;