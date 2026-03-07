import { useState, useEffect } from "react";


const About = () => {
  const [userInfo,setUserInfo] = useState({})

  const fetchUserInfo = async () => {
    const url = "https://api.github.com/users/Mohan-1123";
    const data = await fetch(url);
    const json = await data.json();
    setUserInfo(json);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] bg-gray-100">
      <div className="w-80 border-2 border-gray-200 p-6 rounded-2xl shadow-lg bg-white flex flex-col items-center gap-3">
      <img src={userInfo.avatar_url} alt={userInfo.name} className="w-24 h-24 rounded-full border-4 border-orange-400 object-cover"/>
      <div className="text-center">
        <h1 className="text-xl font-bold text-gray-800">{userInfo.name}</h1>
        <p className="text-sm text-gray-500">i am a software developer</p>
      </div>
      <div className="flex gap-8 text-center mt-2">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400">Followers</p>
          <span className="text-lg font-bold text-gray-800">{userInfo.followers}</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400">Following</p>
          <span className="text-lg font-bold text-gray-800">{userInfo.following}</span>
        </div>
      </div>
      </div>
    </div>
  )
};

export default About;
