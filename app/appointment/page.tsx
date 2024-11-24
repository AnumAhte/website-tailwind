// app/appointment/page.tsx
export default function Appointment() {
    return (
      <section className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Book an Appointment</h1>
        <form className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">
            Submit
          </button>
        </form>
      </section>
    );
  }
  