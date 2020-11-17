let buttons = document.getElementsByClassName('fund_list')
let articles = document.getElementsByClassName('fund_detail')
let fund_img = document.getElementById('fund_img')
let fund_img_icon = document.getElementsByClassName('fund_img_icon')[0]
let pos = ['50% 0%','50% 50%','50% 50%','50% 50%','50% 40%']
let size = [ '80%', '80%', '80%','80%','80%']

for(let i = 0 ; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ()=> {
    for(let j = 0; j < articles.length; j++) {
      if(i == j)
        articles[j].classList.add('show_fund_details'),
        buttons[j].classList.add('on')
      else
        articles[j].classList.remove('show_fund_details'),
        buttons[j].classList.remove('on')   
    }
    fund_img.style.backgroundImage = `url(./images/fund_bg_0${i+1}.jpg)`
    fund_img.style.backgroundPosition = pos[i];
    fund_img.style.backgroundSize = size[i];
    fund_img_icon.style.background = `url(./images/fund_list_0${i+1}.png)`
    // fund_img_icon.style.backgroundSize = `cover`
    fund_img_icon.style.backgroundPosition = `center`
    fund_img_icon.style.backgroundRepeat = `no-repeat`
  })
}

