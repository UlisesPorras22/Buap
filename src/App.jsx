import Contenedor from './Components/Contenedor'
import Slider from './Components/Slider';

function App (){
    return (<>
    <aside className="flex items-center justify-center w-1/12 h-full ">
            <Slider title=''>
            </Slider>
    </aside>
    <section className=" w-11/12 h-full flex">
        <div>
            
        </div>
        <div className=' w-1/2 h-full flex flex-col items-center justify-evenly'>
            
            <Contenedor title='Alerta'>
                <h5>Riesgo: <span> cbeyb jeybui frbiub </span></h5>
                <h6>Información: <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempore quasi nostrum at perferendis dolorum, suscipit earum id perspiciatis cum, est omnis, debitis facere fuga voluptas quo et eveniet cupiditate?</span></h6>
            </Contenedor>
            <Contenedor title='Recomendaciones'>
                <div className='w-full h-5/6 flex items-center justify-evenly'>
                <textarea className='resize-none' name="" cols="50" rows="8"/>
                <button className=' bg-lime-600 rounded w-1/4 h-36 active:bg-lime-300 text-slate-200 font-extrabold'>Guardar</button>
                </div>
            </Contenedor>
           
        </div>
    </section>
    </>)
}

export default App;