
import { LoginForm } from "@/components/login/login-form";
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('LoginForm', () => {
    it('should render LoginForm component', () => {
        render(<LoginForm />)
        expect(screen.getByTestId("login-form")).toBeInTheDocument();
    })

    it('should display email error message when email is invalid', async () => {
        render(<LoginForm />)
        const form = screen.getByTestId("login-form")
        const errorMessage = "Email must be a valid email"

        fireEvent.submit(form)

        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
    })

    it('should display password error message when password is invalid', async () => {
        render(<LoginForm />)
        const form = screen.getByTestId("login-form")
        const errorMessage = "Password must be at least 6 characters"

        fireEvent.submit(form)

        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
    })

    it('should display submitting message while form is processing', async () => {
        render(<LoginForm />)
        const form = screen.getByTestId("login-form")
        const email = screen.getByTestId("input-email")
        const password = screen.getByTestId("input-password")

        await userEvent.type(email, 'teste@teste.com')
        await userEvent.type(password, '123456')

        fireEvent.submit(form)

        await waitFor(() => {
            expect(screen.getByText('Submitting')).toBeInTheDocument();
        });
    })
})