import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useRouter } from "next/router";

const SearchInput = ({placeholder}) => {
    const [input, setInput] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate  : endDate,
        key      : 'selection',
    }

    const handleSelect = ({selection}) => {
        setStartDate(selection.startDate)
        setEndDate(selection.endDate)
    }

    const handleReset = () => {
        setInput('')
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (input) {
            router.push({
                pathname: '/search',
                query: {
                    location: input,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    guests: numberOfGuests
                }
            })

            setInput('')
        }
    }

    return (
        <>
            <form onSubmit={handleSearch} className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm ">
                <input
                    className="flex-grow w-full pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    name="search"
                    placeholder={placeholder ?? "Start your search"}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />

                <SearchIcon
                    className="hidden md:inline-flex w-8 flex-grow text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2"/>
            </form>

            {input && (
                <div
                    className="absolute top-full flex flex-col items-center justify-center bg-white w-full transition-all duration-300 ">
                    <div className="mx-auto max-w-2xl">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                            minDate={new Date()}
                            rangeColors={["#fd5b61"]}
                        />

                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

                            <UsersIcon className="w-5 h-5"/>

                            <input
                                type="number"
                                className="w-12 ml-2 pl-2 text-lg text-red-400 outline-none
                                border border-grey-300
                                focus:ring focus:ring-1 focus:ring-red-400 rounded"
                                min={1}
                                value={numberOfGuests}
                                onChange={e => setNumberOfGuests(e.target.value)}
                            />
                        </div>
                        
                        <div className="flex mb-2">
                            <button
                                className="flex-grow text-gray-500 px-2 py-4 hover:underline"
                                onClick={handleReset}
                                type="button">
                                Cancel
                            </button>
                            <button
                                className="flex-grow text-red-400 px-2 py-4 hover:underline"
                                onClick={handleSearch}
                                type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default SearchInput