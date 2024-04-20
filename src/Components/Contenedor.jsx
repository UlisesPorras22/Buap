
function Contenedor({children, title=""}) {
    return <div className="w-5/6 h-2/5 bg-cyan-800 rounded-2xl p-5">
        <h3 className=" font-extrabold text-slate-200">{title}</h3>
        {/* {children} */}
    </div>
}

export default Contenedor;