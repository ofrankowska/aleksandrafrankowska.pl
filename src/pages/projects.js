import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import ProjectDescription from 'components/molecules/ProjectDescription/ProjectDescription';
import phonePersonalDashboard from 'assets/images/phone-personal-dashboard.svg';
import computerPersonalDashboard from 'assets/images/computer-personal-dashboard.png';
import phoneHabitTracker from 'assets/images/phone-habit-tracker.svg';
import computerHabitTracker from 'assets/images/computer-habit-tracker.png';
import computerPortfolio from 'assets/images/computer-portfolio.png';
import phonePortfolio from 'assets/images/phone-portfolio.svg';

const projects = [
  {
    title: 'Personal Daschboard',
    idea:
      'Personal Dashboard featuring weather, to-do, focus of the day and inspirational quotes, complete with drag & drop, animations, route transitions, form validations, and more.',
    goal:
      'Building a complex project, putting a lot of knowledge I had gained into practise and learning a lot more in the process.',
    technologies:
      'React / React Router / react-transition-group /react-sortable-hoc / uuid / Material UI / Styled Components / OpenWeather API / Quotes Free API / CSS Animations / FontAwesome',
    demoURL: 'https://react-personal-dashboard.netlify.com/',
    repositoryURL: 'https://github.com/ofrankowska/react-dashboard',
    phoneSVG: phonePersonalDashboard,
    computerSVG: computerPersonalDashboard,
  },
  {
    title: 'Habit Tracker',
    idea:
      'Habit Tracker makes adopting new habits easier. It reminds you every day to complete activities that you want to become a part of your daily routine and keeps you motivated.',
    goal:
      'Becoming comfortable with JavaScript (especially ES6+ Features), working in the DOM without a library, implementing Local Storage and using Bootstrap.',
    technologies: 'JavaScript / Bootstrap / CSS Animations / FontAwesome',
    demoURL: 'https://ofrankowska.github.io/habit-tracker',
    repositoryURL: 'https://github.com/ofrankowska/habit-tracker',
    phoneSVG: phoneHabitTracker,
    computerSVG: computerHabitTracker,
  },
  {
    title: 'Portfolio',
    idea:
      'Creating an intuitive, minimalistic and fast website that makes it easy to find information about me.',
    goal:
      'Doing everything from scratch - staring with the design in Figma, then development in Gatsby using Styled Components and follwing Atomic Design principles, complete with deployment to Netlify and custom domain set up.',
    technologies: 'Figma / Gatsby / Styled Components / FontAwesome',
    repositoryURL: 'https://github.com/ofrankowska/aleksandrafrankowska.pl',
    phoneSVG: phonePortfolio,
    computerSVG: computerPortfolio,
  },
];

const ProjectsPage = () => (
  <ContentTemplate>
    <div>
      {projects.map(
        ({
          title,
          idea,
          goal,
          technologies,
          demoURL,
          repositoryURL,
          phoneSVG,
          computerSVG,
        }) => (
          <ProjectDescription
            key={title}
            title={title}
            idea={idea}
            goal={goal}
            technologies={technologies}
            repositoryURL={repositoryURL}
            demoURL={demoURL}
            phoneSVG={phoneSVG}
            computerSVG={computerSVG}
          />
        )
      )}
    </div>
  </ContentTemplate>
);

export default ProjectsPage;
