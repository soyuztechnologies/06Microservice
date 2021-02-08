module.exports = {

    printf: function(arrObject){
      for(var i=0;i<arrObject.length;i++){
        console.log(arrObject[i]);
      }
    },
    
    countArray: function(arrObject){
      return arrObject.length ;
    },

    removeLastItem: function(array) {
      array.pop();
    }
  
  }