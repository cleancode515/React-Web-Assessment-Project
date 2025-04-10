# 🌐 React Dashboard Web App (Admin & User)

This is a **responsive dashboard web application** built with **React + TypeScript**, tailored for both **admin** and **normal users**. It includes a custom-designed **login screen**, interactive data visualizations via **Charts**, **manual multi-language support**, and a clean, component-based architecture following SOLID principles and best practices.

---

## ✨ Features

- 🔐 **Custom Login Page** – Clean login UI with validation and role-based redirection.
- 🧑‍💼 **Admin Dashboard** – Interactive bar, pie, and line charts powered by Victory.
- 👤 **User Dashboard** – Minimal and intuitive interface for standard users.
- 🌍 **Manual Translations** – English/Hungarian switcher with no i18n libraries used.
- 🧱 **Component-Based Architecture** – Separated concerns for reusability and scalability.
- 📦 **Redux Toolkit Integration** – Centralized state management for auth and data.
- 🎨 **TailwindCSS Styling** – Utility-first styling with custom responsiveness.
- 🧼 **Clean Code & SOLID Principles** – Maintainable and scalable project structure.

---

## 🧰 Tech Stack

- **React** (with **Vite**)
- **TypeScript**
- **Redux Toolkit** – Authentication & dashboard state
- **Victory Charts** – For rich visualizations
- **TailwindCSS** – Styling framework
- **Manual Translations** – Object-based, Redux-managed language control
- **LocalStorage** – Session/token persistence

---

---

## 🧰 Tech Stack

- **React Native** (with **Expo** for bundling)
- **Redux Toolkit** – Authentication & dashboard state
- **Victory Native** – Charts & data visualizations
- **Tailwind CSS** – Styling using `tailwind-react-native-classnames`
- **Manual Translations** – Pure object-based without libraries
- **AsyncStorage** – Token/session persistence

---

## 📁 Project Structure

```
src/
├── components/           # Reusable UI blocks (charts, buttons, etc.)
├── screens/              # Login, AdminDashboard, UserDashboard
├── app/                  # Redux slices and setup
├── services/             # API functions (e.g., adminService)
├── utils/                # Manual i18n objects
├── contexts/             # Auth, Translation
├── types/                # TypeScript interfaces & types
└── utils/                # Shared helpers and wrappers
```

---

## 🌐 Language Support

Manual i18n implementation using Context.

Example translation format:

```ts
// translations/translation.ts
export const translations = {
  en: {
    admin: "Admin",
    lastData: "Last Data",
  },
  hu: {
    admin: "Admin",
    lastData: "Utolsó adatok",
  },
};
```

---

## 🧪 Sample Login Credentials

| Role  | Email               | Password      |
| ----- | ------------------- | ------------- |
| Admin | `admin@example.com` | `password123` |
| User  | `user@example.com`  | `password123` |

---

## 📲 How to Run (with Expo)

```bash
# Install dependencies
npm install

# Start
npx run dev
```

## ✅ Assessment Criteria

| Requirement             | Status  |
| ----------------------- | ------- |
| Componentization        | ✅ Done |
| Redux State Management  | ✅ Done |
| Tailwind Styling        | ✅ Done |
| Manual Translations     | ✅ Done |
| SOLID Architecture      | ✅ Done |
| Admin & User Dashboards | ✅ Done |
| Custom Login Page       | ✅ Done |
| Victory Charts Used     | ✅ Done |
| Expo Setup              | ✅ Done |

---

## 🧑‍💻 Developer

Created by **Nagy Elemer**
