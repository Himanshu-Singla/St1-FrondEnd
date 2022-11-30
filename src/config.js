module.exports = global.config = {
    PORT: "8000",
    base_url: function(){
        return "http://localhost:"+this.PORT
    }
}