// scripts.js

document.querySelector('.tour-btn').addEventListener('click', function () {
    alert('Tour requested!');
});

document.querySelector('.search-btn').addEventListener('click', function () {
    const location = document.getElementById('location').value;
    const propertyType = document.getElementById('property-type').value;
    const priceRange = document.getElementById('price-range').value;
    const bedrooms = document.getElementById('bedrooms').value;

    alert(`Searching for ${propertyType} in ${location}, price range: ${priceRange}, bedrooms: ${bedrooms}`);
});
