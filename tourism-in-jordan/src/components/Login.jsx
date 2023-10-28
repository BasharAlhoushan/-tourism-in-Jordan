// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <h2>Login</h2>
//       {/* Login form */}
//     </div>
//   );
// }
// export default Login;


// export default function Login() {
//     return (
//         <form>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="name@flowbite.com"
//             required=""
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required=""
//           />
//         </div>
//         <div className="flex items-start mb-6">
//           <div className="flex items-center h-5">
//             <input
//               id="remember"
//               type="checkbox"
//               defaultValue=""
//               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//               required=""
//             />
//           </div>
//           <label
//             htmlFor="remember"
//             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Remember me
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
      
//     );
//   }






import React, { useState } from 'react';


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can send the formData to your JSON server using fetch or axios.
    // Make an API POST request to your JSON server to add this data to your JSON file.
    // Remember to update the server URL and endpoint to match your JSON server setup.

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Data has been added successfully.
        alert("success")
        console.log('Data added:', data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email" // Add a name attribute
          value={formData.email}
          onChange={handleFormChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password" // Add a name attribute
          value={formData.password}
          onChange={handleFormChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            name="remember" // Add a name attribute
            checked={formData.remember}
            onChange={handleFormChange}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

