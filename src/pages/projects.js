import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import ProjectDescription from 'components/ProjectDescription/ProjectDescription';

const projects = [
  {
    title: 'Personal Daschboard',
    idea:
      'Creating a Personal Dashboard similar to "Momentum" extention avaiable on Chrome and Firefox.',
    goal:
      'Building the biggest project I have ever done by myself, using the knowledge I had gained during online courses and putting it into practise while also learning new things in the process.',
    technologies:
      'React / react-transition-group /react-sortable-hoc / Material UI / OpenWeather API / Quotes Free API / FontAwesome',
    demoURL: '',
    repositoryURL: 'https://github.com/ofrankowska/react-dashboardr',
  },
  {
    title: 'Habit Tracker',
    idea:
      "Let's face it, adopting new habits is pretty challenging but this Habit Tracker will make it easier for you. It will remind you every day to act. Completing your entries will feel rewarding and encourage you to keep going.",
    goal:
      'Becoming comfortable with JavaScript (especially ES6+ Features), working in the DOM without a library and implementing Local Storage.',
    technologies:
      'JavaScript / Bootstrap / CSS Animations / FontAwesome / uuid',
    demoURL: 'https://ofrankowska.github.io/habit-tracke',
    repositoryURL: 'https://github.com/ofrankowska/habit-tracker',
  },
  {
    title: 'Portofolio',
    idea:
      'Creating an intuitive, minimalistic website that makes it easy to find what you want and is pretty nice to look at.',
    goal:
      'Creating a website from scratch - staring with the design in Figma, development in Gatsby and deployment with Netlify.',
    technologies: 'Gatsby / React / Figma',
    repositoryURL: 'https://github.com/ofrankowska/aleksandrafrankowska.pl',
  },
];

const ProjectsPage = () => (
  <ContentTemplate>
    <div>
      {projects.map(
        ({ title, idea, goal, technologies, demoURL, repositoryURL }) => (
          <ProjectDescription
            key={title}
            title={title}
            idea={idea}
            goal={goal}
            technologies={technologies}
            repositoryURL={repositoryURL}
            demoURL={demoURL}
          />
        )
      )}
    </div>
  </ContentTemplate>
);

export default ProjectsPage;
