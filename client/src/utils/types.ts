// export type BlogTabs = {
//   label: string;
//   value: string;
//   desc?: React.ElementType;
// }[];

// export type PostsSendData = Omit<
//   Post,
//   "__v" | "_id" | "createdAt" | "updatedAt"
// >;

// FILE UPLOAD RESPONSE
export type UploadResponse = {
  fileId: string;
  filePath: string;
  fileType: string;
  height: number;
  name: string;
  size: number;
  thumbnailUrl: string;
  url: string;
  width: number;
};

// ****** UPDATED TYPES OF CURRENT DATA  ******

// //GENERAL POST DATA REQUIRED
// export type PostField = {
//   title: string;
//   desc: string;
//   content: string;
//   category: string;
//   thumbnail: string;
//   status: string;
//   visibility: string;
//   userId: string;
//   username: string;
//   userProfile: string;
// };

// POST SEND FOR CURD
// export type PostCurd = {
//   category: string;
//   createdAt: string;
//   desc: string;
//   thumbnail: string;
//   status: string;
//   visibility: string;
//   content: string;
//   title: string;
//   updatedAt: string;
//   username: string;
//   userId: string;
//   userProfile: string;
//   __v?: number;
//   _id: string;
// };

//RECEIVED POST TYPE
export interface Post {
  _id: string;
  title: string;
  desc: string;
  content: string;
  thumbnail: string;
  username: string;
  category: string;
  status: string;
  userId: string;
  visibility: string;
  createdAt?: string;
  updatedAt?: string;
  userProfile: string;
}

// LOGIN TYPE
export type AuthSendData = {
  username: string;
  email: string;
  password: string;
  profilePic: string;
};

export type AuthLoginSendData = Omit<AuthSendData, "profilePic" | "username">;

// DATA RECEIVED FROM SERVER TYPE
export type AuthReceiveData = {
  user: SignInResponse;
  message: string;
};

type SignInResponse = {
  _id: string;
  username: string;
  email: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

//FILTER CONDITION TYPE
export type PostFilter = {
  category: string;
  limit?: number;
  page?: number;
  search?: string;
};

//FILTER DATA RESPONSE TYPE
export interface FilteredPost {
  message: string;
  posts: Post[];
  totalDoc: number;
  totalPages: number;
  category: string;
}

// ADMIN BLOG REQUEST INFO TYPE
export type AdminPostRequest = {
  id: string;
  status: string;
};

// RESPONSE OF LIST OF BLOG
export type PostReceived = Post[];

//ADD POST TYPE
export type SendPost = Omit<Post, "_id" | "createdAt" | "updatedAt">;

// // DATA TO UPDATE POST
// export type PostUpdate = Omit<Post, "createdAt" | "updatedAt">;

// ADD POST DATA IN SERVER
export type addPostData = {
  title: string;
  desc: string;
  content: string;
  category: string;
  username: string;
};

//SIGNUP RESPONSE
export type SignUpResponse = {
  message: string;
};
