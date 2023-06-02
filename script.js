
let secondButton = document.getElementById('second-page');
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');
let navButtons = document.getElementsByClassName('nav-btn');

secondButton.addEventListener('click', scrollPage);
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);

function scrollPage()
{
    if(this.id === 'second-page'){
		window.scrollTo({
  			top: window.innerHeight * 2,
  			left: 0,
  			behavior: 'smooth'
		});
	}
	if(this.id === 'third-page'){
		window.scrollTo({
  			top: window.innerHeight * 1,
  			left: 0,
  			behavior: 'smooth'
		});
	}
	if(this.id === 'fourth-page'){
		window.scrollTo({
  			top: window.innerHeight * 3,
  			left: 0,
  			behavior: 'smooth'
		});
	}
}
	
