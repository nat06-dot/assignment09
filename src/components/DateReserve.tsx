'use client'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'

export default function DateReserve() {
    const [value, setValue] = useState<Dayjs | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                    width: '100%',
                    '& label': { color: 'rgba(255,255,255,0.7)' },
                    '& label.Mui-focused': { color: 'white' },
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '& .MuiSvgIcon-root': { color: 'white' },
                }}
            />
        </LocalizationProvider>
    )
}