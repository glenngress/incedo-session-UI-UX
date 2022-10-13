module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
          userid: String,
          password: String,
          name: String,
          activefrom:Date,
          role:String,
          status:String
        },
    );
  
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const User = mongoose.model("user", schema);
      return User;
  };

