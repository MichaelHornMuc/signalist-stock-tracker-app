'use client'
import { CountrySelectField } from '@/components/CountrySelect'
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from '@/lib/constants'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const onHandleSubmit = async (data: SignInFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className='form-title'>Welcome Back</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)} className='space-y-5'>
        <InputField
          name='email'
          label='Email'
          placeholder='Enter your Email'
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <InputField
          name='password'
          label='Password'
          placeholder='Enter your Password'
          type='password'
          register={register}
          error={errors.password}
          validation={{
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
              message:
                'Password must be at least 8 characters long and contain both letters and numbers',
            },
          }}
        />

        <Button
          type='submit'
          disabled={isSubmitting}
          className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
        <FooterLink
          text='Don’t have an account?'
          linkText='Sign up'
          href='/sign-up'
        />
      </form>
    </>
  )
}

export default SignIn
