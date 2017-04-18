'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('generator-cp') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Component name',
      default: ''
    },
    {
      type: 'input',
      name: 'rootPrefix',
      message: 'Component prefix',
      default: ''
    },
    {
      type: 'confirm',
      name: 'createModule',
      message: 'Create module',
      default: false
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    var baseRoot = `src/${this.props.rootPrefix}${this.props.name}/`;
    var basePath = `${baseRoot}/${this.props.name}`;

    var state = {
          name: this.props.name,
          displayName: capitalizeFirstLetter(this.props.name)
    }

    this.fs.copyTpl(
        this.templatePath('component.ts'),
        this.destinationPath(`${basePath}.component.ts`), 
        state
    );

    this.fs.copyTpl(
        this.templatePath('component.pug'),
        this.destinationPath(`${basePath}.component.pug`), 
        state
    );

    this.fs.copyTpl(
        this.templatePath('component.scss'),
        this.destinationPath(`${basePath}.component.scss`), 
        state
    );

    if (!!this.props.createModule) {
      

      this.fs.copyTpl(
        this.templatePath('service.ts'),
        this.destinationPath(`${basePath}.service.ts`), 
        state
      );

      if (this.props.rootPrefix == '+') {
      this.fs.copyTpl(
        this.templatePath('routes.ts'),
        this.destinationPath(`${basePath}.routing.ts`), 
        state
      );

      this.fs.copyTpl(
        this.templatePath('en.ts'),
        this.destinationPath(`${baseRoot}/translations/en.ts`), 
        state
      );

      this.fs.copyTpl(
          this.templatePath('routing.module.ts'),
          this.destinationPath(`${basePath}.module.ts`), 
          state
        );

      } else {
        this.fs.copyTpl(
          this.templatePath('module.ts'),
          this.destinationPath(`${basePath}.module.ts`), 
          state
        );
      }

    }

    
  }

  install() {
    this.installDependencies();
  }
};
