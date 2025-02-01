document.getElementById("post-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // // Get the input values
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    
    // // Create a new blog post element
    const postSection = document.getElementById("blog-posts");
    const newPost = document.createElement("article");
    newPost.classList.add("post");

    // Get the current date for the blog post
    const currentDate = new Date().toLocaleDateString();

    // Add content to the new post
    newPost.innerHTML = `
        <h2>${title}</h2>
        <p class="date">${currentDate}</p>
        <p class="content">${content}</p>
        <button class="btn-deletePost" id="deletePost">Delete</button>
    `;

    // Append the new post to the blog posts section
    postSection.appendChild(newPost);

    const deleteButton = newPost.querySelector(".btn-deletePost");
    deleteButton.addEventListener('click', function () {
        postSection.removeChild(newPost);
    });


    // Clear the form after submission
    document.getElementById("post-title").value = '';
    document.getElementById("post-content").value = '';
});
