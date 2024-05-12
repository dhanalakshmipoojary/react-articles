# PatientSky News Documentation
### Overview:
PatientSky News is a web application designed to provide users with access to articles related to PatientSky. The application is built using React with TypeScript for frontend development, Redux Toolkit for state management, and SCSS for styling.

### Steps to run project
```
> npm i
> npm start
```
### Steps to Create build
```
> npm build
```
### Live demo:
Application is currently hosted here: [https://patiantsky-news.netlify.app/](https://patiantsky-news.netlify.app/)

### Approach:
#### Planning:
1. Conducted initial planning to define project requirements, features, and user interface design.
2. Identified key functionalities such as listing articles, viewing article details, and managing application state.
#### Development:
1. Frontend: Utilized React as the frontend framework due to its component-based architecture and virtual DOM rendering.
2. State Management: Implemented Redux Toolkit for state management to ensure a centralized and predictable state container.
3. Type Safety: Leveraged TypeScript to add static typing to the project, enhancing code readability and maintainability.
4. Styling: Utilized SCSS for styling to maintain consistency and modularity in design elements.
#### Error Handling:
1. Implemented error handling mechanisms to gracefully handle cases such as failed data fetching or rendering issues.
2. Displayed informative error messages or fallback UI components to provide feedback to users in case of errors.
#### Lazy Loading:
1. Implemented lazy loading techniques using React Suspense and lazy loading for optimizing the loading of components.
#### Caching API Calls:
1. Implemented caching mechanisms to prevent unnecessary API calls at listing page.
#### Performance Optimization with useMemo and useCallback:
1. Utilized useMemo hook to memoize expensive calculations.
2. Used useCallback hook to memoize callback functions, ensuring that they remain stable across re-renders and preventing unnecessary re-renders of child components.
#### React Router for Navigation:
1. Utilized React Router for handling client-side navigation and routing within the application.
#### Deployment:
1. Deployed the application using `netlify` for accessibility to users.
2. Implemented continuous integration, which triggers when code is pushed to the master branch.
#### GIT approach:
1. Generated appropriate issue tickets and established branches for each issue.
2. Generated pull requests for each issue and linked them with corresponding issue IDs.
3. Issues track - (Tickets)[https://github.com/dhanalakshmipoojary/react-articles/issues?q=is%3Aissue+is%3Aclosed]

### Challenges Faced:
1. Integration with Redux Toolkit: Adapting to the Redux Toolkit's approach to state management posed initial challenges, especially regarding the setup and configuration of slice reducers.
2. TypeScript required additional effort in defining types and resolving type-related errors.

### Lessons Learned:
1. Efficient State Management: Explore reduct-toolkit for the first time and integrated same in the project.
2. TypeScript helped catch potential bugs early in the development process and improved code quality through type annotations.
3. Optimization Techniques: Utilizing useMemo and useCallback hooks improved performance by optimizing render cycles and preventing unnecessary re-renders.

### Modules:
#### 1. Article List page:
Article list page will consists of 3 columns and will be responsive for smaller screens.
![image](https://github.com/dhanalakshmipoojary/react-articles/assets/63151085/48c4f246-c176-4f6a-96f5-4b18a0c1afd5)

#### 2. Aricle Details page:
Article details page will display title, subtitle and description about article. Also consists back button for back navigations. 
This page also contains `YOU MAY ALSO LIKE` articles. Currently 3 articles displayed here.
![image](https://github.com/dhanalakshmipoojary/react-articles/assets/63151085/71a2d87f-7b37-4e10-ab86-02e16913f323)



