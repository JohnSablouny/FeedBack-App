Feedback App

A React-based feedback app that allows users to submit feedback on services, providing a simple and intuitive user experience. This app showcases how modern frontend frameworks can handle real-time updates and state management effectively.


Features

User Feedback Form:

•	A form where users can submit their feedback along with a star rating.

•	Optional fields for the user's name and email for follow-up communication.

•	Validations to ensure feedback and rating are provided.

Real-Time Feedback Display:

•	Newly submitted feedback is displayed instantly without page refresh.

•	The list shows feedback comments, user ratings, and optional user name.

•	Feedback is sortable by recent submissions or highest rating.

Rating System:

•	A rating component allows users to rate the service from 1 to 10.

State Management:

•	State management with useState and useReducer to handle feedback data and form inputs.

•	Uses useEffect for loading and updating feedback from external sources (e.g., a backend or local storage).

Backend Integration:

•	API integration using Fetch API for sending feedback to a server.

•	Retrieves and displays feedback stored on the updated API.

Error Handling:

•	Displays error messages if the feedback fails to submit.

•	Show success notifications when feedback is submitted successfully using libraries like react-toastify.


Components

FeedbackForm Component:

•	Handles user inputs, validation, and submission.

•	Updates the global state upon submission.

FeedbackList Component:

•	Renders a list of feedback received from users.

•	Dynamically updates as new feedback is submitted.

Rating Component:

•	A reusable component for selecting, displaying and calculating the average ratings.


Technology Stack

•	React: For building the user interface.

•	State Management: useState , useReducer and useContext for managing the feedback form and list.

•	Backend Integration: integrated by using Fetch API for API calls.

•	Styling: Styled with CSS.
