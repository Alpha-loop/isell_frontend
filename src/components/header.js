export default function Header () {
    return (
        <header className="flex justify-end items-center mb-8 flex-wrap">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-green-600 h-13 bg-green-100 w-44 px-4 rounded-3xl gap-2">
                <p>Need help?</p>
              <img
                src='/images/whatsapp.png'
                alt='Whatsapp'
                className="object-contain w-13 h-8" // Added w-full h-full to mimic fill
              />
            </div>
            <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow-sm">
              <img
                src="https://placehold.co/40x40/FFD700/000000?text=S" // Placeholder for user avatar
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold text-gray-800">Hello, Sam</div>
                <div className="text-xs text-gray-500">2/6/2025</div>
              </div>
            </div>
          </div>
        </header>
    )
}