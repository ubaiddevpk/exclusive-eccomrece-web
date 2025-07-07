import React from "react";

function Account() {
  return (
    <div className="bg-gray-50">
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <div className="mb-4">
              <h3 className="font-bold mb-2">Manage My Account</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="text-red-500 font-semibold">My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2">My Orders</h3>
              <ul className="space-y-1 text-gray-600">
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">My Wishlist</h3>
            </div>
          </aside>

          {/* Main Profile Form */}
          <main className="flex-1 bg-white p-6 shadow rounded">
            <h2 className="text-red-500 font-bold text-lg mb-4">
              Edit Your Profile
            </h2>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    defaultValue="Md"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Rimel"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue="rimel111@gmail.com"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm mb-1">Address</label>
                  <input
                    type="text"
                    defaultValue="Kingston, 5236, United State"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Password Changes</h3>
                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border px-3 py-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button type="button" className="text-gray-500">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Account;
