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


const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: '',
      riskTolerance: 'Medium',
      preferredIndustry: '',
    },
    mode: 'onBlur',
  })

  const onHandleSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className='form-title'>Sign up & Personalize</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)} className='space-y-5'>
        <InputField
          name='fullName'
          label='Full Name'
          placeholder='John Doe'
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full name is required' }}
        />
        <InputField
          name='email'
          label='Email'
          placeholder='john.doe@example.com'
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
          placeholder='********'
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

        <CountrySelectField
          name='country'
          label='Country'
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name='investmentGoals'
          label='Investment Goals'
          placeholder='Select your investment goals'
          register={register}
          error={errors.investmentGoals}
          options={INVESTMENT_GOALS}
          required
          control={control}
        />
        <SelectField
          name='riskTolerance'
          label='Risk Tolerance'
          placeholder='Select your risk level'
          register={register}
          error={errors.riskTolerance}
          options={RISK_TOLERANCE_OPTIONS}
          required
          control={control}
        />
        <SelectField
          name='preferredIndustry'
          label='Preferred Industry'
          placeholder='Select your preferred industry'
          register={register}
          error={errors.preferredIndustry}
          options={PREFERRED_INDUSTRIES}
          required
          control={control}
        />

        <Button
          type='submit'
          disabled={isSubmitting}
          className='yellow-btn w-full mt-5'>
          {isSubmitting
            ? 'Creating account...'
            : 'Start Your Investing Journey'}
        </Button>
        <FooterLink text='Already have an account' linkText='Sign in' href='/sign-in' />
      </form>
    </>
  )
}

export default SignUp
