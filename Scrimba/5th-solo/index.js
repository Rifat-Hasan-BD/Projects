const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const feedContainer = document.getElementById("feed-container");
    let innerCode = "";

    for (let i = 0; i < posts.length; i++) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        innerCode +=`
            <div class="post">
                <section class="feed-header">
                    <img src="${posts[i].avatar}" alt="Avatar." class="post-person-img">
                    <section class="post-person-detail">
                        <h1 class="post-person-name">${posts[i].name}</h1>
                        <p class="post-person-location">${posts[i].location}</p>
                    </section>
                </section>
                <img src="${posts[i].post}" alt="posted image" class="feed-content">
                <section class="feed-footer">
                    <section>
                        <img src="./images/icon-heart.png" alt="Love icon." class="reaction-icon">
                        <img src="./images/icon-comment.png" alt="Comment icon." class="reaction-icon">
                        <img src="./images/icon-dm.png" alt="DM icon." class="reaction-icon">
                    </section>
                    <h2 class="reaction-count">${posts[i].likes} likes</h2>
                    <P><span class="reaction-count" id="user-name">${posts[i].username}</span> just took a few mushrooms lol</P>
                </section>
            </div>
        `;
    }
    feedContainer.innerHTML = innerCode;
});