export const Banner = () => {
    return (
        <div className="py-3 text-center bg-[linear-gradient(to_right,rgba(247,234,163,0.7),rgba(236,180,238,0.7),rgba(163,203,247,0.7))]">
            <div className="container">
                <p className="font-medium">
                    <span className="hidden sm:inline">🎉 We're Live — </span>
                    <div className="inline-flex gap-1 items-center">
                        <a href="#" className="">
                            This is the v1 of the website best suitable for desktop experience.
                        </a>
                    </div>
                </p>
            </div>
        </div>
    );
};