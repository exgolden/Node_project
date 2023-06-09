const { Router } = require("express");
const router = Router();
const { getUsers, createUser, getUserbyId, deleteUser, updateUser } = require("../controllers/index.controllers")

router.get("/users", getUsers);
router.get("/users/:id", getUserbyId);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

module.exports = router;