# cm-assessment

# posts
This repository contains the code for the Posts web Application

Steps to setup and run the code.
1. Clone the repo on your machine
2. run `npm i`
3. Copy the `.env.example` as `.env` in the root of the project
4. Adjust the `.env  values as per described in the sample file named `.env.example`
5. run `npm run dev` to start the development server

APIS:

## Heart rate data aggregator API: 

1. localhost:5000/api/v1/heart_rate_data Method POST

Sample Post Body => Json provided in the assignment


## Future Scope
1. Code for the `aggregateHeartRateData` function is not optimized. It can be optimized more to make it readableand maintainable.
2. There is no throttling in the API
3. There is no validation in place fro the data that is being uploaded to the API. We can improve that too.

Rest I am open for the suggestion so that I could learn more :) 

Thanks for reading it!