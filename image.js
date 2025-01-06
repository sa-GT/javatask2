document.getElementById("select").addEventListener('click',function(){
    let d = document.getElementById("select").value
    let m = document.getElementById("images")
    if(d == "p"){
        m.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/800px-Flag_of_Palestine.svg.png"
    }else if(d == "jordan"){
        m.src="https://media.istockphoto.com/id/182826898/photo/jordan-flag.jpg?s=612x612&w=0&k=20&c=fgvRQ5EmJQwta-Su75eDrN5EuI5RWDRAkGvmOcU4TQM="
    }else{
        m.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/2560px-Flag_of_Iraq.svg.png"
    }
})