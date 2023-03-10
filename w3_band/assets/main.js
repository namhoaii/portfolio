const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showBuyTicket() {
    modal.classList.add('open');
}

function hideBuyTicket() {
    modal.classList.remove('open');
}

for(const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click', showBuyTicket);
}

modalClose.addEventListener('click', hideBuyTicket);
modal.addEventListener('click', hideBuyTicket);
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;


// Đóng/mở menu mobile
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }

    // Tự động đóng khi chọn menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
    for(var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        
        menuItem.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        }
    }
}