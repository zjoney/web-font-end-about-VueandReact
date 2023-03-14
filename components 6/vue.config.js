module.exports = {
  devServer: {
    before(app) {
      app.get('/api/heros', (req,res) => {
        res.json([
          { id: 1, name: "卤蛋", classify: "射手" },
          { id: 2, name: "后羿", classify: "射手" }
        ] )
      })
    }
  }
}