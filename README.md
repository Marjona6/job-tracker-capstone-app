# JobGet: Find your dream job!

Interactive full-stack web app to organize your job search. Created as a Node.js capstone project for the Thinkful full-stack web development course ([https://www.thinkful.com](https://www.thinkful.com)).

## Screenshots
Desktop:

![Desktop](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-screenshot-01.png)
![Desktop](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-screenshot-02.png)
![Desktop](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-screenshot-03.png)
![Desktop](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-screenshot-04.png)
![Desktop](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-screenshot-05.png)

Mobile:

![Mobile](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-iphone-screenshot-00.jpg)
![Mobile](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-iphone-screenshot-01.jpg)
![Mobile](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-iphone-screenshot-02.jpg)
![Mobile](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-iphone-screenshot-03.jpg)
![Mobile](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-iphone-screenshot-04.jpg)
![Mobile](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/jobget-iphone-screenshot-05.jpg)


## Use Case
This app helps job seekers organize and track their job leads and applications as they search for their perfect job.

## Initial UX
![Wireframe](https://raw.githubusercontent.com/Marjona6/job-get-node-capstone/master/public/img/wireframe-01.jpg)

## Working Prototype
You can access a working prototype of the app at [https://job-get.herokuapp.com](https://job-get.herokuapp.com).

## Functionality
This app is based on the concept of a [funnel system](https://timsstrategy.com/how-to-create-a-job-search-funnel/) as a strategy for organizing a job search. With this app, users can keep their job searches organized from the initial stage of identifying a new lead through six funnel stages:
* New Leads
* Qualified Leads
* Contact/Apply
* Interview
* Offer
* Negotiate

Users create a username and password that is used to sign in and to save and access their personal job leads. As job leads progress through the funnel stages, users can push their job leads along in the app to track the current status of each lead. Users can update information in their job leads or delete them entirely at any stage of the process.

Information that can be added to a job lead includes:
* Position title
* Company name
* Company overview
* Company size
* Position location
* Salary/benefit information
* Job description
* Date of application
* Contact name
* Contact email
* Application materials required (e.g., CV, resume, cover letter)
* Interview date
* Interview follow-up
* Source of lead
* Notes
* Overall desirability rating

## Technical
This app is built using HTML, CSS, JavaScript, jQuery, and Node.js.

Usernames, encrypted passwords (encrypted using salted hashing with [bcrypt.js](https://www.npmjs.com/package/bcryptjs)), and job lead information are stored and accessed from an [mLab](https://mlab.com) database.

Other technologies used include MongoDB, Mongoose, Passport, Express, Mocha, and Chai.

The app is designed to be responsive across desktop, tablet, and mobile platforms.

## Development Roadmap
This app was built for use in my own job search, but I hope other job seekers will find value in it as well. I hope to continually improve the app for a better user experience and a more pleasant job search for all users.

Additional enhancements to the app are expected to include:
* Password reset capability.
* Enhanced security by sending AJAX requests including usernames through the back end only.
* Improved username and password validation to ensure that:
  * users cannot use an email address that has already been signed up
  * users see an "incorrect password" message if their usernames are correct but passwords are incorrect (they currently see a generic "user does not exist, please sign up" message)
  * users must enter a username in email format
  * passwords must be of at least a minimum length.
* Improved testing.
* Integration with an automated email service to allow users to receive information and updates regarding the app or job searches in general.
* Integration with a browser extension (yet to be built) that allows users to import data from job postings directly into their JobGet account.
* Allowing users to customize the categories of information they wish to include for their job leads; for example, including two interview stages instead of one.
* Adding drag-and-drop functionality to job leads to move them from one funnel stage to another.
* Fixing bugs and responding to user feedback to make finding your dream job an even better experience.