export class Init {
  load(){
    if(localStorage.getItem('elements')===null || localStorage.getItem('elements')===undefined){
      console.log('No Elements Found !....creating....')
      let elements = [];
      localStorage.setItem('elements',JSON.stringify(elements));
      return
    }
    else {
      console.log('Found Elements...');
    }
  }
}
