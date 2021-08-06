import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({searchResults}) => {
    const router = useRouter()
    const {location, guests, startDate, endDate} = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header placeholder={`${location} | ${range} | ${guests} guest ${guests > 1 && 's'}`}/>

            <main className="max-w-7xl mx-auto px-8 sm:px-16">

                <div className="flex">

                    <section className="flex-grow pt-14">
                        <p className="text-xs">300+ Stays - {range} - for {guests} number of
                            guest{guests > 1 && 's'}</p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                        <div className="hidden lg:inline-flex space-x-3 text-gray-800 mb-5">
                            <button className="button" type="button">Cancellation flexibilities</button>
                            <button className="button" type="button">Type of place</button>
                            <button className="button" type="button">Price</button>
                            <button className="button" type="button">Rooms of beds</button>
                            <button className="button" type="button">More filters</button>
                        </div>

                        <div className="flex flex-col">
                            {searchResults?.map((item, i) => <InfoCard
                                key={i}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                price={item.price}
                                star={item.star}
                                description={item.description}
                                total={item.total}
                            />)}
                        </div>
                    </section>

                </div>

                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlist curated by Airbnb."
                    buttonText="Get Inspired"
                />
            </main>

            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())
    console.log(searchResults);

    return {
        props: {
            searchResults
        }
    }
}

