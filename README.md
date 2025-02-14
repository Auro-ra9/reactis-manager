    # ReactJs Task Submission

    ## Overview

    This project was developed as part of a technical task to demonstrate my skills in React.js, Typescript, and frontend development. The application allows users to perform basic CRUD operations like adding, deleting, and sorting/filtering items.

    ## Features Implemented

    - Add and delete items dynamically.
    - Basic Theme toggler to enhance user experience.
    - Sort and filter items for better usability.
    - Basic form validation to ensure user input integrity.
    - Responsive design for an optimal experience on different devices.

    ## Project Structure

    src/
    ├── components/
    │ ├── ItemCard.tsx - Displays individual item details.
    │ ├── ItemForm.tsx - Handles input for new items.
    │ ├── ItemList.tsx - Displays the list of all items.
    │ ├── SortFilter.tsx - Sorting and filtering functionality.
    │ ├── Spinner.tsx - Loader component.
    │ ├── Navbar.tsx - Top navigation bar.
    ├── context/
    │ ├── ItemContext.tsx - Global state management for items.
    ├── config/
    │ ├── axios.ts - Axios configuration for API calls.
    ├── pages/
    │ ├── home.tsx - Main page component.
    ├── styles/
    │ ├── index.css - Global styles.
    ├── types/
    │ ├── FormInputs.ts - TypeScript interface for form inputs.
    │ ├── Items.ts - TypeScript interface for items.
    ├── utils/
    │ ├─ validators.ts - Validation functions for forms.
    ├── App.tsx - Entry point for the app.
    ├── index.tsx - ReactDOM renderer.

    ## Decisions and Trade-Offs

    1. **Create React App with TypeScript:** Used CRA for its ease of setup as per the role’s requirements. Would’ve preferred Vite for faster build times but adhered to guidelines.
    2. **Axios over Fetch:** Chosen for its simplified syntax, built-in interceptors, and better error handling.
    3. **React Context over useState:** Implemented Context for global state management. Redux Toolkit would’ve been ideal for scalability but wasn’t required for the project’s complexity.
    4. **Clean Architecture:** Followed a modular, component-based architecture for code reusability and maintenance.
    5. **Error Handling:** While basic error handling is implemented, I would’ve preferred more detailed user feedback mechanisms.

    ## Future Improvements

    Given more time, I would’ve added:

    - **Editable Items:** Inline editing for better interactivity.
    - **Pagination:** To manage larger datasets for improved UI and UX.
    - **Lazy Loading:** For optimizing performance in larger projects.
    - **Better Error Feedback:** Tooltips or modals to improve user experience during error states.
    - **Persistent Storage:** Using session/local storage for better state persistence.
    - **Offline Functionality:** Integrating service workers to allow offline usage.
    - **Testing:** Adding unit and integration tests to ensure app robustness.

    ## How to Run Locally

    1. Clone the repository:  
    git clone <https://github.com/Auro-ra9/reactis-manager.git

    > cd <project-directory>

    2. Install dependencies:

    3. Start the development server:  
    npm start

    4. Open [http://localhost:3000](http://localhost:3000) in your browser.

    ## Clean Commit History

    I ensured to follow clean and meaningful commit messages, reflecting each step and feature implementation.

    ## Live Application

    The live version of this project is hosted at: https://reactis-manager.vercel.app/

    ## Conclusion

    This project showcases my ability to deliver quality solutions under time constraints while maintaining a clean and scalable codebase. It also reflects my focus on delivering value to users through thoughtful design and development practices.

    Thank you for reviewing my work.
