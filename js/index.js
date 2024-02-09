let i = 0;
document.getElementById('hamburger').onclick = () => {
    console.log('clicked');
    if(i%2 == 0){
        document.getElementById('links').style.display = 'block';
        i++;
    }
    else{
        document.getElementById('links').style.display = 'none';
        i++;
    }
}