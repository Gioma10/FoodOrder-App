export default function Meals(){

    async function fetch(){
        
      
            const  response= await fetch('http://localhost:3000/meals')
            if(!response.ok){

            }
            
        
    }    

    return (
        <ul>

        </ul>
    )
}