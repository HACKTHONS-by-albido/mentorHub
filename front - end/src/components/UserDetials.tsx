'use client'
import React, { useState } from "react";

interface Option {
  id: number;
  name: string;
}

const InterestDropdown: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [showSelector, setShowSelector] = useState<boolean>(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [options, setOptions] = useState<Option[]>([
    { id: 1, name: "Football" },
  { id: 2, name: "Basketball" },
  { id: 3, name: "Tennis" },
  { id: 4, name: "Swimming" },
  { id: 5, name: "Golf" },
  { id: 6, name: "Programming" },
  { id: 7, name: "Web Development" },
  { id: 8, name: "Mobile App Development" },
  { id: 9, name: "Data Science" },
  { id: 10, name: "Artificial Intelligence" },
  { id: 11, name: "Graphic Design" },
  { id: 12, name: "UI/UX Design" },
  { id: 13, name: "Digital Marketing" },
  { id: 14, name: "Content Writing" },
  { id: 15, name: "Public Speaking" },
  { id: 16, name: "Mathematics" },
  { id: 17, name: "Physics" },
  { id: 18, name: "Chemistry" },
  { id: 19, name: "Biology" },
  { id: 20, name: "Literature" },
  { id: 21, name: "History" },
  { id: 22, name: "Music" },
  { id: 23, name: "Art" },
  { id: 24, name: "Cooking" },
  { id: 25, name: "Photography" },
  { id: 26, name: "Fitness Training" },
  { id: 27, name: "Yoga" },
  { id: 28, name: "Meditation" },
  { id: 29, name: "Language Learning" },
  { id: 30, name: "Career Development" },
  { id: 31, name: "Social Media Management" },
  { id: 32, name: "Video Editing" },
  { id: 33, name: "Photography" },
  { id: 34, name: "Fashion Design" },
  { id: 35, name: "Interior Design" },
  { id: 36, name: "Cooking" },
  { id: 37, name: "Baking" },
  { id: 38, name: "Gardening" },
  { id: 39, name: "Traveling" },
  { id: 40, name: "Outdoor Activities" },
  { id: 41, name: "Gaming" },
  { id: 42, name: "Film Making" },
  { id: 43, name: "Animation" },
  { id: 44, name: "Robotics" },
  { id: 45, name: "Entrepreneurship" },
  { id: 46, name: "Finance" },
  { id: 47, name: "Investing" },
  { id: 48, name: "Real Estate" },
  { id: 49, name: "Stock Market" },
  { id: 50, name: "Economics" },
  ]);

  const clearOpts = () => {
    setSearch("");
    setShowSelector(false);
    setOptions([]);
  };

  const select = (id: number, name: string): void => {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
    }
  };

  const remove = (id: number): void => {
    setSelected(selected.filter((item) => item !== id));
  };

  const goSearch = (): void => {
    if (search) {
      setShowSelector(true);
    } else {
      setShowSelector(false);
    }
  };

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative max-w-sm mx-auto text-xs">
      <div className="bg-white rounded-md p-2 flex gap-1 flex-wrap">
        {selected.map((id) => {
          const option = options.find((opt) => opt.id === id);
          if (!option) return null;
          const { name } = option;
          return (
            <div key={id} className="bg-blue-200 rounded-md flex items-center">
              <div className="p-2">{name}</div>
              <div
                onClick={() => remove(id)}
                className="p-2 select-none rounded-r-md cursor-pointer hover:bg-magma-orange-clear"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5745 1L1 12.5745"
                    stroke="#FEAD69"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.00024 1L12.5747 12.5745"
                    stroke="#FEAD69"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          );
        })}
        <div className="flex-1">
        <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
        Select your interests
              </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full border-0 focus:border-0 focus:outline-none focus:ring-0 py-1 px-0"
            onFocus={() => setShowSelector(true)}
            onBlur={() => setTimeout(goSearch, 200)} // Delay search to allow time for typing
          />
          {showSelector && (
            <div className="absolute left-0 bg-white z-30 w-full rounded-b-md font-medium">
              <div className="p-2 space-y-1">
                {filteredOptions.map(({ id, name }) => (
                  <div
                    key={id}
                    onClick={() => select(id, name)}
                    className={`${
                      selected.includes(id)
                        ? "bg-blue-200"
                        : "bg-white hover:bg-blue-200"
                    } border-2 border-blue-200 cursor-pointer rounded-md p-2`}
                  >
                    {name}
                  </div>
                ))}
                {filteredOptions.length === 0 && (
                  <div className="text-gray-500">No result</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const MentorHub: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [skillLevel, setSkillLevel] = useState<string>("");
  const [userType, setUserType] = useState<"Mentor" | "Mentee">("Mentor");
  const [interests, setInterests] = useState<string[]>([]);
  const [showMap, setShowMap] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [lat, lng] = location.split(", ");
    console.log(location);

    // Perform form submission logic here
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        setShowMap(true);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"  style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?education ,institute')",
      }}>
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
            Welcome to Mentor Hub! Connect, learn, and grow together.
          </h2>
          <h5 className="text-center text-1xl font-extrabold text-gray-900 mb-6">
            Additional Information
          </h5>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  {avatar ? (
                    <img
                      className="h-full w-full object-cover"
                      src={avatar}
                      alt="Avatar Preview"
                    />
                  ) : (
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm8 14a4 4 0 100-8 4 4 0 000 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer ml-3 font-medium text-black hover:text-white hover:bg-black focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 "
                >
                  Upload Image
                </label>
                <input
                  id="file-upload"
                  name="avatar"
                  type="file"
                  onChange={handleAvatarChange}
                  className="sr-only"
                />
              </div>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 flex items-center">
                <button
                  type="button"
                  onClick={handleLocationClick}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Get Current Location
                </button>
                {location && (
                  <p className="mt-2 ml-2 text-sm text-gray-500">Current Location: {location}</p>
                )}
              </div>
            </div>
            {/* Map rendering */}
            {showMap ? (
              <div className="mb-6">
                <iframe
                  title="Current Location Map"
                  className="w-full h-60 rounded-md"
                  src={`https://maps.google.com/maps?q=${location}&output=embed`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            {/* Add InterestDropdown */}
            <div>
              <InterestDropdown />
            </div>
            <div>
              <div className="flex items-center">
                <button
                  type="button"
                  className={`${
                    userType === "Mentor"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700"
                  } mr-4 px-4 py-2 rounded-md`}
                  onClick={() => setUserType("Mentor")}
                >
                  Mentor
                </button>
                <button
                  type="button"
                  className={`${
                    userType === "Mentee"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700"
                  } px-4 py-2 rounded-md`}
                  onClick={() => setUserType("Mentee")}
                >
                  Mentee
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Information &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorHub;
