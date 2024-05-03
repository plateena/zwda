# Next.js Google Authentication and User Listing

---
## How to Run
---

1. Copy the `.env.example` file to `.env.local`:

```
cp .env.example .env.local
```

2. Set up environment variables in the `.env.local` file:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

   - `NEXTAUTH_URL`: The base URL of your Next.js application. Make sure it matches the URL where your application will be hosted (e.g., `http://localhost:3000` for local development).
   
   - `NEXTAUTH_SECRET`: A secret string used for encrypting cookies and tokens. You can generate a random secret using tools like `openssl rand -hex 32` or any other secure random string generator.

   - `GOOGLE_CLIENT_ID`: The Client ID obtained from the Google Developers Console.
   
   - `GOOGLE_CLIENT_SECRET`: The Client Secret obtained from the Google Developers Console.

3. Run Docker Compose:

```
docker-compose up
```

This will start the Next.js application along with any necessary dependencies.

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. To stop the application, press `Ctrl + C` in the terminal where Docker Compose is running, and then run:

```
docker-compose down
```

---
## Answer Explanation
---

### Logging in with Google Account

To log in with your Google account, follow these steps:

1. Visit the application hosted at [http://localhost:3000](http://localhost:3000).
2. Click on the "Login" menu button.
3. Click on the "Login with Google" button.
4. You will be redirected to Google's authentication page.
5. Log in with your Google account credentials.
6. After successful authentication, you will be redirected back to the application.

### Viewing Users

After logging in, you will be redirected to the `/admin/users` page, where you can view a list of users.

### Filtering Users

By default, the users are filtered to display only those whose first name starts with 'G' or last name starts with 'W'. You can clear this filter by clicking the "Clear Filter" button.

### Customizing Header and Footer

You can customize the header and footer components by modifying the files in the `components` directory.

### Masking and Unmasking Email

Email addresses are masked by default to protect privacy. You can unmask an email address by clicking on the eye icon next to it.

### Running Tests

To run tests, execute the following command in your terminal:

```
docker exec -it <container-name> npm run test
```
  
---
#### " Feel free to reach out to me if you have any questions or run into any trouble along the way. I'm here to help and happy to assist you with anything you need! "
---
  
Replace `<container-name>` with the name of your Docker container where the application is running.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
