export const getBlogsData = async () => {
  const response = await fetch(
    `https://blogs-app-6153d-default-rtdb.firebaseio.com/blogs.json`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const tranformedBlogs = [];
  for (let key in data) {
    tranformedBlogs.push({
      id: key,
      ...data[key],
    });
  }
  return tranformedBlogs;
};

export const getSingleBlogData = async (BlogId) => {
  const response = await fetch(
    `https://blogs-app-6153d-default-rtdb.firebaseio.com/blogs/${BlogId}.json`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const singleBlog = {
    id: BlogId,
    ...data,
  };

  return singleBlog;
};

export const postBlogData = async (blogData) => {
  const response = await fetch(
    "https://blogs-app-6153d-default-rtdb.firebaseio.com/blogs.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return null;
};

export const getAllComments = async (blogId) => {
  const response = await fetch(
    `https://blogs-app-6153d-default-rtdb.firebaseio.com/comments/${blogId}.json`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const tranformedComments = [];
  for (let key in data) {
    tranformedComments.push({
      id: key,
      ...data[key],
    });
  }
  return tranformedComments;
};

export const addComments = async (commentData) => {
  const response = await fetch(
    `https://blogs-app-6153d-default-rtdb.firebaseio.com/comments/${commentData.blogId}.json`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData.commentData),
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return null;
};
