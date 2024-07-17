/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rlh5PappNEe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div class="p-6 space-y-6">
        <div class="space-y-2">
          <h1 class="text-2xl font-bold">Select from the range of courses below</h1>
          <p class="text-red-600 bg-red-100 p-2 rounded">
            The more courses you select, the bigger your additional discount grows!
          </p>
        </div>
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">Domain Subjects</h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="space-y-2">
              <h3 class="font-bold">Science</h3>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="science"
                    value="physics"
                    id="physics"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="physics" class="text-sm font-medium text-gray-700">
                    Physics
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="science"
                    value="chemistry"
                    id="chemistry"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="chemistry" class="text-sm font-medium text-gray-700">
                    Chemistry
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="science"
                    value="mathematics"
                    id="mathematics"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="mathematics" class="text-sm font-medium text-gray-700">
                    Mathematics
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="science"
                    value="biology"
                    id="biology"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="biology" class="text-sm font-medium text-gray-700">
                    Biology
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="science"
                    value="physical-education"
                    id="physical-education"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="physical-education" class="text-sm font-medium text-gray-700">
                    Physical Education
                  </label>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold">Commerce</h3>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="commerce"
                    value="accounts"
                    id="accounts"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                    checked
                  />
                  <label for="accounts" class="text-sm font-medium text-gray-700">
                    Accounts
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="commerce"
                    value="business-studies"
                    id="business-studies"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="business-studies" class="text-sm font-medium text-gray-700">
                    Business Studies
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="commerce"
                    value="economics"
                    id="economics"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="economics" class="text-sm font-medium text-gray-700">
                    Economics
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="commerce"
                    value="applied-mathematics"
                    id="applied-mathematics"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="applied-mathematics" class="text-sm font-medium text-gray-700">
                    Applied Mathematics
                  </label>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold">Humanities</h3>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="humanities"
                    value="history"
                    id="history"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="history" class="text-sm font-medium text-gray-700">
                    History
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="humanities"
                    value="geography"
                    id="geography"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="geography" class="text-sm font-medium text-gray-700">
                    Geography
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="humanities"
                    value="political-science"
                    id="political-science"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="political-science" class="text-sm font-medium text-gray-700">
                    Political Science
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="humanities"
                    value="sociology"
                    id="sociology"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="sociology" class="text-sm font-medium text-gray-700">
                    Sociology
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="humanities"
                    value="psychology"
                    id="psychology"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="psychology" class="text-sm font-medium text-gray-700">
                    Psychology
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="humanities"
                    value="legal-studies"
                    id="legal-studies"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="legal-studies" class="text-sm font-medium text-gray-700">
                    Legal Studies
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">Language and General Test</h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="space-y-2">
              <h3 class="font-bold">Language</h3>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="language"
                    value="english"
                    id="english"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="english" class="text-sm font-medium text-gray-700">
                    English
                  </label>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold">General Test</h3>
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="general-test"
                    value="general-test"
                    id="general-test"
                    class="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label for="general-test" class="text-sm font-medium text-gray-700">
                    General Test
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border p-4">
          <h2 class="text-xl font-semibold flex items-center">
            <svg class="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M15 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Fee Calculation
          </h2>
          <table class="w-full mt-4">
            <thead>
              <tr class="text-left">
                <th class="py-2">Course</th>
                <th class="py-2">Actual Price</th>
                <th class="py-2">You Pay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2">Accounts</td>
                <td class="py-2">₹ 3,999</td>
                <td class="py-2">₹ 2,999</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="py-2 font-bold">Total Price</td>
                <td class="py-2">₹ 3,999</td>
                <td class="py-2">₹ 2,999</td>
              </tr>
            </tfoot>
          </table>
          <button class="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Enroll Now
          </button>
        </div>
      </div>
    )
  }