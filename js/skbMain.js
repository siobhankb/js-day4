// create a scope to limit variables


{
    // let body = document.body;
    // let children = body.children;
    // console.log(children);
    // let navBar = children[0];
    // let navBar = document.getElementsByTagName('nav')[0];
    let navBar = document.querySelector('nav');
    navBar.className = navBar.className.replaceAll('light', 'dark');

    // Set the buttons to be bootstrap style colors
    let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    let myButtons = document.querySelectorAll('.col-2 > button');

    // loop through button color list
    for (let i = 0; i < buttonColors.length; i++){
        myButtons[i].className = `btn btn-${buttonColors[i]}`
    }

    //Add a header under the buttons in the container
    // first create the header
    let newHeader1 = document.createElement('h4');
    newHeader1.id = 'myHeader'
    newHeader1.className = 'text-center mt-3'
    newHeader1.innerHTML = 'Created by SKB with the help of JavaScript';


    //Get the row of buttons
    let buttonRow = document.getElementsByClassName('row')[0];
    // add the new header AFTER the row of buttons (as opposed to being appended as the last child of the row)
    buttonRow.after(newHeader1);





}