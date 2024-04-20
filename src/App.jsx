import Contenedor from './Components/Contenedor'
import Slider from './Components/Slider';

function App (){
    return (<>
    <aside className="flex items-center justify-center w-1/12 h-full ">
            <Slider title=''>
            </Slider>
    </aside>
    <section className=" w-11/12 h-full flex">
        <div className=' w-1/2 h-full flex flex-col items-center justify-evenly'>
            
            <Contenedor title='Alerta'>
                
            </Contenedor>
            <Contenedor title='Recomendaciones'>
                
            </Contenedor>
        </div>
    </section>
    </>)
}

export default App;