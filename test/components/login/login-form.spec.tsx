
import { LoginForm } from "@/components/login/login-form";
import { render, screen } from "@testing-library/react"

describe('LoginForm', () => {
    it('should render form', () => {
        render(<LoginForm />)
        expect(screen.getByTestId("login-form")).toBeInTheDocument();
    })
})