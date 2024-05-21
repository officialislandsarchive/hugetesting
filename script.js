document.getElementById('searchInput').addEventListener('input', function() {
    var input = document.getElementById('searchInput').value.toUpperCase();
    var resultsContainer = document.getElementById('searchResultsContainer');
    var results = document.getElementById('searchResults');
    
    var items = [
        { name: "Wheat", value: "10" },
        { name: "Tomato", value: "15" },
        { name: "Carrot", value: "20" },
        { name: "Berry", value: "25" },
        { name: "Onion", value: "30" },
        { name: "Red Flowers", value: "35" },
        { name: "Yellow Flowers", value: "40" },
        { name: "Blue Flowers", value: "45" },
        { name: "Tall Grass", value: "50" },
        { name: "Stone Brick", value: "10" },
        { name: "Wood", value: "15" },
        { name: "Wood Plank", value: "20" },
        { name: "Pine Wood", value: "25" },
        { name: "Pine Wood Plank", value: "30" },
        { name: "Grass Block", value: "35" },
        { name: "Glass Pane", value: "40" },
        { name: "Glass Pane (Colored)", value: "45" },
        { name: "Clay", value: "50" },
        { name: "Clay (Colored)", value: "55" },
        { name: "Red Rug", value: "60" },
        { name: "Wood Stairs", value: "65" },
        { name: "Pine Stairs", value: "70" },
        { name: "Stone Stairs", value: "75" },
        { name: "Brick Stairs", value: "80" },
        { name: "Wood Fence", value: "85" },
        { name: "Pine Fence", value: "90" },
        { name: "Ladder", value: "95" },
        { name: "Pine Door", value: "100" },
        { name: "Stone Totem", value: "10" },
        { name: "Coal Totem", value: "15" },
        { name: "Iron Totem", value: "20" },
        { name: "Clay Totem", value: "25" },
        { name: "Wheat Totem", value: "30" },
        { name: "Tomato Totem", value: "35" },
        { name: "Carrot Totem", value: "40" },
        { name: "Onion Totem", value: "45" },
        { name: "Medium Chest", value: "10" },
        { name: "Steel Rod", value: "15" },
        { name: "Conveyor Belt", value: "20" },
        { name: "Left Conveyor", value: "25" },
        { name: "Right Conveyor", value: "30" },
        { name: "Industrial Chest", value: "35" },
        { name: "Industrial Oven", value: "40" },
        { name: "Industrial Sawmill", value: "45" },
        { name: "Industrial Smelter", value: "50" },
        { name: "Workbench Tier 1", value: "10" },
        { name: "Workbench Tier 2", value: "15" },
        { name: "Anvil", value: "20" },
        { name: "Sawmill", value: "25" },
        { name: "Stonecutter", value: "30" },
        { name: "Coloring Station", value: "35" },
        { name: "Campfire", value: "40" },
        { name: "Cooking Table", value: "45" },
        { name: "Floral Bench", value: "50" },
        { name: "Small Furnace", value: "55" },
        { name: "Small Chest", value: "60" },
        { name: "Dough", value: "10" },
        { name: "Berry Dough", value: "15" },
        { name: "Bread", value: "20" },
        { name: "Berry Pie", value: "25" },
        { name: "Wheat Seeds", value: "10" },
        { name: "Tomato Seeds", value: "15" },
        { name: "Carrot Seeds", value: "20" },
        { name: "Berry Seeds", value: "25" },
        { name: "Onion Seeds", value: "30" },
        { name: "Red Flower Seeds", value: "35" },
        { name: "Yellow Flower Seeds", value: "40" },
        { name: "Blue Flower Seeds", value: "45" },
        { name: "Sapling", value: "50" },
        { name: "Pine Sapling", value: "55" },
        { name: "Green Slime Balls", value: "10" },
        { name: "Blue Slime Balls", value: "15" },
        { name: "Pink Slime Balls", value: "20" },
        { name: "Green Gear", value: "25" },
        { name: "Blue Gear", value: "30" },
        { name: "Pink Gear", value: "35" },
        { name: "Wooden Axe", value: "10" },
        { name: "Wooden Pickaxe", value: "15" },
        { name: "Wooden Sword", value: "20" },
        { name: "Plow", value: "25" },
        { name: "Stone Axe", value: "30" },
        { name: "Stone Pickaxe", value: "35" },
        { name: "Iron Axe", value: "40" },
        { name: "Iron Pickaxe", value: "45" },
        { name: "Coal", value: "10" },
        { name: "Iron Ore", value: "15" },
        { name: "Iron", value: "20" }
    ];

    // Clear previous results
    results.innerHTML = "";

    if (input) {
        // Filter items based on search input
        var filteredItems = items.filter(function(item) {
            return item.name.toUpperCase().includes(input);
        });

        // Display filtered items
        filteredItems.forEach(function(item) {
            var itemBox = document.createElement("div");
            itemBox.classList.add("search-result-item");

            var itemName = document.createElement("span");
            itemName.classList.add("item-name");
            itemName.textContent = item.name;

            var coinValue = document.createElement("span");
            coinValue.classList.add("coin-value");
            coinValue.textContent = "Coin Value: " + item.value;

            itemBox.appendChild(itemName);
            itemBox.appendChild(coinValue);
            results.appendChild(itemBox);
        });

        // Show the results container
        resultsContainer.style.display = "block";
    } else {
        // Hide the results container if input is empty
        resultsContainer.style.display = "none";
    }
});
