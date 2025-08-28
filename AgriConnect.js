        // JavaScript Fundamentals Implementation
        
        // Part 1: Variables, Data Types, and Conditionals
        console.log("=== Part 1: Variables and Conditionals ===");
        
        // Variable declarations
        let farmerName = "Mary";
        const productType = "Tomatoes";
        var productPrice = 150;
        let isAvailable = true;
        
        // Different data types
        const customer = {
            name: "Peter",
            location: "Nairobi",
            orderCount: 3
        };
        
        const products = ["Tomatoes", "Maize", "Beans", "Potatoes"];
        const ratings = [4.5, 4.8, 4.2, 4.9];
        
        // Conditional statements
        if (productPrice > 100) {
            console.log(`${productType} are priced at a premium: KES ${productPrice}`);
        } else {
            console.log(`${productType} are affordably priced: KES ${productPrice}`);
        }
        
        // Switch statement
        switch (productType) {
            case "Tomatoes":
                console.log("This is a vegetable product");
                break;
            case "Maize":
                console.log("This is a cereal product");
                break;
            default:
                console.log("This is an agricultural product");
        }
        
        // Part 2: Functions
        console.log("\n=== Part 2: Functions ===");
        
        // Function to calculate total price with quantity
        function calculateTotal(price, quantity) {
            return price * quantity;
        }
        
        // Function to format product information
        function formatProductInfo(name, type, price) {
            return `Product: ${name} (${type}) - KES ${price}`;
        }
        
        // Using the functions
        const totalPrice = calculateTotal(productPrice, 5);
        console.log(`Total price for 5 ${productType}: KES ${totalPrice}`);
        
        const productInfo = formatProductInfo("Fresh Tomatoes", "Vegetable", productPrice);
        console.log(productInfo);
        
        // Part 3: Loops
        console.log("\n=== Part 3: Loops ===");
        
        // For loop to display all products
        console.log("Available products:");
        for (let i = 0; i < products.length; i++) {
            console.log(`${i + 1}. ${products[i]} - Rating: ${ratings[i]}/5`);
        }
        
        // While loop to simulate inventory count
        console.log("\nInventory countdown:");
        let inventory = 10;
        while (inventory > 0) {
            console.log(`${inventory} items remaining`);
            inventory--;
        }
        console.log("Inventory depleted! Time to restock.");
        
        // forEach loop to process ratings
        console.log("\nProduct ratings analysis:");
        ratings.forEach((rating, index) => {
            console.log(`${products[index]}: ${getRatingCategory(rating)}`);
        });
        
        function getRatingCategory(rating) {
            if (rating >= 4.5) {
                return "Excellent";
            } else if (rating >= 4.0) {
                return "Very Good";
            } else {
                return "Good";
            }
        }
        
        // Part 4: DOM Manipulation
        console.log("\n=== Part 4: DOM Manipulation ===");
        
        // Change text content
        document.addEventListener('DOMContentLoaded', function() {
            // Update farmer name in testimonials
            const farmerTestimonial = document.querySelector('.testimonial-card:first-child .testimonial-text');
            farmerTestimonial.textContent = `"With AgriConnect, I sold my ${productType} directly to Nairobi hotels. I no longer worry about unsold produce, and I set my own prices."`;
            
            // Change button text
            const ctaButton = document.querySelector('.cta .btn');
            ctaButton.textContent = "Join Thousands of Users Today!";
            
            // Add click event listener to auth buttons
            const authButtons = document.querySelectorAll('.auth-buttons .btn');
            authButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Welcome to AgriConnect! This would redirect you to the authentication page.');
                });
            });
            
            // Create and add a new feature
            const newFeature = document.createElement('div');
            newFeature.className = 'feature-card';
            newFeature.innerHTML = `
                <div class="feature-icon">
                    <i class="fas fa-truck"></i>
                </div>
                <h3>Fast Delivery</h3>
                <p>We guarantee delivery within 24 hours for orders in major cities and 48 hours for other locations.</p>
            `;
            
            document.querySelector('.features-grid').appendChild(newFeature);
            
            // Change background color of header on scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.backgroundColor = 'white';
                    header.style.boxShadow = 'var(--shadow)';
                }
            });
        });