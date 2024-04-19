import Contenedor from './Components/Contenedor'

function App (){
    return (<>
    <aside className=" w-1/12 h-full bg-slate-500">

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