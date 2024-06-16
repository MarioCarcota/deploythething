# Hyia, I'm Mario, creator of DeployTheThing!

DeployTheThing is an open-source starter pack that brings together the best tools for modern web application development. It aims to simplify and speed up the process of building full-featured web applications by providing a pre-configured setup that includes essential services and tools.

## Key Features

- **Next.js**: A React framework that enables server-side rendering and static site generation ( No typescript and with app router ).
- **Firebase**: A comprehensive app development platform that offers real-time database and authentication.
- **Email Sending Service**: Pre-configured integration with an email service for sending every type of emails.
- **Stripe**: A payment processing platform for handling subscriptions and one-time payments.
- **Multi-language Support**: Built-in support for multiple languages to cater to a global audience.


- **ShadCNUI**: A user interface library to build beautiful and consistent UIs.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **Ready Components**: A collection of pre-designed, reusable components to speed up development.
- **Landing Pages**: Fully functional landing pages to kickstart your project with minimal effort.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with DeployTheThing, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/MarioCarcota/deploythething.git
    cd deploythething
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Setup Firebase**:

    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Add a web app to your project and follow the instructions to get your Firebase config.

4. **Configure Environment Variables**:

    Create a `.env.local` file in the root of the project and add the following variables:

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    RESEND_API_KEY=your-email-service-api-key
    ```

5. **Run the Development Server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Configuration

### Firebase

Ensure your Firebase project is set up correctly by enabling the necessary services like Firestore, Authentication, and Hosting. Update the Firebase env in `.env` with your project details.

### Email Service

Integrate your ReSend the API key and you are good to go (You will find all the templates of emails in the folder `emails/examples`).

### Stripe

Configure Stripe in your firebase project.

## Usage

### UI Development

Use the pre-configured ShadCNUI and TailwindCSS setup to build your application's user interface. Refer to their respective documentation for detailed usage guidelines:

- [ShadCNUI Documentation](https://shadcn.dev/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### Multi-language Support

DeployTheThing includes built-in multi-language support, making it easy to create applications that cater to a global audience. You can add and configure additional languages in `i18n.js` and update the corresponding translation files in `locales/`.

### Ready Components

DeployTheThing comes with a collection of ready-made components that you can use to build your application quickly. These components are located in `landings/components`. Customize them to fit your needs or use them as is to accelerate your development process.

### Landing Pages

The starter pack includes fully functional landing pages to help you get your project up and running quickly. These are designed to be easily customizable and can be found in `landings`. You can use these as a starting point for your application's main pages.

### Adding Functionality

Leverage Firebase for real-time data management, user authentication, and other backend services. Use the provided Firebase hooks and utilities in `firebase/functions` to streamline development.

### Payment Integration

Utilize the Stripe integration in firebase to manage payments. The setup includes basic configurations for handling subscriptions and one-time payments.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

DeployTheThing is licensed under the MIT License. See the license file for more information.


