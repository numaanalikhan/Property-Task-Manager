function Home() {
    return (
        <>
            <div className="bg-blue-500 text-white py-10">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Property Task Manager</h1>
                    <p className="text-lg mb-8">
                    Welcome to the Property Task Manager, a1n easy-to-use application for managing properties and tasks related to their upkeep. This tool is designed to simplify the process of tracking tasks, such as collecting rent, performing maintenance, and handling legal matter
                    </p>
                </div>
            </div>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">About Property Task Manager</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                    The Property Board is a legal body established by the Government of India to oversee the management of properties dedicated to religious, charitable, or public purposes. These properties often include places of worship, educational institutions, graveyards, and other establishments, as well as lands and buildings.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Managing properties can be a complex task, involving the collection of rent, upkeep of properties, and handling legal matters. The Property Task Manager aims to assist property managers in streamlining these responsibilities by providing a simple tool to track and manage tasks effectively.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
