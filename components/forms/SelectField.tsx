import { Controller } from 'react-hook-form'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const SelectField = ({
  name,
  label,
  control,
  placeholder,
  register,
  error,
  options,
  required = false,
}: SelectFieldProps) => {
 
  return (
    <div className='space-y-2'>
      <Label htmlFor='name' className='form-label'>
        {label}
      </Label>
      <Controller
        control={control}
        name={name}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className='select-trigger'>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className='bg-gray-800 border-gray-600 text-white'>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value} className='focus:text-white focus:bg-gray-600'>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
            {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
          </Select>
        )}
      />
    </div>
  )
}

export default SelectField
