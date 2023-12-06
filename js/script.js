let isContentOpen = false;

function navigateTo(page) {
    let content = document.getElementById('content');

    if (isContentOpen) {
        content.innerHTML = '';
        isContentOpen = false;
    } else {
        content.innerHTML = `
      <h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum nisl magna, elementum sit amet scelerisque id, dapibus eu mauris. 
        Etiam suscipit nibh a dui volutpat sagittis. 
        Cras nec nunc at dolor venenatis faucibus. 
        Aliquam commodo sem diam. 
        Mauris sodales auctor leo, sed finibus erat pulvinar a. 
        Nam finibus lorem ac rutrum ornare. 
        Nullam rhoncus faucibus mauris vitae tincidunt. 
        Mauris tempus risus id sapien varius mollis. 
        Aliquam accumsan ornare erat id dictum. 
        Quisque in auctor sapien. 
        Nam nec magna metus. 
        Duis volutpat rhoncus massa, id hendrerit libero efficitur non. 
        Vestibulum quam lorem, dapibus eu tellus sed, ultrices dignissim sapien. 
        Integer vel mauris ut lorem semper pretium.
      </p>
      <a href="#" id="closeLink"></a>
    `;

        let closeLink = document.getElementById('closeLink');
        closeLink.addEventListener('click', function (event) {
            event.preventDefault();
            navigateTo(page);
        });

        isContentOpen = true;
    }
}

let aboutLink = document.getElementById('aboutLink');
aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    navigateTo('about');
});