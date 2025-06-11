# Todo List App

A modern Todo List web application built with Next.js, React, Redux Toolkit, redux-persist, and TypeScript.

## Features

- User authentication (login, register, logout) using Redux Toolkit and redux-persist
- Persistent authentication state with localStorage
- Form validation with React Hook Form and Zod
- Responsive UI with dropdown menus and theme toggle
- Toast notifications for user feedback
- Modular and scalable folder structure

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (assumed from class names)
- [Heroicons](https://heroicons.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list/FE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  components/
    auth/
      login-form.tsx
      register-form.tsx
    layout/
      header.tsx
      sidebar.tsx
    ui/
      button.tsx
      input.tsx
      label.tsx
  store/
    slices/
      authSlice.ts
    index.ts
    provider.tsx
  hooks/
    use-toast.ts
  app/
    layout.tsx
    page.tsx
public/
  manifest.json
```

## Authentication

- Authentication state is managed by Redux Toolkit (`authSlice.ts`).
- State is persisted in localStorage using redux-persist.
- Async actions for login and register are handled with `createAsyncThunk`.
- Logout is handled by a Redux action.

## Notes

- Make sure you have a `public/manifest.json` file to avoid 404 errors in the browser.
- The authentication logic uses mock data for demonstration. Replace with real API calls as needed.
- The UI uses Tailwind CSS and Heroicons for styling and icons.

## License

This project is licensed under the MIT License.
