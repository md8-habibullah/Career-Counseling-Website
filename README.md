# CareerConnect: Your Path to Professional Success

Welcome to **CareerConnect**, a modern, full-featured career counseling website designed to provide users with personalized guidance, resources, and expert advice to navigate their professional journey. This platform offers a seamless and intuitive experience, from exploring services to managing a personal profile.

  - **Live Site URL:** [https://career-counseling-website.vercel.app/](https://career-counseling-website.vercel.app/)
  - **GitHub Code:** [https://github.com/md8-habibullah/Career-Counseling-Website.git](https://github.com/md8-habibullah/Career-Counseling-Website.git)

-----

## Key Features

This project is built to meet a comprehensive set of requirements, ensuring a robust and user-friendly application.

  * [cite\_start]**Firebase Authentication** [cite: 7][cite\_start]: Secure user registration and login system using email/password and Google social login. [cite: 73, 76, 79, 87]

      * [cite\_start]**Password Validation**: Passwords must contain at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters long. [cite: 89, 90]
      * [cite\_start]**Show/Hide Password**: A toggle feature on the registration page to improve user experience. [cite: 106]
      * [cite\_start]**Forgot Password**: Functional password reset feature that sends a reset link to the user's email. [cite: 113]

  * [cite\_start]**Protected & Private Routes**: Key pages such as **Service Details** [cite: 65][cite\_start], **My Profile** [cite: 103][cite\_start], and the **Dashboard** [cite: 97] are protected. Unauthenticated users are automatically redirected to the login page. [cite\_start]The user's session persists even after a page reload. [cite: 70, 19]

  * **Dynamic & Interactive Homepage**:

      * [cite\_start]**Engaging Slider**: An interactive hero section built with **Swiper.js** featuring at least 3 slides. [cite: 51, 110]
      * [cite\_start]**Services Overview**: A section displaying a curated list of available counseling services in a card layout. [cite: 52, 53]
      * [cite\_start]**Two Extra Sections**: Includes a Testimonials section and another informative section to enrich the user experience. [cite: 49]

  * **Detailed Service Pages**:

      * [cite\_start]Each service has a dedicated "Learn More" button [cite: 61, 64] [cite\_start]that leads to a detailed page with comprehensive information. [cite: 65]
      * [cite\_start]Users can leave comments and feedback directly on the service details page. [cite: 66, 67]

  * **User Profile Management**:

      * [cite\_start]A dedicated "My Profile" page where logged-in users can view their name, email, and photo. [cite: 103]
      * [cite\_start]Users can easily update their name and photo URL, with changes saved directly to their Firebase profile using the `updateProfile` method. [cite: 104, 105]

  * **Modern UI/UX**:

      * [cite\_start]**Fully Responsive Design**: The layout is optimized for mobile, tablet, and desktop views. [cite: 14]
      * [cite\_start]**Dynamic Page Titles**: Each route has a unique and descriptive title for better SEO and user navigation. [cite: 98]
      * [cite\_start]**Persistent Login State**: User information remains in the navbar across page reloads, managed efficiently with Firebase's `onAuthStateChange`. [cite: 99, 101]
      * [cite\_start]**Error Handling**: A custom, user-friendly 404 "Not Found" page is implemented. [cite: 95]
      * [cite\_start]**Notifications**: User feedback for actions like login success or registration errors is provided via toast notifications. [cite: 91]

-----

## Technology Stack

This project leverages a modern, powerful tech stack to deliver a fast and scalable web application.

  * **Framework**: **Next.js 15** (with App Router)
  * **Library**: **React 19**
  * **Authentication & DB**: **Firebase** (Authentication)
  * **Styling**: **Tailwind CSS** & **DaisyUI**
  * **UI Components**: **Swiper.js** (for sliders), **React Icons**
  * **Deployment**: **Vercel**

-----

## Getting Started

To run this project locally, follow these simple steps.

### Prerequisites

Make sure you have Node.js and a package manager like npm, yarn, or pnpm installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/md8-habibullah/Career-Counseling-Website.git
    cd Career-Counseling-Website
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  [cite\_start]**Set up environment variables:** [cite: 13]
    Create a file named `.env.local` in the root of your project and add your Firebase configuration keys.

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY="your_api_key"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_auth_domain"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"
    NEXT_PUBLIC_FIREBASE_APP_ID="your_app_id"
    ```

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.
