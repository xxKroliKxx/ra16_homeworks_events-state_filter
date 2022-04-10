import React from 'react';

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {projects} = this.props
        return (
            <div className={'project-list'}>
                {projects.map((project) => <img className={'project'} src={project.img}
                                                data-category={project.category}/>)}
            </div>
        )
    }
}