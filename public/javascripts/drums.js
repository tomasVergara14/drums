window.addEventListener("keydown", function(e){
    //cada key tiene su code y el objeto evento brinda esa info

    //buscar si hay un elemento audio en la pagina que tenga el mismo data-key que el keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    //si no hay retornamos
    if(!audio)return

    //si hay lo podemos reproducir con la funcion .play() pero para que podamos tocar varias veces seguidas
    audio.currentTime = 0 //usamos currentTime = 0
    audio.play()

    //Seleccionamos la key que vamos a tocar para darle un efecto visual
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    //le agregamos la classList para cabiar el efecto al ser tocado
    key.classList.add("playing")

    //para quitar la transicion y que vuelva a su estado inicial podemos hacer un transitionEnd
    //podemos escuchar en cada key para revisar la transicion
    const keys = document.querySelectorAll('.key')

    //escuchamos todas para recorrerarlas y usar cada una individual, no se pueden usar events en arrays

    //declaramos la funcion removeTransition
    function removeTransition(e){
        //los eventos al cambiar las propiedades dan un propertyName de lo que cambio, buscamos el transform
        if(e.propertyName !=="transform" ) return //esto es para saltearlo
        this.classList.remove('playing')// le quitamos a la key que estamos utilizando (this) la clase playing
    }

    keys.forEach(key=> key.addEventListener('transitionend', removeTransition))
    
  })