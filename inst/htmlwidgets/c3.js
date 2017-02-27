HTMLWidgets.widget({

  name: 'c3',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {
           var colvalues = HTMLWidgets.dataframeToD3(x.data);
           var data1=[];
           var data2=[];
          
           for(i=0;i<colvalues.length;i++){
            data1.push( colvalues[i].data1);
             //data2.push(colvalues[i]);
             data2.push(colvalues[i].data2);
            
           }
       
         
        // TODO: code to render the widget, e.g.
       // el.innerText = x.message;
     var chart = c3.generate({
    bindto: '#'+el.id,
   // data: {
   //   columns: [
    //    ['data1', 30, 200, 100, 400, 150, 250],
    //    ['data2', 50, 20, 10, 40, 15, 25]
    //  ]
  //  }
    data: {
      columns:[
            data1,
            data2
          
            
            

        
       
        ]
      
      
    }
});
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});