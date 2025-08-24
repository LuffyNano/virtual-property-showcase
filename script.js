const properties = [
  {
    id: 1,
    type: "apartment",
    title: "2 BHK Modern Apartment",
    price: "₹35 Lakhs",
    location: "Hyderabad",
    image: "https://source.unsplash.com/400x300/?apartment"
  },
  {
    id: 2,
    type: "villa",
    title: "Luxury Villa with Garden",
    price: "₹1.2 Crore",
    location: "Bangalore",
    image: "https://source.unsplash.com/400x300/?villa"
  },
  {
    id: 3,
    type: "office",
    title: "Office Space Downtown",
    price: "₹60 Lakhs",
    location: "Mumbai",
    image: "https://source.unsplash.com/400x300/?office"
  },
  {
    id: 4,
    type: "apartment",
    title: "Affordable 1 BHK Apartment",
    price: "₹20 Lakhs",
    location: "Chennai",
    image: "https://source.unsplash.com/400x300/?apartment,house"
  }
];

function displayProperties(list) {
  const container = document.getElementById("properties");
  container.innerHTML = "";
  list.forEach(prop => {
    container.innerHTML += `
      <div class="property-card">
        <img src="${prop.image}" alt="${prop.title}">
        <div class="property-info">
          <h3>${prop.title}</h3>
          <p><b>Price:</b> ${prop.price}</p>
          <p><b>Location:</b> ${prop.location}</p>
          <p><b>Type:</b> ${prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}</p>
        </div>
      </div>
    `;
  });
}

function filterProperties() {
  const filter = document.getElementById("filter").value;
  if (filter === "all") {
    displayProperties(properties);
  } else {
    const filtered = properties.filter(p => p.type === filter);
    displayProperties(filtered);
  }
}

// Load all properties on page load
window.onload = () => displayProperties(properties);
