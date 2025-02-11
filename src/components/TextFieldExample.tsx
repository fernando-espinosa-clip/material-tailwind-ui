import * as  React from "react"
import { useState } from "react"
import { TextField } from "./TextField"
import { Button } from "./Button"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export const TextFieldExample: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const validateEmail = (email: string) => {
    return email.includes("@") && email.includes(".")
  }

  return (
    <div className="space-y-4 max-w-sm mx-auto">
      <TextField
        id="name"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="Enter your full name"
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText={email ? (validateEmail(email) ? "Valid email" : "Enter a valid email address") : "Enter your email"}
        status={email ? (validateEmail(email) ? "success" : "error") : undefined}
      />
      <TextField
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText={password.length >= 8 ? "Strong password" : "Password must be at least 8 characters long"}
        status={password.length >= 8 ? "success" : password.length > 0 ? "error" : undefined}
      />
      <TextField
        id="email-with-content"
        label="Email"
        type="email"
        startContent={<Mail className="text-gray-400" />}
        endContent={
          <Button color="default" size="small" variant="text" onClick={() => alert("Verificar email")}>
            Verificar
          </Button>
        }
        helperText="Enter your email address"
      />
      <TextField
        id="password-with-content"
        label="Password"
        type={showPassword ? "text" : "password"}
        startContent={<Lock className="text-gray-400" />}
        endContent={
          <Button
            color="default"
            size="small"
            variant="text"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        }
        helperText="Enter your password"
      />
    </div>
  )
}

