document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.cssText = 'background: #464545 no-repeat center center fixed; background-size: cover';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = ' background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7) ),url("../assets/bg1.jpeg") no-repeat center center fixed; background-size: cover';
});
