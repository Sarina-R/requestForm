https://sarina-r.github.io/requestForm/

### package that need to be installed:

npm i @fortawesome/fontawesome-free
npm i react-bootstrap bootstrap
npm i react-router-dom
npm i mdb-react-ui-kit
npm i react-uploader
npm i react-select
npm i react-icons
npm i uuid
npm i sass

### imports in main.tsx:

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

app:
MainPage
Detail
Select
Title
Upload

requestPage:
RequestPage

loginForm:
LoginForm
InputField

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
