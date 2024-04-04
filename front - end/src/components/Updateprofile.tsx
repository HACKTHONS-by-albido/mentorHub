'use client'
import Image from "next/image";

import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface Skill {
  name: string;
  percentage: string;
}


const InterestDropdown: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	const [showSelector, setShowSelector] = useState<boolean>(false);
	const [selected, setSelected] = useState<number[]>([]);
	const [options, setOptions] = useState([
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
	  <div className="relative max-w-sm   text-xs">
		  <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
		  Select your interests
				</label>
		<div className="bg-white rounded-md p-2 relative flex flex-col gap-1 ">
		<div className="">
		
		<input
		  type="text"
		  value={search}
		  onChange={(e) => setSearch(e.target.value)}
		  placeholder="Search"
		  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
		  onFocus={() => setShowSelector(true)}
		  onBlur={() => setTimeout(goSearch, 200)} 
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
			<div className="flex gap-1 flex-wrap">
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
		  </div>
		
		</div>
	  </div>
	);
  };
  

const Updateprofile = () => {
        const [connect,setConnect]=useState(null)
        const [link, setLink] = useState('');

        const handleConnect = (index:any) => {
            setConnect(index);
            setLink('');
        };
        const handleSave = () => {
            setConnect(null);
        };
    

        const social=[
            {
                name:"Facebook",
                icon:<FaFacebookF /> 

            },
            {
                name:"Github",
                icon:<FaGithub/>

            },
            {
                name:"Instagram",
                icon:<FaInstagram />

            }
        ]
	

		const [skills, setSkills] = useState<Skill[]>([]);
		const [skillName, setSkillName] = useState<string>('');
		const [skillPercentage, setSkillPercentage] = useState<string>('');
		const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	  
		const handleAddSkill = (): void => {
		  if (skillName.trim() !== '' && skillPercentage.trim() !== '') {
			const newSkill: Skill = {
			  name: skillName,
			  percentage: skillPercentage
			};
			setSkills([...skills, newSkill]);
			setSkillName('');
			setSkillPercentage('');
			setIsModalOpen(false); // Close the modal after adding the skill
		  }
		};
	  
  return ( 
  <div>
<div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900"
>
	<div className="mb-4 col-span-full xl:mb-2">
		
		<h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
			Update Profile
		</h1>
	</div>
	{/* <!-- Right Content --> */}
	<div className="col-span-full xl:col-auto">
		<div
			className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
		  <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default">
           
              <div className="p-7">
                <form action="#" >
                  <div className="mb-4 flex items-center gap-3">
                    
                   
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                  
                   
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <p>
                          <span className="text-primary">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                        <p>(max, 800 X 800px)</p>
                      </div>
                  </div>

                  <div className="flex justify-end gap-4.5 mt-4">
                    <button
                      className="flex justify-center rounded border mr-4 border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-blue-950 py-2 px-6 text-white font-medium text-gray hover:bg-opacity-95"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        
		</div>
		<div
			className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<h3 className="mb-4 text-xl font-semibold dark:text-white">
				Language & Skill
			</h3>
			<div className="mb-4">
				<label
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Select language</label>
				<select
					id="settings-language"
					name="countries"
					className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
				>
					<option>English (US)</option>
					<option>Italiano</option>
					<option>Français (France)</option>
					<option>正體字</option>
					<option>Español (España)</option>
					<option>Deutsch</option>
					<option>Português (Brasil)</option>
				</select>
			</div>
            
			
			<div>
				<button
					className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>Save all</button>
			</div>
			<InterestDropdown/>
		</div>
		<div
			className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<div className="flow-root">
				<h3 className="text-xl font-semibold dark:text-white">Social accounts</h3>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {social.map((item, index) => (
                    <li className="py-4" key={index}>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                                    {item.name} account
                                </span>
                                {connect !== index ? (
                                    <a href="#" className="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                                        www.abcd.com/themesberg
                                    </a>
                                ) : (
                                    <input
                                        type="text"
                                        id="link"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="url"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                        required
                                    />
                                )}
                            </div>
                            <div className="inline-flex items-center">
                                { connect !== index ? (
                                    <button
                                        className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={() => handleConnect(index)}
                                    >
                                        connect
                                    </button>
                                ) : (
                                    <button
                                        className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        onClick={handleSave}
                                    >
                                        save
                                    </button>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
				<div>
					<button
						className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Save all</button	>
				</div>
			</div>
		</div>
		
	</div>
	<div className="col-span-2">
		<div
			className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<h3 className="mb-4 text-xl font-semibold dark:text-white">
				General information
			</h3>
			<form action="#">
				<div className="grid grid-cols-6 gap-6">
					<div className="col-span-6 sm:col-span-3">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
						<input
							type="text"
							name="first-name"
							id="first-name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Bonnie"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last Name</label>
						<input
							type="text"
							name="last-name"
							id="last-name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Green"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Country</label>
						<input
							type="text"
							name="country"
							id="country"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="United States"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>City</label>
						<input
							type="text"
							name="city"
							id="city"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. San Francisco"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Address</label>
						<input
							type="text"
							name="address"
							id="address"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. California"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email</label>
						<input
							type="email"
							name="email"
							id="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="example@company.com"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone Number</label	>
						<input
							type="number"
							name="phone-number"
							id="phone-number"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. +(12)3456 789"
							required
						/>
					</div>
					
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Organization</label>
						<input
							type="text"
							name="organization"
							id="organization"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Company Name"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Role</label>
						<input
							type="text"
							name="role"
							id="role"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="React Developer"
							required
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Department</label>
						<input
							type="text"
							name="department"
							id="department"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Development"
							required
						/>
					</div>
					
					<div className="col-span-6 sm:col-full">
						<button
							className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							type="submit">Save all</button>
					</div>
				</div>
			</form>
		</div>
		
		<div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div>
        <button className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setIsModalOpen(true)}>
          Add skill
        </button>
      </div>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className="px-3 py-2 mb-3 mr-3 w-1/2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300">
            <p className="block text-base font-semibold text-gray-900 truncate">{skill.name}   : {skill.percentage}%</p>
          </div>
        ))}
      </div>
      {/* Modal for adding skills */}
      {isModalOpen && (
        <div className="modal flex gap-3 items-center max-[475px]:flex-col">
          <input
            type="text"
            placeholder="Skill Name"
			className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/2 max-[475px]:w-full p-2.5 "

            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Skill Percentage"
			className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/5 max-[475px]:w-1/2 p-2.5 "

            value={skillPercentage}
            onChange={(e) => setSkillPercentage(e.target.value)}
          />
          <button className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 " onClick={handleAddSkill}>Save</button>
          <button className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 " onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
	<div className="flex  gap-3 justify-end mb-6">
	<button
                      className="flex justify-center rounded border mr-4 border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:"
                      type="submit"
                    >
                      Cancel
                    </button>

	<button
                      className="flex justify-center rounded bg-blue-950 py-2 px-6 text-white font-medium text-gray hover:bg-opacity-95"
                      type="submit"
                    >
                      Save 
                    </button>
		
	</div>
	</div>
</div>
      
    </div>
     )
}

export default Updateprofile

