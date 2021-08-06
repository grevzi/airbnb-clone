import React from "react";

const Footer = props => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 bg-gray-100 tex-gray-600 px-32 py-14">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Lux</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Frontline Stays</p>
                <p>Guest Referrals</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">Host</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible hosting</p>
                <p>Resource Centre</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold uppercase">Support</h5>
                <p>Help center</p>
                <p>Trust & Safety</p>
                <p>Say Hi YouTube</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>
        </footer>
    )
}

export default Footer