<h1>1. Project Name: Fazla Stock Tracking App</h1>
    <p>Fazla Stock Tracking App is a mobile application developed using React Native and Expo. This app is designed to manage the inventory of components used to manufacture the smart weighing system produced by Fazla Corporation. With this application, you can easily track the items in your inventory and determine how many smart weighing systems you can produce based on your current stock. It also allows you to update the inventory when new smart weighing systems are produced, manually adjust the stock levels, and add new products as needed.</p>

  <h1>2. Installation Instructions</h2>
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

<h1>3. Application Pages and Features</h1>
<h2>Login Page</h1>

<p>The "Fazla Stock Tracking App" starts with a Login Page where users can access the application. The Login Page includes email and password input fields for authentication. As of now, the provided email and password are preset for demonstration purposes, with the email "mcankirkgoz@gmail.com" and the password "lalala12."</p>

 <h3>Email Validation</h3>
    <p>The email input field validates the entered text for its validity and checks whether it is empty. It also verifies if the email exists in the system. Please note that the backend integration may require additional coding to ensure proper email validation.</p>

 <h3>Password Validation</h3>
    <p>The password input field checks if it is empty and verifies if it matches the user's assigned password. Detailed password processing may be required during backend integration.</p>

<h3>Password Visibility</h3>
    <p>An icon next to the password input allows toggling the visibility of the entered password.</p>

<p>Upon successful email and password entry, the user is redirected to the SKU Page. The Login Page serves as the initial entry point to the application.</p>

  <p>This Login Page is the starting point of the "Fazla Stock Tracking App," providing a secure and user-friendly way to access the application.</p>
<h2>SKU Page</h2>
    <p>The SKU Page is designed to manage unique Stock Keeping Units (SKU) for tracking and inventory purposes. Here are the key features:</p>

 <ol>
        <li><strong>SKU Listing:</strong> All SKUs are listed in a scrollable format. Each SKU displays its "Name," "Category," and "Unit" properties.</li>
        <li><strong>Sorting Functionality:</strong> You can sort the list of SKUs in alphabetical order by clicking on the respective "Name," "Category," or "Unit" headings. Clicking the same heading again will reverse the sort order.</li>
        <li><strong>Search Functionality:</strong> Beneath the properties, search input fields allow you to filter SKUs based on your search criteria.</li>
        <li><strong>Edit Functionality:</strong> Swipe a SKU to the right to reveal the "Edit" button. You can then edit the details of the SKU.</li>
    </ol>

<h2>Product Page</h2>
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

<h2>User Profile and Logout</h3>
    <p>In the header section of the application, you will find your user profile with your name and an icon representing your account. Although the "Log Out" button is not currently available in the application, please be aware that this feature is planned for a future update. When implemented, you will be able to log out from your account and end your session by simply clicking on your name or the icon. This will reveal the "Log Out" button, providing you with a convenient way to safely exit your session and return to the main login screen when needed.</p>

<h1>4. Possible Challenges and Considerations</h1>

<p>As the "Fazla Stock Tracking App" continues to evolve, there are several important considerations and potential challenges to be aware of:</p>

<ul>
        <li>The data for the listed products in the application is currently based on temporary sample data. In the future, these temporary data will be replaced with real data by connecting to an external data source. This transition may require adjustments in the code to facilitate data retrieval and integration.</li>

<li>When using the "Edit" button to open the modal for editing product information, there is currently no error handling in place to validate user input. It is essential to implement error checks and validation to ensure that only valid modifications are accepted.</li>

 <li>Please bear in mind that the application's code was developed by a student and may not be free from errors or optimal in all aspects. It's essential to approach the application with the understanding that it might contain certain imperfections.</li>
    </ul>

 <p>Being mindful of these factors will help in addressing potential issues as the application is further developed and refined.</p>

 <h1>5. Conclusion</h1>

<p>With the "Fazla Stock Tracking App," we've established a foundation for efficient inventory management. This application, though in its early stages, offers promising capabilities and features that can be further developed and enhanced to meet your specific needs.</p>

<p>As we look towards the future, we wish success to the developers who will continue to build and refine this application. Your dedication and creativity will play a crucial role in shaping the app into a powerful tool for managing stock and production. We encourage you to explore new features, improve existing functionality, and adapt the app to evolving requirements.</p>

 <p>Thank you for being a part of this project, and we look forward to the great strides that the "Fazla Stock Tracking App" will undoubtedly make in the future.</p>

<p><em>Note</em>: This application was developed by Can Kırkgöz.</p>
