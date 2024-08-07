### package that need to be installed:

npm i @fortawesome/fontawesome-free
npm i react-bootstrap bootstrap
npm i react-router-dom
npm i mdb-react-ui-kit
npm i react-uploader
npm i react-select
npm i react-icons
npm i sass

### imports in main.tsx:

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

LoginForm: This will contain the form fields for username and password.
InputField: A reusable component for input fields.
Button: A reusable button component.
Sidebar: its footer
Header: This will contain the top bar with the title or logo.
RequestsPage

### Step-by-Step Guide

1. **Set Up Your React Environment with TypeScript**:

   create vite@latest

2. **Create Components with TypeScript**:
   - Define types for your props and state.

### Example Code

**App.tsx**:

```tsx
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import RequestsPage from "./components/RequestsPage";

interface Request {
  username: string;
  password: string;
}

function App() {
  const [requests, setRequests] = useState<Request[]>([]);

  const addRequest = (request: Request) => {
    setRequests([...requests, request]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <LoginForm addRequest={addRequest} />
        <RequestsPage requests={requests} />
      </div>
    </div>
  );
}

export default App;
```

**LoginForm.tsx**:

```tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import InputField from "./InputField";
import Button from "./Button";

interface LoginFormProps {
  addRequest: (request: { username: string; password: string }) => void;
}

function LoginForm({ addRequest }: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const request = { username, password };
    addRequest(request);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Username"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
```

**InputField.tsx**:

```tsx
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  type = "text",
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default InputField;
```

**Button.tsx**:

```tsx
import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}

function Button({ type, children }: ButtonProps) {
  return <button type={type}>{children}</button>;
}

export default Button;
```

**RequestsPage.tsx**:

```tsx
import React from "react";

interface Request {
  username: string;
  password: string;
}

interface RequestsPageProps {
  requests: Request[];
}

function RequestsPage({ requests }: RequestsPageProps) {
  return (
    <div>
      <h2>Submitted Requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>
            Username: {request.username}, Password: {request.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestsPage;
```

### Key Differences with TypeScript

- **Type Definitions**: You need to define types for props and state, which helps catch errors at compile time.
- **Type Annotations**: Use type annotations for function parameters and return types to ensure type safety.

Using TypeScript can help you catch errors early and make your code more robust. If you have any specific questions or need further assistance, feel free to ask!
#   r e q u e s t F o r m 
 
 
