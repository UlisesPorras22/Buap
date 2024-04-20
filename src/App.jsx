import Contenedor from './Components/Contenedor'

function App (){
    return (<>
    <aside className=" w-1/12 h-full bg-slate-500">

    </aside>
    <section className=" w-11/12 h-full flex">
        <div className=' w-1/2 h-full flex flex-col items-center justify-evenly'>
            <Contenedor title='Alerta'>
                <h5>Riesgo: <span> cbeyb jeybui frbiub </span></h5>
                <h6>Información: <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempore quasi nostrum at perferendis dolorum, suscipit earum id perspiciatis cum, est omnis, debitis facere fuga voluptas quo et eveniet cupiditate?</span></h6>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
</svg>

            </Contenedor>
            <Contenedor title='Recomendaciones'>
                <div className='w-full h-5/6 flex items-center justify-evenly'>
                <textarea className='resize-none' name="" cols="50" rows="8"/>
                <button className=' bg-lime-600 rounded w-1/4 h-36 active:bg-lime-300'>Guardar</button>
                </div>
            </Contenedor>
        </div>
    </section>
    </>)
}

export default App;