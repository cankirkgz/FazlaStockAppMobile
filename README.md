<h1>1. Project Name: Fazla Stock Tracking App</h1>
    <p>Fazla Stock Tracking App is a mobile application developed using React Native and Expo. This app is designed to manage the inventory of components used to manufacture the smart weighing system produced by Fazla Corporation. With this application, you can easily track the items in your inventory and determine how many smart weighing systems you can produce based on your current stock. It also allows you to update the inventory when new smart weighing systems are produced, manually adjust the stock levels, and add new products as needed.</p>

  <h2>2. Installation Instructions</h2>
  <p>To get started with the Fazla Stock Tracking App, follow these installation instructions:</p>

   <p><strong>Step 1:</strong> Clone the repository to your local machine.</p>
    <code>git clone https://github.com/cankirkgz/FazlaStockAppMobile.git</code>

  <p><strong>Step 2:</strong> Navigate to the project directory.</p>
    <code>cd FazlaStockAppMobile</code>

   <p><strong>Step 3:</strong> Install the required dependencies using npm or yarn.</p>
    <code>npm install</code>
    <em>or</em>
    <code>yarn install</code>

   <p><strong>Step 4:</strong> Start the Expo development server.</p>
    <code>expo start</code>

  <p><strong>Step 5:</strong> Scan the QR code using the Expo Go app on your mobile device, or run the app on an Android/iOS emulator.</p>

  <p>You are now ready to use the Fazla Stock Tracking App to manage your inventory and streamline the production of smart weighing systems.</p>

<h2>3. Application Pages and Features</h1>

<h3>SKU Page</h2>
    <p>The SKU Page is designed to manage unique Stock Keeping Units (SKU) for tracking and inventory purposes. Here are the key features:</p>

 <ol>
        <li><strong>SKU Listing:</strong> All SKUs are listed in a scrollable format. Each SKU displays its "Name," "Category," and "Unit" properties.</li>
        <li><strong>Sorting Functionality:</strong> You can sort the list of SKUs in alphabetical order by clicking on the respective "Name," "Category," or "Unit" headings. Clicking the same heading again will reverse the sort order.</li>
        <li><strong>Search Functionality:</strong> Beneath the properties, search input fields allow you to filter SKUs based on your search criteria.</li>
        <li><strong>Edit Functionality:</strong> Swipe a SKU to the right to reveal the "Edit" button. You can then edit the details of the SKU.</li>
    </ol>

<h3>Product Page</h2>
    <p>The Product Page is focused on managing your inventory of products. It features the following functionalities:</p>

 <ol>
        <li><strong>Product Listing:</strong> All products are listed with their "Name," "Category," and "Project" properties.</li>
        <li><strong>Sorting Functionality:</strong> You can sort the list of products in alphabetical order by clicking on the respective "Name," "Category," or "Project" headings. Clicking the same heading again will reverse the sort order.</li>
        <li><strong>Search Functionality:</strong> Use the search input field beneath the properties to search for specific products within your inventory.</li>
        <li><strong>Edit Functionality:</strong> Swipe a product to the right to reveal the "Edit" button, allowing you to modify the product's details.</li>
        <li><strong>Product Details Page:</strong> Clicking on a product in the list opens the "Product Details" page, which displays the "SkuName," "Project," "Category," "Usage Type," "Location," and "Available" properties for detailed product information.</li>
        <li><strong>Additional Buttons:</strong> The Product Page also includes "Add Stock" and "Produce SSS" buttons, although these buttons are currently non-functional.</li>
    </ol>

 <p>The "Fazla Stock Tracking App" provides an efficient way to manage your SKUs and inventory, and these features make it easier to keep track of your components and products. Please note that the "Add Stock" and "Produce SSS" functionalities are planned for future updates, and stay tuned for further enhancements to the application.</p>
