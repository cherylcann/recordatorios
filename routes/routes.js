// Modules
const express = require("express")
const router = express.Router();

// Routes
// router.get('/', async(req, res) => {
//     res.render("index.html", {
//         member: false
//     }
//     );
// });

router.get('/', async(req, res) => {
    res.render("preindex.html");
});

router.get('*', function (req, res) {
    res.render("error.html");
})

// Export
module.exports = router;