const blogs_items = [
    {
        id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, rem!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Eric Lau"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quas?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Ben Simmons"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, repudiandae?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, provident!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
       author: "Kevin Clarcson"
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fuga!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptas!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rem!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestiae?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        id: 10,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ratione.",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        author: "Kevin Clarcson"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quam!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, rem!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quas?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, repudiandae?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, provident!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, possimus!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fuga!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptas!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, rem!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestiae?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ratione.",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam?",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quam!",
        date: "15.06.2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi culpa facere illum ipsa magnam quidem repellendus sapiente tempore temporibus tenetur, vel, voluptate. Accusamus ad cumque deserunt dolor earum est ex excepturi explicabo in inventore laboriosam laborum libero maiores necessitatibus optio perferendis possimus quisquam, reiciendis sequi, tempore unde veniam.",
        like: false
    }
];
export {blogs_items};