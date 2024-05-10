import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
//to upload a new video
export const uploadAllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}video`,reqBody);
}
//to get videos alredy inserted
export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}video`,"")
}
//to delete a specific video
export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
}
// add details to watch history 
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}history`,videoDetails);
}
// get all details of watch history
export const getHistory = async()=>{
    return await commonAPI('GET',`${serverURL}history`,"")
}
//to delete a specific history
export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
}
//to add category
export const addCategory = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}category`,reqBody);
}
// get all category
export const getAllCategory = async()=>{
    return await commonAPI('GET',`${serverURL}category`,"")
}

//Delete category
export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}category/${id}`,{})
}
// get video details with video id
export const getVideoDetails = async(id)=>{
    return await commonAPI('GET',`${serverURL}video/${id}`,"")
}
// update categoty with video details
export const updateCategory = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}