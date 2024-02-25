//dropdown menu

document.getElementById('accountsListsLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the link
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });

  document.getElementById('dropdownIcon').addEventListener('click', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
//header images slider

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
  
let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
        
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
     if(n > 0){
        n--;
     }else{
        n = imgs.length -1;
     }
     changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length -1){
       n++;
    }else{
       n = 0;
    }
    changeSlide();
})






// Get the elements from the document
const email = document.getElementById("email");
const password = document.getElementById("password");
const showPassword = document.getElementById("show-password");
const submit = document.getElementById("submit");
const form = document.getElementById("signin-form");

// Add an event listener to the show password element
showPassword.addEventListener("click", function() {
    // Toggle the type attribute of the password input
    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "Hide";
    } else {
        password.type = "password";
        showPassword.textContent = "Show";
    }
});

// Add an event listener to the submit button
submit.addEventListener("click", function(e) {
    // Prevent the default behavior of the form
    e.preventDefault();
    // Validate the user input
    if (email.value === "" || password.value === "") {
        // Display an alert message if the input is empty
        alert("Please enter your email and password.");
    } else {
        // Send the data to the server using fetch API
        fetch("https://example.com/api/signin", {
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                password: password.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Check the status of the response
            if (data.status === "success") {
                // Redirect the user to the homepage if the signin is successful
                window.location.href = "https://example.com/home";
            } else {
                // Display an error message if the signin is unsuccessful
                alert(data.message);
            }
        })
        .catch(error => {
            // Display an error message if there is a network error
            alert(error);
        });
    }
});
function toggleSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("open");
}
//orders page javascript

// Create a function to generate the table rows from the order data
// Get the elements from the document
const ordersTable = document.getElementById("orders-table");

// Create a mock order data array
let orders = [
    
    {
        date: "Jan 1, 2024",
        total: "$29.99",
        shipTo: "John Doe",
        orderNo: "123-4567890-1234567",
        status: "Delivered",
        action: "Track package"
    },
    {
        date: "Jan 2, 2024",
        total: "$49.99",
        shipTo: "Jane Smith",
        orderNo: "123-4567890-1234568",
        status: "Shipped",
        action: "Track package"
    },
    {
        date: "Jan 3, 2024",
        total: "$19.99",
        shipTo: "Jack Lee",
        orderNo: "123-4567890-1234569",
        status: "Preparing for shipment",
        action: "Cancel order"
    },
    {
        date: "Jan 4, 2024",
        total: "$39.99",
        shipTo: "Anna Liu",
        orderNo: "123-4567890-1234570",
        status: "Not yet shipped",
        action: "Cancel order"
    },
    {
        date: "Jan 5, 2024",
        total: "$59.99",
        shipTo: "Bob Chen",
        orderNo: "123-4567890-1234571",
        status: "Returned",
        action: "View return details"
    },
    {
        date: "jan 6, 2024",
        total: "$55.99",
        shipTo: "Srikanth",
        orderNo: "123-4567890-1234571",
        status: "Delivered",
        action: "View Order details"
    }
];

function filterOrders() {
    const selectedFilter = document.querySelector('.select-filter').value;
    const ordercontainer = document.getElementById('ordercontainer');

    // Clear existing orders
    ordercontainer.innerHTML = '';

    // Here you can dynamically fetch and display orders based on the selected filter.
    // For simplicity, let's just display a placeholder message.
    const orders = [
        `<div class="order-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WDf2CYNrcYZMbjxT6Eey03s00IM4CLFVoA&usqp=CAU" height="120px" width="120px" alt="Product Image">
            <div class="order-details">
                <p><strong>Product Name:</strong>Skipping Rope With Digital Display</p>
                <p><strong>Product Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p><strong>Date of Order:</strong> January 21, 2024</p>
                <p class="status"><strong>Status:</strong>Delivered</p>
            </div>
        </div>`,
        
        // Add other orders similarly
    ];
}

// Initial call to populate orders when the page loads
filterOrders();

// Function to generate the table rows
function generateTableRows(orders) {
    return orders.map(order => {
        // Create a new row
        const tr = document.createElement("tr");

        // Create the table cells
        const tdDate = document.createElement("td");
        tdDate.textContent = order.date;
        const tdTotal = document.createElement("td");
        tdTotal.textContent = order.total;
        const tdShipTo = document.createElement("td");
        tdShipTo.textContent = order.shipTo;
        const tdOrderNo = document.createElement("td");
        tdOrderNo.textContent = order.orderNo;
        const tdStatus = document.createElement("td");
        tdStatus.textContent = order.status;
        const tdAction = document.createElement("td");
        tdAction.textContent = order.action;

        // Append the cells to the row
        tr.appendChild(tdDate);
        tr.appendChild(tdTotal);
        tr.appendChild(tdShipTo);
        tr.appendChild(tdOrderNo);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAction);

        // Return the row
        return tr;
    });
}

// Call the function to generate the table rows
const tableRows = generateTableRows(orders);

// Append the table rows to the table body

// Create a mock order data array
