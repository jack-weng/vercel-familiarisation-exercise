export const questions = [
  {
    id: '1',
    title: 'From this list, rank your 5 most favourite and 5 least favourite tasks. Please provide reasons why each task is your most or least favourite.',
    link:
      'Task list',
    src: 'https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8',
    answer:
      `5 Most Favourite Tasks:<br />* Work with 3rd party partners to track down a tricky situation for a joint customer <br />* Work with the product team to develop a new feature based on feedback from customers<br />* Work with engineering teams during incidents and provide updates to internal and external stakeholders – Above 3 tasks are working with other teams, which is good way to learn from other aspects and gain an extensive knowledge of the product and technical field.  <br />* Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel – As dedicated CSE, I can enjoy work case by case and give more precise plan. Also during the process, more detail and tailored suggestions can be delivered according to the usage and requirement from key customer.<br />* Write and maintain support articles and docs pages – The best thing to get most use of our product is documentation in a systematic way. As the community grows up, more users can find solution as quick and easy as possible. It is a long-term support task and achievement.  And by the way I like to read articles and docs.<br /><br />5 Least Favourite Tasks:<br />* Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites – I am not very familiar with all those social media tools and platforms.<br />* Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems – I am more likely to enjoy listening rather than participating discussion immediately. Listening can give me clearer overview before delivering thoughtful ideas rather than blurting out.<br />* Help resolve billing issues for customers – I guess billing issues is more administrative. Since it is not a quite challenging task from technical perspect, I would like to list it in least five.    <br />* Analyze hundreds of support tickets to spot trends the product team can use – The product team’s job is identifying the trends and they certainly put more effort and opinion on product than others. <br />* Find and recruit teammates for the support team – Thinking of time zone, it seems quite hard to arrange.`,
    answerLink: '',
    answerSrc: '',
  },
  {
    id: '2',
    title: 'What do you want to learn, or do more of, at work?',
    link:
      '',
    src: '',
    answer:
      `As you probably saw on my profile and resume, I am graduated from Cyber Security Major and want to learn and work more related to security, expanding on my experience of Security and Analytics. From my previous ICT support engineer position, I've noticed that many companies concerned about security and privacy rather than functionalities, probably due to that most high-tech issues can be fulfilled nowadays. Some clients asked for security solutions and preferred those providers who can keep them safe.`,
    answerLink: '',
    answerSrc: '',
  },
  {
    id: '3',
    title: 'Which technical article, guide or lightning talk left the biggest positive impressionon you? Why? Ideally, this article would not be associated with Vercel or web development, by the way! Please provide links.',
    link:
      '',
    src: '',
    answer:
      'Recently I just read about an article/guide about cybersecurity career path. I think it is impressive because it lists all possible interview questions related to Cybersecurity Interview. It is quite helpful to identify the technology which the market is looking for in this area, and set a clear goal for both interviewers and interviewees. Also the guide provides a very comprehensive guide to cybersecurity field. <br /> <Link />',
    answerLink: 'https://brainstation.io/career-guides/cybersecurity-interview-questions',
    answerSrc: 'https://brainstation.io/career-guides/cybersecurity-interview-questions',
  },
  {
    id: '4',
    title: 'Add a temporary in-app redirect to your project, redirecting /hello-vercel (or any path - but be sure to tell us which!) to https://vercel.com',
    link:
      'Instruction of in-app redirect',
    src: 'https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects',
    answer:
      'Complete. Now you can be redirected to Vercel.com via <Link />',
    answerLink: '/hello-vercel.',
    answerSrc: '/hello-vercel',
  },
  {
    id: '5',
    title: 'A customer writes in to the Helpdesk asking "How do I do a redirect from /hello-vercel to https://vercel.com?" In a couple of paragraphs, how do you respond?',
    link:
      '',
    src: '',
    answer:
      `Hi there, thanks for your question! The Next.js supports different types of redirects. To achieve redirect with in-application path /hello-vercel, you can use either a next.config.js configuration file for Next.js projects, or a vercel.json configuration file for all other use cases. <br />next.config.js :<br /><Code>module.exports = {<br /><Code>  async redirects() {<br /><Code>    return [<br /><Code>      { <br /><Code>        source: '/hello-vercel',<br /><Code>        destination: 'https://vercel.com',<br /><Code>        permanent: false,<br /><Code>      }<br /><Code>    ]<br /><Code>  },<br /><Code>}<br /><br /><cite>Add redirects property into next.config.js for Next.js project<br />vercel.json :<br /><Code>{<br /><Code>  "redirects": [<br /><Code>    { <br /><Code>      "source": "/hello-vercel",<br /><Code>      "destination": "https://vercel.com", <br /><Code>      "permanent": true<br /><Code>    }<br /><Code>  ]<br /><Code>}<br /><br /><cite>Add redirects key and value into vercel.json for all other use cases<br />The permanent property is a boolean to toggle between permanent and temporary redirect (default true). When true, the status code is 308. When false the status code is 307.<br />In rare cases, you may need to assign a custom status code for older HTTP Clients to properly redirect. You can use the statusCode property instead of the permanent property, but not both. For example: <br /><Code>{<br /><Code>  "redirects": [<br /><Code>    { <br /><Code>      "source": "/hello-vercel",<br /><Code>      "destination": "https://vercel.com", <br /><Code>      "statusCode": 308<br /><Code>    }<br /><Code>  ]<br /><Code>}`,
    answerLink: '',
    answerSrc: '',
  },
  {
    id: '6',
    title: 'A customer writes in to the Helpdesk stating "I have a custom domain which I purchased at GoDaddy and I want to use it on my project". In a couple of paragraphs, how do you respond?',
    link:
      '',
    src: '',
    answer:
      'Hi there, thanks for your question! <br />For domain redirect, at first you need add your purchased domain to your Project Setting. The process is: log in Vercel and select your project -> Project Overview -> Settings -> Domains -> Add. <br />Next, edit your current domain in Domains setting. The process is: Settings -> Domains -> Edit -> Redirect to -> choose the purchased domain that you just added.',
    answerLink: '',
    answerSrc: '',
  },
  {
    id: '7',
    title: 'What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?',
    link:
      '',
    src: '',
    answer:
      'Question: My React <any other framework> project is already deployed in Heroku <any other platform>. If I want to switch to Vercel, what should I do? Is there any risk or cost?<br />Short-term: Suggest a CES to key customer which can look into the project and ensure their success using Vercel. <br />Long-term: Write support articles and document issues or risks for the future.',
    answerLink: '',
    answerSrc: '',
  },
  {
    id: '8',
    title: 'How could we improve or alter this familiarisation exercise?',
    link:
      '',
    src: '',
    answer:
      'For Question 1, it is quite impressive to have the listed tasks for better understanding of the position. I suggest that for some tasks we can provide a brief example or more detail to make them more comprehensive. For example, the task of ‘Scheduling time-off coverage and collaborating as part of a growing cohesive support team’ is not clear to tell the difference with another task ‘Manage a support team’, as it seems that the schedule is part of management.<br />For Question 3, I am not sure the reason to include it in the familiarization, regarding that it is not associated with Vercel or web development.<br />And since all questions are quite open, for some of them, it would be better to give some instruction like no more than 50 words, 2-3 sentences, suggested spend time and etc. <br />At last, we can also add a question related to where and how you learn Vercel during this exercise. It can give us some ideas about how people get most use of Vercel and thus we can put some effort on the approach to make it better for new users.',
    answerLink: '',
    answerSrc: '',
  },
]