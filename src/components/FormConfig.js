const formData=[
    {
        name:"age",
        lable:"Age ",
        type:"number",
        placeholder:"Enter Your Age ",

    },
     { 
        label: "Gender", 
        name: "gender", 
        type: "radio", 
        options: ["Male", "Female", "Other"] 
    },
        {
        name:"occasion",
        lable:"Occasion ",
        type:"text",
        placeholder:"Enter Your Occasion ",
        validationRules: { required: true, minLength: 2 },

    },
        {
        name:"budget",
        lable:"Budget ",
        type:"number",
        placeholder:"Enter Your Budget ",

    },
        {
        name:"interests",
        lable:"Interests ",
        type:"select",
       option:["Sports", "Books", "Fashion", "Gaming", "Music", "Art"]

    }
]