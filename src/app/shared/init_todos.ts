export class Init {
  load(){
    if(localStorage.getItem('todos')===null || localStorage.getItem('todos')===undefined){
      console.log('No Todos Found !....creating....')
      let todos = [

          {
            text:'write some angular code'
          },
          {
            text:'write some GO code'
          },
          {
            text:'write some Node code'
          }
      ];
      localStorage.setItem('todos',JSON.stringify(todos));
      return
    }
    else {
      console.log('Found Todos...')
    }
  }
}
