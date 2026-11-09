// import React, { useMemo } from 'react'
// import { Controller } from 'react-hook-form'
// // import countryList from 'react-select-country-list'
// import { Label } from '../ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
// } from '../ui/select'


// const CountrySelectField = ({
//   name,
//   label,
//   // control,
//   error,
//   required,
// }: CountrySelectProps) => {
//   return (
//     <div className='space-y-2'>
//       <Label htmlFor='name' className='form-label'>
//         {label}
//       </Label>
//       <Controller
//         control={control}
//         name={name}
//         rules={{
//           required: required ? `Please select ${label.toLowerCase()}` : false
//         }}
//         render={({ field }) => (
//           <CountrySelect  value={field.value} onChange={field.onChange}/>
//         )}
//       />
//     </div>
//   )
// }

// export default CountrySelectField
