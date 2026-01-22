import "./update.scss";
import React, { useState } from 'react'
import { makeRequest } from "../../axios";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({setOpenUpdate, user}) => {
  const [cover, setCover] = useState(null)
  const [profile, setProfile] = useState(null)
  const [texts, setTexts] = useState({
    name: "",
    city:"",
    website:"",
  });

  const upload = async (file) =>{
    try {
        const  formData = new FormData();
        formData.append("file", file);
        const res = await makeRequest.post("/upload", formData);
        return res.data
    } catch (error) {
        console.log(error)
    }
  }
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (user)=>{
    return makeRequest.put("/users", user);
    },
    onSuccess: () => {
        queryClient.invalidateQueries("user")
    }
  })
  const handleSubmit = async (e) =>{
    e.preventDefault()
    let coverUrl;
    let profileUrl;

    coverUrl = cover ?  await upload(cover): user.coverPic;
    profileUrl = profile ?  await upload(profile): user.profilePic;
    
    mutation.mutate({...texts, coverPic:coverUrl, profilePic:profileUrl})
    setOpenUpdate(false)

  }

  const handleChange = (e) =>{
    setTexts((prev) =>({...prev, [e.target.name]: [e.target.value]}));
  };
    
  return (
    <div className="update">
        <form >
        <h1>Update Your Profile</h1>
          <label htmlFor="cover">
                    <span>Cover Picture</span>
                    <input type="file" id="cover" onChange={e => setCover(e.target.files[0])} />
          </label>
          <label htmlFor="profile">
                    <span>Profile Picture</span>
                    <input type="file" id="profile"  onChange={e => setProfile(e.target.files[0])} />
          </label>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label>City</label>
            <input type="text" name="city" onChange={handleChange} />
            <label>Website</label>
            <input type="text" name="website"  onChange={handleChange}/>


            <button onClick={handleSubmit}>Update</button>
          <button className="close" onClick={() => setOpenUpdate(false)}>
              Close
          </button>
        </form>
    </div>
  )
}

export default Update