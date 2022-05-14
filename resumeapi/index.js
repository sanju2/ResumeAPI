module.exports = function (context, req) {
    jsonData = {
        "basics": {
            "name": "Lasantha Sanjeewa Silva",
            "label": "DevOps&Cloud",
            "picture": "",
            "email": "lsanjeewa947@gmail.com",
            "website": "https://sanju2.github.io/",
            "summary": "Cloud & DevOps Enthusiast/AWS Community Builder",
            "location": {
                "address": "Ambalangoda/SriLanka",
                "city": "Ambalangoda",
                "countryCode": "80300"
            },
            "profiles": [{
                "network": "Twitter",
                "username": "LasanthaSilva96",
                "url": "https://twitter.com/LasanthaSilva96"
            },
            {
                "network": "Linkedin",
                "username": "Lasantha Sanjeewa Silva",
                "url": "https://www.linkedin.com/in/lasanthasilva/"
            },
            {
                "network": "dev.to",
                "username": "lasanthasilva",
                "url": "https://dev.to/lasanthasilva"
            },
            {
                "network": "medium",
                "username": "lsanjeewa947",
                "url": "https://medium.com/@lsanjeewa947"
            },
            {
                "network": "hashnode",
                "username": "LasanthaSilva",
                "url": "https://lasanthasilva.hashnode.dev/"
            },
            {
                "network": "GitHub",
                "username": "sanju2",
                "url": "https://github.com/sanju2"
            }]
        },
        "work": [{
            "company": "Calcey Technologies",
            "position": "Associate DevOps Engineer",
            "startDate": "2021-09-21",
            "endDate": "2022-03-31",
            "summary": "Work with AWS & CI/CD",
        }, {
            "company": "LOLC Technologies Ltd",
            "position": "LOLC TECHNOLOGIES LTD",
            "startDate": "2021-01-06",
            "endDate": "2021-07-05",
            "summary": "Work with OCI & CI/CD",
        }],
        "education": [{
            "institution": "Uva Wellassa University of SriLanka",
            "area": "Computer Science",
            "studyType": "Bachelor Degree",
            "startDate": "2017-01-21",
            "endDate": "2022-03-31",
        }],
        "Extra-Curricular-Activities": [{
            "title": "AWS Community Builder",
            "date": "2022-03-05",
            "awarder": "AWS",
        },
        {
            "title": "Postman Student Expert",
            "date": "2022-04-11",
            "awarder": "Postman",
        }
        ],
        "skills": [
            {
                "name": "AWS",
                "level": "Intermediate",
                "keywords": [
                    "DevOps",
                    "Lambda",
                    "EC2",
                    "S3"
                ]
            },
            {
                "name": "Azure",
                "level": "Beginner",
                "keywords": [
                    "Azure VM",
                    "Storage"
                ]
            },
            {
                "name": "Docker",
                "level": "Intermediate",
                "keywords": [
                    "Containers",
                    "Docker-Compose"
                ]
            }
        ],
        "interests": [{
            "name": "Tech Blogging",
            "keywords": [
                "Article Writing",
                "DevSecOps"
            ]
        }]
    }

    context.res = {
        body: JSON.stringify(jsonData, null, 2)
    };
    context.done();
};