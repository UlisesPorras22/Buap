
function Slider({ children, title = "" }) {
    return (
        <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-center w-2/3 h-3/4 bg-cyan-800 rounded-2xl p-5">
          <div className=" flex-wrap justify-center">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
</svg>
</div><br/>
<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-dots" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 3v18h18" />
  <path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10.16 10.62l2.34 2.88" />
  <path d="M15.088 13.328l2.837 -4.586" />
</svg>
</div><br/>
<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 9h8" />
    <path d="M8 13h6" />
    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
  </svg>
</div><br/>
<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 9h8" />
    <path d="M8 13h6" />
    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
  </svg>
</div><br/>
<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 9h8" />
    <path d="M8 13h6" />
    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
  </svg>
</div>
          </div>
          {/* {children} */}
        </div>
      </div>
    );
  }
export default Slider;