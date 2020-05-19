let handleHelloWorld = (req, res) => {
    return res.render("homepage.ejs");
};

module.exports = {
    handleHelloWorld: handleHelloWorld
};
