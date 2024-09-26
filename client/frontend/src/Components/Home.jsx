function Home() {
    return (
        <>
            <div className="bg-blue-500 text-white py-10">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Waqf Property Task Tracker</h1>
                    <p className="text-lg mb-8">
                        Welcome to the Waqf Property Task Tracker, an easy-to-use application
                        for managing Waqf properties and tasks related to their upkeep. This tool is 
                        designed to simplify the process of tracking tasks, such as collecting rent, 
                        performing maintenance, and handling legal matters.
                    </p>
                </div>
            </div>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">About Waqf Board</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                        The Waqf Board is a legal body established by the Government of India to
                        oversee the management of Waqf properties. Waqf properties are assets dedicated
                        to religious, charitable, or pious purposes in Islam. These properties are often
                        mosques, madrasas, graveyards, and other religious institutions, as well as 
                        lands and buildings.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Managing Waqf properties can be a complex task, involving the collection of rent,
                        upkeep of properties, and dealing with legal matters. The Waqf Property Task Tracker
                        aims to assist property managers in streamlining these responsibilities by providing 
                        a simple tool to track and manage tasks effectively.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
